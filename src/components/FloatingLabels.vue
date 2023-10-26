<template>
  <div class="flex justify-center mt-[10%]">
    <div class="w-[55%]">
      <form class="grid grid-cols-2">
        <div class="">
          <div class="relative flex"></div>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface ListProperties {
  input1: string;
  input2: string;
}
defineProps<ListProperties>();
</script>
