import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import TeachersView from '../views/Teachers/TeachersView.vue'
import StudentsView from '../views/Students/StudentsView.vue'
import HomeView from '../views/Home/HomeView.vue'
import TestView from '../views/TestView/TestView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/',
          name: "home",
          component: HomeView
        },
        {
          path: '/students',
          name: "Student",
          component: StudentsView
        },
        {
          path: '/teachers',
          name: "Teacher",
          component: TeachersView
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: "Error",
      component: ()=>import("../views/Error/Error.vue")
    }

  ]
})




export default router
