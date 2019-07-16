//带有返回值的函数
/*function add(num1,num2){
	//console.log(num1+num2);
	//把结果返回
	return num1+num2;
}
//把函数的调用结果，也就是返回值，保存起来
var student1=add(83,95);
var student2=add(99,93);
var student3=add(75,88);
//console.log(student1);
//console.log(student1+student2+student3);

console.log('练习：创建函数，传递两个参数，返回任意两个数字的最大值：');
function getMax(num1,num2){
	if(num1>num2){
		return num1;//return后其他的代码不执行
	}else{
		return num2;
	}
}
var n1=getMax(7,2);
//console.log(n1);

function fn(){
	//console.log(1);
	//...
	return ;
}
var r=fn();
//console.log(r);

console.log('练习：创建函数，传递订单的状态码这个参数，返回对应的中文状态。1-等待付款 2-等待发货 3-运输中 4-已签收 5-已取消 其他-无法追踪:');
function getStatus(n){
	switch(n){
		case 1:
			console.log('等待付款');
			break;
		case 2:
			console.log('等待发货');
			break;
		case 3:
			console.log('运输中');
			break;
		case 4:
			console.log('已签收');
			break;
		case 5:
			console.log('以取消');
			break;
		default:
			console.log('无法追踪');
	}
}
getStatus(3);
function getStatus(n){
	switch(n){
		case 1:
			return '等待付款';
		case 2:
			return '等待发货';
		case 3:
			return '运输中';
		case 4:
			return '已签收';
		case 5:
			return '以取消';
		default:
			return '无法追踪';
	}
}
var n=getStatus(3);
//console.log(n);
//console.log( getStatus(3) );

console.log('练习：创建函数，返回任意三个数字的最大值:');
function getMax(n1,n2,n3){
	var max;
	if(n1>n2){
		max=n1;
	}else{
		max=n2;
	}
	if(max>n3){
		return max;
	}else{
		return n3;
	}
}
var r=getMax(8,6,5);
console.log(r);
function getMax(n1,n2,n3){
	//var max;
	//n1>n2 ? max=n1 : max=n2;
	//max>n3 ? max=max : max=n3;
	//return max;
	var max=n1>n2 ? n1 : n2;
	return max>n3 ? max : n3;
}
var r=getMax(8,9,11);
console.log(r);

console.log('练习：创建函数，传递一个年份，要求返回是否为闰年，是->true,否则返回false:');
function getYear(year){
	if(year%4===0 && year%100!==0 ||year%400===0){
		return true;
	}
	return false;
}
console.log( getYear(2012) );

console.log('练习：创建函数，传递一个年份，如果是闰年返回366，不是闰年返回365:');
function getDays(n){
	//判断n是否为闰年，返回布尔型的值，可以作为条件表达式
	var r=getYear(n);
	//console.log(r);
	if(r){
		return 366;
	}
	return 365;
}
console.log( getDays(2004) );*/

console.log('练习：计算1-任意数字之间所有整数阶乘的和:');
function getJC(n){
	//计算1-任意数字之间所有整数的乘积(阶乘)
	for(var i=1,num=1;i<=n;i++){
		num*=i;
	}
	return num;
}
//console.log( getJC(5) );
//计算1-任意数字之间所有整数的和
function getSum(n){
	for(var i=1,sum=0;i<=n;i++){
		//i代表每个整数 1 2 ...
		//1!+2!+3!
		//求每个整数的阶乘 getJC(i)
		sum+=getJC(i);
	}
	return sum;
}
console.log( getSum(5) );