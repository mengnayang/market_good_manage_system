import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from "../components/Welcome"
import Register from "../components/Register"
import Users from "../components/user/Users"
import Right from "../components/right/Right"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/home',
      component:Home,
      redirect:'/welcome',
      children:[
        {
          path:'/welcome',
          component:Welcome
        },
        {
          path:'/users',
          component:Users
        },
        {
          path:'/right',
          component:Right
        }
      ]
    },
    {
      path:'/register',
      component:Register
    }
  ],
  mode:'history'
})

//挂载路由导航守卫
router.beforeEach((to,from,next) => {
  if (to.path === '/login' || to.path == '/register') return next()
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login');
  next()
})

export default router;
