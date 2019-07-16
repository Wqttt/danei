//1.块级作用域
/*//let声明的变量不存在提升
//let a=1;
//console.log(a);

//创建块级作用域
{
	let b=2;
	//console.log(b);
}
//if if-else for while do-while switch...

//练习：打印1~10之间所有的整数，初始化变量使用let,在循环结束后，打印初始化的变量。
for(let i=1,sum=0;i<=10;i++){
	sum+=i;
	console.log(i);
}
//访问不到i
//console.log(sum);//没有在let作用域内，不能执行*/

//2.箭头函数
var arr=[5,18,1,15,45,2,58];
//console.log(arr.sort(function(a,b){
//	return a-b;
//}));
//console.log( arr.sort( (a,b)=>{
//	return a-b;
//} ) );
//如果函数体中只有一行代码，并且是return形式
console.log( arr.sort( (a,b)=> a-b ) );

//练习：创建函数add,传递两个参数，每个参数是回调函数，在回调函数的函数体中返回一个数字；在函数add中计算两个数字相加的结果并打印出来。
function add(a,b){
	/*var n1=a();
	var n2=b();
	console.log(n1+n2));*/
	console.log( a()+b() );
}
/*add(function(){
	return 2;
},function(){
	return 3;
});*/
add(()=>2,()=>3);
