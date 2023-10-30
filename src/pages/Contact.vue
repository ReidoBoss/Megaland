<template>
  <div class="pl-32 pr-32 pb-10">
    <div class="">
      <div class="">
        <iframe
          class="border-2 border-black"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.5483668762135!2d123.89617127595324!3d10.29792626783563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999a0c575cff7%3A0x76271c50dbf0b3b2!2sMegaland%20Realty!5e0!3m2!1sen!2sph!4v1697273626082!5m2!1sen!2sph"
          width="100%"
          height="500"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="flex mt-10 shadow-2xl bg-gray-100 rounded-xl p-5">
        <div
          class="w-[50%] flex flex-col pt-5 bg-[#E67E23] text-[#ffffff] p-10 justify-center rounded-tl-xl rounded-tr-xl rounded-bl-xl"
        >
          <div class="mb-10 mr-3 flex">
            <div class="flex items-center mr-8">
              <HomeIcon class="w-[35px] h-[35px] text-[#ffffff]" />
            </div>
            <div class="">
              <div class="text-xl font-semibold">
                Unit 101,148 Residences Pelaez St. Kalubihan
              </div>
              <div class="text-gray-50">6000 Cebu City, Philippines</div>
            </div>
          </div>
          <div class="mb-10 mr-3 flex">
            <div class="flex items-center mr-8">
              <PhoneIcon class="w-[35px] h-[35px] text-[#ffffff]" />
            </div>
            <div class="">
              <div class="text-xl font-semibold">+63-977-382-4416</div>
              <div class="text-gray-50">Mon - Sat,10 Am - 6 Pm</div>
            </div>
          </div>
          <div class="mb-10 mr-3 flex">
            <div class="flex items-center mr-8">
              <EnvelopeIcon class="w-[35px] h-[35px] text-[#ffffff]" />
            </div>
            <div class="">
              <div class="text-xl font-semibold">
                Megalandrealtycebu@gmail.Com
              </div>
              <div class="text-gray-50">Email us your query</div>
            </div>
          </div>
        </div>
        <ContactInfo
          name="Full Name *"
          phone="Phone Number *"
          email="Email Address *"
          message="Message *"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ContactInfo from "../components/FloatingLabels.vue";
</script>

<style scoped>
.bg-custom {
  background-image: url(../assets/conpic.jpg);
}
.box-shadow-custom {
  box-shadow: 0 0 10px #e67f22;
}
.box-shadow-custom:hover {
  box-shadow: none;
}

input,
textarea {
  @apply w-full;
}
</style>
