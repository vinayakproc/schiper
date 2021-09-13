import Vue from 'vue'
import VueRouter from 'vue-router'
import Slider from '../views/Slider.vue'
import Pets from '../views/Pets.vue'
import Dogs from '../views/Dogs.vue'
import Cats from '../views/Cats.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Slider',
    component: Slider
  },
  {
    path: '/pets',
    name: 'Pets',
    component: Pets
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: Dogs
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
