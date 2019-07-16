//全局污染
//轮播图1
//匿名函数自调用：没有暴露任何的全局变量，不会造成全局污染
(function(){
	var num=3;
})();

//轮播图2
(function(){
	var num=1;
})();

//轮播图3
(function(a,b){
	var num=5;
	console.log(a+b);
})(1,2);

//console.log(num);
//播放
