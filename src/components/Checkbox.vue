<template>
    <div class="flex items-center mt-2">
        <input id="attic" type="checkbox" class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded">
        <label for="attic" class="ml-2 text-white dark:text-gray-200">{{ amenities }}</label>
    </div>
</template>

<script setup>



defineProps({
  amenities: String

});

</script>