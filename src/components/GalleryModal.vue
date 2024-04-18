<template>
  <Transition name="modal-outer">
    <div
      v-show="modalActive"
      class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-30 bg-black z-[9999]"
      @click.self="$emit('close-modal')"
    >
      <div class="relative p-4 w-full max-w-screen-lg" @click.stop>
        <Transition name="modal-inner">
          <!--CONTENT-->
          <div v-if="modalActive" class="relative">
            <!-- HEADER -->
            <div
              class="flex w-full h-full items-center justify-between p-4 md:p-5 rounded-t"
            >
              <!-- CLOSE -->
              <button
                class="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700 focus:outline-none"
                @click="$emit('close-modal')"
              >
                <span class="sr-only">Close</span>
              </button>
            </div>
            <!-- BODY -->
            <swiper-container
              class="w-full h-[600px]"
              :cssMode="true"
              loop="true"
              centeredSlides="true"
              :autoplay="{ delay: 3500, disableOnInteraction: false }"
              pagination="false"
              navigation="false"
            >
              <!-- swiper-slide content -->

              <swiper-container
                class="w-full custom-sm:h-[280px]"
                :cssMode="true"
                loop="true"
                :centeredSlides="true"
                :autoplay="{ delay: 3500, disableOnInteraction: false }"
                pagination="true"
                navigation="true"
              >
                <swiper-slide>
                  <img
                    class="w-full custom-sm:h-[230px] sm:h-[250px] md:h-[350px] lg:h-[550px] h-full object-cover"
                    src="../assets/gal1.jpg"
                    alt=""
                  />
                  ></swiper-slide
                >
                <swiper-slide>
                  <img
                    class="w-full custom-sm:h-[230px] sm:h-[250px] md:h-[350px] lg:h-[550px] h-full object-cover"
                    src="../assets/gal2.jpg"
                    alt=""
                  />
                  ></swiper-slide
                >
                <swiper-slide>
                  <img
                    class="w-full custom-sm:h-[230px] sm:h-[250px] md:h-[350px] lg:h-[550px] h-full object-cover"
                    src="../assets/gal3.jpg"
                    alt=""
                  />
                  ></swiper-slide
                >
              </swiper-container>
            </swiper-container>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<script  setup>
defineEmits(["close-modal"]);
defineProps({
  modalActive: Boolean
})

</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02),
    transform 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02),
    transform 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
