Vue.component("todo",{
  template:`
    <div>
      <h1>待办事项列表</h1>
      <todo-add/>
      <todo-list :tasks="tasks"/>
    </div>
  `,
  data(){
    return{
      tasks:["吃饭","睡觉","打豆豆"]
    }
  },
  components:{
    todoAdd,todoList
  }
})