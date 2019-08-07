<template>
  <div class="cart">
    <!-- Cart.vue 购物车组件 -->
    <!-- <h1>Cart.vue</h1> -->
    <!-- (1)顶部按钮：全选 -->
    <div class="selectAll">
      全选
      <input type="checkbox" @change="selectAll"/>
    </div>
    <!-- (2)购物车信息 -->
    <div class="cart-item" v-for="(item,i) of list" :key="i">
      <div class="leftImgText">
        <!-- item.cb双向绑定到复选框上 -->
        <input type="checkbox" v-model="item.cb"/>
        <img :src="'http://127.0.0.1:3000/'+item.img_url" alt="">
        <div class="lname">{{item.lname}}</div>
        <div class="price">{{item.price}}</div>
      </div>
      <mt-button @click="delItem" :data-id="item.id">删除</mt-button>
    </div>
    <!-- (3)按钮 删除选中商品 -->
    <!-- 合计 -->
    <div>
      购物车商品数量
      <span style="color:red;">
        {{$store.getters.getCartCount}}
      </span>
      <mt-button @click="delMitem">删除选中商品</mt-button>
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
    selectAll(e){
      // 全选按钮处理函数
      // 1.获取全选按钮状态
      var cb=e.target.checked;
      //console.log(cb);
      // 2.创建循环遍历购物车的数组
      for(var item of this.list){
        // 3.将全选的状态赋值给购物车商品的选中状态
        //item.cb是商品的选中状态，cb是全选按钮的状态
        item.cb=cb;
      }
    },
    delMitem(e){
      //功能：删除多个购物车中的指定商品
      // 1.创建变量来保存多个购物车中id值
      var str="";
      // 2.创建循环遍历数组获取状态为true的id值
      for(var item of this.list){
        if(item.cb){
          //true 当前商品被选中
          str+=item.id+",";
        }
      }
      // 2.1.判断用户是否选中了商品
      if(str.length==0){
        // 2.2.如果没有选中商品，显示确认消息
        this.$messagebox("请选择要删除的商品");
        return;//停止执行
      }
      // 3.截取字符串中最后一个(,)
      //substring截取字符串
      //0             起始下标
      //str.length-1  保留几个字符
      str=str.substring(0,str.length-1);
      //console.log(str); 
      // 4.显示交互式提示框，再次请用户确认操作
      this.$messagebox.confirm("是否删除数据?").then(res=>{
        //用户选择确定按钮
        var url="delM";
        var ids={ids:str};//!!参数名为ids:值拼接字符串
        //发送ajax请求
        this.axios.get(url,{params:ids}).then(res=>{
          //删除多个商品执行成功，加载心购物车列表
          this.loadMore();
          this.$toast("删除成功");
        })
      }).catch(err=>{
        console.log(err);
      })
      // 5.发送ajax请求删除多个数据
      // 6.提示用户删除成功
      // 7.再次重新加载购物车中的数据
    },
    delItem(e){
      // 功能：删除购物车中指定商品
      // 获取购物车id
      var id=e.target.dataset.id;
      //console.log(id);
      // 交互提示用户是否删除指定商品
      this.$messagebox.confirm("是否删除指定商品").then(res=>{
        // 同意
        // 发送ajax 服务器端程序 ?id=id
        var url="del";//请求服务器地址
        var obj={id:id};//请求服务器时发送参数
        // 返回服务器返回内容
        this.axios.get(url,{params:obj}).then(
          res=>{
            //如果服务器返回成功 成功条件code>0
            if(res.data.code>0){
              this.$toast("删除成功");//提示消息
              this.loadMore();//加载最新列表
            }
          }
        )
      }).catch(err=>{
      })     
      // 重新调用 loadMore() 最新购物列表查询
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
          // 4.1.创建循环遍历数组并且为每个元素添加cb属性表示商品前复选框的状态
          //加载之前先清空
          this.$store.commit("clear");
          // #注意顺序：先添加cb属性，再赋值给List
          for(var item of list){//list
            //4.1.1 添加cb属性表示状态
            item.cb=false;
            //4.1.2 修改共享购物车中数量值 vuex
            this.$store.commit("increment");
          }
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
