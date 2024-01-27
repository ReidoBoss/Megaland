<!-- Sidebar.vue -->
<template>
  <div
    v-if="isVisible"
    class="fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white p-2 z-10 md:hidden lg:hidden"
  >
    <div class="">
      <button
        @click="toggleSidebar"
        class="text-orange-500 custom-sm:ml-[70%] custom-sm:m"
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

    <ul class="flex flex-col gap-5 justify-end hover: cursor-pointer">
      <li class="">
        <router-link class="hover-underline text-orange-500 font-black" to="/"
          >Home</router-link
        >
      </li>
      <li class="">
        <router-link
          class="hover-underline text-orange-500 font-black"
          to="/properties/1"
          >Properties</router-link
        >
      </li>
      <li class="">
        <router-link
          class="hover-underline text-orange-500 font-black"
          to="/PropertyNews"
          >Property News</router-link
        >
      </li>
      <li class="">
        <router-link
          class="hover-underline text-orange-500 font-black"
          to="/about"
          >About Us</router-link
        >
      </li>
      <li class="">
        <router-link
          class="hover-underline text-orange-500 font-black"
          to="/contact"
          >Contact Us</router-link
        >
      </li>
      <li class="">
        <router-link
          class="hover-underline text-orange-500 font-black"
          to="/listProperty"
          >Property Listing</router-link
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
