//适用对象字面量来创建对象
var person={
	name:'Marry',
	age:21,
	sex:'女',
	'userName':'Small_sweet',
	'user-pwd':'ss1234',
	salary:9999.99,
	address:'昆明市盘龙区'
}
//console.log(person);

//练习：创建一个员工对象，包含编号、姓名、性别、生日、工资
var emp={
	eid:1,
	ename:'迷你',
	sex:'女',
	birthday:'1995-8-8',
	salary:9999.99
}
//console.log(emp);

//练习：创建一个手机对象，包含颜色、品牌、尺寸、内存大小
var phone={
	color:'silvery',
	brand:'Apple',
	size:4.7,
	memory:'128G',
	'made-in':'China'
}
//console.log(phone);
//访问对象中的属性
//console.log( phone.color );
//console.log( phone['memory'] );
//console.log( phone['made-in'] );
//console.log( phone.age );//undefined
//赋值
phone.size=5.5;
//添加属性
phone.age=3;
//console.log( phone );

//练习：创建图书的对象，包含图书的编号、标题、作者、价格、出版时间；修改图书的价格，访问图书的作者，添加图书的出版社属性
var book={
	bid:1001,
	title:'简爱',
	author:'尼古拉斯',
	price:85,
	pubTime:'2016-5-5'
}
book.price=199;
console.log( book.author );
book.publisher='人民出版社';
console.log( book );