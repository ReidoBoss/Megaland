<template>
    <div class="min-h-[200px] justify-center bg-[#E67E23] scroll-snap-start p-6 text-center cursor-pointer mr-5 rounded-md shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
      <div class="relative w-100 h-100 mx-auto mt-2 mb-2 rounded-2xl overflow-hidden">
        <img :src="img" class="object-cover max-h-[600px] max-w-[700px] " />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  interface ProductType {
    img: string;  
  }
  
  defineProps<ProductType>();
  </script>