const express=require('express');
const mysql=require('mysql');
var app=express();
app.listen(8080);

//托管静态资源到public
app.use( express.static('public') );
//创建连接池
var pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:20
});

//根据请求创建对应的路由
app.get('/add',function(req,res){
  //1.获取数据
  var obj=req.query;
  //console.log(obj);
  //2.执行SQL语句
  pool.query('INSERT INTO emp SET ?',[obj],function(err,result){
    if(err) throw err;
    console.log(result);
	//3.作出响应
    if(result.affectedRows>0){
	  res.send('添加成功');
	}
  }); 
});

