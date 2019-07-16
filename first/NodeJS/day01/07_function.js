//一次性定时器
//3秒钟以后，执行一次回调函数
var timer=global.setTimeout(function(){
	console.log('嘣嘣嘣');
},3000);
//清除
//clearTimeout(timer);

//周期性定时器
var timer1=setInterval(function(){
	console.log('滴滴滴');
},3000);
//clearInterval(timer1);

//立即执行
var timer2=setImmediate(function(){
	console.log(3);
});
//clearImmediate(timer3);
console.log(1);