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
      res.send({code:1,msg:"登录成功"})
    }
  })
});
//测试
//http://127.0.0.1:3000/login?uname=tom&upwd=123