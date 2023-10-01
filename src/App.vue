<template>
  <div>
    <!-- Navigation Bar -->
    <NavBar />
    <!--  -->

    <div>
      <router-view></router-view>
    </div>

    <div>
      <Footer/>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

</script>
