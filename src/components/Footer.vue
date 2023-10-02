<template>
  <!-- Footer -->
  <div class="flex h-52 w-full bg-[#454544] p1 text-white font-serif">
    <div class="w-[25%] p-1">
      <div class="flex justify-center items-center text-2xl m-1">
        <span>About Us</span>
      </div>
      <div class="flex-col justify-center items-center font-normal">
        <div class="flex justify-center items-center mb-2">
          <img class="h-[120px]" src="../assets/mgLogo.jpg" alt="" />
        </div>
        <div
          class="text-center underline text-base italic cursor-pointer hover:text-[#E67E23]"
        >
          " Begin Your Story With Us "
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
        <div class="flex">
          <input
            class="placeholder-slate-300 border-b-2 bg-inherit"
            type="text"
            placeholder="Enter your email"
          />
          <EnvelopeIcon class="text-white h-[25px] w-[25px] "/>
          </div>
        </div>
        </div>
      </div>
          <div class="bg-green-500 w-[25%] p-1">
      <div class="flex justify-center items-center text-2xl text-white">
        <span>Gallery</span>
      </div>
    </div>


</template>

<script lang="ts" setup>
import { EnvelopeIcon } from "@heroicons/vue/24/outline";

</script>
