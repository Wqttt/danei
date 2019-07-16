/*//打印1-10之间所有整数
var i=1;//初始值
do{
	//循环体
	console.log(i);
	i++;//增量
}while(i<=0);//循环条件

//打印20-10之间所有的整数
var i=20;
do{
	console.log(i);
	i--;
}while(i>=10);

//打印1-100之间所有奇数
var a=1;
do{
	//判断a是否为奇数
	if(a%2===1){
		console.log(a);
	}
	a++;
}while(a<=100);

//计算1-100之间所有能被7整除的数字的和
var b=1;
var sum=0;
do{
	if(b%7===0){
		sum+=b;
	}
	b++;
}while(b<=100);
console.log('1-100之间所有能被7整除的数字的和为'+sum);*/

//1-10的乘积
//10! 10*9*...*1
var i=1;
var num=1;
do{
	num*=i;
	i++;
}while(i<=10);
console.log('1-10的乘积为'+num);

//计算1-20之间，所有能被3整除的数字的乘积
var i=1;
var num=1;
do{
	if(i%3===0){
		num*=i;
	}
	i++;
}while(i<=20);
console.log('1-20之间，所有能被3整除的数字的乘积为'+num);