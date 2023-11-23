<template>
  <div class="w-screen h-screen">
    <RouterLink to="/" class="home-icon absolute top-2 left-2 flex items-center">
      <v-btn variant="text" icon="mdi-home-variant" />
      <p class="uppercase font-semibold">home</p>
    </RouterLink>
    <div class="mx-auto max-w-5xl flex flex-col justify-center h-full">
      <div class="flex md:justify-between">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'
export default {
  name: 'AuthLayout',
  components: {
    RouterView,
    RouterLink
  }
}
</script>

<style scoped>
.home-icon > p {
  opacity: 0;
  translate: -50px;
  scale: 0.5;
  transition: all 0.3s;
}
.home-icon:hover > p {
  opacity: 1;
  translate: 0;
  scale: 1;
}
</style>
