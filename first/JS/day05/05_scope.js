/*//在全局作用域下声明的变量
var a=1;
function fn(){
	//在函数内使用var声明的变量
	var b=2;
	console.log(a);
}
fn();
console.log(b);*/
var c=3;
function fn2(){
	c=5;
	var d=e=4; 
	//等价于以下形式
	//e=4;//e全局
	//var d=e;//d局部
}
fn2();
console.log(c);
//console.log(d);
console.log(e);