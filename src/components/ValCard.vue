<template>
    <div class="bg-white dark:bg-gray-800 max-w-full md:max-w-[300px] p-6 rounded-xl border border-gray-200 dark:border-gray-700 cursor-pointer">
      <h5 class="text-2xl mb-5 font-bold dark:text-white text-center">{{ header }}</h5>
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