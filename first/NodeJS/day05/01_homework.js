//练习：创建web服务器，向服务器请求查询生日的html文件,输入身份证号，点击提交，响应生日和性别到浏览器端
const express=require('express');
const querystring=require('querystring');
var app=express();
app.listen(8080);
app.get('/idcard',function(req,res){
	res.sendFile(__dirname+'/01_idcard.html');
});
/*app.get('/myidcard',function(req,res){
	//获取get请求的数据
	var obj=req.query;
	console.log(obj);
	var id=obj.id;
	console.log(id);
	res.send(`
		${id.substr(6,4)}年
		${id.substr(10,2)}月
		${id.substr(12,2)}日
		性别${id.substr(-2,1)%2===1?'男':'女'}
	`);
});*/
app.post('/myidcard',function(req,res){
	//获取post请求的数据
	//监听是否接收了数据
	req.on('data',function(chunk){
		//回调函数来获取数据
		//chunk 接收的数据
		var str=chunk.toString();
		//将查询字符串格式化为对象
		var obj=querystring.parse(str);
		//console.log(obj);
		var id=obj.id;
		//console.log(id);
		res.send(`
		${id.substr(6,4)}年
		${id.substr(10,2)}月
		${id.substr(12,2)}日
		性别${id.substr(-2,1)%2===1?'男':'女'}
	`);
	});
});