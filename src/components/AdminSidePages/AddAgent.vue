<template>
  <div class="bg-[#e9d8c5] h-full">
    <nav
      class="border-gray-200 dark:bg-gray-900 py-5 items-center justify-center flex mx-auto"
    >
      <div
        class="flex custom-sm:justify-center custom-sm:items-center p-4 md:mx-auto"
      >
        <div
          class="flex mx-auto items-center justify-center custom-sm:items-center custom-sm:justify-center custom-sm:flex"
        >
          <img
            src="../../assets/mgLogo.png"
            class="lg:h-40 lg:w-50 md:h-20 md:w-35 custom-sm:w-[30%] custom-sm:h-[20%]"
            alt="megaland"
          />
          <span
            class="text-xl font-semibold dark:text-white flex custom-sm:text-sm"
            >ADMINISTRATOR</span
          >
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
  </div>
  <div class="lg:block w-[100%] h-[100%] sticky top-0 bg-[#e9d8c5]">
    <div class="flex flex-row row-span-2">
      <aside
        class="bg-primary w-[20%] border-dashed border-2 h-screen self-start sticky top-0 z-10 custom-sm:hidden sm:hidden md:hidden lg:block text-[#e9d8c5]"
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
            @click="propertyListing"
              class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
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
      <div class="bg-[#e9d8c5] custom-sm:mb-[10%] lg:w-[60%] mx-auto my-5">
        <div
          class="flex md:w-[100%] lg:w-[80%] mt-10 bg-gray-100 rounded-lg items-center justify-center mx-auto my-auto border-2 border-primary text-primary font-500 drop-shadow-lg"
        >
          <div class="text-center w-full my-auto lg:mx-auto mb-10">
            <div class="custom-sm:text-md my-5 mx-5 font-bold">
              Fill out the form below to
              <span class="text-orange-500"> Create Agent</span>
            </div>
            <div
              class="border-b-2 border-dashed border-orange-500 flex justify-start items-start w-[85%] mx-auto font-bold custom-sm:mt-[15%] custom-sm:text-sm"
            >
              Agent's Data
            </div>
            <div class="flex bg-secondary w-[90%] h-[] rounded-lg mb-8 mx-auto">
              <div class="w-[80%] h-[80%] my-[5%] mx-auto">
                <div @submit.prevent>
                  <div class="grid grid-cols-1 gap-5 mt-4 sm:grid-cols-2">
                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="agentname"
                        >Agent Name:</label
                      >
                      <input
                      v-model="agent_name"
                        id="agentname"
                        type="text"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="agentdesc"
                        >Description:</label
                      >
                      <textarea
                      v-model="description"
                        id="agentdesc"
                        type="textarea"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                      ></textarea>
                    </div>

                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="agentpos"
                        >Position</label
                      >
                      <input
                      v-model="position"
                        id="agentpos"
                        type="text"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="agentemail"
                        >Email</label
                      >
                      <input
                      v-model="email"
                        id="agentemail"
                        type="email"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="agentaddress"
                        >Address</label
                      >
                      <input
                      v-model="address"
                        id="agentaddress"
                        type="text"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="agentcontact"
                        >Contact</label
                      >
                      <input
                      v-model="contact_number"
                        id="agentcontact"
                        type="number"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="agentcity"
                        >City</label
                      >
                      <input
                      v-model="city"
                        id="agentcity"
                        type="text"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="agentcountry"
                        >Country</label
                      >
                      <input
                      v-model="country"
                        id="agentcountry"
                        type="text"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="agentregion"
                        >Region</label
                      >
                      <input
                      v-model="region"
                        id="agentregion"
                        type="text"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="agentusername"
                        >Username</label
                      >
                      <input
                      v-model="username"
                        id="agentusername"
                        type="text"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="agentpassword"
                        >Password</label
                      >
                      <input
                      v-model="password"
                        id="agentpassword"
                        type="password"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="agentfb"
                        >Facebook</label
                      >
                      <input
                      v-model="facebook"
                        id="agentfb"
                        type="text"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <div class="flex justify-start items-start flex-col mt-5">
                      <label class="block mb-2 text-sm font-medium" for="agentx"
                        >X(Twitter)</label
                      >
                      <input
                      v-model="x"
                        id="agentx"
                        type="text"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="agentinsta"
                        >Instagram</label
                      >
                      <input
                      v-model="instagram"
                        id="agentinsta"
                        type="text"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <div class="flex justify-start items-start flex-col mt-5">
                      <label class="block text-sm font-medium text-black">
                        Upload an Image
                      </label>
                      <div
                        class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                      >
                        <div class="space-y-1 text-center">
                          <svg
                            class="mx-auto h-12 w-12 text-black"
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
                          <div class="flex text-sm text-black">
                            <label
                              for="agentimage"
                              class="relative cursor-pointer rounded-md font-medium text-orange-500 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span class="">Upload a file</span>
                              <input
                                id="agentimage"
                                name="agentimage"
                                type="file"
                                class="sr-only"
                                @change="handleFileImage($event)"
                              />
                            </label>
                            <p class="pl-1 text-black">or drag and drop</p>
                          </div>
                          <p class="text-xs text-black">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-start items-start flex-col mt-6">
                    <button
                      @click="submitAgent"
                      class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 mr-4"
                      id="saveAgent"
                    >
                      Save
                    </button>
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

<script setup>
import SideBarAdminNew from "../AdminSidePages/SideBarAdminNew.vue";
import AuthChecker from "../AuthChecker.vue";
import { ref } from "vue";
import axios from "axios";
defineProps({
  propertyListing:Function,
  propertyTable:Function,
  addAgent:Function,
  agentTable:Function,
  blogListing:Function,
  blogTable:Function,
  logout:Function,
});


const username = ref();
const password = ref();
const image = ref();
const agent_name = ref();
const description = ref();
const position = ref();
const email = ref();
const address = ref();
const contact_number = ref();
const city = ref();
const country = ref();
const region = ref();
const facebook = ref();
const x = ref();
const instagram = ref();




const submitAgent = async() => {
  try{
    const formData = new FormData();

    formData.append("username",username.value);
    formData.append("password",password.value);
    formData.append("profile_picture",image.value);

    formData.append("agent_name",agent_name.value);
    formData.append("description",description.value);
    formData.append("position",position.value);
    formData.append("email",email.value);
    formData.append("address",address.value);
    formData.append("contact_number",contact_number.value);
    formData.append("city",city.value);
    formData.append("country",country.value);
    formData.append("region",region.value);
    formData.append("facebook",facebook.value);
    formData.append("x",x.value);
    formData.append("instagram",instagram.value);

    await axios.post("https://backend-n4gs.onrender.com/addAgent",formData,{
      headers: {
        "Content-Type" : "multipart/form-data",
        },
    });
    alert("added!");
    window.location.reload();
  }
  catch(error){
    if(!image.value){
      
    }
    console.log("Error:",error);
  }
}









const handleFileImage = (event) => {
  const file = (event.target.files || [])[0];

    image.value = file;
  
};



const active = ref(0);
const isSidebarVisible = ref(false);
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>
