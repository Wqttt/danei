//把数据包装成对象
var str1=new String('小然');//字符串对象
var str2=new String(2);
var str3='你好';//字符串字面量
var str4=String(true);//转为字符串
//num.toString()
//console.log(str2,typeof str2);
//console.log(str1+'的体重为180斤'+str2);
console.log(str4,typeof str4);

//练习1：把数组转为字符串
console.log('练习1：把数组转为字符串:');
var str5=String(['tom','jerry','jack']);
console.log(str5,typeof str5);

//转义字符
console.log('转义字符:');
console.log('oh \no');//\n 转义成换行符
//it's a dog;
console.log("it's a dog");
console.log('it\'s a dog');
console.log('\ro');//\r 转义成回车

//练习2：在控制台下打印welcome to chi\na!
console.log('练习2：在控制台下打印welcome to chi\\na!');
console.log('welcome to chi\\na!');