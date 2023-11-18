<template>
  <SearchBar
    :options="[
      { id: '1', name: 'Category 1' },
      { id: '2', name: 'Category 2' },
      { id: '3', name: 'Category 3' }
    ]"
  />
  <div class="h-[100rem]"></div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'

export default {
  name: 'CourseView',
  props: ['query'],
  components: {
    SearchBar
  }
}
</script>
