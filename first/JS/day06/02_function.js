//匿名函数
/*
function(){
	
}
*/
//粗行间函数——函数声明
function fun(){
}
//创建函数——函数表达式
//fn就是函数的名称
var fn=function(){
	console.log(1);
}
//调用函数
//fn();
console.log(fn);
console.log(fun);

console.log('练习：使用函数表达式来创建函数，计算任意两个数字之间所有整数的和，并返回结果:');
var getSum=function(n1,n2){
	for(var i=n1,sum=0;i<=n2;i++){
		sum+=i;
	}
	return sum;
}
console.log( getSum(50,100) );