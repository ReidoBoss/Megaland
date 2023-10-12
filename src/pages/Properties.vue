<template>
  <div class="flex text-[#E67E23] mt-2">
    <div class="flex w-[16%] text-lg font-semibold pl-3">
      Search Filter <FunnelIcon class="h-[26px] w-[26px] ml-1" />
    </div>
    <div class="flex w-[84%] text-lg font-semibold pl-5">
      Properties <BuildingLibraryIcon class="h-[26px] w-[26px] ml-1" />
    </div>
  </div>
  <div>
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
      <div class="flex flex-col h-full w-[84%] ml-6 mt-2 mb-6">
        <div class="flex flexbox flex-wrap gap-8">
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
        <div class="flex justify-center items-center mt-5">
          <Pagination />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Accordion from "../components/Accordion.vue";
import Products from "../components/Products.vue";
import swiper1 from "../assets/swiper1.jpg";
import swiper2 from "../assets/swiper2.jpg";
import swiper3 from "../assets/swiper3.jpg";
import Pagination from "../components/Pagination.vue";
import { FunnelIcon, BuildingLibraryIcon } from "@heroicons/vue/24/outline";
</script>
