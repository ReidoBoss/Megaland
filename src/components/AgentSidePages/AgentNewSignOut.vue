<template>
  <div
    class="h-screen custom-sm:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[80%] bg-[#e9d8c5]"
  >
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
    <SideBarAgentNew
      :isVisible="isSidebarVisible"
      :toggleSidebar="toggleSidebar"
    />
    <div class="lg:block w-[100%] h-[100%] sticky top-0 bg-[#e9d8c5]">
      <div class="flex flex-row row-span-2">
        <div
          class="flex flex-col items-center justify-center custom-sm:w-[90%] mx-auto custom-sm:mt-[15%] lg:mt-[-10%] md:w-[80%] lg:w-[80%] md:py-[8%]"
        >
          <div
            class="md:mt-[10%] lg:mt-[10%] md:w-[100%] lg:w-[50%] p-6 bg-white rounded-lg shadow md:py-[5%]"
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
</template>

<script lang="ts" setup>
import SideBarAgentNew from "../AgentSidePages/SideBarAgentNew.vue";
import { ref } from "vue";
const active = ref(0);
const isSidebarVisible = ref(false);
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
import { ref } from "vue";
import router from "../router";
import { useRoute } from "vue-router";
</script>
