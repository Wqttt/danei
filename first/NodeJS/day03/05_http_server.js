const http=require('http');
//创建web服务器
var app=http.createServer();
//监听端口
app.listen(8080);
//接收请求，并作出响应
//服务器监听浏览器的请求
app.on('request',function(req,res){
	//req 请求的对象
	//console.log(req.method);//请求的方法
	//console.log(req.url);//请求的URL
	if(req.url==='/login'){
		//响应登录
		res.write('请用户登录');
	}else if(req.url==='/regiser'){
		//响应注册
		res.write('请用户注册');
	}
	//console.log(req.headers);//请求头信息
	//res 响应的对象
	//设置响应的头信息
	res.writeHead(302,{
		server:'web1904',
		//Location:'http://www.tmooc.cn'
	});
	//设置响应的内容
	res.write('this is my first page\n');
	res.write('pagehello\n');
	//结束并发送
	res.end('web1904');
	//console.log('监听到一个请求');
});