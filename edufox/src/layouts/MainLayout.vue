<template>
  <div class="min-h-screen relative">
    <NavBar />
    <RouterView />
    <CustFooter />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import CustFooter from '../components/CustFooter.vue'

export default {
  name: 'MainLayout',
  components: {
    NavBar,
    RouterView,
    CustFooter
  }
}
</script>

<style scoped></style>
