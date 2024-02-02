<template>
  <div
    class="custom-sm:w-[90%] mx-auto text-[#454544] overflow-hidden border-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)"
  >
    <!-- Property Description -->
    <div
      class="font-poppins font-400 border-t-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5"
    >
      <div class="font-bold custom-sm:my-[3%] sm:my-[3%]">
        Property Description:
      </div>
      <div class="pb-5 pl-5 pr-5">
        <pre
          class="lg:text-lg md:text-md custom-sm:text-xs sm:text-xs font-poppins overflow-hidden"
        >
          {{ property.property_description }}
</pre
        >
      </div>
    </div>
    <!-- Property Address -->
    <div
      class="md:font-poppins border-t-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5"
    >
      <div class="font-bold custom-sm:my-[3%] sm:my-[3%]">
        Property Address:
      </div>
      <div class="lg:p-5 md:p-2">
        <div class="flex">
          <div class="w-[50%]">
            <div
              class="border-2 rounded-md md:m-1 md:p-2 lg:m-2 lg:p-1 font-bold lg:text-lg custom-sm:text-sm sm:text-sm md:text-md"
            >
              Address:
              <span
                class="lg:text-lg md:text-md font-300 custom-sm:text-sm sm:text-sm"
              >
                {{ property.property_description }}</span
              >
            </div>
            <div class="border-2 m-2 p-1 font-medium">
              City:
              <span
                class="text-base font-normal lg:text-lg md:text-md custom-sm:text-xs sm:text-xs"
              >
                {{ property.property_city }}</span
              >
            </div>
          </div>
          <div class="lg:w-[50%] md:w-[50%]">
            <div class="border-2 m-2 p-1 font-medium">
              Zip:
              <span
                class="text-base font-normal lg:text-lg md:text-md custom-sm:text-xs sm:text-xs"
              >
                {{ property.property_zipcode }}</span
              >
            </div>
            <div class="border-2 m-2 p-1 font-medium">
              State/Country:
              <span
                class="text-base font-normal lg:text-lg md:text-md custom-sm:text-xs sm:text-xs"
              >
                {{ property.property_country }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Details -->
    <div
      class="border-t-2 md:p-2 lg:p-2 custom-sm:mb-0 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) md:mb-5 lg:mb-5"
    >
      <div class="font-semibold custom-sm:mx-[3%]">Details:</div>
      <div class="p-3">
        <div class="flex">
          <div class="w-[50%]">
            <div class="border-2 m-2 p-1 font-medium">
              Bedroom:
              <span
                class="text-base font-normal lg:text-lg md:text-md custom-sm:text-xs sm:text-xs"
              >
                {{ property.property_bedroom }}</span
              >
            </div>
            <div class="border-2 m-2 p-1 font-medium">
              Bathroom:
              <span
                class="text-base font-normal lg:text-lg md:text-md custom-sm:text-xs sm:text-xs"
              >
                {{ property.property_bathroom }}</span
              >
            </div>
          </div>
          <div class="w-[50%]">
            <div class="border-2 m-2 p-1 font-medium">
              Land Area:
              <span
                class="text-base font-normal lg:text-lg md:text-md custom-sm:text-xs sm:text-xs"
              >
                {{ property.property_area }}</span
              >
            </div>
            <div class="border-2 m-2 p-1 font-medium">
              Parking Space:
              <span
                class="text-base font-normal lg:text-lg md:text-md custom-sm:text-xs sm:text-xs"
              >
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
