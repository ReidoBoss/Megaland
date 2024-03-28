<template>
  <div class="px-5">
    <div class="flex pt-5">
      <div>
        <router-link to="/about" class="text-orange-500">
          <mdicon name="arrow-left" :width="35" :height="35" />
        </router-link>
      </div>
    </div>
    <div class="container mx-auto pb-8 pt-5">
      <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
        <div class="col-span-4 sm:col-span-3">
          <div
            class="bg-white p-6 border-2 rounded-md shadow-xl lg:p-5 md:p-2 md:ml-2 lg:ml-5 mb-5"
          >
            <div class="flex flex-col items-center">
              <img
                src="https://randomuser.me/api/portraits/men/94.jpg"
                class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
              />

              <h1 class="text-xl font-bold">John Doe</h1>
              <p class="text-gray-700">Software Developer</p>
            </div>
            <hr class="my-6 border-t border-gray-300" />
            <div class="flex flex-col">
              <span
                class="text-gray-700 uppercase font-bold tracking-wider mb-2"
                >Contact me</span
              >
              <ul>
                <li class="mb-1 flex">
                  <span class="mr-3">
                    <mdicon
                      name="facebook"
                      :width="30"
                      :height="30"
                      class="hover:text-orange-500"
                    /> </span
                  >Facebook
                </li>
                <li class="mb-1 flex">
                  <span class="mr-3">
                    <mdicon
                      name="instagram"
                      :width="30"
                      :height="30"
                      class="hover:text-orange-500"
                    /> </span
                  >Instagram
                </li>
                <li class="mb-1 flex">
                  <span class="mr-3">
                    <mdicon
                      name="twitter"
                      :width="30"
                      :height="30"
                      class="hover:text-orange-500"
                    /> </span
                  >Twitter
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-span-4 sm:col-span-9">
          <div
            class="bg-white p-6 border-2 rounded-md shadow-xl lg:p-5 md:p-2 md:ml-2 lg:ml-5 mb-5"
          >
            <h2 class="text-xl font-bold mb-4">Agent Profile:</h2>
            <p class="text-gray-700 px-12 py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              finibus est vitae tortor ullamcorper, ut vestibulum velit
              convallis. Aenean posuere risus non velit egestas suscipit. Nunc
              finibus vel ante id euismod. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam
              erat volutpat. Nulla vulputate pharetra tellus, in luctus risus
              rhoncus id.
            </p>

            <h2 class="text-xl font-bold mt-6 mb-4">Address:</h2>
            <div
              class="p-2 rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) mb-5"
            >
              <div class="lg:p-5 md:p-2">
                <div class="flex">
                  <div class="w-[50%]">
                    <div
                      class="border-2 rounded-md md:m-1 md:p-2 lg:m-2 lg:p-1 font-normal lg:text-lg custom-sm:text-sm sm:text-sm md:text-md"
                    >
                      Address:
                      <span
                        class="lg:text-lg md:text-md font-300 custom-sm:text-sm sm:text-sm"
                      >
                        Tabada,Mambaling</span
                      >
                    </div>
                    <div class="border-2 m-2 p-1 font-medium">
                      City:
                      <span
                        class="text-base font-normal lg:text-lg md:text-md custom-sm:text-xs sm:text-xs"
                      >
                        Cebu City</span
                      >
                    </div>
                  </div>
                  <div class="lg:w-[50%] md:w-[50%]">
                    <div class="border-2 m-2 p-1 font-medium">
                      Zip:
                      <span
                        class="text-base font-normal lg:text-lg md:text-md custom-sm:text-xs sm:text-xs"
                      >
                        6000</span
                      >
                    </div>
                    <div class="border-2 m-2 p-1 font-medium">
                      State/Country:
                      <span
                        class="text-base font-normal lg:text-lg md:text-md custom-sm:text-xs sm:text-xs"
                      >
                        Phillippines
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
