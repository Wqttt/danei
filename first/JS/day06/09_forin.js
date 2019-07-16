var emp={
	eid:3,
	ename:'Rose',
	sex:1,
	birthday:'1997-2-2',
	salary:7500
}
//for-in
//键值对
for(var key in emp){
	//key代表每一个属性名
	//console.log(key,emp[key]);
};

//练习：创建对象，包含有若干个成绩，遍历对象中属性，获取总成绩
var score={
	math:98,
	chinese:56,
	history:45,
	english:98,
	science:52
}
var sum=0;
for(var key in score){
	//console.log(sum,score[key]);
	sum+=score[key];
};
console.log(sum);