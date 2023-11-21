<script>
import client from '../api/config'

export default {
  name: 'Feedback',
  data() {
    return {
      dataFB: {
        rating: 0,
        comment: ''
      }
    }
  },
  methods: {
    handleSubmit() {
        console.log(this.dataFB)
      client(`/feedback/${this.$route.params.courseId}`,{
        method: "post",
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
            rating: this.dataFB.rating,
            comment: this.dataFB.comment
        }
      })
      .then(({data}) => {
        console.log(data);
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<template>
  <div class="mt-10">
    <div>
      <p class="ml-1 text-xl">Feedback</p>
    </div>
    <div id="bd" class="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-2">
      <form method="post" @submit.prevent="handleSubmit">
        <div class="mx-2">
          <div class="">
            <v-rating
              v-model="dataFB.rating"
              hover
              half-increments
              color="orange-lighten-1"
              class="mt-2"
            ></v-rating>
          </div>
          <div class="mt-2">
            <v-textarea
              v-model="dataFB.comment"
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
      </form>
    </div>
  </div>
</template>
