<template>
  <!-- Footer -->
  <div class="flex h-52 w-full bg-[#454544] p1 text-white font-serif">
    <div class="w-[25%] p-1">
      <div class="flex justify-center items-center text-2xl m-1">
        <span>About Us</span>
      </div>
      <div class="flex-col justify-center items-center font-normal">
        <div class="flex justify-center items-center mb-2">
          <img class="h-[120px] rounded-lg" src="../assets/mgLogo.jpg" alt="" />
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
      </div>
    </div>
    <div class="bg-green-500 w-[25%] p-1">
      <div class="flex justify-center items-center text-2xl text-white">
        <span>Gallery</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
</script>
