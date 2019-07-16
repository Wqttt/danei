/*var day=3;
switch(day){
	case 0:
		console.log('星期日');
	    break;
	case 1:
		console.log('星期一');
		break;
	case 2:
		console.log('星期二');
		break;
	default:
		console.log('请输入正确的日期');
}

//练习：根据订单的状态码打印对饮的中文内容
//1-等待付款 2-等待发货 3-运输中 4-已签收 5-已取消 其它-无法追踪的状态
var status='1';
switch(status){
	case 1:
		console.log('等待付款');
	    break;
	case 2:
		console.log('等待发货');
		break;
	case 3:
		console.log('运输中');
		break;
	case 4:
		console.log('已签收');
		break;
	case 5:
		console.log('已取消');
		break;
	default:
		console.log('无法追踪的状态');
}*/

var score=96;
score=parseInt(score/10);
//console.log(score);
switch(score){
	case 10:
	case 9:
		console.log('优秀');
	case 8:
		console.log('良好');
	case 7:
		console.log('中等');
	case 6:
		console.log('及格');
	default:
		console.log('不及格');
}