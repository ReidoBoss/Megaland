<template>
  <div
    class="w-[100%] flex flex-row mb-3 h-[100px] custom-sm:h-[150px] bg-white p-3 border-2 rounded-md shadow-xl hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] hover:scale-[1.02] hover:text-blue-600"
  >
    <button class="">
      <a target="_blank" class="flex">
        <div
          class="md:w-[100%] md:h-[100%] custom-sm:w-[100%] custom-sm:h-[100%] lg:w-[40%] lg:h-[100%] m-[-3px] custom-sm:mt-[1%]"
        >
          <img
            :src="thumbnailUrl"
            alt="YouTube Thumbnail"
            class="rounded-lg md:h-[70px] md:w-[100px] custom-sm:h-[80px] custom-sm:w-[105px] object-cover lg:h-[80px] lg:w-[300px] md:mt-1 mx-auto"
          />
        </div>
        <div class="lg:w-[60%] pl-2">
          <div
            class="lg:text-[11px] md:text-[9px] font-semibold lg:mt-[-4%] text-justify tracking-tight lg:ml-1 custom-sm:text-xs"
          >
            <!-- {{ description }} -->
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque at
            esse maxime! Cumque alias, eos minus amet
          </div>
          <div
            class="lg:text-xs md:text-[13px] text-start text-black font-bold mt-1 ml-1 custom-sm:text-xs custom-sm:ml-[-1%]"
          >
            <!-- {{ "By: " + name }} -->

            By: Cumque alias, eos
          </div>
        </div>
      </a>
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  description: String,
  name: String,
  thumbnailUrl: String,
});
</script>
