<template>
  <div class="max-w-[1615px] w-full relative mt-15 mb-15">
    <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500" :autoplay="5000">
    <!--Slides-->
    <Slide v-for="slide in 1" :key="slide">
      <Card
        name="Ryan James"
        :image="card1"
        title = 'Managing Broker'
        desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
      />
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <Card
        name="Neil Broce"
        :image="card1"
        title = 'Managing Broker'
        desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
      />
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <Card
        name="Stephen Sagarino"
        :image="card1"
        title = 'Managing Broker'
        desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
      />
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <Card
        name="Andrian Paul"
        :image="card1"
        title = 'Managing Broker'
        desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
      />
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <Card
        name="Enrico Bacalso"
        :image="card1"
        title = 'Managing Broker'
        desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
      />
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <Card
        name="Marivil Du"
        :image="card1"
        title = 'Managing Broker'
        desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
      />
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <Card
        name="Josh Vincent Lim"
        :image="card1"
        title = 'Managing Broker'
        desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
      />
    </Slide>
  </Carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from "../components/Card.vue";
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import card1 from "../assets/card1.jpg";
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
    Card,
  },
})
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
  transform: rotateY(0) scale(1.1);
}
</style>