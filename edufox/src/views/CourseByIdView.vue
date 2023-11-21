<script>
import { mapState, mapActions } from 'pinia'
import client from '../api/config'
import useUserStore from '../stores/user'
import CustBtn from '../components/CustBtn.vue'

export default {
  name: 'CourseByIdView',
  data() {
    return {
      course: { Chapters: [] }
    }
  },
  components: {
    CustBtn
  },
  computed: {
    ...mapState(useUserStore, ['isLoggedIn', 'profile']),
    userCanEnroll() {
      return this.isLoggedIn && (this.course.isPremium ? this.profile.userPremium : true)
    }
  },
  methods: {
    ...mapActions(useUserStore, ['enrollCourse']),
    getCourseDetail() {
      client
        .get('/course/' + this.$route.params.id)
        .then(({ data }) => {
          // console.log(data)
          this.course = data.data
        })
        .catch((err) => console.log(err))
    },
    addEnrollment() {
      this.enrollCourse(this.course.id)
        .then(() => this.$router.push('/enrollments'))
        .catch((err) => console.log(err))
    }
  },
  created() {
    this.getCourseDetail()
  }
}
</script>

<template>
  <main class="flex" style="background-color: #f5f7fa">
    <!-- left-section -->
    <section class="w-11/12 h-100 flex justify-center sticky top-4" id="bd">
      <div class="w-11/12 h-100 ml-5 py-10" id="bd">
        <div class="mb-1" id="bd">
          <p class="text-4xl">{{ course.name }}</p>
        </div>
        <div style="background-color: #fff" class="rounded" id="bd">
          <div class="flex justify-start p-2">
            <div class="w-[18rem] aspect-[7/5] bg-slate-400 flex">
              <img :src="course.imgUrl" alt="" class="object-cover" />
            </div>
            <div class="py-5 px-5 flex-1" id="bd">
              <p v-if="course.isPremium">Premium</p>
              <p class="font-semibold">Description</p>
              <p class="pt-1">
                {{ course.description }}
              </p>
              <CustBtn className="mt-6" v-if="userCanEnroll" :onClick="addEnrollment"
                >Enroll Now</CustBtn
              >
            </div>
          </div>
          <div class="flex justify-start">
            <!-- left-side -->
            <div id="bd" class="w-2/6 flex justify-center items-center">
              <div>
                <div class="d-flex align-center flex-column my-auto">
                  <div class="text-h2 mt-5">
                    {{ course.rating }}
                    <span class="text-h6 ml-n3">/5</span>
                  </div>

                  <v-rating
                    :model-value="course.rating"
                    color="yellow-darken-3"
                    half-increments
                    readonly
                  ></v-rating>
                  <div class="px-3">3,360 ratings</div>
                </div>
              </div>
            </div>
            <!-- right-side -->
            <div id="bd" class="w-4/6">
              <div class="mr-1">
                <v-list bg-color="transparent" class="d-flex flex-column-reverse" density="compact">
                  <v-list-item v-for="(rating, i) in 5" :key="i">
                    <v-progress-linear
                      :model-value="rating * 15"
                      class="mx-n5"
                      color="yellow-darken-3"
                      height="20"
                      :style="{ width: '350px' }"
                      rounded
                    ></v-progress-linear>

                    <template v-slot:prepend>
                      <span>{{ rating }}</span>
                      <v-icon icon="mdi-star" class="mx-3"></v-icon>
                    </template>

                    <template v-slot:append>
                      <div class="rating-values">
                        <span class="d-flex justify-end"> {{ rating * 224 }} </span>
                      </div>
                    </template>
                  </v-list-item>
                </v-list>
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
          <p class="text-xl">Table Of Contents</p>
        </div>
        <div class="">
          <v-expansion-panels multiple>
            <v-expansion-panel v-for="(panel, i) in course.Chapters" :key="i">
              <v-expansion-panel-title>Chapter {{ panel.chapterNo }}</v-expansion-panel-title>
              <v-expansion-panel-text> {{ panel.name }} </v-expansion-panel-text>
            </v-expansion-panel>
            <!-- <v-expansion-panel>
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
            </v-expansion-panel> -->
          </v-expansion-panels>
        </div>
        <div>
          <!-- review -->
          <div class="h-[55vh] bg-gray-100 flex items-center justify-center">
            <div class="px-5">
              <div
                class="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500"
              >
                <div
                  class="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white"
                >
                  LOGO
                </div>
                <div class="mt-4">
                  <h1 class="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
                    Product Review
                  </h1>
                  <div class="flex mt-2">
                    <v-rating
                      v-model="rating"
                      readonly
                      half-increments
                      :model-value="5"
                      :size="25"
                      color="orange-lighten-1"
                      class="mt-2"
                    ></v-rating>
                  </div>
                  <p class="mt-4 text-md text-gray-600">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and
                    praising pain was born and I will give you a complete account of the system, and
                    expound the actual teachings of the great explorer of the truth, the
                    master-builder of human happines.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
