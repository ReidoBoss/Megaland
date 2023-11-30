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
    <div class="flex flex-wrap mt-2 h-full w-[84%] gap-y-9 justify-evenly">
      <Products class=""
        v-for="(property, index) in propertyData"
        :key="index"
        :image="swiper1"
        :name="property.property_name"
        :price="property.property_price"
        :category="property.property_category"
        :size="property.property_area"
        :type="property.property_type"
        :bedroom="property.property_bedroom"
        :bathroom="property.property_bathroom"
        :address="property.property_local_area"
        :city="property.property_city"
        :airport="property.property_airport"
        :busstand="property.property_busstand"
        :hospital="property.property_hospital"
        :patroltank="property.property_patroltank"
        :railway="property.property_railway"
        :shopping="property.property_shopping"
        :universities="property.property_universities"
      />
    </div>
  </div>
  <!--Agents Carousel-->
  <div class="p-8">
    <div class="w-full mt-6 items-center">
      <h1 class="mt-10 mb-14 font-black text-4xl flex justify-center items-center">
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

  property_airport: boolean;
  property_busstand: boolean;
  property_hospital: boolean;
  property_patroltank: boolean;
  property_railway: boolean;
  property_shopping: boolean;
  property_universities: boolean;

  property_category: string;
  property_type: string;
  property_local_area: string;
  property_city: string;
}

// interface Agent{
//   agent_name: string;
//   agent_description: string;
//   agent_position: string;
// }

// const agentData = ref<Agent[]>([]);

const propertyData = ref<Property[]>([]);

onMounted(() => {
  fetch("http://localhost:8080/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => (propertyData.value = data))
    .catch((error) => console.error("Error:", error));
});


// onMounted(() => {
//   fetch("http://localhost:8080/api/getAgents", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => (agentData.value = data))
//     .catch((error) => console.error("Error:", error));
// });
</script>

<style></style>
