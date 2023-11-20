<template>
  <v-btn
    class="p-2 transition-all duration-200"
    :color="buttonColor"
    :loading="loading"
    :block="block ?? true"
    :class="className"
    :type="type || 'button'"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'CustBtn',
  props: ['type', 'className', 'block', 'color', 'loading'],
  computed: {
    buttonColor() {
      return this.color ? this.color : 'orange-darken-2'
    }
  }
}
</script>
