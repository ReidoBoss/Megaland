<template>
  <!-- Property Name -->
  <div
    class="border-2 p-5 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5"
  >
    <div class="text-center font-bold text-xl">
      {{ name }}
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
                  :src="main_image"
                  class="object-cover h-full w-full"
                  alt="..."
                />
              </div>
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <div class="absolute inset-0">
                <img
                  :src="extra1"
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
                  :src="extra2"
                  class="lg:object-cover h-full w-full"
                  alt="..."
                />
              </div>
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <div class="absolute inset-0">
                <img
                  :src="extra3"
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
                  :src="main_image"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-[90%] max-w-full rounded-lg"
                  :src="extra1"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-[90%] max-w-full rounded-lg"
                  :src="extra2"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-[90%] max-w-full rounded-lg"
                  :src="extra3"
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
          property_price
            ? property_price.toLocaleString("en-US")
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
        {{ local_area }}
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
          {{ description }}
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

                {{ local_area }}
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

                {{ city }}
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

                {{ country }}
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

                {{ zipcode }}
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

                {{ local_area }}, {{ city }}
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

                {{ bedroom }}
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

                {{ bathroom }}
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

                {{property_area}}sqm
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

                {{ parking_space }}
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
            v-if="attic!=0"
          >
            <mdicon
              name="Sprinkler"
              :width="30"
              :height="30"
              class="text-gray-700"
            />
            Attic
          </div>
          <!-- ----- -->
          <div
          class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
          v-if="balcony!=0"
        >
          <mdicon
            name="Sprinkler"
            :width="30"
            :height="30"
            class="text-gray-700"
          />
          Balcony
        </div>
          <!-- ----- -->
                    <!-- ----- -->
                    <div
                    class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
                    v-if="deck!=0"
                  >
                    <mdicon
                      name="Sprinkler"
                      :width="30"
                      :height="30"
                      class="text-gray-700"
                    />
                    Deck
                  </div>
                    <!-- ----- -->
          <!-- ----- -->
          <div
          class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
          v-if="fenced_yard!=0"
        >
          <mdicon
            name="Sprinkler"
            :width="30"
            :height="30"
            class="text-gray-700"
          />
          Fenced Yard
        </div>
          <!-- ----- -->
                    <!-- ----- -->
                    <div
                    class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
                    v-if="frontyard!=0"
                  >
                    <mdicon
                      name="Sprinkler"
                      :width="30"
                      :height="30"
                      class="text-gray-700"
                    />
                    Front Yard
                  </div>
                    <!-- ----- -->
                              <!-- ----- -->
          <div
          class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
          v-if="gasheat!=0"
        >
          <mdicon
            name="Sprinkler"
            :width="30"
            :height="30"
            class="text-gray-700"
          />
          Gas Heat
        </div>
          <!-- ----- -->
                    <!-- ----- -->
                    <div
                    class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
                    v-if="gym!=0"
                  >
                    <mdicon
                      name="Sprinkler"
                      :width="30"
                      :height="30"
                      class="text-gray-700"
                    />
                    Gym
                  </div>
                    <!-- ----- -->
                              <!-- ----- -->
          <div
          class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
          v-if="lake_view!=0"
        >
          <mdicon
            name="Sprinkler"
            :width="30"
            :height="30"
            class="text-gray-700"
          />
          Lake View
        </div>
          <!-- ----- -->
                    <!-- ----- -->
                    <div
                    class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
                    v-if="pond!=0"
                  >
                    <mdicon
                      name="Sprinkler"
                      :width="30"
                      :height="30"
                      class="text-gray-700"
                    />
                    Pond
                  </div>
                    <!-- ----- -->
                              <!-- ----- -->
          <div
          class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
          v-if="pool!=0"
        >
          <mdicon
            name="Sprinkler"
            :width="30"
            :height="30"
            class="text-gray-700"
          />
          Pool
        </div>
          <!-- ----- -->
                    <!-- ----- -->
                    <div
                    class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
                    v-if="recreation!=0"
                  >
                    <mdicon
                      name="Sprinkler"
                      :width="30"
                      :height="30"
                      class="text-gray-700"
                    />
                    Recreation
                  </div>
                    <!-- ----- -->
                              <!-- ----- -->
          <div
          class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
          v-if="sprinklers!=0"
        >
          <mdicon
            name="Sprinkler"
            :width="30"
            :height="30"
            class="text-gray-700"
          />
          Sprinklers
        </div>
          <!-- ----- -->
                    <!-- ----- -->
                    <div
                    class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
                    v-if="storage!=0"
                  >
                    <mdicon
                      name="Sprinkler"
                      :width="30"
                      :height="30"
                      class="text-gray-700"
                    />
                    Storage
                  </div>
                    <!-- ----- -->
                              <!-- ----- -->
          <div
          class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
          v-if="washer!=0"
        >
          <mdicon
            name="Sprinkler"
            :width="30"
            :height="30"
            class="text-gray-700"
          />
          Washer
        </div>
          <!-- ----- -->
                    <!-- ----- -->
                    <div
                    class="lg:text-md md:text-md custom-sm:text-sm sm:text-xs text-justify flex gap-2 justify-center items-center font-semibold w-[33.3%] my-[5%]"
                    v-if="wine_cellar!=0"
                  >
                    <mdicon
                      name="Sprinkler"
                      :width="30"
                      :height="30"
                      class="text-gray-700"
                    />
                    Wine Cellar
                  </div>
                    <!-- ----- -->
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
          <!-- ----- -->
          <div
          v-if="airport!='undefined' "
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
            {{ airport }}
          </div>
          <!-- ----- -->
                    <!-- ----- -->
                    <div
                    v-if="bus_stand!='undefined'"
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
                      {{ bus_stand }}
                    </div>
                    <!-- ----- -->
                    <div
                    v-if="hospital!='undefined'"
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
                      {{ hospital }}
                    </div>
                    <!-- ----- -->
                    <div
                    v-if="patroltank!='undefined'"
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
                      {{ patroltank }}
                    </div>
                    <!-- ----- -->
                    <div
                    v-if="railway!='undefined'"
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
                      {{ railway }}
                    </div>
                    <!-- ----- -->
                    <div
                    v-if="shopping!='undefined'"
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
                      {{ shopping }}
                    </div>
                    <!-- ----- -->
                    <div
                    v-if=" universities!='undefined'"
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
                      {{ universities }}
                    </div>
                    <!-- ----- -->

                    <div
                    v-if="others!='undefined'"
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
                      Notable Land Mark: {{ others }}
                    </div>
                    <!-- ----- -->

          <!-- Neighborhood Needs to be Fetched Here -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});


defineProps({
  name:String,
  main_image:String,
  extra1: String,
  extra2: String,
  extra3: String,
  property_price: String,
  local_area: String,
  description: String,
  city: String,
  country: String,
  zipcode: String,
  bedroom: String,
  bathroom: String,
  property_area: String,
  parking_space: String,
  attic: Number,
  balcony: Number,
  deck: Number,
  fenced_yard: Number,
  frontyard: Number,
  gasheat: Number,
  gym: Number,
  lake_view: Number,
  pond: Number,
  pool: Number,
  recreation: Number,
  sprinklers: Number,
  storage: Number,
  washer: Number,
  wine_cellar: Number,
  airport: String,
  bus_stand: String,
  hospital: String,
  patroltank: String,
  railway: String,
  shopping: String,
  universities: String,
  others: String,
});

</script>
