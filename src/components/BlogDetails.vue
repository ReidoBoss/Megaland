<template>
  <div
    class="custom-sm:w-[95%] sm:w-[100%] md:w-[60%] lg:w-[55%] lg:ml-[1%] bg-white custom-sm:m-2 p-5 border-2 rounded-md shadow-xl"
  >
    <div class="">
      <div class="flex flex-col justify-center md:items-center mt-3">
        <div
          class="custom-sm:mb-5 custom-sm:mx-auto custom-sm:w-[300px] sm:mb-5 sm:w-[330px] md:w-[100%] lg:w-[100%] mx-auto lg:ml-[-9%]"
        >
          <div class="iframe-container">
            <div v-html="iframe"></div>
          </div>
        </div>

        <div class="flex-col w-[90%]">
          <div class="font-sans lg:ml-[-3%] md:ml-[-5%]">
            <strong class="font-bold font-poppins lg:text-2xl lg:text-center">{{
              title
            }}</strong
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

            <strong class="font-bold mb-10 font-poppins">Contact Info:</strong>
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

<style>
@media (min-width: 300px) and (max-width: 400px) {
  /* CSS styles for extra custom-small screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: -4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 300px;
    height: 280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 400px) and (max-width: 640px) {
  /* CSS styles for custom-small screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: -1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 330px;
    height: 280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  /* CSS styles for small screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: -1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 350px;
    height: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  /* CSS styles for medium screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: -1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 400px;
    height: 350px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  /* CSS styles for large screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 500px;
    height: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

/* Extra-large screens */
@media (min-width: 1280px) and (max-width: 1535px) {
  /* CSS styles for extra-large screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 620px;
    height: 450px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 1536px) {
  /* CSS styles for extra-large screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 760px;
    height: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
