<template>
    <div class="bg-white dark:bg-gray-800 max-w-full  p-6 rounded-xl border border-gray-200 dark:border-gray-700 cursor-pointer md:max-w-768 md:text-sm lg:text-md sm:max-w-640px sm:grid-cols-2 sm:text-xs sm:mx-auto  sm:w-[75%] md:max-w-768px md:text-md md:ml-[10%] md:grid-cols-2 md:w-[80%] lg:max-w-1024px lg:w-full lg:ml-0" >
      <h5 class=" mb-5 font-bold dark:text-white text-center">{{ header }}</h5>
      <p class="font-normal mr-3 ml-3 text-white text-justify">{{ desc }}</p>
    </div>
  </template>
  
  
  <script lang="ts" setup>
  interface ProductType {
    header: string;
    desc: string;
  }
  
  defineProps<ProductType>();
  </script>