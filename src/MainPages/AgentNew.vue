<template>
  <div class="bg-[#e9d8c5] h-full">
    <nav
      class="border-gray-200 bg-primary py-5 items-center justify-center flex mx-auto"
    >
      <div
        class="flex custom-sm:justify-center custom-sm:items-center p-4 md:mx-auto"
      >
        <div
          class="flex mx-auto items-center justify-center custom-sm:items-center custom-sm:justify-center custom-sm:flex"
        >
          <img
            src="https://megalandrealty.com/image/catalog/272111904_3101243066800988_6003452442657631422_n.jpg"
            class="lg:h-30 lg:w-50 md:h-20 md:w-35 custom-sm:w-[30%] custom-sm:h-[20%]"
            alt="megaland"
          />
          <span
            class="text-xl font-bold dark:text-white flex custom-sm:text-sm"
          ></span>
        </div>
      </div>
    </nav>
    <button
      class="custom-sm:block sm:block md:block lg:hidden text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
      type="button"
      data-drawer-target="drawer-navigation"
      data-drawer-show="drawer-navigation"
      aria-controls="drawer-navigation"
    >
      <mdicon
        name="ReorderHorizontal"
        :width="35"
        :height="35"
        class="hover:text-white text-[#111929]"
      />
    </button>
  </div>

  <!-- drawer component -->
  <!-- SMALL SCREEN TABBING -->
  <div
    id="drawer-navigation"
    class="self-start text-orange-500 font-bold font-poppins custom-sm:block sm:block md:block lg:hidden fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-primary"
    tabindex="-1"
    aria-labelledby="drawer-navigation-label"
  >
    <h5
      id="drawer-navigation-label"
      class="text-xl mt-1 font-semibold text-gray-500 uppercase dark:text-gray-400"
    >
      Menu
    </h5>
    <button
      type="button"
      data-drawer-hide="drawer-navigation"
      aria-controls="drawer-navigation"
      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <svg
        aria-hidden="true"
        class="w-8 h-8 text-orange-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sr-only">Close menu</span>
    </button>
    <div class="py-4 overflow-y-auto mt-[25%]">
      <div
        :class="currentTab === 0 ? 'hover-underlines' : 'hover-underlines'"
        @click="currentTab = 0"
      >
        <div class="flex gap-5 mt-8 w-[100%] cursor-pointer ml-[2%]">
          <div>
            <mdicon
              class=""
              name="AccountBoxMultipleOutline"
              :width="30"
              :height="30"
            />
          </div>
          <div class="flex items-center text-white">View Profile</div>
        </div>
      </div>

      <div
        :class="currentTab === 1 ? 'hover-underlines' : 'hover-underlines'"
        @click="currentTab = 1"
      >
        <div class="flex gap-5 mt-8 w-[100%] cursor-pointer ml-[2%]">
          <div>
            <mdicon
              class=""
              name="AccountEditOutline"
              :width="30"
              :height="30"
            />
          </div>
          <div class="flex items-center text-white">Edit Profile</div>
        </div>
      </div>
      <div
        :class="currentTab === 2 ? 'hover-underlines' : 'hover-underlines'"
        @click="currentTab = 2"
      >
        <div class="flex gap-5 mt-8 w-[100%] cursor-pointer ml-[2%]">
          <div>
            <mdicon
              class=""
              name="OfficeBuildingMarkerOutline"
              :width="30"
              :height="30"
            />
          </div>
          <div class="flex items-center text-white">Add Property</div>
        </div>
      </div>
      <div
        :class="currentTab === 3 ? 'hover-underlines' : 'hover-underlines'"
        @click="currentTab = 3"
      >
        <div class="flex gap-5 mt-8 w-[100%] cursor-pointer ml-[2%]">
          <div>
            <mdicon
              class=""
              name="NewspaperVariantMultipleOutline"
              :width="30"
              :height="30"
            />
          </div>
          <div class="flex items-center text-white">Manage Property</div>
        </div>
      </div>
      <div
        :class="currentTab === 4 ? 'hover-underlines' : 'hover-underlines'"
        @click="currentTab = 4"
      >
        <div class="flex gap-5 mt-8 w-[100%] cursor-pointer ml-[2%]">
          <div>
            <mdicon
              class=""
              name="ShieldLockOutline"
              :width="30"
              :height="30"
            />
          </div>
          <div class="flex items-center text-white">Change Password</div>
        </div>
      </div>
      <div
        :class="currentTab === 5 ? 'hover-underlines' : 'hover-underlines'"
        @click="currentTab = 5"
      >
        <div class="flex gap-5 mt-8 w-[100%] cursor-pointer ml-[2%]">
          <div>
            <mdicon class="" name="Logout" :width="30" :height="30" />
          </div>
          <div class="flex items-center text-white">Logout Account</div>
        </div>
      </div>
    </div>
  </div>
  <!-- LARGE SCREEN TABBING -->
  <div class="bg-gray-900 lg:block w-[100%] h-[100%] sticky top-0">
    <div class="flex flex-row row-span-2 bg-[#e9d8c5]">
      <aside
        class="bg-gray-900 w-[20%] border-dashed border-orange-500 border-2 h-screen self-start sticky top-0 z-10 custom-sm:hidden sm:hidden md:hidden lg:block text-orange-500 font-bold font-poppins"
      >
        <div
          class="flex flex-col gap-10 justify-end hover: cursor-pointer mt-[25%] ml-4"
        >
          <div
            :class="currentTab === 0 ? 'hover-underlines' : 'hover-underlines'"
            @click="currentTab = 0"
          >
            <div
              class="flex gap-2 cursor-pointer mx-auto ml-[10%] mt-10 flex-row"
            >
              <div>
                <mdicon
                  class=""
                  name="AccountBoxMultipleOutline"
                  :width="30"
                  :height="30"
                />
              </div>
              <div class="flex items-center text-white">View Profile</div>
            </div>
          </div>

          <div
            :class="currentTab === 1 ? 'hover-underlines' : 'hover-underlines'"
            @click="currentTab = 1"
          >
            <div class="flex gap-2 cursor-pointer ml-[10%]">
              <div>
                <mdicon
                  class=""
                  name="AccountEditOutline"
                  :width="30"
                  :height="30"
                />
              </div>
              <div class="flex items-center text-white">Edit Profile</div>
            </div>
          </div>
          <div
            :class="currentTab === 2 ? 'hover-underlines' : 'hover-underlines'"
            @click="currentTab = 2"
          >
            <div class="flex gap-2 cursor-pointer ml-[10%]">
              <div>
                <mdicon
                  class=""
                  name="OfficeBuildingMarkerOutline"
                  :width="30"
                  :height="30"
                />
              </div>
              <div class="flex items-center text-white">Add Property</div>
            </div>
          </div>
          <div
            :class="currentTab === 3 ? 'hover-underlines' : 'hover-underlines'"
            @click="currentTab = 3"
          >
            <div class="flex gap-2 cursor-pointer ml-[10%]">
              <div>
                <mdicon
                  class=""
                  name="NewspaperVariantMultipleOutline"
                  :width="30"
                  :height="30"
                />
              </div>
              <div class="flex items-center text-white">Manage Property</div>
            </div>
          </div>
          <div
            :class="currentTab === 4 ? 'hover-underlines' : 'hover-underlines'"
            @click="currentTab = 4"
          >
            <div class="flex gap-2 cursor-pointer ml-[10%]">
              <div>
                <mdicon
                  class=""
                  name="ShieldLockOutline"
                  :width="30"
                  :height="30"
                />
              </div>
              <div class="flex items-center text-white">Change Password</div>
            </div>
          </div>
          <div
            :class="currentTab === 5 ? 'hover-underlines' : 'hover-underlines'"
            @click="currentTab = 5"
          >
            <div class="flex gap-2 cursor-pointer ml-[10%]">
              <div>
                <mdicon class="" name="Logout" :width="30" :height="30" />
              </div>
              <div class="flex items-center text-white">Logout Account</div>
            </div>
          </div>
        </div>
      </aside>
      <Transition name="fade" mode="out-in">
        <ViewAgent v-if="currentTab === 0" />
        <EditAgent v-else-if="currentTab === 1" />

        <AgentNewAddProperty v-else-if="currentTab === 2" />
        <AgentNewManageProperty v-else-if="currentTab === 3" />
        <AgentNewChangePassword v-else-if="currentTab === 4" />
        <AgentNewSignOut v-else-if="currentTab === 5" />
      </Transition>
    </div>
  </div>
  <AuthChecker
  currentUser="agent"
  />
</template>
<script setup>
import AuthChecker from "../components/AuthChecker.vue";
import EditAgent from "../components/AgentSidePages/EditAgent.vue";
import ViewAgent from "../components/AgentSidePages/ViewAgent.vue";
import AgentNewAddProperty from "../components/AgentSidePages/AgentNewAddProperty.vue";
import AgentNewChangePassword from "../components/AgentSidePages/AgentNewChangePassword.vue";
import AgentNewSignOut from "../components/AgentSidePages/AgentNewSignOut.vue";
import AgentNewManageProperty from "../components/AgentSidePages/AgentNewManageProperty.vue";
import { onMounted,ref } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
const currentTab = ref(0);


</script>
