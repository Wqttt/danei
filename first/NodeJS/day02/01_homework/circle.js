function getArea(r){
	return 2*Math.PI*r*r;
}
function getLength(r){
	return 2*Math.PI*r;
}
//导出两个函数
module.exports.getArea=getArea;
module.exports.getLength=getLength;
//exports是module.exports的别名
//exports.a=2;
//把一个新的对象赋给了module.exports,exports和module.exports两个就不再指向同一对象
module.exports={
	getArea:getArea,
	getLength:getLength
}
//比较两者是否相等
//console.log( module.exports===exports );