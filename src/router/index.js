import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import("@/views/Index")
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import("@/views/Login")
    },
    {
      path: '/userlist',
      name: 'UserList',
      component: () => import("@/views/UserList")
    },
    {
      path: '/admintool',
      name: 'Admintool',
      component: () => import("@/views/AdminTool")
    }
  ]
});
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');
  if (token || to.path === '/login') {
    next();
  } else {
    next('/login');
  }
});
export default router;
