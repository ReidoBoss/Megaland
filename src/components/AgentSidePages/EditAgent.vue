<template>
  <div
    class="lg:block custom-sm:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[80%] h-[100%] sticky top-0 bg-[#e9d8c5]"
  >
    <div class="flex flex-row row-span-2">
      <div
        class="bg-[#e9d8c5] custom-sm:w-[90%] custom-sm:mb-[10%] lg:w-[80%] mx-auto my-5"
      >
        <div
          class="flex md:w-[100%] lg:w-[80%] mt-10 bg-gray-100 rounded-lg items-center justify-center mx-auto my-auto border-2 border-primary text-primary font-500 drop-shadow-lg"
        >
          <div
            class="text-center lg:w-full custom-sm:w-[90%] my-auto lg:mx-auto mb-10"
          >
            <div class="custom-sm:text-md my-5 mx-5 font-bold">
              Fill out the form below to
              <span class="text-orange-500"> Edit Profile</span>
            </div>
            <div
              class="border-b-2 border-dashed border-orange-500 flex justify-start items-start w-[85%] mx-auto font-bold custom-sm:mt-[15%] custom-sm:text-sm"
            >
              Agent's Data
            </div>
            <div class="flex bg-secondary w-[90%] h-[] rounded-lg mb-8 mx-auto">
              <div class="w-[80%] h-[80%] my-[5%] mx-auto">
                <form @submit.prevent>
                  <div class="grid grid-cols-1 gap-5 mt-4 sm:grid-cols-2">
                    <div class="flex justify-start items-start flex-col mt-5">
                      <label
                        class="block mb-2 text-sm font-medium"
                        for="agentname"
                        >Agent Name:</label
                      >
                      <input
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
