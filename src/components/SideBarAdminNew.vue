<!-- Sidebar.vue -->
<template>
  <div
    v-if="isVisible"
    class="border-2 border-dashed custom-sm:overflow-y-auto sm:overflow-y-auto md:overflow-y-auto fixed top-0 left-0 custom-sm:w-64 custom-sm:h-[100%] sm:h-[100%] md:h-[100%] md:w-[37%] bg-primary text-[#e9d8c5] p-2 z-10 lg:hidden"
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

    <ul class="flex flex-col gap-10 justify-end hover: cursor-pointer mt-[25%]">
      <li class="flex">
        <mdicon name="Home" :width="30" :height="30" class="hover:text-white" />
        <router-link
          class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
          to="/AdminNewListProperty"
          >Property Listing</router-link
        >
      </li>
      <li class="flex">
        <mdicon name="Home" :width="30" :height="30" class="hover:text-white" />
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
