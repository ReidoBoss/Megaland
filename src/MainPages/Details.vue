<template>
  <div class="p-3">
    <div class="flex text-[#E67E23] font">
      <div
        class="flex w-[16%] font-poppins font-bold text-lg pl-3 custom-sm:hidden sm:hidden md:hidden lg:block"
      >
        Search Filter
      </div>

      <div
        class="lg:ml-[7%] custom-sm:hidden sm:hidden md:block lg:block md:my-[1%] font-poppins font-bold flex md:w-[60%] lg:w-[60%] custom-sm:w-[50%] sm:w-[50%] lg:text-2xl md:text-lg"
      >
        Details
      </div>
      <div
        class="lg:ml-[3%] custom-sm:hidden sm:hidden md:hidden lg:block md:my-[1%] custom-sm:my-[2%] font-poppins font-bold flex md:w-[25%] lg:w-[25%] custom-sm:w-[50%] sm:w-[50%] lg:text-2xl md:text-lg"
      >
        Contact Agent
      </div>
    </div>
    <div class="flex lg:mt-2">
      <div
        class="h-[700px] w-[20%] flex-col overflow-auto custom-sm:hidden sm:hidden md:hidden lg:block"
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
        class="lg:w-[60%] md:w-[95%] mx-auto custom-sm:w-[100%] sm:w-[100%] custom-sm:my-[2%] flex-col lg:mt-[-1.8%]"
      >
        <div class="custom-sm:block sm:block md:block lg:hidden">
          <BlogOwner
            :id="agent_id"
            :name="agent_name"
            :property_number="agent_numberOfProperty"
            :profile_picture="agent_profile"
            :facebook="agent_fb"
            :instagram="agent_instagram"
            :twitter="agent_x"
          />
        </div>
        <div
          class="lg:w-[90%] md:w-[100%] custom-sm:w-[100%] sm:w-[100%] custom-sm:my-[6%] flex-col lg:ml-6 mt-[3%]"
        ></div>
        <div
          class="lg:w-[90%] md:w-[100%] custom-sm:w-[100%] sm:w-[100%] custom-sm:my-[6%] flex-col lg:ml-6"
        >
          <ProductDetails
            :name="name"
            :property_price="property_price"
            :local_area="local_area"
            :description="description"
            :city="city"
            :country="country"
            :zipcode="zipcode"
            :bedroom="bedroom"
            :bathroom="bathroom"
            :property_area="property_area"
            :parking_space="parking_space"
            :attic="attic"
            :balcony="balcony"
            :deck="deck"
            :fenced_yard="fenced_yard"
            :frontyard="frontyard"
            :gasheat="gasheat"
            :gym="gym"
            :lake_view="lake_view"
            :pond="pond"
            :pool="pool"
            :recreation="recreation"
            :sprinklers="sprinklers"
            :storage="storage"
            :washer="washer"
            :wine_cellar="wine_cellar"
            :airport="airport"
            :bus_stand="bus_stand"
            :hospital="hospital"
            :patroltank="patroltank"
            :railway="railway"
            :shopping="shopping"
            :universities="universities"
            :others="others"
            :main_image="main_image"
            :extra1="extra1"
            :extra2="extra2"
            :extra3="extra3"
          />
        </div>
      </div>

      <div
        class="custom-sm:hidden sm:hidden md:hidden lg:block lg:h-[900px] lg:w-[20%] md:w-[50%] md:h-[440px] flex-col md:ml-2"
      >
        <!--Blog Owner -->
        <BlogOwner
          :profile_picture="agent_profile"
          :name="agent_name"
          :property_number="agent_numberOfProperty"
        />
      </div>
    </div>
    <div
      class="custom-sm:w-[90%] custom-sm: mx-auto md:mb-5 lg:mb-5 md:mt-10 lg:mt-10 md:mx-1 md:w-[90%] md:h-[50%] lg:mx-auto"
    >
      <div
        class="custom-sm:-ml-3 sm:-ml-3 flex w-[16%] text-xl lg:ml-[5%] text-[#E67E23] font-poppins font-bold"
      >
        Location <MapIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <!-- dynamic iframe fetched from db-->
      <div
        class="custom-sm:w-[100%] rounded-md mx-auto flex items-center justify-center"
      >
        <div v-html="iframeSrc"></div>
      </div>
    </div>
    <div>
      <div
        class="font-poppins font-bold lg:text-xl md:text-lg mt-10 lg:ml-[9%] lg:w-[16%] md:w-[50%] pl-3 text-[#E67E23] flex flex-row my-5"
      >
        Related Property
        <span><ChatBubbleLeftIcon class="h-[26px] w-[26px] ml-1" /></span>
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

<script setup>
import Accordion from "../components/Accordion.vue";
import { MapIcon, ChatBubbleLeftIcon } from "@heroicons/vue/24/outline";
import ProductDetails from "../components/ProductDetails.vue";
import swiper1 from "../assets/swiper1.jpg";
import swiper2 from "../assets/swiper2.jpg";
import swiper3 from "../assets/swiper3.jpg";
import Products from "../components/Products.vue";
import BlogOwner from "../components/BlogOwner.vue";

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

