<script>
import Feedback from '../components/Feedback.vue'
import client from '../api/config'
import VideoPlayer from '../components/VideoPlayer.vue'
import { createToast } from '../utils/toastify'

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
    VideoPlayer,
    Feedback
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
          .catch((err) => {
            if (err.response.data.message) {
              createToast(err.response.data.message, 'error')
            }
            // console.log(JSON.stringify(err, null, 4))
          })
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
        .then(() => {
          this.getEnrollment()
          createToast("You've reached the end of this class. よくできました！")
          setTimeout(
            () => createToast('Please help us improve this course by leaving a review'),
            1200
          )
        })
        .catch((err) => {
          if (err.response.data.message) {
            createToast(err.response.data.message, 'error')
          }
          // console.log(JSON.stringify(err, null, 4))
        })
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
          <p class="text-2xl font-extralight">{{ `${course.name} #${chapter.chapterNo} :` }}</p>
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
              <v-expansion-panel-title class="font-semibold text-7xl"
                ><span class="text-xl"> Description </span>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="p-4 text-justify">
                {{ chapter.description }}</v-expansion-panel-text
              >
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <!-- Feedback & rating -->
        <Feedback v-if="isLastChapter && course.status === 'finished'" :courseId="course.id" />
      </div>
    </section>

    <!-- Right-section -->
    <section id="bd" class="w-3/6 h-100">
      <div class="ml-5 py-24 w-11/12 h-100" id="bd">
        <div id="bd">
          <p class="text-xl font-semibold">Table Of Contents</p>
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
