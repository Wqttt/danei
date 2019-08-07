// 1.加载第三方模块
const express=require("express");
//mysql
const mysql=require("mysql");
//跨域
const cors=require("cors");
//session
const session=require("express-session");
// 2.配置数据库连接池
var pool=mysql.createPool({
  host:"127.0.0.1",//数据库的地址
  user:"root",//数据库的用户名
  password:"",//数据库的密码
  port:3306,//数据库的端口
  database:"xz",//数据库名
  connectionLimit:15 //连接数量
})
var server=express();
// 3.配置跨域模块
server.use(cors({
  //允许跨域访问程序地址列表
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true//请求验证
}))
// 4.配置session模块
server.use(session({
  secret:"128位字符串",//安全字符串
  resave:true,//请求时要更新数据
  saveUninitialized:true,//保存初始数据
}));
//4.1配置项目静态目录
server.use(express.static("public"));
//http://127.0.0.1:3000/01.jpg
//5.启动监听3000
server.listen(3000);
//功能一：完成用户登录操作
server.get("/login",(req,res)=>{
  //1.参数：获取网页传递两个数据 uname upwd
  //参数方式一：?uname=top&upwd=123 查询字符串
  //参数方式二：/tom/123
  var uname=req.query.uname;
  var upwd=req.query.upwd;
  //2.sql:查询sql语句
  //数据库 库名 表名 列名 小写字母
  var sql="SELECT id FROM xz_login WHERE uname=? AND upwd=md5(?)";
  //3.json:{code:1,msg:"登录成功"}
  pool.query(sql,[uname,upwd],(err,result)=>{
    //执行sql语句回调函数
    if(err) throw err;
    //判断
    if(result.length==0){
      res.send({code:-1,msg:"用户名或者密码有误"});
    }else{
      //登录成功
      //1.将登录成功凭据保存在session
      //result=[{id:1}]
      req.session.uid=result[0].id;
      console.log(req.session);
      //2.将成功消息发送到脚手架
      res.send({code:1,msg:"登录成功"})
    }
  })
});
//测试
//http://127.0.0.1:3000/login?uname=tom&upwd=123
//http://127.0.0.1:3000/login?uname=tom&upwd=121

//功能二：分页查询商品列表
// 1.接收请求方式 GET 请求地址 /product
server.get("/product",(req,res)=>{
  // 2.接收客户端的2个参数 pno页码 pageSize页大小
  var p=req.query.pno;
  var ps=req.query.pageSize;
  // 3.设置参数的默认值 pno:1 pageSize:4
  if(!p){
    p=1;
  }
  if(!ps){
    ps=4;
  }
  // 4.创建1个变量 offset 计算数据库偏移量
  var offset=(p-1)*ps;
  // 5.对pageSize转换整形? nodejs 报错
  ps=parseInt(ps);
  // 6.创建SQL语句
  var sql="SELECT lid,price,lname,img_url FROM xz_laptop LIMIT ?,?";
  // 7.通过连接池发送SQL语句
  pool.query(sql,[offset,ps],(err,result)=>{
    if(err) throw err;
  // 8.获取数据库返回的查询结果
  // 9.将查询结果发送到客户端
    res.send({code:1,msg:"查询成功",data:result});
  });
})

//添加购物车
//http://127.0.0.1:3000/addcart?lid=1&price=49&lname=phone
//登录成功
//http://127.0.0.1:3000/login?uname=tom&upwd=123

// 功能三：将指定商品加入购物车
// #此功能先行条件先登录
// 1.GET /addcart
server.get("/addcart",(req,res)=>{
  // 2.获取用户参数
  //2.1获取当前登录用户id值
  var uid=req.session.uid;
  //2.2如果当前用户没有登陆
  if(!uid){
    //2.3返回错误消息
    res.send({code:-1,msg:"请先登录"});
    return;
  }
  //2.4获取商品编号 商品价格 商品名称
  var lid=req.query.lid;
  var price=req.query.price;
  var lname=req.query.lname;
  // 3.查询指定的用户是否购买过此商品
  var sql="SELECT id FROM xz_cart WHERE uid=? AND lid=?";
  pool.query(sql,[uid,lid],(err,result)=>{
    if(err) throw err;
    // 4.没有购买过此商品添加
    var sql="";
    if(result.length==0){
      sql=`INSERT INTO xz_cart VALUES(null,${lid},${uid},1,'${lname}',${price})`;
    }else{
      sql=`UPDATE xz_cart SET count=count+1 WHERE uid=${uid} AND lid=${lid}`;
    }
    // 5.购买过此商品更新
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      console.log(result);
      res.send({code:1,msg:"添加成功"});
    })
    // 6.json
  })
})