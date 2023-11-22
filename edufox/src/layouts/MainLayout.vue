<template>
  <div class="min-h-screen">
    <NavBar />
    <RouterView />
  </div>
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
