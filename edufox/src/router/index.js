import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from '../stores/user'
import MainLayout from "../layouts/MainLayout.vue"
import AuthLayout from "../layouts/AuthLayout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      beforeEnter: (_to, _from, next) => {
        useUserStore().checkCredentials()
        next()
      },
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
          name: "course-detail",
          component: () => import("../views/CourseByIdView.vue")
        }
      ]
    },
    {
      path: "/",
      component: AuthLayout,
      beforeEnter: (_to, _from, next) => {
        if (localStorage.getItem("access_token")) return next("/")
        next()
      },
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