onMounted(() => {
  get_property_details();
});

const route = useRoute();

const id = route.params.id;
const name = ref("");
const property_price = ref("");
const local_area = ref("");
const description = ref("");
const city = ref("");
const country = ref("");
const zipcode = ref("");
const bedroom = ref("");
const bathroom = ref("");
const property_area = ref("");
const parking_space = ref("");
const attic = ref(0);
const balcony = ref(0);
const deck = ref(0);
const fenced_yard = ref(0);
const frontyard = ref(0);
const gasheat = ref(0);
const gym = ref(0);
const lake_view = ref(0);
const pond = ref(0);
const pool = ref(0);
const recreation = ref(0);
const sprinklers = ref(0);
const storage = ref(0);
const washer = ref(0);
const wine_cellar = ref(0);
const airport = ref("");
const bus_stand = ref("");
const hospital = ref("");
const patroltank = ref("");
const railway = ref("");
const shopping = ref("");
const universities = ref("");
const others = ref("");

const main_image = ref(null);
const extra1 = ref(null);
const extra2 = ref(null);
const extra3 = ref(null);

const iframeSrc = ref();

const agent_id = ref();
const agent_profile = ref(null);
const agent_name = ref();
const agent_numberOfProperty = ref();
const agent_fb = ref();
const agent_instagram = ref();
const agent_x = ref();

const get_property_details = async () => {
  try {
    const general = await general_data(id);
    const property_data = await propertyData(id);
    const image = await property_image(id);
    const address = await property_address(id);
    const amenities = await property_amenities(id);
    const landmark = await property_landmark(id);

    const mainImage = image[0].main_image.data;
    const extra_image1 = image[0].extra1.data;
    const extra_image2 = image[0].extra2.data;
    const extra_image3 = image[0].extra3.data;
    name.value = general[0].name;

    property_price.value = property_data[0].property_price;
    local_area.value = address[0].local_area;
    description.value = general[0].description;
    city.value = address[0].city;
    country.value = address[0].country;
    zipcode.value = address[0].zipcode;
    bedroom.value = address[0].bedroom;
    bathroom.value = address[0].bathroom;
    property_area.value = address[0].property_area;
    parking_space.value = address[0].parking_space;

    attic.value = amenities[0].attic;
    balcony.value = amenities[0].balcony;
    deck.value = amenities[0].deck;
    fenced_yard.value = amenities[0].fenced_yard;
    frontyard.value = amenities[0].frontyard;
    gasheat.value = amenities[0].gasheat;
    gym.value = amenities[0].gym;
    lake_view.value = amenities[0].lake_view;
    pond.value = amenities[0].pond;
    pool.value = amenities[0].pool;
    recreation.value = amenities[0].recreation;
    sprinklers.value = amenities[0].sprinklers;
    storage.value = amenities[0].storage;
    washer.value = amenities[0].washer;
    wine_cellar.value = amenities[0].wine_cellar;

    airport.value = landmark[0].airport;
    bus_stand.value = landmark[0].bus_stand;
    hospital.value = landmark[0].hospital;
    patroltank.value = landmark[0].patroltank;
    railway.value = landmark[0].railway;
    shopping.value = landmark[0].shopping;
    universities.value = landmark[0].universities;
    others.value = landmark[0].others;

    iframeSrc.value = property_data[0].iframe;

    main_image.value = await convert(mainImage);
    extra1.value = await convert(extra_image1);
    extra2.value = await convert(extra_image2);
    extra3.value = await convert(extra_image3);

    agent_id.value = property_data[0].agent_id;
    console.log(agent_id.value);
    var agentData = await get_agent_details(agent_id.value);
    var agentUserID = agentData[0].user_id;
    agent_fb.value = agentData[0].facebook;
    agent_instagram.value = agentData[0].instagram;
    agent_x.value = agentData[0].x;
    console.log(agent_fb.value);

    agent_name.value = agentData[0].agent_name;
    agent_numberOfProperty.value = agentData[0].total_property;
    var agentImage = agentData[0].profile_picture.data;
    agent_profile.value = await convert(agentImage);
  } catch (error) {
    console.log("Error: ", error);
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
const propertyData = async (i) => {
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

const property_amenities = async (i) => {
  try {
    const response = await fetch(
      `http://localhost:8080/getPropertyAmenities/${i}`
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

const get_agent_details = async (id) => {
  const response = await fetch(`http://localhost:8080/getAgentByID/${id}`);
  const data = await response.json();
  return data;
};
const get_agent_profile = async (id) => {
  const response = await fetch(`http://localhost:8080/getUserImage/${id}`);
  const data = await response.json();
  return data;
};

const convert = (image) => {
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
</script>
