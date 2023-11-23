<script>
import { mapActions } from 'pinia'
import useUserStore from '../stores/user'
import { createToast } from '../utils/toastify'
import client from '../api/config'

const initialValue = {
  rating: 0,
  comment: ''
}

export default {
  name: 'FeedBack',
  data() {
    return {
      input: {
        ...initialValue
      }
    }
  },
  props: ['courseId'],
  methods: {
    ...mapActions(useUserStore, ['checkCredentials']),
    handleSubmit() {
      // console.log(this.input)
      client(`/feedback/${this.courseId}`, {
        method: 'post',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          rating: this.input.rating,
          comment: this.input.comment
        }
      })
        .then(({ data }) => {
          // console.log(data)
          const { access_token, statusCode } = data
          if (access_token) {
            localStorage.setItem('access_token', access_token)
            this.checkCredentials()
          }
          if (statusCode === 200)
            createToast('Your review for this course has been updated', 'success')
          if (statusCode === 201)
            createToast('Thank you for sharing your review with us!', 'success')
          this.input = {
            ...initialValue
          }
        })
        .catch((err) => {
          console.log(err)
          if (err.response.data.message) {
            createToast(err.response.data.message, 'error')
          }
          // console.log(JSON.stringify(err, null, 4))
        })
    }
  }
}
</script>

<template>
  <div class="mt-10">
    <div>
      <p class="ml-1 text-2xl">Leave us a feedback</p>
    </div>
    <div id="bd" class="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-2">
      <form class="flex flex-col pt-2 pb-6 px-6 gap-2" method="post" @submit.prevent="handleSubmit">
        <v-rating v-model="input.rating" hover half-increments color="orange-lighten-1"></v-rating>
        <v-textarea
          v-model="input.comment"
          label="Comment About This Course"
          auto-grow
          variant="outlined"
          rows="3"
          row-height="25"
          shaped
        ></v-textarea>
        <div class="flex justify-end pr-5" id="bd">
          <v-btn type="submit" color="blue-accent-3" rounded> Submit </v-btn>
        </div>
      </form>
    </div>
  </div>
</template>
