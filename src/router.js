import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld';
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router