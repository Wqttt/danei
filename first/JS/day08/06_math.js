/*console.log( Math.PI );//圆周率
// 5 - 10 absolute
console.log( Math.abs(3-10) );//绝对值
//parseInt()
console.log( Math.floor(3.8) );//向下取整
console.log( Math.ceil(3.8) );//向上取整
console.log( Math.round(3.4) );//四舍五入取整

console.log( Math.max(5,12,90,58) );//取最大值
console.log( Math.min(50,12,90,58) );//取最小值
console.log( Math.pow(3,2) );//val1的val2次幂
console.log( 3**2 );//val1的val2次幂*/
//console.log( Math.random(0,1) );//随机数

//练习：随机产生0~9之间的一个整数
//console.log( parseInt(Math.random()*10) );
var num=Math.floor(Math.random()*10);
//console.log(num);

//练习：创建数组，包含5个元素，随机取出两个元素
var arr=[52,47,85,65,32];
for(var i=0;i<2;i++){
	//取0~4的随机整数
	//随机数乘以5，向下取整
	var index=Math.floor(Math.random()*5);
	console.log(arr[index]);
}