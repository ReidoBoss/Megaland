<template>
  <div class="p-3">
    <div class="flex text-[#E67E23] font">
      <div
        class="flex w-[16%] font-poppins font-bold text-lg pl-3 custom-sm:hidden sm:hidden md:hidden lg:block"
      >
        Search Filter
      </div>

      <div
        class="custom-sm:hidden sm:hidden md:block lg:block md:my-[1%] font-poppins font-bold flex md:w-[60%] lg:w-[60%] custom-sm:w-[50%] sm:w-[50%] lg:text-2xl md:text-lg"
      >
        Details
      </div>
      <div
        class="md:my-[1%] custom-sm:my-[2%] font-poppins font-bold flex md:w-[25%] lg:w-[25%] custom-sm:w-[50%] sm:w-[50%] lg:text-2xl md:text-lg"
      >
        Contact Agent <UserIcon class="h-[26px] w-[26px] ml-1" />
      </div>
    </div>
    <div class="flex text-[#E67E23] lg:mt-2">
      <div
        class="h-[700px] w-[16%] flex-col overflow-auto custom-sm:hidden sm:hidden md:hidden lg:block"
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
      </div>

      <div
        class="lg:w-[55%] md:w-[60%] custom-sm:w-[100%] sm:w-[100%] custom-sm:my-[2%] flex-col lg:ml-6"
      >
        <div class="custom-sm:block sm:block md:hidden lg:hidden">
          <BlogOwner />
        </div>
        <div
          class="lg:w-[90%] md:w-[100%] custom-sm:w-[100%] sm:w-[100%] custom-sm:my-[6%] flex-col lg:ml-6"
        >
          <ProductInfo :property="property" />
        </div>
        <div
          class="lg:w-[90%] md:w-[100%] custom-sm:w-[100%] sm:w-[100%] custom-sm:my-[6%] flex-col lg:ml-6"
        >
          <ProductDetails :property="property" />
        </div>
      </div>

      <div
        class="custom-sm:hidden sm:hidden md:block lg:block lg:h-[900px] lg:w-[24%] md:w-[50%] md:h-[440px] flex-col lg:ml-6 md:ml-2"
      >
        <!--Blog Owner -->
        <BlogOwner />
      </div>
    </div>
    <div
      class="custom-sm:w-[90%] custom-sm: mx-auto md:mb-5 lg:mb-5 md:mt-10 lg:mt-10 md:mx-1 md:w-[90%] md:h-[50%] lg:mx-auto"
    >
      <div
        class="my-3 custom-sm:-ml-3 sm:-ml-3 flex w-[16%] text-lg font-semibold pl-3 text-[#E67E23] font-poppins font-bold"
      >
        Location <MapIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <div
        class="custom-sm:w-[100%] shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)"
      >
        <iframe
          class="custom-sm:w-[100%] border-2 border-black lg:w-[100%] lg:h-[600px] md:w-[100%] md:h-[500px] md:mx-5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.5483668762135!2d123.89617127595324!3d10.29792626783563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999a0c575cff7%3A0x76271c50dbf0b3b2!2sMegaland%20Realty!5e0!3m2!1sen!2sph!4v1697273626082!5m2!1sen!2sph"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div>
      <div
        class="font-poppins font-bold lg:text-2xl md:text-lg mt-10 lg:ml-[12%] flex lg:w-[16%] md:w-[50%] pl-3 text-[#E67E23]"
      >
        Related Property <ChatBubbleLeftIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <div
        class="flex flex-wrap mt-2 h-full md:mx-auto md:w-[100%] lg:w-[84%] custom-sm:gap-3 custom-sm:mx-auto gap-y-9 md:gap-y-9 md:gap-5 justify-evenly"
      >
        <Products
          :image="swiper1"
          name="3 LEVEL HOUSE WITH ROOF DECK AND POOL IN VISTA GRANDE TALISAY"
          :price="48000000"
          :size="769"
          :bedroom="7"
          :bathroom="7"
        />
        <Products
          :image="swiper2"
          name="2-Storey House & Lot For Sale White Hills Subdivision-Banawa"
          :price="12500000"
          :size="200"
          :bedroom="6"
          :bathroom="3"
        />
        <Products
          :image="swiper3"
          name="4 Bedrooms House and Lot for Sale at Kishanta Subdivision"
          :price="12500000"
          :size="150"
          :bedroom="4"
          :bathroom="2"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Accordion from "../components/Accordion.vue";
