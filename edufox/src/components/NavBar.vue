<script>
import { RouterLink } from 'vue-router'
import { mapState } from 'pinia'
import useUserStore from '../stores/user'
import Profile from './Profile.vue'
import ProfileDetail from './ProfileDetail.vue'

export default {
  name: 'NavBar',
  components: {
    RouterLink,
    Profile,
    ProfileDetail
  },
  computed: {
    ...mapState(useUserStore, ['isLoggedIn', 'profile'])
  },
  methods: {
    handleNavBurgerClick() {
      const menu = document.querySelector('.mobile-menu')
      menu.classList.toggle('opacity-0')
      menu.classList.toggle('hidden')
    }
  }
}
</script>

<template>
  <nav
    class="relative z-[1000] bg-white"
    :class="$route.name === 'home' && 'md:sticky md:bg-transparent md:w-full top-0'"
  >
    <div class="flex space-x-4 md:px-[10vw] md:justify-start justify-between px-16">
      <div>
        <RouterLink to="/" class="flex items-center gap-1 py-5 text-gray-700 hover:text-gray-900">
          <div class="w-12 rounded-full bg-white aspect-square">
            <v-img class="drop-shadow-xl" src="/logo.svg" cover />
          </div>
          <span class="text-black text-sm">by </span>
          <span class="font-bold">BetterDev</span>
        </RouterLink>
      </div>

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

      <div class="hidden md:flex items-center space-x-1">
        <RouterLink
          v-if="!isLoggedIn"
          to="/register"
          class="py-2 px-8 bg-orange-500 hover:bg-orange-400 text-orange-900 hover:text-orange-800 rounded-full transition duration-300"
          >Register Now</RouterLink
        >
        <Profile v-else :profile="profile" />
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

    <div class="mobile-menu hidden opacity-0 h-0 transition-all duration-300 z-[1000]">
      <RouterLink to="/courses" class="block p-3 text-s align-middle">Courses</RouterLink>
      <RouterLink to="/enrollments" class="block p-3 text-s align-middle">Enrollments</RouterLink>
      <RouterLink v-if="!isLoggedIn" to="/register" class="block p-3 text-s align-middle"
        >Register Now</RouterLink
      >
      <ProfileDetail v-else :profile="profile" :mobile="true" :callback="handleNavBurgerClick" />
    </div>
  </nav>
</template>

<style scoped>
.v-avatar {
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

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
