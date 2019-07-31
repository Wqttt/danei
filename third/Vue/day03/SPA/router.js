var routes=[
  {
    path:"/",
    component:index
  },
  {
    path:"/details/:lid",
    component:details,
    props:true
  },
  {
    path:"/login",
    component:login
  },
  {
    path:"*",
    component:notFound
  }
];
var router=new VueRouter({routes});