<template>
  <button :class="classes" :type="type || 'button'">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CustBtn',
  props: ['type', 'className', 'block', 'color'],
  computed: {
    buttonColor() {
      return this.color ? this.color : 'orange'
    },
    classes() {
      const { buttonColor, className } = this
      return `uppercase bg-${buttonColor}-500 hover:bg-${buttonColor}-400 w-full rounded-md p-2 font-semibold text-white transition-all duration-275 ${
        className ? className : ''
      }`
    }
  }
}
</script>
