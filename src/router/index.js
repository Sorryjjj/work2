import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        backgroundColor: '#000'
      }
    }
  ]
})


router.beforeEach((to, from, next) => {
  if(to.meta.backgroundColor) {
    document.body.style.background = to.meta.backgroundColor
  }
  next()
})
export default router
