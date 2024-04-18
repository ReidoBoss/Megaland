<template>
  <!-- Footer -->
  <div class="flex w-full bg-[#454544] p1 text-white font-serif">
    <div class="custom-sm:w-[33.33%] w-[25%] p-1 sm:w-[33.33%]">
      <div
        class="flex justify-center items-center sm:text-center custom-sm:text-md sm:text-md md:text-lg m-1 custom-sm:"
      >
        <span class="custom-sm:mt-2 mt-0">About Us</span>
      </div>
      <div class="flex-col justify-center items-center font-normal">
        <div class="flex justify-center items-center mb-2">
          <router-link class="" to="/about"
            ><img
              class="hover:scale-[1.02] custom-sm:w-[90px] custom-sm:h-[70px] custom-sm:mt-5 custom-sm:mb-2 md:h-[120px] rounded-lg"
              src="../assets/mgLogo.jpg"
              alt=""
          /></router-link>
        </div>
        <div
          class="text-center underline custom-sm:text-xs sm:text-sm md:text-md lg:text-lg italic cursor-pointer hover:text-[#E67E23]"
        >
          <router-link class="" to="/about"
            >" Begin Your Story With Us "</router-link
          >
        </div>
      </div>
    </div>
    <div
      class="custom-sm:w-[33.33%] sm:w-[33.33%] w-[25%] custom-sm:p-1 lg:p-0"
    >
      <div class="flex justify-center items-center m-1 mb-5">
        <span
          class="custom-sm:mt-2 custom-sm:text-center sm:text-center custom-sm:text-md sm:text-md md:text-lg lg:text-lg"
          >Customer Service</span
        >
      </div>
      <div
        class="custom-sm:mt-[-9px] flex justify-center items-center flex-col text-center text-base"
      >
        <div
          class="cursor-pointer mb-2 hover:text-[#E67E23] text-center custom-sm:text-sm sm:text-sm md:text-base lg:text-base"
        >
          Policy
        </div>
        <div
          class="cursor-pointer mb-2 hover:text-[#E67E23] text-center custom-sm:text-sm sm:text-sm md:text-base lg:text-base"
        >
          Team
        </div>
        <div
          class="cursor-pointer mb-2 hover:text-[#E67E23] text-center custom-sm:text-sm sm:text-sm md:text-base lg:text-base"
        >
          FAQs
        </div>
        <div
          class="cursor-pointer mb-2 hover:text-[#E67E23] text-center custom-sm:text-sm sm:text-sm md:text-base lg:text-base"
        >
          Terms and Conditions
        </div>
      </div>
    </div>
    <div class="custom-sm:w-[33.33%] sm:w-[33.33%] w-[25%]">
      <div
        class="flex justify-center items-center custom-sm:pt-3 sm:text-center custom-sm:text-md sm:text-md md:text-lg m-1 mb-5"
      >
        <span>Contact Us</span>
      </div>
      <div>
        <div
          class="text-center custom-sm:text-sm sm:text-sm md:text-base lg:text-base"
        >
          Join Us Now!
        </div>

        <div
          class="flex custom-sm:mt-[8%] custom-sm:ml-[15%] lg:ml-[35%] lg:mt-[5%] md:ml-[25%] md:mt-[5%] sm:ml-[25%] sm:mt-[5%] cursor-pointer"
        >
          <mdicon
            name="facebook"
            :width="27"
            :height="27"
            class="hover:text-orange-500 md:mr-5 lg:mr-5 custom-sm:mr-2 sm:mr-2 custom-sm:w-10px"
          />
          <mdicon
            name="instagram"
            :width="27"
            :height="27"
            class="hover:text-orange-500 md:mr-5 lg:mr-5 custom-sm:mr-2 sm:mr-2"
          />
          <mdicon
            name="twitter"
            :width="27"
            :height="27"
            class="hover:text-orange-500 md:mr-5 lg:mr-5 custom-sm:mr-2 sm:mr-2"
          />
        </div>
      </div>
    </div>
    <div class="custom-sm:hidden sm:hidden md:hidden lg:block w-[25%] p-1">
      <div
        class="flex flex-col justify-center items-center sm:text-center custom-sm:text-md sm:text-md md:text-lg lg:text-lg text-white mb-5 mr-5 ml-5"
      >
        <div>Gallery</div>
        <div
          class="flex h-[160px] w-full hover:scale-[1.02]"
          @click="toggleModal"
        >
          <div class="flex items-center justify-center w-[65%] p-1">
            <img
              class="h-[151px] border-2 border-[#fefefe]"
              src="../assets/gal1.jpg"
              alt=""
            />
          </div>
          <div class="flex flex-col w-[35%]">
            <div class="h-[50%] items-center justify-center p-1">
              <img
                class="h-[70px] border-2 border-[#fefefe]"
                src="../assets/gal2.jpg"
                alt=""
              />
            </div>
            <div class="h-[50%] items-center justify-center p-1">
              <img
                class="h-[71px] border-2 border-[#fefefe]"
                src="../assets/gal3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <GalleryModal :modalActive="modalActive" @close-modal="toggleModal">
  </GalleryModal>
</template>

<script setup>
import { ref } from "vue";
import GalleryModal from "./GalleryModal.vue";

const modalActive = ref(false);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>
