/*//星期范围0~6
var day=8;
if(day===0){
	console.log('星期日');
}else if(day===1){
	console.log('星期一');
}else if(day===2){
	console.log('星期二');
}else if(day===3){
	console.log('星期三');
}else if(day===4){
	console.log('星期四');
}else if(day===5){
	console.log('星期五');
}else if(day===6){
	console.log('星期六');
}else{
	console.log('请输入正确的日期');
}

//练习：根据订单的状态码打印对饮的中文内容
//1-等待付款 2-等待发货 3-运输中 4-已签收 5-已取消 其它-无法追踪的状态
var status=3;
if(status===1){
	console.log('等待付款');
}else if(status===2){
	console.log('等待发货');
}else if(status===3){
	console.log('运输中');
}else if(status===4){
	console.log('已签收');
}else if(status===5){
	console.log('已取消');
}else{
	console.log('无法追踪的状态');
}*/

/*
优秀 90~
良好 80~90以下
中等 70~80以下
及格 60~70以下
其它 不及格
*/
var score=120;
if(score>=90){
	console.log('优秀');
}else if(score>=80){
	console.log('良好');
}else if(score>=70){
	console.log('中等');
}else if(score>=60){
	console.log('及格');
}else{
	console.log('不及格');	
}
