<template>
  <!-- Navigation Bar E67E23 -->
  <div
    class="bg-[#E67E23] custom-sm:sticky custom-sm:top-0 sticky top-0 h-14 text-[#fefefe] text-[18px] font-semibold p-2 pt-3 z-10"
  >
    <ul
      class="flex justify-end gap-6 hover: cursor-pointer custom-sm:hidden font-poppins font-bold"
    >
      <li class="">
        <router-link
          class="hover-underline custom-sm:hidden sm:hidden md:hidden lg:block sm:text-base md:text-md lg:text-lg"
          to="/"
          >Home</router-link
        >
      </li>
    </ul>
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
  <!-- Sidebar component -->
  <SideBar :isVisible="isSidebarVisible" :toggleSidebar="toggleSidebar" />

  <!-- Search and Logo Bar -->
  <div class="custom-sm:hidden sm:hidden md:hidden lg:block sticky">
    <div class="flex lg:h-14 sticky top-11 bg-white">
      <div class="flex w-[10%] pl-3">
        <img src="../assets/mgLogo.jpg" alt="" />
      </div>
      <div class="flex w-[80%] justify-center items-center gap-1">
        <input
          class="border-2 border-[#E67E23] rounded-full w-[550px] h-11 focus:outline-none hover:shadow-2xl pl-3"
          type="text"
          name=""
          id="search_bar"
          placeholder="Search..."
          :value="data.textInputValue"
          @keyup.enter="search"
          @input="(e: Event) => updateTextInputValue(e as InputEvent)"
          @blur="typedValue()"
        />

        <MagnifyingGlassIcon
          class="h-11 w-11 text-[#E67E23] cursor-pointer hover:scale-[1.02]"
          @click="search"
        />
      </div>
      <div class="flex w-[10%] justify-end items-center pr-3">
        <UserIcon class="w-10 h-10 text-[#E67E23] hover:scale-[1.02]" />
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import AuthChecker from "../AuthChecker.vue";

import { MagnifyingGlassIcon, UserIcon } from "@heroicons/vue/24/outline";
import SideBar from "./SideBar.vue";
const isSidebarVisible = ref(false);
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
import { ref } from "vue";
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
