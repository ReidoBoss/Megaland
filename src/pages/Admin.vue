<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4"
    >
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/mgLogo.png" class="h-20" alt="" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >ADMINISTRATOR</span
        >
      </div>
    </div>
  </nav>
  <div class="grid grid-cols-2 gap-8">
    <div class="col-span-1">
      <TabsWrapper>
        <!--START OF PROPERTY FORM-->
        <Tab title="Property Listing">
          <form @submit.prevent>
            <TabsWrapper>
              <!--GENERAL-->
              <Tab title="General">
                <section class="max-w-4xl p-6 mx-auto">
                  <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <!--Property Name-->
                    <div>
                      <label
                        class="block text-base font-medium text-gray-900 mt-5"
                        for="propertyname"
                        >Name:</label
                      >
                      <input
                        v-model="property_name"
                        id="propertyname"
                        type="text"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <!--Description-->
                    <div>
                      <label
                        class="block text-base font-medium text-gray-900"
                        for="propertydesc"
                        >Description:</label
                      >
                      <textarea
                        v-model="property_description"
                        id="propertydesc"
                        type="textarea"
                        class="block w-full px-4 py-2 mt-2 border-0 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      ></textarea>
                    </div>
                    <!--Meta Tag Titles
                    <div>
                      <label class="text-white dark:text-black font-medium" for="metatagtitle"
                        >Meta Tag Title</label
                      >
                      <input
                        v-model="propertyData.property_meta_tag_title"
                        id="metatagtitle"
                        type="text"
                        class="block w-full px-4 py-2 mt-2 order-0 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>
                 
                    <div>
                      <label class="text-white dark:text-black font-medium" for="metadesc"
                        >Meta Description:</label
                      >
                      <textarea
                        v-model="propertyData.property_meta_description"
                        id="metadesc"
                        type="textarea"
                        class="block w-full px-4 py-2 mt-2 order-0 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      ></textarea>
                    </div>
                  
                    <div>
                      <label class="text-white dark:text-black font-medium" for="metatagkeywords"
                        >Meta Tag Keywords</label
                      >
                      <input
                        v-model="propertyData.property_meta_tag_keywords"
                        id="metatagkeywords"
                        type="text"
                        class="block w-full px-4 py-2 mt-2 order-0 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>
            
               
                    <div>
                      <label class="text-white dark:text-black font-medium" for="propertytag"
                        >Tag</label
                      >
                      <input
                        v-model="propertyData.property_tag"
                        id="propertytag"
                        type="text"
                        class="block w-full px-4 py-2 mt-2 order-0 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>
  
                   
                      <div>
                      <label class="text-white dark:text-black font-medium" for="seourl"
                        >SEO URL</label
                      >
                      <input
                        v-model="propertyData.property_seo_url"
                        id="seourl"
                        type="text"
                        class="block w-full px-4 py-2 mt-2 order-0 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>
                  --></div>
                </section>
              </Tab>

              <!--DATA-->
              <Tab title="Data">
                <section class="max-w-4xl p-6 mx-auto">
                  <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <!--Agent-->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="propertyagent"
                        >Agent</label
                      >
                      <input
                        v-model="property_owner_agent"
                        id="propertyagent"
                        type="text"
                        class="block w-full px-4 py-2 mt-2 order-0 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <!-- Status -->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="propertystatus"
                        >Status</label
                      >
                      <select
                        v-model="property_enable"
                        id="propertystatus"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      >
                        <option value="ENABLE">Enable</option>
                        <option value="DISABLE">Disable</option>
                      </select>
                    </div>

                    <!-- Approved -->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="propertyapproved"
                        >Approved</label
                      >
                      <select
                        v-model="property_enable"
                        id="propertyapproved"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      >
                        <option value="ENABLE">Enable</option>
                        <option value="DISABLE">Disable</option>
                      </select>
                    </div>

                    <!--Upload Video-->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="video"
                        >Youtube Link:</label
                      >
                      <input
                        v-model="property_video"
                        id="video"
                        type="text"
                        step="any"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <!--Property Type-->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="propertytype"
                        >Property Type</label
                      >
                      <select
                        v-model="property_type"
                        id="propertytype"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      >
                        <option value="RENT">Rent</option>
                        <option value="BUY">Buy</option>
                      </select>
                    </div>

                    <!-- Price -->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="propertyprice"
                        >Property Price:</label
                      >
                      <input
                        v-model="property_price"
                        id="propertyprice"
                        type="number"
                        step="0.01"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <!-- Category -->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="propertycategory"
                        >Category</label
                      >
                      <select
                        v-model="property_category"
                        id="propertycategory"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      >
                        <option value="COMMERCIAL">Commercial</option>
                        <option value="CONDO">Condo</option>
                        <option value="HOUSE">House</option>
                        <option value="LAND">Land</option>
                        <option value="TOWNHOUSE">Townhouse</option>
                      </select>
                    </div>

                    <!--Upload Image-->
                    <div>
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
                              for="propertyimage"
                              class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span class="">Upload a file</span>
                              <input
                                @change="handleFileChange"
                                id="propertyimage"
                                name="propertyimage"
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
                    </div>
                  </div>
                </section>
              </Tab>

              <!--ADDRESS & MAP-->
              <Tab title="Address & Map">
                <section class="max-w-4xl p-6 mx-auto">
                  <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <!--Country-->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="propertycountry"
                        >Country</label
                      >
                      <input
                        v-model="property_country"
                        id="propertycountry"
                        type="text"
                        step="any"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <!--Region-->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="propertyregion"
                        >Region</label
                      >
                      <input
                        v-model="property_region"
                        id="propertyregion"
                        type="text"
                        step="any"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <!--City-->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="propertycity"
                        >City</label
                      >
                      <input
                        v-model="property_city"
                        id="propertycity"
                        type="text"
                        step="any"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <!-- Local area -->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="propertycity"
                        >Local Area</label
                      >
                      <input
                        v-model="property_local_area"
                        id="propertyLocalArea"
                        type="text"
                        step="any"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <!--Zip Code-->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="zipcode"
                        >Zip Code</label
                      >
                      <input
                        v-model="property_zipcode"
                        id="zipcode"
                        type="number"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <!--Property Area-->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="propertyarea"
                        >Property Area</label
                      >
                      <input
                        v-model="property_area"
                        id="propertyarea"
                        type="number"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <!--Bedroom-->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="bedroom"
                        >Bedroom</label
                      >
                      <input
                        v-model="property_bedroom"
                        id="bedroom"
                        type="number"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>
                    <!--Bathroom-->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="bathroom"
                        >Bathroom</label
                      >
                      <input
                        v-model="property_bathroom"
                        id="bathroom"
                        type="number"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <!--Rooms-->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="propertyroom"
                        >Rooms</label
                      >
                      <input
                        v-model="property_room_count"
                        id="propertyroom"
                        type="number"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>

                    <!--Parking Space-->
                    <div>
                      <label
                        class="text-white dark:text-black font-medium"
                        for="parkingspace"
                        >Parking Space</label
                      >
                      <input
                        v-model="property_parking_space"
                        id="parkingspace"
                        type="number"
                        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                    </div>
                  </div>
                </section>
              </Tab>
              <Tab title="Amenities & Nearest Place">
                <section class="max-w-4xl p-6 mx-auto">
                  <div class="flex flex-wrap items-center mt-2 space-x-4">
                    <!--Amenities-->
                    <div class="mt-4 sm:mt-0">
                      <h2 class="text-2xl font-bold leading-7 text-gray-900">
                        Amenities
                      </h2>
                      <p class="mt-1 text-sm leading-6 text-gray-600">
                        We'll always let you know about important changes, but
                        you pick what else you want to hear about.
                      </p>
                      <div class="flex items-center mt-2">
                        <input
                          v-model="property_attic"
                          id="attic"
                          type="checkbox"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                        />
                        <label
                          for="attic"
                          class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                          >Attic</label
                        >
                      </div>
                      <div class="flex items-center mt-2">
                        <input
                          v-model="property_balcony"
                          id="balcony"
                          type="checkbox"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                        />
                        <label
                          for="attic"
                          class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                          >Balcony</label
                        >
                      </div>
                      <div class="flex items-center mt-2">
                        <input
                          v-model="property_deck"
                          id="deck"
                          type="checkbox"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                        />
                        <label
                          for="attic"
                          class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                          >Deck</label
                        >
                      </div>
                      <div class="flex items-center mt-2">
                        <input
                          v-model="property_fenced_yard"
                          id="fenced-yard"
                          type="checkbox"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                        />
                        <label
                          for="attic"
                          class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                          >Fenced Yard</label
                        >
                      </div>
                      <div class="flex items-center mt-2">
                        <input
                          v-model="property_fireplace"
                          id="fireplace"
                          type="checkbox"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                        />
                        <label
                          for="attic"
                          class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                          >Fireplace</label
                        >
                      </div>
                      <div class="flex items-center mt-2">
                        <input
                          v-model="property_frontyard"
                          id="frontyard"
                          type="checkbox"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                        />
                        <label
                          for="attic"
                          class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                          >Front Yard</label
                        >
                      </div>

                      <div class="flex items-center mt-2">
                        <input
                          v-model="property_gasheat"
                          id="gasheat"
                          type="checkbox"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                        />
                        <label
                          for="attic"
                          class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                          >Gas Heat</label
                        >
                      </div>

                      <div class="flex items-center mt-2">
                        <input
                          v-model="property_gym"
                          id="gym"
                          type="checkbox"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                        />
                        <label
                          for="attic"
                          class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                          >Gym</label
                        >
                      </div>

                      <div class="flex items-center mt-2">
                        <input
                          v-model="property_lakeview"
                          id="lakeview"
                          type="checkbox"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                        />
                        <label
                          for="attic"
                          class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                          >Lake View</label
                        >
                      </div>

                      <div class="flex items-center mt-2">
                        <input
                          v-model="property_pond"
                          id="pond"
                          type="checkbox"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                        />
                        <label
                          for="attic"
                          class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                          >Pond</label
                        >
                      </div>

                      <div class="flex items-center mt-2">
                        <input
                          v-model="property_pool"
                          id="pool"
                          type="checkbox"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                        />
                        <label
                          for="attic"
                          class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                          >Pool</label
                        >
                      </div>

                      <div class="flex items-center mt-2">
                        <input
                          v-model="property_recreation"
                          id="recreation"
                          type="checkbox"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                        />
                        <label
                          for="attic"
                          class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                          >Recreation</label
                        >
                      </div>

                      <div class="flex items-center mt-2">
                        <input
                          v-model="property_sprinklers"
                          id="sprinklers"
                          type="checkbox"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                        />
                        <label
                          for="attic"
                          class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                          >Sprinklers</label
                        >
                      </div>

                      <div class="flex items-center mt-2">
                        <input
                          v-model="property_storage"
                          id="storage"
                          type="checkbox"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                        />
                        <label
                          for="attic"
                          class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                          >Storage</label
                        >
                      </div>

                      <div class="flex items-center mt-2">
                        <input
                          v-model="property_washer"
                          id="washer"
                          type="checkbox"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                        />
                        <label
                          for="attic"
                          class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                          >Washer</label
                        >
                      </div>

                      <div class="flex items-center mt-2">
                        <input
                          v-model="property_winecellar"
                          id="winecellar"
                          type="checkbox"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
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
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 mt-5">
                      Nearest Places
                    </h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600">
                      We'll always let you know about important changes, but you
                      pick what else you want to hear about.
                    </p>
                    <div class="flex items-center mt-2">
                      <input
                        v-model="property_airport"
                        id="airport"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                      />
                      <label
                        for="attic"
                        class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                        >Airport</label
                      >
                    </div>
                    <div class="flex items-center mt-2">
                      <input
                        v-model="property_busstand"
                        id="bus-stand"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                      />
                      <label
                        for="attic"
                        class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                        >Bus Stand</label
                      >
                    </div>

                    <div class="flex items-center mt-2">
                      <input
                        v-model="property_hospital"
                        id="hospital"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                      />
                      <label
                        for="attic"
                        class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                        >Deck</label
                      >
                    </div>

                    <div class="flex items-center mt-2">
                      <input
                        v-model="property_patroltank"
                        id="patroltank"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                      />
                      <label
                        for="attic"
                        class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                        >Deck</label
                      >
                    </div>

                    <div class="flex items-center mt-2">
                      <input
                        v-model="property_railway"
                        id="railway"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                      />
                      <label
                        for="attic"
                        class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                        >Deck</label
                      >
                    </div>
                    <div class="flex items-center mt-2">
                      <input
                        v-model="property_shopping"
                        id="shopping"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                      />
                      <label
                        for="attic"
                        class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                        >Deck</label
                      >
                    </div>
                    <div class="flex items-center mt-2">
                      <input
                        v-model="property_universities"
                        id="universities"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                      />
                      <label
                        for="attic"
                        class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                        >Deck</label
                      >
                    </div>
                    <div class="flex items-center mt-2">
                      <input
                        v-model="property_enable"
                        id="enable"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                      />
                      <label
                        for="attic"
                        class="ml-2 text-sm font-semibold leading-6 text-gray-900"
                        >Enable</label
                      >
                    </div>
                  </div>
                </section>
              </Tab>
              <div class="flex justify-end mt-6">
                <button
                  @click="submitProperty"
                  class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 mr-4"
                  id="saveAgent"
                >
                  Save
                </button>
              </div>
            </TabsWrapper>
          </form>
        </Tab>
        <!--END OF PROPERTY FORM-->

        <!--AGENT FORM-->
        <Tab title="Add Agent">
          <h1
            class="text-[0.25rem] font-bold text-white capitalize dark:text-white"
          >
            Agent Form
          </h1>
          <form @submit.prevent>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="block text-base font-medium text-gray-900 mt-5"
                  for="agentname"
                  >Agent Name:</label
                >
                <input
                  v-model="agentData.agent_name"
                  id="agentname"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>

              <div>
                <label
                  class="block text-base font-medium text-gray-900 mt-5"
                  for="agentdesc"
                  >Description:</label
                >
                <textarea
                  v-model="agentData.agent_description"
                  id="agentdesc"
                  type="textarea"
                  class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                ></textarea>
              </div>

              <div>
                <label
                  class="block text-base font-medium text-gray-900 mt-5"
                  for="agentpos"
                  >Position</label
                >
                <input
                  v-model="agentData.agent_position"
                  id="agentpos"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>

              <div>
                <label
                  class="block text-base font-medium text-gray-900 mt-5"
                  for="agentemail"
                  >Email</label
                >
                <input
                  v-model="agentData.agent_email"
                  id="agentemail"
                  type="email"
                  class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>

              <div>
                <label
                  class="block text-base font-medium text-gray-900 mt-5"
                  for="agentaddress"
                  >Address</label
                >
                <input
                  v-model="agentData.agent_address"
                  id="agentaddress"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>

              <div>
                <label
                  class="block text-base font-medium text-gray-900 mt-5"
                  for="agentcontact"
                  >Contact</label
                >
                <input
                  v-model="agentData.agent_contact_no"
                  id="agentcontact"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>

              <div>
                <label
                  class="block text-base font-medium text-gray-900 mt-5"
                  for="agentcity"
                  >City</label
                >
                <input
                  v-model="agentData.agent_city"
                  id="agentcity"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>

              <div>
                <label
                  class="block text-base font-medium text-gray-900 mt-5"
                  for="agentcountry"
                  >Country</label
                >
                <input
                  v-model="agentData.agent_country"
                  id="agentcountry"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>

              <div>
                <label
                  class="block text-base font-medium text-gray-900 mt-5"
                  for="agentregion"
                  >Region</label
                >
                <input
                  v-model="agentData.agent_region"
                  id="agentregion"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>

              <div>
                <label
                  class="block text-base font-medium text-gray-900 mt-5"
                  for="agentusername"
                  >Username</label
                >
                <input
                  v-model="agentData.agent_username"
                  id="agentusername"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>

              <div>
                <label
                  class="block text-base font-medium text-gray-900 mt-5"
                  for="agentpassword"
                  >Password</label
                >
                <input
                  v-model="agentData.agent_password"
                  id="agentpassword"
                  type="password"
                  class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>

              <div>
                <label
                  class="block text-base font-medium text-gray-900 mt-5"
                  for="agentfb"
                  >Facebook</label
                >
                <input
                  v-model="agentData.agent_fb"
                  id="agentfb"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>

              <div>
                <label
                  class="block text-base font-medium text-gray-900 mt-5"
                  for="agentx"
                  >X(Twitter)</label
                >
                <input
                  v-model="agentData.agent_x"
                  id="agentx"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>

              <div>
                <label
                  class="block text-base font-medium text-gray-900 mt-5"
                  for="agentinsta"
                  >Instagram</label
                >
                <input
                  v-model="agentData.agent_insta"
                  id="agentinsta"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
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
            </div>
          </form>
        </Tab>
      </TabsWrapper>
    </div>
    <div class="col-span-1">
      <!--TABLES-->
      <TabsWrapper>
        <Tab title="Agents Table">
          <div class="flex justify-end mt-6 text-[8.5px]">
            <button
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2"
              id="edit"
            >
              Edit
            </button>
            <button
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2"
              id="delete"
            >
              Delete
            </button>
          </div>
          <div class="relative mx-auto">
            <table
              class="text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-[8.5px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">ID</th>
                  <th scope="col" class="px-6 py-3">Agent Name</th>
                  <th scope="col" class="px-6 py-3">Email</th>
                  <th scope="col" class="px-6 py-3">Position</th>
                  <th scope="col" class="px-6 py-3">Username</th>
                  <th scope="col" class="px-6 py-3">Contact</th>
                  <th scope="col" class="px-6 py-3">City</th>
                  <th scope="col" class="px-6 py-3">Region</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  ></th>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Tab>

        <!--Property Table-->
        <Tab title="Property Table">
          <div class="flex justify-end mb-5 text-[8.5px]">
            <button
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2"
              id="editAgent"
            >
              Edit
            </button>
            <button
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2"
              id="deleteAgent"
            >
              Delete
            </button>
          </div>
          <div class="relative mx-auto mt-[-15px]">
            <table
              class="table-auto text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-[8.5px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">ID</th>
                  <th scope="col" class="px-6 py-3">Property</th>
                  <th scope="col" class="px-6 py-3">Agent</th>
                  <th scope="col" class="px-6 py-3">Status</th>
                  <th scope="col" class="px-6 py-3">Property Type</th>
                  <th scope="col" class="px-6 py-3">Property Price</th>
                  <th scope="col" class="px-6 py-3">City</th>
                  <th scope="col" class="px-6 py-3">Category</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  ></th>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Tab>
      </TabsWrapper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";

