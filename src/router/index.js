import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const Home = () => import('@/pages/home/Home')
const Cart = () => import('@/pages/cart/Cart')
const Category = () => import('@/pages/category/Category')
const Profile = () => import('@/pages/profile/Profile')
Vue.use(VueRouter)

// 配置路由信息
const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  }
]

// 创建vuerouter实例
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 导出路由
export default router