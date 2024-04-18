<template>
  <div
    class="md:w-[340px] custom-sm:w-[330px] sm:w-[300px] lg:w-[380px] lg:h-[550px] break-words relative flex flex-col justify-between space-y-1 w-[380px] h-[550px] bg-white p-5 border-2 rounded-md shadow-xl hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] hover:scale-[1.02]"
  >
    <div class="absolute transform rotate-90 left-auto -right-3 text-center">
      <BookmarkIcon class="text-[#E67E23] h-28 w-24" />
      <span
        class="text-white font-bold absolute top-[47%] left-1/2 transform -rotate-90 -translate-y-1/2 -translate-x-1/2"
        >{{ type }}</span
      >
    </div>
    <div class="">
      <div class="white">
        <img class="h-[200px] w-full" :src="image" alt="" />
      </div>
      <!-- area size, bathroom ,bedroom -->
      <div
        class="flex text-center h-9 w-full bg-slate-700 mt-2 text-white text-[16px] font-semibold p-1"
      >
        <div class="flex w-[50%]">
          <div>
            <mdicon class="" name="land-plots" :width="25" :height="25" />
          </div>
          <div class="ml-1">
            <span>Area : </span> <span>{{ size }} m<sup>2</sup> </span>
          </div>
        </div>
        <div class="flex border-white border-l w-[25%]">
          <div class="ml-5">
            <mdicon
              class=""
              name="bed-queen-outline"
              :width="25"
              :height="25"
            />
          </div>
          <div class="ml-1">
            <span>{{ bedroom }}</span>
          </div>
        </div>
        <div class="flex border-white border-l w-[25%]">
          <div class="ml-5">
            <mdicon class="" name="shower" :width="23" :height="23" />
          </div>
          <div class="ml-1">
            <span>{{ bathroom }}</span>
          </div>
        </div>
      </div>
    </div>

    <div>
      <!-- name -->
      <div class="m-1">
        <p
          class="text-[#454544] font-bold custom-sm:text-md text-center md:text-md sm:text-md lg:text-md"
        >
          {{ name }}
        </p>
      </div>
    </div>
    <div class="custom-sm:text-sm sm:text-sm">
      <div class="flex text-[#454544] font-medium">
        <p class="flex items-center w-[32%] text-[15px] m-1 font-bold">Price</p>
        <div
          class="w-[68%] custom-sm:text-sm sm:text-sm text-[#E67E23] font-bold font-poppins m-1"
        >
          <span class="text-[#454544] font-medium">:</span> ₱
          {{ price ? price.toLocaleString("en-US") : "N/A" }}
        </div>
      </div>

      <div class="flex text-[#454544] font-medium">
        <p class="flex items-center w-[32%] text-[15px] m-1 font-bold">
          Category
        </p>
        <div class="w-[68%] custom-sm:text-sm sm:text-sm m-1">
          : {{ category }}
        </div>
      </div>

      <div class="text-[#454544] font-medium flex">
        <p class="flex items-center w-[32%] text-[15px] m-1 font-bold">
          Address
        </p>
        <div class="w-[68%] custom-sm:text-sm sm:text-sm m-1">
          : {{ address + ", " + city + " City" }}
        </div>
      </div>

      <div>
        <div class="text-[#454544] text-[15px] font-medium flex">
          <div class="w-[43%] flex items-center m-1 font-bold">
            Nearest Place
          </div>
          <div class="w-[68%] flex flex-wrap gap-2 m-1">
            :
            <mdicon
              v-if="airport == true"
              class=""
              name="airport"
              :width="27"
              :height="27"
            />
            <mdicon
              v-if="busstand == true"
              class=""
              name="bus-stop"
              :width="27"
              :height="27"
            />
            <mdicon
              v-if="patroltank == true"
              class=""
              name="gas-station"
              :width="27"
              :height="27"
            />
            <mdicon
              v-if="railway == true"
              class=""
              name="train"
              :width="27"
              :height="27"
            />
            <mdicon
              v-if="shopping == true"
              class=""
              name="shopping"
              :width="27"
              :height="27"
            />
            <mdicon
              v-if="universities == true"
              class=""
              name="town-hall"
              :width="27"
              :height="27"
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex justify-center items-center text-white">
        <button
          @click="redirectDetails"
          class="bg-[#E67E23] h-9 w-full rounded-md text-white text-center font-semibold text-[20px] hover:bg-white hover:text-[#E67E23] hover:border-[#E67E23] border-[#E67E23] border-2 transition duration-300"
        >
          Details
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { BookmarkIcon } from "@heroicons/vue/24/solid";
import { useRouter } from "vue-router";

const router = useRouter();


const props = defineProps({
  property_id: Number,
  name: String,
  price: Number,
  size: Number,
  bedroom: Number,
  bathroom: Number,
  image: String,

  category: String,
  type: String,
  city: String,
  address: String,

  airport: Boolean,
  busstand: Boolean,
  hospital: Boolean,
  patroltank: Boolean,
  railway: Boolean,
  shopping: Boolean,
  universities: Boolean,

  dataURL: String,
});



const redirectDetails = () => {
  router.push(`/Details/${props.property_id}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
