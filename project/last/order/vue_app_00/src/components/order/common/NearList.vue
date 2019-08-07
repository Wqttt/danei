<template>
  <div>
     <near
      class="itemstyle"
      v-for="(item,i) in datas.data"
      :key="i"
      :id="item.id"
      :title="item.title"
      :location="item.location"
      :distance="item.distance"
      :empty="item.empty"
      :free="item.free"
      :money="item.money"
      :itemClick="clickitem"
      :Goto="gohear"
      :Schedule="sch"
     ></near>
  </div>
</template>
<script>
import  Near from "./Near"
//负责引入json文件
import nearjson from "../json/nearlist.json"
export default {
  data(){
    return {
      datas:nearjson
    }
  },
  methods:{
    clickitem(id){
      //console.log(id);
    },
    gohear(id){
      console.log(id+"到这去");
    },
    sch(id){
      console.log(id+"预约");
    }
  },
  components:{
    "near":Near
  }
}
</script>
<style scoped>
  
</style>