//(function(exports,require,module,__filename,__dirname){

console.log('08_2.js,hello kitty!');
var a=1;
function fn(){
	console.log(2);
}

//让外部访问模块中的变量和函数
//module指代当前所在的模块
//module.exports,此时的exports与上面的exports无关,是一个导出的对象，公开的内容都放在这个对象中
module.exports.num=5;
module.exports.a=a;
module.exports.myfn=fn;

//})