//练习：使用http模块，创建web服务器，接收浏览器的请求，根据请求做出不同的响应（/index 响应内容 this is homepage;/login 响应内容 <h2>please login</h2>;/ 跳转到 /index;其它 响应 404 not found）
const http=require('http');
const fs=require('fs');
//引入zlib压缩模块
const zlib=require('zlib');
var app=http.createServer();
app.listen(8080);
app.on('request',function(req,res){
	if(req.url==='/index'){
		res.write('this is homepage');
		res.end();
	}else if(req.url==='/login'){
		res.writeHead(200,{
			//默认文件类型 纯文本 text/plain
			'Content-type':'text/html'
		});
		res.write('<h2>please login</h2>');
		//res.write('<html><h2>please login</h2></html>');
		res.end();
	}else if(req.url==='/'){
		res.writeHead(302,{
			Location:'/index'
		});
		res.end();
	}else if(req.url==='/list'){
		//读取文件
		//var data=fs.readFileSync('demo.html');
		res.writeHead(200,{
			'Content-type':'text/html',
			//设置内容的压缩类型
			'Content-Encoding':'gzip'
		});
		//res.write(data);
		//创建文件读取流，然后进行压缩，把压缩的结果发送给浏览器
		//创建gzip压缩
		var gzip=zlib.createGzip();
		fs.createReadStream('demo.html').pipe(gzip).pipe(res);
	}else{
		res.writeHead(404,{});
		res.write('404 not found');
		res.end();
	}
	//res.end();//流中不能用end
});