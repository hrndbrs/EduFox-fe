<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'NavBar',
  components: {
    RouterLink
  },
  methods: {
    handleNavBurgerClick() {
      const menu = document.querySelector('.mobile-menu')
      menu.classList.toggle('opacity-0')
    }
  }
}
</script>

<template>
  <!-- navbar goes here -->
  <nav class="bg-white z-[1000] relative">
    <div class="flex space-x-4 md:px-[10vw] md:justify-start justify-between px-5">
      <!-- logo -->
      <div>
        <RouterLink to="/" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
          <span class="font-bold">Better Dev</span>
        </RouterLink>
      </div>

      <!-- primary nav -->
      <div class="hidden md:flex items-center space-x-4 flex-1 justify-center">
        <RouterLink
          to="/courses"
          class="py-5 px-3 hover:text-orange-500 transition-all duration-300"
          >Courses</RouterLink
        >
        <RouterLink
          to="/enrollments"
          class="py-5 px-3 hover:text-orange-500 transition-all duration-300"
          >Enrollments</RouterLink
        >
      </div>

      <!-- secondary nav -->
      <div class="hidden md:flex items-center space-x-1">
        <RouterLink
          to="/register"
          class="py-2 px-8 bg-orange-500 hover:bg-orange-400 text-orange-900 hover:text-orange-800 rounded-full transition duration-300"
          >Register Now</RouterLink
        >
      </div>

      <div class="md:hidden flex items-center">
        <button class="mobile-menu-button" @click="handleNavBurgerClick">
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- mobile menu -->
    <div class="mobile-menu md:hidden opacity-0 h-0 transition-all duration-300">
      <RouterLink to="/courses" class="block p-3 text-s align-middle">Courses</RouterLink>
      <RouterLink to="/enrollments" class="block p-3 text-s align-middle">Enrollments</RouterLink>
      <RouterLink to="/Register" class="block p-3 text-s align-middle">Register Now</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav a {
  text-decoration: none;
  color: rgb(55 65 81);
}

nav a.router-link-active {
  color: rgb(249 115 22);
}

.mobile-menu a {
  text-align: center;
  background-color: white;
}
</style>
