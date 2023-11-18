import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from "../layouts/MainLayout.vue"
import AuthLayout from "../layouts/AuthLayout.vue"
import Home from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import EnrollmentsView from "../views/EnrollmentsView.vue"
import CourseView from "../views/CourseView.vue"
import CourseByIdView from "../views/CourseByIdView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: "/enrollments",
          name: "enrollments",
          component: EnrollmentsView
        },
        {
          path: "/courses",
          name: "courses",
          children: [
            {
              path: "/",
              component: CourseView
            },
            {
              path: "/:id",
              component: CourseByIdView
            }
          ]
        }
      ]
    },
    {
      path: "/",
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: LoginView
        },
        {
          path: '/register',
          name: 'register',
          component: RegisterView
        },
      ]
    }
  ]
})

export default router
