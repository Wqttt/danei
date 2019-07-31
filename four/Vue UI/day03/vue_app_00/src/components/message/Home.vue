<template>
  <div>
    <!-- Home.vue -->
    <!-- 1.顶部导航条-->
    <titlebar leftTitle="微信(11)" :rightFirstImg="require('../../assets/ic_search.png')" :rightSecondImg="require('../../assets/ic_add.png')" :search="mysearch" :add3="myadd3"></titlebar>
    <!-- 2.保留元素 -->
    <!-- 3.面板组件 -->
    <mt-tab-container v-model="active">
      <!-- 3.1.子面板 -->
      <mt-tab-container-item id="message">
        <messagelist></messagelist>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 4.底部导航条 -->
    <mt-tabbar v-model="active" fixed>
      <!-- 第一个按钮 微信 -->
      <mt-tab-item id="message">
        <tabbaricon :selectedImage="require('../../assets/ic_weixin_selected.png')" :normalImage="require('../../assets/ic_weixin_normal.png')" :focused="true"></tabbaricon>
        微信
      </mt-tab-item>
      <!-- 第二个按钮 通讯录 -->
      <mt-tab-item id="contact">
        <tabbaricon :selectedImage="require('../../assets/ic_contacts_selected.png')" :normalImage="require('../../assets/ic_contacts_normal.png')" :focused="false"></tabbaricon>
        通讯录
      </mt-tab-item>
      <!-- 第三个按钮 发现 -->
      <mt-tab-item id="find">
        <tabbaricon :selectedImage="require('../../assets/ic_find_selected.png')" :normalImage="require('../../assets/ic_find_normal.png')" :focused="false"></tabbaricon>
        发现
      </mt-tab-item>
      <!-- 第四个按钮 我 -->
      <mt-tab-item id="me">
        <tabbaricon :selectedImage="require('../../assets/ic_me_selected.png')" :normalImage="require('../../assets/ic_me_normal.png')" :focused="false"></tabbaricon>
        我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
// 1.引入TitleBar.vue
import TitleBar from "./common/TitleBar.vue"
//1.1引入消息列表子组件
import MessageList from "../message/common/MessageList.vue"
//1.2引入底部导航条图片切换组件
import TabBarIcon from "./common/TabBarIcon.vue"

export default {
  data(){
    return {
      //active保存字符串 子面板id
      //第一个子面板 message
      //第二个子面板 cart
      active:"message",
    }
  },
  // 2.注册TitleBar.vue
  methods:{
    mysearch(){
      //titleBar子组件所需处理函数：搜索
      console.log("搜索");
    },
    myadd3(){
      //titleBar子组件所需处理函数：添加
      console.log("添加")
    }
  },
  components:{
    //注册顶部标题子组件
    "titlebar":TitleBar,
    //注册消息列表子组件
    "messagelist":MessageList,
    //注册底部导航条切换子组件
    "tabbaricon":TabBarIcon,
  }
}
</script>
<style scoped>
  /*3.修改组件默认样式*/
  .mint-tabbar>.mint-tab-item{
    color:#999;/*默认灰色*/
  }
  /*4.修改组件选中样式*/
  .mint-tabbar>.mint-tab-item.is-selected{
    background-color:transparent;
    color:#45c018;/*选中绿色*/
  }
</style>
