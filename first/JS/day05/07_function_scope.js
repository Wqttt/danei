//全局函数，可以在任何的作用域访问
/*function fn1(){
	console.log(1);
}
fn1();
function fn2(){
	fn1();
}
fn2();

function fn3(){
	//在函数作用域下，创建函数fn4
	function fn4(){
		console.log(2);
	}
	fn4();
}
fn3();
//fn4();*/

var n=100;
function fn0(){
	//var n=0;
	function fn1(){
		//var n=1;
		function fn2(){
			console.log(n);
		}
		fn2();
	}
	fn1();
}
fn0();