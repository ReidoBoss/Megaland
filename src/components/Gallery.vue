<template>
  <div class="xl:w-full relative">
    <Carousel
      :itemsToShow="carouselItemsToShow"
      :wrapAround="true"
      :transition="500"
      :autoplay="2000"
      class="h-full mb-[60px]"
    >
      <!--Slides-->
      <Slide v-for="(image, index) in images" :key="index">
        <Img :img="image" />
      </Slide>
      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script  setup>
import Img from "../components/Img.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref, onMounted, watch } from "vue";
const windowWidth = ref(window.innerWidth);
const carouselItemsToShow = ref(3);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

const importImages = async () => {
  const [gal1, gal2, gal3] = await Promise.all([
    import("../assets/gal1.jpg"),
    import("../assets/gal2.jpg"),
    import("../assets/gal3.jpg"),
  ]);

  return [gal1.default, gal2.default, gal3.default];
};

const images = ref([]);

onMounted(async () => {
  window.addEventListener("resize", updateWindowWidth);
  images.value = await importImages();
});

watch(windowWidth, resp);
window.removeEventListener("resize", updateWindowWidth);
window.addEventListener("resize", updateWindowWidth);
resp(window.innerWidth);
function resp(newWidth) {
  if (newWidth < 640) {
    carouselItemsToShow.value = 1;
  } else if (newWidth < 768) {
    carouselItemsToShow.value = 2;
  } else {
    carouselItemsToShow.value = 3;
  }
}
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
