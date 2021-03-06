import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Parking from '../views/Parking.vue'
import Diary from '../views/Diary.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: Home
  },
  {
    path: '/Parkimine',
    name: 'Parkimine',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Parking
  },
  {
    path: '/Paevik',
    name: '',
    component: Diary
  }
]

const router = new VueRouter({
  routes
})

export default router
