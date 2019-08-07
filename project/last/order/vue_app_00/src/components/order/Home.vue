<template>
  <div class="page-tabbar">
    <!-- 1.TitleBar -->
    <div class="page-wrap">
      <titlebar 
      :leftImg="require('../../assets/ic_cancel.png')" 
      :rightImg="require('../../assets/ic_search.png')"
      :search="mysearch"></titlebar>
    </div>
    <!-- 3.nearlist -->
    <mt-tab-container class="page-tabbar-container" v-model="active">
      <mt-tab-container-item id="fujin">
        <nearlist></nearlist>
      </mt-tab-container-item>
    </mt-tab-container>
    <!--4:tabbar列表-->
    <!--为每个按钮绑定点击事件-->
    <!--当前按钮isSelect:true-->
    <!--其它按钮isSelect:false-->
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item id="shouye" @click.native="changeState(0)">
        <tabbaricon
        :selectedImage="require('../../assets/ic_shouye_selected.png')"
        :normalImage="require('../../assets/ic_shouye.png')"
        :focused="currentIndex[0].isSelect">
        </tabbaricon>
        首页
      </mt-tab-item>
      <mt-tab-item id="fujin" @click.native="changeState(1)">
        <tabbaricon
        :normalImage="require('../../assets/ic_fujin.png')"
        :selectedImage="require('../../assets/ic_fujin_selected.png')"
        :focused="currentIndex[1].isSelect">
        </tabbaricon>
        附近
      </mt-tab-item>
      <mt-tab-item id="geren" @click.native="changeState(2)">
        <tabbaricon
        :normalImage="require('../../assets/ic_geren.png')"
        :selectedImage="require('../../assets/ic_geren_selected.png')"
        :focused="currentIndex[2].isSelect">
        </tabbaricon>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import TitleBar from "./common/TitleBar.vue"
import NearList from "./common/NearList.vue"
import TabBarIcon from "./common/TabBarIcon.vue"
export default {
  data(){
    return {
      active:"near",
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false}
      ]
    }
  },
  methods:{
    mysearch(){console.log("搜索");},
    changeState(n){
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for(var i=0;i<this.currentIndex.length;i++){
        //2:判断如果循环下标与n相等 20
        if(n==i){
          //3:当前下标元素true
          this.currentIndex[i].isSelect=true;
        }else{
          //4:其它元素修改false
          this.currentIndex[i].isSelect=false;
        }
      }
    }
  },
  components:{
    "titlebar":TitleBar,
    "nearlist":NearList,
    "tabbaricon":TabBarIcon
  }
}
</script>
<style scoped>
  .page-tabbar{
    overflow:hidden;/*溢出隐藏*/
  }
  /*修改 tabbar 默认文字颜色*/
  .mint-tabbar>.mint-tab-item{
    color:#999999;
  }
  /*修改默认tab选中文字样式*/
  .mint-tabbar>.mint-tab-item.is-selected{
    background-color:transparent;
    color:rgb(255,203,53);
  }
  .page-wrap{
    overflow:auto;/*溢出显示轮动条*/
    padding-bottom:60px;
  }
  .page-tabbar-container{
    padding-bottom:60px;
  }
</style>
