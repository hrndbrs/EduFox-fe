<template>
  <li>
    <v-card>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h5">
            {{ course.name }}
          </v-card-title>
          <v-card-subtitle>{{ course.Category.name }}</v-card-subtitle>
          <v-badge
            v-if="course.isPremium"
            class="px-3 py-2"
            content="Premium"
            inline
            color="error"
          />
          <v-card-text>{{ course.description }}</v-card-text>
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
