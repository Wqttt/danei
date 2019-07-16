/*//提升使用var声明的变量
//只是提升声明，不会提升赋值
var a;
console.log(a);
var a=1;
//var a=1;
//还是在原来位置赋值
function fn(){
	//var b;
	console.log(b);
	var b=2;
	//b=2;
}
fn();

var c=3;
function fn(){
	var c;
	console.log(c);
	c=5;
}
fn();//undefined

var d=6;
function fn(){
	console.log(d);//6
	d=8;
	console.log(d);//8
}
fn();

function fun(n){
	//形参是一个局部变量，不能被外部访问
	console.log(n);
}
fun(2);
console.log(n);*/

//全局变量m
var m=7;
function foo(m){
	//局部变量m
	//局部的m在原来的基础之上加3，对全局没有任何的影响
	m=m+3;
}
foo(5);
console.log(m);//7