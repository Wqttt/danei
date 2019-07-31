var todoList={
  template:`<ul>
    <todo-item v-for="(t,i) of tasks" :key="i" :t="t" :i="i" :tasks="tasks"/>
  </ul>`,
  data(){
    return {
      //tasks:[ ... ]
    }
  },
  //给子组件添加自定义属性，准备接父组件给的变量值！
  props:["tasks"],
  components:{ todoItem }
//      自动翻译   ↓
//             todo-item
}