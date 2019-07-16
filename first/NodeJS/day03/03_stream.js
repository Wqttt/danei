const fs=require('fs');
/*//创建可读流
var readStream=fs.createReadStream('3.txt');
//设置编码为utf8
readStream.setEncoding('utf8');
//事件：监听是否有数据流
//chunk分段传播
readStream.on('data',function(chunk){
	console.log(1);
});
//事件
readStream.on('end',function(){
	console.log('文件读取结束');
});*/
//使用可读流和可写流
//创建可读流
var readStream=fs.createReadStream('2.txt');
//创建可写流
var writeStream=fs.createWriteStream('5.txt');
//把可读流中的数据通过管道写入到5.txt
readStream.pipe(writeStream);