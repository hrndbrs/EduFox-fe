<script>
import { RouterLink } from 'vue-router'
import client from '../api/config'
import AuthForm from '../components/AuthForm.vue'
import { createToast } from '../utils/toastify'

export default {
  name: 'RegisterView',
  methods: {
    handleSubmit(input) {
      client
        .post('/register', input)
        .then(() => {
          this.$router.push('/login')
          createToast('Great! Your new accout has been created!', 'success')
        })
        .catch((err) => {
          if (err.response.data.message) {
            createToast(err.response.data.message, 'error')
          }
          // console.log(JSON.stringify(err, null, 4))
        })
    }
  },
  components: {
    AuthForm,
    RouterLink
  }
}
</script>

<template>
  <div class="md:block hidden">
    <img
      class="max-w-md"
      src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/512/external-slider-water-park-flatart-icons-flat-flatarticons-2.png"
      alt="external-slider-water-park-flatart-icons-flat-flatarticons-2"
    />
  </div>
  <div class="md:shrink-0 max-md:flex-1 max-lg:p-8">
    <div class="mb-12">
      <h1 class="max-md:text-center font-semibold text-3xl">Become an EduFox</h1>
      <p class="text-slate-400 max-md:text-center max-md:px-8">
        Become a member and learn together with other EduFoxes
      </p>
    </div>
    <AuthForm
      :fields="[
        {
          label: 'Username',
          name: 'username'
        },
        {
          label: 'Email',
          name: 'email'
        },
        {
          label: 'Password',
          name: 'password',
          type: 'password'
        }
      ]"
      buttonLabel="Register"
      :onSubmit="handleSubmit"
    />
    <p class="max-md:pt-4 max-md:text-center md:pt-8">
      Already have an account?
      <RouterLink class="text-emerald-600" to="/login">Log into your account</RouterLink>
    </p>
  </div>
</template>
