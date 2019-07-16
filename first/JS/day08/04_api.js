/*var str='aToS';//String
//转为大写
console.log( str.toUpperCase() );
//转为小写
console.log( str.toLowerCase() );

var str='javascript';
//查看字符长度
console.log( str.length );
//查看某个下标对应的字符
console.log( str[2] );

//练习3：计算javascript中a字符出现的个数
console.log('练习3：计算javascript中a字符出现的个数:');
var str1='javascript';
for(var i=0,count=0;i<str1.length;i++){
	//console.log(str1[i]);
	console.log(str1.charAt(i));
	if(str1[i]==='a'){
		count++;
	}
}
console.log(count);

//获取字符的下标
console.log('获取字符的下标:');
var str2='javascript';
console.log(str2.indexOf('a',2));
console.log(str2.lastIndexOf('a'));

//练习：声明变量保存字符串，检测该字符串是否为邮箱格式，如果是打印true,否则打印false(hello@123.com)
//如果有返回下标，没有返回-1
console.log('检测字符串中是否含有@:');
var email=['hello@126.com'];
if(email.indexOf('@')===-1){
	console.log(false);
}else{
	console.log(true);
}

//练习：声明变量保存验证码(英文字母)，无限循环弹出提示框，出入验证码(不区分大小写)，如果输入正确结束循环
console.log('输入验证码：');
var code='wQtJ';
while(true){
	//获取输入的验证码
	//点取消，返回null
	var input=prompt('请输入验证码：'+code);
	//如果取消，设置为空字符串
	if(input===null){
		input='';
	}
	//如果输入正确，结束循环
	if( code.toLowerCase()===input.toLowerCase() ){
		break;
	}
}
//截取字符串
var str='javascript';
//console.log( str.slice(4) );
//console.log( str.slice(4,7) );
console.log( str.slice(-3,-1) );

//练习：声明变量保存邮箱，截取邮箱中的用户名和域名//(hello1995@sina.com),先查找@的下标，然后再截取
var email='hello1995@sina.com';
var index=email.indexOf('@');
console.log(index);
console.log( email.slice(0,index) );
console.log( email.slice(index+1) );

var str='javascript';
//console.log( str.substr(4) );
//console.log( str.substr(4,3) );
console.log( str.substr(-3,2) );

//练习：声明变量保存身份证号，截取身份证号中年月日
//1997年01月02日 性别女 532222199701022122
var idcard='532222199701022122';
var year=idcard.substr(6,4);
var month=idcard.substr(10,2);
var day=idcard.substr(12,2);
var sex=idcard.substr(-2,1);
//判断性别是否为男
sex=sex%2===1 ? '男' : '女';
console.log(year +'年'+ month +'月'+ day +'日'+'性别为'+ sex);

var str='javascript';
//substring
//console.log(str.substring(4,7));
//负数转成0
//console.log(str.substring(-3,-1));
//自动转成4~7
//console.log(str.substring(7,4));
console.log(str.slice(7,4));

//练习：声明变量保存字符串'heLLO',要求吧首字母转为大写，其余字母转为小写。'Hello'
var str='heLLO';
var up=str.substring(0,1).toUpperCase();
var low=str.substring(1).toLowerCase();
console.log(up+low);


//数组转为字符串
var arr=['西瓜','冰棍','啤酒'];
console.log(arr.join('-'));
var str='西瓜-冰棍-啤酒';
//字符串转数组
console.log(str.split('-'));*/

//练习：使用split方法截取邮箱的用户名和域名(hello1995@sina.com)
var email='hello1995@sina.com';
var arr=email.split('@');
console.log(arr[0],arr[1]);
var str='javascript';
console.log( str.split('') );

****