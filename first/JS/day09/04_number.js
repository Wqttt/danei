//将数据包装为数值型
var num1=new Number(true);
var num2=Number('2');
//console.log(num1+5);
//console.log(num2,typeof num2);
//console.log( Number.MAX_VALUE );
//console.log( Number.MIN_VALUE );

var num3=0.1+0.2;
console.log(num3.toFixed(1));
var len=2*5*3.14;
console.log(len.toFixed(1));
var num4=15;//1*8+7
console.log(num4.toString(8));
var num4=22;//26
console.log(num4.toString(8));
var num4=45;//55
console.log(num4.toString(8));

var num4=15;//f
console.log(num4.toString(16));
var num4=22;//16
console.log(num4.toString(16));
var num4=45;//2d
console.log(num4.toString(16));