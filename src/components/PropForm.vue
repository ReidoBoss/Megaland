<template>
  <section
    class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20 mb-20">
    <h1 class="text-xl font-bold text-white capitalize dark:text-white">
      Property Listing Form
    </h1>
    <form @submit.prevent>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <!--Property Name-->
        <div>
          <label class="text-white dark:text-gray-200" for="propertyname"
            >Property Name:</label
          >
          <input
            v-model="propertyData.property_name"
            id="propertyname"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <!-- price -->
        <div>
          <label class="text-white dark:text-gray-200" for="propertyprice"
            >Property Price:</label
          >
          <input
            v-model="propertyData.property_price"
            id="propertyprice"
            type="number"
            step="0.01"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <!--Description-->
        <div>
          <label class="text-white dark:text-gray-200" for="propertydesc"
            >Description:</label
          >
          <textarea
            v-model="propertyData.property_description"
            id="propertydesc"
            type="textarea"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          ></textarea>
        </div>
        <!--Meta Tags-->
        <div>
          <label class="text-white dark:text-gray-200" for="metatags"
            >Meta Tags</label
          >
          <input
            v-model="propertyData.property_meta_tag_title"
            id="metatags"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <!--Agent-->
        <div>
          <label class="text-white dark:text-gray-200" for="propertyagent"
            >Agent</label
          >
          <input
            v-model="propertyData.property_owner_agent"
            id="propertyagent"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <!--Property Type-->
        <div>
          <label class="text-white dark:text-gray-200" for="propertytype"
            >Property Type</label
          >
          <select
            v-model="propertyData.property_type"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          >
            <option value="RENT">Rent</option>
            <option value="BUY">Buy</option>
          </select>
        </div>

        <!-- category -->
        <div>
          <label class="text-white dark:text-gray-200" for="propercategory"
            >Property Type</label
          >
          <select
            v-model="propertyData.property_category"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          >
            <option value="COMMERCIAL">Commercial</option>
            <option value="CONDO">Condo</option>
            <option value="HOUSE">House</option>
            <option value="LAND">Land</option>
            <option value="TOWNHOUSE">Townhouse</option>
          </select>
        </div>

        <!--Country-->
        <div>
          <label class="text-white dark:text-gray-200" for="propertycountry"
            >Country</label
          >
          <input
            v-model="propertyData.property_country"
            id="propertycountry"
            type="text"
            step="any"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <!--Region-->
        <div>
          <label class="text-white dark:text-gray-200" for="propertyregion"
            >Region</label
          >
          <input
            v-model="propertyData.property_region"
            id="propertyregion"
            type="text"
            step="any"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <!--City-->
        <div>
          <label class="text-white dark:text-gray-200" for="propertycity"
            >City</label
          >
          <input
            v-model="propertyData.property_city"
            id="propertycity"
            type="text"
            step="any"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <!-- local area -->
        <div>
          <label class="text-white dark:text-gray-200" for="propertycity"
            >Local Area</label
          >
          <input
            v-model="propertyData.property_local_area"
            id="propertyLocalArea"
            type="text"
            step="any"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <!--Zip Code-->
        <div>
          <label class="text-white dark:text-gray-200" for="zipcode"
            >Zip Code</label
          >
          <input
            v-model="propertyData.property_zipcode"
            id="zipcode"
            type="number"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <!--Property Area-->
        <div>
          <label class="text-white dark:text-gray-200" for="propertyarea"
            >Property Area</label
          >
          <input
            v-model="propertyData.property_area"
            id="propertyarea"
            type="number"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <!--Bedroom-->
        <div>
          <label class="text-white dark:text-gray-200" for="bedroom"
            >Bedroom</label
          >
          <input
            v-model="propertyData.property_bedroom"
            id="bedroom"
            type="number"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <!--Bathroom-->
        <div>
          <label class="text-white dark:text-gray-200" for="bathroom"
            >Bathroom</label
          >
          <input
            v-model="propertyData.property_bathroom"
            id="bathroom"
            type="number"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <!--Rooms-->
        <div>
          <label class="text-white dark:text-gray-200" for="propertyroom"
            >Rooms</label
          >
          <input
            v-model="propertyData.property_room_count"
            id="propertyroom"
            type="number"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <!--Parking Space-->
        <div>
          <label class="text-white dark:text-gray-200" for="parkingspace"
            >Parking Space</label
          >
          <input
            v-model="propertyData.property_parking_space"
            id="parkingspace"
            type="number"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <!--Amenities-->
        <div class="mt-4 sm:mt-0">
          <label class="block text-white dark:text-gray-200 font-medium"
            >Property Amenities</label
          >
          <div class="flex items-center mt-2">
            <input
              v-model="propertyData.property_attic"
              id="attic"
              type="checkbox"
              class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
            />
            <label for="attic" class="ml-2 text-white dark:text-gray-200"
              >Attic</label
            >
          </div>
          <div class="flex items-center mt-2">
            <input
              v-model="propertyData.property_balcony"
              id="balcony"
              type="checkbox"
              class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
            />
            <label for="balcony" class="ml-2 text-white dark:text-gray-200"
              >Balcony</label
            >
          </div>
          <div class="flex items-center mt-2">
            <input
              v-model="propertyData.property_deck"
              id="deck"
              type="checkbox"
              class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
            />
            <label for="deck" class="ml-2 text-white dark:text-gray-200"
              >Deck</label
            >
          </div>
          <div class="flex items-center mt-2">
            <input
              v-model="propertyData.property_fenced_yard"
              id="fenced-yard"
              type="checkbox"
              class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
            />
            <label for="fenced-yard" class="ml-2 text-white dark:text-gray-200"
              >Fenced Yard</label
            >
          </div>
          <div class="flex items-center mt-2">
            <input
              v-model="propertyData.property_fireplace"
              id="fireplace"
              type="checkbox"
              class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
            />
            <label for="fireplace" class="ml-2 text-white dark:text-gray-200"
              >Fireplace</label
            >
          </div>
          <div class="flex items-center mt-2">
            <input
              v-model="propertyData.property_frontyard"
              id="frontyard"
              type="checkbox"
              class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
            />
            <label for="frontyard" class="ml-2 text-white dark:text-gray-200"
              >Front Yard</label
            >
          </div>

          <div class="flex items-center mt-2">
            <input
              v-model="propertyData.property_gasheat"
              id="gasheat"
              type="checkbox"
              class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
            />
            <label for="gasheat" class="ml-2 text-white dark:text-gray-200"
              >Gas Heat</label
            >
          </div>

          <div class="flex items-center mt-2">
            <input
              v-model="propertyData.property_gym"
              id="gym"
              type="checkbox"
              class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
            />
            <label for="gym" class="ml-2 text-white dark:text-gray-200"
              >Gym</label
            >
          </div>

          <div class="flex items-center mt-2">
            <input
              v-model="propertyData.property_lakeview"
              id="lakeview"
              type="checkbox"
              class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
            />
            <label for="lakeview" class="ml-2 text-white dark:text-gray-200"
              >Lake View</label
            >
          </div>

          <div class="flex items-center mt-2">
            <input
              v-model="propertyData.property_pond"
              id="pond"
              type="checkbox"
              class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
            />
            <label for="pond" class="ml-2 text-white dark:text-gray-200"
              >Pond</label
            >
          </div>

          <div class="flex items-center mt-2">
            <input
              v-model="propertyData.property_pool"
              id="pool"
              type="checkbox"
              class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
            />
            <label for="pool" class="ml-2 text-white dark:text-gray-200"
              >Pool</label
            >
          </div>

          <div class="flex items-center mt-2">
            <input
              v-model="propertyData.property_recreation"
              id="recreation"
              type="checkbox"
              class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
            />
            <label for="recreation" class="ml-2 text-white dark:text-gray-200"
              >Recreation</label
            >
          </div>

          <div class="flex items-center mt-2">
            <input
              v-model="propertyData.property_sprinklers"
              id="sprinklers"
              type="checkbox"
              class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
            />
            <label for="sprinklers" class="ml-2 text-white dark:text-gray-200"
              >Sprinklers</label
            >
          </div>

          <div class="flex items-center mt-2">
            <input
              v-model="propertyData.property_storage"
              id="storage"
              type="checkbox"
              class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
            />
            <label for="storage" class="ml-2 text-white dark:text-gray-200"
              >Storage</label
            >
          </div>

          <div class="flex items-center mt-2">
            <input
              v-model="propertyData.property_washer"
              id="washer"
              type="checkbox"
              class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
            />
            <label for="washer" class="ml-2 text-white dark:text-gray-200"
              >Washer</label
            >
          </div>

          <div class="flex items-center mt-2">
            <input
              v-model="propertyData.property_winecellar"
              id="winecellar"
              type="checkbox"
              class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
            />
            <label for="winecellar" class="ml-2 text-white dark:text-gray-200"
              >Wine Cellar</label
            >
          </div>
        </div>
      </div>

      <!--Nearest Places-->
      <div class="ml-10 sm:mt-0">
        <label class="block text-white dark:text-gray-200 font-medium"
          >Nearest Places</label
        >
        <div class="flex items-center mt-2">
          <input
            v-model="propertyData.property_airport"
            id="airport"
            type="checkbox"
            class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
          />
          <label for="airport" class="ml-2 text-white dark:text-gray-200"
            >Airport</label
          >
        </div>
        <div class="flex items-center mt-2">
          <input
            v-model="propertyData.property_busstand"
            id="bus-stand"
            type="checkbox"
            class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
          />
          <label for="bus-stand" class="ml-2 text-white dark:text-gray-200"
            >Bus Stand</label
          >
        </div>

        <div class="flex items-center mt-2">
          <input
            v-model="propertyData.property_hospital"
            id="hospital"
            type="checkbox"
            class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
          />
          <label for="hospital" class="ml-2 text-white dark:text-gray-200"
            >Deck</label
          >
        </div>

        <div class="flex items-center mt-2">
          <input
            v-model="propertyData.property_patroltank"
            id="patroltank"
            type="checkbox"
            class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
          />
          <label for="patroltank" class="ml-2 text-white dark:text-gray-200"
            >Deck</label
          >
        </div>

        <div class="flex items-center mt-2">
          <input
            v-model="propertyData.property_railway"
            id="railway"
            type="checkbox"
            class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
          />
          <label for="railway" class="ml-2 text-white dark:text-gray-200"
            >Deck</label
          >
        </div>
        <div class="flex items-center mt-2">
          <input
            v-model="propertyData.property_shopping"
            id="shopping"
            type="checkbox"
            class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
          />
          <label for="shopping" class="ml-2 text-white dark:text-gray-200"
            >Deck</label
          >
        </div>
        <div class="flex items-center mt-2">
          <input
            v-model="propertyData.property_universities"
            id="universities"
            type="checkbox"
            class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
          />
          <label for="universities" class="ml-2 text-white dark:text-gray-200"
            >Deck</label
          >
        </div>
        <div class="flex items-center mt-2">
          <input
            v-model="propertyData.property_enable"
            id="enable"
            type="checkbox"
            class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded"
          />
          <label for="enable" class="ml-2 text-white dark:text-gray-200"
            >Enable</label
          >
        </div>
      </div>

      <!--Upload Image-->
      <div>
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
                for="propertyimage"
                class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span class="">Upload a file</span>
                <input
                  @change="handleImageUpload"
                  id="propertyimage"
                  name="propertyimage"
                  type="file"
                  class="sr-only"
                />
              </label>
              <p class="pl-1 text-white">or drag and drop</p>
            </div>
            <p class="text-xs text-white">PNG, JPG, GIF</p>
          </div>
        </div>
      </div>

      <!--Upload Video-->
      <div>
        <label class="text-white dark:text-gray-200" for="video"
          >Youtube Link:</label
        >
        <input
          v-model="propertyData.property_video"
          id="video"
          type="text"
          step="any"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        />
      </div>

      <div class="flex justify-end mt-6">
        <button
          @click="submitProperty"
          class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 mr-4"
          id="save"
        >
          Save
        </button>
        <button
          class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 mr-4"
          id="edit"
        >
          Edit
        </button>
        <button
          class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
          id="delete"
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

