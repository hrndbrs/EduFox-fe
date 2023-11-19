<template>
  {{ course }}
  <li>
    <v-card theme="dark">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h5"> {{ course.name }}</v-card-title>
          <v-card-subtitle>{{ course.Category.name }}</v-card-subtitle>
          <v-card-subtitle v-if="course.isPremium">Premium</v-card-subtitle>
        </div>
        <v-avatar class="ma-3" size="180" rounded="0">
          <v-img :src="course.imgUrl"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </li>
</template>

<script>
export default {
  name: 'CourseList',
  props: ['course']
}
</script>

<style scoped></style>
