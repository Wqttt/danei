//调用函数才会执行函数体中的代码
fn();//console.log(c);
var c=1;
fn();//console.log(c);

function fn(){
	console.log(c);
}
