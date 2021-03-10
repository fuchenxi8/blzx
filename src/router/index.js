import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import Login from '../components/Login.vue'
import workstation from '../components/workstation.vue'
import workstationm from '../components/workstationm.vue'
import caseinformation from '../components/caseinformation.vue'
import newfile from '../components/newfile.vue'

// import demo3 from '../components/componentms/demo.vue'

// import Form from '../components/dynamicForm/form'
// import Item from '../components/dynamicForm/item'
 
// Vue.component('dynamic-form', Form)
// Vue.component('dynamic-form-item', Item)


Vue.use(VueRouter)

const routes = [
  //将初始页面重定向到login页面
 { path:'/',redirect: '/login'},
 { path: '/login', component: Login},
 { 
   path: '/workstation', 
   component: workstation,
   redirect: '/workstationm',
   children: [{
     path: '/workstationm',
     components: {
       workstationm:workstationm
     },
     redirect: '/caseinformation',
     children: [{
       path: '/caseinformation',
       name:caseinformation,
         components: {
          caseinformation: caseinformation
         }
     }]
   }]
  },

 { 
   path: '/workstationm', 
   component: workstationm,
   redirect: '/caseinformation',
   children: [{
     path: '/caseinformation',
     components: {
      caseinformation:caseinformation
     },
     redirect: '/newfile',
     children: [{
      path: '/newfile',
      name:newfile,
         components: {
           newfile: newfile
         }
       }]
     }],
     
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
