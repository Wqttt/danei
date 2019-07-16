//引入第三方的express
const express=require('express');
//创建web服务器
var app=express();
//监听端口
app.listen(8080);

//使用express根据请求作出响应————路由
//请求的方法：get  请求的URL：/login
app.get('/login',function(req,res){
	//响应浏览器一段内容
	res.send('<h2>这是登录页面</h2>');
	res.send('<h3>这是登录页面</h3>');
});
//练习：创建路由，请求方法:get,请求的URL:/reg,响应一个数字。2/200
app.get('/reg',function(req,res){
	//res.send(2);//范围错误，不存在状态码
	res.send( String(200) );//如果是数字直接加String()转为字符串
});
//练习：创建路由，请求方法:get,请求的URL:/study,响应的时候跳转到http://www.tmooc.cn
app.get('/study',function(req,res){
	//跳转
	res.redirect('http://www.tmooc.cn');
});
//练习：创建路由，请求方法:get,请求的URL:/demo,响应文件demo.html
app.get('/demo',function(req,res){
	//响应文件
	//__filename 当前文件的绝对路径和文件名称
	//__dirname 当前文件的绝对路径
	console.log(__dirname);
	res.sendFile(__dirname+'/demo.html');
});