<!-- Sidebar.vue -->
<template>
  <div
    v-if="isVisible"
    class="custom-sm:overflow-y-auto sm:overflow-y-auto md:overflow-y-auto fixed top-0 left-0 custom-sm:w-64 custom-sm:h-[100%] sm:h-[100%] md:h-[100%] md:w-[50%] bg-[#454544] text-orange-500 p-2 z-10 lg:hidden"
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
        class="text-orange-500 custom-sm:ml-[70%] sm:ml-[70%] md:ml-[75%]"
      >
        <mdicon
          name="CloseCircle"
          :width="35"
          :height="35"
          class="hover:text-white"
        />
      </button>
    </div>
    <div class="border-b my-5 border-orange-500 w-[100%]"></div>
    <div>
      <div
        class="flex h-10 sticky top-11 my-5 justify-center bg-[#454544] z-10"
      >
        <div class="flex w-[90%] justify-center items-center gap-1">
          <input
            class="border-[#E67E23] text-black font-poppins font-bold rounded md:w-[70%] custom-sm:w-[80%] h-11 focus:outline-none hover:shadow-2xl pl-3"
            type="text"
            name=""
            id="search_bar"
            placeholder="Search..."
            :value="data.textInputValue"
            @keyup.enter="search"
            @input="(e: Event) => updateTextInputValue(e as InputEvent)"
            @blur="typedValue()"
          />
        </div>
      </div>
    </div>

    <!-- Sidebar content goes here -->

    <ul class="flex flex-col gap-5 justify-end hover: cursor-pointer">
      <li class="flex">
        <mdicon name="Home" :width="30" :height="30" class="hover:text-white" />
        <router-link
          class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
          to="/"
          >Home</router-link
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
          to="/properties/1"
          >Properties</router-link
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
          to="/PropertyNews"
          >Property News</router-link
        >
      </li>
      <div class="hover-bg-color-orange-500">
        <li class="flex">
          <mdicon
            name="AccountGroupOutline"
            :width="30"
            :height="30"
            class="hover:text-white"
          />
          <router-link
            class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
            to="/about"
            >About Us</router-link
          >
        </li>
      </div>

      <li class="flex">
        <mdicon
          name="PhoneCheckOutline"
          :width="30"
          :height="30"
          class="hover:text-white"
        />
        <router-link
          class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
          to="/contact"
          >Contact Us</router-link
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
          to="/listProperty"
          >Property Listing</router-link
        >
      </li>
      <li class="flex">
        <mdicon
          name="LogoutVariant"
          :width="30"
          :height="30"
          class="hover:text-white"
        />
        <router-link
          class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
          to="/properties/1"
          >Logout</router-link
        >
      </li>
    </ul>
    <div class="mt-[15%] font-poppins font-bold text-xl text-">
      Search Filter
    </div>
    <div class="border-b my-5 border-orange-500 w-[100%]"></div>
    <div
      class="lg:h-[700px] lg:w-[16%] flex-col overflow-auto font-poppins font-bold"
    >
      <Accordion
        title="Property Type"
        :content="[
          { type: 'radio', data: 'BUY' },
          { type: 'radio', data: 'RENT' },
        ]"
      />

      <Accordion
        title="Property Category"
        :content="[
          { type: 'checkbox', data: 'Commercial' },
          { type: 'checkbox', data: 'Condo' },
          { type: 'checkbox', data: 'House' },
          { type: 'checkbox', data: 'Land' },
          { type: 'checkbox', data: 'Townhouse' },
        ]"
      />
      <Accordion
        title="Location"
        :content="[
          { type: 'text', data: 'City' },
          { type: 'text', data: 'Address' },
          { type: 'dialog', data: 'Philippines' },
          { type: 'dialog', data: 'Cebu' },
        ]"
      />
      <Accordion
        title="Price"
        :content="[
          { type: 'text', data: '₱ _ _ _ _ _ _ _ _ _ _ _ _ ' },
          { type: 'range', data: 'Cebu' },
        ]"
      />
      <Accordion
        title="Area"
        :content="[
          { type: 'text', data: 'Square Meter ' },
          { type: 'range', data: 'Cebu' },
        ]"
      />
      <Accordion
        title="Rooms"
        :content="[
          { type: 'spinner', data: 'Bedroom' },
          { type: 'spinner', data: 'Bathroom' },
        ]"
      />
      <button
        class="my-5 ml-2 rounded-lg"
        @click="filter"
        style="
          background-color: orange;
          color: white;
          padding: 10px 15px;
          border: none;
          cursor: pointer;
        "
      >
        Filter
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted, Ref } from "vue";
import { register } from "swiper/element/bundle";
import Accordion from "../components/Accordion.vue";
defineProps(["isVisible", "toggleSidebar"]);
import router from "../router/router.js";
import { useRoute } from "vue-router";
register();









</script>
