<template>
  <!-- Footer -->
  <div class="flex h-52 w-full bg-[#454544] p1 text-white font-serif">
    <div class="w-[25%] p-1">
      <div class="flex justify-center items-center text-2xl m-1">
        <span>About Us</span>
      </div>
      <div class="flex-col justify-center items-center font-normal">
        <div class="flex justify-center items-center mb-2">
          <router-link class="" to="/about"
            ><img
              class="hover:scale-[1.02] h-[120px] rounded-lg"
              src="../assets/mgLogo.jpg"
              alt=""
          /></router-link>
        </div>
        <div
          class="text-center underline text-base italic cursor-pointer hover:text-[#E67E23]"
        >
          <router-link class="" to="/about"
            >" Begin Your Story With Us "</router-link
          >
        </div>
      </div>
    </div>
    <div class="w-[25%] p-1">
      <div class="flex justify-center items-center text-2xl m-1 mb-5">
        <span>Customer Service</span>
      </div>
      <div
        class="flex justify-center items-center flex-col text-center text-base"
      >
        <div class="cursor-pointer mb-2 hover:text-[#E67E23]">Policy</div>
        <div class="cursor-pointer mb-2 hover:text-[#E67E23]">Team</div>
        <div class="cursor-pointer mb-2 hover:text-[#E67E23]">FAQs</div>
        <div class="cursor-pointer mb-2 hover:text-[#E67E23]">
          Terms and Conditions
        </div>
      </div>
    </div>
    <div class="w-[25%] p-1">
      <div class="flex justify-center items-center text-2xl m-1 mb-5">
        <span>Contact Us</span>
      </div>
      <div>
        <div>Join Us Now!</div>
        <div class="relative mt-1">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
          >
            <EnvelopeIcon
              class="text-gray-500 dark:text-gray-400 h-[25px] w-[25px]"
            />
          </div>
          <input
            type="email"
            id="email-address-icon"
            class="border-b w-[300px] h-9 focus:outline-none text-white text-sm block pl-12 p-2.5 bg-inherit dark:placeholder-gray-400 dark:text-white hover:border-[#E67E23]"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <!-- <svg-icon type="mdi" :path="mdiFacebook" :size="48"></svg-icon> -->
          <mdicon name="mdiAbacus" />

        </div>
      </div>
    </div>
    <div class="w-[25%] p-1">
      <div
        class="flex flex-col justify-center items-center text-2xl text-white mb-5 mr-5 ml-5"
      >
        <div>Gallery</div>
        <div class="flex h-[160px] w-full hover:scale-[1.02]">
          <div class="flex items-center justify-center w-[65%]  p-1">
            <img
              class="h-[151px] border-2 border-[#fefefe]"
              src="../assets/gal1.jpg"
              alt=""
            />
          </div>
          <div class="flex flex-col w-[35%]">
            <div class="h-[50%] items-center justify-center  p-1 ">
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


// import SvgIcon from '@jamescoyle/vue-icon';
//  import { mdiAbacus  } from '@mdi/js';
</script>
