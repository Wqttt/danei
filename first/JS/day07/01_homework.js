//创建一个圆对象，含有半径和圆周率属性，添加计算面积，计算周长的方法。
var circle={
	r:3,
	pi:3.14,
	getArea:function(){
		//console.log('半径为'+this.r+'，圆周率为'+this.pi+'的圆面积为'+this.pi*(this.r*this.r));
		return this.pi*(this.r*this.r);
	},
	getPerimeter:function(){
		//console.log('半径为'+this.r+'，圆周率为'+this.pi+'的圆周长为'+2*this.pi*this.r);
		return 2*this.pi*this.r;
	}
};
//circle.getArea();
//circle.getPerimeter();
console.log( circle.getArea() );
console.log( circle.getPerimeter() );