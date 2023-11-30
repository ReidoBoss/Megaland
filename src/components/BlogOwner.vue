<template>
  <div
    class="border-2 p-5 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)"
  >
    <div class="relative w-48 h-48 mx-auto mt-2 mb-2 -z-30">
      <img
        src="../assets/marivil.png"
        alt="img"
        class="w-48 h-48 border-4 border-white rounded-full object-cover relative z-10"
      />
      <div
        class="absolute inset-0 border-4 border-purple-700 rounded-full z-0"
      ></div>
    </div>
    <div class="mt-7 text-center text-[#454544]">
      <div class="text-center font-semibold text-2xl">Marivil Du</div>
      <div class="font-medium">147 property</div>
      <div class="flex justify-center items-center mt-5 text-white">
        <button
          class="bg-[#E67E23] h-9 w-[225px] rounded-md text-white text-center font-semibold text-[20px] hover:bg-white hover:text-[#E67E23] hover:border-[#E67E23] border-[#E67E23] border-2 transition duration-300"
        >
          Contact
        </button>
      </div>
      <div class="mt-3">
        <div class="flex justify-center items-center">
          <mdicon
            name="facebook"
            :width="30"
            :height="30"
            class="hover:text-orange-500 mr-5"
          />
          <mdicon
            name="instagram"
            :width="30"
            :height="30"
            class="hover:text-orange-500 mr-5"
          />
          <mdicon
            name="twitter"
            :width="30"
            :height="30"
            class="hover:text-orange-500 mr-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
