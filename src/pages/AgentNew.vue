<template>
  <div class="bg-white h-full">
    <nav
      class="border-gray-200 bg-[#E67E23] py-5 items-center justify-center flex mx-auto"
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
            >Welcome Back Agent Stephen G!</span
          >
        </div>
      </div>
    </nav>

    <div class="w-full lg:hidden md:block custom-sm:block bg-white">
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
      <div class="flex flex-row row-span-2 bg-white">
        <aside
          class="bg-gray-900 w-[25%] border-dashed border-primary-2 h-screen self-start sticky top-0 z-10 custom-sm:hidden sm:hidden md:hidden lg:block text-[#e9d8c5]"
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
                >View Agent</router-link
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
                >Edit Agent</router-link
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
