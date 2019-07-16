/*//*****
for(var i=1,str='';i<=5;i++){
	//每次循环拼接一个*号
	str+='*';
}
console.log(str);

//执行相同或者相似的代码
//外层循环：控制循环行数
for(var j=1;j<=6;j++){
	//内层循环：控制循环的列数
	for(var i=1,str='';i<=5;i++){
	//每次循环，拼接一个*号
	str+='*';
	}
	console.log(str);
}*/

/*
*
**
***
****
*****
*/
for(var i=1;i<=5;i++){
	for(var j=1,str='';j<=i;j++){
		str+='*';
	}
	//循环一行结束后，打印一行
	console.log(str);
}
