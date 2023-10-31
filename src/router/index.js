import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    
    {
    path: '/方塊一',
      name: '方塊一',
      component: () => import('../views/方塊一.vue')
    },
    {
      path: '/方塊二',
      name: '方塊二',
      component: () => import('../views/方塊二.vue')
    },
    {
      path: '/disert',
      name: 'disert',
      component: () => import('../views/disert.vue')
    },
    {
      path: '/components/NetHomePage',
      name: '/components/NetHomePage',
      component: () => import('../components/NetHomePage.vue')
    },
    {
      path: '/components/houseHeader',
      name: '/components/houseHeader',
      component: () => import('../components/houseHeader.vue')
    },
    

    {
      path: '/Manga',
      name: 'Manga',
      component: () => import('../views/Manga.vue')
    },

    {
      path: '/components/BlogHeader',
      name: '/components/BlogHeader',
      component: () => import('../components/BlogHeader.vue')
    },

    {
      path: '/Fandi/FandiHome',
      name: '/Fandi/FandiHome',
      component: () => import('../views/Fandi/FandiHome.vue')
    },
    {
      path: '/Fandi/Otoiawa',
      name: '/Fandi/Otoiawa',
      component: () => import('../views/Fandi/Otoiawa.vue')
    },
    {
      path: '/Fandi/FandiRoguin',
      name: '/Fandi/FandiRoguin',
      component: () => import('../views/Fandi/FandiRoguin.vue')
    },
    {
      path: '/Fandi/person',
      name: '/Fandi/person',
      component: () => import('../views/Fandi/person.vue')
    },
    {
      path: '/Fandi/Sagasu',
      name: '/Fandi/Sagasu',
      component: () => import('../views/Fandi/Sagasu.vue')
    },
    {
      path: '/Fandi/bukken',
      name: '/Fandi/bukken',
      component: () => import('../views/Fandi/bukken.vue')
    },
    {
      path: '/Fandi/fanlist',
      name: '/Fandi/fanlist',
      component: () => import('../views/Fandi/fanlist.vue')
    },
   
    {
      path: '/components/BlogHeader',
      name: '/components/BlogHeader',
      component: () => import('../components/BlogHeader.vue')
    },
    {
      path: '/Blog/BlogAbout',
      name: '/Blog/BlogAbout',
      component: () => import('../views/Blog/BlogAbout.vue')
    },
    {
      path: '/components/bg2',
      name: '/components/bg2',
      component: () => import('../components/bg2.vue')
    },
    {
      path: '/Expense',
      name: 'Expense',
      component: () => import('../views/Expense.vue')
    },
    {
      path: '/bikePage/bikeHome',
      name: '/bikePage/bikeHome',
      component: () => import('../views/bikePage/bikeHome.vue')
    },
    {
      path: '/Blog/BlogTAINANCODE',
      name: '/Blog/BlogTAINANCODE',
      component: () => import('../views/Blog/BlogTAINANCODE.vue')
    },
    {
      path: '/NETpractice',
      name: 'NETpractice',
      component: () => import('../views/NETpractice.vue')
    },
  ]
})

export default router
