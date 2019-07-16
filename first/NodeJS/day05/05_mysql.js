const mysql=require('mysql');
//创建连接池对象
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:15//设置连接池的大小
});
//执行SQL语句
pool.query('SELECT * FROM emp',function(err,result){
	if(err) throw err;
	console.log(result);
});

//练习：使用连接池中的连接向员工表插入数据
const mysql=require('mysql');
//创建连接池
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:15//设置连接池的大小
});
//插入数据
pool.query(`INSERT INTO emp VALUES(?,?,?,?,?,?)`,[null,'anna',0,'1998-10-20',8500,10],function(err,result){
	if(err) throw err;
	console.log(result);
});
//插入对象形式的数据
var obj={
	ename:'cruz',
	sex:1,
	birthday:'1997-5-8'
}
pool.query('INSERT INTO emp SET ?',[obj],function(err,result){
	if(err) throw err;
	console.log(result);
});