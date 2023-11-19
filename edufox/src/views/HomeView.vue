<script>
import CardHome from '../components/CardHome.vue'

export default {
  components: {
    CardHome
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
  <section id="bd" class="mt-10">
    <div class="w-100 px-10 py-4" id="bd">
      <p class="font-medium mb-2 text-orange-300" id="font">Program Edufox</p>
      <p class="font-semibold text-xl" id="font">Course Tersedia Di Edufox</p>
    </div>
    <div class="pb-28 pt-5 flex flex-row justify-evenly">
      <CardHome />
      <CardHome />
      <CardHome />
    </div>
  </section>
</template>

<style scoped>
#bd {
  border: 0px solid red;
}
img {
  /* background-image: url('https://www.pandasecurity.com/en/mediacenter/src/uploads/2016/07/schoolchildren-using-mobile-phone-at-classroom.jpg'); */
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
