<template>
  <div class="page-head">
    <span class="cancel">
      <img :src="leftImg" style="width:25px;"/>
    </span>
    <div class="center-head">
      <mt-field class="sou" placeholder="请输入您要搜索的内容" type="text" v-model="usou">
        <img @click="search" class="searchImg" :src="rightImg">
      </mt-field>
    </div>
  </div>
</template>
<script>
export default {
  name:"Search",
  props:{
    leftImg:{default:""},
    rightImg:{default:""},
    search:{type:Function}
  },
  data(){
    return {
      usou:""
    }
  },
  methods:{
    
  }
}
</script>
<style scoped>
  /*最外层父元素*/
  .page-head{
    display:flex;
    position:fixed;
    z-index:999;
    width:100%;
    justify-content: space-between;
    align-items:center;
    background-color:rgb(255,203,53);
    padding-left:7px;
    padding-right:7px;
    height:60px;
    color:#fff;
    font-size:18px;
  }
  .cancel{
    position:fixed;
    top:3%;
    left:20px;
  }
  .center-head{
    display:flex;
  }
  .sou{
    position:fixed;
    top:10px;
    left:90px;
    width:60%;
    border-radius:2px;
  }
  .searchImg{
    width:25px;
    height:25px;
  }
  .mint-cell{
    min-height:40px;
  }
</style>