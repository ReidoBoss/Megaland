<script lang="ts" setup>
import FloatingLabels from "../components/FloatingLabels.vue";
import MegalandHouse from "../components/MegalandHouse.vue";
</script>

<template>
  <div>
    <MegalandHouse
      add="Property "
      properties="Listing"
      quote="Unlock new opportunities at MegaLand! List your property today and pave the way for someone else's dreams tomorrow."
    />
    <div class="w-[80%]">
      <FloatingLabels input1="First Name" input2="Last Name" />
    </div>
  </div>
</template>
