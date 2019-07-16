//引入fs模块
const fs=require('fs');
/*//查看文件状态
//不会阻止后续代码的执行——异步
fs.stat('05',function(err,stats){
	//通过回调函数来获取文件的状态信息
	  //err 查看失败的错误信息
	  //console.log(err);
	  if(err) throw err;
	  //stats 文件的具体状态
	  console.log(stats);
	  //查看文件是否为目录形式
	  console.log(stats.isDirectory());
	  //查看文件是否为文件形式
	  console.log(stats.isFile());
});
*/

//会阻止后续代码的执行——同步
var s=fs.statSync('05');
console.log(s);

console.log('end');