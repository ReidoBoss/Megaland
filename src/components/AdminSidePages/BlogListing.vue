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

    <div class="lg:block w-[100%] h-[100%] sticky top-0 bg-[#e9d8c5]">
      <div class="flex flex-row row-span-2">
        <aside
          class="bg-primary w-[25%] border-dashed border-2 h-screen self-start sticky top-0 z-10 custom-sm:hidden sm:hidden md:hidden lg:block text-[#e9d8c5]"
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
              >
                Property Listing
              </button>
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
              >
                Property Table
              </button>
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
              >
                Add Agent
              </button>
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
              >
                Agent Table
              </button>
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
              >
                Blog Listing
              </button>
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
              >
                Blog Table
              </button>
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
              >
                Logout Account
              </button>
            </li>
          </ul>
        </aside>

        <div
          class="bg-[#e9d8c5] custom-sm:mb-[10%] lg:w-[100%] custom-sm:w-[90%] md:w-[90%] mx-auto"
        >
          <div
            class="flex md:w-[90%] lg:w-[70%] mt-10 bg-gray-100 rounded-lg items-center justify-center mx-auto my-auto border-2 border-primary text-primary font-500 drop-shadow-lg"
          >
            <div class="text-center w-full my-auto lg:mx-auto mb-10">
              <div class="custom-sm:text-md my-5 mx-5 font-bold">
                Fill out the form below to
                <span class="text-orange-500"> List Blog</span>
              </div>
              <div
                class="border-b-2 lg:text-md md:text-md border-dashed border-orange-500 flex justify-start items-start w-[85%] mx-auto font-bold custom-sm:mt-[15%] custom-sm:text-sm"
              >
                Blog Listing
              </div>
              <div
                class="flex bg-secondary w-[90%] h-[] rounded-lg mb-8 mx-auto"
              >
                <div class="w-[80%] h-[80%] my-[5%] mx-auto">
                  <form @submit.prevent>
                    <div class="flex flex-col gap-5 mt-4">
                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="blogtitle"
                          >Blog Title</label
                        >
                        <input
                          v-model="name"
                          id="blogtitle"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>
                      <!-- Iframe -->
                      <div class="flex justify-start items-start mt-4 flex-col">
                        <label class="block mb-2 text-sm font-medium" for="name"
                          >iFrame:</label
                        >
                        <div class="w-full">
                          <textarea
                            v-model="iframe"
                            id="propertydesc"
                            type="textarea"
                            class="block w-full px-4 py-2 h-[80px] border-0 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm custom-sm:text-sm sm:leading-6 focus:outline-none"
                          ></textarea>
                        </div>
                      </div>

                      <!-- location -->

                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="blogtitle"
                          >Location</label
                        >
                        <input
                          v-model="location"
                          id="blogtitle"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>

                      <!-- developer -->
                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="blogtitle"
                          >Developer</label
                        >
                        <input
                          v-model="developer"
                          id="blogtitle"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>

                      <!-- details -->
                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="blogtitle"
                          >Details</label
                        >
                        <input
                          v-model="details"
                          id="blogtitle"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>
                      <!-- description -->
                      <div class="flex justify-start items-start mt-4 flex-col">
                        <label class="block mb-2 text-sm font-medium" for="name"
                          >Description:</label
                        >
                        <textarea
                          v-model="description"
                          id="propertydesc"
                          type="textarea"
                          class="block w-full px-4 py-2 h-[80px] border-0 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm custom-sm:text-sm sm:leading-6 focus:outline-none"
                        ></textarea>
                      </div>

                      <!-- broker -->
                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="blogtitle"
                          >Broker</label
                        >
                        <input
                          v-model="broker"
                          id="blogtitle"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>
                      <!-- contact phone -->
                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="blogtitle"
                          >Cellphone No.</label
                        >
                        <input
                          v-model="contact_phone"
                          id="blogtitle"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>
                      <!-- contact telephone -->
                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="blogtitle"
                          >Telephone No.</label
                        >
                        <input
                          v-model="contact_telephone"
                          id="blogtitle"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>
                      <!-- email address -->
                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="blogtitle"
                          >Email Address</label
                        >
                        <input
                          v-model="email_address"
                          id="blogtitle"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>

                      <!-- KEY TAGS  -->
                      <div class="flex justify-start items-start flex-col mt-5">
                        <label
                          class="block mb-2 text-sm font-medium"
                          for="blogtitle"
                          >Key Tags</label
                        >
                        <input
                          v-model="key_tags"
                          id="blogtitle"
                          type="text"
                          class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>

                      <div
                        class="text-xl font-bold my-5 absolute md:top-[46.5%] md:right-[29%] custom-sm:text-sm custom-sm:top-[58.5%] custom-sm:right-[25%]"
                      ></div>

                      <div
                        class="flex flex-col items-center space-x-4 md:my-20 custom-sm:mt-20 gap-5"
                      >
                        <!-- DYNAMIC AMENITIES -->
                        <div class="w-[100%] flex-col flex">
                          <div
                            class="w-[100%] flex flex-col gap-3 items-center justify-center"
                          >
                            <div
                              class="md:text-lg lg:text-md sm:text-sm md:my-10 lg:w-[120%] md:w-[110%] lg:ml-[-8%] md:ml-[-9%] mr-[-8%] border-b-2 border-dashed border-orange-500 flex justify-start items-start custom-sm:w-[120%] custom-sm:ml-[-10%] mx-auto font-bold custom-sm:my-[10%] custom-sm:text-sm"
                            >
                              ⭐Amenities
                            </div>
                            <div class="flex flex-col w-[100%] gap-2">
                              <div
                                v-for="(amenity, index) in amenities"
                                :key="index"
                              >
                                <div
                                  class="flex items-center mt-2 w-[100%] justify-center"
                                >
                                  <input
                                    v-model="amenity.id"
                                    type="text"
                                    class="h-10 w-[90%] px-4 text-md font-500 border-gray-300 text-gray-900 focus:ring-indigo-600 rounded-xl"
                                    :placeholder="amenity.highlight"
                                  />
                                </div>
                              </div>
                              <div class="flex justify-center mt-5 gap-5">
                                <button
                                  @click="addAmenity()"
                                  class="lg:w-[10%] custom-sm:w-[5%] md:w-[8%] px-8 items-center justify-center flex text-black border bg-orange-500 font-medium rounded-lg text-sm py-2.5 text-center"
                                >
                                  <mdicon
                                    name="PlusThick"
                                    :width="25"
                                    :height="25"
                                    class=""
                                  />
                                </button>
                                <button
                                  @click="removeAmenity()"
                                  class="lg:w-[10%] custom-sm:w-[5%] md:w-[8%] px-8 items-center justify-center flex text-black border bg-red-500 font-medium rounded-lg text-sm py-2.5 text-center"
                                >
                                  <mdicon
                                    name="CloseCircle"
                                    :width="25"
                                    :height="25"
                                    class=""
                                  />
                                </button>
                              </div>
                            </div>
                          </div>

                          <!-- AMENITIES -->

                          <!-- DYNAMIC highlight -->

                          <div
                            class="w-[100%] flex flex-col gap-3 items-center justify-center"
                          >
                            <div
                              class="md:text-lg lg:text-md sm:text-sm md:my-10 lg:w-[120%] md:w-[110%] lg:ml-[-8%] md:ml-[-9%] mr-[-8%] border-b-2 border-dashed border-orange-500 flex justify-start items-start custom-sm:w-[120%] custom-sm:ml-[-10%] mx-auto font-bold custom-sm:my-[10%] custom-sm:text-sm"
                            >
                              ✔Highlight
                            </div>
                            <div class="flex flex-col w-[100%]">
                              <div
                                v-for="(highlight, index) in highlight"
                                class="flex items-center mt-2 w-[100%] justify-center"
                                :key="index"
                                :id="highlight.id"
                                :highlight="highlight.highlight"
                              >
                                <input
                                  v-model="highlight.id"
                                  type="text"
                                  class="h-10 px-4 text-md font-500 w-[90%] border-gray-300 text-gray-900 focus:ring-indigo-600 rounded-xl"
                                  :placeholder="highlight.highlight"
                                />
                              </div>
                              <div
                                class="w-[100%] flex justify-center mt-5 gap-5"
                              >
                                <button
                                  @click="addHighlight()"
                                  class="lg:w-[10%] custom-sm:w-[5%] md:w-[8%] px-8 items-center justify-center flex text-black border bg-orange-500 font-medium rounded-lg text-sm py-2.5 text-center"
                                >
                                  <mdicon
                                    name="PlusThick"
                                    :width="25"
                                    :height="25"
                                    class=""
                                  />
                                </button>
                                <button
                                  @click="removeHighlight()"
                                  class="lg:w-[10%] custom-sm:w-[5%] md:w-[8%] px-8 items-center justify-center flex text-black border bg-red-500 font-medium rounded-lg text-sm py-2.5 text-center"
                                >
                                  <mdicon
                                    name="CloseCircle"
                                    :width="25"
                                    :height="25"
                                    class=""
                                  />
                                </button>
                              </div>
                            </div>
                          </div>

                          <!-- highlight -->
                        </div>

                        <div
                          class="w-[100%] flex flex-col gap-3 items-center justify-center"
                        >
                          <div
                            class="md:text-lg lg:text-md sm:text-sm md:my-10 lg:w-[120%] md:w-[110%] lg:ml-[-8%] md:ml-[-9%] mr-[-8%] border-b-2 border-dashed border-orange-500 flex justify-start items-start custom-sm:w-[120%] custom-sm:ml-[-10%] mx-auto font-bold custom-sm:my-[10%] custom-sm:text-sm"
                          >
                            📍Land Mark
                          </div>
                          <div class="flex flex-col w-[100%]">
                            <div
                              v-for="(landmark, index) in landmark"
                              class="flex items-center justify-center mt-2 w-[100%] gap-5"
                              :key="index"
                              :id="landmark.id"
                              :highlight="landmark.highlight"
                            >
                              <input
                                v-model="landmark.id"
                                type="text"
                                class="h-10 text-md font-500 px-4 w-[90%] border-gray-300 text-gray-900 focus:ring-indigo-600 rounded-xl"
                                :placeholder="landmark.highlight"
                              />
                            </div>
                            <div
                              class="w-[100%] flex justify-center mt-5 gap-5"
                            >
                              <button
                                @click="addLandmark()"
                                class="lg:w-[10%] custom-sm:w-[5%] md:w-[8%] px-8 items-center justify-center flex text-black border bg-orange-500 font-medium rounded-lg text-sm py-2.5 text-center"
                              >
                                <mdicon
                                  name="PlusThick"
                                  :width="25"
                                  :height="25"
                                  class=""
                                />
                              </button>
                              <button
                                @click="removeLandmark()"
                                class="lg:w-[10%] custom-sm:w-[5%] md:w-[8%] px-8 items-center justify-center flex text-black border bg-red-500 font-medium rounded-lg text-sm py-2.5 text-center"
                              >
                                <mdicon
                                  name="CloseCircle"
                                  :width="25"
                                  :height="25"
                                  class=""
                                />
                              </button>
                            </div>
                          </div>
                        </div>

                        <!-- landmark -->
                      </div>
                      <!-- linebreak END OF DYNAMICS -->
                      <br />
                      <div
                        class="flex justify-start items-start flex-col lg:mt-[-10%]"
                      >
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
                                  @change="handleFileImage"
                                  id="agentimage"
                                  name="agentimage"
                                  type="file"
                                  class="sr-only"
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
                        @click="submitBlog"
                        class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 mr-4"
                        id="saveAgent"
                      >
                        Save
                      </button>
                    </div>
                  </form>
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
import { ref, onMounted } from "vue";
import axios from "axios";
defineProps({
  propertyListing: Function,
  propertyTable: Function,
  addAgent: Function,
  agentTable: Function,
  blogListing: Function,
  blogTable: Function,
  logout: Function,
});
onMounted(() => {
  addAmenity();
  addLandmark();
  addHighlight();
});
const name = ref();
const location = ref();
const developer = ref();
const details = ref();
const description = ref();
const broker = ref();
const contact_phone = ref();
const contact_telephone = ref();
const email_address = ref();
const key_tags = ref();
const iframe = ref();
const thumbnail = ref(null);

