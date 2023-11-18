<template>
  <div class="h-screen overflow-y-scroll">
    <NavBar />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import NavBar from '../components/Navbar.vue'
export default {
  name: 'MainLayout',
  components: {
    // NavBar,
    RouterView
  }
}
</script>

<style scoped></style>
