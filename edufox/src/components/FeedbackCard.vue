<template>
  <div
    class="bg-white w-full rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500"
  >
    <div class="w-14 h-14 rounded-full flex items-center justify-center">
      <img
        class="w-full object-cover rounded-full"
        :src="feedback.User.profilePicture || '/avatar.jpeg'"
        alt=""
      />
    </div>
    <div class="mt-4">
      <h1 class="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
        {{ feedback.User.username }}
      </h1>
      <div class="flex mt-2">
        <v-rating
          v-model="rating"
          readonly
          half-increments
          :model-value="feedback.rating"
          :size="25"
          color="orange-lighten-1"
          class="mt-2"
        ></v-rating>
      </div>
      <p class="mt-4 text-md text-gray-600">
        {{ feedback.comment }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackCard',
  props: ['feedback']
}
</script>
