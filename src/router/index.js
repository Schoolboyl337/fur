import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import callback from '../views/callback.vue'
import games from '../views/games.vue'
import NotFound from '../components/pages/404.vue'


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
  { path: '/404', component: NotFound },  
  { path: '/:catchAll(.*)', redirect:'404' },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
