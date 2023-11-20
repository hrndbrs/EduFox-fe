<template>
  <div
    class="max-sm:fixed max-sm:top-20 sm:sticky pl-6 top-4 sm:w-5/12 xl:w-3/12 inline-block align-top z-[500]"
  >
    <v-btn
      class="mb-3 rounded-md"
      :variant="toggleBtnVariant"
      prepend-icon="mdi-filter"
      @click="
        () => {
          open = !open
        }
      "
    >
      Filter
    </v-btn>
    <div class="pl-4" v-show="open">
      <form
        class="justify-center bg-white px-6 py-8 rounded-lg sm:h-[80dvh]"
        @submit.prevent="handleSubmit"
      >
        <p class="mb-2">Search course by name</p>
        <v-text-field
          :class="classes"
          clearable
          density="comfortable"
          variant="solo-filled"
          label="Name"
          v-model="input.name"
        />
        <p class="mb-2">Categories</p>
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
      open: window.innerWidth >= 640,
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
    },
    toggleBtnVariant() {
      return window.innerWidth < 640 ? 'elevated' : 'plain'
    }
  },
  methods: {
    handleSubmit() {
      if (!this.input.name) this.input.name = ''

      this.$router.push({
        path: '/courses',
        query: { ...this.input }
      })
    }
  }
}
</script>

<style scoped>
@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

form {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

div > div {
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
</style>
