<template>
<Transition name="modal-outer">
<div v-show="modalActive"
  class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-30 bg-black z-[9999]">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <Transition name="modal-inner">
        <!--CONTENT-->
        <div v-if="modalActive" class="relative bg-white rounded-lg shadow">
            <!-- HEADER -->
            <div class="flex flex-col items-center justify-between p-4 md:p-5 rounded-t">
                <div class="text-center">
                    <h1 class="my-3 text-4xl font-bold">Login in</h1>
                    <p class="text-sm text-coolGray-600">Sign in to access your account</p>
                </div>
                <!-- CLOSE -->
                <button class="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700 focus:outline-none" @click="$emit('close-modal')">
                    <XMarkIcon class="w-5 h-5 m-2 text-[#E67E23]"/>
                    <span class="sr-only">Close</span>
                </button>
            </div>
            <!-- BODY -->
            <div class="p-3 md:p-5">
                <form class="space-y-4" action="#"> 
                    <div>
                        <label for="email" class="block mb-2 text-base font-medium">Email Address</label>
                        <input type="email" name="email" id="email" class="w-full px-3 py-2 text-blue-800 border border-blue-300 rounded-md bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-base font-medium">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class=" w-full px-3 py-2 text-blue-800 border border-blue-300 rounded-md bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300" required />
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5 mb-2">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
                            </div>
                            <label for="remember" class="ms-2 text-sm font-medium">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-blue-700 hover:underline">Forgot Password?</a>
                    </div>
                    <button type="submit" class="w-full text-white bg-[#E67E23] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-cente">Login</button>
                </form>
            </div>
        </div>
    </Transition>
    </div>
</div> 
</Transition>
</template>

<script lang="ts" setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";

defineEmits(["close-modal"]);
defineProps({
    modalActive: {
        type: Boolean,
        default: false,
    }
});
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
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02), transform 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02), transform 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
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
