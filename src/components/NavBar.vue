<template>
  <!-- Navigation Bar E67E23 -->
  <div
    class="bg-[#E67E23] sticky top-0 h-12 text-[#fefefe] text-[18px] font-semibold p-2 pt-2 z-10"
  >
    <ul class="flex justify-end gap-6 hover: cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

            <li class="">
        <router-link class="hover-underline sm:text-sm md:text-md lg:text-lg " to="/">Home</router-link>
      </li>
      <li class="">
            <router-link class="hover-underline sm:text-sm md:text-md lg:text-lg" to="/properties"
          >Properties</router-link
        >
      </li>
      <li class="">
        <router-link class="hover-underline sm:text-sm md:text-md lg:text-lg" to="/PropertyNews"
          >Property News</router-link
        >
      </li>
      <li class="">
        <router-link class="hover-underline sm:text-sm md:text-md lg:text-lg" to="/about">About Us</router-link>
      </li>
      <li class="">
        <router-link class="hover-underline sm:text-sm md:text-md lg:text-lg" to="/contact"
          >Contact Us</router-link
        >
      </li>
      <li class="">
        <router-link class="hover-underline sm:text-sm md:text-md lg:text-lg" to="/listProperty"
          >Property Listing</router-link
        >
      </li>
      
    </ul>
  </div>

  <!-- Search and Logo Bar -->
  <div class="flex h-14 sticky top-11 bg-white z-10">
    <div class="flex w-[10%] pl-3">
      <img src="../assets/mgLogo.jpg" alt="" />
    </div>
    <div class="flex w-[80%] justify-center items-center gap-1">
      <input
        class="border-2 border-[#E67E23] rounded-full w-[550px] h-11 focus:outline-none hover:shadow-2xl pl-3"
        type="text"
        name=""
        id=""
      />
      <MagnifyingGlassIcon
        class="h-11 w-11 text-[#E67E23] cursor-pointer hover:scale-[1.02]"
      />
    </div>
    <div class="flex w-[10%] justify-end items-center pr-3">
      <UserIcon class="w-10 h-10 text-[#E67E23] hover:scale-[1.02]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/vue/24/outline";
</script>
