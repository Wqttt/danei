//练习：创建web服务器，添加多个路由(/login 响应'这是登录页面'；/study  响应跳转到http://www.tmooc.cn;/reg 响应一个文件reg.html)
const express=require('express');
const querystring=require('querystring');
var app=express();
app.listen(8080);
/*app.get('/login',function(req,res){
	res.send('这是登录页面');
});*/
app.get('/study',function(req,res){
	res.redirect('http://www.tmooc.cn');
});
app.get('/reg',function(req,res){
	//console.log(__dirname);
	res.sendFile(__dirname+'/reg.html');
});
//根据表单的请求，添加对应的路由
//get请求通过查询字符串传递数据
app.get('/myreg',function(req,res){
	//获取get请求的数据
	console.log(req.query);
	//req对象
	//console.log(req.url);
	//console.log(req.method);
	//console.log(req.headers);
	res.send('注册成功,欢迎'+req.query.username+'使用');
});

//练习：添加路由，请求方法:get,请求的URL:/login,响应文件login.html
app.get('/login',function(req,res){
	res.sendFile(__dirname+'/login.html');
});
app.post('/mylogin',function(req,res){
	//获取post请求的数据
	//监听是否接收了数据
	req.on('data',function(chunk){
		//回调函数来获取数据
		//chunk 接收的数据
		var str=chunk.toString();
		//将查询字符串格式化为对象
		var obj=querystring.parse(str);
		console.log(obj);
	});
	res.send('登录成功，欢迎使用');
});

//使用路由传递
//获取传递的参数req.params
//url:/detail 方法:get
app.get('/detail/:lid',function(req,res){
	//获取路由传递的数据
	console.log(req.params);
	res.send('这是商品的详情');
});

//练习：创建购物车路由，请求方法:get,请求url:/shopping,传递商品的价格price和名称pname,接收传递的数据，并将数据响应到浏览器中
app.get('/shopping/:pname/:price',function(req,res){
	res.send(`
		商品名称：${req.params.pname}<br/>
		商品价格：${req.params.price}<br/>
	`);
});