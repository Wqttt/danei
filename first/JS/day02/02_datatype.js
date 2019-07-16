//数值型
var num1=314.15;
var num2=31.415e1;
var num3=3.1415e2;
var num4=3141.5e-1;
var num5=31415e-2;
console.log(num1,num2,num3,num4,num5);//314.15
//检测数据类型
console.log(typeof num1);//number

//字符串型
var str1='hello';
var str2=3;
//加上''变为字符串str1，不加代表字符串str1中的hello
var str3=str1;
console.log(typeof str1,typeof str2);//string number
console.log(str3);//hello
//查看某个字符的Unicode码,每次只能看一个
console.log( '邱'.charCodeAt(),'婷'.charCodeAt() );
console.log( '吴'.charCodeAt(),'江'.charCodeAt() );

//布尔型BOOL->boolean
var b1=true;
var b2=false;
console.log(typeof b1);//bool
//声明变量，保存3>1,打印变量以及变量的类型
var b3=3>1;
console.log(b3,typeof b3);//true bool

//未定义型
var name;
var age=undefined;
console.log(name,typeof name);//string
console.log(age,typeof age);//undefined undefined

//空
var person=null;//object
console.log(person,typeof person);//null object