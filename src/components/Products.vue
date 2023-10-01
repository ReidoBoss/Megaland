<!--  3 LEVEL HOUSE WITH ROOF DECK AND POOL IN VISTA GRANDE TALISAY -->
<template>
  <div class="">
    <div
      class="w-[380px] h-[460px] bg-white p-5 border-2 rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)]"
    >
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
          class="bg-[#E67E23] h-9 w-[225px] rounded-xl text-center font-medium text-[18px] hover:shadow-3xl"
        >
          Details
        </button>
      </div>
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
