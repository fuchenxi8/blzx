import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'


Vue.use(VueRouter)

const routes = [
  //将初始页面重定向到login页面
 { path:'/',redirect: '/login'},
 { path: '/login', component: Login}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
