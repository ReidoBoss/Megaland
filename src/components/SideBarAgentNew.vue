<!-- Sidebar.vue -->
<template>
  <div
    v-if="isVisible"
    class="border-2 border-dashed border-orange-500 custom-sm:overflow-y-auto sm:overflow-y-auto md:overflow-y-auto fixed top-0 left-0 custom-sm:w-64 custom-sm:h-[100%] sm:h-[100%] md:h-[100%] md:w-[37%] bg-primary text-orange-500 p-2 z-10 lg:hidden"
  >
    <div class="flex my-2">
      <mdicon
        name="AccountCircle"
        :width="35"
        :height="35"
        class="hover:text-white"
      />
      <button
        @click="toggleSidebar"
        class="text-[#e9d8c5] custom-sm:ml-[70%] sm:ml-[70%] md:ml-[75%]"
      >
        <mdicon
          name="CloseCircle"
          :width="35"
          :height="35"
          class="hover:text-white"
        />
      </button>
    </div>

    <!-- Sidebar content goes here -->

    <ul
      class="flex flex-col gap-10 justify-center items-start hover: cursor-pointer my-[50%] sticky top-1"
    >
      <li class="flex">
        <mdicon name="Home" :width="30" :height="30" class="hover:text-white" />
        <router-link
          class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
          to="/AgentNewViewAgent"
          >View Profile</router-link
        >
      </li>
      <li class="flex">
        <mdicon name="Home" :width="30" :height="30" class="hover:text-white" />
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
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { register } from "swiper/element/bundle";

defineProps(["isVisible", "toggleSidebar"]);

import router from "../router";
import { useRoute } from "vue-router";
register();
const route = useRoute();

const data = ref({
  textInputValue: "",
});
</script>
