<script>
import { RouterLink } from 'vue-router'
import client from '../api/config'
import CallToAction from '../components/CallToAction.vue'
import CustBtn from '../components/CustBtn.vue'
import CardHome from '../components/CardHome.vue'

export default {
  data() {
    return {
      courses: []
    }
  },
  components: {
    CardHome,
    RouterLink,
    CustBtn,
    CallToAction
  },
  created() {
    client.get('/course').then(({ data }) => {
      this.courses = data.data.slice(0, 3)
    })
  }
}
</script>

<template>
  <section class="flex flex-row-reverse" id="bd">
    <div class="w-11/12 flex">
      <div class="h-full w-6/12" id="font">
        <div class="py-40 border-black mr-40">
          <p class="font-semibold text-4xl text-blue-900" id="font">
            Online Course Terbaik Bagi Buah Hati Anda
          </p>
          <p class="my-10 font-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident voluptatem
            deserunt nam, modi corrupti. Explicabo harum praesentium cupiditate suscipit dolorum
            distinctio. Doloremque recusandae aut nam blanditiis distinctio rerum maiores?
          </p>
          <div></div>
        </div>
      </div>
      <div class="h-full w-6/12">
        <img
          id="borderLBradius"
          :src="'https://www.pandasecurity.com/en/mediacenter/src/uploads/2016/07/schoolchildren-using-mobile-phone-at-classroom.jpg'"
          alt=""
        />
      </div>
    </div>
  </section>
  <section class="flex flex-col items-center mt-10">
    <div class="w-100 px-10 py-4" id="bd">
      <p class="font-medium mb-2 text-orange-400" id="font">Program Edufox</p>
      <p class="font-semibold text-xl" id="font">Course Tersedia Di Edufox</p>
    </div>
    <div class="p-5 flex flex-row gap-8 justify-evenly flex-wrap max-w-7xl mx-auto">
      <CardHome v-for="(course, i) in courses" :key="i" :course="course">
        <template #action>
          <div class="py-3 px-6">
            <RouterLink :to="`/courses/${course.id}`">
              <CustBtn> See Course Detail </CustBtn>
            </RouterLink>
          </div>
        </template>
      </CardHome>
    </div>
    <div
      class="mb-10 hover:scale-110 hover:-translate-y-1 hover:font-semibold transition-all duration-300"
    >
      <RouterLink class="rounded" to="/courses">See All</RouterLink>
    </div>
    <CallToAction />
  </section>
</template>

<style scoped>
img {
  width: 650px;
  height: 615px;
  object-fit: cover;
}

#borderLBradius {
  border-bottom-left-radius: 80px;
}

@font-face {
  font-family: TitleFont;
  src: url();
}

#font {
  font-family: 'Lexend', sans-serif;
}
</style>