import TabsWrapper from "../components/TabsWrapper.vue";
import Tab from "../components/Tab.vue";

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
      "https://backend-n4gs.onrender.com/api/agents/",
      agentData.value
    );
    console.log("Property data sent successfully", response.data);
    window.location.reload();
  } catch (error) {
    console.log("Error sending property data: ", error);
  }
};

const imageFile = ref(null);
const property_name = ref("");
const property_description = ref("");
const property_meta_tag_title = ref("");
const property_owner_agent = ref("");
const property_video = ref("");
const property_type = ref("");
const property_price = ref();
const property_category = ref("");
const property_country = ref("");
const property_region = ref("");
const property_city = ref("");
const property_local_area = ref("");
const property_zipcode = ref(123);
const property_area = ref(123);
const property_bedroom = ref(1);
const property_bathroom = ref(1);
const property_room_count = ref(1);
const property_parking_space = ref(2);
const property_enable = ref(1);
const property_attic = ref(1);
const property_balcony = ref(1);
const property_deck = ref(1);
const property_fenced_yard = ref(1);
const property_fireplace = ref(1);
const property_frontyard = ref(1);
const property_gasheat = ref(1);
const property_gym = ref(1);
const property_lakeview = ref(1);
const property_pond = ref(1);
const property_pool = ref(1);
const property_recreation = ref(1);
const property_sprinklers = ref(1);
const property_storage = ref(1);
const property_washer = ref(1);
const property_winecellar = ref(1);
const property_airport = ref(1);
const property_busstand = ref(1);
const property_hospital = ref(1);
const property_patroltank = ref(1);
const property_railway = ref(1);
const property_shopping = ref(1);
const property_universities = ref(1);

