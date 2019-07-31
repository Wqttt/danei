<template>
  <!-- div根元素 -->
  <div>
    <h1>Exam02.vue</h1>
    <!-- 调用mint-ui 用户输入框 -->
    <mt-field label="用户名" placeholder="请输入用户名" v-model="uname" :attr="{maxlength:8}"></mt-field>
    <!-- 练习：表单验证 -->
    <!-- 1.为表单添加密码输入框 -->
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd" :attr="{maxlength:8}"></mt-field>
    <!-- 2.为表单添加年龄输入框 -->
    <mt-field label="年龄" placeholder="请输入年龄" type="number"  v-model="uage" :attr="{maxlength:2}"></mt-field>
    <!-- 3.为表单添加按钮 注册 -->
    <mt-button type="primary" size="large" @click="openReg">用户注册</mt-button>
    <!-- 4.用户点击注册按钮完成表单验证 -->
    <!-- 用户名 3~8 字母数字 密码验证规则相同
    年龄   2   数字
    如果用户输入的内容有误：明确提示 -->
  </div>
</template>
<script>
export default {
  data(){//组件中共享数据
    return {
      uname:"",//双向绑定用户名
      upwd:"",//双向绑定密码
      uage:""//双向绑定年龄
    }//数据
  },
  methods:{
    openReg(){
      //功能：对表单中每个元素验证
      //1.创建验证所需正则表达式 用户名/密码
      var reg=/^[A-Za-z0-9]{3,8}$/i;
      //2.创建验证所需正则表达式 年龄
      var ureg=/^\d{2}$/;
      //3.获取用户名
      var u=this.uname;
      //4.获取密码
      var p=this.upwd;
      //5.获取年龄
      var a=this.uage;
      console.log(u+":"+p+":"+a);
      //6.通过正则表达式验证用户名
      if(!reg.test(u)){
        //7.出错显示交互提示消息
        this.$messagebox("消息","用户名格式不正确");
        //8.程序停止
        return;
      }else if(!reg.test(p)){
        this.$messagebox("消息","密码格式不正确");
        return;
      }else if(!ureg.test(a)){
        this.$messagebox("消息","年龄格式不正确");
        return;
      }else{
        this.$messagebox("消息","注册成功");
        return;
      }
    }
  }
}
</script>
<style>

</style>