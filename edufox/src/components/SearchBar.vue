<template>
  <div class="sticky pl-6 top-4 md:w-80">
    <h5 class="uppercase py-2 font-semibold">Filter</h5>
    <div class="pl-4">
      <form class="justify-center p-3 pb-8 rounded-lg" @submit.prevent="handleSubmit">
        <p>Search course by name</p>
        <v-text-field
          :class="classes"
          density="comfortable"
          variant="solo-filled"
          label="Name"
          v-model="input.name"
        />
        <p>Categories</p>
        <v-checkbox
          v-for="(option, i) in options"
          :key="i"
          class="h-12"
          :class="classes"
          density="comfortable"
          variant="solo-filled"
          :label="option.name"
          :value="option.id"
          v-model="input.categoryId"
        />
        <CustBtn className="mt-8" type="submit">Filter</CustBtn>
      </form>
    </div>
  </div>
</template>

<script>
import CustBtn from './CustBtn.vue'

export default {
  name: 'SearchBar',
  data() {
    return {
      input: {
        name: '',
        categoryId: []
      }
    }
  },
  components: {
    CustBtn
  },
  props: ['options'],
  computed: {
    classes() {
      return 'w-full'
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.input)
    }
  }
}
</script>

<style scoped>
form {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
