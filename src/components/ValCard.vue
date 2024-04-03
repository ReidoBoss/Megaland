<template>
  <!-- <div
    class="bg-white  dark:bg-gray-800 max-w-full p-6 rounded-xl border border-gray-200 dark:border-gray-700 cursor-pointer md:text-sm lg:text-md sm:grid-cols-2 sm:text-sm sm:mx-auto sm:w-[75%] md:text-md md:grid-cols-2 md:w-[80%] lg:w-full lg:ml-0 custom-sm:mx-auto custom-sm:w-[75%] custom-sm:text-xs"
  >
    <h5 class="mb-5 font-bold dark:text-white text-center">{{ header }}</h5>
    <p class="font-normal mr-3 ml-3 text-white text-justify">{{ desc }}</p>
  </div> -->

  <div
    class="max-w-sm bg-white rounded-lg custom-sm:w-[95%] custom-sm:flex custom-sm:mx-auto md:w-[45%] md:flex md:justify-center"
  >
    <div class="py-5 mx-auto">
      <a href="#">
        <img class="rounded-t-lg" :src="imgSrc" alt="" />
      </a>

      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center custom-sm:text-dm font-poppins mt-5"
        >
          {{ header }}
        </h5>
      </a>
      <p class="font-normal text-gray-700 text-justify custom-sm:text-sm">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface ProductType {
  header: string;
  desc: string;
  imgSrc: string;
}

defineProps<ProductType>();
</script>
