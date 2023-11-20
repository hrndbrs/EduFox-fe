<script>
export default {
  name: 'Profile',
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true
  })
}
</script>

<template>
  <v-menu v-model="menu" :close-on-content-click="false" location="bottom">
    <template v-slot:activator="{ props }">
      <v-btn color="indigo" v-bind="props"> Profile </v-btn>
    </template>

    <v-card min-width="100">
      <div>
        <img
          :src="'https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149464866.jpg'"
          alt=""
          class="w-[220px] h-[100px] object-fit"
        />
        <div class="flex justify-center">
          <div class="col-4 lg:col-lg-4 lg:order-lg-2">
            <div class="mt-[-3rem] mb-4 mb-lg-0">
              <img
                :src="'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'"
                class="rounded-full border-4 border-solid border-white w-20 h-20"
              />
            </div>
          </div>
        </div>
      </div>

      <v-divider></v-divider>
      <div class="justify-center flex">
        <v-btn variant="text" color="blue" size="small">Change Picture</v-btn>
      </div>
      <div class="mt-2 text-center">
        <p class="text-[13px]">Mark Davis</p>
        <p class="text-[13px]">awsirizal@gmial.com</p>
      </div>
      <div class="justify-center flex mt-2">
        <v-btn variant="tonal" color="green" size="x-small">Go Premium</v-btn>
      </div>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" variant="text" @click="menu = false">Logout  </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<style scoped>
#bd {
  border: 1px solid;
}
</style>
