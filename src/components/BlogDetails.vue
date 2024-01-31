<template>
  <div
    class="custom-sm:w-[95%] sm:w-[100%] md:w-[60%] lg:w-[60%] bg-white custom-sm:m-2 p-5 border-2 rounded-md shadow-xl"
  >
    <div class="">
      <div class="flex flex-col justify-center md:items-center mt-3">
        <div
          class="custom-sm:mb-5 custom-sm:mx-auto custom-sm:w-[300px] sm:mb-5 sm:w-[330px] md:w-[100%] lg:w-[80%] lg:ml-[-9%]"
        >
          <iframe
            class="md:w-[400px] md:h-[250px] md:mb-5 lg:w-[700px] lg:h-[390px] custom-sm:w-[300px] sm:w-[330px] custom-sm:h-[200px]"
            butttom="hidden"
            src="https://www.youtube.com/embed/8GAmyQqh_Kc?si=tFIxsWVFER6dBU2V"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div class="flex-col flex">
          <div class="font-sans">
            <div class="font-sans">
              <strong
                class="font-bold font-poppins lg:text-2xl lg:text-center"
                >{{ title }}</strong
              ><br /><br />

              <strong class="font-bold font-poppins">Location:</strong>
              {{ location }}<br /><br />

              <strong class="font-bold font-poppins">Developed By:</strong>
              {{ developer }}<br /><br />

              <strong class="font-bold font-poppins">Details:</strong>
              {{ housedetails }}<br /><br />

              <div class="whitespace-break-spaces font-poppins">
                <strong>Amenities:</strong> {{ amenities }}<br /><br />
              </div>

              <strong class="font-bold font-poppins">Broker:</strong> {{ name
              }}<br /><br />

              <strong class="font-bold mb-10 font-poppins"
                >Contact Info:</strong
              >
              {{ contact }}<br /><br />

              <strong class="font-400 font-poppins">Email Address:</strong>
              {{ email }}<br /><br />

              <strong class="font-400 font-poppins">Key Tags:</strong> {{ tags
              }}<br /><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface BlogDescriptions {
  title: string;
  location: string;
  developer: string;
  amenities: string;
  housedetails: string;
  name: string;
  contact: string;
  email: string;
  tags: string;
}
defineProps<BlogDescriptions>();
</script>
