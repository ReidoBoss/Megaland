<template>
  <div>
    <!-- Navigation Bar -->
    <NavBar v-if="!$route.meta.hideNavAndFooter" />

    <!--  -->

    <!-- Route -->
    <div>
      <router-view />
    </div>
    <!--  -->

    <!-- Footer -->
    <div>
      <Footer v-if="!$route.meta.hideNavAndFooter" />
    </div>
    <!--  -->
  </div>
</template>

<script lang="ts" setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

const screenWidth = ref(0);
const screenHeight = ref(0);

const updateZoom = (): void => {
  screenWidth.value = window.screen.width;
  screenHeight.value = window.screen.height;

  const zoomLevel = getZoomLevel();

  // Using 'any' type to access the 'zoom' property
  (document.body.style as any).zoom = `${zoomLevel}%`;
};

const getZoomLevel = (): number => {
  if (screenWidth.value === 1920 && screenHeight.value === 1080) {
    return 125;
  } else if (screenWidth.value === 1366 && screenHeight.value === 768) {
    return 90;
  } else {
    // Reset zoom to default if not matching any criteria
    return 100;
  }
};

onMounted(() => {
  updateZoom();
  window.addEventListener("resize", updateZoom);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateZoom);
});

watch([screenWidth, screenHeight], () => {
  updateZoom();
});
</script>
