//console.log(3>1);//true
//等于只是比较值
//console.log(2=='2');//true
//全等于比较值和数据类型
//console.log(2==='2');//false
//把字符串转成了数值型
//console.log(3>'10');//false
//console.log(3>true);//true
//字符串比较，只比较首字符的Unicode码
//console.log('3'>'20');//ture
//console.log('张无忌'>'张翠山');//false
//console.log('无'.charCodeAt(),'翠'.charCodeAt());

//console.log(3>null);//true

console.log(3>'10a');//3>NaN false
//console.log(3>undefined);//3>NaN,false
//console.log(3<undefined);//3<NaN,false
//console.log(3==undefined);//3==NaN,false
//console.log(NaN==NaN);//false
//console.log(NaN!=NaN);//true