<template>
  <div class="relative w-full h-[1000px] bg-cover bg-center bg-custom">
    <div class="text-4xl font-bold text-center">
      <span class="font-black">Property</span>
      <span class="text-[#e67f22] font-black"> Listing </span>
      <p class="m-[1%] text-xl">
        Unlock new opportunities at MegaLand! List your property today and pave
        the way for someone else's dreams tomorrow.
      </p>
    </div>

    <div class="w-[70%] h-[850px]">
      <div class="text-lg ml-[4%] mt-[5%] text-black font-black inline-block">
        Property <span class="text-[#E67E23]">Information</span>
      </div>
      <div class="inline">
        <div class="mt-[5%] grid grid-cols-2 grid-rows-2 gap-4 w-[70%]">
          <div class="relative ml-3 mb-10 w-[50%] flex start-[30%]">
            <input
              type="text"
              id="floating_filled"
              class="w-full h-12 block rounded-md px-2.5 pb-2.5 pt-5 text-sm text-[#000000] bg-gray-50 border border-gray-400 box-border appearance-none dark:focus:border-[#E67E23] focus:outline-none focus:ring-0 focus:border-[#E67E23] peer"
              placeholder=" "
            />
            <label
              for="floating_filled"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#E67E23] peer-focus:dark:text-[#E67E23] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >First Name *</label
            >
          </div>

          <div class="relative ml-3 mb-10 w-[50%]">
            <input
              type="text"
              id="float2"
              class="w-full h-12 block rounded-md px-2.5 pb-2.5 pt-5 text-sm text-[#000000] bg-gray-50 border border-gray-400 box-border appearance-none dark:focus:border-[#E67E23] focus:outline-none focus:ring-0 focus:border-[#E67E23] peer"
              placeholder=" "
            />
            <label
              for="float2"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#E67E23] peer-focus:dark:text-[#E67E23] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >Last Name *</label
            >
          </div>

          <div>
            <div class="relative ml-3 mb-10 w-[50%] flex start-[30%]">
              <input
                type="text"
                id="floating_filled"
                class="w-full h-12 block rounded-md px-2.5 pb-2.5 pt-5 text-sm text-[#000000] bg-gray-50 border border-gray-400 box-border appearance-none dark:focus:border-[#E67E23] focus:outline-none focus:ring-0 focus:border-[#E67E23] peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#E67E23] peer-focus:dark:text-[#E67E23] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >Phone *</label
              >
            </div>
          </div>
          <div>
            <div class="relative ml-3 mb-10 w-[50%]">
              <input
                type="text"
                id="floating_filled"
                class="w-full h-12 block rounded-md px-2.5 pb-2.5 pt-5 text-sm text-[#000000] bg-gray-50 border border-gray-400 box-border appearance-none dark:focus:border-[#E67E23] focus:outline-none focus:ring-0 focus:border-[#E67E23] peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#E67E23] peer-focus:dark:text-[#E67E23] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >Email *</label
              >
            </div>
          </div>
        </div>
      </div>

      <div class="text-lg mb-[2%] ml-[5%] text-black font-black inline-block">
        Property <span class="text-[#E67E23]">Information</span>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 w-[70%]">
        <div class="relative ml-3 mb-10 w-[50%] flex start-[30%]">
          <input
            type="text"
            id="floating_filled"
            class="w-full h-12 block rounded-md px-2.5 pb-2.5 pt-5 text-sm text-[#000000] bg-gray-50 border border-gray-400 box-border appearance-none dark:focus:border-[#E67E23] focus:outline-none focus:ring-0 focus:border-[#E67E23] peer"
            placeholder=" "
          />
          <label
            for="floating_filled"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#E67E23] peer-focus:dark:text-[#E67E23] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >Property Name *</label
          >
        </div>
        <div class="relative ml-3 mb-[5%] w-[50%]">
          <select
            id="property_type"
            class="w-full h-15 block rounded-md px-2.5 pb-2.5 pt-5 text-sm text-[#000000] bg-gray-50 border border-gray-400 box-border appearance-none dark:focus:border-[#E67E23] focus:outline-none focus:ring-0 focus:border-[#E67E23] peer"
          >
            <option value="for-rent">~ Choose Type ~</option>
            <option value="for-sale">For Sale</option>
            <option value="for-rent">For Rent</option>
          </select>
          <label
            for="property_type"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#E67E23] peer-focus:dark:text-[#E67E23] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >Select Property Type</label
          >
        </div>
        <div class="relative ml-3 mb-10 w-[50%] flex start-[30%]">
          <input
            type="text"
            id="floating_filled"
            class="w-full h-12 block rounded-md px-2.5 pb-2.5 pt-5 text-sm text-[#000000] bg-gray-50 border border-gray-400 box-border appearance-none dark:focus:border-[#E67E23] focus:outline-none focus:ring-0 focus:border-[#E67E23] peer"
            placeholder=" "
          />
          <label
            for="floating_filled"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#E67E23] peer-focus:dark:text-[#E67E23] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >Property Address *</label
          >
        </div>

        <div class="relative ml-3 mb-[5%] w-[50%]">
          <select
            id="property_type"
            class="w-full h-15 block rounded-md px-2.5 pb-2.5 pt-5 text-sm text-[#000000] bg-gray-50 border border-gray-400 box-border appearance-none dark:focus:border-[#E67E23] focus:outline-none focus:ring-0 focus:border-[#E67E23] peer"
          >
            <option value="for-rent">~ Choose Category ~</option>
            <option value="for-sale">Commercial</option>
            <option value="for-rent">Condo</option>
            <option value="for-rent">House</option>
            <option value="for-rent">Land</option>
            <option value="for-rent">Townhouse</option>
          </select>
          <label
            for="property_type"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#E67E23] peer-focus:dark:text-[#E67E23] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >Select Category Type</label
          >
        </div>
        <div class="relative ml-3 mb-[5%] flex start-[10%]">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            for="multiple_files"
            >Upload File</label
          >
          <input
            class="pt-[1%] pb-[1%] ml-[1%] mb-[5%] w-[60%] block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-black focus:outline-none dark:bg-[#f2bf90] dark:border-gray-600 dark:placeholder-gray-400"
            id="multiple_files"
            type="file"
            multiple
          />
        </div>
      </div>
      <div class="relative ml-[10%] w-[70%]">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >Your message</label
        >
        <textarea
          id="message"
          rows="5"
          class="block p-2.5 w-[50%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          style="resize: none"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.bg-custom {
  background-image: url(../assets/conpic.jpg);
}
</style>
