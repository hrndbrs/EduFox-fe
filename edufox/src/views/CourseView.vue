<template>
  <SearchBar
    :options="[
      { id: '1', name: 'Category 1' },
      { id: '2', name: 'Category 2' },
      { id: '3', name: 'Category 3' }
    ]"
  />
  <div class="h-[100rem] w-full p-16 sm:w-7/12 xl:w-9/12 inline-block align-top -z-50">
    <ul v-if="courses.length > 0">
      <RouterLink to="/" v-for="course in courses" :key="course.id">
        <CourseList :course="course" />
      </RouterLink>
    </ul>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import client from '../api/config'
import CourseList from '../components/CourseList.vue'
import SearchBar from '../components/SearchBar.vue'

export default {
  name: 'CourseView',
  data() {
    return {
      courses: []
    }
  },
  props: ['query'],
  components: {
    RouterLink,
    SearchBar,
    CourseList
  },
  created() {
    client
      .get('/course')
      .then(({ data }) => {
        this.courses = data.data
      })
      .catch((err) => console.log(err))
  }
}
</script>
