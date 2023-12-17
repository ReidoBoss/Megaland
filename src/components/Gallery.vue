<template>
    <div class="w-full relative ">
     <Carousel :itemsToShow="3" :wrapAround="true" :transition="500" :autoplay="5000" class="h-full mb-[60px]">
     <!--Slides-->
     <Slide v-for="slide in 1" :key="slide">
       <Img
       :img="gal1"
       />
     </Slide>
     <Slide v-for="slide in 1" :key="slide">
       <Img
       :img="gal2"
       />
     </Slide>
     <Slide v-for="slide in 1" :key="slide">
       <Img
       :img="gal3"
       />
     </Slide>
     <template #addons>
       <Pagination />
       <Navigation/>
     </template>
   </Carousel>
  
  
   
  </div>
   
  </template>
  
  <script lang="ts" setup>
  
  import Img from "../components/Img.vue";
  import { Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';
  import gal1 from "../assets/gal1.jpg";
  import gal2 from "../assets/gal2.jpg";
  import gal3 from "../assets/gal3.jpg";
  import 'vue3-carousel/dist/carousel.css';
  
  </script>
  <style>
  .carousel__slide {
    padding: 10px;
  }
  
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    font-size: 100px;
    color: gray;
  }
  </style>