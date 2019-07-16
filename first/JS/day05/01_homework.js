/*var i=0,sum=0;
do{
	i++;
	if(i%2===0){
		continue;//跳过2、4
	}
	if(i%5===0){
		break;//跳出
	}
	sum+=i;//1+3
}while(i<10);
console.log(sum);//4*/

//打印九九乘法表
//外层循环：控制行数
console.log('九九乘法表：');
for(var i=1;i<=9;i++){
	//内存循环：控制列数
	for(var j=1,str='';j<=i;j++){
		str+=j+'*'+i+'='+(i*j)+' ';
	}
	console.log(str);
}

//打印本世纪(2000-2100)前10个闰年
console.log('(2000-2100)前10个闰年：');
for(var year=2000,count=0;year<=2100;year++){
	//判断是否为闰年
	if(year%4===0 && year%100!==0 || year%400===0){
		console.log(year);
		//闰年个数+1
		count++;
		//每产生一个闰年，判断是否到10个
		if(count===10) break;
	}
}

/*console.log('(2000-2100)前10个闰年：');
for(var year=2000,count=0;year<=2100;year++){
	if(count<10){
		//判断是否为闰年
		if(year%4===0 && year%100!==0 || year%400===0){
			console.log(year);
			//闰年个数+1
			count++;
		}
	}
}*/

//计算1~100之间的和，当和大于4000的时候，提前结束循环，并打印当前的和是多少
for(var n=1,sum=0;n<=100;n++){
	sum+=n;
	if(sum>4000){
		break;
		//break出现了，后续的代码不再执行你  
	}
}
console.log('当前的数是'+n);
console.log('当前的和是'+sum);