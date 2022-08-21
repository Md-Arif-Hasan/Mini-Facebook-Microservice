import { createRouter, createWebHistory } from 'vue-router'
import login from '../components/login.vue'
import register from '../components/register.vue'
import createpost from '../components/createpost.vue'
import showstories from '../components/showstories.vue'
import statuslist from '../components/statuslist.vue'
import story from '../components/story.vue'
import writepost from '../components/writepost.vue'




const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },

  {
    path: '/register',
    name: 'register',
    component: register
  },


  {
    path: '/create',
    name: 'createpost',
    component: createpost
  },

  {
    path: '/show',
    name: 'showstories',
    component: showstories
  },

  {
    path: '/status',
    name: 'statuslist',
    component: statuslist
  },

  {
    path: '/story',
    name: 'story',
    component: story
  },

  {
    path: '/write',
    name: 'post',
    component: writepost
  },


  {
    path: '/story',
    name: 'story',
    component: story
  },

  {
    path: '/write',
    name: 'writepost',
    component: writepost
  },


  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
