<!-- Sidebar.vue -->
<template>
  <div
    v-if="isVisible"
    class="fixed top-0 left-0 w-64 h-[100%] bg-[#111929] text-orange-500 p-2 z-10 md:hidden lg:hidden"
  >
    <div class="flex my-2">
      <mdicon
        name="AccountCircle"
        :width="35"
        :height="35"
        class="hover:text-white"
      />
      <button @click="toggleSidebar" class="text-orange-500 custom-sm:ml-[70%]">
        <mdicon
          name="CloseCircle"
          :width="35"
          :height="35"
          class="hover:text-white"
        />
      </button>
    </div>

    <div>
      <div
        class="flex h-10 sticky top-11 my-5 justify-center bg-[#111929] z-10"
      >
        <div class="flex w-[80%] justify-center items-center gap-1">
          <input
            class="border-[#E67E23] text-black font-poppins font-bold rounded w-[700px] h-11 focus:outline-none hover:shadow-2xl pl-3"
            type="text"
            name=""
            id="search_bar"
            placeholder="Search..."
            :value="textInputValue"
            @keyup.enter="search"
            @input="updateTextInputValue"
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
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps(["isVisible", "toggleSidebar"]);

import router from "../router";
import { useRoute } from "vue-router";

const route = useRoute();

const data = ref({
  textInputValue: "",
});
const updateTextInputValue = (event: InputEvent) => {
  const inputElement = event.target as HTMLInputElement;
  data.value.textInputValue = inputElement.value;
};

const typedValue = () => {
  var textValue = data.value.textInputValue;
  localStorage.setItem("search", `${textValue}`);
};

const search = () => {
  var textValue = data.value.textInputValue;
  var currentPath = route.fullPath;

  if (currentPath == "/search") {
    localStorage.setItem("search", `${textValue}`);
    location.reload();
  } else {
    router.push("/search");
  }
};
</script>
