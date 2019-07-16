var person={
	name:'Tom',
	sex:'男',
	age:18,
	say:function(){
		console.log('hello,我的名字叫'+this.name);
	}
}
//console.log( person.say );
//person.say();

//练习：创建一个手机对象，含有属性颜色、品牌、价格；添加打电话、发短信方法。
var phone={
	color:'white',
	brand:'Apple',
	price:5555,
	call:function(){
		console.log(this.color+'calling...');
	},
	sendMsg:function(a){
		return a;
	}
}
phone.call();
console.log( phone.sendMsg('hello...') );