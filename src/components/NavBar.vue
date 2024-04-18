<template>
  <!-- Navigation Bar E67E23 -->
  <div
    class="bg-[#E67E23] custom-sm:sticky custom-sm:top-0 sticky top-0 h-14 text-[#fefefe] text-[18px] font-semibold p-2 pt-3 z-10 pr-10"
  >
    <ul
      class="flex justify-end gap-6 hover:cursor-pointer custom-sm:hidden font-poppins font-bold"
    >
      <li class="">
        <router-link
          class="hover-underline custom-sm:hidden sm:hidden md:hidden lg:block sm:text-base md:text-md lg:text-lg"
          to="/"
          >Home</router-link
        >
      </li>
      <li class="">
        <router-link
          class="hover-underline custom-sm:hidden sm:hidden md:hidden lg:block sm:text-base md:text-md lg:text-lg"
          to="/properties"
          >Properties</router-link
        >
      </li>
      <li class="">
        <router-link
          class="hover-underline custom-sm:hidden sm:hidden md:hidden lg:block sm:text-base md:text-md lg:text-lg"
          to="/PropertyNews"
          >Property News</router-link
        >
      </li>
      <li class="">
        <router-link
          class="hover-underline custom-sm:hidden sm:hidden md:hidden lg:block sm:text-base md:text-md lg:text-lg"
          to="/about"
          >About Us</router-link
        >
      </li>
      <li class="">
        <router-link
          class="hover-underline custom-sm:hidden sm:hidden md:hidden lg:block sm:text-base md:text-md lg:text-lg"
          to="/contact"
          >Contact Us</router-link
        >
      </li>
    </ul>
    <button
      @click="toggleSidebar"
      class="hover-underline custom-sm:md sm:text-md lg:hidden ml-2"
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
          @input="updateTextInputValue"
          @blur="typedValue"
        />

        <MagnifyingGlassIcon
          class="h-11 w-11 text-[#E67E23] cursor-pointer hover:scale-[1.02]"
          @click="search"
        />
      </div>
      <div class="flex w-[10%] justify-end items-center pr-3">
        <UserIcon
          @click="toggleModal"
          class="w-10 h-10 cursor-pointer text-[#E67E23] hover:scale-[1.02]"
        />
      </div>
    </div>
  </div>
  <LoginModal :modalActive="modalActive" @close-modal="toggleModal"/>
</template>

<script setup>
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/vue/24/outline";
import SideBar from "./SideBar.vue";
const isSidebarVisible = ref(false);
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
import { ref } from "vue";
import router from "../router/router.js";
import { useRoute } from "vue-router";
import LoginModal from "./LoginModal.vue";

const route = useRoute();

const modalActive = ref(false);
const toggleModal = () => {
  checker();
  modalActive.value = !modalActive.value;
};
//checks if already logged in
const checker = () =>{
  if(localStorage.getItem('currentUser')=='admin'){
    router.push('/adminNew')
    }
    else if(localStorage.getItem('currentUser')=='agent'){
      router.push('/agentNew')
  }
}

const data = ref({
  textInputValue: "",
});
const updateTextInputValue = (event) => {
  const inputElement = event.target;
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
