import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入第三方的组件库 mint ui
// 1.完整引入mint-ui组件库中的所有组件
import MintUI from "mint-ui"
// 2.单独引入mint-ui组件库中的样式文件
import "mint-ui/lib/style.css"
// 3.将mint-ui注册vue实例中
Vue.use(MintUI)
// 4.将字体图标引入到当前项目中
import "./font/iconfont.css"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
