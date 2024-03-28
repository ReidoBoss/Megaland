<template>
  <!-- Property Name -->
  <div
    class="border-2 p-5 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5"
  >
    <div class="text-center font-bold text-xl">
      {{ property.property_name }}
    </div>
    <div>
      <div
        id="animation-carousel"
        class="relative w-full"
        data-carousel="static"
      >
        <!-- Carousel wrapper -->
        <div class="w-[100%]">
          <div
            class="relative h-56 overflow-hidden rounded-lg md:h-96 w-full z-0 mt-5"
          >
            <!-- Item 1 -->
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <div class="absolute inset-0">
                <img
                  src="../assets/gal1.jpg"
                  class="object-cover h-full w-full"
                  alt="..."
                />
              </div>
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <div class="absolute inset-0">
                <img
                  src="../assets/gal2.jpg"
                  class="lg:object-none h-full w-full"
                  alt="..."
                />
              </div>
            </div>
            <!-- Item 3 -->
            <div
              class="hidden duration-200 ease-linear"
              data-carousel-item="active"
            >
              <div class="absolute inset-0">
                <img
                  src="../assets/gal3.jpg"
                  class="lg:object-none h-full w-full"
                  alt="..."
                />
              </div>
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <div class="absolute inset-0">
                <img
                  src="../assets/gal2.jpg"
                  class="w-full h-full lg:object-none"
                  alt="..."
                />
              </div>
            </div>
            <!-- Item 5 -->
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <div class="absolute inset-0">
                <img
                  src="../assets/gal3.jpg"
                  class="w-full h-full lg:object-none"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Images Below the Carousel -->
        <div>
          <div class="grid gap-4 mx-auto w-[90%]">
            <div class="grid grid-cols-4 my-[5%]">
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="../assets/gal1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="../assets/gal2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="../assets/gal3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="../assets/gal2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute z-0 lg:left-[-2%] custom-sm:left-[-7%] md:left-[-3%] top-[-13%] start-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:group-hover:bg-[#e77e22] group-focus:ring-white"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute lg:right-[-2%] custom-sm:right-[-7%] md:right-[-3%] top-[-13%] end-0 z-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:group-hover:bg-[#e77e22] group-focus:ring-white"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
    <!-- <div class="flex justify-center items-center p-5">
        <img :src="property.dataURL" alt="" />
      </div> -->
    <div class="font-medium text-center">
      Price:
      <span class="text-[#E67E23] text-xl ml-3">
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
    class="font-poppins font-400 border-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5"
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
    class="md:font-poppins border-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5"
  >
    <div class="font-bold custom-sm:my-[3%] sm:my-[3%]">Property Address:</div>
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
    class="border-2 md:p-2 lg:p-2 custom-sm:mb-0 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) md:mb-5 lg:mb-5"
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
  <div class="w-[100%] text-black bg-orange-500 rounded-lg h-[250px]">
    TIWASON KUNI DIRI, MEETING PAMI SA SIMBAHAN PRACTICE PARA SA MAUNDY THURSDAY
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
interface PropType {
  property: any;
}

defineProps<PropType>();
</script>
