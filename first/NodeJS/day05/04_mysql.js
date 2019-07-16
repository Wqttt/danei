//引入mysql模块
const mysql=require('mysql');
//创建连接对象
var connection=mysql.createConnection({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'tedu'//连接后要使用的数据库
});
//建立连接
connection.connect();

//执行sql语句
connection.query('SELECT * FROM emp WHERE eid=3',function(err,result){
	if(err) throw err;
	//console.log(err);
	//result是SQL语句的执行结果
	console.log(result);
});

//修改和插入数据
connection.query(`UPDATE emp SET sex=1,birthday='1992-3-3' WHERE eid=2`,function(err,result){
	if(err) throw err;
	console.log(result);
});
connection.query(`INSERT INTO emp VALUES(NULL,'tom',1,'1995-5-2',6500,30)`,function(err,result){
	if(err) throw err;
	console.log(result);
});

//关闭连接
connection.end();

