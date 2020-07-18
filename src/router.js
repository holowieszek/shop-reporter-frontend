import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld';
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'

import asyncWrapper from './utils/asyncWrapper'
import { isAuthenticated } from './services/user.service'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HelloWorld, meta: { public: true } },
  { path: '/signin', component: SignIn, meta: { public: true, onlyWhenLoggedOut: true } },
  { path: '/signup', component: SignUp, meta: { public: true, onlyWhenLoggedOut: true } }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(async (to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public);
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const isLogged = await asyncWrapper(isAuthenticated());

  if (!isLogged.result && !isPublic) {
    return next({ path: '/signin' });
  }

  if (isLogged.result && onlyWhenLoggedOut) {
    return next('/perfume');
  }

  next();
})

export default router