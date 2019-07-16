const express=require('express');
var app=express();
app.listen(8080);
app.get('/login',function(req,res){
	res.sendFile(__dirname+'/01_idcard.html');
});
//在中间件中判断表单中是否输入了值
app.get('/myidcard',function(req,res,next){
	//获取浏览器请求的数据
	var obj=req.query;
	console.log(obj);
	//判断身份证号码是否为空
	if(!obj.id){
		res.send('身份证号码不能为空');
	}else if(obj.id!=18){
		res.send('请输入正确的身份证号码');
	}else{
		//否则不为空，继续执行下一个中间件或者路由
		next();
	}
});

app.get('/myidcard',function(req,res){
	res.send('这是服务器端响应的结果');
});