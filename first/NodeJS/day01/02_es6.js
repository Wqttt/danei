//函数中的参数
function add(a,b,c=0){
	console.log(a+b+c);
}
add(2,5);//7
add(3,9,13);//25

//模板字符串
var person1={
	name:'小然',
	age:35,
	sex:'女'
}
var person2={
	name:'小东',
	age:36,
	sex:1
}
var temp=`
	姓名:${person2.name}
	年龄:${person2.age}
	性别:${person2.sex===1 ? '男' : '女'}
`;
console.log(temp);

//练习：创建一个图书对象，包含有图书的编号，名称，价格，上架时间，是否在售(1->是/0->否)，使用模板字符串打印书的内容
var book={
	bid:1001,
	title:'格林童话',
	price:199,
	shelftime:120040125478,
	isOnsale:1
}
var temp1=`
	编号:${book.bid}
	名称:${book.title}
	价格:${book.price}
	出版时间:${(new Date(book.shelftime)).getFullYear()}/${(new Date(book.shelftime)).getMonth()+1}
	是否在售:${book.isOnsale===1 ? '是' : '否'}
`;
console.log(temp1);