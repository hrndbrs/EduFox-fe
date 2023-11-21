<template>
  <v-card min-width="100">
    <div>
      <img
        v-if="!mobile"
        :src="'https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149464866.jpg'"
        alt=""
        class="w-[220px] h-[100px] object-fit"
      />
      <div v-else class="w-[220px] h-[100px]" />
      <div class="flex justify-center">
        <div class="col-4 lg:col-lg-4 lg:order-lg-2">
          <div class="mt-[-3rem] mb-4 mb-lg-0">
            <img
              :src="
                profile.userProfilePict ||
                'https://img.icons8.com/ios/100/gender-neutral-user--v1.png'
              "
              class="rounded-full border-4 border-solid border-white w-20 h-20 bg-white"
            />
          </div>
        </div>
      </div>
    </div>

    <v-divider></v-divider>
    <div class="justify-center flex">
      <input
        type="file"
        id="file"
        class="hidden"
        accept="image/*"
        @change="changePicture"
        enctype="multipart/form-data"
      />
      <v-btn variant="text" color="blue" size="small" @click="clickPicture">Change Picture</v-btn>
    </div>
    <div class="mt-2 text-center">
      <p class="text-[13px]">{{ profile.userUsername }}</p>
      <p class="text-[13px]">{{ profile.userEmail }}</p>
    </div>
    <div class="justify-center flex mt-2">
      <v-btn
        v-if="!profile.userPremium"
        variant="tonal"
        color="green"
        size="x-small"
        @click="midTrans"
        >Go Premium</v-btn
      >
      <v-btn variant="tonal" color="red" size="x-small" v-else>Premium User</v-btn>
    </div>

    <v-card-actions>
      <v-spacer></v-spacer>
      <CustBtn
        color="red"
        :block="false"
        :onClick="
          () => {
            handleLogout()
            $router.push('/')
            if (callback) callback()
          }
        "
        >Logout</CustBtn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import client from '../api/config'
import CustBtn from './CustBtn.vue'
import { mapActions } from 'pinia'
import useUserStore from '../stores/user'
import axios from 'axios'

export default {
  name: 'ProfileDetail',
  props: ['profile', 'callback', 'mobile'],
  data() {
    return {
      changePict: null
    }
  },
  components: {
    CustBtn
  },
  methods: {
    ...mapActions(useUserStore, ['handleLogout', 'midTrans', 'checkCredentials']),
    clickPicture() {
      document.getElementById('file').click()
    },
    async changePicture(event) {
      try {
        this.changePict = event.target.files?.[0]

        const payload = new FormData()
        payload.append('image', this.changePict)
        const { data } = await client.patch('/user/', payload, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        localStorage.setItem('access_token', data.access_token)
        this.checkCredentials()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
