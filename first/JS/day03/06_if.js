//满30-15
/*var total=30;
if(total>=30){
	total-=15;
}
//console.log(total);

//练习：声明变量保存一个人的年龄，如果满18打印成年人
var age=19;
if(age>=18){
	console.log('成年人');
	console.log('可以去网吧了');
}
age>=18 && console.log('成年人');

//false:undefined null 0 NaN 
//true:正、负数 字符串
if(NaN){
	console.log('hello');
}

//判断一个用户名是否为空
//如果用户名为空，打印“用户名不能为空”
var uname='';
//uname===''
if(!uname){//false
	console.log('用户名不能为空');
}

//练习：声明一个变量保存签名，如果签名为空，给变量赋值为“这家伙很懒，什么也没有留下”；最后打印签名
var str='今天的天气好热！';
if(!str){
	str='这家伙很懒，什么也没有留下';
}
console.log(str);*/

var num='0';
num=Number(num);//NaN
//判断一个值是否为NaN，如果是，返回true，不是返回false
//console.log( isNaN(num) );
//判断num是否为数字
if( isNaN(num) ){
	//如果是NaN
	console.log('请提供一个数字');
}

/*
//!num无法解决0的问题
if(!num){
	console.log('请提供一个数字');
}
*/

//console.log(null==undefined);//true
//object number
//0转成了对象，不是Null转成了0
console.log(null==0);//false
//null转成了0
console.log(null>1);//false
