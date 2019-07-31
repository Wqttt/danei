import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"

//#为Exam01.vue Exam02.vue 组件指定访问路径
//1.在router.js引入组件
import Exam01 from "./components/exam/Exam01.vue"
//2.在router.js引入组件
import Exam02 from "./components/exam/Exam02.vue"
import Exam03 from "./components/exam/Exam03.vue"
import ExamContainer04 from "./components/exam/ExamContainer04.vue"
import ExamContainer05 from "./components/exam/ExamContainer05.vue"
//3.为组件指定访问路径 /Exam
Vue.use(Router);

export default new Router({
  routes: [
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
    {path:'/Exam01',component:Exam01},
    {path:'/Exam02',component:Exam02},
    {path:'/Exam03',component:Exam03},
    {path:'/ExamContainer04',component:ExamContainer04},
    {path:'/ExamContainer05',component:ExamContainer05},
  ]
})
