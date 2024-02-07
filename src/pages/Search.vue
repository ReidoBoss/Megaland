<template>
  <!-- Check if propertyData is empty -->
  <div
    v-if="propertyData.length === 0"
    style="text-align: center; margin-top: 20vh; color: #ffa500"
  >
    <p style="font-size: 80px; width: 60%; margin: 0 auto">
      No products available for <br />"{{ searched }}"
    </p>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
  <!-- Render products if propertyData is not empty -->
  <div class="flex flex-wrap mt-2 h-full w-[100%] gap-y-9 justify-evenly">
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
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Products from "../components/Products.vue";

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

const findKeywordIndex = (inputString: string, keyword: string) => {
  // Convert both the input string and the keyword to lowercase for case-insensitive comparison
  const lowercasedInput = inputString.toLowerCase();
  const lowercasedKeyword = keyword.toLowerCase();

  // Split the input string into individual words
  const wordsInInput = lowercasedInput.split(" ");

  // Check if any word in the input string includes the keyword
  if (wordsInInput.some((word) => word.includes(lowercasedKeyword))) {
    return 1; // Return 1 if found
  }

  return -1; // Return -1 if not found
};

var propertyKeyArray: any = [];

const removeAllData = () => {
  propertyData.value.splice(0, propertyData.value.length);
};
const fetchAllData = () => {
  fetch("https://backend-n4gs.onrender.com/api/search", {
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

        const index = findKeywordIndex(propertyKeyArray[i], searched ?? "");
        if (index != -1) {
          propertyData.value.push(data[i]);
        } else {
          propertyData.value.splice(i, 1);
        }
      }
    })
    .catch((error) => console.error("Error:", error));
};
</script>
