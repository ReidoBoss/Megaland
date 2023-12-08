<template>
  <div class="flex text-[#E67E23] mt-2">
    <div class="flex w-[16%] text-lg font-semibold pl-3">
      Search Filter <FunnelIcon class="h-[26px] w-[26px] ml-1" />
    </div>
    <div class="flex w-[84%] text-lg font-semibold pl-5">
      Properties <BuildingLibraryIcon class="h-[26px] w-[26px] ml-1" />
    </div>
  </div>
  <div>
    <div class="flex">
      <!-- Accordion -->
      <div class="h-[700px] w-[16%] flex-col overflow-auto ml-6">
        <Accordion
          title="Property Type"
          :content="[
            { type: 'radio', data: 'Buy' },
            { type: 'radio', data: 'rent' },
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
      </div>
      <!-- Latest Sale -->
      <div class="flex flex-col h-full w-[84%] ml-6 mt-2 mb-6">
        <div class="flex flexbox flex-wrap gap-8">
          <Products
          class=""
          v-for="(property, index) in propertyData"
          :key="index"
          :image="'https://storage.googleapis.com/petbacker/images/blog/2017/dog-and-cat-cover.jpg'"
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
        />
        </div>
        <div class="flex justify-center items-center mt-5">
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

onMounted(() => {
  fetchAllData();
  removeAllData();

});
var searched = localStorage.getItem("search");
console.log(searched);

interface Property {
  id: number;
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
}

var propertyData = ref<Property[]>([]);




const findKeywordIndex = (inputString, keyword) => {
  // Convert both the input string and the keyword to lowercase for case-insensitive comparison
  const lowercasedInput = inputString.toLowerCase();
  const lowercasedKeyword = keyword.toLowerCase();

  // Split the input string into individual words
  const wordsInInput = lowercasedInput.split(' ');

  // Check if any word in the input string includes the keyword
  if (wordsInInput.some(word => word.includes(lowercasedKeyword))) {
    return 1; // Return 1 if found
  }

  return -1; // Return -1 if not found
};


var propertyKeyArray: any = [];

const removeAllData = () => {
  propertyData.value.splice(0, propertyData.value.length);
};
const fetchAllData = () => {
  fetch("http://localhost:8080/api/search", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      var lth = Object.keys(data).length;
      
      for (var i = 0; i < lth; i++) {


        const temp = data[i];
        var bulldog = `${temp.property_area},${temp.property_category},${temp.property_city},${temp.property_local_area},${temp.property_name},${temp.property_price},${temp.property_type}`;
        propertyKeyArray.push(`${bulldog}`);


        const index = findKeywordIndex(propertyKeyArray[i], searched);
        if(index!=-1){
          propertyData.value.push(data[i]);
        }
        else{ 
          propertyData.value.splice(i,1);
        }

      }
    })
    .catch((error) => console.error("Error:", error));
};



</script>
