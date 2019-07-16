const fs=require('fs');
//创建文件，并写入hello
/*fs.writeFile('1.txt','hello',function(err){
	console.log(err);
	console.log('写入成功');
});

//练习：使用追加写入数据abcde到文件2.txt,运行多次。appendFile(fd,data,callback)
fs.appendFile('2.txt','abcde\n',function(err){
	console.log(err);
	console.log('追加写入成功');
});

//练习：将一组数据写入到文件3.txt
var arr=['biubiu','平凡而伟大','到南方去','到北方去'];
//遍历数组获取每个元素，把每个元素写入
for(var i=0;i<arr.length;i++){
	//写入
	fs.appendFile('3.txt',arr[i]+'\n',function(err){
		console.log(err);
		console.log('写入成功');
	});
	//同步
	fs.appendFileSync('4.txt',arr[i]+'\n');
}
//读取文件
fs.readFile('3.txt',function(err,data){
	console.log(data.toString());
});
//删除文件
fs.unlink('1.txt',function(err){
	if(err) throw err;
	console.log('删除成功');
});
//查看文件/目录是否存在
var res=fs.existsSync('2.txt');
//console.log(res);
//如果文件存在，删除
if(res){
	fs.unlinkSync('2.txt');
	console.log('删除成功');
}
//如果03目录存在，删除该目录
//创建目录
fs.mkdirSync('03');
console.log('创建成功');
//判断目录是否存在
var res1=fs.existsSync('03')
//如果存在，移除目录
if(res1){
	fs.rmdirSync('03');
	console.log('目录移除成功');
}*/
//综合在一起
if(fs.existsSync('03')){
	fs.rmdirSync('03');
	console.log('目录移除成功');
}else{
	console.log('该目录不存在');
}