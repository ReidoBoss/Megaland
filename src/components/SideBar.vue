<!-- Sidebar.vue -->
<template>
  <div
    v-if="isVisible"
    class="custom-sm:overflow-y-auto sm:overflow-y-auto md:overflow-y-auto fixed top-0 left-0 custom-sm:w-64 custom-sm:h-[100%] md:w-[50%] bg-[#111929] text-orange-500 p-2 z-10 lg:hidden"
  >
    <div class="flex my-2">
      <mdicon
        name="AccountCircle"
        :width="35"
        :height="35"
        class="hover:text-white"
      />
      <button
        @click="toggleSidebar"
        class="text-orange-500 custom-sm:ml-[70%] md:ml-[75%]"
      >
        <mdicon
          name="CloseCircle"
          :width="35"
          :height="35"
          class="hover:text-white"
        />
      </button>
    </div>
    <div class="border-b my-5 border-orange-500 w-[100%]"></div>
    <div>
      <div
        class="flex h-10 sticky top-11 my-5 justify-center bg-[#111929] z-10"
      >
        <div class="flex w-[80%] justify-center items-center gap-1">
          <input
            class="border-[#E67E23] text-black font-poppins font-bold rounded w-[700px] h-11 focus:outline-none hover:shadow-2xl pl-3"
            type="text"
            name=""
            id="search_bar"
            placeholder="Search..."
            :value="textInputValue"
            @keyup.enter="search"
            @input="updateTextInputValue"
            @blur="typedValue()"
          />
        </div>
      </div>
    </div>

    <!-- Sidebar content goes here -->

    <ul class="flex flex-col gap-5 justify-end hover: cursor-pointer">
      <li class="flex">
        <mdicon name="Home" :width="30" :height="30" class="hover:text-white" />
        <router-link
          class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
          to="/"
          >Home</router-link
        >
      </li>
      <li class="flex">
        <mdicon
          name="OfficeBuildingMarkerOutline"
          :width="30"
          :height="30"
          class="hover:text-white"
        />
        <router-link
          class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
          to="/properties/1"
          >Properties</router-link
        >
      </li>
      <li class="flex">
        <mdicon
          name="NewspaperVariantMultipleOutline"
          :width="30"
          :height="30"
          class="hover:text-white"
        />
        <router-link
          class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
          to="/PropertyNews"
          >Property News</router-link
        >
      </li>
      <div class="hover-bg-color-orange-500">
        <li class="flex">
          <mdicon
            name="AccountGroupOutline"
            :width="30"
            :height="30"
            class="hover:text-white"
          />
          <router-link
            class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
            to="/about"
            >About Us</router-link
          >
        </li>
      </div>

      <li class="flex">
        <mdicon
          name="PhoneCheckOutline"
          :width="30"
          :height="30"
          class="hover:text-white"
        />
        <router-link
          class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
          to="/contact"
          >Contact Us</router-link
        >
      </li>
      <li class="flex">
        <mdicon
          name="ClipboardListOutline"
          :width="30"
          :height="30"
          class="hover:text-white"
        />
        <router-link
          class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
          to="/listProperty"
          >Property Listing</router-link
        >
      </li>
      <li class="flex">
        <mdicon
          name="LogoutVariant"
          :width="30"
          :height="30"
          class="hover:text-white"
        />
        <router-link
          class="hover-underline text-white font-poppins font-bold custom-sm:mt-1 sm:mt-1 sm:ml-4 custom-sm:ml-4"
          to="/properties/1"
          >Logout</router-link
        >
      </li>
    </ul>
    <div class="border-b my-5 border-orange-500 w-[100%]"></div>
    <div
      class="lg:h-[700px] lg:w-[16%] flex-col overflow-auto font-poppins font-bold"
    >
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
        class="my-5 ml-2 rounded-lg"
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
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted, Ref } from "vue";
import { register } from "swiper/element/bundle";
import Accordion from "../components/Accordion.vue";
const props = defineProps(["isVisible", "toggleSidebar"]);

import router from "../router";
import { useRoute } from "vue-router";
register();
const route = useRoute();

const data = ref({
  textInputValue: "",
});
const updateTextInputValue = (event: InputEvent) => {
  const inputElement = event.target as HTMLInputElement;
  data.value.textInputValue = inputElement.value;
};

