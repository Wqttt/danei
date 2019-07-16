const express=require('express');
//引入连接池模块
const pool=require('../pool.js');//上一级../，上两级../../
//创建路由器对象
var router=express.Router();
//添加路由
//1.ajax-demo
router.get('/ajaxDemo',(req,res)=>{
	console.log("ajaxDemo接口接收的请求");
	res.send("这是我的第一个ajax程序");
});
//2.myajax
router.get('/myajax',(req,res)=>{
	console.log("myajax接口接收的请求");
	res.send("这是我的第二个ajax程序");
});
//3.伪登录---后台获取前台传来的数据，不查数据
router.get("/v1/login",(req,res)=>{
	var obj=req.query;
	var $uname=obj.uname;
	var $upwd=obj.upwd;
	if(!$uname){
		res.send("用户名为空");
		return;
	}
	if(!$upwd){
		res.send("用户密码为空");
		return;
	}
	res.send($uname+","+$upwd);
	//查询数据库
	pool.query("SELECT * FROM xz_user WHERE uname=? AND upwd=?",[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.length>0){
			res.send('登录成功');
		}else{
			res.send('登录失败');
		}
	});
});
//导出路由器
module.exports=router;