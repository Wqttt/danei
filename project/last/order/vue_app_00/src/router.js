import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"

//#为组件指定访问路径
//1.在router.js引入组件
import Home from "./components/order/Home.vue"
//3.为组件指定访问路径
Vue.use(Router);

export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:'/Home',component:Home},
  ]
})
