<template>
  <div
    class="m custom-sm:mx-auto sm:mx-auto custom-sm:w-[90%] sm:h-[335px] border-2 lg:p-5 shadow-xl md:w-[100%] md:h-[335px] lg:h-[440px] rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)"
  >
    <div
      class="my-[5%] custom-sm:w-[40%] custom-sm:h-[40%] custom-sm:mx-auto relative lg:w-48 md:w-40 mx-auto -z-30"
    >
      <img
        src="../assets/marivil.png"
        alt="img"
        class="lg:w-48 lg:h-48 md:w-35 md:h-30 border-4 border-white rounded-full object-cover relative z-10"
      />
      <div
        class="absolute inset-0 border-4 border-purple-700 rounded-full z-0"
      ></div>
    </div>
    <div class="lg:mt-7 md:mt-3 text-center text-[#454544]">
      <div class="text-center font-bold font-poppins lg:text-2xl md:text-lg">
        Marivil Du
      </div>
      <div class="font-medium font-poppins">147 property</div>
      <div class="flex justify-center items-center mt-5 text-white">
        <button
          class="custom-sm:px-[4%] bg-[#E67E23] h-9 lg:w-[225px] md:w-[200px] rounded-md text-white text-center font-semibold text-[20px] hover:bg-white hover:text-[#E67E23] hover:border-[#E67E23] border-[#E67E23] border-2 transition duration-300"
        >
          Contact
        </button>
      </div>
      <div class="my-5 mx-auto">
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
