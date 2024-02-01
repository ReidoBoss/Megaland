<template>
  <div class="text-[#454544] overflow-hidden">
    <!-- Property Name -->
    <div
      class="lg:mt-[4%] shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) md:mb-[8%] lg:mb-[5%]"
    >
      <div
        class="text-center font-poppins font-bold md:text-md lg:text-2xl md:mt-[3%] md:mx-[3%]"
      >
        {{ property.property_name }}
      </div>
      <div
        class="flex justify-center items-center lg:mb-[1%] md:w-[80%] md:ml-[10%] md:my-[3%]"
      >
        <img :src="property.dataURL" alt="" />
      </div>
      <div
        class="text-center font-poppins font-bold md:text-md lg:text-2xl lg:pb-[3%] md:pb-[3%]"
      >
        Price:
        <span class="text-[#E67E23] font-bold md:text-md lg:text-2xl ml-3">
          ₱
          {{
            property.property_price
              ? property.property_price.toLocaleString("en-US")
              : "N/A"
          }}
        </span>
      </div>
    </div>
    <!-- Property Description -->
    <div
      class="font-poppins font-400 border-t-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5"
    >
      <div class="font-bold">Property Description:</div>
      <div class="pb-5 pl-5 pr-5">
        <pre class="text-sm font-poppins overflow-hidden">
          {{ property.property_description }}
</pre
        >
      </div>
    </div>
    <!-- Property Address -->
    <div
      class="font-poppins border-t-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5"
    >
      <div class="font-bold">Property Address:</div>
      <div class="lg:p-5 md:p-2">
        <div class="flex">
          <div class="w-[50%]">
            <div
              class="border-2 rounded-md md:m-1 md:p-2 lg:m-2 lg:p-1 font-bold lg:text-md"
            >
              Address:
              <span class="text-sm font-300">
                {{ property.property_description }}</span
              >
            </div>
            <div class="border-2 m-2 p-1 font-medium">
              City:
              <span class="text-base font-normal">
                {{ property.property_city }}</span
              >
            </div>
          </div>
          <div class="w-[50%]">
            <div class="border-2 m-2 p-1 font-medium">
              Zip:
              <span class="text-base font-normal">
                {{ property.property_zipcode }}</span
              >
            </div>
            <div class="border-2 m-2 p-1 font-medium">
              State/Country:
              <span class="text-base font-normal">
                {{ property.property_country }}
              </span>
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
              Bedroom:
              <span class="text-base font-normal">
                {{ property.property_bedroom }}</span
              >
            </div>
            <div class="border-2 m-2 p-1 font-medium">
              Bathroom:
              <span class="text-base font-normal">
                {{ property.property_bathroom }}</span
              >
            </div>
          </div>
          <div class="w-[50%]">
            <div class="border-2 m-2 p-1 font-medium">
              Land Area:
              <span class="text-base font-normal">
                {{ property.property_area }}</span
              >
            </div>
            <div class="border-2 m-2 p-1 font-medium">
              Parking Space:
              <span class="text-base font-normal">
                {{ property.property_parking_space }}</span
              >
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="border-2 mt-0 m-2 p-1 font-medium w-[50%]">
            Built In: <span class="text-base font-normal"> 0</span>
          </div>
          <div class="border-2 mt-0 m-2 p-1 font-medium w-[50%]">
            Property Status:
            <span class="text-base font-normal">
              {{ property.property_type }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface PropType {
  property: any;
}

defineProps<PropType>();
</script>
