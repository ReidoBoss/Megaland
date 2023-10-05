<template>
  <div>
    <!-- Navigation Bar -->
    <NavBar />
    <!--  -->

    <!-- Route -->
    <div>
      <router-view/>
    </div>
    <!--  -->

    <!-- Footer -->
    <div>
      <Footer/>
    </div>
    <!--  -->
  </div>
</template>

<script lang="ts" setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>
