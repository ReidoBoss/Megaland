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
            src="src/assets/mgLogo.png"
            class="lg:h-20 lg:w-35 md:h-20 md:w-35 custom-sm:w-[30%] custom-sm:h-[20%]"
            alt=""
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

    <div class="bg-gray-900 lg:block w-[100%] h-[100%] sticky top-0">
      <div class="flex flex-row row-span-2 bg-[#e9d8c5]">
        <aside
          class="bg-gray-900 w-[25%] border-dashed border-2 h-screen self-start sticky top-0 z-10 custom-sm:hidden sm:hidden md:hidden lg:block text-[#e9d8c5]"
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
            class="flex lg:w-[60%] md:w-[80%] mt-10 bg-gray-100 rounded-lg items-center justify-center mx-auto my-auto border-2 border-primary text-primary font-500 drop-shadow-lg"
          >
            <div class="text-center w-full my-auto lg:mx-auto mb-10">
              <div class="custom-sm:text-md my-5 mx-5 font-bold">
                Fill out the form below to
                <span class="text-orange-500"> List Property</span>
              </div>
              <div
                class="border-b-2 border-dashed border-orange-500 flex justify-start items-start w-[85%] mx-auto font-bold custom-sm:mt-[15%] custom-sm:text-sm"
              >
                General Data
              </div>
              <div
                class="flex bg-secondary w-[90%] h-[] rounded-lg mb-8 mx-auto"
              >
                <div class="w-[80%] h-[80%] my-[5%] mx-auto">
                  <div>
                    <div class="flex justify-start items-start">
                      <label for="name" class="block mb-2 text-sm font-medium"
                        >Name</label
                      >
                    </div>

                    <div>
                      <input
                        v-model="name"
                        type="text"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="John"
                        required
                      />
                    </div>

                    <div class="flex justify-start items-start mt-4">
                      <label class="block mb-2 text-sm font-medium" for="name"
                        >Description:</label
                      >
                    </div>
                    <div>
                      <textarea
                        v-model="description"
                        id="propertydesc"
                        type="textarea"
                        class="block w-full px-4 py-2 h-[80px] border-0 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm custom-sm:text-sm sm:leading-6 focus:outline-none"
                      ></textarea>
                    </div>

                    <div
                      class="md:my-10 md:ml-[-9%] mr-[-8%] border-b-2 border-dashed border-orange-500 flex justify-start items-start custom-sm:w-[120%] custom-sm:ml-[-10%] mx-auto font-bold custom-sm:my-[10%] custom-sm:text-sm"
                    >
                      Property Data
                    </div>

                    <!--Agent-->
                    <div class="flex justify-start items-start">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="propertyagent"
                        >Agent</label
                      >
                    </div>
                    <div>
                      <select
                        v-model="agent_id"
                        @change="currentAgentID(agent_id)"
                        id="propertyagent"
                        class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      >
                        <option
                          v-for="(agent, index) in agents"
                          :key="index"
                          :value="agent.agent_id"
                        >
                          {{ agent.agent_name }}
                        </option>
                      </select>
                    </div>

                    <!-- Status -->
                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="propertystatus"
                        >Status</label
                      >
                      <select
                        v-model="status"
                        id="propertystatus"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 custom-sm:text-sm custom-sm:leading-6 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                      >
                        <option
                          class="block mb-2 text-sm font-medium"
                          value="0"
                        >
                          Enable
                        </option>
                        <option
                          class="block mb-2 text-sm font-medium"
                          value="1"
                        >
                          Disable
                        </option>
                      </select>
                    </div>

                    <!-- Approved -->
                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="propertyapproved"
                        >Approved</label
                      >
                      <select
                        v-model="approved"
                        id="propertyapproved"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 custom-sm:text-sm custom-sm:leading-6 focus:outline-none"
                      >
                        <option
                          class="block mb-2 text-sm font-medium"
                          value="1"
                        >
                          Enable
                        </option>
                        <option
                          class="block mb-2 text-sm font-medium"
                          value="0"
                        >
                          Disable
                        </option>
                      </select>
                    </div>

                    <!--iFRAME-->
                    <div class="flex justify-start items-start mt-4">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="propertydesc"
                        >Youtube Iframe:</label
                      >
                    </div>
                    <div>
                      <textarea
                        v-model="iframe"
                        id="propertydesc"
                        type="textarea"
                        class="block w-full px-4 py-2 h-[80px] border-0 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm custom-sm:text-sm sm:leading-6 focus:outline-none"
                      ></textarea>
                    </div>

                    <!--Property Type-->
                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="propertytype"
                        >Property Type</label
                      >
                      <select
                        v-model="property_type"
                        id="propertytype"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 custom-sm:text-sm custom-sm:leading-6 focus:outline-none"
                      >
                        <option
                          class="block mb-2 text-sm font-medium"
                          value="Rent"
                        >
                          Rent
                        </option>
                        <option
                          class="block mb-2 text-sm font-medium"
                          value="Buy"
                        >
                          Buy
                        </option>
                      </select>
                    </div>

                    <!-- Price -->
                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="propertyprice"
                        >Property Price:</label
                      >
                      <input
                        v-model="property_price"
                        id="propertyprice"
                        type="number"
                        step="0.01"
                        class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      />
                    </div>

                    <!-- Category -->
                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="propertycategory"
                        >Category</label
                      >
                      <select
                        v-model="category"
                        id="propertycategory"
                        class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 custom-sm:text-sm custom-sm:leading-6 focus:outline-none"
                      >
                        <option
                          class="block mb-2 text-sm font-medium"
                          value="COMMERCIAL"
                        >
                          Commercial
                        </option>
                        <option
                          class="block mb-2 text-sm font-medium"
                          value="CONDO"
                        >
                          Condo
                        </option>
                        <option
                          class="block mb-2 text-sm font-medium"
                          value="HOUSE"
                        >
                          House
                        </option>
                        <option
                          class="block mb-2 text-sm font-medium"
                          value="LAND"
                        >
                          Land
                        </option>
                        <option
                          class="block mb-2 text-sm font-medium"
                          value="TOWNHOUSE"
                        >
                          Townhouse
                        </option>
                      </select>
                    </div>

                    <!-- UPLOAD IMAGE -->
                    <label
                      class="mb-2 text-sm mt-[10%] font-poppins font-semibold flex justify-start"
                    >
                      Upload Images
                    </label>
                    <div
                      class="flex justify-center gap-5 items-start flex-wrap lg:w-[100%] custom-sm:w-[100%] md:w-[100%] mt-5"
                    >
                      <!-- UPLOAD MAIN IMAGE -->
                      <div
                        class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md lg:w-[40%] custom-sm:w-[45%]"
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
                              for="main_image"
                              class="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span class="font-bold text-orange-500"
                                >Upload a file</span
                              >
                              <input
                                @change="handleFileImage"
                                id="main_image"
                                name="main_image"
                                type="file"
                                class="sr-only"
                              />
                            </label>
                            <p class="pl-1">or drag and drop</p>
                          </div>
                          <p class="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF
                          </p>
                        </div>
                      </div>
                      <!-- END MAIN IMAGE -->

                      <!-- START EXTRA 1 -->
                      <div
                        class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md lg:w-[40%] custom-sm:w-[45%]"
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
                              for="extra1"
                              class="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span class="font-bold text-orange-500"
                                >Upload a file</span
                              >
                              <input
                                @change="handleFileImage1"
                                id="extra1"
                                name="extra1"
                                type="file"
                                class="sr-only"
                              />
                            </label>
                            <p class="pl-1">or drag and drop</p>
                          </div>
                          <p class="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF
                          </p>
                        </div>
                      </div>
                      <!-- END EXTRA 1 -->
                      <!-- START EXTRA 2 -->
                      <div
                        class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md lg:w-[40%] custom-sm:w-[45%]"
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
                              for="extra2"
                              class="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span class="font-bold text-orange-500"
                                >Upload a file</span
                              >
                              <input
                                @change="handleFileImage2"
                                id="extra2"
                                name="extra2"
                                type="file"
                                class="sr-only"
                              />
                            </label>
                            <p class="pl-1">or drag and drop</p>
                          </div>
                          <p class="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF
                          </p>
                        </div>
                      </div>
                      <!-- END EXTRA 2 -->
                      <!-- START EXTRA 3 -->
                      <div
                        class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md lg:w-[40%] custom-sm:w-[45%]"
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
                              for="extra3"
                              class="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span class="font-bold text-orange-500"
                                >Upload a file</span
                              >
                              <input
                                @change="handleFileImage3"
                                id="extra3"
                                name="extra3"
                                type="file"
                                class="sr-only"
                              />
                            </label>
                            <p class="pl-1">or drag and drop</p>
                          </div>
                          <p class="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF
                          </p>
                        </div>
                      </div>
                      <!-- END EXTRA 3 -->
                    </div>
                    <!-- END UPLOAD IMAGE -->
                    <div
                      class="md:my-10 md:ml-[-9%] mr-[-8%] border-b-2 border-dashed border-orange-500 flex justify-start items-start custom-sm:w-[120%] custom-sm:ml-[-10%] mx-auto font-bold custom-sm:my-[10%] custom-sm:text-sm"
                    >
                      Address & Location
                    </div>

                    <!--ADDRESS & MAP-->
                    <section
                      class="flex justify-start items-start flex-col mt-5 gap-5"
                    >
                      <div class="grid grid-cols-1 sm:grid-cols-2 md:gap-5">
                        <!--Country-->
                        <div class="flex justify-start items-start flex-col">
                          <label
                            class="block mb-2 text-sm font-medium"
                            for="propertycountry"
                            >Country</label
                          >
                          <input
                            v-model="country"
                            id="propertycountry"
                            type="text"
                            step="any"
                            class="block w-full px-10 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                          />
                        </div>

                        <!--Region-->
                        <div
                          class="flex justify-start items-start flex-col mt-5 md:mt-0"
                        >
                          <label
                            class="block mb-2 text-sm font-medium"
                            for="propertyregion"
                            >Region</label
                          >
                          <input
                            v-model="region"
                            id="propertyregion"
                            type="text"
                            step="any"
                            class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                          />
                        </div>

                        <!--City-->
                        <div
                          class="flex justify-start items-start flex-col mt-5"
                        >
                          <label
                            class="block mb-2 text-sm font-medium"
                            for="propertycity"
                            >City</label
                          >
                          <input
                            v-model="city"
                            id="propertycity"
                            type="text"
                            step="any"
                            class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                          />
                        </div>

                        <!-- Local area -->
                        <div
                          class="flex justify-start items-start flex-col mt-5"
                        >
                          <label
                            class="block mb-2 text-sm font-medium"
                            for="propertycity"
                            >Local Area</label
                          >
                          <input
                            v-model="local_area"
                            id="propertyLocalArea"
                            type="text"
                            step="any"
                            class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                          />
                        </div>

                        <!--Zip Code-->
                        <div
                          class="flex justify-start items-start flex-col mt-5"
                        >
                          <label
                            class="block mb-2 text-sm font-medium"
                            for="zipcode"
                            >Zip Code</label
                          >
                          <input
                            v-model="zipcode"
                            id="zipcode"
                            type="number"
                            class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                          />
                        </div>

                        <!--Property Area-->
                        <div
                          class="flex justify-start items-start flex-col mt-5"
                        >
                          <label
                            class="block mb-2 text-sm font-medium"
                            for="propertyarea"
                            >Property Area</label
                          >
                          <input
                            v-model="property_area"
                            id="propertyarea"
                            type="number"
                            class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                          />
                        </div>

                        <!--Bedroom-->
                        <div
                          class="flex justify-start items-start flex-col mt-5"
                        >
                          <label
                            class="block mb-2 text-sm font-medium"
                            for="bedroom"
                            >Bedroom</label
                          >
                          <input
                            v-model="bedroom"
                            id="bedroom"
                            type="number"
                            class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                          />
                        </div>
                        <!--Bathroom-->
                        <div
                          class="flex justify-start items-start flex-col mt-5"
                        >
                          <label
                            class="block mb-2 text-sm font-medium"
                            for="bathroom"
                            >Bathroom</label
                          >
                          <input
                            v-model="bathroom"
                            id="bathroom"
                            type="number"
                            class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                          />
                        </div>

                        <!--Rooms-->
                        <div
                          class="flex justify-start items-start flex-col mt-5"
                        >
                          <label
                            class="block mb-2 text-sm font-medium"
                            for="propertyroom"
                            >Rooms</label
                          >
                          <input
                            v-model="rooms"
                            id="propertyroom"
                            type="number"
                            class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                          />
                        </div>

                        <!--Parking Space-->
                        <div
                          class="flex justify-start items-start flex-col mt-5"
                        >
                          <label
                            class="block mb-2 text-sm font-medium"
                            for="parkingspace"
                            >Parking Space</label
                          >
                          <input
                            v-model="parking_space"
                            id="parkingspace"
                            type="number"
                            class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                          />
                        </div>
                      </div>
                    </section>
                    <div
                      class="md:text-lg sm:text-sm md:my-10 md:ml-[-9%] mr-[-8%] border-b-2 border-dashed border-orange-500 flex justify-start items-start custom-sm:w-[120%] custom-sm:ml-[-10%] mx-auto font-bold custom-sm:my-[10%] custom-sm:text-sm"
                    >
                      Amenities & Nearby Landmarks
                    </div>

                    <section
                      class="flex justify-start items-start flex-col mt-2"
                    >
                      <div class="flex flex-wrap items-center mt-2 space-x-4">
                        <!--Amenities-->
                        <div class="sm:mt-0 w-[100%]">
                          <p
                            class="mb-5 custom-sm:text-sm sm:text-sm lg:text-md md:text-lg leading-6 text-gray-600"
                          >
                            Kindly check below the following amenities and
                            nearby landmarks that are included in the property.
                          </p>
                          <h2
                            class="text-lg font-bold leading-7 text-gray-900 mt-5 text-start"
                          >
                            Amenities
                          </h2>
                          <div class="flex items-center mt-2">
                            <input
                              v-model="attic"
                              id="attic"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Attic</label
                            >
                          </div>
                          <div class="flex items-center mt-2">
                            <input
                              v-model="balcony"
                              id="balcony"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Balcony</label
                            >
                          </div>
                          <div class="flex items-center mt-2">
                            <input
                              v-model="deck"
                              id="deck"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Deck</label
                            >
                          </div>
                          <div class="flex items-center mt-2">
                            <input
                              v-model="fenced_yard"
                              id="fenced-yard"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Fenced Yard</label
                            >
                          </div>
                          <div class="flex items-center mt-2">
                            <input
                              v-model="fireplace"
                              id="fireplace"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Fireplace</label
                            >
                          </div>
                          <div class="flex items-center mt-2">
                            <input
                              v-model="frontyard"
                              id="frontyard"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Front Yard</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="gasheat"
                              id="gasheat"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Gas Heat</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="gym"
                              id="gym"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Gym</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="lakeview"
                              id="lakeview"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Lake View</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="pond"
                              id="pond"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Pond</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="pool"
                              id="pool"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Pool</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="recreation"
                              id="recreation"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Recreation</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="sprinklers"
                              id="sprinklers"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Sprinklers</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="storage"
                              id="storage"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Storage</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="washer"
                              id="washer"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Washer</label
                            >
                          </div>

                          <div class="flex items-center mt-2">
                            <input
                              v-model="winecellar"
                              value="1"
                              id="winecellar"
                              type="checkbox"
                              class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                            />
                            <label
                              for="attic"
                              class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                              >Wine Cellar</label
                            >
                          </div>
                        </div>
                      </div>

                      <!--Nearest Places-->
                      <div class="sm:mt-0">
                        <h2
                          class="text-lg font-bold leading-7 text-gray-900 mt-5 text-start"
                        >
                          Nearby Landmarks
                        </h2>

                        <div class="flex items-center mt-2">
                          <input
                            v-model="airport"
                            id="airport"
                            type="text"
                            class="h-10 px-4 border-gray-300 text-gray-900 focus:ring-indigo-600 rounded-xl"
                            placeholder="Airport"
                          />
                        </div>

                        <div class="flex items-center mt-2">
                          <input
                            v-model="bus_stand"
                            id="bus-stand"
                            type="text"
                            class="h-10 px-4 border-gray-300 text-gray-900 focus:ring-indigo-600 rounded-xl"
                            placeholder="Bus Stand"
                          />
                        </div>

                        <div class="flex items-center mt-2">
                          <input
                            v-model="hospital"
                            id="hospital"
                            type="text"
                            class="h-10 px-4 border-gray-300 text-gray-900 focus:ring-indigo-600 rounded-xl"
                            placeholder="Hospital"
                          />
                        </div>

                        <div class="flex items-center mt-2">
                          <input
                            v-model="patroltank"
                            id="patroltank"
                            type="text"
                            class="h-10 px-4 border-gray-300 text-gray-900 focus:ring-indigo-600 rounded-xl"
                            placeholder="Patrol Tank"
                          />
                        </div>

                        <div class="flex items-center mt-2">
                          <input
                            v-model="railway"
                            id="railway"
                            type="text"
                            class="h-10 px-4 border-gray-300 text-gray-900 focus:ring-indigo-600 rounded-xl"
                            placeholder="Railway"
                          />
                        </div>

                        <div class="flex items-center mt-2">
                          <input
                            v-model="shopping"
                            id="shopping"
                            type="text"
                            class="h-10 px-4 border-gray-300 text-gray-900 focus:ring-indigo-600 rounded-xl"
                            placeholder="Shopping"
                          />
                        </div>

                        <div class="flex items-center mt-2">
                          <input
                            v-model="universities"
                            id="universities"
                            type="text"
                            class="h-10 px-4 border-gray-300 text-gray-900 focus:ring-indigo-600 rounded-xl"
                            placeholder="Universities"
                          />
                        </div>

                        <div class="flex items-center mt-2">
                          <input
                            v-model="others"
                            id="others"
                            type="text"
                            class="h-10 px-4 border-gray-300 text-gray-900 focus:ring-indigo-600 rounded-xl"
                            placeholder="Others"
                          />
                        </div>
                      </div>
                    </section>
                    <div class="flex justify-start mt-10">
                      <button
                        @click="submitProperty()"
                        class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 mr-4"
                        id="saveAgent"
                      >
                        Submit
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
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import SideBarAdminNew from "../AdminSidePages/SideBarAdminNew.vue";

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
  getAgentsName();
});

