<template>
  <NavBar />
  <RouterView />
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
