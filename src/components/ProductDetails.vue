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
                  class="lg:object-cover h-full w-full"
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
                  class="lg:object-cover h-full w-full"
                  alt="..."
                />
              </div>
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <div class="absolute inset-0">
                <img
                  src="../assets/gal2.jpg"
                  class="w-full h-full lg:object-cover"
                  alt="..."
                />
              </div>
            </div>
            <!-- Item 5 -->
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <div class="absolute inset-0">
                <img
                  src="../assets/gal3.jpg"
                  class="w-full h-full lg:object-cover"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Images Below the Carousel -->
        <div>
          <div class="grid gap-4 mx-auto w-[90%]">
            <div class="flex flex-row gap-5 mx-auto my-[5%] items-center">
              <div class="">
                <img
                  class="h-[90%] max-w-full rounded-lg"
                  src="../assets/gal1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-[90%] max-w-full rounded-lg"
                  src="../assets/gal2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-[90%] max-w-full rounded-lg"
                  src="../assets/gal3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-[90%] max-w-full rounded-lg"
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
    <div class="text-center font-bold text-xl">
      Price:
      <span class="text-[#E67E23] text-xl ml-3 font-bold">
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
    <div
      class="font-bold custom-sm:my-[3%] sm:my-[3%] lg:ml-5 border-b-2 border-dashed font-poppins"
    >
      Property Description:
    </div>
    <!-- Location Fetching -->
    <div
      class="font-poppins font-bold lg:text-md md:text-md custom-sm:text-sm sm:text-xs lg:ml-5"
    >
      Location:
      <!-- Location Needs to be Fetched -->
      <span class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs font-500">
        <!-- {{ property.property_location }} -->
        Tungkop Minglanilla
      </span>
    </div>

    <div class="">
      <!-- Description Fetching -->
      <div
        class="font-poppins font-bold lg:text-md md:text-md custom-sm:text-sm sm:text-xs lg:mx-5 my-5 text-justify"
      >
        Description:
        <!-- Description Needs to be Fetched -->

        <span
          class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs font-500 text-justify"
        >
          <!-- {{ property.property_description }} -->
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          perspiciatis dolores odio sed autem. Eum quia quae cum tenetur
          quisquam, iusto delectus iure animi in sapiente, id recusandae aut
          nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati perspiciatis dolores odio sed autem. Eum quia quae cum
          tenetur quisquam, iusto delectus iure animi in sapiente, id recusandae
          aut nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati perspiciatis dolores odio sed autem. Eum quia quae cum
          tenetur quisquam, iusto delectus iure animi in sapiente, id recusandae
          aut nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati perspiciatis dolores odio sed autem. Eum quia quae cum
          tenetur quisquam, iusto delectus iure animi in sapiente, id recusandae
          aut nostrum!
        </span>
      </div>
    </div>
  </div>
  <!-- Property Address -->
  <div
    class="md:font-poppins border-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5 h-[360px]"
  >
    <div
      class="font-bold custom-sm:my-[3%] sm:my-[3%] lg:ml-5 border-b-2 border-dashed font-poppins"
    >
      Property Description:
    </div>
    <div class="md:p-2">
      <div class="flex">
        <div class="w-[95%] mx-auto flex flex-wrap items-center justify-center">
          <div
            class="font-poppins font-bold lg:text-md md:text-md custom-sm:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2">
              <!-- Address Needs to be Fetched -->
              Address:
              <span
                class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.property_city }} -->

                Lapu-Lapu City
              </span>
            </div>

            <span
              class="lg:text-md md:text-md font-400 custom-sm:text-sm sm:text-sm"
            >
            </span>
          </div>
          <!-- City needs to be Fetched Here -->

          <div
            class="font-poppins font-bold lg:text-md md:text-md custom-sm:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2">
              <!-- City Needs to be Fetched -->
              City:
              <span
                class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.property_city }} -->

                Cebu City
              </span>
            </div>

            <span
              class="lg:text-md md:text-md font-400 custom-sm:text-sm sm:text-sm"
            >
            </span>
          </div>

          <!-- State and Country Needs to be Fetched Here -->
          <div
            class="font-poppins font-bold lg:text-md md:text-md custom-sm:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2">
              <!-- State and Country Needs to be Fetched -->
              State and Country:
              <span
                class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.property_city }} -->

                Philippines
              </span>
            </div>

            <span
              class="lg:text-md md:text-md font-400 custom-sm:text-sm sm:text-sm"
            >
            </span>
          </div>
          <!-- Zip Needs to be Fetched Here -->
          <div
            class="font-poppins font-bold lg:text-md md:text-md custom-sm:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2">
              <!-- Zip Code Needs to be Fetched -->
              Zip Code:
              <span
                class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.property_city }} -->

                6000
              </span>
            </div>

            <span
              class="lg:text-md md:text-md font-400 custom-sm:text-sm sm:text-sm"
            >
            </span>
          </div>
          <!-- Neighborhood Needs to be Fetched Here -->
          <div
            class="font-poppins font-bold lg:text-md md:text-md custom-sm:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2">
              <!-- Neighborhood Needs to be Fetched -->
              Neighborhood:
              <span
                class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.property_city }} -->

                University of Cebu-Main
              </span>
            </div>

            <span
              class="lg:text-md md:text-md font-400 custom-sm:text-sm sm:text-sm"
            >
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Details -->
  <div
    class="md:font-poppins border-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5 h-[370px]"
  >
    <div
      class="font-bold custom-sm:my-[3%] sm:my-[3%] lg:ml-5 border-b-2 border-dashed font-poppins"
    >
      Details:
    </div>
    <div class="md:p-2">
      <div class="flex">
        <div class="w-[95%] mx-auto flex flex-wrap items-center justify-center">
          <div
            class="font-poppins font-bold lg:text-md md:text-md custom-sm:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2 flex flex-row gap-3 items-center">
              <!-- Bedroom Count Needs to be Fetched -->
              Bedrooms:
              <span
                class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.bedroom }} -->

                1
              </span>
              <mdicon
                name="BedOutline"
                :width="30"
                :height="30"
                class="mr-5 text-gray-700"
              />
            </div>
          </div>
          <!-- City needs to be Fetched Here -->

          <div
            class="font-poppins font-bold lg:text-md md:text-md custom-sm:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2 flex flex-row gap-3 items-center">
              <!-- Bathroom Count Needs to be Fetched -->
              Bathroom:
              <span
                class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.bathroom}} -->

                1
              </span>
              <mdicon
                name="Shower"
                :width="30"
                :height="30"
                class="mr-5 text-gray-700"
              />
            </div>
          </div>

          <!-- Land Area Needs to be Fetched Here -->
          <div
            class="font-poppins font-bold lg:text-md md:text-md custom-sm:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2 flex flex-row gap-3 items-center">
              <!-- Land Area Needs to be Fetched -->
              Land Area:
              <span
                class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.andarea }} -->

                36sqm
              </span>
            </div>
          </div>
          <!-- Zip Needs to be Fetched Here -->
          <div
            class="font-poppins font-bold lg:text-md md:text-md custom-sm:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2 flex flex-row gap-3 items-center">
              <!-- Bedroom Count Needs to be Fetched -->
              Parking Space:
              <span
                class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.bedroom }} -->

                0
              </span>
            </div>
          </div>
          <!-- Neighborhood Needs to be Fetched Here -->
          <div
            class="font-poppins font-bold lg:text-md md:text-md custom-sm:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2 flex flex-row gap-3 items-center">
              <!-- Bedroom Count Needs to be Fetched -->
              Built In:
              <span
                class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.bedroom }} -->

                0
              </span>
            </div>
          </div>
          <div
            class="font-poppins font-bold lg:text-md md:text-md custom-sm:text-sm sm:text-xs lg:mx-5 my-5 text-justify border-2 lg:w-[40%] lg:h-[25%] flex items-center"
          >
            <div class="ml-2 flex flex-row gap-3 items-center">
              <!-- Bedroom Count Needs to be Fetched -->
              Property Status:
              <span
                class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs font-500 text-justify"
              >
                <!-- {{ property.bedroom }} -->

                1
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Amenities -->
  <div
    class="md:font-poppins border-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5 h-[360px]"
  >
    <div
      class="font-bold custom-sm:my-[3%] sm:my-[3%] lg:ml-5 border-b-2 border-dashed font-poppins"
    >
      Amenities:
    </div>
    <div class="md:p-2">
      <div class="flex">
        <div class="w-[95%] mx-auto flex flex-wrap items-center justify-center">
          <div
            class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            <!-- {{ property.amenities-name }} -->
            Sprinklers
          </div>
          <!-- City needs to be Fetched Here -->

          <div
            class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="SignDirection"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            <!-- {{ property.amenities-name }} -->
            Recreation
          </div>

          <!-- Land Area Needs to be Fetched Here -->
          <div
            class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            <!-- {{ property.amenities-name }} -->
            Sprinklers
          </div>
          <!-- Zip Needs to be Fetched Here -->
          <div
            class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            <!-- {{ property.amenities-name }} -->
            Sprinklers
          </div>
          <!-- Neighborhood Needs to be Fetched Here -->
          <div
            class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            <!-- {{ property.amenities-name }} -->
            Sprinklers
          </div>
          <div
            class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            <!-- {{ property.amenities-name }} -->
            Sprinklers
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Nearest Places -->
  <div
    class="md:font-poppins border-2 p-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5 h-[360px]"
  >
    <div
      class="font-bold custom-sm:my-[3%] sm:my-[3%] lg:ml-5 border-b-2 border-dashed font-poppins"
    >
      Nearest Places:
    </div>
    <div class="md:p-2">
      <div class="flex">
        <div class="w-[95%] mx-auto flex flex-wrap items-center justify-center">
          <div
            class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[50%] my-[5%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            <!-- {{ property.amenities-name }} -->
            INDIANA AEROSPACE UNIVERSITY
          </div>
          <!-- City needs to be Fetched Here -->

          <div
            class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[50%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="SignDirection"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            <!-- {{ property.amenities-name }} -->
            GAISANO GRAND MALL BASAK
          </div>

          <!-- Land Area Needs to be Fetched Here -->
          <div
            class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[50%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            <!-- {{ property.amenities-name }} -->
            MACTAN DOCTORS HOSPITAL
          </div>
          <!-- Zip Needs to be Fetched Here -->
          <div
            class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[50%]"
          >
            <!-- {{ property.amenities-logo }} -->

            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            <!-- {{ property.amenities-name }} -->
            MACTAN INTERNATIONAL AIRPORT
          </div>
          <!-- Neighborhood Needs to be Fetched Here -->
        </div>
      </div>
    </div>
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

<!-- <div class="border-2 m-2 p-1 font-medium">
            City:
            <span
              class="text-base font-normal lg:text-md md:text-md custom-sm:text-xs sm:text-xs"
            >
              {{ property.property_city }}</span
            >
          </div> -->
<!-- <div class="">
            <div class="border-2 m-2 p-1 font-medium">
              Zip:
              <span
                class="text-base font-normal lg:text-md md:text-md custom-sm:text-xs sm:text-xs"
              >
                {{ property.property_zipcode }}</span
              >
            </div>
            <div class="border-2 m-2 p-1 font-medium">
              State/Country:
              <span
                class="text-base font-normal lg:text-md md:text-md custom-sm:text-xs sm:text-xs"
              >
                {{ property.property_country }}
              </span>
            </div>
          </div> -->

<!-- Details -->
<!-- <div
    class="border-2 md:p-2 lg:p-2 custom-sm:mb-0 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) md:mb-5 lg:mb-5"
  >
    <div class="font-semibold custom-sm:mx-[3%]">Details:</div>
    <div class="p-3">
      <div class="flex">
        <div class="w-[50%]">
          <div class="border-2 m-2 p-1 font-medium">
            <mdicon
              name="instagram"
              :width="30"
              :height="30"
              class="hover:text-orange-500 mr-5"
            />
            Bedroom:
            <span
              class="text-base font-normal lg:text-md md:text-md custom-sm:text-xs sm:text-xs"
            >
              {{ property.property_bedroom }}</span
            >
          </div>
          <div class="border-2 m-2 p-1 font-medium">
            Bathroom:
            <span
              class="text-base font-normal lg:text-md md:text-md custom-sm:text-xs sm:text-xs"
            >
              {{ property.property_bathroom }}</span
            >
          </div>
        </div>
        <div class="w-[50%]">
          <div class="border-2 m-2 p-1 font-medium">
            Land Area:
            <span
              class="text-base font-normal lg:text-md md:text-md custom-sm:text-xs sm:text-xs"
            >
              {{ property.property_area }}</span
            >
          </div>
          <div class="border-2 m-2 p-1 font-medium">
            Parking Space:
            <span
              class="text-base font-normal lg:text-md md:text-md custom-sm:text-xs sm:text-xs"
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
  </div> -->

<!-- <div class="border-2 m-2 p-1 font-medium">
            City:
            <span
              class="text-base font-normal lg:text-md md:text-md custom-sm:text-xs sm:text-xs"
            >
              {{ property.property_city }}</span
            >
          </div> -->
<!-- <div class="">
            <div class="border-2 m-2 p-1 font-medium">
              Zip:
              <span
                class="text-base font-normal lg:text-md md:text-md custom-sm:text-xs sm:text-xs"
              >
                {{ property.property_zipcode }}</span
              >
            </div>
            <div class="border-2 m-2 p-1 font-medium">
              State/Country:
              <span
                class="text-base font-normal lg:text-md md:text-md custom-sm:text-xs sm:text-xs"
              >
                {{ property.property_country }}
              </span>
            </div>
          </div> -->
