<template>
  <div>
    <div class="rootstyle" @click="itemClick(id)">
      <div class="leftstyle">
        <span class="title">
          {{title}}
        </span>
        <br>
        <span class="location">
          {{location}}
        </span>
        <span class="distance">
          {{distance}}
        </span>
        <br>
        <span class="empty">
          {{empty}}
        </span>
        <span class="free">
          {{free}}
        </span>
        <span class="money">
          {{money}}
        </span>
      </div>
      <div class="rightstyle">
        <mt-button class="goto" @click="Goto(id)">
          到这去
        </mt-button>
        <mt-button class="schedule" @click="Schedule(id)">
          预约
        </mt-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    //接收父元素数据
    id:{default:""},
    title:{type:String,default:""},
    location:{type:String,default:""},
    distance:{type:String,default:""},
    empty:{type:String,default:""},
    free:{type:String,default:""},
    money:{type:String,default:""},
    itemClick:{type:Function},
    Goto:{type:Function},
    Schedule:{type:Function}
  },
  data(){
    return { }
  }
}
</script>
<style scoped>
  .rootstyle{
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid #ccc;
  }
  .leftstyle{
    width:70%;
    height:80px;
    margin:5px;
  }
  .rightstyle{
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:5px 10px 5px 10px;
    height:80px;
  }
  /*主标题*/
  .title{
    color:#000;
    font-size:20px;
  }
  /*子标题*/
  .location,.distance,.empty,.free,.money{
    color:gray;
    font-size:18px;
  }
  .rightstyle .goto,.schedule{
    display:flex;
    width:100%;
    height:35px;
    font-size:16px;
  }
  .rightstyle .goto{
    margin-bottom:5px;
  }
</style>