const typedValue = () => {
  var textValue = data.value.textInputValue;
  localStorage.setItem("search", `${textValue}`);
};

const search = () => {
  var textValue = data.value.textInputValue;
  var currentPath = route.fullPath;

  if (currentPath == "/search") {
    localStorage.setItem("search", `${textValue}`);
    location.reload();
  } else {
    router.push("/search");
  }
};

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
        convertBinaryToDataURL(propertyData.value[i].image_data.data, i);
      }
    })
    .catch((error) => console.error("Error:", error));
};
function convertBinaryToDataURL(binaryData: number[], index: number) {
  const blob = new Blob([new Uint8Array(binaryData)], { type: "image/png" });
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
  var chosenCategoryArray: string[] = JSON.parse(
    `${localStorage.getItem("chosenArray")}`
  );

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

      if (!CityTrue) {
        propertyData.value.splice(i, 1);
        console.log(
          propertyData.value[i]?.property_name,
          propertyData.value[i]?.property_city
        );
      }
    }
  } else {
    var lth = Object.keys(data).length;

    for (var i = 0; i < lth; i++) {
      var property_city = data[i].property_city;
      var property_address = data[i].property_local_area;
      var property_zipcod = data[i].property_zipcode;

      var CityTrue = property_city == city;
      var AddressTrue = property_address == address;
      var ZipCodeTrue = property_zipcod == zipcode;

      if (
        (CityTrue || !city) &&
        (AddressTrue || !address) &&
        (ZipCodeTrue || !zipcode)
      ) {
        propertyData.value.push(data[i]);
      }
    }
  }
};

const filteredPrice = (data: DataParameter) => {
  var priceText = "₱ _ _ _ _ _ _ _ _ _ _ _ _ ";
  var lth = Object.keys(data).length;
  var price = parseInt(`${localStorage.getItem(priceText)}`, 10);

  for (var i = 0; i < lth; i++) {
    var property_price = data[i].property_price;
    if (property_price > price) {
      propertyData.value.push(data[i]);
    }
  }
};
const filteredArea = (data: DataParameter) => {
  var areaText = "Square Meter";
  var lth = Object.keys(data).length;
  var area = parseInt(`${localStorage.getItem(areaText)}`, 10);

  for (var i = 0; i < lth; i++) {
    var property_area = data[i].property_area;
    if (property_area < area) {
      propertyData.value.push(data[i]);
    }
  }
};

const removeAllData = () => {
  propertyData.value.splice(0, propertyData.value.length);
};

const filter = () => {
  var chosenCategoryArray: string[] = JSON.parse(
    `${localStorage.getItem("chosenArray")}`
  );

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

      if (
        propertyTypeChosen === "yes" &&
        propertyCategoryChosen === "no" &&
        propertyLocationChosen === "no"
      ) {
        removeAllData();

        filterPropertyType(data);
      } else if (
        propertyTypeChosen === "no" &&
        propertyCategoryChosen === "yes" &&
        propertyLocationChosen === "no"
      ) {
        removeAllData();
        filteredCategory(data);
      } else if (
        propertyTypeChosen === "yes" &&
        propertyCategoryChosen === "yes" &&
        propertyLocationChosen === "no"
      ) {
        removeAllData();

        for (var i = 0; i < lth; i++) {
          if (
            chosenCategoryArray.includes(data[i].property_category) &&
            property_type == data[i].property_type
          ) {
            propertyData.value.push(data[i]);
          }
        }
      } else if (
        propertyTypeChosen === "no" &&
        propertyCategoryChosen === "no" &&
        propertyLocationChosen === "yes"
      ) {
        removeAllData();
        filteredCity(data);
        console.log("yeah");
      } else if (
        propertyTypeChosen === "yes" &&
        propertyCategoryChosen === "no" &&
        propertyLocationChosen === "yes"
      ) {
        removeAllData();
        filterPropertyType(data);
        filteredCity(propertyData);
      } else if (propertyPriceChosen == "yes") {
        removeAllData();
        filteredPrice(data);
      } else if (propertyAreaChosen == "yes") {
        removeAllData();
        filteredArea(data);
      } else if (propertyRoomChosen == "yes") {
        removeAllData();
      } else {
        removeAllData();
        fetchAllData();
      }
    })
    .catch((error) => console.error("Error:", error));
  // end of fetch
};
</script>
