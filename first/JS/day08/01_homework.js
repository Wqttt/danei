//使用数组遍历，将数组中的元素翻转
console.log('使用数组遍历，将数组中的元素翻转');
var arr=['文华','小然','小东','涛哥'];
//创建一个新数组，把倒着找到的元素依次放进来
var arr2=[];
//遍历数组元素
/*
0  3  4  4-1-0
1  2  4  4-1-1
2  1  4  4-1-2
3  0  4  4-1-3
*/
for(var i=0;i<arr.length;i++){
	//对应元素的下标：长度-1-i
	//console.log( arr[arr.length-1-i] );
	//把到这找到的元素，正着放进来
	arr2[i]=arr[arr.length-1-i];
}
console.log(arr2);

//使用冒泡排序对数组中的数字从小到大排序
console.log('使用冒泡排序对数组中的数字从小到大排序:');
var arr=[23,9,78,6,45];
//外层循环，控制循环的轮数
/*
1:9 23 6 45 78
2:9 6 23 45 78
3:6 9 23 45 78
*/
for(var i=1;i<arr.length;i++){
	/*
	5  1  4
	5  2  3
	5  3  2
	5  4  1
	*/
	//内层循环：控制循环的次数
	for(var j=0;j<arr.length-i;j++){
		//当前的数arr[j]和下一个数arr[j+1]比较
		//如果大于，则两个元素位置交换
		if(arr[j]>arr[j+1]){
			var tmp=arr[j];
			arr[j]=arr[j+1];
			arr[j+1]=tmp;
		}
	}
}
console.log(arr);

//练习：创建数组，包含若干个员工(姓名，性别，年龄)
console.log('练习1：创建数组，包含若干个员工(姓名，性别，年龄):');
var emps=[
	{name:'小一',sex:'女',age:16},
	{name:'小二',sex:'女',age:18},
	{name:'小三',sex:'男',age:20},
	{name:'小四',sex:'男',age:22}
];
console.log(emps);

//练习：创建对象(某个学员)，学号、姓名、爱好(敲代码、看电影、旅游)
console.log('练习2：创建对象(某个学员)，学号、姓名、爱好(敲代码、看电影、旅游):');
var person={
	pid:1001,
	name:'小明',
	love:['敲代码','看电影','旅游']
}
console.log(person);