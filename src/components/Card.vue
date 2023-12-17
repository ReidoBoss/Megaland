<template>
  <div
    class="scroll-snap-start text-[#454544]  w-[400px] h-[570px] bg-white p-6 text-center cursor-pointer mr-5 rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] overflow-hidden"
  >
    <div class="relative w-1/2 h-1/2 mx-auto mt-3">
      <img
        :src="img"
        alt="img"
        class="w-48 h-48 border-4 border-[#E67E23] rounded-full object-cover relative z-10"
      />
    </div>
    <h2 class="font-bold text-3xl mt-[-30px] mb-2 text-black">{{ name }}</h2>
    <span class="text-xl font-medium hover:text-[#E67E23]">{{ title }}</span>
    <p
      class="mt-4 text-justify text-[12px] font-normal lg:text-lg 2xl:text-xl line-clamp-3"
    >
      {{ desc }}
    </p>

    <div class="flex justify-center items-center mt-5 text-white">
      <button
        class="bg-[#E67E23] h-12 w-48 rounded-md text-white text-center font-semibold text-lg lg:text-xl xl:w-64 hover:bg-white hover:text-[#E67E23] hover:border-[#E67E23] border-[#E67E23] border-2 transition duration-300"
      >
        View Profile
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ProductType {
  name: string;
  title: string;
  img: string;
  desc: string;
}

defineProps<ProductType>();
</script>
