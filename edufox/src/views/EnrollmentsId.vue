<script>
export default {
  name: 'EnrollmentId',
  data() {
    return {
      panel: [0, 1, 2, 3],
      rating: 3.5
    }
  }
}
</script>

<template>
  <main class="flex" style="background-color: #f5f7fa">
    <!-- left-section -->
    <section class="w-11/12 h-100 flex justify-center" id="bd">
      <div class="w-11/12 h-100 ml-5 py-10" id="bd">
        <div class="mb-1" id="bd">
          <p class="text-4xl">Title Courses</p>
        </div>
        <div style="background-color: #fff" class="rounded shadow-[0_8px_30px_rgb(0,0,0,0.12)]" id="bd">
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
          <div class="flex justify-end pr-5" id="bd">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-5"
            >
              Next
            </button>
          </div>
        </div>
        <!-- Feedback & rating -->
        <div class="mt-10">
          <div>
            <p class="ml-1 text-xl">Feedback</p>
          </div>
          <div id="bd" class="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-2">
            <div class="mx-2">
              <div class="">
                <v-rating
                  v-model="rating"
                  hover
                  half-increments
                  color="orange-lighten-1"
                  class="mt-2"
                ></v-rating>
              </div>
              <div class="mt-2">
                <v-textarea
                  label="Comment About This Course"
                  auto-grow
                  variant="outlined"
                  rows="3"
                  row-height="25"
                  shaped
                ></v-textarea>
              </div>
              <div class="flex justify-end pr-5" id="bd">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-5"
            >
              Submit
            </button>
          </div>
            </div>
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
              <v-expansion-panel-text>
                <input type="checkbox" name="" id="" />
                <label for="" class="ml-2">Materi 1</label>
              </v-expansion-panel-text>
              <v-expansion-panel-text>
                <input type="checkbox" name="" id="" />
                <label for="" class="ml-2">Materi 1</label>
              </v-expansion-panel-text>
              <v-expansion-panel-text>
                <input type="checkbox" name="" id="" />
                <label for="" class="ml-2">Materi 1</label>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title>Panel 1</v-expansion-panel-title>
              <v-expansion-panel-text>
                <input type="checkbox" name="" id="" />
                <label for="" class="ml-2">Materi 1</label>
              </v-expansion-panel-text>
              <v-expansion-panel-text>
                <input type="checkbox" name="" id="" />
                <label for="" class="ml-2">Materi 1</label>
              </v-expansion-panel-text>
              <v-expansion-panel-text>
                <input type="checkbox" name="" id="" />
                <label for="" class="ml-2">Materi 1</label>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title>Panel 1</v-expansion-panel-title>
              <v-expansion-panel-text>
                <input type="checkbox" name="" id="" />
                <label for="" class="ml-2">Materi 1</label>
              </v-expansion-panel-text>
              <v-expansion-panel-text>
                <input type="checkbox" name="" id="" />
                <label for="" class="ml-2">Materi 1</label>
              </v-expansion-panel-text>
              <v-expansion-panel-text>
                <input type="checkbox" name="" id="" />
                <label for="" class="ml-2">Materi 1</label>
              </v-expansion-panel-text>
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
  border: 0px solid;
}
</style>
