//引入fs
const fs=require('fs');
//创建目录
//异步
/*fs.mkdir('mydir',function(err){
	if(err)
		throw err;
	console.log('目录创建成功');
});
//同步
fs.mkdirSync('mydir2');

//练习：使用同步和异步移除mydir和mydir2
//同步
//fs.rmdirSync('mydir');
//异步
fs.rmdir('mydir2',function(err){
	  if(err) throw err;
	  console.log('目录移出成功');
});*/

//读取目录
//异步
fs.readdir('05',function(err,res){
	if(err)
		throw err;
	console.log(res);
});