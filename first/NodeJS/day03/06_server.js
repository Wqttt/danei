// 练习：创建web服务器，监听端口8081，接收浏览器的请求，根据请求，做出不同的响应 (/login 响应内容 this is login page;/reg 响应内容 this is reg page;/study 跳转到 http://www.tmooc.cn)以上都没有，响应内容 404 not found
const http=require('http');
//创建web服务器
var app=http.createServer();
//监听端口
app.listen(8081);
//接受浏览器的请求
app.on('request',function(req,res){
	if(req.url==='/login'){
		//响应登录
		res.write('this is login page\n');
	}else if(req.url==='/reg'){
		//响应注册
		res.write('this is reg page\n');
	}else if(req.url==='/study'){
		res.writeHead(302,{
		Location:'http://www.tmooc.cn'
	});
	}else{
		res.writeHead(404,{});
		res.write('404 not found\n');
	}
	//结束请求，并发送
	res.end('web1904');
});