<template>
  <div class="max-w-[1615px] w-full relative mt-15 mb-15">
    <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500" :autoplay="5000">
    <!--Slides-->
    <Slide v-for="slide in 1" :key="slide">
      <Card
        name="Ryan James"
        :img="card1"
        title = 'Managing Broker'
        desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
      />
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <Card
        name="Neil Broce"
        :img="card1"
        title = 'Managing Broker'
        desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
      />
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <Card
        name="Stephen Sagarino"
        :img="card1"
        title = 'Managing Broker'
        desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
      />
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <Card
        name="Andrian Paul"
        :img="card1"
        title = 'Managing Broker'
        desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
      />
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <Card
        name="Enrico Bacalso"
        :img="card1"
        title = 'Managing Broker'
        desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
      />
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <Card
        name="Marivil Du"
        :img="card1"
        title = 'Managing Broker'
        desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
      />
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <Card
        name="Josh Vincent Lim"
        :img="card1"
        title = 'Managing Broker'
        desc="I am Guillerma Gekin a Real Estate Person under Megaland Realty with an office address Unit 101,148 Residences, Pelaez St. Kalubihan ,Cebu City."
      />
    </Slide>
  </Carousel>
  </div>
</template>

<script lang="ts" setup>

import Card from "../components/Card.vue";
import { Carousel, Slide } from 'vue3-carousel';
import card1 from "../assets/card1.jpg";
import 'vue3-carousel/dist/carousel.css'


</script>

<style scoped>

</style>