import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from '../stores/user'
import MainLayout from "../layouts/MainLayout.vue"
import AuthLayout from "../layouts/AuthLayout.vue"

const router = createRouter({
  scrollBehavior: () => ({ top: 0 }),
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
          component: () => import("../views/EnrollmentsView.vue"),
          props: route => ({ query: route.query }),
        },
        {
          path: "/courses",
          name: "courses",
          component: () => import("../views/CourseView.vue"),
          props: route => ({ query: route.query }),
        },
        {
          path: "/courses/:id",
          name: "course-details",
          component: () => import("../views/CourseByIdView.vue"),
        },
        {
          path: "/enrollments/:enrollmentId/:chapterId",
          name: "course-detail",
          component: () => import("../views/EnrollmentsId.vue")
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
