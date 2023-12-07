<template>
  <div class="bg-red-400">Property ID: {{ $route.params.id }}</div>
  <div class="p-3">
    <div class="flex text-[#E67E23]">
      <div class="flex w-[16%] text-lg font-semibold pl-3">
        Search Filter <FunnelIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <div class="flex w-[60%] text-lg font-semibold pl-5">
        Details <NewspaperIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <div class="flex w-[25%] text-lg font-semibold pl-5">
        Contact Agent <UserIcon class="h-[26px] w-[26px] ml-1" />
      </div>
    </div>
    <div class="flex text-[#E67E23] mt-2">
      <div class="h-[700px] w-[16%] flex-col overflow-auto">
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
      <div class="w-[60%] flex-col ml-6">
        <div
          class="p-10 border-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)"
        >
          <ProductDetails :property="property" />
        </div>
      </div>
      <div class="h-[700px] w-[24%] flex-col overflow-auto ml-6">
        <!--Blog Owner -->
        <BlogOwner />
      </div>
    </div>
    <div class="mb-5 mt-10 pl-5 pr-5">
      <div class="m-3 flex w-[16%] text-lg font-semibold pl-3 text-[#E67E23]">
        Location <MapIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <div
        class="border-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)"
      >
        <iframe
          class="border-2 border-black"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.5483668762135!2d123.89617127595324!3d10.29792626783563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999a0c575cff7%3A0x76271c50dbf0b3b2!2sMegaland%20Realty!5e0!3m2!1sen!2sph!4v1697273626082!5m2!1sen!2sph"
          width="100%"
          height="600"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div>
      <div class="m-3 flex w-[16%] text-lg font-semibold pl-3 text-[#E67E23]">
        Related Property <ChatBubbleLeftIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <div
        class="flex flex-wrap items-center h-full w-[84%] ml-32 mt-2 mb-6 justify-between"
      >
        <Products
          :image="swiper1"
          name="3 LEVEL HOUSE WITH ROOF DECK AND POOL IN VISTA GRANDE TALISAY"
          price="₱48,000,000"
          :size="769"
          :bedroom="7"
          :bathroom="7"
        />
        <Products
          :image="swiper2"
          name="2-Storey House & Lot For Sale White Hills Subdivision-Banawa"
          price="₱12,500,000"
          :size="200"
          :bedroom="6"
          :bathroom="3"
        />
        <Products
          :image="swiper3"
          name="4 Bedrooms House and Lot for Sale at Kishanta Subdivision"
          price="₱12,500,000"
          :size="150"
          :bedroom="4"
          :bathroom="2"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Accordion from "../components/Accordion.vue";
import {
  FunnelIcon,
  NewspaperIcon,
  UserIcon,
  MapIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/vue/24/outline";
import ProductDetails from "../components/ProductDetails.vue";
import swiper1 from "../assets/swiper1.jpg";
import swiper2 from "../assets/swiper2.jpg";
import swiper3 from "../assets/swiper3.jpg";
import Products from "../components/Products.vue";
import BlogOwner from "../components/BlogOwner.vue";

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

interface propertyType {
  id: number;
  name: string;
  price: number;
  description: string;
  address: string;
  city: string;
  zip: number;
  country: string;
  bedroom: number;
  bathroom: number;
  area: number;
  parking: number;
  category: string;
  type: string;

  attic: boolean;
  balcony: boolean;
  deck: boolean;
  fence: boolean;
  fireplace: boolean;
  frontyard: boolean;
  gasheat: boolean;
  gym: boolean;
  lakeview: boolean;
  pond: boolean;
  pool: boolean;
  recreation: boolean;
  sprinklers: boolean;
  storage: boolean;
  washer: boolean;
  winecellar: boolean;
}

const property = ref<propertyType>({
  id: 0,
  name: "",
  price: 0,
  description: "",
  address: "",
  city: "",
  zip: 0,
  country: "",
  bedroom: 0,
  bathroom: 0,
  area: 0,
  parking: 0,
  category: "",
  type: "",

  attic: false,
  balcony: false,
  deck: false,
  fence: false,
  fireplace: false,
  frontyard: false,
  gasheat: false,
  gym: false,
  lakeview: false,
  pond: false,
  pool: false,
  recreation: false,
  sprinklers: false,
  storage: false,
  washer: false,
  winecellar: false,
});

onMounted(() => {
  fetch(`http://localhost:8080/api/getPropertyDetails/${route.params.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      property.value = data[0];
      console.log(property.value);
    })
    .catch((error) => console.error("Error:", error));
});
</script>
