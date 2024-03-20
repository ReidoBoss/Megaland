<template>
  <div class="bg-[#e9d8c5] h-full">
    <nav
      class="border-gray-200 bg-primary py-5 items-center justify-center flex mx-auto"
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
            class="text-xl font-bold dark:text-white flex custom-sm:text-sm"
            ></span
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
    <SideBarAgentNew
      :isVisible="isSidebarVisible"
      :toggleSidebar="toggleSidebar"
    />

    <div class="bg-gray-900 lg:block w-[100%] h-[100%] sticky top-0">
      <div class="flex flex-row row-span-2 bg-[#e9d8c5]">
        <aside
          class="bg-gray-900 w-[25%] border-dashed border-orange-500 border-2 h-screen self-start sticky top-0 z-10 custom-sm:hidden sm:hidden md:hidden lg:block text-orange-500"
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
                to="/AgentNewViewAgent"
                >View Profile</router-link
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
                to="/AgentNewEditAgent"
                >Edit Profile</router-link
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
                to="/AgentNewAddProperty"
                >Add Property</router-link
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
                to="/AgentNewManageProperty"
                >Manage Property</router-link
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
                to="/AgentNewChangePassword"
                >Change Password</router-link
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
                >Logout</router-link
              >
            </li>
          </ul>
        </aside>
        <div class="lg:w-[100%]">
           
          <div class="lg:w-[70%] custom-sm:w-[100%] mx-auto my-[5%]">
            <div class="flex flex-wrap mx-auto my-[5%] lg:w-[22%] custom-sm:w-[40%] bg-orange-500 rounded-full h-[180px] border-2 "><span class="w-[90%] h-[90%] flex items-center justify-center rounded-full mx-auto my-auto bg-white"><img class="lg:w-[90%] lg:h-[90%] custom-sm:w-[100%] custom-sm:h-[100%] my-auto mx-auto rounded-full " src="/src/assets/marivil.png"/></span></div>
            
            <table class="table table-bordered lg:w-[100%] custom-sm:w-[90%] mx-auto text-xs">
                
              <tbody>
               <tr class="border-primary border w-[100%]">
                

               </tr>
                <tr class="border-primary border w-[50%] ">
                  <td
                    class="border-primary border w-[25%] py-[2%] px-[2%] font-poppins font-bold"
                  >
                    Agent Name
                  </td>
                  <td class="border-primary border px-[2%] font-semibold ">Marivil Du</td>
                </tr>
                <tr class="border-primary border w-[50%] ">
                  <td
                    class="border-primary border w-[25%] py-[2%] px-[2%] font-poppins font-bold"
                  >
                    Position
                  </td>
                  <td class="border-primary border px-[2%] font-semibold">Managing Broker</td>
                </tr>
                <tr class="border-primary border w-[50%]">
                  <td
                    class="border-primary border w-[25%] py-[2%] px-[2%] font-poppins font-bold"
                  >
                    Address
                  </td>
                  <td class="border-primary border px-[2%] font-semibold">
                    Unit 101,148 Residences,Pelaez St.Kalubihan,Cebu City
                  </td>
                </tr>
                <tr class="border-primary border w-[50%] ">
                  <td
                    class="border-primary border w-[25%] py-[2%] px-[2%] font-poppins font-bold"
                  >
                    Contact
                  </td>
                  <td class="border-primary border px-[2%] font-semibold">09773824416; 032-254-1640</td>
                </tr>
                <tr class="border-primary border w-[50%] font-semibold">
                  <td
                    class="border-primary border w-[25%] py-[2%] px-[2%] font-poppins font-bold"
                  >
                    Country
                  </td>
                  <td class="border-primary border px-[2%] font-semibold">Philippines</td>
                </tr>
                <tr class="border-primary border w-[50%]">
                  <td
                    class="border-primary border w-[25%] py-[2%] px-[2%] font-poppins font-bold"
                  >
                    City
                  </td>
                  <td class="border-primary border px-[2%] font-semibold">Cebu City</td>
                </tr>
                <tr class="border-primary border w-[50%]">
                  <td
                    class="border-primary border w-[20%] py-[2%] px-[2%] font-poppins font-bold"
                  >
                    Postcode
                  </td>
                  <td class="border-primary border px-[2%] font-semibold">6000</td>
                </tr>
                <tr class="border-primary border w-[50%]">
                  <td
                    class="border-primary border w-[20%] py-[2%] px-[2%] font-poppins font-bold"
                  >
                    Facebook Link
                  </td>
                  <td class="border-primary border px-[2%] font-semibold">Link sa facebook ni maam</td>
                </tr>
                <tr class="border-primary border w-[50%]">
                  <td
                    class="border-primary border w-[25%] py-[2%] px-[2%] font-poppins font-bold"
                  >
                    Twitter
                  </td>
                  <td class="border-primary border px-[2%] font-semibold">Twitter link ni maam</td>
                  <tr class="border-primary border w-[50%]">
                  <td
                    class="border-primary border w-[25%] py-[2%] px-[2%] font-poppins font-bold"
                  >
                    Instagram
                  </td>
                  <td class="border-primary border px-[2%] font-semibold">Instagram Link</td>
                </tr>
                </tr>
                <tr class="border-primary border w-[50%]">
                  <td
                    class="border-primary border w-[25%] py-[2%] px-[2%] font-poppins font-bold"
                  >
                    Description
                  </td>
                  <td class="border-primary border px-[2%] font-semibold py-[3%] text-justify">
                    As the Managing Broker of Megaland Realty, my real estate
                    journey began in 2006 when I started out as a Real Estate
                    Agent. In 2008, I passed the Brokers licensure Examination
                    and went on to establish Mavildu Realty in July 2014, which
                    later evolved to become Megaland Realty in 2022. Drawing
                    from my extensive knowlegde of the Cebu Real Estate market,
                    I have relentlessly pursued my dream of creating on e of the
                    most reputable agencies in the region, relying in my
                    hardwork, ambition,and unwavering determination. Apart from
                    Cebu Properties, I also cater and offer a wide range of
                    properties in other regions, including Bohol, Dumaguete,
                    Butuan, Bacolod, Davao and Cagayan de Oro, catering to our
                    client's needs in the Visayas and Mindanao areas.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SideBarAgentNew from "../components/SideBarAgentNew.vue";
import { ref } from "vue";
const active = ref(0);
const isSidebarVisible = ref(false);
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};

import router from "../router";
import { useRoute } from "vue-router";
</script>
