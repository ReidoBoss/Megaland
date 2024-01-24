<template>
  <!-- Footer -->
  <div class="flex h-52 w-full bg-[#454544] p1 text-white font-serif">
    <div class="custom-sm:w-[33.33%] sm:w-[33.33%] w-[25%] p-1">
      <div
        class="flex justify-center items-center sm:text-center custom-sm:text-md sm:text-md md:text-lg m-1 custom-sm:"
      >
        <span class="custom-sm:mt-3">About Us</span>
      </div>
      <div class="flex-col justify-center items-center font-normal">
        <div class="flex justify-center items-center mb-2">
          <router-link class="" to="/about"
            ><img
              class="hover:scale-[1.02] custom-sm:w-[90px] custom-sm:h-[70px] custom-sm:mt-5 custom-sm:mb-2 md:h-[120px] rounded-lg"
              src="../assets/mgLogo.jpg"
              alt=""
          /></router-link>
        </div>
        <div
          class="text-center underline custom-sm:text-xs sm:text-sm md:text-md lg:text-lg italic cursor-pointer hover:text-[#E67E23]"
        >
          <router-link class="" to="/about"
            >" Begin Your Story With Us "</router-link
          >
        </div>
      </div>
    </div>
    <div class="custom-sm:w-[33.33%] sm:w-[33.33%] w-[25%] p-1">
      <div class="flex justify-center items-center m-1 mb-5">
        <span
          class="custom-sm:mt-2 custom-sm:text-center sm:text-center custom-sm:text-md sm:text-md md:text-lg lg:text-lg"
          >Customer Service</span
        >
      </div>
      <div
        class="custom-sm:mt-[-9px] flex justify-center items-center flex-col text-center text-base"
      >
        <div
          class="cursor-pointer mb-2 hover:text-[#E67E23] text-center custom-sm:text-sm sm:text-sm md:text-base lg:text-base"
        >
          Policy
        </div>
        <div
          class="cursor-pointer mb-2 hover:text-[#E67E23] text-center custom-sm:text-sm sm:text-sm md:text-base lg:text-base"
        >
          Team
        </div>
        <div
          class="cursor-pointer mb-2 hover:text-[#E67E23] text-center custom-sm:text-sm sm:text-sm md:text-base lg:text-base"
        >
          FAQs
        </div>
        <div
          class="cursor-pointer mb-2 hover:text-[#E67E23] text-center custom-sm:text-sm sm:text-sm md:text-base lg:text-base"
        >
          Terms and Conditions
        </div>
      </div>
    </div>
    <div class="custom-sm:w-[33.33%] sm:w-[33.33%] w-[25%] p-1">
      <div
        class="flex justify-center items-center custom-sm:pt-3 sm:text-center custom-sm:text-md sm:text-md md:text-lg m-1 mb-5"
      >
        <span>Contact Us</span>
      </div>
      <div>
        <div
          class="text-center custom-sm:text-sm sm:text-sm md:text-base lg:text-base"
        >
          Join Us Now!
        </div>
        <div class="relative mt-5 mb-4">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
          >
            <EnvelopeIcon
              class="text-gray-500 dark:text-gray-400 h-[25px] custom-sm:w-[25px] custom-sm:ml-10 md:ml-8"
            />
          </div>
          <input
            type="email"
            id="email-address-icon"
            class="md:ml-7 border-b custom-sm:hidden sm:hidden h-9 focus:outline-none text-white text-sm block pl-12 p-2.5 bg-inherit dark:placeholder-gray-400 dark:text-white hover:border-[#E67E23]"
            placeholder="Enter your email"
          />
        </div>
        <div class="flex custom-sm:mt-11 custom-sm:ml-5">
          <mdicon
            name="facebook"
            :width="25"
            :height="25"
            class="hover:text-orange-500 md:mr-5 lg:mr-5 custom-sm:mr-2 sm:mr-2 custom-sm:w-10px"
          />
          <mdicon
            name="instagram"
            :width="25"
            :height="25"
            class="hover:text-orange-500 md:mr-5 lg:mr-5 custom-sm:mr-2 sm:mr-2"
          />
          <mdicon
            name="twitter"
            :width="25"
            :height="25"
            class="hover:text-orange-500 md:mr-5 lg:mr-5 custom-sm:mr-2 sm:mr-2"
          />
        </div>
      </div>
    </div>
    <div class="custom-sm:hidden w-[25%] p-1">
      <div
        class="flex flex-col justify-center items-center sm:text-center custom-sm:text-md sm:text-md md:text-lg lg:text-lg text-white mb-5 mr-5 ml-5"
      >
        <div>Gallery</div>
        <div class="flex h-[160px] w-full hover:scale-[1.02]">
          <div class="flex items-center justify-center w-[65%] p-1">
            <img
              class="h-[151px] border-2 border-[#fefefe]"
              src="../assets/gal1.jpg"
              alt=""
            />
          </div>
          <div class="flex flex-col w-[35%]">
            <div class="h-[50%] items-center justify-center p-1">
              <img
                class="h-[70px] border-2 border-[#fefefe]"
                src="../assets/gal2.jpg"
                alt=""
              />
            </div>
            <div class="h-[50%] items-center justify-center p-1">
              <img
                class="h-[71px] border-2 border-[#fefefe]"
                src="../assets/gal3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
</script>
