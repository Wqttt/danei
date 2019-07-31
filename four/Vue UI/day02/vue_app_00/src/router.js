import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"

//#为Exam01.vue Exam02.vue 组件指定访问路径
//1.在router.js引入组件
import ExamContainer04 from "./components/exam/ExamContainer04.vue"
import ExamContainer05 from "./components/exam/ExamContainer05.vue"
import ExamTabbar06 from "./components/exam/ExamTabbar06.vue"
import Exam08Fa from "./components/exam/Exam08Fa.vue"
//3.为组件指定访问路径 /Exam
Vue.use(Router);

export default new Router({
  routes: [
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
    {path:'/ExamContainer04',component:ExamContainer04},
    {path:'/ExamContainer05',component:ExamContainer05},
    {path:'/ExamTabbar06',component:ExamTabbar06},
    {path:'/Exam08Fa',component:Exam08Fa},
  ]
})
