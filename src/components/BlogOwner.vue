<template>
  <div
    class="lg:ml-[-11%] custom-sm:mx-auto sm:mx-auto custom-sm:w-[100%] sm:h-[335px] border-2 lg:p-5 shadow-xl md:w-[100%] lg:w-[100%] md:h-[380px] lg:h-[440px] rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)"
  >
    <div
      class="my-[5%] custom-sm:w-[40%] custom-sm:h-[40%] custom-sm:mx-auto relative lg:w-48 md:w-40 mx-auto -z-30"
    >
      <img
        :src="profile_picture"
        alt="img"
        class="lg:w-48 lg:h-48 md:w-35 custom-sm:w-51 md:h-30 border-4 border-white rounded-full object-cover relative z-10"
      />
      <div
        class="absolute inset-0 border-4 border-purple-700 rounded-full z-0"
      ></div>
    </div>
    <div class="lg:mt-7 md:mt-3 text-center text-[#454544]">
      <div class="text-center font-bold font-poppins lg:text-2xl md:text-lg">
        {{ name }}
      </div>
      <div class="font-medium font-poppins">{{property_number}} properties</div>
      <div class="flex justify-center items-center mt-5 text-white">
        <button
        @click="redirect"
          class="custom-sm:px-[4%] bg-[#E67E23] h-9 lg:w-[225px] md:w-[200px] rounded-md text-white text-center font-semibold text-[20px] hover:bg-white hover:text-[#E67E23] hover:border-[#E67E23] border-[#E67E23] border-2 transition duration-300"
        >
          Contact
        </button>
      </div>
      <div class="my-5 mx-auto">
        <div class="flex justify-center items-center">
          <a :href="facebook">          
            <mdicon
            name="facebook"
            :width="30"
            :height="30"
            class="hover:text-orange-500 mr-5"
            />
         </a>
         <a :href="instagram">          

          <mdicon
            name="instagram"
            :width="30"
            :height="30"
            class="hover:text-orange-500 mr-5"
          />
          </a>
          <a :href="twitter">          

          <mdicon
            name="twitter"
            :width="30"
            :height="30"
            class="hover:text-orange-500 mr-5"
          />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router"
const router=useRouter();

const props = defineProps({
id:String,
profile_picture: String,
name: String,
property_number : String,
facebook : String,
twitter: String,
instagram: String

});

const redirect =  () => {
  router.push(`/agentProfile/${props.id}`);
}

</script>
