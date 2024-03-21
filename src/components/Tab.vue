<template>
  <div
    class="tabs__content max-w-screen-lg min-h-[400px] p-[30px] rounded-md shadow-md bg-white z-[2] mb-[50px] relative"
    v-show="isActive"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { ref, inject, computed } from "vue";

export default {
  props: {
    title: String,
  },
  setup(props) {
    const selectedTitle = inject("selectedTitle", ref(null));

    const isActive = computed(() => props.title === selectedTitle.value);

    return {
      isActive,
    };
  },
};
</script>

<style scoped>
.tabs__content.active {
  display: block;
  color: #000;
}
</style>

<!-- <div
      class="custom-sm:w-[90%] md:w-[80%] mt-[10%] border-2 rounded-lg px-5 py-5 bg-white mx-auto"
    >
      <div class="flex justify-start items-center">
        <mdicon
          name="ReorderHorizontal"
          :width="35"
          :height="35"
          class="hover:text-white text-[#111929]"
        />
        <span class="font-semibold text-md"> Agent List</span>
      </div>
      <div class="md:flex md:flex-row md:row-span-3 md:gap-6">
        <div class="flex justify-start items-start flex-col mt-5 md:w-[30%]">
          <label class="block mb-2 text-sm font-medium" for="agentname"
            >Agent Name:</label
          >
          <input
            id="agentname"
            type="text"
            class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
          />
        </div>
        <div class="flex justify-start items-start flex-col mt-5 md:w-[30%]">
          <label class="block mb-2 text-sm font-medium" for="agentemail"
            >Email</label
          >
          <input
            id="agentemail"
            type="email"
            class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
          />
        </div>

        <div class="flex justify-start items-start flex-col mt-5 md:w-[30%]">
          <label class="block mb-2 text-sm font-medium" for="propertystatus"
            >Status</label
          >
          <select
            v-model="property_enable"
            id="propertystatus"
            class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 custom-sm:text-sm custom-sm:leading-6 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
          >
            <option class="block mb-2 text-sm font-medium" value="Enable">
              Enable
            </option>
            <option class="block mb-2 text-sm font-medium" value="D">
              Disable
            </option>
          </select>
        </div>
      </div>
      <div class="flex justify-start items-start flex-col mt-6">
        <button
          @click="submitAgent"
          class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#7F1D1D] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-[#7F1D1D] mr-4"
          id="saveAgent"
        >
          Filter
        </button>
      </div>
    </div>
    <div class="w-[90%] mx-auto">
      <div class="relative">
        <div class="font-semibold text-lg md:ml-8 custom-sm:ml-0 mt-[15%]">
          Agent's Table
        </div>
        <div
          class="relative mx-auto overflow-x-auto my-[5%] lg:w-[90%] lg:mx-auto lg:my-[8%] md:w-[90%] md:my-[5%] rounded-lg"
        >
          <table class="text-left rtl:text-right">
            <thead class="text-[8.5px] uppercase bg-gray-200">
              <tr class="text-xs">
                <th scope="col" class="py-3"></th>
                <th scope="col" class="px-6 py-3">Images</th>
                <th scope="col" class="px-12 py-3">Name</th>
                <th scope="col" class="px-6 py-3">Email</th>
                <th scope="col" class="px-6 py-3">Status</th>

                <th scope="col" class="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody class="font-semibold">
              <tr class="bg-white border-b">
                <th
                  scope="row"
                  class="px-2 py-6 font-medium text-gray-900 whitespace-nowrap flex justify-center items-center"
                >
                  <div class="flex items-center justify-center">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                    />
                  </div>
                </th>
                <td class="custom-sm:w-[20%] custom-sm:h-[20%] md:w-[10%]">
                  <img
                    class="md:w-[80%] lg:w-[80%] custom-sm:w-[80%] mx-auto my-2"
                    src="src/assets/marivil.png"
                  />
                </td>
                <td class="px-6">Marivil Du</td>

                <td class="px-6 py-4">sample@gmail.com</td>
                <td class="px-6 py-4">Enable</td>
                <td class="px-6 py-4 text-blue-600 font bold cursor-pointer">
                  Edit
                </td>
              </tr>

              <tr class="bg-white border">
                <th
                  scope="row"
                  class="px-2 py-6 font-medium text-gray-900 whitespace-nowrap flex justify-center items-center"
                >
                  <div class="flex items-center justify-center">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                    />
                  </div>
                </th>
                <td class="custom-sm:w-[20%] custom-sm:h-[20%] md:w-[10%]">
                  <img
                    class="md:w-[80%] lg:w-[80%] custom-sm:w-[80%] mx-auto my-2"
                    src="src/assets/marivil.png"
                  />
                </td>
                <td class="px-6">Marivil Du</td>

                <td class="px-6 py-4">sample@gmail.com</td>
                <td class="px-6 py-4">Enable</td>
                <td class="px-6 py-4 text-blue-600 font bold">Edit</td>
              </tr>
              <tr class="bg-white border-b">
                <th
                  scope="row"
                  class="px-2 py-6 font-medium text-gray-900 whitespace-nowrap flex justify-center items-center"
                >
                  <div class="flex items-center justify-center">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                    />
                  </div>
                </th>
                <td class="custom-sm:w-[20%] custom-sm:h-[20%] md:w-[10%]">
                  <img
                    class="md:w-[80%] lg:w-[80%] custom-sm:w-[80%] mx-auto my-2"
                    src="src/assets/marivil.png"
                  />
                </td>
                <td class="px-6">Marivil Du</td>

                <td class="px-6 py-4">sample@gmail.com</td>
                <td class="px-6 py-4">Enable</td>
                <td class="px-6 py-4 text-blue-600 font bold">Edit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div> -->
