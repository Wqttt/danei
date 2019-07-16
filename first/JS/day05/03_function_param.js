//创建带有参数的函数
//计算任意两个数字相加的和
function add(num1,num2){//形参
	console.log(num1,num2);
	console.log(num1+num2);
}
//调用的时候，实参的值会赋给形参
//add();//undefined,undefined NaN
//add(7);//7,undefined NaN 
//add(1,2,3);//1,2 3

//练习：创建函数，计算1~任意数字之间所有整数的和，调用多次
function getSum(num){
	for(var i=1,sum=0;i<=num;i++){
		sum+=i;
	}
	console.log(sum);
}
//getSum(6);
//getSum(100);
//getSum(1000);

//练习：创建函数，计算任意两个年份之间的闰年个数并打印，调用多次
function getCount(year1,year2){
	//计算year1~year2之间的闰年个数
	for(var year=year1,count=0;year<=year2;year++){
		//判断是否为闰年
		if(year%4===0 && year%100!==0 || year%400===0){
			//console.log(year);
			count++;
		}
	}
	console.log(count);
}
//getCount(2000,2100);
//getCount(2019,2100);
//getCount(2000,2019);