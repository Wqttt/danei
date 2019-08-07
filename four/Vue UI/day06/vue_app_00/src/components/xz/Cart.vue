<template>
  <div class="cart">
    <!-- Cart.vue 购物车组件 -->
    <!-- <h1>Cart.vue</h1> -->
    <!-- (1)顶部按钮：全选 -->
    <div class="selectAll">
      全选
      <input type="checkbox">
    </div>
    <!-- (2)购物车信息 -->
    <div class="cart-item" v-for="(item,i) of list" :key="i">
      <div class="leftImgText">
        <input type="checkbox">
        <img :src="'http://127.0.0.1:3000/'+item.img_url" alt="">
        <div class="lname">{{item.lname}}</div>
        <div class="price">{{item.price}}</div>
      </div>
      <mt-button>删除</mt-button>
    </div>
    <!-- (3)按钮 删除选中商品 -->
    <!-- 合计 -->
    <div>
      <mt-button class="delItem">删除选中商品</mt-button>
      小计：<span></span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[]
    }
  },
  methods:{
    delItem(e){
      // 功能：删除购物车中指定商品
      // 获取购物车id
      /*var id=e.target.dataset.id;
      // 交互提示用户是否删除指定商品
      this.$axios.get()
      if(){
        // 同意
        // 发送ajax 服务器端程序 ?id=id
        this.$toast("消息","是否删除")
      }else{
        // 返回服务器返回内容
      } 
      // 重新调用 loadMore() 最新购物列表查询*/
    },
    loadMore(){
      //功能：加在购物车中数据
      //当组件创建成功后调用
      // 1.发送请求cart
      var url="cart";
      this.axios.get(url).then(res=>{
        console.log(res);
        // 2.获取返回结果
        if(res.data.code==-1){
          // 3.如果用户没有执行登录的操作
          this.$messagebox("消息","请登录").then(res=>{
            //   3.1提示交互提示/跳转登录组件
            this.$router.push("/Login");
            return;
          });
        }else{
          // 4.获取数据成功
          var list=res.data.data;
          // 5.保存购物车数据
          this.list=list;
        }
      })
    }
  },
  created(){ 
    this.loadMore();
  }
}
</script>
<style scoped>
  /*1.商品项目元素*/
  .cart-item{
    display:flex;/*商品项目设置弹性布局*/
    justify-content:space-between;/*子元素两端对齐*/
    align-items:center;/*垂直居中*/
    border-bottom:1px solid #ccc;/*底部边框*/
    margin-top:25px;
  }
  /*2.左侧图片与文字*/
  .leftImgText{
    display:flex;/*子元素水平对齐*/
    align-items:center;/*垂直居中*/
  }
  /*3.单独修改图片宽度/高度*/
  .leftImgText img{
    width:50px;
    height:50px;
  }
  /*4.商品价格*/
  .price{
    margin-left:25px;
    color:red;
  }
</style>
