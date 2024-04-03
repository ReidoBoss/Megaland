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
        <div
          class="flex justify-center items-center custom-sm:my-5 custom-sm:w-[20%]"
        >
          <Pagination
            :postCount="postCount"
            :currentPage="currentPage"
            :totalPage="totalPage"
            :pages="pages"
            :next="next"
            :previous="previous"
            :changePage="changePage"
          />
        </div>
        <br />
        <div class="flex flex-wrap justify-evenly gap-y-9 md:gap-y-5 lg:gap-x-9">
          <Loading
          v-if="properties.length === 0"
          />
          <Products
            v-for="(property, index) in properties"
            :key="index"
            :property_id="property.property_id"
            :image="property.imageUrl || ''"
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
        <div class="flex justify-center items-center my-10">
          <Pagination
            :postCount="postCount"
            :currentPage="currentPage"
            :totalPage="totalPage"
            :pages="pages"
            :next="next"
            :previous="previous"
            :changePage="changePage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Accordion from "../components/Accordion.vue";
import Products from "../components/Products.vue";
import Pagination from "../components/Pagination.vue";
import Loading from "../components/Loading.vue";
import { BuildingLibraryIcon } from "@heroicons/vue/24/outline";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

onMounted(() => {
  getPostCount();
  landingPage();
});

const properties = ref([]);




const getProperties = async (index,loopCount) =>{

  properties.value= [];
  

  const response = await fetch("http://localhost:8080/getAllPropertyID");
  const data = await response.json();
  for (var i = index; i < index + loopCount; i++) {
    try {
      const response = await fetch ('http://localhost:8080/getAllPropertyID');
      const data = await response.json();

      var id = data[i].property_id;
      const propertyGenData = await general_data(id);
      const propertyData = await property_data(id);
      const propertyAddress = await property_address(id);
      const propertyLandmark = await property_landmark(id);
      const propertyImage = await property_image(id);
      const imageData = propertyImage[0].main_image.data;

      properties.value.push({
        property_id: id,
        property_name: propertyGenData[0].name,
        imageUrl: await convertBlob(imageData),

        property_price: propertyData[0].property_price,
        property_category: propertyData[0].category,
        property_type: propertyData[0].property_type.toUpperCase(),
        property_area: propertyAddress[0].property_area,
        property_bedroom: propertyAddress[0].bedroom,
        property_bathroom: propertyAddress[0].bathroom,
        property_local_area: propertyAddress[0].local_area,
        property_city: propertyAddress[0].city,

        property_airport: propertyLandmark[0].airport ? 1 : 0,
        property_busstand: propertyLandmark[0].bus_stand ? 1 : 0,
        property_hospital: propertyLandmark[0].hospital ? 1 : 0,
        property_patroltank: propertyLandmark[0].patroltank ? 1 : 0,
        property_railway: propertyLandmark[0].railway ? 1 : 0,
        property_shopping: propertyLandmark[0].shopping ? 1 : 0,
        property_universities: propertyLandmark[0].universities ? 1 : 0,
      });
    } catch (error) {
      console.error("Error processing property:", error);
    }
  }
};

const general_data = async (i) => {
  try {
    const response = await fetch(`http://localhost:8080/getGeneralData/${i}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
const property_image = async (i) => {
  try {
    const response = await fetch(`http://localhost:8080/getPropertyImage/${i}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
const property_data = async (i) => {
  try {
    const response = await fetch(`http://localhost:8080/getPropertyData/${i}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
const property_address = async (i) => {
  try {
    const response = await fetch(
      `http://localhost:8080/getPropertyAddress/${i}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

const property_landmark = async (i) => {
  try {
    const response = await fetch(
      `http://localhost:8080/getPropertyLandMark/${i}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

const convertBlob = (image) => {
  return new Promise((resolve, reject) => {
    if (image) {
      const blob = new Blob([new Uint8Array(image)], { type: "image/jpeg" });
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const dataURL = reader.result;
        resolve(dataURL);
      };
    }
  });
};

//------------------------ Start Pagination ------------------------

const postCount = ref(0);
const currentPage = ref(1);
const totalPage = ref(0);
const pages = ref([]);

const getPostCount = async () => {
  const response = await fetch(`http://localhost:8080/getAllPropertyID`);
  const data = await response.json();

  totalPage.value = Math.ceil(data.length / 9);
  for (var i = 1; i <= totalPage.value; i++) {
    pages.value.push({
      i: i,
    });
  }
};

const totalPostVal = ref();
const totalPost = async () => {
  totalPostVal.value = 0;
  const response = await fetch(`http://localhost:8080/getAllPropertyID`);
  const data = await response.json();
  for (var i = 0; i < data.length; i++) {
    totalPostVal.value++;
  }
  return totalPostVal.value;
};

const changePage = async (i) => {
  currentPage.value = i;
  const postCount = await totalPost();

  var temp = currentPage.value * 9;
  temp = temp - postCount;
  let loopCount = 9 - temp;
  if (loopCount > 9) {
    loopCount = 9;
  }
  var loopIndex = (currentPage.value - 1) * 9 + 1;
  getProperties(loopIndex - 1, loopCount);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const next = () => {
  if (currentPage.value != totalPage.value) {
    currentPage.value++;
  }
  var i = currentPage.value;
  changePage(i);
};
const previous = () => {
  if (currentPage.value != 1) {
    currentPage.value--;
  }
  var i = currentPage.value;
  changePage(i);
};

const landingPage = () => {
  currentPage.value = 1;
  var i = currentPage.value;
  changePage(i);
};

//------------------------ End Pagination ------------------------
</script>
