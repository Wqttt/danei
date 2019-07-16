//使用http模块，创建web服务器，接收浏览器的请求，根据请求做出不同的响应（/index 响应内容 this is homepage;/login 响应内容 <h2>please login</h2>;/ 跳转到 /index;其它 响应 404 not found）
//引用http模块
var http=require("http");
//创建web服务器
var app=http.createServer();
app.listen(8080);
app.get('request',function(req,res){
	if(req.url==='/index'){
		res.write("this is homepage");
		res.end();
	}else if(req.url==='/login'){
		res.write("<h2>please login</h2>");
		res.end();
	}
});
