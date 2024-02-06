<template>
  <nav aria-label="Page navigation example">
    <ul class="flex items-center -space-x-px h-10 text-base">
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </a>
      </li>

      <li v-for="item in items" :key="item">
        <a
          @click="redirect(item - 1)"
          class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >{{ item - 1 }}</a
        >
      </li>

      <li>
        <a
          href="#"
          class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="sr-only">Next</span>
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const redirect = (num: number) => {
  const newUrl = `/properties/${num}`;
  router.push(newUrl);
  window.location.href = newUrl;
};

const iterator = ref(1);
const items = ref<number[]>([]);

const fetchData = () => {
  fetch(`http://localhost:8080/api/all/${iterator.value}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      var lth = Object.keys(data.propertyDetails).length;
      if (lth !== 0) {
        iterator.value++;
        items.value.push(iterator.value);
        fetchData(); // Continue fetching if necessary
      }
    })
    .catch((error) => console.error("Error:", error));
};
fetchData();
</script>
