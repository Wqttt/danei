//练习：创建web服务器
const express=require('express');
var app=express();
app.listen(8080);
//验证是否为空
app.use('/reg',function(req,res,next){
	//如果为空
	//res.send('用户名不能为空');
	console.log('用户名不为空');
	next();//继续下一个中间件或者路由
});
//验证是否可用
app.use('/reg',function(req,res,next){
	//如果不可用
	//res.send('用户名已被使用');
	console.log('用户名未被注册');
	next();//继续下一个中间件或者路由
});

//添加路由 方法:get,url:/reg 响应一行内容
app.get('/reg',function(req,res){
	res.send('注册成功');
});