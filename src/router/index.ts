import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/HomePage/Home.vue'
import Todolist from '../views/ToDoList/Todolist.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todolist',
    name: 'Todolist',
    component: Todolist
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
