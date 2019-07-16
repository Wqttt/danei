var price=prompt("请输入价格:");
var count=prompt("请输入数量:");
var total=price*count;
if(total>=500){
	total*=0.9;
}
alert(total);
var money=800;
if(money>=total){
	alert('pay success');
}else{
	alert('pay error');
}