<script lang="ts" setup></script>

<template>
  <div class="mx-auto max-w-7xl">
    <div class="relative w-full h-80 bg-cover bg-center bg-custom">
      <div class="w-[100%] h-3/4">
        <img
          src="../assets/mgpng.png"
          alt="mgpng"
          class="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-300 z-0 filter-none"
        />
      </div>

      <div
        class="font-bold text-xl flex justify-center align-middle mx-20 m-10"
      >
        <p>
          📞+63-977-382-4416 📧megalandrealtycebu@gmail.com 📍 Unit 101, 148
          Residences, Pelaez St, Cebu City
        </p>
      </div>
    </div>

    <div class="grid">
      <div class="flex-1 p-20 border border-solid border-[#e67f22] bg-gray-100">
        <div class="grid-cols-1">
          <h2 class="font-bold text-xl">Contact Information</h2>
          <form class="mx-auto" @submit.prevent="submitForm">
            <div class="mb-10 mt-10">
              <div class="relative">
                <input
                  type="text"
                  id="name"
                  class="font-bold block px-2.5 pb-2.5 pt-4 w-[25%] text-sm text-gray-900 bg-transparent rounded-lg border-2 border-[#e67f22] appearance-none dark:text-black dark:border-[#e67f22] dark:focus:border-[#e67f22] focus:outline-none focus:ring-0 focus:border-border-[#e67f22] peer"
                  v-model="formData.name"
                  required
                  placeholder=""
                />
                <label
                  for="name"
                  class="font-bold absolute text-sm text-[#e67f22] dark:text-[#e67f22] duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg- dark:bg-gray-100 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >Name *</label
                >
              </div>
            </div>
            <div class="mb-10">
              <div class="relative">
                <input
                  type="text"
                  id="email"
                  class="font-bold block px-2.5 pb-2.5 pt-4 w-[25%] text-sm text-gray-900 bg-transparent rounded-lg border-2 border-[#e67f22] appearance-none dark:text-black dark:border-[#e67f22] dark:focus:border-[#e67f22] focus:outline-none focus:ring-0 focus:border-border-[#e67f22] peer"
                  v-model="formData.email"
                  required
                  placeholder=""
                />
                <label
                  for="email"
                  class="font-bold absolute text-sm text-[#e67f22] dark:text-[#e67f22] duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg- dark:bg-gray-100 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >Email *</label
                >
              </div>
            </div>
            <div class="mb-10">
              <div class="relative">
                <input
                  type="text"
                  id="phone"
                  class="font-bold block px-2.5 pb-2.5 pt-4 w-[25%] text-sm text-gray-900 bg-transparent rounded-lg border-2 border-[#e67f22] appearance-none dark:text-black dark:border-[#e67f22] dark:focus:border-[#e67f22] focus:outline-none focus:ring-0 focus:border-border-[#e67f22] peer"
                  v-model="formData.phone"
                  required
                  placeholder=""
                />
                <label
                  for="phone"
                  class="font-bold absolute text-sm text-[#e67f22] dark:text-[#e67f22] duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg- dark:bg-gray-100 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >Phone Number *</label
                >
              </div>
            </div>
          </form>
        </div>
        <div class="right">
          <h2 class="font-bold text-xl mb-10">Message/Concern</h2>

          <textarea
            class="mb-10 font-bold w-[40%] p-10 border-2 border-solid border-[#e67f22] rounded-lg h-40 resize-none"
            v-model="formData.message"
            rows="8"
            placeholder="Write your thoughts..."
          >
          </textarea>
          <div>
            <button
              class="text-[#323946] bg-[#e67f22] px-6 py-2 rounded-lg p-4.5 shadow-xl text-2.4 text-2d0d06 leading-7 font-semibold tracking-wide transition-transform transform hover:scale-105 duration-500 ease-in-out box-shadow-custom"
            >
              Send
            </button>
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
</style>
