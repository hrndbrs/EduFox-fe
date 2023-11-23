<script>
export default {
  name: 'CardHome',
  props: ['course']
}
</script>

<template>
  <div class="max-w-sm rounded-lg shadow-lg flex flex-col justify-between">
    <div class="w-full aspect-[3/2] overflow-hidden">
      <img class="w-full object-cover" :src="course.imgUrl" />
    </div>
    <div class="px-6 py-4" id="bd">
      <div class="font-bold text-xl mb-2">{{ course.name }}</div>
      <p class="text-gray-700 text-base">
        {{ course.description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ course.Category?.name }}</span
      >
      <span
        v-if="course.isPremium"
        class="inline-block bg-red-700 rounded-full px-3 py-1 text-sm font-sem text-white mr-2 mb-2"
        >Premium</span
      >
      <slot name="additional"></slot>
      <slot name="action"></slot>
    </div>
  </div>
</template>
