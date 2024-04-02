<template>
  <div
    class="custom-sm:w-[95%] sm:w-[100%] md:w-[60%] lg:w-[60%] bg-white custom-sm:m-2 p-5 border-2 rounded-md shadow-xl"
  >
    <div class="">
      <div class="flex flex-col justify-center md:items-center mt-3">
        <div
          class="custom-sm:mb-5 custom-sm:mx-auto custom-sm:w-[300px] sm:mb-5 sm:w-[330px] md:w-[100%] lg:w-[100%] mx-auto lg:ml-[-9%]"
        >
          <div class="" v-html="iframe"></div>
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
              {{ details }}<br /><br />
              <div class="whitespace-break-spaces font-poppins">
                <strong>Description:</strong> {{ description }}<br /><br />
              </div>

              <div class="whitespace-break-spaces font-poppins">
                <strong>Amenities:</strong>
                <div v-for="(amenity, index) in amenities" :key="index">
                  <div v-if="!amenity == ''">⭐{{ amenity }}</div>
                </div>
                <br /><br />
              </div>

              <div class="whitespace-break-spaces font-poppins">
                <strong>Landmarks:</strong>
                <div v-for="(landmark, index) in landmarks" :key="index">
                  <div v-if="!landmark == ''">⭐{{ landmark }}</div>
                </div>
                <br /><br />
              </div>

              <div class="whitespace-break-spaces font-poppins">
                <strong>Highlight:</strong>
                <div v-for="(highlight, index) in highlights" :key="index">
                  <div v-if="!highlight == ''">⭐{{ highlight }}</div>
                </div>
                <br /><br />
              </div>

              <strong class="font-bold font-poppins">Broker:</strong> {{ broker
              }}<br /><br />

              <strong class="font-bold mb-10 font-poppins"
                >Contact Info:</strong
              >
              ☎️{{ contact_phone }}☎️{{ contact_telephone }}<br /><br />

              <strong class="font-400 font-poppins">Email Address:</strong>
              {{ email_address }}<br /><br />

              <strong class="font-400 font-poppins">Key Tags:</strong>
              {{ key_tags }}<br /><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  iframe: String,
  developer: String,
  description: String,
  title: String,
  location: String,
  amenities: Array,
  landmarks: Array,
  highlights: Array,
  details: String,
  broker: String,
  contact_phone: String,
  contact_telephone: String,
  email_address: String,
  key_tags: String,
});
</script>
