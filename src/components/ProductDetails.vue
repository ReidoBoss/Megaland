<template>
  <div class="text-[#454544] overflow-auto">
    <!-- Property Name -->
    <div
      class="border-2 p-5 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5"
    >
      <div class="text-center font-semibold text-xl">
        {{ property.property_name }}
      </div>
      <div class="flex justify-center items-center p-5">
        <img src="../assets/swiper2.jpg" alt="" />
      </div>
      <div class="font-medium text-center">
        Price:
        <span class="text-[#E67E23] text-xl ml-3">
          ₱ {{ property.property_price ? property.property_price.toLocaleString("en-US") : "N/A" }}  
      </span>
      </div>
    </div>
    <!-- Property Description -->
    <div
      class="border-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5"
    >
      <div class="font-semibold">Property Description:</div>
      <div class="pb-5 pl-5 pr-5">
        <pre class="text-sm font-sans">
          {{ property.property_description }}
</pre
        >
      </div>
    </div>
    <!-- Property Address -->
    <div
      class="border-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5"
    >
      <div class="font-semibold">Property Address:</div>
      <div class="p-5">
        <div class="flex">
          <div class="w-[50%]">
            <div class="border-2 m-2 p-1 font-medium">
              Address: <span class="text-base font-normal"> {{ property.property_description }}</span>
            </div>
            <div class="border-2 m-2 p-1 font-medium">
              City: <span class="text-base font-normal"> {{ property.property_city }}</span>
            </div>
          </div>
          <div class="w-[50%]">
            <div class="border-2 m-2 p-1 font-medium">
              Zip: <span class="text-base font-normal"> {{ property.property_zipcode }}</span>
            </div>
            <div class="border-2 m-2 p-1 font-medium">
              State/Country:
              <span class="text-base font-normal"> {{ property.property_country }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Details -->
    <div
      class="border-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5"
    >
      <div class="font-semibold">Details:</div>
      <div class="p-5">
        <div class="flex">
          <div class="w-[50%]">
            <div class="border-2 m-2 p-1 font-medium">
              Bedroom: <span class="text-base font-normal"> {{ property.property_bedroom }}</span>
            </div>
            <div class="border-2 m-2 p-1 font-medium">
              Bathroom:
              <span class="text-base font-normal"> {{ property.property_bathroom }}</span>
            </div>
          </div>
          <div class="w-[50%]">
            <div class="border-2 m-2 p-1 font-medium">
              Land Area: <span class="text-base font-normal"> {{ property.property_area }}</span>
            </div>
            <div class="border-2 m-2 p-1 font-medium">
              Parking Space:
              <span class="text-base font-normal"> {{ property.property_parking_space }}</span>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="border-2 mt-0 m-2 p-1 font-medium w-[50%]">
            Built In: <span class="text-base font-normal"> 0</span>
          </div>
          <div class="border-2 mt-0 m-2 p-1 font-medium w-[50%]">
            Property Status:
            <span class="text-base font-normal"> {{ property.property_type }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// 

interface PropType {
  property: any;
}

defineProps<PropType>();
</script>
