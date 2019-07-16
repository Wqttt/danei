const express=require('express');
//引入商品路由器模块
const productRouter=require('./04_product.js');
//引入用户路由器模块
const userRouter=require('./04_user.js');
var app=express();
app.listen(8080);

//服务器使用路由器，同时要在url前添加前缀，防止不同模块出现相同的url
//   /product/list
app.use('/product',productRouter);
//使用路由器  /user/list
app.use('/user',userRouter);