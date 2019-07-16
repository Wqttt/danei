//声明变量，用于记录调用的次数
/*var i=0;
function fn(){
	i++;
	alert('long ago');
	//判断当前是否为第3次,是->return 
	if(i===3){
		return;//结束函数
	}
	fn();
}
fn();*/

console.log('练习：使用递归计算1-任意数字之间所有整数的和:');
function getSum(n){
	if(n===1){
		return 1;
	}
	return n+getSum(n-1);
}
console.log(getSum(5));