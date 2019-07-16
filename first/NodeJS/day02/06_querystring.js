//引入查询字符串模块
//返回一个对象
const querystring=require('querystring');
var str='keyword=电脑&lid=1';
//将查询字符串格式化为对象
var obj=querystring.parse(str);
console.log(obj.keyword,obj.lid);
//将对象转换成查询字符串
var str2=querystring.stringify(obj);
console.log(str2);

//练习：获取查询字符串中的关键字pug(rsv_idx=1&tn=baidu&wd=pug);
//引入查询字符串模块
//const querystring=require('querystring');
var str1='rsv_idx=1&tn=baidu&wd=pug';
//将查询字符串格式化为对象
var obj1=querystring.parse(str1);
console.log(obj1.wd);