<script>
export default {
  name: 'CourseByIdView',
  data() {
    return {
      panel: [0, 1, 2, 3],
    }
  }
}
</script>

<template>
  <!-- <div>course {{ route.params }}</div> -->
  <main class="flex" style="background-color: #f5f7fa">
    <!-- left-section -->
    <section class="w-11/12 h-100 flex justify-center" id="bd">
      <div class="w-11/12 h-100 ml-5 py-10" id="bd">
        <div class="mb-1" id="bd">
          <p class="text-4xl">Title Courses</p>
        </div>
        <div style="background-color: #fff" class="rounded" id="bd">
          <div class="flex justify-center">
            <img :src="'https://placehold.co/800x500'" alt="" class="pt-5" />
          </div>
          <div class="py-5 px-5" id="">
            <p class="font-semibold">Description</p>
            <p class="pt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime totam cupiditate
              incidunt unde? Architecto minima quis id voluptate dolorem atque deleniti provident
              deserunt quisquam voluptatem? Ducimus ut odio fugit.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Right-section -->
    <section id="bd" class="w-3/6 h-100">
      <div class="ml-5 py-24 w-11/12 h-100" id="bd">
        <div class="mb-5" id="bd">
          <p class="text-xl">Table Of Content</p>
        </div>
        <div class="">
          <v-expansion-panels v-model="panel" multiple>
            <v-expansion-panel>
              <v-expansion-panel-title>Panel 1</v-expansion-panel-title>
              <v-expansion-panel-text> Some content </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title>Panel 1</v-expansion-panel-title>
              <v-expansion-panel-text> Some content </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title>Panel 1</v-expansion-panel-title>
              <v-expansion-panel-text> Some content </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title>Panel 1</v-expansion-panel-title>
              <v-expansion-panel-text> Some content </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title>Panel 1</v-expansion-panel-title>
              <v-expansion-panel-text> Some content </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title>Panel 1</v-expansion-panel-title>
              <v-expansion-panel-text> Some content </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
#bd {
  border: 0px solid red;
}
</style>
