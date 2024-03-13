<template>
  <div class="bg-[#e9d8c5] h-full">
    <nav
      class="border-gray-200 dark:bg-gray-900 py-5 items-center justify-center flex mx-auto"
    >
      <div
        class="flex custom-sm:justify-center custom-sm:items-center p-4 md:mx-auto"
      >
        <div
          class="flex mx-auto items-center justify-center custom-sm:items-center custom-sm:justify-center custom-sm:flex"
        >
          <img
            src="../assets/mgLogo.png"
            class="lg:h-20 lg:w-35 md:h-20 md:w-35 custom-sm:w-[30%] custom-sm:h-[20%]"
            alt=""
          />
          <span
            class="text-xl font-semibold dark:text-white flex custom-sm:text-sm"
            >ADMINISTRATOR</span
          >
        </div>
      </div>
    </nav>

    <div class="w-full lg:hidden md:block custom-sm:block bg-[#e9d8c5]">
      <button
        @click="toggleSidebar"
        class="hover:underline custom-sm:md sm:text-md lg:hidden ml-2"
      >
        <mdicon
          name="ReorderHorizontal"
          :width="35"
          :height="35"
          class="hover:text-white text-[#111929]"
        />
      </button>
    </div>
    <SideBarAdminNew
      :isVisible="isSidebarVisible"
      :toggleSidebar="toggleSidebar"
    />

    <div class="lg:block w-[100%] h-[100%] sticky top-0 bg-[#e9d8c5]">
      <div class="flex flex-row row-span-2">
        <aside
          class="bg-primary w-[25%] border-dashed border-2 h-screen self-start sticky top-0 z-10 custom-sm:hidden sm:hidden md:hidden lg:block text-[#e9d8c5]"
        >
          <ul
            class="flex flex-col gap-10 justify-center ml-10 items-start hover: cursor-pointer my-[50%] sticky top-1"
          >
            <li class="flex">
              <mdicon
                name="Home"
                :width="30"
                :height="30"
                class="hover:text-white"
              />
              <router-link
                class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
                to="/AdminNewListProperty"
                >Property Listing</router-link
              >
            </li>
            <li class="flex">
              <mdicon
                name="Home"
                :width="30"
                :height="30"
                class="hover:text-white"
              />
              <router-link
                class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
                to="/AdminNewPropertyTable"
                >Property Table</router-link
              >
            </li>
            <li class="flex">
              <mdicon
                name="OfficeBuildingMarkerOutline"
                :width="30"
                :height="30"
                class="hover:text-white"
              />
              <router-link
                class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
                to="/AdminNewAddAgent"
                >Add Agent</router-link
              >
            </li>
            <li class="flex">
              <mdicon
                name="NewspaperVariantMultipleOutline"
                :width="30"
                :height="30"
                class="hover:text-white"
              />
              <router-link
                class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
                to="/AdminNewAgentsTable"
                >Agent Table</router-link
              >
            </li>
            <li class="flex">
              <mdicon
                name="NewspaperVariantMultipleOutline"
                :width="30"
                :height="30"
                class="hover:text-white"
              />
              <router-link
                class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
                to="/AdminNewBlogListing"
                >Blog Listing</router-link
              >
            </li>
            <li class="flex">
              <mdicon
                name="NewspaperVariantMultipleOutline"
                :width="30"
                :height="30"
                class="hover:text-white"
              />
              <router-link
                class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
                to="/AdminNewBlogTable"
                >Blog Table</router-link
              >
            </li>
          </ul>
        </aside>

        <div
          class="bg-[#e9d8c5] custom-sm:mb-[10%] lg:w-[100%] custom-sm:w-[90%] md:w-[90%] mx-auto"
        >
          <div
            class="flex md:w-[90%] lg:w-[70%] mt-10 bg-gray-100 rounded-lg items-center justify-center mx-auto my-auto border-2 border-primary text-primary font-500 drop-shadow-lg"
          >
            <div class="text-center w-full my-auto lg:mx-auto mb-10">
              <div class="custom-sm:text-md my-5 mx-5 font-bold">
                Fill out the form below to
                <span class="text-orange-500"> List Blog</span>
              </div>
              <div
                class="border-b-2 border-dashed border-orange-500 flex justify-start items-start w-[85%] mx-auto font-bold custom-sm:mt-[15%] custom-sm:text-sm"
              >
                Blog Listing
              </div>
              <div
                class="flex bg-secondary w-[90%] h-[] rounded-lg mb-8 mx-auto"
              >
                <div class="w-[80%] h-[80%] my-[5%] mx-auto">
                  <form @submit.prevent>
                    <div class="grid grid-cols-1 gap-5 mt-4 sm:grid-cols-2">
                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="blogtitle"
                          >Blog Title</label
                        >
                        <input
                          id="blogtitle"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>

                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="blogdesc"
                          >Description:</label
                        >
                        <textarea
                          id="blogdesc"
                          type="textarea"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        ></textarea>
                      </div>

                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="blogdeveloper"
                          >Developer</label
                        >
                        <input
                          id="blogdeveloper"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>

                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="agentemail"
                          >Email</label
                        >
                        <input
                          id="agentemail"
                          type="email"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>

                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="agentaddress"
                          >Address</label
                        >
                        <input
                          id="agentaddress"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>

                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="agentcontact"
                          >Contact</label
                        >
                        <input
                          id="agentcontact"
                          type="number"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>

                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="agentcity"
                          >City</label
                        >
                        <input
                          id="agentcity"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>

                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="agentcountry"
                          >Country</label
                        >
                        <input
                          id="agentcountry"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>

                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="agentregion"
                          >Region</label
                        >
                        <input
                          id="agentregion"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>

                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="agentusername"
                          >Username</label
                        >
                        <input
                          id="agentusername"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>

                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="agentpassword"
                          >Password</label
                        >
                        <input
                          id="agentpassword"
                          type="password"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>

                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="agentfb"
                          >Facebook</label
                        >
                        <input
                          id="agentfb"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>

                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="agentx"
                          >X(Twitter)</label
                        >
                        <input
                          id="agentx"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>

                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="agentinsta"
                          >Instagram</label
                        >
                        <input
                          id="agentinsta"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>
                      <div
                        class="text-xl font-bold my-5 absolute md:top-[46.5%] md:right-[29%] custom-sm:text-sm custom-sm:top-[58.5%] custom-sm:right-[25%]"
                      >
                        Amenities & Nearby Landmarks
                      </div>
                      <div
                        class="flex flex-wrap items-center space-x-4 md:my-20 custom-sm:mt-20"
                      >
                        <div class="sm:mt-0 w-[100%]">
                          <div class="flex items-center mt-2">
                            <input
                              v-model="property_attic"
                              id="attic"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Attic</label
                            >
                          </div>
                          <div class="flex items-center mt-2">
                            <input
                              v-model="property_balcony"
                              id="balcony"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Balcony</label
                            >
                          </div>
                          <div class="flex items-center mt-2">
                            <input
                              v-model="property_deck"
                              id="deck"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Deck</label
                            >
                          </div>
                          <div class="flex items-center mt-2">
                            <input
                              v-model="property_fenced_yard"
                              id="fenced-yard"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Fenced Yard</label
                            >
                          </div>
                          <div class="flex items-center mt-2">
                            <input
                              v-model="property_fireplace"
                              id="fireplace"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Fireplace</label
                            >
                          </div>
                          <div class="flex items-center mt-2">
                            <input
                              v-model="property_frontyard"
                              id="frontyard"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Front Yard</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="property_gasheat"
                              id="gasheat"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Gas Heat</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="property_gym"
                              id="gym"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Gym</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="property_lakeview"
                              id="lakeview"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Lake View</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="property_pond"
                              id="pond"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Pond</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="property_pool"
                              id="pool"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Pool</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="property_recreation"
                              id="recreation"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Recreation</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="property_sprinklers"
                              id="sprinklers"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Sprinklers</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="property_storage"
                              id="storage"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Storage</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="property_washer"
                              id="washer"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Washer</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="property_winecellar"
                              id="winecellar"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Wine Cellar</label
                            >
                          </div>
                        </div>
                      </div>

                      <!--Nearest Places-->
                      <div class="sm:mt-0">
                        <!-- <h2 class="text-2xl font-bold leading-7 text-gray-900 mt-5">
                  Nearby Landmarks
                </h2> -->

                        <div class="flex items-center md:mt-20">
                          <input
                            v-model="property_airport"
                            id="airport"
                            type="checkbox"
                            class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                          />
                          <label
                            for="attic"
                            class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                            >Airport</label
                          >
                        </div>
                        <div class="flex items-center mt-2">
                          <input
                            v-model="property_busstand"
                            id="bus-stand"
                            type="checkbox"
                            class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                          />
                          <label
                            for="attic"
                            class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                            >Bus Stand</label
                          >
                        </div>

                        <div class="flex items-center mt-2">
                          <input
                            v-model="property_hospital"
                            id="hospital"
                            type="checkbox"
                            class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                          />
                          <label
                            for="attic"
                            class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                            >Deck</label
                          >
                        </div>

                        <div class="flex items-center mt-2">
                          <input
                            v-model="property_patroltank"
                            id="patroltank"
                            type="checkbox"
                            class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                          />
                          <label
                            for="attic"
                            class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                            >Deck</label
                          >
                        </div>

                        <div class="flex items-center mt-2">
                          <input
                            v-model="property_railway"
                            id="railway"
                            type="checkbox"
                            class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                          />
                          <label
                            for="attic"
                            class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                            >Deck</label
                          >
                        </div>
                        <div class="flex items-center mt-2">
                          <input
                            v-model="property_shopping"
                            id="shopping"
                            type="checkbox"
                            class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                          />
                          <label
                            for="attic"
                            class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                            >Deck</label
                          >
                        </div>
                        <div class="flex items-center mt-2">
                          <input
                            v-model="property_universities"
                            id="universities"
                            type="checkbox"
                            class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                          />
                          <label
                            for="attic"
                            class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                            >Deck</label
                          >
                        </div>
                        <div class="flex items-center mt-2">
                          <input
                            v-model="property_enable"
                            id="enable"
                            type="checkbox"
                            class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                          />
                          <label
                            for="attic"
                            class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                            >Enable</label
                          >
                        </div>
                      </div>
                      <div class="flex justify-start items-start flex-col mt-5">
                        <label class="block text-sm font-medium text-black">
                          Upload an Image
                        </label>
                        <div
                          class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                        >
                          <div class="space-y-1 text-center">
                            <svg
                              class="mx-auto h-12 w-12 text-black"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <div class="flex text-sm text-black">
                              <label
                                for="agentimage"
                                class="relative cursor-pointer rounded-md font-medium text-orange-500 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span class="">Upload a file</span>
                                <input
                                  id="agentimage"
                                  name="agentimage"
                                  type="file"
                                  class="sr-only"
                                />
                              </label>
                              <p class="pl-1 text-black">or drag and drop</p>
                            </div>
                            <p class="text-xs text-black">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-start items-start flex-col mt-6">
                      <button
                        @click="submitAgent"
                        class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 mr-4"
                        id="saveAgent"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideBarAdminNew from "../components/SideBarAdminNew.vue";
import { ref } from "vue";
const active = ref(0);
const isSidebarVisible = ref(false);
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
import { ref } from "vue";
import router from "../router";
import { useRoute } from "vue-router";
</script>
