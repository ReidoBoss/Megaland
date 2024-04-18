<template>
  <div
    class="flex lg:w-full overflow-auto bg-white border-2 rounded-md shadow-xl md:p-2 md:ml-3 md:mb-3 lg:p-3 lg:ml-5 lg:mb-1.5 mt-3 py-2 px-2"
  >
    <div class="">
      <div
        class="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-500"
      >
        <img
          src="../assets/card1.jpg"
          alt="User Avatar"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    <div class="ml-2 w-full">
      <!-- Name -->
      <p class="ml-1 mb-0.5 font-semibold text-sm">{{ name }}</p>
      <!-- Comment detail -->
      <p class="ml-1 font-normal text-xs">{{ description }}</p>
      <p></p>
    </div>
  </div>
</template>

<script setup>

defineProps({
  description: String,
  name: String,
})
</script>
