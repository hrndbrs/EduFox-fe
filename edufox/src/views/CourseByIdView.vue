<script>
import { RouterLink } from 'vue-router'
import { mapState, mapActions } from 'pinia'
import { createToast } from '../utils/toastify'
import client from '../api/config'
import useUserStore from '../stores/user'
import CustBtn from '../components/CustBtn.vue'
import FeedbackCard from '../components/FeedbackCard.vue'

export default {
  name: 'CourseByIdView',
  data() {
    return {
      course: { Chapters: [] },
      feedbacks: []
    }
  },
  components: {
    CustBtn,
    FeedbackCard,
    RouterLink
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
          this.course = data.data
          this.feedbacks = data.data.Feedbacks
        })
        .catch((err) => {
          this.$router.push({ name: 'not-found' })
          console.log(err)
        })
    },
    addEnrollment() {
      this.enrollCourse(this.course.id)
        .then(() => {
          this.$router.push('/enrollments')
          createToast('Great! You can start your learning', 'success')
        })
        .catch((err) => {
          // console.log(err.response.data)
          if (err.response.data.message) {
            createToast(err.response.data.message, 'error')
          }
        })
    },
    getRating(num) {
      return this.feedbacks.filter(({ rating }) => rating >= num && rating < num + 1).length
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
            <div class="py-5 px-5 flex-1">
              <p v-if="course.isPremium" class="text-emerald-600 font-semibold">Premium</p>
              <p class="font-semibold text-lg" :class="course.isPremium && 'mt-2'">Description</p>
              <p>
                {{ course.description }}
              </p>
              <CustBtn className="mt-6" v-if="userCanEnroll" :onClick="addEnrollment"
                >Enroll Now</CustBtn
              >
              <CustBtn className="mt-6" v-else-if="isLoggedIn" color="red-lighten-2"
                >Only Premium User Can Enroll To This Course</CustBtn
              >
              <RouterLink v-else to="/login">
                <CustBtn className="mt-6" color="red-lighten-2">Login To Enroll</CustBtn>
              </RouterLink>
            </div>
          </div>
          <div class="flex justify-start">
            <!-- left-side -->
            <div id="bd" class="w-2/6 flex justify-center items-center">
              <div>
                <div class="d-flex align-center flex-column my-auto">
                  <div class="text-h2 mt-5">
                    {{ Math.floor(course.rating * 100) / 100 }}
                    <span class="text-h6 ml-n3">/5</span>
                  </div>

                  <v-rating
                    :model-value="course.rating"
                    color="yellow-darken-3"
                    half-increments
                    readonly
                  ></v-rating>
                  <div class="px-3">{{ feedbacks.length }} rating(s)</div>
                </div>
              </div>
            </div>
            <!-- right-side -->
            <div id="bd" class="w-4/6">
              <div class="mr-1">
                <v-list bg-color="transparent" class="d-flex flex-column-reverse" density="compact">
                  <v-list-item v-for="(rating, i) in 5" :key="i">
                    <v-progress-linear
                      :model-value="(getRating(rating) * 100) / feedbacks.length"
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
                        <span class="d-flex justify-end"> {{ getRating(rating) }} </span>
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
          </v-expansion-panels>
        </div>
        <div class="bg-gray-100 flex flex-col items-center justify-center mt-12 gap-2">
          <p class="text-4xl text-center font-semibold w-10/12">
            What do students say about this course?
          </p>
          <!-- review -->
          <FeedbackCard v-for="(feedback, i) in feedbacks" :key="i" :feedback="feedback" />
          <p v-if="feedbacks.length === 0" class="p-3 text-lg">
            There is no review yet for this course
          </p>
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
