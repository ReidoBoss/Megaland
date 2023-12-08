<template>
  <section
    class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-xl shadow-md dark:bg-gray-800 mt-20 mb-20"
  >
    <h1 class="text-xl font-bold text-white capitalize dark:text-white">
      Agent Form
    </h1>
    <form @submit.prevent>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label class="text-white dark:text-gray-200" for="agentname"
            >Agent Name:</label
          >
          <input
            v-model="agentData.agent_name"
            id="agentname"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label class="text-white dark:text-gray-200" for="agentdesc"
            >Description:</label
          >
          <textarea
            v-model="agentData.agent_description"
            id="agentdesc"
            type="textarea"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          ></textarea>
        </div>

        <div>
          <label class="text-white dark:text-gray-200" for="agentpos"
            >Position</label
          >
          <input
            v-model="agentData.agent_position"
            id="agentpos"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label class="text-white dark:text-gray-200" for="agentemail"
            >Email</label
          >
          <input
            v-model="agentData.agent_email"
            id="agentemail"
            type="email"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label class="text-white dark:text-gray-200" for="agentaddress"
            >Address</label
          >
          <input
            v-model="agentData.agent_address"
            id="agentaddress"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label class="text-white dark:text-gray-200" for="agentcontact"
            >Contact</label
          >
          <input
            v-model="agentData.agent_contact_no"
            id="agentcontact"
            type="number"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label class="text-white dark:text-gray-200" for="agentcity"
            >City</label
          >
          <input
            v-model="agentData.agent_city"
            id="agentcity"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label class="text-white dark:text-gray-200" for="agentcountry"
            >Country</label
          >
          <input
            v-model="agentData.agent_country"
            id="agentcountry"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label class="text-white dark:text-gray-200" for="agentregion"
            >Region</label
          >
          <input
            v-model="agentData.agent_region"
            id="agentregion"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label class="text-white dark:text-gray-200" for="agentusername"
            >Username</label
          >
          <input
            v-model="agentData.agent_username"
            id="agentusername"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label class="text-white dark:text-gray-200" for="agentpassword"
            >Password</label
          >
          <input
            v-model="agentData.agent_password"
            id="agentpassword"
            type="password"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label class="text-white dark:text-gray-200" for="agentfb"
            >Facebook</label
          >
          <input
            v-model="agentData.agent_fb"
            id="agentfb"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label class="text-white dark:text-gray-200" for="agentx"
            >X(Twitter)</label
          >
          <input
            v-model="agentData.agent_x"
            id="agentx"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label class="text-white dark:text-gray-200" for="agentinsta"
            >Instagram</label
          >
          <input
            v-model="agentData.agent_insta"
            id="agentinsta"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <!-- <div>
          <label class="block text-sm font-medium text-white">
            Upload an Image
          </label>
          <div
            class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
          >
            <div class="space-y-1 text-center">
              <svg
                class="mx-auto h-12 w-12 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label
                  for="agentimage"
                  class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span class="">Upload a file</span>
                  <input
                    id="agentimage"
                    name="agentimage"
                    type="file"
                    class="sr-only"
                  />
                </label>
                <p class="pl-1 text-white">or drag and drop</p>
              </div>
              <p class="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div> -->
      </div>
      
      <div class="flex justify-end mt-6">
        <button
          @click="submitAgent"
          class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 mr-4"
          id="saveAgent"
        >
          Save
        </button>
        <button
          class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 mr-4"
          id="editAgent"
        >
          Edit
        </button>
        <button
          class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
          id="deleteAgent"
        >
          Delete
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";

const agentData = ref({
  agent_name: "",
  agent_image: "",
  agent_description: "",
  agent_position: "",
  agent_email: "",
  agent_address: "",
  agent_contact_no: "",
  agent_city: "",
  agent_country: "",
  agent_region: "",
  agent_username: "",
  agent_password: "",
  agent_fb: "",
  agent_x: "",
  agent_insta: "",
  agent_number_of_property: 0,
});

const submitAgent = async () => {
  try {
    console.log("Submit button clicked");
    console.log(agentData.value);
    const response = await axios.post(
      "http://localhost:8080/api/agents/",
      agentData.value
    );
    console.log("Property data sent successfully", response.data);
    window.location.reload();
  } catch (error) {
    console.log("Error sending property data: ", error);
  }
};
</script>