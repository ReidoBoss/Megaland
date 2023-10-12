<template>
  <div class="p-3">
    <div class="flex text-[#E67E23]">
      <div class="flex w-[16%] text-lg font-semibold pl-3">
        Search Filter <FunnelIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <div class="flex w-[56%] text-lg font-semibold pl-5">
        Details <NewspaperIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <div class="flex w-[28%] text-lg font-semibold pl-5">
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
      <div
        class="h-[700px] w-[56%] flex-col overflow-auto ml-6 bg-red-500"
      ></div>
      <div
        class="h-[700px] w-[28%] flex-col overflow-auto ml-6 bg-red-500"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Accordion from "../components/Accordion.vue";
import { FunnelIcon, NewspaperIcon, UserIcon } from "@heroicons/vue/24/outline";
</script>
