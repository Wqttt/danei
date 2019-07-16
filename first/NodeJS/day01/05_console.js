global.console.log(1);//日志
console.info(2);//消息
console.warn(3);//警告
console.error(4);//错误

console.time('for');//开始计时
//循环
for(var i=1;i<=1000000;i++){
}
console.timeEnd('for');

//练习：查看for/while/do-while循环相同次数的耗时情况。
console.time('while')
var i=1;
while(i<=1000000){
	i++;
}
console.timeEnd('while');
	
console.time('do-while')
var i=1;
do{
	i++;
}while(i<=1000000);
console.timeEnd('do-while');