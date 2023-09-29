<template>
  <div class="">
    <div class="">
      <div class="flex justify-end " @click="isActive = !isActive" >
        <div class="">{{title}}</div>
        <div class="">{{isActive? '-':'+'}}</div>
      </div>
      <div v-if="isActive" class="accordion-content">
        <p v-for="(item, index) in content" :key="index">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue';

  export default {
    props: {
      title: String,
      content: Array,
    },
    setup(props) {
      const isActive = ref(false);

      return {
        isActive,
        title: props.title,
        content: props.content,
      };
    },
};
</script>
