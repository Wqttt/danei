/*function fn(a){
	//在函数fn的内部，使用匿名函数创建了一个函数，其中函数的名称就是参数名称
	//a=function(){ console.log(1); }
	//调用匿名函数创建的函数
	a();
}
fn(function(){
	//可以写多行代码
	console.log(1);
	console.log('hello');
	console.log(true);
})
fn(1);
fn('hello');
fn(true);

function fn(a){
	//匿名函数赋给形参a,a就是传递函数的名称
	var n=a();
	console.log(n);
}
fn(function(){

	return 2;
});*/

console.log('练习：创建函数，传递两个参数，都是使用匿名函数的形式传递，在匿名函数的函数体中分别返回一个数字；计算两个数字相加的和:');
function add(a,b){
	var n1=a();
	var n2=b();
	console.log(n1+n2);
}
add(function(){
	return 5;
},function(){
	return 2;
});