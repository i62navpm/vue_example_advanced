import Vue from 'vue'
import Router from 'vue-router'
import Components from 'components'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Components.Hello
    },
    {
      path: '/bye',
      name: 'bye',
      component: Components.Bye,
      meta: {requiresAuth: true}
    }
  ]
})

let auth = {
  loggedIn: true
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    !auth.loggedIn ? next({name: 'hello'}) : next()
  } else {
    next()
  }
})

export default router
