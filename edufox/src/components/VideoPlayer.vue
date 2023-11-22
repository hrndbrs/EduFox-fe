<template>
  <div class="aspect-[16/9]">
    <iframe
      class="w-full h-full"
      :src="source"
      :title="title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: ['source', 'title']
}
</script>
