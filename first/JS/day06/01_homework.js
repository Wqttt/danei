//1 1 2 3 5 8 13 21 34 55...
console.log('练习：使用递归计算斐波那契数列的第n项:');
function getfib(x){
	if(x===1 || x===2){
		return 1;
	}
	return getfib(x-1)+getfib(x-2);
}
console.log( getfib(10));

//1 1 2 3 5 8 13 21 34 55...
console.log('练习：使用循环计算斐波那契数列的第n项:');
function getfib2(n){
	//初始化前两项的值为1
	var n1=1;
	var n2=1;
	//从第3项开始，每一项的值由前两项相加
	for(var i=3;i<=n;i++){
		//在诺懂得过程中，当前的n1是上一次的n2,当前的n2是上一次的n1和n2的和
		var c=n1;
		n1=n2;
		n2=c+n1;
	}
	//最后n2就是第n项的值
	console.log(n2);
}
getfib2(8);