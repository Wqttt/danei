var emp1={
	ename:'小冉',
	age:25
}
var emp2=emp1;
//改变emp1对象中的属性
emp1.ename='小东';
//console.log(emp2);
//改变emp2对象中属性
emp2.age=35;
//console.log(emp1);
//console.log(emp2);
//赋值为null就可以销毁对象，没有任何的地址指向对象
emp1=null;
emp2=null;

var a=1;
var b=a;
//改变a的值
a=2;
//console.log(b);
b=5;
console.log(a);