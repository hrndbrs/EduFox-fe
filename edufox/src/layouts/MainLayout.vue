<template>
  <NavBar />
  <main class="h-screen">
    <RouterView />
  </main>
</template>

<script>
import { RouterView } from 'vue-router'
import NavBar from '../components/NavBar.vue'
export default {
  name: 'MainLayout',
  components: {
    NavBar,
    RouterView
  }
}
</script>

<style scoped></style>
