const express=require('express');
var querystring=require('querystring');
//引入body-parser中间件
const bodyParser=require('body-parser');
var app=express();
app.listen(8080);

//使用中间件，把所有的静态资源托管到public目录，如果浏览器端要请求某个文件，自动到public下寻找
//静态资源：html/css/客户端js/图像/视频...
app.use( express.static('files') );
app.use( express.static('public') );
//使用bodyParser中间件，将post请求的数据格式化为对象
app.use( bodyParser.urlencoded({
	extended:false//不使用第三方的qs模块，而是使用核心模块querystring
}) );

//练习：托管静态资源到public下，向服务器端请求03_login.html,点击提交，再次想服务器发请求post /losin 在服务器端获取提交的数据
app.post('/mylogin',function(req,res){
	//获取post请求的数据
	//1.3 req.body
	var obj=req.body;
	res.send(`
			用户名:${obj.uname}<br>
			密&nbsp;&nbsp;&nbsp;码:${obj.upwd}
	`);
	//监听是否有post请求数据
	/*req.on('data',function(chunk){
		//回调函数来获取数据
		//chunk 接收的数据
		var str=chunk.toString();
		//将查询字符串格式化为对象
		var obj=querystring.parse(str);
		console.log(obj);
		res.send(`
			用户名:${obj.uname}<br>
			密&nbsp;&nbsp;&nbsp;码:${obj.upwd}
		`);
	})*/
});