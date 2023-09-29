<template>
  <!-- Navigation Bar -->
  <div
    class="bg-[#E67E23] sticky top-0 h-12 text-[#fefefe] text-lg font-semibold p-2 pt-5"
  >
    <ul class="flex justify-end gap-8">
      <li class="">
        <router-link class="" to="/">Home</router-link>
      </li>
      <li class="">
        <router-link class="" to="/properties">Properties</router-link>
      </li>
      <li class="">
        <router-link class="" to="/PropertyNews">Property News</router-link>
      </li>
      <li class="">
        <router-link class="" to="/about">About Us</router-link>
      </li>
      <li class="">
        <router-link class="" to="/contact">Contact Us</router-link>
      </li>
      <li class="">
        <router-link class="" to="/listProperty"
          >List of Properties</router-link
        >
      </li>
    </ul>
  </div>

  <!-- Search and Logo Bar -->
  <div class="flex h-14 sticky top-0">
    <div class="flex w-[10%] pl-3">
      <img  src="../assets/mgLogo.jpg" alt="">
    </div>
    <div class="flex w-[80%] justify-center items-center gap-1">
      <input class="border-2 border-[#E67E23] rounded-full w-[550px] h-11 focus:outline-none pl-3" type="text" name="" id="">
      <MagnifyingGlassIcon class="h-11 w-11 text-[#E67E23] cursor-pointer"/>
    </div>
    <div class="flex w-[10%] justify-end items-center pr-3">
      <UserIcon class="w-10 h-10 text-[#E67E23]"/>
    </div>
  </div>

  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import {MagnifyingGlassIcon,UserIcon} from '@heroicons/vue/24/outline';
</script>
