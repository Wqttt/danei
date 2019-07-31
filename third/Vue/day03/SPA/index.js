var index={
  template:`<div>
    <my-header/>
    <h1>这里是首页！</h1>
    <p>欢迎访问我的第一个SPA应用</p>
    <router-link to="/details/5">查看详情</router-link>
    <router-link to="/details/13">查看详情</router-link>
    <button @click="goto">查看详情</button>
  </div>`,
  methods:{
    goto(){
      this.$router.push("/details/25")
    }
  }
}