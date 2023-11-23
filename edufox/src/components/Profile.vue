<script>
import ProfileDetail from './ProfileDetail.vue'

export default {
  name: 'UserProfile',
  data: () => ({
    menu: false
  }),
  props: ['profile'],
  components: {
    ProfileDetail
  }
}
</script>

<template>
  <v-menu v-model="menu" :close-on-content-click="false" location="bottom">
    <template v-slot:activator="{ props }">
      <!-- <v-btn color="indigo" v-bind="props"> Profile </v-btn> -->
      <div class="flex gap-3 items-center cursor-pointer" role="button" v-bind="props">
        <span>
          {{ profile.userUsername }}
        </span>
        <v-avatar>
          <v-img :src="profile.userProfilePict || '/avatar.jpeg'" alt="gender-neutral-user--v1" />
        </v-avatar>
      </div>
    </template>
    <ProfileDetail
      :profile="profile"
      :callback="
        () => {
          menu = false
        }
      "
    />
  </v-menu>
</template>

<style scoped>
#bd {
  border: 1px solid;
}
</style>
