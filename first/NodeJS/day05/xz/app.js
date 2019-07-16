const express=require('express');
//引入用户路由器
const userRouter=require('./routes/user.js');
var app=express();
app.listen(8080);

//托管静态资源到public目录下
app.use(express.static('public'));

//使用路由器
app.use('/user',userRouter);