/*console.log('hello');
console.log('world');
console.log('javascript');

//创建函数
function sayHi(){
	console.log('hi');
    console.log('world');
	console.log('nodejs');
}
//调用函数：执行函数体中代码
sayHi();
sayHi();
sayHi();*/

//练习：创建函数，封装计算1-100之间所有整数的和并打印出现；调用3次。
function mathInt(){
	for(var i=0,sum=0;i<=100;i++){
		sum+=i;
	}
	console.log(sum);
}
//mathInt();
//mathInt();
//mathInt();

//练习：创建函数，封装两个数字相加的和；调用多次
function sum(){
	var i=1,j=2;
	var sum=i+j;
	console.log(sum);
}
sum();
sum();
sum();
sum();
sum();