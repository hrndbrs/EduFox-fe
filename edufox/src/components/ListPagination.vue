<template>
  <v-pagination v-if="length > 1" :length="length" v-model="current" />
</template>

<script>
export default {
  name: 'ListPagination',
  data() {
    const page = this.$route.query.page
    return {
      current: page ? page : 1
    }
  },
  watch: {
    page() {
      this.current = this.page ? +this.page : 1
    },
    current() {
      const query = this.$route.query
      this.$router.push({
        query: { ...query, page: this.current }
      })
    }
  },
  props: ['length', 'page']
}
</script>
