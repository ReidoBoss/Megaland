<template>
  <div
    :class="{
      'max-w-sm bg-white border-gray-200 rounded-lg border-2 shadow-lg w-[370px] h-[500px] custom-sm:w-[300px] custom-sm:h-[500px] custom-sm:ml-[10%] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] hover:scale-[1.02]':
        hoverable,
      'max-w-sm bg-white border-gray-200 rounded-lg border-2 shadow-lg w-[370px] h-[500px] custom-sm:w-[320px] custom-sm:h-[480px] custom-sm:mx-auto':
        !hoverable,
    }"
  >
    <!--  -->
    <div class="flex justify-end px-4 pt-4">
      <button
        id="dropdownButton"
        data-dropdown-toggle="dropdown"
        class="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
        type="button"
      >
        <span class="sr-only">Open dropdown</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 3"
        >
          <path
            d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
          />
        </svg>
      </button>
    </div>
    <div class="flex flex-col items-center pb-10 px-10 text-center">
      <img
        class="w-32 h-32 mb-3 rounded-full shadow-lg"
        :src="image"
        alt="Agent Image"
      />
      <h5 class="mb-1 text-2xl font-medium">{{ name }}</h5>
      <span class="text-lg font-medium pt-2">{{ position }}</span>
      <p class="text-sm pt-3 tracking-wide">
        {{ truncatedDescription }}
      </p>
      <div class="flex w-1/2 mt-4 md:mt-6">
        <div
          class="bg-[#E67E23] h-9 w-full rounded-md text-white text-center font-normal text-md hover:bg-white hover:text-[#E67E23] hover:border-[#E67E23] border-[#E67E23] border-2 transition duration-300"
        >
          <button @click="redirect" class="text-center h-9 font-medium">
            View Profile
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  image: String,
  id: String,
  name: String,
  position: String,
  description: String,
  hoverable: Boolean,
});

const redirect = () => {
  router.push(`/agentProfile/${props.id}`);
};

const maxLength = 120; // Adjust as needed

const truncatedDescription =
  props.description.length > maxLength
    ? `${props.description.slice(0, maxLength)}...`
    : props.description;
</script>
