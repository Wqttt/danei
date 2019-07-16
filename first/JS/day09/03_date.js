var now=new Date();
//获取本地字符串格式
//console.log( now.toLocaleString() );
//console.log( now.toLocaleDateString() );
//console.log( now.toLocaleTimeString() );

var bd=new Date('2019/5/20');
//修改Date对象中的日期时间
bd.setFullYear(2018);
bd.setMonth(8);
//3天后
//先获取当前的日期，然后加3
//把结果设置为日期
bd.setDate( bd.getDate()+3 );
//练习：设置12小时以后 setHours
bd.setHours( bd.getHours()+12 );
//距离计算机元年
bd.setTime( 15188061656 );

//console.log(bd.toLocaleString());

//复制一个Date对象
var bd2=new Date(bd);
bd2.setMinutes(3);
console.log(bd.toLocaleString());
console.log(bd2.toLocaleString());

//练习:创建Date对象,保存员工的入职时间'2019/9/30';3年后合同到期,计算到期时间,合同到期前1个月续签合同,假如是周末,提前到周五,计算续签时间,打印出3个时间的本地日期字符串格式。
var work=new Date('2019/9/28');
var arr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
console.log( '入职时间：'+work.toLocaleDateString()+' '+arr[work.getDay()] );
var dao=new Date(work);
dao.setFullYear( dao.getFullYear()+3 );
console.log(  '到期时间：'+dao.toLocaleDateString()+' '+arr[dao.getDay()] );
var xu=new Date(dao);
xu.setMonth( xu.getMonth()-1 );
//判断是否为周末,如果是提前到周五
if(xu.getDay()===6){
	xu.setDayte( xu.getDate()-1 );
}else if(xu.getDay()===0){
	xu.setDate( xu.getDate()-2 );
}
console.log(  '续签时间：'+xu.toLocaleDateString()+' '+arr[xu.getDay()] );