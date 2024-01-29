<template>
  <div class="lg:w-full relative font-poppins custom-sm:">
    <Carousel
      :itemsToShow="carouselItemsToShow"
      :wrapAround="true"
      :transition="500"
      :autoplay="0"
      class="custom-sm:carousel-items-1 sm:carousel-items-1 md:carousel-items-2 lg:carousel-items-3 xl:carousel-items-3"
    >
      <!--Slides-->
      <Slide v-for="(agent, index) in agentData" :key="index" class="">
        <Card
          :name="agent.agent_name"
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
import { ref, onMounted, watch } from "vue";

interface Agent {
  agent_name: string;
  agent_description: string;
  agent_position: string;
}

const agentData = ref<Agent[]>([]);
const windowWidth = ref(window.innerWidth);

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
  window.addEventListener("resize", updateWindowWidth);
});
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};
const carouselItemsToShow = ref(4);

watch(windowWidth, (newWidth) => {
  if (newWidth < 640) {
    carouselItemsToShow.value = 1;
  } else if (newWidth < 768) {
    carouselItemsToShow.value = 2;
  } else {
    carouselItemsToShow.value = 3;
  }
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
