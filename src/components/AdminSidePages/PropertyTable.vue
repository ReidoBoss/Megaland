<template>
  <div class="h-full">
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
            src="src/assets/mgLogo.png"
            class="lg:h-40 lg:w-50 md:h-20 md:w-35 custom-sm:w-[30%] custom-sm:h-[20%]"
            alt="megaland"
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
          class="bg-primary w-[20%] border-dashed border-2 h-screen self-start sticky top-0 z-10 custom-sm:hidden sm:hidden md:hidden lg:block text-[#e9d8c5]"
        >
          <ul
            class="flex flex-col gap-10 justify-end hover: cursor-pointer mt-[25%] ml-10"
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
                to="/AdminNew"
                >Property Listing</router-link
              >
            </li>
            <li class="flex">
              <mdicon
                name="TableLargePlus"
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
                name="AccountMultiplePlusOutline"
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
                name="TableEdit"
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
                name="ClipboardListOutline"
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
                name="TableAccount"
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
            <li class="flex">
              <mdicon
                name="LoginVariant"
                :width="30"
                :height="30"
                class="hover:text-white"
              />
              <router-link
                class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
                to="/AdminNewSignOut"
                >Logout Account</router-link
              >
            </li>
          </ul>
        </aside>

        <div
          class="custom-sm:w-[90%] custom-sm:h-[750px] md:w-[80%] mx-auto lg:w-[80%] md:h-[750px] md:mt-[10%] lg:mt-[5%]"
        >
          <div
            class="custom-sm:w-[100%] md:w-[90%] mt-[5%] border-2 rounded-lg px-5 py-5 bg-white mx-auto"
          >
            <div class="flex justify-start items-center">
              <mdicon
                name="AccountPlusOutline"
                :width="35"
                :height="35"
                class="hover:text-white text-[#111929] mr-2"
              />
              <span class="font-semibold text-md"> Property List Table</span>
            </div>
            <div class="md:flex md:flex-row md:row-span-3 md:gap-6">
              <div
                class="flex justify-start items-start flex-col mt-5 md:w-[30%]"
              >
                <label class="block mb-2 text-sm font-medium" for="agentname"
                  >Property Name:</label
                >
                <input
                  id="agentname"
                  type="text"
                  class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>
              <div
                class="flex justify-start items-start flex-col mt-5 md:w-[30%]"
              >
                <label class="block mb-2 text-sm font-medium" for="agentemail"
                  >Email</label
                >
                <input
                  id="agentemail"
                  type="email"
                  class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>

              <div
                class="flex justify-start items-start flex-col mt-5 md:w-[30%]"
              >
                <label
                  class="block mb-2 text-sm font-medium"
                  for="propertystatus"
                  >Status</label
                >
                <select
                  v-model="property_enable"
                  id="propertystatus"
                  class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 custom-sm:text-sm custom-sm:leading-6 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                >
                  <option class="block mb-2 text-sm font-medium" value="Enable">
                    Enable
                  </option>
                  <option class="block mb-2 text-sm font-medium" value="D">
                    Disable
                  </option>
                </select>
              </div>
            </div>
            <div class="flex justify-start items-start flex-col mt-6">
              <button
                @click="submitAgent"
                class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#7F1D1D] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-[#7F1D1D] mr-4"
                id="saveAgent"
              >
                Filter
              </button>
            </div>
          </div>

          <div class="rounded-lg mx-auto lg:w-[100%]">
            <div
              class="relative overflow-x-auto my-[5%] lg:w-[90%] lg:mx-auto lg:my-[8%] md:w-[90%] md:my-[5%] mx-auto rounded-lg custom-sm:mt-[8%]"
            >
              <table class="text-left rtl:text-right">
                <thead class="text-[8.5px] uppercase bg-gray-200">
                  <tr class="text-xs">
                    <th scope="col" class="py-3"></th>
                    <th scope="col" class="px-6 py-3">Images</th>
                    <th scope="col" class="px-12 py-3">Name</th>
                    <th scope="col" class="px-6 py-3">Property Status</th>
                    <th scope="col" class="px-6 py-3">Price</th>

                    <th scope="col" class="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody class="font-semibold text-sm">
                  <tr class="bg-white border-b">
                    <th
                      scope="row"
                      class="px-2 py-6 font-medium text-gray-900 whitespace-nowrap flex justify-center items-center"
                    >
                      <div class="flex items-center justify-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          class="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                        />
                      </div>
                    </th>
                    <td class="custom-sm:w-[20%] custom-sm:h-[20%] md:w-[10%]">
                      <img
                        class="md:w-[80%] lg:w-[80%] custom-sm:w-[80%] mx-auto my-2"
                        src="src/assets/images/Youtube-Images/image1.png"
                      />
                    </td>
                    <td class="px-6">DANARRA SOUTH</td>

                    <td class="px-6 py-4">Buy</td>
                    <td class="px-6 py-4">7094018</td>
                    <td
                      class="px-6 py-4 text-blue-600 font bold cursor-pointer"
                    >
                      Edit
                    </td>
                  </tr>

                  <tr class="bg-white border-b">
                    <th
                      scope="row"
                      class="px-2 py-6 font-medium text-gray-900 whitespace-nowrap flex justify-center items-center"
                    >
                      <div class="flex items-center justify-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          class="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                        />
                      </div>
                    </th>
                    <td class="custom-sm:w-[20%] custom-sm:h-[20%] md:w-[10%]">
                      <img
                        class="md:w-[80%] lg:w-[80%] custom-sm:w-[80%] mx-auto my-2"
                        src="src/assets/images/Youtube-Images/image1.png"
                      />
                    </td>
                    <td class="px-6">PASEO JULIO</td>

                    <td class="px-6 py-4">Buy</td>
                    <td class="px-6 py-4">7094018</td>
                    <td
                      class="px-6 py-4 text-blue-600 font bold cursor-pointer"
                    >
                      Edit
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <th
                      scope="row"
                      class="px-2 py-6 font-medium text-gray-900 whitespace-nowrap flex justify-center items-center"
                    >
                      <div class="flex items-center justify-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          class="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                        />
                      </div>
                    </th>
                    <td class="custom-sm:w-[20%] custom-sm:h-[20%] md:w-[10%]">
                      <img
                        class="md:w-[80%] lg:w-[80%] custom-sm:w-[80%] mx-auto my-2"
                        src="src/assets/images/Youtube-Images/image1.png"
                      />
                    </td>
                    <td class="px-6">PARKVILLE BACOLOD BY SMDC</td>

                    <td class="px-6 py-4">Buy</td>
                    <td class="px-6 py-4">7094018</td>
                    <td
                      class="px-6 py-4 text-blue-600 font bold cursor-pointer"
                    >
                      Edit
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideBarAdminNew from "../AdminSidePages/SideBarAdminNew.vue";
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
./AdminSidePages/SideBarAdminNew.vue ../../router
