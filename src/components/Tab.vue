<template>
  <div class="tabs__content max-w-screen-lg min-h-[400px] p-[30px] rounded-md shadow-md bg-white z-[2] mb-[50px] relative " v-show="isActive">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { ref, inject, computed } from 'vue';

export default {
  props: {
    title: String,
  },
  setup(props) {
    const selectedTitle = inject('selectedTitle', ref(null));

    const isActive = computed(() => props.title === selectedTitle.value);

    return {
      isActive,
    };
  },
};
</script>

<style scoped>

.tabs__content.active {
  display: block;
  color: #000;
}
</style>