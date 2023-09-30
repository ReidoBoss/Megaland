<template>
  <div class="w-full h-[550px] bg-slate-400 -z-10 cursor-pointer">
    <swiper-container
      class="w-full h-[550px]"
      :cssMode="true"
      loop="true"
      :centeredSlides="true"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
      :pagination="false"
      :navigation="false"
    >
      <swiper-slide
        ><div class="flex justify-center items-center">
          <img
            class="w-full h-[550px]"
            src="../assets/swiper4.png"
            alt=""
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="flex justify-center items-center">
          <img
            class="w-full h-[550px]"
            src="../assets/swiper5.png"
            alt=""
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="flex justify-center items-center">
          <img
            class="w-full h-[550px]"
            src="../assets/swiper6.png"
            alt=""
          /></div
      ></swiper-slide>
    </swiper-container>
  </div>
  <div class="flex text-[#E67E23] mt-2">
    <div class="flex w-[16%] text-lg font-semibold pl-3">Search Filter <FunnelIcon class="h-[26px] w-[26px] ml-1"/></div>
    <div class="flex w-[84%] text-lg font-semibold pl-5">Latest <NewspaperIcon class="h-[26px] w-[26px] ml-1"/></div>
  </div>
  <div class="flex ">
    <!-- Accordion -->
    <div class="h-[455px] w-[16%] flex-col overflow-auto ml-6">
      <Accordion
        title="Property Type"
        :content="[
          { type: 'radio', data: 'Buy' },
          { type: 'radio', data: 'rent' },
        ]"
      />
      <Accordion
        title="Property Category"
        :content="[
          { type: 'checkbox', data: 'Commercial' },
          { type: 'checkbox', data: 'Condo' },
          { type: 'checkbox', data: 'House' },
          { type: 'checkbox', data: 'Land' },
          { type: 'checkbox', data: 'Townhouse' },
        ]"
      />
      <Accordion
        title="Location"
        :content="[
          { type: 'text', data: 'City' },
          { type: 'text', data: 'Address' },
          { type: 'text', data: 'Neighborhood' },
          { type: 'text', data: 'Zipcode' },
          { type: 'dialog', data: 'Philippines' },
          { type: 'dialog', data: 'Cebu' },
        ]"
      />
      <Accordion
        title="Price"
        :content="[
          { type: 'text', data: '₱ _ _ _ _ _ _ _ _ _ _ _ _ ' },
          { type: 'range', data: 'Cebu' },
        ]"
      />
      <Accordion
        title="Area"
        :content="[
          { type: 'text', data: 'Square Meter ' },
          { type: 'range', data: 'Cebu' },
        ]"
      />
      <Accordion
        title="Rooms"
        :content="[
          { type: 'spinner', data: 'Bedroom' },
          { type: 'spinner', data: 'Bathroom' },
        ]"
      />
    </div>
    <!-- Latest Sale -->
    <div class="flex flexbox flex-wrap h-full w-[84%] ml-6 mt-2 mb-6 ">
      <Products/>
      <Products/>
      <Products/>
      <Products/>
      <Products/>
      <Products/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { register } from "swiper/element/bundle";
import Accordion from "../components/Accordion.vue";
import Products from "../components/Products.vue";
import { FunnelIcon, NewspaperIcon } from "@heroicons/vue/24/outline";

register();
</script>

<style></style>