const submitBlog = async () => {
  try {
    const formData = new FormData();

    formData.append("name", name.value);
    formData.append("location", location.value);
    formData.append("developer", developer.value);
    formData.append("details", details.value);
    formData.append("description", description.value);
    formData.append("broker", broker.value);
    formData.append("contact_phone", contact_phone.value);
    formData.append("contact_telephone", contact_telephone.value);
    formData.append("email_address", email_address.value);
    formData.append("key_tags", key_tags.value);
    formData.append("iframe", iframe.value);
    formData.append("thumbnail", thumbnail.value);

    for (var i = 0; i < amenitiesCounter.value; i++) {
      formData.append(
        `amenities_${i + 1}`,
        getAmenityValue(i) !== undefined && getAmenityValue(i) !== null
          ? getAmenityValue(i)
          : 0
      );
    }
    for (var i = 0; i < highlightCounter.value; i++) {
      formData.append(
        `highlights_${i + 1}`,
        getHighlightValue(i) !== undefined && getHighlightValue(i) !== null
          ? getHighlightValue(i)
          : 0
      );
    }
    for (var i = 0; i < landmarkCounter.value; i++) {
      formData.append(
        `landmark_${i + 1}`,
        getLandmarkValue(i) !== undefined && getLandmarkValue(i) !== null
          ? getLandmarkValue(i)
          : 0
      );
    }
    console.log("FormData:");
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    await axios.post("https://backend-n4gs.onrender.com/addBlog", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    alert("added!");
  } catch (error) {
    console.log("Error: ", error);
  }
};

//dynamic amenities up to 16
const amenities = ref([]);
const amenitiesCounter = ref(0);
const addAmenity = () => {
  if (amenitiesCounter.value < 16) {
    amenitiesCounter.value++;
    amenities.value.push({
      id: ``,
      highlight: `Amenity #${amenitiesCounter.value}`,
    });
  }
};
const removeAmenity = () => {
  if (amenities.value.length > 0) {
    amenities.value.pop();
    amenitiesCounter.value--;
  }
};

const getAmenityValue = (id) => {
  console.log(amenities.value[id].id);
  return amenities.value[id].id;
};

//dynamic highlight up to 16
const highlight = ref([]);
const highlightCounter = ref(0);
const addHighlight = () => {
  if (highlightCounter.value < 16) {
    highlightCounter.value++;
    highlight.value.push({
      id: ``,
      highlight: `Highlight #${highlightCounter.value}`,
    });
  }
};
const removeHighlight = () => {
  if (highlight.value.length > 0) {
    highlight.value.pop();
    highlightCounter.value--;
  }
};

const getHighlightValue = (id) => {
  console.log(highlight.value[id].id);
  return highlight.value[id].id;
};

//dynamic landmark up to 16

const landmark = ref([]);
const landmarkCounter = ref(0);
const addLandmark = () => {
  if (landmarkCounter.value < 16) {
    landmarkCounter.value++;
    landmark.value.push({
      id: ``,
      highlight: `Landmark #${landmarkCounter.value}`,
    });
  }
};
const removeLandmark = () => {
  if (landmark.value.length > 0) {
    landmark.value.pop();
    landmarkCounter.value--;
  }
};

const getLandmarkValue = (id) => {
  console.log(landmark.value[id].id);
  return landmark.value[id].id;
};

const active = ref(0);
const isSidebarVisible = ref(false);
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};

const handleFileImage = (event) => {
  const file = (event.target.files || [])[0];
  
    thumbnail.value = file;
  
};
</script>
