//判断一个人的成绩是否良好 80~90以下
var score=80;
console.log(score>=80&&score<90);//true
//练习：声明变量保存用户输入用户名和密码，如果用户名为root,并且密码为123456，打印true,否则打印false
var uname='root';
var upwd='123456';
console.log(uname=='root' && upwd=='123456');

//老人：65以上  儿童：12以下
var age=10;
console.log(age>=65 || age<=12);

//练习：声明变量保存输入的用户，如果用户名为root,或者为18112345678，或者root@tedu.com,打印true,否则打印false
var userName='18112345678';
console.log(userName==='root' || userName==='18112345678' || userName==='root@tedu.com');

console.log( !true );//false
console.log( !(3>4) );//true

var num=3;
num>5 && console.log(a);
//num<1 || console.log(a);
//练习：声明变量保存一个人的年龄，如果满足18岁，打印成年人
var age=16;
age>=18 && console.log('成年人');