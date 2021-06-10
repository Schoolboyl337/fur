import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import callback from '../views/callback.vue'
import games from '../views/games.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/callback',
    name: 'callback',
    component: callback,
  
  },
  {
    path: '/games',
    name: 'games',
    component: games,
  
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
