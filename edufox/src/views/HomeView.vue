<script>
export default {}
</script>

<template>
  <div id="bd1">
    <v-carousel hide-delimiters show-arrows="hover">
      <v-carousel-item
        :src="'https://images.squarespace-cdn.com/content/v1/50afefd0e4b01c11f0ec0c82/1492450168973-LV5US0CI39X911WR9DBT/DenverPublicSchools-DesignConcepts-LearningLandscapes-11.jpg'"
        cover
      ></v-carousel-item>

      <v-carousel-item
        :src="'https://assets.aecf.org/m/blogimg/_largeHeader/499992/blog-newlegislationsupports-2022.jpg '"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<style>
#bd1 {
  border: 0px solid;
}
</style>
