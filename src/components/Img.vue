<template>
  <div
    class="scroll-snap-start h-full w-full hover:scale-[1.02] bg-white text-center cursor-pointer mr-5 rounded-md shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
  >
    <div class="h-full w-full">
      <div class="rounded-2xl overflow-hidden relative h-full w-full">
        <img :src="img" class="h-full w-full" style="object-fit: cover" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface ProductType {
  img: string;
}

defineProps<ProductType>();
</script>
