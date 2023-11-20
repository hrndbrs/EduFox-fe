import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from "../layouts/MainLayout.vue"
import AuthLayout from "../layouts/AuthLayout.vue"

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
          component: () => import('../views/HomeView.vue')
        },
        {
          path: "/enrollments",
          name: "enrollments",
          component: () => import("../views/EnrollmentsView.vue")
        },
        {
          path: "/courses",
          name: "courses",
          component: () => import("../views/CourseView.vue"),
          props: route => ({ query: route.query }),
        },
        {
          path: "/coursess",
          name: "course-details",
          component: () => import("../views/CourseByIdView.vue")
        },
        {
          path: "/enroll",
          name: "course-detail",
          component: () => import("../views/EnrollmentsId.vue")
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
          component: () => import('../views/LoginView.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../views/RegisterView.vue')
        },
      ]
    }
  ]
})

export default router
