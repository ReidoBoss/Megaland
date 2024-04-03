<template>
  <div
    class="flex items-center justify-center lg:gap-4 md:gap-4 custom-sm:gap-0 custom-sm:ml-[-4%] custom-sm:w-[90%]"
  >
    <button
      :disabled="currentPage == 1"
      class="flex custom-sm:active:w-[80%] custom-sm:text-xs items-center gap-2 lg:px-6 md:px-6 custom-sm:px-4 py-3 text-sm font-bold text-center text-orange-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-orange-100 active:bg-orange-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      @click="previous()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        ></path>
      </svg>
      Previous
    </button>
    <div class="flex items-center gap-2">
      <button
        @click="changePage(page.i)"
        v-for="(page, index) in pages"
        :key="index"
        :i="page.i"
        :class="{
          'relative h-10 max-h-[40px] w-10 max-w-[40px] custom-sm:w-[40%] select-none rounded-lg bg-orange-500 text-center align-middle text-sm font-bold uppercase text-white shadow-md shadow-orange-100 transition-all hover:shadow-lg hover:shadow-orange-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none':
            page.i === currentPage,
          'relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle text-sm font-bold uppercase text-gray-900 transition-all hover:bg-orange-100 active:bg-orange-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none':
            page.i !== currentPage,
        }"
        type="button"
      >
        <span
          class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          {{ page.i }}
        </span>
      </button>
    </div>
    <button
      :disabled="currentPage === totalPage"
      class="flex custom-sm:text-xs items-center gap-2 px-6 py-3 text-sm font-bold text-center text-orange-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-orange-100 active:bg-orange-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      @click="next()"
    >
      Next
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
defineProps({
  postCount: Number,
  currentPage: Number,
  totalPage: Number,
  pages: Array,
  next: Function,
  previous: Function,
  changePage: Function,
});
</script>
