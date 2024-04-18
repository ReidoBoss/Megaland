<template>
  <div
    class="lg:w-[100%] flex items-center justify-center my-[5%] md:w-[80%] md:mx-auto"
  >
    <div class="">
      <div class="">
        <iframe
          class="border-2 border-black custom-sm:w-[90%] sm:w-[90%] sm:h-[300px] custom-sm:h-[300px] mx-auto md:w-[100%] md:h-[500px] lg:w-[100%]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.5483668762135!2d123.89617127595324!3d10.29792626783563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999a0c575cff7%3A0x76271c50dbf0b3b2!2sMegaland%20Realty!5e0!3m2!1sen!2sph!4v1697273626082!5m2!1sen!2sph"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="">
        <div
          class="flex mt-10 shadow-2xl bg-gray-100 rounded-xl p-5 custom-sm:flex custom-sm:flex-col custom-sm:w-[90%] sm:w-[90%] md:w-[100%] custom-sm:mx-auto sm:mx-auto"
        >
          <div
            class="lg:w-[50%] custom-sm:w-[100%] sm:w-[50%] custom-sm:h-[250px] md:w-[50%] flex flex-col lg:pt-5 bg-[#E67E23] text-[#ffffff] lg:p-10 justify-center rounded-3xl"
          >
            <div class="lg:mb-10 lg:mr-3 flex custom-sm:mt-[10%]">
              <div class="flex items-center mx-3">
                <mdicon
                  name="map-marker"
                  :width="30"
                  :height="30"
                  class="hover:text-orange-500"
                />
              </div>
              <div
                class="font-poppins font-bold md:text-md sm:text-sm custom-sm:text-xs"
              >
                <div class="font-semibold">
                  Unit 101,148 Residences Pelaez St. Kalubihan
                </div>
                <div class="text-gray-50">6000 Cebu City, Philippines</div>
              </div>
            </div>
            <div
              class="lg:mb-10 lg:mr-3 flex md:my-[10%] sm:my-[10%] custom-sm:my-[10%] lg:my-[0%]"
            >
              <div class="flex items-center ml-3">
                <mdicon
                  name="phone"
                  :width="30"
                  :height="30"
                  class="hover:text-orange-500 md:mr-5 lg:mr-5 custom-sm:mr-2 sm:mr-2"
                />
              </div>
              <div class="">
                <div
                  class="sm:text-sm custom-sm:text-xs md:text-md font-poppins font-bold"
                >
                  +63-977-382-4416
                </div>
                <div
                  class="text-gray-50 sm:text-sm custom-sm:text-xs md:text-md font-poppins font-bold"
                >
                  Mon - Sat,10 Am - 6 Pm
                </div>
              </div>
            </div>
            <div class="mb-10 flex">
              <div class="flex items-center ml-2">
                <mdicon
                  name="calendar-badge"
                  :width="30"
                  :height="30"
                  class="hover:text-orange-500 md:mr-5 lg:mr-5 custom-sm:mr-2 sm:mr-2"
                />
              </div>
              <div class="">
                <div
                  class="sm:text-sm custom-sm:text-xs md:text-md font-poppins font-bold"
                >
                  megalandrealtycebu @gmail.com
                </div>
                <div
                  class="text-gray-50 sm:text-sm custom-sm:text-xs md:text-md font-poppins font-bold"
                >
                  Email us your query
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-[50%] pt-5 custom-sm:pt-[10%]">
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
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-0 origin-[0] left-2.5 peer-focus:text-[#E67E23] peer-focus:dark:text-[#E67E23] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-0 origin-[0] left-2.5 peer-focus:text-[#E67E23] peer-focus:dark:text-[#E67E23] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-0 origin-[0] left-2.5 peer-focus:text-[#E67E23] peer-focus:dark:text-[#E67E23] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-0 origin-[0] left-2.5 peer-focus:text-[#E67E23] peer-focus:dark:text-[#E67E23] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
  </div>
</template>
<script>
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