//all agents array
const agents = ref([]);

//images

//general data
const name = ref();
const description = ref();
//property data
const agent_id = ref();
const status = ref();
const approved = ref();
const iframe = ref();
const property_type = ref();
const property_price = ref();
const category = ref();
const main_image = ref(null);
const extra1 = ref(null); // extra image 1
const extra2 = ref(null); // extra image 2
const extra3 = ref(null); // extra image 3
//address and location
const country = ref();
const region = ref();
const city = ref();
const local_area = ref();
const zipcode = ref();
const property_area = ref();
const bedroom = ref();
const bathroom = ref();
const rooms = ref();
const parking_space = ref();
//amenities
const attic = ref();
const balcony = ref();
const deck = ref();
const fenced_yard = ref();
const fireplace = ref();
const frontyard = ref();
const gasheat = ref();
const gym = ref();
const lakeview = ref();
const pond = ref();
const pool = ref();
const recreation = ref();
const sprinklers = ref();
const storage = ref();
const washer = ref();
const winecellar = ref();
//landmarks
const airport = ref();
const bus_stand = ref();
const hospital = ref();
const patroltank = ref();
const railway = ref();
const shopping = ref();
const universities = ref();
const others = ref();

const submitProperty = async () => {
  try {
    const formData = new FormData();

    // General data
    formData.append("name", name.value);
    formData.append("description", description.value);

    // Property data
    formData.append("agent_id", agent_id.value);
    formData.append("status", status.value);
    formData.append("approved", approved.value);
    formData.append("iframe", iframe.value);
    formData.append("property_type", property_type.value);
    formData.append("property_price", property_price.value);
    formData.append("category", category.value);
    formData.append("main_image", main_image.value);
    formData.append("extra1", extra1.value);
    formData.append("extra2", extra2.value);
    formData.append("extra3", extra3.value);

    // Address and location
    formData.append("country", country.value);
    formData.append("region", region.value);
    formData.append("city", city.value);
    formData.append("local_area", local_area.value);
    formData.append("zipcode", zipcode.value);
    formData.append("property_area", property_area.value);
    formData.append("bedroom", bedroom.value);
    formData.append("bathroom", bathroom.value);
    formData.append("rooms", rooms.value);
    formData.append("parking_space", parking_space.value);

    // Amenities
    formData.append("attic", attic.value ? 1 : 0);
    formData.append("balcony", balcony.value ? 1 : 0);
    formData.append("deck", deck.value ? 1 : 0);
    formData.append("fenced_yard", fenced_yard.value ? 1 : 0);
    formData.append("fireplace", fireplace.value ? 1 : 0);
    formData.append("frontyard", frontyard.value ? 1 : 0);
    formData.append("gasheat", gasheat.value ? 1 : 0);
    formData.append("gym", gym.value ? 1 : 0);
    formData.append("lake_view", lakeview.value ? 1 : 0);
    formData.append("pond", pond.value ? 1 : 0);
    formData.append("pool", pool.value ? 1 : 0);
    formData.append("recreation", recreation.value ? 1 : 0);
    formData.append("sprinklers", sprinklers.value ? 1 : 0);
    formData.append("storage", storage.value ? 1 : 0);
    formData.append("washer", washer.value ? 1 : 0);
    formData.append("wine_cellar", winecellar.value ? 1 : 0);

    // Landmarks
    formData.append("airport", airport.value);
    formData.append("bus_stand", bus_stand.value);
    formData.append("hospital", hospital.value);
    formData.append("patroltank", patroltank.value);
    formData.append("railway", railway.value);
    formData.append("shopping", shopping.value);
    formData.append("universities", universities.value);
    formData.append("others", others.value);

    await axios.post("http://localhost:8080/addProperty", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    alert("added!");
  } catch (error) {
    console.log("Error:", error);
  }
};

const handleFileImage = async (event) => {
  const file = (event.target.files || [])[0];
  if (file) {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      console.log("Invalid file type. Please upload an image.");
      return;
    }

    const resizedImage = await resizeImage(file);
    main_image.value = resizedImage;
    console.log("File uploaded:", resizedImage.name);
  }
};

