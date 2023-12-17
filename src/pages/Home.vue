<template>
  <div class="w-full h-[550px] bg-slate-400 -z-10 cursor-pointer">
    <swiper-container
      class="w-full h-[550px]"
      :cssMode="true"
      loop="true"
      :centeredSlides="true"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
      :pagination="false"
      :navigation="false"
    >
      <swiper-slide
        ><div class="flex justify-center items-center">
          <img class="w-full h-[550px]" src="../assets/swiper4.png" alt="" /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="flex justify-center items-center">
          <img class="w-full h-[550px]" src="../assets/swiper5.png" alt="" /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="flex justify-center items-center">
          <img class="w-full h-[550px]" src="../assets/swiper6.png" alt="" /></div
      ></swiper-slide>
    </swiper-container>
  </div>
  <div class="flex text-[#E67E23] mt-2">
    <div class="flex w-[16%] text-lg font-semibold pl-3">
      Search Filter <FunnelIcon class="h-[26px] w-[26px] ml-1" />
    </div>
    <div class="flex w-[84%] text-lg font-semibold pl-5">
      Latest <NewspaperIcon class="h-[26px] w-[26px] ml-1" />
    </div>
  </div>
  <div class="flex">
    <!-- Accordion -->

    <div class="h-[700px] w-[16%] flex-col overflow-auto ml-6">
      <Accordion
        title="Property Type"
        :content="[
          { type: 'radio', data: 'BUY' },
          { type: 'radio', data: 'RENT' },
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
          background-color: orange;
          color: white;
          padding: 10px 15px;
          border: none;
          cursor: pointer;
        "
      >
        Filter
      </button>
    </div>

    <!-- Latest Sale -->
    <div class="flex flex-wrap mt-2 h-full w-[84%] gap-y-9 justify-evenly">
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
        :image_data="property.image_data"
      />
    </div>
  </div>
  <!--Agents Carousel-->
  <div class="p-8">
    <div class="w-full mt-6 items-center">
      <h1
        class="mt-10 mb-14 font-black text-center text-4xl flex justify-center items-center"
      >
      OUR <span class="text-[#E67E23]">GALLERY!</span>
      </h1>
      <Agents />
    </div>
  </div>

  <div class="w-full mt-6 items-center">
    <h1 class="mt-10 mb-20 font-black text-center text-4xl">
      MEET OUR<span class="text-[#E67E23]">AGENTS !</span>
    </h1>
    <Gallery />
  </div>
</template>

<script lang="ts" setup>
import { register } from "swiper/element/bundle";
import Accordion from "../components/Accordion.vue";
import Gallery from "../components/Gallery.vue";
import Products from "../components/Products.vue";
import Agents from "../components/Agents.vue";
import {  FunnelIcon, NewspaperIcon } from "@heroicons/vue/24/outline";

import { ref, onMounted, Ref } from "vue";
register();

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

type DataParameter = any | Ref<{}>;

onMounted(() => {
  resetAllLocalStorage();
  fetchAllData();
});

const resetAllLocalStorage = () => {
  
  localStorage.setItem("property_type", "");
  localStorage.setItem("property_category", "");
  localStorage.setItem("property_type_chosen", "no");
  localStorage.setItem("property_location_chosen", "no");
  localStorage.setItem("property_category_chosen", "no");
  localStorage.setItem("property_price_chosen", "no");
  localStorage.setItem("property_area_chosen", "no");
  localStorage.setItem("property_room_chosen", "no");

  localStorage.setItem("chosenArray", JSON.stringify(null));
  localStorage.setItem("City", "");
  localStorage.setItem("Address", "");
  localStorage.setItem("Neighboorhood", "");
  localStorage.setItem("Zipcode", "");
};

const fetchAllData = () => {
  fetch("http://localhost:8080/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      var lth = Object.keys(data).length;
      for (var i = 0; i < lth; i++) {
        propertyData.value.push(data[i]);
        convertBinaryToDataURL(propertyData.value[i].image_data.data,i);
      }


      
    })
    .catch((error) => console.error("Error:", error));
};
function convertBinaryToDataURL(binaryData: number[], index: number) {
  const blob = new Blob([new Uint8Array(binaryData)], { type: 'image/png' }); 
  const reader = new FileReader();

  reader.onload = () => {
    propertyData.value[index].dataURL = reader.result as string;
  };

  reader.readAsDataURL(blob);
}

const filterPropertyType = (data?: DataParameter) => {
  var lth = Object.keys(data).length;
  var property_type = localStorage.getItem("property_type");
  for (var i = 0; i < lth; i++) {
    if (data[i].property_type == property_type) {
      propertyData.value.push(data[i]);
    }
  }
};
const filteredCategory = (data: DataParameter) => {
  var chosenCategoryArray: string[] = JSON.parse(`${localStorage.getItem("chosenArray")}`);

  var lth = Object.keys(data).length;

  for (var i = 0; i < lth; i++) {
    if (chosenCategoryArray.includes(data[i].property_category)) {
      propertyData.value.push(data[i]);
    }
  }
};


