<template>
  <div class="mx-auto max-w-7xl">
    <div class="relative w-full h-80 bg-cover bg-center bg-custom">
      <div class="w-[100%] h-3/4">
        <img
          src="../assets/mgpng.png"
          alt="mgpng"
          class="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-300 z-0 filter-none"
        />
      </div>

      <div
        class="font-bold text-xl flex justify-center align-middle mx-20 m-10"
      ></div>
    </div>
    <div class="text-center m-[5%] text-4xl font-bold">
      <span class="font-black">{{ add }}</span>
      <span class="text-[#e67f22] font-black"> {{ properties }}</span>
      <p class="mt-[3%] text-xl">
        {{ quote }}
      </p>
    </div>
  </div>
</template>
<script setup>

defineProps({
quote: String,
add: String,
properties: String,
});
</script>

<style scoped>
.bg-custom {
  background-image: url(../assets/conpic.jpg);
}
</style>
