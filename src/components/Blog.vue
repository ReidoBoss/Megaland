<template>
  <div
    class="w-full mb-3 flex h-[100px] bg-white p-3 border-2 rounded-md shadow-xl hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] hover:scale-[1.02] hover:text-blue-600"
  >
    <a :href="youtubeUrl" target="_blank" class="w-full flex">
      <div class="w-[40%]">
        <img
          src="../assets/images/Youtube-Images/image1.png"
          alt="YouTube Thumbnail"
          width="130"
          height="90"
          class="rounded-md"
        />
      </div>
      <div class="w-[60%] pl-2">
        <div class="text-xs font-semibold mt-0.5 text-justify tracking-tight">{{ description }}</div>
        <div class="text-[12px] text-gray-600 font-semibold ml-1">{{'By: ' + name }}</div>
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
