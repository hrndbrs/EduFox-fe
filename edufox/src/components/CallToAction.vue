<template>
  <div
    class="w-full flex flex-col items-center bg-gradient-to-l from-black via-zinc-800 to-black p-12"
  >
    <span class="text-white text-6xl"
      >Become an <span class="text-orange-500 font-semibold text-7xl">EduFox</span></span
    >
    <div class="w-64 rounded-full aspect-square max-w-lg">
      <v-img class="logo" src="/logo.svg" cover />
    </div>
    <p class="text-xl text-white max-w-xl text-center mb-8">
      And let your child immerse themselves in a captivating world of interactive learning
      experiences that extend far beyond traditional classroom settings
    </p>
    <RouterLink to="/register" v-if="!isLoggedIn">
      <CustBtn :block="false">Try EduFox For Free</CustBtn>
    </RouterLink>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import useUserStore from '../stores/user'
import { RouterLink } from 'vue-router'
import CustBtn from './CustBtn.vue'

export default {
  name: 'CallToAction',
  components: {
    CustBtn,
    RouterLink
  },
  computed: {
    ...mapState(useUserStore, ['isLoggedIn'])
  }
}
</script>

<style scoped>
.logo {
  filter: drop-shadow(-3px -1px 7px #515050);
}
</style>
