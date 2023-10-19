<template>
    <div class="inline-flex rounded-md shadow-sm" role="group">
      <button
        type="button"
        class="px-4 py-2 text-lg font-medium text-[#E67E23] flex items-center bg-transparent border border-[#E67E23] rounded-l-lg hover:bg-[#E67E23] hover:text-white focus:z-10 focus:ring-2 focus:ring-[#E67E23] focus:bg-[#E67E23] focus:text-white dark:border-[#E67E23] dark:text-[#E67E23] dark:hover:text-white dark:hover:bg-[#E67E23] dark:focus:bg-[#E67E23] dark:focus:text-white"
      >
        <UserGroupIcon class="w-6 h-6 mr-2" /> Meet The Team
      </button>
      <button
        type="button"
        class="px-4 py-2 text-lg font-medium text-[#E67E23] flex items-center bg-transparent border-t border-b border-[#E67E23] hover:bg-[#E67E23] hover:text-white focus:z-10 focus:ring-2 focus:ring-[#E67E23] focus:bg-[#E67E23] focus:text-white dark:border-[#E67E23] dark:text-[#E67E23] dark:hover:text-white dark:hover:bg-[#E67E23] dark:focus:bg-[#E67E23] dark:focus:text-white"
      >
        <ChatBubbleBottomCenterIcon class="w-6 h-6 mr-2" /> Testimonials
      </button>
      <button
        type="button"
        class="px-4 py-2 text-lg font-medium text-[#E67E23] flex items-center bg-transparent border border-[#E67E23] rounded-r-md hover:bg-[#E67E23] hover:text-white focus:z-10 focus:ring-2 focus:ring-[#E67E23] focus:bg-[#E67E23] focus:text-white dark:border-[#E67E23] dark:text-[#E67E23] dark:hover:text-white dark:hover:bg-[#E67E23] dark:focus:bg-[#E67E23] dark:focus:text-white"
      >
        <PhoneIcon class="w-6 h-6 mr-2" /> Contact Us
      </button>
    </div>
  </template>
  
  
<script lang="ts" setup>
import { UserGroupIcon, ChatBubbleBottomCenterIcon, PhoneIcon} from "@heroicons/vue/24/outline";
</script>
