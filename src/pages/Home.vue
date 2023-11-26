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
    <div class="flex w-[16%] text-lg font-semibold pl-3">
      Search Filter <FunnelIcon class="h-[26px] w-[26px] ml-1" />
    </div>
    <div class="flex w-[84%] text-lg font-semibold pl-5">
      Latest <NewspaperIcon class="h-[26px] w-[26px] ml-1" />
    </div>
  </div>
  <div class="flex">
    <!-- Accordion -->
    <div class="h-[700px] w-[16%] flex-col overflow-auto ml-6">
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
    <div class="flex flexbox flex-wrap h-full w-[84%] ml-6 mt-2 mb-6 gap-8">
      <Products
        v-for="(property, index) in propertyData"
        :key="index"
        :image="swiper1"
        :name="property.property_name"
        :price="property.property_price"
        :size="property.property_area"
        :bedroom="property.property_bedroom"
        :bathroom="property.property_bathroom"
        :attic="property.property_attic"
        :balcony = "property.property_balcony"
        :deck = "property.property_deck"
        :fenced = "property.property_fenced_yard"
        :fireplace = "property.property_fireplace"
        :frontyard = "property.property_frontyard"
        :gasheat = "property.property_gasheat"
        :gym = "property.property_gym"
        :lakeview = "property.property_lakeview"
        :pond = "property.property_pond"
        :pool = "property.property_pool"
        :recreation = "property.property_recreation"
        :sprinklers = "property.property_sprinklers"
        :storage = "property.property_storage"
        :washer = "property.property_washer"
        :winecellar = "property.property_winecellar"
      />
    </div>
  </div>
  <!--Agents Carousel-->
  <div class="p-8">
    <div class="w-full mt-6 items-center">
      <h1 class="mt-10 mb-20 font-black text-4xl ml-[575px]">
        MEET OUR <span class="text-[#E67E23]">AGENTS</span>!
      </h1>
      <Agents />
    </div>
  </div>

  <div class="w-full mt-6 items-center">
    <h1 class="mt-10 mb-20 font-black text-center text-4xl">
      OUR <span class="text-[#E67E23]">GALLERY !</span>
    </h1>
    <Gallery />
  </div>
</template>

<script lang="ts" setup>
import { register } from "swiper/element/bundle";
import Accordion from "../components/Accordion.vue";
import Gallery from "../components/Gallery.vue";
import Products from "../components/Products.vue";
import Agents from "../components/Agents.vue";
import { FunnelIcon, NewspaperIcon } from "@heroicons/vue/24/outline";
import swiper1 from "../assets/swiper1.jpg";

import { ref, onMounted } from "vue";
register();

interface Property {
  id: number;
  image: string;
  property_name: string;
  property_price: number;
  property_area: number;
  property_bedroom: number;
  property_bathroom: number;

  property_attic: boolean;
  property_balcony: boolean;
  property_deck: boolean;
  property_fenced_yard: boolean;
  property_fireplace: boolean;
  property_frontyard: boolean;
  property_gasheat: boolean;
  property_gym: boolean;
  property_lakeview: boolean;
  property_pond: boolean;
  property_pool: boolean;
  property_recreation: boolean;
  property_sprinklers: boolean;
  property_storage: boolean;
  property_washer: boolean;
  property_winecellar: boolean;




}

const propertyData = ref<Property[]>([]);

onMounted(() => {
  fetch("http://localhost:8080/api/properties", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => (propertyData.value = data))
    .catch((error) => console.error("Error:", error));
});
</script>

<style></style>
