import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "@/views/Login"
import Index from '@/views/Index'
import UserList from '@/views/UserList'
import Admintool from '@/views/AdminTool'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/userlist',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/admintool',
      name: Admintool,
      component: Admintool
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
