<template>
  <div>
    <h3>父组件</h3>
    <!-- 父组件：调用子组件并且传递参数 -->
    <!-- (1)引入子组件 -->
    <!-- (2)注册子组件 -->
    <!-- (3)调用子组件 -->
    <sub07 msg="微信(11)"></sub07>
    <!-- (4)为父组件指定访问路径 /Exam08Fa -->
  </div>
</template>
<script>
//1.(1)引入子组件
import Exam07Sub from "./Exam07Sub"
export default {
  data(){
    return {}
  },
  components:{
    //(2)注册子组件
    "sub07":Exam07Sub
  }
}
</script>