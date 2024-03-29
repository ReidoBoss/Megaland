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
            src="src/assets/mgLogo.png"
            class="lg:h-30 lg:w-50 md:h-20 md:w-35 custom-sm:w-[30%] custom-sm:h-[20%]"
            alt="megaland"
          />
          <span
            class="text-xl font-bold dark:text-white flex custom-sm:text-sm"
          ></span>
        </div>
      </div>
    </nav>
  </div>

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
</template>
<script lang="ts" setup>
import { onMounted } from "vue";

import { initFlowbite } from "flowbite";
onMounted(() => {
  initFlowbite();
});
import { ref } from "vue";

import EditAgent from "../components/AgentSidePages/EditAgent.vue";
import ViewAgent from "../components/AgentSidePages/ViewAgent.vue";
import AgentNewAddProperty from "../components/AgentSidePages/AgentNewAddProperty.vue";
import AgentNewChangePassword from "../components/AgentSidePages/AgentNewChangePassword.vue";
import AgentNewSignOut from "../components/AgentSidePages/AgentNewSignOut.vue";
import AgentNewManageProperty from "../components/AgentSidePages/AgentNewManageProperty.vue";
const currentTab = ref(0);
</script>
