<template>
  <div class="max-w-4xl items-center mx-auto flex flex-col gap-3">
    <div class="flex flex-wrap gap-3 justify-center">
      <CardHome v-for="(enrollment, i) in enrollments" :key="i" :course="enrollment.Course">
        <template #action>
          <div class="py-3 px-9">
            <RouterLink :to="`/enrollments/${enrollment.Course.id}`">
              <CustBtn> Continue This Lesson </CustBtn>
            </RouterLink>
          </div>
        </template>
      </CardHome>
    </div>
    <ListPagination :length="numberOfPages" :page="currentPage" />
  </div>
</template>

<script>
import client from '../api/config'
import CardHome from '../components/CardHome.vue'
import ListPagination from '../components/ListPagination.vue'
import CustBtn from '../components/CustBtn.vue'

export default {
  name: 'EnrollmentsView',
  data() {
    return {
      enrollments: [],
      numberOfPages: 0,
      currentPage: this.query.page || 1
    }
  },
  props: ['query'],
  components: {
    CardHome,
    ListPagination,
    CustBtn
  },
  methods: {
    getEnrollments() {
      const query = new URLSearchParams(this.query).toString()
      client
        .get(`/enrollments${query && `?${query}`}`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          this.enrollments = data.data
          this.numberOfPages = data.totalPage
          this.currentPage = +data.currentPage
        })
        .catch((err) => console.log(JSON.stringify(err, null, 4)))
    }
  },
  watch: {
    query() {
      this.getEnrollments()
    }
  },

  created() {
    this.getEnrollments()
  }
}
</script>
