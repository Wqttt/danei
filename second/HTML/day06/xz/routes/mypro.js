const express=require('express');
//引入连接池模块
const pool=require('../pool.js');//上一级../，上两级../../
//创建路由器对象
var router=express.Router();
//添加路由
//1.登录
router.get("/v1/login/:uname-:upwd",(req,res)=>{
   var $uname=req.params.uname;
   var $upwd=req.params.upwd;
   if(!$uname){
	   res.send("用户名为空");
	   return;
   }
   if(!$upwd){
		res.send("密码为空");
		return;
   }
   var sql="SELECT * FROM xz_user WHERE uname=? AND upwd=?";
   pool.query(sql,[$uname,$upwd],(err,result)=>{
	   if(err) throw err;
	   if(result.length>0){
			res.send("1");
	   }else{
			res.send("0");
	   }
   });
});
//2.查询用户列表
router.get("/v1/userlist",(req,res)=>{
	var sql="SELECT * FROM xz_user";
	pool.query(sql,function(err,result){
		if(err) throw err;
		res.send(result);
	});
});
//导出路由器
module.exports=router;