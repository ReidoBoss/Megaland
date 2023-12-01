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
</script>
