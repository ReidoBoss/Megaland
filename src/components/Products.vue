<template>
  <div class="">
    <div
      class="w-[380px] h-[470px] bg-white p-5 border-2 rounded-md shadow-xl hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] hover:scale-[1.02]"
    >
      <router-link class="" to="/Details">
      <div class="">
        <img class="h-[200px] w-full" :src="image" alt="" />
      </div>
      <div class="m-1">
        <p class="text-[#454544] text-[17px] font-medium">
          {{ name }}
        </p>
      </div>
      <div>
        <p class="text-[#454544] text-[16px] font-medium">
          Price: <span class="text-[20px] text-[#E67E23]">{{ price }}</span>
        </p>
      </div>
      <div>
        <p class="text-[#454544] text-[16px] font-medium">
          Size : <span>{{ size }}</span>
        </p>
      </div>
      <div>
        <p class="text-[#454544] text-[16px] font-medium">
          Rooms : <span>{{ bedroom }} {{ bathroom }}</span>
        </p>
      </div>
      <div>
        <p class="text-[#454544] text-[16px] font-medium">
          Amenities : <span></span>
        </p>
      </div>
      <div>
        <p class="text-[#454544] text-[16px] font-medium">
          Nearest Place: <span></span>
        </p>
      </div>
      <div class="flex justify-center items-center mt-2 text-white">
        <button
          class="bg-[#E67E23] h-9 w-[210px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] rounded-xl text-center font-medium text-[18px] hover:shadow-3xl"
        >
          Details
        </button>
      </div>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface ProductType {
  name: string;
  price: string;
  size: number;
  bedroom: number;
  bathroom: number;
  image: string;
}

defineProps<ProductType>();
</script>
