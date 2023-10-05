<template>
  <div class="flex-col cursor-pointer pt-1 pb-1">
    <div>
      <div class="flex" @click="isActive = !isActive">
        <div class="flex justify-center items-center w-[12%]  mr-2">
          <ChevronUpIcon
            v-if="isActive"
            class="h-[15px] w-[15px] text-[#E67E23]"
          />
          <ChevronDownIcon v-else class="h-[15px] w-[15px] text-[#E67E23]" />
        </div>
        <div
          class="flex items-center text-[18px] font-medium text-[#E67E23] w-[88%]"
        >
          {{ title }}
        </div>
      </div>
      <hr class="border-[#E67E23]" />
      <div v-if="isActive" class="text-[#454544] font-medium pl-4 pt-2">
        <div class="flex" name="cb1" v-for="(item, index) in content" :key="index">
          <!-- if type is text -->
          <div v-if="item.type === 'text'">
            <input
              class="w-44 h-6  mb-2 border-[#454544] border focus:outline-none pl-3"
              type="text"
              name="cb1"
              id=""
              :placeholder="item.data"
            />
          </div>
          <!-- if type is radio -->
          <div v-if="item.type === 'radio'">
            <input type="radio" class="w-4 h-4 mr-2 ml-4" />{{ item.data }}
          </div>
          <!-- if type is checkbox -->
          <div v-if="item.type === 'checkbox'">
            <input
              class="w-4 h-4 mr-2 ml-4"
              type="checkbox"
              name="cb1"
              id=""
            />{{ item.data }}
          </div>
          <!-- if type is dialogbox -->
          <div v-if="item.type === 'dialog'">
            <select
              class="w-44 h-6 mr-2 mb-2 border-[#454544] border focus:outline-none pl-3"
              name=""
              id=""
            >
              <option value="">{{ item.data }}</option>
              <option value="">China</option>
              <option value="">Japan</option>
            </select>
          </div>
          <!-- if type is range -->
          <div v-if="item.type === 'range'">
            <input
              class="w-44 h-6 mr-2 mb-2 border-[#454544] pl-3"
              type="range"
              name=""
              id=""
              min="500000"
              max="20000000"
            />
          </div>
          <!-- if type is spinner -->
          <div v-if="item.type === 'spinner'" class="flex">
            <input
              class="w-12 h-6 ml-4 mr-2 mb-2 border-[#454544] border focus:outline-none pl-3"
              type="number"
              name=""
              id=""
              step="1"
              value="1"
            />
            <p>
              {{ item.data }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";

interface ContentItem {
  type: string;
  data: string;
}

defineProps({
  title: {
    type: String,
  },
  content: Array as () => ContentItem[],
});

const isActive = ref(false);
</script>
