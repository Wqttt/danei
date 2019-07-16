//练习：创建web服务器，托管资源到public目录下，创建文件add.html,点击提交，向服务器发请求get,/add,服务器端获取该数据
const express=require('express');
const mysql=require('mysql');
//1.1引入mysql模块
var app=express();
app.listen(8080);
//托管静态资源到public目录
app.use(express.static('public'));
//1.2创建连接池对象
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:15//设置连接池的大小
});

//根据请求创建路由
app.get('/add',function(req,res){
	//获取get请求的数据
	var obj=req.query;
	console.log(obj);
	//1.3将数据obj插入到数据库
	pool.query('INSERT INTO dept SET ?',[obj],function(err,result){
		if(err) throw err;
		console.log(result);
		//如果affectedRows大于0，说明添加成功
		if(result.affectedRows>0){
			res.send('部门添加成功');
		}
	});
	/*res.send(`
		部门添加成功<br>
		部门名称：${obj.dname}	
	`);*/
}); 