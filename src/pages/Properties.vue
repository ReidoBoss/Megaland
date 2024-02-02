<template>
  <div class="flex text-[#E67E23] mb-2">
    <div
      class="flex md:w-[16%] pl-3 ml-3 font-poppins font-bold md:text-md lg:text-lg custom-sm:hidden sm:hidden md:hidden lg:block"
    >
      Search Filter
    </div>

    <div
      class="flex w-[84%] text-lg pl-5 font-poppins font-bold md:text-md lg:text-lg custom-sm:text-hidden sm:text-hidden custom-sm:mt-[8%]"
    >
      Properties <BuildingLibraryIcon class="h-[26px] w-[26px] ml-1" />
    </div>
  </div>
  <div>
    <div class="flex">
      <!-- Accordion -->
      <div
        class="md:hidden sm:hidden custom-sm:hidden xl:block lg:block lg:h-[700px] lg:w-[16%] flex-col overflow-auto ml-6"
      >
        <Accordion
          title="Property Type"
          :content="[
            { type: 'radio', data: 'Buy' },
            { type: 'radio', data: 'Rent' },
          ]"
        />
        <Accordion
          title="Property Category"
          :content="[
            { type: 'checkbox', data: 'Commercial' },
            { type: 'checkbox', data: 'Condo' },
            { type: 'checkbox', data: 'House' },
            { type: 'checkbox', data: 'Land' },
            { type: 'checkbox', data: 'Townhouse' },
          ]"
        />
        <Accordion
          title="Location"
          :content="[
            { type: 'text', data: 'City' },
            { type: 'text', data: 'Address' },
            { type: 'text', data: 'Neighborhood' },
            { type: 'text', data: 'Zipcode' },
            { type: 'dialog', data: 'Philippines' },
            { type: 'dialog', data: 'Cebu' },
          ]"
        />
        <Accordion
          title="Price"
          :content="[
            { type: 'text', data: '₱ _ _ _ _ _ _ _ _ _ _ _ _ ' },
            { type: 'range', data: 'Cebu' },
          ]"
        />
        <Accordion
          title="Area"
          :content="[
            { type: 'text', data: 'Square Meter ' },
            { type: 'range', data: 'Cebu' },
          ]"
        />
        <Accordion
          title="Rooms"
          :content="[
            { type: 'spinner', data: 'Bedroom' },
            { type: 'spinner', data: 'Bathroom' },
          ]"
        />
        <button
          @click="filter"
          style="
            background-color: #e67e23;
            color: white;
            padding: 10px 15px;
            border: none;
            cursor: pointer;
            border-radius: 10%;
            font-weight: bold;
            font-family: Poppins;
            font-weight: 400;
            margin-top: 10px;
          "
        >
          Filter
        </button>
      </div>
      <!-- Latest Sale -->
      <div
        class="text-yellow flex flex-wrap mt-2 h-full md:mx-auto md:w-[100%] lg:w-[84%] custom-sm:gap-3 custom-sm:mx-auto gap-y-9 md:gap-y-9 md:gap-5 justify-center custom-sm:my-6"
      >
        <div class="flex justify-center items-center custom-sm:my-5">
          <Pagination />
        </div>
        <br />
        <div
          class="flex flexbox flex-wrap custom-sm:gap-3 custom-sm:mx-auto gap-y-9 md:gap-y-9 md:gap-5 justify-evenly"
        >
          <Products
            class=""
            v-for="(property, index) in propertyData"
            :property_id="property.property_id"
            :key="index"
            :image="property.dataURL"
            :name="property.property_name"
            :price="property.property_price"
            :category="property.property_category"
            :size="property.property_area"
            :type="property.property_type"
            :bedroom="property.property_bedroom"
            :bathroom="property.property_bathroom"
            :address="property.property_local_area"
            :city="property.property_city"
            :airport="property.property_airport"
            :busstand="property.property_busstand"
            :hospital="property.property_hospital"
            :patroltank="property.property_patroltank"
            :railway="property.property_railway"
            :shopping="property.property_shopping"
            :universities="property.property_universities"
            :image_data="property.image"
          />
        </div>
        <div class="flex justify-center items-center my-10">
          <Pagination />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Accordion from "../components/Accordion.vue";
import Products from "../components/Products.vue";
import Pagination from "../components/Pagination.vue";
import { FunnelIcon, BuildingLibraryIcon } from "@heroicons/vue/24/outline";
import { onMounted, ref } from "vue";

import { useRoute } from "vue-router";
const route = useRoute();

onMounted(() => {
  fetchAllData();
  removeAllData();

});
var searched = localStorage.getItem("search");

interface Property {
  property_id: number;
  image: string;
  property_name: string;
  property_price: number;
  property_area: number;
  property_bedroom: number;
  property_bathroom: number;

  property_airport: boolean;
  property_busstand: boolean;
  property_hospital: boolean;
  property_patroltank: boolean;
  property_railway: boolean;
  property_shopping: boolean;
  property_universities: boolean;

  property_category: string;
  property_type: string;
  property_local_area: string;
  property_city: string;

  image_data: {
    type: string[];
    data: number[];
  };
  dataURL?: string; 
}


var propertyData = ref<Property[]>([]);


const findKeywordIndex = (inputString, keyword) => {
  const lowercasedInput = inputString.toLowerCase();
  const lowercasedKeyword = keyword.toLowerCase();

  const wordsInInput = lowercasedInput.split(' ');

  if (wordsInInput.some(word => word.includes(lowercasedKeyword))) {
    return 1;
  }

  return -1; 
};



const removeAllData = () => {
  propertyData.value.splice(0, propertyData.value.length);
};

const fetchAllData = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/all/${route.params.page}`);
    const data = await response.json();

    for (let i = 0; i < data.propertyDetails.length; i++) {
      propertyData.value.push(data.propertyDetails[i]);

      const imageResponse = await fetch(`http://localhost:8080/api/getPropertyImage/${propertyData.value[i].property_id}`);
      const imageData = await imageResponse.json();

        propertyData.value[i].image_data = {
          type: [],
          data: [],
        };
      

      propertyData.value[i].image_data.data = imageData[0].image_data.data;

      convertBinaryToDataURL(propertyData.value[i].image_data.data, i);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};




function convertBinaryToDataURL(binaryData: number[], index: number) {
  const blob = new Blob([new Uint8Array(binaryData)], { type: 'image/png' });
  const reader = new FileReader();

  reader.onload = () => {
    propertyData.value[index].dataURL = reader.result as string;
  };

  reader.readAsDataURL(blob);
}



</script>
