//练习：获取url中查询字符串中的数据
//(http://www.tmooc.cn:80/web/1904.html?sid=10&sex=1)
//步骤：将url格式化为对象，获取到查询字符串；在获取的查询字符串格式化为对象，获取数据08.js
//引入url模块
const url=require('url');
const querystring=require('querystring');
var str='http://www.tmooc.cn:80/web/1904.html?sid=10&sex=1';
//获取url中查询字符串部分
var obj1=url.parse(str);
//console.log(obj1);
var str2=obj1.query;
//获取查询字符串中的数据
//格式化为对象
var obj2=querystring.parse(str2);
console.log(obj2.sid,obj2.sex);