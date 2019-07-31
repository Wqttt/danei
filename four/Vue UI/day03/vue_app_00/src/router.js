import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"

//#为Exam 组件指定访问路径
//1.在router.js引入组件
import Home from "./components/message/Home.vue"
import MessageList from "./components/message/common/MessageList.vue"
//3.为组件指定访问路径 /Exam
Vue.use(Router);

export default new Router({
  routes: [
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
    {path:'/MessageList',component:MessageList},
  ]
})