const handleFileImage1 = async (event) => {
  const file = (event.target.files || [])[0];
  if (file) {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      console.log("Invalid file type. Please upload an image.");
      return;
    }

    const resizedImage = await resizeImage(file);
    extra1.value = resizedImage;
    console.log("File uploaded:", resizedImage.name);
  }
};

const handleFileImage2 = async (event) => {
  const file = (event.target.files || [])[0];
  if (file) {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      console.log("Invalid file type. Please upload an image.");
      return;
    }

    const resizedImage = await resizeImage(file);
    extra2.value = resizedImage;
    console.log("File uploaded:", resizedImage.name);
  }
};

const handleFileImage3 = async (event) => {
  const file = (event.target.files || [])[0];
  if (file) {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      console.log("Invalid file type. Please upload an image.");
      return;
    }

    const resizedImage = await resizeImage(file);
    extra3.value = resizedImage;
    console.log("File uploaded:", resizedImage.name);
  }
};

const resizeImage = (file) => {
  return new Promise((resolve) => {
    const maxSizeKB = 500; // Maximum size in kilobytes
    const maxSizeBytes = maxSizeKB * 1024; // Convert KB to bytes
    const image = new Image();
    const reader = new FileReader();

    reader.onload = function (event) {
      image.src = event.target.result;
    };

    image.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      let width = image.width;
      let height = image.height;

      if (file.size <= maxSizeBytes) {
        // Image already within size limit
        resolve(file);
        return;
      }

      // Calculate new dimensions to maintain aspect ratio
      if (width > height) {
        if (width > maxSizeKB) {
          height *= maxSizeKB / width;
          width = maxSizeKB;
        }
      } else {
        if (height > maxSizeKB) {
          width *= maxSizeKB / height;
          height = maxSizeKB;
        }
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(image, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          const resizedFile = new File([blob], file.name, {
            type: "image/jpeg",
            lastModified: Date.now(),
          });
          resolve(resizedFile);
        },
        "image/jpeg",
        0.7
      ); // Quality: 0.7
    };

    reader.readAsDataURL(file);
  });
};

const getAgentsName = async () => {
  try {
    const response = await fetch(`http://localhost:8080/getAgents`);
    const data = await response.json();
    for (var i = 0; i < data.length; i++) {
      agents.value.push({
        agent_id: data[i].agent_id,
        agent_name: data[i].agent_name,
      });
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

const currentAgentID = (id) => {
  agent_id.value = id;
};

const isSidebarVisible = ref(false);
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>
