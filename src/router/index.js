import Vue from 'vue'
import VueRouter from 'vue-router'
import TheStudentsPage from '@/components/TheStudentsPage'
import TheCoursesPage from '@/components/TheCoursesPage'
import TheSubjectsPage from '@/components/TheSubjectsPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TheCoursesPage
  },
  {
    path: '/students',
    name: 'students',
    component: TheStudentsPage
  },
  {
    path: '/courses',
    name: 'courses',
    component: TheCoursesPage
  },
  {
    path: '/subjects',
    name: 'subjects',
    component: TheSubjectsPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