const filteredCity = (data: DataParameter) => {
  var city = localStorage.getItem("City");
  var address = localStorage.getItem("Address");
  var zipcode = localStorage.getItem("Zipcode");

  const isRef = (d: any): d is Ref<{}> => typeof d === "object" && "value" in d;

  if (isRef(data)) {

    var lth = propertyData.value.length;
    for (var i = lth - 1; i >= 0; i--) {
      var propertyCity = propertyData.value[i]?.property_city;
      var propertyAddress = propertyData.value[i]?.property_local_area;

      var CityTrue = propertyCity == city;
      var AddressTrue = propertyAddress == address;

      if (!CityTrue){
        propertyData.value.splice(i,1);
        console.log(propertyData.value[i]?.property_name, propertyData.value[i]?.property_city);

      }
  
    }

  } 
  else {
    var lth = Object.keys(data).length;

    for (var i = 0; i < lth; i++) {

      var property_city = data[i].property_city;
      var property_address = data[i].property_local_area;
      var property_zipcod = data[i].property_zipcode;

      var CityTrue = property_city == city;
      var AddressTrue = property_address == address;
      var ZipCodeTrue = property_zipcod == zipcode;

      if ((CityTrue || !city) && (AddressTrue || !address) && (ZipCodeTrue || !zipcode)) {

        propertyData.value.push(data[i]);

      }

    }
  }
};

const filteredPrice = (data: DataParameter) => {
  var priceText = "₱ _ _ _ _ _ _ _ _ _ _ _ _ ";
  var lth = Object.keys(data).length;
  var price =  parseInt(`${localStorage.getItem(priceText)}`, 10);;

  for (var i = 0; i < lth; i++) {
    var property_price = data[i].property_price;
    if(property_price>price){
      propertyData.value.push(data[i]);
    }
  }

}
const filteredArea = (data: DataParameter) => {
  var areaText = "Square Meter";
  var lth = Object.keys(data).length;
  var area =  parseInt(`${localStorage.getItem(areaText)}`, 10);;

  for (var i = 0; i < lth; i++) {
    var property_area = data[i].property_area;
    if(property_area<area){
      propertyData.value.push(data[i]);
    }
  }

}


const removeAllData = () => {
  propertyData.value.splice(0, propertyData.value.length);
};

const filter = () => {
  var chosenCategoryArray: string[] = JSON.parse(`${localStorage.getItem("chosenArray")}`);

  var propertyTypeChosen = localStorage.getItem("property_type_chosen");
  var propertyCategoryChosen = localStorage.getItem("property_category_chosen");
  var propertyLocationChosen = localStorage.getItem("property_location_chosen");
  var propertyPriceChosen = localStorage.getItem("property_price_chosen");
  var propertyAreaChosen = localStorage.getItem("property_area_chosen");
  var propertyRoomChosen = localStorage.getItem("property_room_chosen");

  //fetch
  fetch("http://localhost:8080/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      var lth = Object.keys(data).length;
      var property_type = localStorage.getItem("property_type");

      if (propertyTypeChosen === "yes" &&propertyCategoryChosen === "no" &&propertyLocationChosen === "no") {
        removeAllData();

        filterPropertyType(data);
      } 
      else if (propertyTypeChosen === "no" && propertyCategoryChosen === "yes" &&propertyLocationChosen === "no") {
        removeAllData();
        filteredCategory(data);

      } 
      else if (propertyTypeChosen === "yes" &&propertyCategoryChosen === "yes" &&propertyLocationChosen === "no") {
        removeAllData();

        for (var i = 0; i < lth; i++) {
          if (
            chosenCategoryArray.includes(data[i].property_category) &&
            property_type == data[i].property_type
          ) {
            propertyData.value.push(data[i]);
          }
        }
      } else if (propertyTypeChosen === "no" && propertyCategoryChosen === "no" &&propertyLocationChosen === "yes") 
      {
        removeAllData();
        filteredCity(data);
        console.log("yeah");

      } 
      else if (propertyTypeChosen === "yes" && propertyCategoryChosen === "no" &&propertyLocationChosen === "yes")
      {
        removeAllData();
        filterPropertyType(data);
        filteredCity(propertyData);

      } 
      else if(propertyPriceChosen=="yes"){
        removeAllData();
        filteredPrice(data);
      }
      else if(propertyAreaChosen=="yes"){
        removeAllData();
        filteredArea(data);
      }
      else if(propertyRoomChosen=="yes"){
        removeAllData();

      }
      else {
        removeAllData();
        fetchAllData();
      }
    })
    .catch((error) => console.error("Error:", error));
  // end of fetch
};
</script>
