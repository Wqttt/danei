//练习：创建两个模块main.js(主模块),circle.js(功能模块);在功能模块下创建两个函数，传递1个参数(半径),分别获取圆的面积和周长，导出这两个函数; 在主模块中引入功能模块，并调用两个方法
//引入circle.js模块
var circle=require('./circle.js');
console.log(circle);
console.log(__filename);//file 文件
console.log(__dirname);//dir->directory目录
//调用两个方法
//console.log( circle.getArea(4).toFixed(2) );
//console.log( circle.getLength(4).toFixed(2) );