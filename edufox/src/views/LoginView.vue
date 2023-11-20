<script>
import { RouterLink } from 'vue-router'
import client from '../api/config'
import AuthForm from '../components/AuthForm.vue'
import emailValidator from '../helpers/emailValidator'

export default {
  name: 'LoginView',
  methods: {
    handleSubmit(formInput) {
      const input = { password: formInput.password }
      if (emailValidator(formInput['Email/Username'])) input.email = formInput['Email/Username']
      else input.username = formInput['Email/Username']

      client
        .post('/login', input)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$router.push('/')
        })
        .catch((err) => console.log(JSON.stringify(err, null, 4)))
    }
  },
  components: {
    AuthForm,
    RouterLink
  }
}
</script>

<template>
  <div class="md:shrink-0 max-md:flex-1 max-lg:p-8">
    <div class="mb-12">
      <h1 class="max-md:text-center">Welcome Back!</h1>
      <p class="text-slate-400 max-md:text-center max-md:px-8">
        Login to see all of the contents tailored just for you
      </p>
    </div>
    <AuthForm
      :fields="[
        {
          label: 'Email/Username'
        },
        {
          label: 'Password',
          name: 'password',
          type: 'password'
        }
      ]"
      buttonLabel="Login"
      :onSubmit="handleSubmit"
    />
    <p class="max-md:pt-4 max-md:text-center md:pt-8">
      Don't have an account?
      <RouterLink class="text-emerald-600" to="/register">Create your EduFox account</RouterLink>
    </p>
  </div>
  <div class="md:block hidden">
    <img
      class="max-w-md"
      src="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/512/external-park-spring-photo3ideastudio-flat-photo3ideastudio.png"
      alt="external-park-spring-photo3ideastudio-flat-photo3ideastudio"
    />
  </div>
</template>

width="300" height="300"
