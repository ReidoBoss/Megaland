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
          class="lg:w-[50%] custom-sm:w-[25%] md:w-[40%] flex flex-col lg:pt-5 bg-[#E67E23] text-[#ffffff] lg:p-10 justify-center rounded-tl-xl rounded-tr-xl rounded-bl-xl"
        >
          <div class="lg:mb-10 lg:mr-3 flex">
            <div class="flex items-center mx-3">
              <mdicon
                name="instagram"
                :width="30"
                :height="30"
                class="hover:text-orange-500"
              />
            </div>
            <div class="font-poppins font-bold md:text-md">
              <div class="font-semibold">
                Unit 101,148 Residences Pelaez St. Kalubihan
              </div>
              <div class="text-gray-50">6000 Cebu City, Philippines</div>
            </div>
          </div>
          <div class="mb-10 flex">
            <div class="flex items-center mx-3">
              <mdicon
                name="instagram"
                :width="27"
                :height="27"
                class="hover:text-orange-500 md:mr-5 lg:mr-5 custom-sm:mr-2 sm:mr-2"
              />
            </div>
            <div class="">
              <div class="text-xl font-semibold">+63-977-382-4416</div>
              <div class="text-gray-50">Mon - Sat,10 Am - 6 Pm</div>
            </div>
          </div>
          <div class="mb-10 flex">
            <div class="flex items-center mx-3">
              <mdicon
                name="instagram"
                :width="27"
                :height="27"
                class="hover:text-orange-500 md:mr-5 lg:mr-5 custom-sm:mr-2 sm:mr-2"
              />
            </div>
            <div class="">
              <div class="text-xl font-semibold">
                Megalandrealtycebu@gmail.Com
              </div>
              <div class="text-gray-50">Email us your query</div>
            </div>
          </div>
        </div>
        <div class="lg:w-[50%] pt-5">
          <div class="flex">
            <div class="relative ml-3 mb-3 w-[50%]">
              <input
                type="text"
                id="floating_filled"
                class="w-full h-10 block rounded-md px-2.5 pb-2.5 pt-5 text-sm text-[#000000] bg-gray-50 border-gray-400 border box-border appearance-none dark:focus:border-[#E67E23] focus:outline-none focus:ring-0 focus:border-[#E67E23] peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#E67E23] peer-focus:dark:text-[#E67E23] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >Name*</label
              >
            </div>
            <div class="relative ml-3 mb-3 w-[50%]">
              <input
                type="text"
                id="floating_filled"
                class="w-full h-10 block rounded-md px-2.5 pb-2.5 pt-5 text-sm text-[#000000] bg-gray-50 border border-gray-400 box-border appearance-none dark:focus:border-[#E67E23] focus:outline-none focus:ring-0 focus:border-[#E67E23] peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#E67E23] peer-focus:dark:text-[#E67E23] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >Email*</label
              >
            </div>
          </div>

          <div class="relative ml-3 mb-3">
            <input
              type="text"
              id="floating_filled"
              class="w-full h-10 block rounded-md px-2.5 pb-2.5 pt-5 text-sm text-[#000000] bg-gray-50 border border-gray-400 box-border appearance-none dark:focus:border-[#E67E23] focus:outline-none focus:ring-0 focus:border-[#E67E23] peer"
              placeholder=" "
            />
            <label
              for="floating_filled"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#E67E23] peer-focus:dark:text-[#E67E23] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >Subject*</label
            >
          </div>
          <div class="relative ml-3 mb-3">
            <input
              type="text"
              id="floating_filled"
              class="w-full h-64 block rounded-md px-2.5 pb-2.5 pt-5 text-sm text-[#000000] bg-gray-50 border border-gray-400 box-border appearance-none dark:focus:border-[#E67E23] focus:outline-none focus:ring-0 focus:border-[#E67E23] peer"
              placeholder=" "
            />
            <label
              for="floating_filled"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#E67E23] peer-focus:dark:text-[#E67E23] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >Message*</label
            >
          </div>

          <div class="ml-3">
            <button
              class="bg-[#E67E23] h-9 w-full rounded-md text-white text-center font-semibold text-[20px] hover:bg-white hover:text-[#E67E23] hover:border-[#E67E23] border-[#E67E23] border-2 transition duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log("Form submitted with data:", this.formData);
      // You can send this data to an API or perform other actions as needed.
    },
  },
};
</script>
