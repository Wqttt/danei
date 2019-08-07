<template>
  <div class="product-app">
    <!-- Product.vue -->
    <!-- 一个商品 循环-->
    <div class="goods-item" v-for="(item,i) of list" :key="i">
      <img :src="'http://127.0.0.1:3000/'+item.img_url">
      <h4>{{item.lname}}</h4>
      <div class="info">
        {{item.price}}
      </div>
      <mt-button @click="addCart" :data-lid="item.lid" :data-price="item.price" :data-lname="item.lname">
        加入购物车
      </mt-button>
    </div>
    <!-- 加载更多的按钮 -->
    <mt-button type="primary" size="large" @click="loadMore">
      加载更多
    </mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[],//商品的列表数组
      pno:0,//页码(第几页)
    }
  },
  methods:{
    addCart(e){
      //功能：将商品添加至购物车
      //console.log(123);
      var lid=e.target.dataset.lid;
      var n=e.target.dataset.lname;
      var p=e.target.dataset.price;
      console.log(lid+":"+n+":"+p);
      //2.发送ajax请求
      //2.1请求服务器地址
      var url="addcart";
      //2.2请求参数
      var obj={lid:lid,lname:n,price:p};
      //3.获取返回的结果
      this.axios.get(url,{params:obj}).then(res=>{
        //3.1如果-1提示用户登录
        if(res.data.code==-1){
          this.$toast("请先登录再购买商品");
        }else{
          this.$toast("添加成功");
        }
      })
    },
    loadMore(){
      //功能：获取商品分页的数据
      // 1.发送请求
      var url="product";
      //当前页码加1
      this.pno++;
      //创建参数对象
      var obj={pno:this.pno};
      //发送ajax请求，获取当前页的内容
      this.axios.get(url,{params:obj}).then(res=>{
        // 2.获取服务        器返回结果
        //console.log(res.data.data);
        // 3.将返回结果保存
        //var rows=s1页.contacat(2页);
        //this.list=res.data.data;
        //4.拼接多页的内容
        var rows=this.list.concat(res.data.data);
        //5.将结果赋值给list
        this.list=rows;
      })
    }
  },
  created(){
    this.loadMore();
    console.log("1.create 组件创建成功")
  }
}
</script>
<style scoped>
  /*1.最外层的样式*/
  .product-app{
    display:flex;/*指定当前元素是弹性布局*/
    flex-wrap:wrap;/*指定子元素换行*/
    justify-content:space-between;/*指定子元素两端对齐*/
    padding:4px;/*最外层加内边距*/
  }
  /*2.修饰商品样式*/
  .goods-item{
    width:49%;/*指定商品元素的宽度*/
    border:1px solid #ccc;/*商品外灰色边框*/
    border-radius:5px;/*指元素圆角*/
    margin:2px 0;/*外边距*/
    padding:2px;/*内边距*/
    box-sizing:border-box;/*重新计算宽度*/
    display:flex;/*弹性*/
    flex-direction:column;/*指定子元素的排列方式*/
    min-height:247px;/*最小高度*/
  }
  /*3.修饰商品中图片样式*/
  .good-item img{
    width:100%;
  }
</style>
   