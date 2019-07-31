var todoItem={
  template:`<li>
    {{i+1}} - {{t}} <button @click="del">x</button>
  </li>`,
  props:["t","i","tasks"],
  methods:{
    del(){
      if(confirm(`是否继续删除 ${this.t} 吗？`)){
        this.tasks.splice(this.i,1);
      }
    }
  },
  created(){
    console.log(`created: i=${this.i}`)
  },
  mounted(){
    console.log(`mounted: i=${this.i}`)
  },
  updated(){
    console.log(`updated: i=${this.i}`)
  },
  data(){
    return {
      //i:2 //报错: i已存在！
    }
  }
}