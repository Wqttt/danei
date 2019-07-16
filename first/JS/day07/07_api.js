//将数组转为字符串
console.log('将数组转为字符串:');
var arr=['tom','jerry','king'];
var str=arr.toString();//默认按照逗号组成字符串
var str2=arr.join('-');//按照join后的符号来组成字符串
console.log(str2,typeof str2);

//拼接多个数组
console.log('拼接多个数组：');
var arr1=['html','css'];
var arr2=['js','nodejs','ajax'];
var arr3=['vue','react'];
console.log( arr1.concat(arr2,arr3) );

//截取数组中的元素
console.log('截取数组中的元素：');
var arr=['html','css','js','nodejs','ajax','vue','react'];
console.log( '从2截取到最后：'+arr.slice(2) );//截取到最后
console.log( '从2截取到5：'+arr.slice(2,5) );//截取2~4
console.log( '截取倒数第四个到最后：'+arr.slice(-4) );
console.log( '截取倒数第四个到倒数第三个：'+arr.slice(-4,-2) );

//练习：创建数组a~g,每个字母是一个元素，分别截取cd,f,b,组成一个新数组。
console.log('练习1：创建数组a~g,每个字母是一个元素，分别截取cd,f,b,组成一个新数组:');
var zi=['a','b','c','d','e','f','g'];
var zi1=zi.slice(2,4);//cd
var zi2=zi.slice(-2,-1);//f
var zi3=zi.slice(1,2);//b
console.log(zi1,zi2,zi3);
console.log( zi1.concat(zi2,zi3) );

//删除数组中的元素
//学习一个api：
//作用、需要多少参数、返回值
console.log('删除数组中的元素：');
var arr=['html','css','js','nodejs','ajax','vue','react'];
//console.log( arr.splice(1,1,'jquery','html5') );//返回删除的元素、删除的长度和补充的内容(可以补充多个)
console.log( arr.splice(3,0,'bootstrap') );
//console.log( arr.splice(3) );//返回删除的元素
//console.log( arr.splice(3,2) );//返回删除的元素和删除的长度
//console.log( arr.splice(-4) );//返回删除的元素
//console.log( arr.splice(-4,2) );//返回删除的元素和删除的长度
console.log(arr);

//练习：创建数组a~h，每个字母是一个元素，删除d、e,替换f为m,在下标为2的位置添加字母z
console.log('练习2：创建数组a~h，每个字母是一个元素，删除d、e替换f为m,在下标为2的位置添加字母z:');
var arr=['a','b','c','d','e','f','g','h'];
console.log( arr.splice(3,2) );//删除
console.log(arr);
console.log( arr.splice(-3,1,'m') );//替换
console.log(arr);
console.log( arr.splice(2,0,'z') );//添加
console.log(arr);

//翻转数组中的元素
console.log('翻转数组中的元素:');
var arr=['a','b','c'];
console.log( arr.reverse() );

//对数组中的元素排序
var arr=[23,79,8,45];
//默认按照Unicode码排序
//console.log( arr.sort() );
console.log( arr.sort(function(a,b){
	//return a-b;
	return b-a;
}) );

var arr=['tom','jerry','king'];
//console.log( arr.push('marry') );//返回数组长度
//console.log( arr.pop() );//删除最后一个，返回删除成功的元素
//console.log( arr.unshift('scott') );//返回添加后的数组长度
console.log( arr.shift() );//删除第一个，返回删除成功的元素
console.log(arr);