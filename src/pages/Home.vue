<template>
  <div class="w-full h-[550px] bg-slate-400 ">
    <swiper-container class="w-full h-[550px]" speed="500" loop="true" css-mode="true" Navigation="true" pagination="true">
      <swiper-slide ><div class="flex justify-center items-center"><img class=" max-w-[100%] h-[550px]"  src="../assets/swiper1.jpg" alt="" /></div></swiper-slide>
      <swiper-slide><div class="flex justify-center items-center"><img class=" max-w-[100%] h-[550px]"  src="../assets/swiper3.jpg" alt="" /></div></swiper-slide>
      <swiper-slide><div class="flex justify-center items-center"><img class=" max-w-[100%] h-[550px]"  src="../assets/swiper2.jpg" alt="" /></div></swiper-slide>
    </swiper-container>
  </div>

  <div class="flex">
        <div class="bg-red-600 h-full w-[23%]">
            <Accordion title="Properties" :content="['cscssd 0','cdssdddc 1']"/>
            <Accordion title="Properties" :content="['ssd 0','gdhgff 1']"/>
        </div>
        <div class="bg-blue-600 h-full w-[77%]">
           Ari ang featured sales
        </div>
        
  </div>
</template>

<script lang="ts" setup>
import { register } from "swiper/element/bundle";
import Accordion from "../components/Accordion.vue";
register();
</script>
