//创建web服务器
const express=require('express');
const mysql=require('mysql');
var app=express();
app.listen(8080);

//托管静态资源
app.use(express.static('public'));

//创建连接池
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:15//设置连接池的大小
});

//将数据添加到tedu下的emp表中
app.get('/add',function(req,res){
	var obj=req.query;
	console.log(obj);
	//res.send('员工添加成功');
	//1.3将数据obj插入到数据库
	pool.query('INSERT INTO emp SET ?',[obj],function(err,result){
		if(err) throw err;
		console.log(result);
		//如果affectedRows大于0，说明添加成功
		if(result.affectedRows>0){
			res.send(`
				员工添加成功<br>
				姓名：${obj.ename}<br>
				性别：${obj.sex}<br>
				生日：${obj.birthday}<br>
				工资：${obj.salary}<br>
				部门：${obj.deptId}<br>
			`);
		}
	});
});