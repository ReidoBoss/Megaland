<template>
  <div
    class="hover:cursor-default custom-sm:h-[480px] lg:h-[540px] custom-sm:w-[480px] sm:mx-[8%] md:mr-[6%] lg:mr-[10%] scroll-snap-start text-[#454544] bg-white p-6 text-center cursor-pointer rounded-md shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
  >
    <div class="relative w-48 h-48 mx-auto mt-2 mb-2">
      <img
        :src="img"
        alt="img"
        class="w-48 h-48 border-4 border-[#E67E23] rounded-full object-cover relative z-10"
      />
    </div>
    <h2
      class="font-bold lg:text-2xl md:text-xl sm:text-lg custom-sm:text-xl mt-4 mb-2"
    >
      {{ name }}
    </h2>
    <span class="text-xl font-medium hover:text-[#E67E23]">{{ title }}</span>
    <p
      class="mt-4 lg:text-justify custom-sm:text-center sm:text-center text-[12px] font-poppins 2xl:text-xl line-clamp-3"
    >
      {{ desc }}
    </p>

    <div class="flex justify-center items-center mt-5 text-white">
      <button
        class="bg-[#E67E23] lg:h-12 lg:w-48 custom-sm:w-32 custom-sm:h-8 sm:w-32 sm:h-8 rounded-md text-white text-center font-semibold text-lg lg:text-xl xl:w-64 hover:bg-white hover:text-[#E67E23] hover:border-[#E67E23] border-[#E67E23] border-2 transition duration-300"
      >
        View Profile
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ProductType {

defineProps({
  name: String,
  title: String,
  img: String,
  desc: String
})

</script>
