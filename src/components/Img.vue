<template>
  <div
    class="scroll-snap-start h-full w-full hover:scale-[1.02] bg-white text-center cursor-pointer mr-5 rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition-shadow duration-300 ease-in-out hover:shadow-4-strong"
  >
    <div class="h-full w-full">
      <div class="rounded-2xl overflow-hidden relative h-full w-full">
        <img :src="img" class="h-auto rounded-lg object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
img: String
});

</script>
