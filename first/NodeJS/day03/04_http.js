//引入http模块
const http=require('http');
//向服务器发请求
//get 请求方法
//参数1：请求的url
//参数2：回调函数，用于获取服务器端的响应
http.get('http://www.tmooc.com',function(res){
	//res 响应的对象
	//响应的状态码
	//console.log(res.statusCode);
	//事件：监听服务器是否有数据流
	res.on('data',function(chunk){
		//chunk就是服务器响应的数据
		//console.log(1);
		console.log(chunk.toString());
	});
});