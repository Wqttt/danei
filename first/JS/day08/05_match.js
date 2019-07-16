var str='wenhua是胃口最好的老师，WenHua讲课非常优秀，WENHUA是web前端的总监，wenhua有多年的教学经验';
//查找并替换
console.log( str.replace(/wenhua/ig,'***') );

//查找字符串wenhua的下标
console.log(str.search(/LIWENHUA/i));

//要查找所有的wenhua
//console.log( str.match('wenhua') );
//正则表达式写法
//g-global 全局
//i-ignore 忽略
var arr=str.match(/wenhua/ig);
console.log( arr.length );