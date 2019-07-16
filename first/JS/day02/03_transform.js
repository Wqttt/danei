var n1=1+2;
var n2=1+'2';
var n3='hello'+'world';
console.log(n1,typeof n1);//3 number
console.log(n2,typeof n2);//'12' string
console.log(n3,typeof n3);//'helloworld' string

//练习
var name='qt';
var sex='女';
var age=18;
console.log('我的姓名叫'+name+',性别'+sex+",我的年龄为"+age);//我的名字叫qt,性别女,我的年龄为18

//练习：声明变量分别保存员工的编号，姓名，部门名称，打印“该员工的编号为(变量的值),姓名(变量的值),所属部门(变量的值)”
var eid=1;
var ename='小一';
var dept='团协部';
console.log('该员工的编号为'+eid+',姓名'+ename+",所属部门为"+dept);//该员工的编号为1，姓名小一，所属部门为团协处

var n4=1+true;
console.log(n4,typeof n4);//2 number

var n5='hello'+true;
console.log(n5,typeof n5);//hellotrue string

var a=3,b=true,c='tedu';
console.log(a+b+c);//4tedu
console.log(b+c+a);//truetedu3
console.log(c+a+b);//tedu3true

//练习：任意两种类型的值执行减法 乘法 除法运算
var n6='7'-3; 
var n7='4'-'1';
var n8='9'/true;
var n9='2a'/5;    //NaN/5
console.log(n6,typeof n6);//4 number
console.log(n7,typeof n7);//3 number
console.log(n8,typeof n8);//9 number
console.log(n9,typeof n9);//NaN number
//Number()
var n10=Number('9'); //9
var n11=Number(true); //1
var n12=Number('2a'); //NaN
var n13=Number(undefined); //NaN
var n14=Number(null);
console.log(n10,typeof n10);//9 number
console.log(n11,typeof n11);//1 number
console.log(n12,typeof n12);//NaN number
console.log(n13,typeof n13);//NaN number
console.log(n14,typeof n14);//0 number

//转整型
var m1=parseInt(2.5);//2
var m2=parseInt('2a');//2
var m3=parseInt('a2');//NaN
console.log(m1);//2

//转浮点型
var m4=parseFloat('2.9a');//2.9
var m5=parseInt('2.9a');//2
var m6=parseInt(null);//NaN
console.log(m6);//NaN

var m7=5;
console.log(m7.toString(),typeof m7.toString());//5 string