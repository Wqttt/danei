//计算2019/6/7 9:25:34 距离2019/10/1 19:52:48相差的天，小时，分钟，秒钟
var date1=new Date('2019/6/7 9:25:34');
var date2=new Date('2019/10/1 19:52:48');
//计算两个时间相差的毫秒数
var d=date2-date1;
//将毫秒转为秒
d=Math.floor(d/1000);
//计算相差的天数
var day=Math.floor(d/(24*60*60));
//计算相差的小时
var hours=Math.floor(d%(24*60*60));
//转成小时
hours=Math.floor(hours/(60*60));
//计算相差的分钟
var minutes=Math.floor(d%(60*60));
//转成分钟
minutes=Math.floor(minutes/60);
//计算相差的秒数
var seconds=Math.floor(d%60);
//转成秒
seconds=Math.floor(seconds);
console.log('距离2019/10/1 19:52:48相差'+day+'天'+hours+'小时'+minutes+'分钟'+seconds+'秒');

//双色球：在1-33个红球中随机取6个不能重复，在1-16个蓝球中随机取一个，可以和红球数字重复
var arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];
var arr2=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var arr3=[];
var arr4=[];
for(var i=0;i<6;i++){
	var index=Math.floor(Math.random()*arr1.length);
	arr3.push(arr1[index]);
	arr1.splice(index,1);
}
var index1=Math.floor(Math.random()*arr2.length);
arr4.push(arr2[index1]);
arr2.splice(index1,1);
console.log(arr3.sort(function(a,b){return a-b;})+','+arr4);