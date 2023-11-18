<template>
  <div class="w-screen h-screen">
    <div class="mx-auto max-w-5xl flex flex-col justify-center h-full">
      <div class="flex md:justify-between">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
export default {
  name: 'AuthLayout',
  components: {
    RouterView
  }
}
</script>

<style scoped></style>
