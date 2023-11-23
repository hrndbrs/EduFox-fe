<template>
  <div class="flex items-center justify-center h-[75vh] gap-16">
    <div class="w-64">
      <img class="w-full object-cover" src="/sad-fox.png" alt="sadfox" />
    </div>
    <div class="flex flex-col gap-3">
      <p class="text-3xl">Login to view your courses</p>
      <RouterLink to="/login">
        <v-btn color="orange" block>To Login</v-btn>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'UnauthorizedView',
  components: {
    RouterLink
  }
}
</script>
