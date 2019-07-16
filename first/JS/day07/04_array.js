var ename=['tom','kate','king',20,true];
console.log(ename[5]);
//修改下标为4的元素
ename[4]='jerry';
//添加下标为5的元素
ename[5]='lucy';
console.log(ename);

//创建数组，包含若干个城市名称，修改某个元素，添加某个元素，最后打印结果。
var city=['chengdu','shanghai','hongkong'];
city[1]='taipei';
city[4]='nanjing';
console.log(city);

//内置构造函数
var course1=new Array('mysql','javascript','nodejs');
var course2=new Array(3);
course2[0]='html';
course2[1]='ajax';
course2[2]='css';
course2[3]='bootstrap';
console.log(course2);

//练习：创建数组，包含若干个手机品牌名称
var phone=new Array('Apple','华为','小米','三星');

//练习：创建数组，初始化长度为5，添加篮球场上的五个位置
var basketball=new Array(5);
basketball[0]='大前锋';
basketball[1]='小前锋';
basketball[2]='得分后卫';
basketball[3]='控球后卫';
basketball[4]='中锋';
console.log(basketball);