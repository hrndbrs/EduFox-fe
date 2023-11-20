<template>
  <SearchBar :options="categories" />
  <div class="w-full p-16 sm:w-7/12 xl:w-9/12 inline-block align-top -z-50">
    <ul class="flex flex-col gap-3" v-if="courses.length > 0">
      <RouterLink :to="`/courses/${course.id}`" v-for="course in courses" :key="course.id">
        <CourseList :course="course" />
      </RouterLink>
    </ul>
    <ListPagination :length="numberOfPages" :page="currentPage" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { RouterLink } from 'vue-router'
import client from '../api/config'
import useCategoriesStore from '../stores/categories'
import CourseList from '../components/CourseList.vue'
import SearchBar from '../components/SearchBar.vue'
import ListPagination from '../components/ListPagination.vue'

export default {
  name: 'CourseView',
  data() {
    return {
      courses: [],
      courseLoading: true,
      numberOfPages: 0,
      currentPage: this.$route.page || 1
    }
  },
  props: ['query'],
  components: {
    RouterLink,
    SearchBar,
    CourseList,
    ListPagination
  },
  computed: {
    ...mapState(useCategoriesStore, ['categories', 'error', 'loading'])
  },
  methods: {
    ...mapActions(useCategoriesStore, ['getCategories']),
    fetchAllCourses() {
      const query = new URLSearchParams(this.query).toString()

      client
        .get(`/course${query && `?${query}`}`)
        .then(({ data }) => {
          this.numberOfPages = data.totalPage
          this.courses = data.data
          this.currentPage = +data.currentPage
        })
        .catch((err) => console.log(JSON.stringify(err, null, 4)))
        .finally(() => {
          this.courseLoading = false
        })
    }
  },
  watch: {
    query() {
      this.fetchAllCourses()
    }
  },
  created() {
    this.getCategories()
    this.fetchAllCourses()
  }
}
</script>

<style scoped>
ul > a:not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>
