<template>
  <div class="scroll-snap-start w-[400px] bg-white rounded-lg shadow-xl p-6 text-center hover:shadow-lg transition duration-300 cursor-pointer">
    <div class="relative w-48 h-48 mx-auto mt-4 mb-4">
      <img :src="img" alt="img" class="w-48 h-48 border-4 border-white rounded-full object-cover relative z-10">
      <div class="absolute inset-0 border-4 border-purple-700 rounded-full z-0"></div>
    </div>
    <h2 class="font-bold text-3xl mt-4 mb-2">{{ name }}</h2>
    <span class="text-gray-700 text-xl hover:text-[#E67E23]">{{ title }}</span>
    <p class="text-gray-700 text-lg mt-4 text-justify">
     {{ desc }}
    </p>

    <div class="flex justify-center items-center mt-5 text-white">
      <button class="bg-[#E67E23] h-12 w-[225px] rounded-md text-white text-center font-semibold text-[20px] hover:bg-white hover:text-[#E67E23] hover:border-[#E67E23] border-[#E67E23] border-2 transition duration-300">
        View Profile
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface ProductType {
  name: string;
  title: string;
  img: string;  
  desc: string;
}

defineProps<ProductType>();
</script>
