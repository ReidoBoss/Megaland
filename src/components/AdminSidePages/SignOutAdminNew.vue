<template>
  <div class="h-screen bg-[#e9d8c5]">
    <nav
      class="border-gray-200 bg-gray-900 py-5 items-center justify-center flex mx-auto"
    >
      <div
        class="flex custom-sm:justify-center custom-sm:items-center p-4 md:mx-auto"
      >
        <div
          class="flex mx-auto items-center justify-center custom-sm:items-center custom-sm:justify-center custom-sm:flex"
        >
          <img
            src="src/assets/mgLogo.png"
            class="lg:h-40 lg:w-50 md:h-20 md:w-35 custom-sm:w-[30%] custom-sm:h-[20%]"
            alt="megaland"
          />
          <span class="text-xl font-semibold flex custom-sm:text-sm"></span>
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
    <SideBarAdminNew
      :isVisible="isSidebarVisible"
      :toggleSidebar="toggleSidebar"
    />
    <div class="lg:block w-[100%] h-[100%] sticky top-0 bg-[#e9d8c5]">
      <div class="flex flex-row row-span-2">
        <aside
          class="bg-gray-900 w-[20%] border-dashed border-[#e9d8c5] border-2 h-screen self-start sticky top-0 z-10 custom-sm:hidden sm:hidden md:hidden lg:block text-[#e9d8c5]"
        >
          <ul
            class="flex flex-col gap-10 justify-end hover: cursor-pointer mt-[25%] ml-10"
          >
            <li class="flex">
              <mdicon
                name="Home"
                :width="30"
                :height="30"
                class="hover:text-white"
              />
              <button
              class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
              @click="propertyListing"
              >Property Listing</button
            >
          </li>
          <li class="flex">
            <mdicon
              name="TableLargePlus"
              :width="30"
              :height="30"
              class="hover:text-white"
            />
            <button
            @click="propertyTable"
              class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
              >Property Table</button
            >
          </li>
          <li class="flex">
            <mdicon
              name="AccountMultiplePlusOutline"
              :width="30"
              :height="30"
              class="hover:text-white"
            />
            <button
            @click="addAgent"
              class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
              >Add Agent</button
            >
          </li>
          <li class="flex">
            <mdicon
              name="TableEdit"
              :width="30"
              :height="30"
              class="hover:text-white"
            />
            <button
            @click="agentTable"
              class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
              >Agent Table</button
            >
          </li>
          <li class="flex">
            <mdicon
              name="ClipboardListOutline"
              :width="30"
              :height="30"
              class="hover:text-white"
            />
            <button
            @click="blogListing"
              class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
              >Blog Listing</button
            >
          </li>
          <li class="flex">
            <mdicon
              name="TableAccount"
              :width="30"
              :height="30"
              class="hover:text-white"
            />
            <button
            @click="blogTable"
              class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
              >Blog Table</button
            >
          </li>
          <li class="flex">
            <mdicon
              name="LoginVariant"
              :width="30"
              :height="30"
              class="hover:text-white"
            />
            <button
            @click="logout"
              class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
              >Logout Account</button
            >
            </li>
          </ul>
        </aside>

        <div
          class="flex flex-col items-center justify-center custom-sm:w-[90%] mx-auto custom-sm:mt-[15%] lg:mt-[-10%] md:w-[80%] lg:w-[80%] md:py-[8%]"
        >
          <div
            class="md:mt-[10%] lg:mt-[1%] md:w-[100%] lg:w-[50%] p-6 bg-white rounded-lg shadow md:py-[5%]"
          >
            <h2
              class="mb-1 text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl md:pb-[5%]"
            >
              <img
                src="src/assets/mgLogo.png"
                class="lg:h-40 lg:w-50 md:h-20 md:w-35 custom-sm:w-[30%] custom-sm:h-[20%] mx-auto"
                alt="megaland"
              />
            </h2>
            <h2
              class="font-poppins text-xl text-center text-orange-500 font-black mt-5"
            >
              Logout Account?
            </h2>
            <div
              class="flex items-center justify-center pt-8 gap-5 pr-10 pl-10"
            >
              <button
                class="w-full h-12 bg-primary text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
                type="submit"
              >
                Cancel
              </button>
              <button
                class="w-full h-12 bg-primary text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
                type="submit"
                @click="logout()"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AuthChecker/>

</template>

<script setup>
import SideBarAdminNew from "../AdminSidePages/SideBarAdminNew.vue";

import { ref } from "vue";
import { useRouter} from "vue-router";




const active = ref(0);
const isSidebarVisible = ref(false);

const router = useRouter();

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};

defineProps({
  propertyListing:Function,
  propertyTable:Function,
  addAgent:Function,
  agentTable:Function,
  blogListing:Function,
  blogTable:Function,
  logout:Function,
});


const logout = () => {
  localStorage.clear();
  router.push("/");
}

</script>
