import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
        meta: {
            requiresAuth: true
        }
    },
      {
          path: '/login',
          name: 'Login',
          component: Login
          
      },
      {
          path: '*',
          redirect: '/login'
      }
  ]
})

router.beforeEach((to, from, next) =>{
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    
    if (requiresAuth && !currentUser) next('login')
    else if (!requiresAuth && currentUser) next('')
    else next()
    
})

export default router