const propertyData = ref({
  property_name: "",
  property_description: "",
  property_meta_tag_title: "",
  property_owner_agent: "",
  property_video: "",
  property_type: "",
  property_price: "",
  property_category: "",
  property_country: "",
  property_region: "",
  property_city: "",
  property_zipcode: "",
  property_local_area: "",
  property_area: "",
  property_bedroom: "",
  property_bathroom: "",
  property_room_count: "",
  property_parking_space: "",
  property_main_image: null as File | null,
  property_attic: false,
  property_balcony: false,
  property_deck: false,
  property_fenced_yard: false,
  property_fireplace: false,
  property_frontyard: false,
  property_gasheat: false,
  property_gym: false,
  property_lakeview: false,
  property_pond: false,
  property_pool: false,
  property_recreation: false,
  property_sprinklers: false,
  property_storage: false,
  property_washer: false,
  property_winecellar: false,
  property_airport: false,
  property_busstand: false,
  property_hospital: false,
  property_patroltank: false,
  property_railway: false,
  property_shopping: false,
  property_universities: false,
  property_enable: false,
});

const handleImageUpload = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;

  if (inputElement.files && inputElement.files.length > 0) {
    const file = inputElement.files[0];

    propertyData.value.property_main_image = file;

    // const reader = new FileReader();

    // reader.onload = (e) => {
    //   const uint8Array = new Uint8Array(e.target?.result as ArrayBuffer);

      // Convert Uint8Array to a regular array of numbers
      // const byteArray = Array.from(uint8Array);

      // propertyData.value.property_main_image = btoa(
      //   String.fromCharCode.apply(null, byteArray)
      // );
    // };

    // reader.readAsArrayBuffer(file);
  }
};

const submitProperty = async () => {
  try {
    const form = new FormData();
    const keys = Object.keys(propertyData.value);

    for (const key of keys) {
      form.append(key, (propertyData.value as any)[key]);
    }

    console.log("Submit button clicked");
    console.log(propertyData.value);
    const response = await axios.post(
      "http://localhost:8080/api/properties/",
      form
    );
    console.log("Property data sent successfully", response.data);
    window.location.reload();
  } catch (error) {
    console.log("Error sending property data: ", error);
  }
};
</script>
