//存储2019/5/17 9:52:30
//创建date对象
var d1=new Date('2019-5-17 9:52:30');
//月份1~12 对应0~11
var d2=new Date(2019,4,17,10,23,30);
//当前所在系统时间
var d3=new Date();
//var d4=new Date(1545264000000);
var d4=new Date(1000*60);
//console.log(d4);

var d5=new Date('2019/5/19 8:20:20');
console.log(d5.getFullYear());//年
console.log(d5.getMonth());//0~11月
console.log(d5.getMonth()+1);
console.log(d5.getDate());//日
console.log(d5.getHours());//时
console.log(d5.getMinutes());//分
console.log(d5.getSeconds());//秒
console.log(d5.getDay());//星期
console.log(d5.getTime());//获取距离计算机元年毫秒数

//练习：创建Date对象，保存'2019/6/7 09:25:40',打印2019年6月7日 10点25分40秒 星期五
var d6=new Date('2019/6/7 9:25:40');
var year=d6.getFullYear();
var month=d6.getMonth()+1;
var date=d6.getDate();
var hours=d6.getHours();
//如果hours小于10，在前边拼接0
if(hours<10){
	hours='0'+hours;
}
var minutes=d6.getMinutes();
if(minutes<10){
	minutes='0'+minutes;
}
var seconds=d6.getSeconds();
if(seconds<10){
	seconds='0'+seconds;
}
//创建数组，保存星期日~星期六
var arr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
var day=d6.getDay();
console.log(year+'年'+month+'月'+date+'日'+' '+hours+'点'+minutes+'分'+seconds+'秒 '+arr[day]);

//练习：计算距离2019年端午节还有?天?小时?分钟?秒
//两个Date对象
//当前系统时间距离2019/6/7
var now=new Date();//系统当前时间
var target=new Date('2019/6/7');//目标时间
//计算两个时间相差的毫秒数 getTime()
//var d=Math.abs(now.getTime()-target.getTime());
var d=target-now;
//将相差的时间转成秒
d=Math.floor(d/1000);
//计算相差的天数
var day=Math.floor(d/(24*60*60));
//计算相差的小时，去除所有的天数
//相差的秒数和一天的秒数取余，结果肯定是不满一天的秒数，再转成小时
var hours=Math.floor(d%(24*60*60));
//转成小时
hours=Math.floor(hours/(60*60));
//计算相差的分钟
var minutes=Math.floor(d%(60*60));
//转成分钟
minutes=Math.floor(minutes/60);
//计算相差的秒
var seconds=Math.floor(d%60);
//转成秒
seconds=Math.floor(seconds);
//console.log(seconds);
console.log('距离2019年端午节还有'+day+'天'+hours+'小时'+minutes+'分钟'+seconds+'秒');