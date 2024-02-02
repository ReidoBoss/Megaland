<template>
  <div class="text-[#454544] overflow-hidden">
    <!-- Property Name -->

    <div
      class="custom-sm:w-[90%] mx-auto border-2 shadow-xl rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70) md:mb-[8%] lg:mb-[5%]"
    >
      <div
        class="text-center my-5 font-poppins font-bold md:text-md lg:text-2xl md:mt-[3%] md:mx-[3%]"
      >
        {{ property.property_name }}
      </div>
      <div
        class="flex justify-center items-center lg:mb-[1%] md:w-[80%] md:ml-[10%] md:my-[3%]"
      >
        <img :src="property.dataURL" alt="" />
      </div>
      <div
        class="my-3 text-center font-poppins font-bold md:text-md lg:text-2xl lg:pb-[3%] md:pb-[3%]"
      >
        Price:
        <span class="text-[#E67E23] font-bold md:text-md lg:text-2xl ml-3">
          ₱
          {{
            property.property_price
              ? property.property_price.toLocaleString("en-US")
              : "N/A"
          }}
        </span>
      </div>
    </div>
    <!-- Property Description -->

    <!-- Property Address -->

    <!-- Details -->
  </div>
</template>
<script lang="ts" setup>
interface PropType {
  property: any;
}

defineProps<PropType>();
</script>
