<template>
  <div class="scroll-snap-start bg-white p-6 text-center cursor-pointer mr-5 rounded-md shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
    <div class="relative w-48 h-48 mx-auto mt-2 mb-2">
      <img :src="img" alt="img" class="w-48 h-48 border-4 border-purple-700 rounded-full object-cover relative z-10">
    </div>
    <h2 class="font-bold text-3xl mt-4 mb-2">{{ name }}</h2>
    <span class="text-gray-700 text-xl hover:text-[#E67E23]">{{ title }}</span>
    <p class="mt-4 text-justify text-[#454544] text-[17px] sm:text-base font-medium">
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
