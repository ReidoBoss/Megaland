<template>
  <div class="w-full relative mt-15 mb-15 justify-evenly gap-y-9">
    <Carousel
      :itemsToShow="3.95"
      :wrapAround="true"
      :transition="500"
      :autoplay="2000"
      class="sm:carousel-items-1 md:carousel-items-2 lg:carousel-items-3 xl:carousel-items-3"
    >
      <!--Slides-->
      <Slide v-for="(agent, index) in agentData" :key="index">
        <Card
          :name= "agent.agent_name"
          :img="card1"
          :title="agent.agent_position"
          :desc="agent.agent_description"
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

import { ref, onMounted } from "vue";

interface Agent {
  agent_name: string;
  agent_description: string;
  agent_position: string;
}

const agentData = ref<Agent[]>([]);

onMounted(() => {
  fetch("http://localhost:8080/api/getAgents", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => (agentData.value = data))
    .catch((error) => console.error("Error:", error));
});
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
