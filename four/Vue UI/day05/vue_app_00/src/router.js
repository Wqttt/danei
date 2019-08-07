import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"

//#为Exam 组件指定访问路径
//1.在router.js引入组件
import Home from "./components/message/Home.vue"
import MessageList from "./components/message/common/MessageList.vue"

//学子商城
import Login from "./components/xz/Login.vue"
import Product from "./components/xz/Product.vue"

//3.为组件指定访问路径 /Exam
Vue.use(Router);

export default new Router({
  routes: [
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
    {path:'/MessageList',component:MessageList},
    {path:'/Login',component:Login},
    {path:'/Product',component:Product}
  ]
})
