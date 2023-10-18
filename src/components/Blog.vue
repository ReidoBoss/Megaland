<template>
  <div
    class="w-full mb-3 flex h-[100px] bg-white p-3 border-2 rounded-md shadow-xl hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] hover:scale-[1.02]"
  >
    <div class="w-[30%]  ">
      <iframe
        width="100"
        height="73"
        src="https://www.youtube.com/embed/8aRor905cCw?si=_vzKNVgvDo8pWbdKmodestbranding=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="rounded-md"
      ></iframe>
    </div>
    <div class="w-[70%] pl-2 ">
        <div class="text-xs font-semibold  mt-0.5 ml-1 tracking-wide text-justify">{{description}}</div>
        <div class="text-[12px] mt-1 text-gray-600 font-semibold ml-1" >{{'By: '+ name}}</div>
    </div>  
  </div>
</template>
<script lang="ts" setup>
interface BlogType {
  description: string;
  name: string;
}
defineProps<BlogType>();
</script>
