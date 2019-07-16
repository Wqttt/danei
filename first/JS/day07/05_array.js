var ename=['tom','kate','king'];
//ename[4]='Scott';
//查看数组的长度length
//使用数组的长度添加新的元素
ename[ename.legth]='scott';
ename[ename.legth]='mary';
//console.log(ename);
//console.log( ename.length );
//console.log( typeof ename );

//练习：创建一个空数组，使用数组的长度来添加多个国家的名称。
var country=[];
country[country.length]='中国';
country[country.length]='美国';
country[country.length]='法国';
country[country.length]='印度尼西亚';
country[country.length]='泰国';
//console.log(country);

//创建关联数组
var person=[];
person['name']='tom';
person['age']=18;
person['sex']='男';
person['height']=180;
//console.log(person);

//练习：创建一个关联数组，包含有图书的编号、标题、作者以及价格
var book=[];
book['bid']=1008;
book['title']='让人心旷神怡的书呀！';
book['author']='尼古拉斯.扎卡斯';
book['price']=599;
//console.log(book);
//遍历数组中的元素
for(var key in book ){
	//key每个元素的下标
	//console.log(key,book[key]);
}

//索引数组
//练习：创建索引数组，包含若干个学生的成绩，计算总成绩和平均成绩
var score=[87,97,98,65,54,58,84,67];
//遍历数组元素
//使用循环
for(var i=0,sum=0;i<score.length;i++){
	console.log(i,score[i]);
	sum+=score[i];
}
console.log('总成绩为:'+sum,'平均分为:'+sum/score.length);
/*
var sum=0,avg=0;
for(var key in score){
	sum+=score[key];
	avg=sum/score.length;
}
console.log('总成绩为:'+sum,'平均分为:'+avg);*/
