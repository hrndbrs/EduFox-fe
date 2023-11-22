<script>
import client from '../api/config'
import VideoPlayer from '../components/VideoPlayer.vue'

export default {
  name: 'EnrollmentId',
  data() {
    return {
      id: this.$route.params.enrollmentId,
      currentChapter: 0,
      chapter: {},
      course: {},
      chapterList: []
    }
  },
  components: {
    VideoPlayer
  },
  computed: {
    totalChapter() {
      return this.chapterList.length
    },
    isLastChapter() {
      return this.chapter.chapterNo === this.chapterList.at(-1)?.chapterNo
    }
  },
  methods: {
    getEnrollment() {
      const { chapterId } = this.$route.params

      return client
        .get('/enrollments/' + this.id, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          const {
            curChapterId,
            status,
            Course: { Chapters, name, id }
          } = data.data
          this.currentChapter = Chapters.find((chp) => chp.id === curChapterId).chapterNo
          this.chapter = Chapters.find((chp) => chp.id === +chapterId)
          this.course = { id, name, status }
          this.chapterList = Chapters.map(({ id, name, chapterNo }) => ({
            id,
            name,
            chapterNo
          })).sort((a, b) => a.chapterNo - b.chapterNo)
        })
        .catch((err) => {
          console.log(err.toJSON())
        })
    },
    navigatePrev() {
      const { chapterList, chapter, id } = this
      const prevChapterId = chapterList.find((chp) => chp.chapterNo === chapter.chapterNo - 1).id
      this.$router.push(`/enrollments/${id}/${prevChapterId}`)
    },
    navigateNext() {
      const { chapterList, chapter, id, currentChapter, course } = this
      const nextChapter = chapterList.find((chp) => chp.chapterNo === chapter.chapterNo + 1)

      if (currentChapter < nextChapter.chapterNo)
        client
          .patch(
            `/enrollments/${course.id}`,
            {
              status: 'on progress',
              curChapterId: nextChapter.id
            },
            { headers: { access_token: localStorage.getItem('access_token') } }
          )
          .then(() => {
            this.$router.push(`/enrollments/${id}/${nextChapter.id}`)
          })
          .catch((err) => console.log(JSON.stringify(err, null, 4)))
      else this.$router.push(`/enrollments/${id}/${nextChapter.id}`)
    },
    finishCourse() {
      client
        .patch(
          `/enrollments/${this.course.id}`,
          {
            status: 'finished',
            curChapterId: this.chapter.id
          },
          { headers: { access_token: localStorage.getItem('access_token') } }
        )
        .then(() => this.getEnrollment())
        .catch((err) => console.log(JSON.stringify(err, null, 4)))
    }
  },
  watch: {
    $route() {
      this.getEnrollment()
    }
  },
  created() {
    this.getEnrollment()
  }
}
</script>

<template>
  <main class="flex bg-white">
    <!-- left-section -->
    <section class="w-11/12 h-100 flex justify-center" id="bd">
      <div class="w-11/12 h-100 ml-5 py-10" id="bd">
        <div class="mb-8" id="bd">
          <!-- <p class="text-4xl">{{ `${courseName} : ${chapter.name}` }}</p> -->
          <p class="text-2xl font-extralight">{{ course.name }} :</p>
          <p class="text-4xl font-medium">{{ chapter.name }}</p>
        </div>
        <div
          style="background-color: #fff"
          class="rounded shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          id="bd"
        >
          <VideoPlayer :source="chapter.videoUrl" />
          <div class="flex justify-end py-4 px-3 gap-2" id="bd">
            <v-btn
              v-if="chapter.chapterNo !== 1"
              color="blue-accent-3"
              rounded
              @click="navigatePrev"
            >
              Previous
            </v-btn>
            <v-btn v-if="!isLastChapter" color="blue-accent-3" rounded @click="navigateNext">
              Next
            </v-btn>
            <v-btn
              v-if="isLastChapter && course.status !== 'finished'"
              color="red-lighten-2"
              rounded
              @click="finishCourse"
            >
              Mark as Finished
            </v-btn>
          </div>
          <v-expansion-panels variant="accordion">
            <v-expansion-panel>
              <v-expansion-panel-title class="font-semibold">Description</v-expansion-panel-title>
              <v-expansion-panel-text class="p-4 text-justify">
                {{ chapter.description }}</v-expansion-panel-text
              >
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <!-- Feedback & rating -->
        <!-- <div class="mt-10">
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
        </div> -->
      </div>
    </section>

    <!-- Right-section -->
    <section id="bd" class="w-3/6 h-100">
      <div class="ml-5 py-24 w-11/12 h-100" id="bd">
        <div id="bd">
          <p class="text-xl">Table Of Contents</p>
        </div>
        <div class="">
          <v-list density="compact">
            <v-list-item
              v-for="(entry, i) in chapterList"
              :key="i"
              :value="entry.chapterNo"
              color="primary"
            >
              <v-list-item-title>
                {{ `Chapter ${entry.chapterNo}: ${entry.name}` }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
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
