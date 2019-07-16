const express=require("express");
const mysql=require("mysql");
//引入body-parser中间件
const bodyParser=require('body-parser');
var app=express();
app.listen(8080);
//创建连接池
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'xz',
	connectionLimit:20
});

//使用body-parser中间件
app.use(bodyParser.urlencoded({
	extended:false //不是第三方的qs模块，而是使用querystring模块
}));
app.get('/login',function(req,res){
	res.sendFile(__dirname+'/login.html');
});
app.post('/login',function(req,res){
	var obj=req.body;
	console.log(obj);
	if(!obj.uname){
		res.send({code:401,msg:'uname required'});
	}
	if(!obj.upwd){
		res.send({code:402,msg:'upwd required'});
	}
	//执行SQL语句
	pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],function(err,result){
		if(err) throw err;
		console.log(result);
		//判断数组长度是否大于0
		if(result.length>0){
			res.send({code:200,msg:'login success'});
		}else{
			res.send({code:301,msg:'login error'});
		}
	});
});