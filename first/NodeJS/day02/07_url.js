//引入url模块
const url=require('url');
//获取url中各部分
var str='http://www.codeboy.com:80/a/detail.html?lid=3&name=dell';
//将url进行格式化为对象
var obj=url.parse(str);
//console.log(obj);
var obj1={
	protocol:'http',
	hostname:'www.codeboy.com',
	port:'8080',
	pathname:'/login/admin.html',
	query:{
		lid:2,
		name:'dell'
	}
}
//转换成url
var str1=url.format(obj1);
console.log(str1);