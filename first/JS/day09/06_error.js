/*console.log(1);
//语法错误
//var if=1;
//while(){
//应用错误，未声明的变量
//}
//console.log(2);

//类型错误
//var b=5;
//b();
//var obj={ age:18 };
//obj.age();
//范围错误
//var arr=new Array(-2);

try{//尝试
	var arr=new Array(-2);
}catch(err){//捕获
	//console.log(err);
	var arr=new Array();
}

console.log(2);*/

//练习：声明一个变量add没有赋值，尝试调用add函数，传递两个参数(数字);如果执行错误，使用函数表达式创建函数,赋给add一个匿名函数，然后再调用add
var add;
//判断add是否位函数
if(typeof add === 'function'){
	add();
}
/*
try{
	add(2,3);
}catch(err){
	console.log(err);
	add=function(a,b){
		console.log(a+b);
	}
	//function add(a,b){
	//	console.log(a+b);
	//}
	add(2,3);
}
*/