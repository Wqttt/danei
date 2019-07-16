/*//循环打印10次'hello'
//0~9
var i=0;
while(i<10){//循环条件
	//循环体
	//console.log('hello');
	//console.log(i);
	//i变化起来
	i++;
}

//练习：循环打印11~20之间的所有整数
var n=11;
while(n<=20){
	console.log(n);
	n++;
}
//结束循环的时候，n的值为21
console.log('结束时n的值为'+n);

//练习：打印40 38 36 34 32 30
var a=40;
while(a>=30){
	console.log(a);
	a-=2;
}
console.log('结束时a的值为'+a);

//练习：打印1~100之间所有的奇数
//判断是否为奇数
var b=1;
while(b<=100){
	if(b%2===1){
		console.log(b);
	}
	b++;
}

//练习：计算1~100之间所有整数的和
//需要准备变量并初始化为0，来保存所有的整数，每次产生的整数都加到变量中
var c=1;
//声明变量，用来保存所有整数的和
var sum=0;
while(c<=100){
	//c代表1~100之间所有整数
	//把c加到sum中，sum在原来基础上加i
	sum+=c;
	c++;
}
console.log('1~100之间所有整数的和为'+sum);*/

//练习：计算1~100之间所有偶数的和
var d=1;
var total=0;
while(d<=100){
	//判断d是否为偶数，如果是加到sum中
	if(d%2===0){
		total+=d;
	}
	d++;
}
console.log('1~100之间所有偶数的和为'+total);