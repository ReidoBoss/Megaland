<template>
  <div class="bg-[#e9d8c5] h-[3500px]">
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

    <!-- Tab Navigations -->
    <div
      class="md:bg-gray-900 md:border-t-2 md:border-l-2 md:border-r-2 md:text-xl md:font-bold md:flex md:flex-row-4 md:h-[130px] md:row-span-4 custom-sm:w-[100%] custom-sm:flex custom-sm:flex-row custom-sm:mx-auto custom-sm:h-[50px] custom-sm: custom-sm:bg-gray-900 font-poppins"
    >
      <div
        :class="
          active == 0
            ? 'bg-[#e9d8c5]   font-bold border-gray-900 text-gray-900'
            : 'text-orange-500'
        "
        @click="active = 0"
        class="hover:cursor-pointer md:w-[25%] md:font-bold md:flex md:flex-row-4 text-center flex custom-sm:w-[30%] justify-center items-center hover:bg-gray custom-sm:border-r-2 custom-sm:border-t-2"
      >
        Propery Listing
      </div>
      <div
        :class="
          active == 1
            ? 'bg-[#e9d8c5]  border-gray-900 font-bold  '
            : 'text-orange-500 '
        "
        @click="active = 1"
        class="hover:cursor-pointer md:w-[25%] md:border-l-2 md:border-r-2 md:flex md:flex-row-4 text-center flex custom-sm:w-[22%] justify-center items-center custom-sm:border-r-2 custom-sm:border-t-2"
      >
        Add Agent
      </div>
      <div
        :class="
          active == 2
            ? 'bg-[#e9d8c5] border-2 border-gray-900 custom-sm:border-t-2 font-bold'
            : 'text-orange-500'
        "
        @click="active = 2"
        class="hover:cursor-pointer md:w-[25%] flex custom-sm:w-[28%] justify-center items-center custom-sm:border-r-2 custom-sm:border-t-2"
      >
        <span class="text-center">Agents Table</span>
      </div>
      <div
        :class="
          active == 3
            ? 'bg-[#e9d8c5]  border-gray-900 font-bold text-center flex justify-center items-center mx-auto '
            : 'text-orange-500'
        "
        @click="active = 3"
        class="hover:cursor-pointer md:w-[25%] md:border-l-2 flex custom-sm:w-[20%] justify-center items-center text-center mx-auto custom-sm:border-r-2 custom-sm:border-t-2"
      >
        <span>Property Table</span>
      </div>

      <Transition name="fade" mode="out-in">
        <PropertyListing v-if="active == 0" />
        <AddAgent v-else-if="active == 1" />
        <AgentsTable v-else-if="active == 2" />
        <PropertyTable v-else-if="active == 3" />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const active = ref(0);

import PropertyListing from "../components/PropertyListing.vue";
import AddAgent from "../components/AddAgent.vue";
import AgentsTable from "../components/AgentsTable.vue";
import PropertyTable from "../components/PropertyTable.vue";
</script>
