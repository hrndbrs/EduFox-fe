<template>
  <form class="md:min-w-[25vw] md:max-w-xl max-md:w-full" @submit.prevent="() => onSubmit(input)">
    <v-text-field
      variant="solo-inverted"
      clearable
      v-for="(field, i) in fields"
      :key="i"
      :type="field.type || 'text'"
      :label="field.label"
      :rules="rules"
      v-model="input[field.name || field.label]"
    />
    <slot></slot>
    <CustBtn type="submit" color="teal-accent-4">{{ buttonLabel || 'Submit' }}</CustBtn>
  </form>
</template>

<script>
import CustBtn from './CustBtn.vue'

export default {
  name: 'AuthForm',
  data() {
    return {
      input: {},
      rules: [
        value => !!value || "Required." 
      ]
    }
  },
  props: ['fields', 'buttonLabel', 'onSubmit'],
  components: {
    CustBtn
  }
}
</script>

<style scoped></style>
