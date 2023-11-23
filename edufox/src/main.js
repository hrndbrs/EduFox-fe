import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import 'vue3-toastify/dist/index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from "vuetify/iconsets/mdi"
import Vue3Toastify from 'vue3-toastify';

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'




const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})


const app = createApp(App)

app.use(createPinia())
app.use(Vue3Toastify, {
  clearOnUrlChange: false
})
app.use(vuetify)
app.use(router)

app.mount('#app')
