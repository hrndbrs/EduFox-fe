<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NotFound',
  components: { RouterLink }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen gap-3">
    <div class="w-96 aspect-square flex justify-center bg-[#FEF0E8] rounded-full">
      <img src="/sad-fox.webp" class="logo w-full object-cover" alt="" />
    </div>
    <div class="flex flex-col items-center">
      <p class="font-bold text-4xl text-center">404 Not Found</p>
      <p class="text-center">Oops, page not found...</p>
    </div>
    <RouterLink to="/">
      <v-btn>Go To Homepage</v-btn>
    </RouterLink>
  </div>
</template>

<style scoped>
.logo {
  filter: drop-shadow(-17px 5px 12px #575757);
}
</style>
