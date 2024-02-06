<template>
  <div
    class="mw-[700px] ml-5 mr-5 mb-5 m-auto dark:bg-gray-900 p-[30px] shadow-lg rounded-lg mt-5"
  >
    <ul class="w-full flex justify-start mt-[10px]">
      <li class="w-50%">
        <a
          v-for="title in tabTitles"
          :key="title"
          @click="selectTitle(title)"
          class="text-[10px] font-semibold bg-[#343436] text-white border-none p-[18px] cursor-pointer rounded-[12px] relative"
          :class="{ active: title === selectedTitle }"
          >{{ title }}</a
        >
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { ref, provide } from "vue";

export default {
  setup(_, { slots }) {
    const tabTitles = ref(
      // @ts-ignore
      (slots.default() || [])
        .map((tab: any) => tab?.props?.title)
        .filter(Boolean) || []
    );
    const selectedTitle = ref(tabTitles.value[0]);

    provide("selectedTitle", selectedTitle);

    const selectTitle = (title: string) => {
      selectedTitle.value = title;
    };

    return {
      tabTitles,
      selectedTitle,
      selectTitle,
    };
  },
};
</script>

<style scoped>
a.active {
  background-color: white;
  border-radius: 10px;
  color: #e67e23;
}
</style>
