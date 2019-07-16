//练习：将一句英文中每个单词的首字母转大写，其余转小写hoW aRe yOU -> How Are You
var str='hoW aRe yOU.';
//把字符串按照空格转为数组
var arr=str.split(' ');
//console.log(arr);
//遍历数组中的元素，得到每个单词
for(var i=0;i<arr.length;i++){
	//console.log(arr[i]);
	//取出首字母转大写，其余字母转小写
	var word=arr[i].substr(0,1).toUpperCase()+arr[i].substr(1).toLowerCase();
	//console.log(word);
	//替换原来的元素
	arr[i]=word;
}
console.log(arr.join(' '));

//随机取a~z,A~Z,0~9之间的4个字符，把取到的结果放入到一个新数组，不能重复
var arr=['a','b','c','d','e','f','g','A','B','C','D','E','F','G',0,1,2,3,4,5,6,7,8,9];
//准备新数组，用于存放随机找到的验证码
var arr2=[];
//取四个，循环4次
for(var i=0;i<4;i++){
	//获取随机下标 0~23
	//0~1 * 数组长度 0~23.999 向下取整
	var index=Math.floor(Math.random()*arr.length);
	//console.log(arr[index]);
	//把获取的随机值放入新数组
	arr2.push(arr[index]);
	//把取到的元素在原来数组中删除，删除的个数是1，下标是index
	arr.splice(index,1);
}
console.log(arr2);