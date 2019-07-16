//创建一个函数add(计算两个数字相加)
function add(a,b){
	console.log(a+b);
}
//导出该函数
module.exports.add=add;
//不需要先创建再导出，可以直接导出
module.exports.add2=function(a,b){
	console.log(a+b);
}