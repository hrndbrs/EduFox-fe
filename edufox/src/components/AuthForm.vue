<template>
  <form class="md:min-w-[25vw] md:max-w-xl max-md:w-full" @submit.prevent="() => onSubmit(input)">
    <v-text-field
      v-for="(field, i) in fields"
      :key="i"
      :type="field.type || 'text'"
      :label="field.label"
      :name="field.name || field.label"
      @change.prevent="handleChange"
    ></v-text-field>
    <slot></slot>
    <CustBtn type="submit" color="emerald">{{ buttonLabel || 'Submit' }}</CustBtn>
  </form>
</template>

<script>
import CustBtn from './CustBtn.vue'

export default {
  name: 'AuthForm',
  data() {
    return {
      input: {}
    }
  },
  props: ['fields', 'buttonLabel', 'onSubmit'],
  methods: {
    handleChange(e) {
      const { name, value } = e.target
      this.input[name] = value
    }
  },
  components: {
    CustBtn
  }
}
</script>

<style scoped></style>
