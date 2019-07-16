//练习：创建用户路由器user.js,添加用户列表，导出路由器；在web服务器下引入并使用，添加前缀/user
const express=require('express');
var router=express.Router();
//添加路由
router.get('/list',function(req,res){
	res.send('这是用户列表');
});
//导出路由器对象
module.exports=router;