<template>
  <div
    class="w-[100%] mb-3 flex h-[100px] bg-white p-3 border-2 rounded-md shadow-xl hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] hover:scale-[1.02] hover:text-blue-600"
  >
    <a :href="youtubeUrl" target="_blank" class="w-full flex">
      <div class="md:w-[40%] md:h-[50px]">
        <img
          src="src/assets/images/Youtube-Images/image1.png"
          alt="YouTube Thumbnail"
          width="130"
          height="90"
          class="rounded-md"
        />
      </div>
      <div class="w-[60%] pl-2">
        <div
          class="lg:text-[11px] md:text-[9px] font-semibold mt-0.5 text-justify tracking-tight"
        >
          {{ description }}
        </div>
        <div class="lg:text-xs md:text-[13px] text-gray-600 font-semibold ml-1">
          {{ "By: " + name }}
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup>
interface BlogType {
  description: string;
  name: string;
  youtubeUrl: string;
  thumbnailUrl: string;
}

defineProps<BlogType>();
</script>
