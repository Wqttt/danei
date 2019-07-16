console.log('练习1:创建数组，包含多个名字，把姓名中所有的tom替换成汤姆:');
var person=['tom','jerry','marry','小二郎','tom','lisa','rose'];
//遍历数组元素
for(var i=0;i<person.length;i++){
	//判断每个元素是否为tom
	if(person[i]==='tom'){
		//满足条件，就把汤姆赋给该元素
		person[i]='汤姆';
	}
	console.log(i,person[i]);
}
console.log(person);

console.log('练习2:创建数组，包含有多个姓名，查看tom出现的次数:');
var person=['tom','jerry','marry','小二郎','tom','lisa','rose'];
for(var i=0,count=0;i<person.length;i++){
	if(person[i]==='tom'){
		count++;
	}
}
console.log(count);

console.log('练习3:创建函数，传递一个参数(一组工资)，返回平均工资:');
function getAvg(salary){
	for(var i=0,sum=0;i<salary.length;i++){
		sum+=salary[i];
	}
	return sum/salary.length;
}
console.log( getAvg([7900,8800,5500,6500,8200,10300]) );

console.log('练习4：创建函数，传递两个参数(要查找的数组，要查找的值)，如果找到了返回该元素的下标，如果没有找到返回-1:');
function findName(names,value){
	for(var i=0;i<names.length;i++){
		//判断元素是否为value,如果是返回对应的下标
		if(names[i]===value){
			return i;
		}
	}
	//如果找不到，返回-1(必须在整个数组都循环过之后才可以执行)
	return -1;
}
console.log( findName(['kate','tom','jerry','rose','lisa'],'jerry') );

console.log('练习5：创建函数,传递一个参数(数组中含有多个数)，返回数字中的最大值:');
function getMax(nums){
	for(var i=1,max=nums[0];i<nums.length;i++){
		//使用变量和每个元素比较，如果小于任意一个元素，则把该元素放入到变量
		if(max<nums[i]){
			max=nums[i];
		}
	}
	return max;
}
console.log( getMax([20,60,110,151,92,15]) );