import {
  UserIcon,
  MapIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/vue/24/outline";
import ProductDetails from "../components/ProductDetails.vue";
import swiper1 from "../assets/swiper1.jpg";
import swiper2 from "../assets/swiper2.jpg";
import swiper3 from "../assets/swiper3.jpg";
import Products from "../components/Products.vue";
import BlogOwner from "../components/BlogOwner.vue";

import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
interface propertyType {
  id: number;
  name: string;
  price: number;
  description: string;
  address: string;
  city: string;
  zip: number;
  country: string;
  bedroom: number;
  bathroom: number;
  area: number;
  parking: number;
  category: string;
  type: string;

  attic: boolean;
  balcony: boolean;
  deck: boolean;
  fence: boolean;
  fireplace: boolean;
  frontyard: boolean;
  gasheat: boolean;
  gym: boolean;
  lakeview: boolean;
  pond: boolean;
  pool: boolean;
  recreation: boolean;
  sprinklers: boolean;
  storage: boolean;
  washer: boolean;
  winecellar: boolean;

  image_data: {
    type: string[];
    data: number[];
  };
  dataURL?: string;
}

const property = ref<propertyType>({
  id: 0,
  name: "",
  price: 0,
  description: "",
  address: "",
  city: "",
  zip: 0,
  country: "",
  bedroom: 0,
  bathroom: 0,
  area: 0,
  parking: 0,
  category: "",
  type: "",

  attic: false,
  balcony: false,
  deck: false,
  fence: false,
  fireplace: false,
  frontyard: false,
  gasheat: false,
  gym: false,
  lakeview: false,
  pond: false,
  pool: false,
  recreation: false,
  sprinklers: false,
  storage: false,
  washer: false,
  winecellar: false,
  image_data: { type: [], data: [] },
  dataURL: "",
});

// fetch(`http://localhost:8080/api/getPropertyDetails/${route.params.id}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       property.value = data[0];
//       console.log(property.value)
//       convertBinaryToDataURL(property.value.image_data.data,0);
//     })
//     .catch((error) => console.error("Error:", error));

const fetchAllData = async () => {
  try {
    const detailsResponse = await fetch(
      `http://localhost:8080/api/getPropertyDetails/${route.params.id}`
    );
    const detailsData = await detailsResponse.json();
    property.value = detailsData[0];

    const imageResponse = await fetch(
      `http://localhost:8080/api/getPropertyImage/${route.params.id}`
    );
    const imageData = await imageResponse.json();

    property.value.image_data = {
      type: [],
      data: [],
    };
    console.log(property.value.image_data);

    property.value.image_data.data = imageData[0].image_data.data;
    console.log(property.value.image_data.data);

    convertBinaryToDataURL(property.value.image_data.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
fetchAllData();

// const fetchAllData = async () => {
//   try {
//     const response = await fetch(
//       `http://localhost:8080/api/getPropertyDetails/${route.params.id}`
//     );
//     const data = await response.json();
//     console.log(data);

//     for (let i = 0; i < data.propertyDetails.length; i++) {
//       propertyData.value.push(data.propertyDetails[i]);

//       const imageResponse = await fetch(
//         `http://localhost:8080/api/getPropertyImage/${route.params.page}`
//       );
//       const imageData = await imageResponse.json();

//       propertyData.value[i].image_data = {
//         type: [],
//         data: [],
//       };

//       propertyData.value[i].image_data.data = imageData[0].image_data.data;

//       convertBinaryToDataURL(propertyData.value[i].image_data.data, i);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

function convertBinaryToDataURL(binaryData: number[]) {
  const blob = new Blob([new Uint8Array(binaryData)], { type: "image/png" });
  const reader = new FileReader();

  reader.onload = () => {
    property.value.dataURL = reader.result as string;
  };

  reader.readAsDataURL(blob);
}

// function convertBinaryToDataURL(binaryData: number[]) {
//   const blob = new Blob([new Uint8Array(binaryData)], { type: 'image/png' });
//   const reader = new FileReader();
//   console.log(reader);
//   reader.onload = () => {
//     property.value.dataURL = reader.result as string;
//   };

//   reader.readAsDataURL(blob);
// }
</script>
