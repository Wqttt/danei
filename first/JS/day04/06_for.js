/*//打印1-10之间所有整数
for(var i=1;i<=10;i++){
	console.log(i);
}

//打印80 75 70 65 60
for(var i=80;i>=60;i-=5){
	console.log(i);
}

//计算1-100之间所有奇数的和
var sum=0;
for(var i=1;i<=100;i++){
	if(i%2===1){
		sum+=i;
	}
}
console.log(sum);

//计算1-20之间所有能被3整除的数字的乘积
var num=1;
for(var i=1;i<=20;i++){
	if(i%3===0){
		num*=i;
	}
}
console.log(num);
//能被4整除，并且不能被100整除，或者能够被400整除
//打印2000-2100年之间所有的闰年
for(var i=2000;i<=2100;i++){
	if( (i%4===0 && i%100!==0) || i%400===0){
		console.log('2000-2100年之间所有的闰年为'+i);
	}
}*/

//12345
var str='';
for(i=1;i<=5;i++){
  str+=i;
}
console.log(str);

//打印乘法表
//1*5=5 2*5=10 3*5=15 4*5=20 5*5=25
//var str='';
for(var i=1 str='';i<=5;i++){
	str+=i+'*5='+(i*5)+' ';
}
console.log(str);