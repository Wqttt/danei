const express=require('express');
//引入路由器
var router=express.Router();
//添加路由
router.post('/reg',function(req,res){
	res.send('注册成功');
});
module.exports=router;