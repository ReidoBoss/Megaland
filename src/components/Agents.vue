<template>
  <div class="w-full relative mt-15 mb-15">
    <Carousel
      :itemsToShow="3.95"
      :wrapAround="true"
      :transition="500"
      :autoplay="2000"
      class="sm:carousel-items-1 md:carousel-items-2 lg:carousel-items-3 xl:carousel-items-3"
    >
      <!--Slides-->
      <Slide v-for="slide in 1" :key="slide">
        <Card
          name="Ryan James"
          :img="card1"
          title="Managing Broker"
          desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
        />
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <Card
          name="Neil Broce"
          :img="card1"
          title="Managing Broker"
          desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
        />
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <Card
          name="Stephen Sagarino"
          :img="card1"
          title="Managing Broker"
          desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
        />
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <Card
          name="Andrian Paul"
          :img="card1"
          title="Managing Broker"
          desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
        />
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <Card
          name="Enrico Bacalso"
          :img="card1"
          title="Managing Broker"
          desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
        />
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <Card
          name="Marivil Du"
          :img="card1"
          title="Managing Broker"
          desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
        />
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <Card
          name="Josh Vincent Lim"
          :img="card1"
          title="Managing Broker"
          desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
        />
      </Slide>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
import Card from "../components/Card.vue";
import { Carousel, Slide } from "vue3-carousel";
import card1 from "../assets/card1.jpg";
import "vue3-carousel/dist/carousel.css";
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
</style>