const handleFileChange = async (event: any) => {
  const file = (event.target.files || [])[0];
  if (file) {
    try {
      const resizedFile = await resizeImage(file);
      imageFile.value = resizedFile;
    } catch (error) {
      console.error("Error resizing image:", error);
    }
  }
};

const resizeImage = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const maxWidth = 800; // adjust the maximum width as needed
        const maxHeight = 600; // adjust the maximum height as needed
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }

        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            const resizedFile = new File([blob], file.name, {
              type: "image/jpeg",
              lastModified: Date.now(),
            });
            resolve(resizedFile);
          },
          "image/jpeg",
          0.9
        );
      };
      img.onerror = (error) => {
        reject(error);
      };
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};

const submitProperty = async () => {
  try {
    if (!imageFile.value) {
      throw { message: "Image file is required" };
    }

    const formData = new FormData();
    formData.append("property_name", property_name.value);
    formData.append("property_description", property_description.value);
    formData.append("property_meta_tag_title", property_meta_tag_title.value);
    formData.append("property_owner_agent", property_owner_agent.value);
    formData.append("property_video", property_video.value);
    formData.append("property_type", property_type.value);
    formData.append("property_price", property_price.value);
    formData.append("property_category", property_category.value);
    formData.append("property_country", property_country.value);
    formData.append("property_region", property_region.value);
    formData.append("property_city", property_city.value);
    formData.append("property_local_area", property_local_area.value);
    formData.append("property_zipcode", property_zipcode.value as any);
    formData.append("property_area", property_area.value as any);
    formData.append("property_bedroom", property_bedroom.value as any);
    formData.append("property_bathroom", property_bathroom.value as any);
    formData.append("property_room_count", property_room_count.value as any);
    formData.append(
      "property_parking_space",
      property_parking_space.value as any
    );
    formData.append("property_enable", property_enable.value as any);
    formData.append("image_data", imageFile.value as any);
    formData.append("property_attic", property_attic.value as any);
    formData.append("property_balcony", property_balcony.value as any);
    formData.append("property_deck", property_deck.value as any);
    formData.append("property_fenced_yard", property_fenced_yard.value as any);
    formData.append("property_fireplace", property_fireplace.value as any);
    formData.append("property_frontyard", property_frontyard.value as any);
    formData.append("property_gasheat", property_gasheat.value as any);
    formData.append("property_gym", property_gym.value as any);
    formData.append("property_lakeview", property_lakeview.value as any);
    formData.append("property_pond", property_pond.value as any);
    formData.append("property_pool", property_pool.value as any);
    formData.append("property_recreation", property_recreation.value as any);
    formData.append("property_sprinklers", property_sprinklers.value as any);
    formData.append("property_storage", property_storage.value as any);
    formData.append("property_washer", property_washer.value as any);
    formData.append("property_winecellar", property_winecellar.value as any);
    formData.append("property_airport", property_airport.value as any);
    formData.append("property_busstand", property_busstand.value as any);
    formData.append("property_hospital", property_hospital.value as any);
    formData.append("property_patroltank", property_patroltank.value as any);
    formData.append("property_railway", property_railway.value as any);
    formData.append("property_shopping", property_shopping.value as any);
    formData.append(
      "property_universities",
      property_universities.value as any
    );

    await axios.post(
      "https://backend-n4gs.onrender.com/api/addProperty/",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    window.location.reload();
  } catch (error: any) {
    console.error("Error uploading image:", error.message || "Unknown error");
  }
};
</script>
