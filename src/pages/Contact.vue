<template>
  <div class="mx-auto max-w-7xl">
    <MegalandHouse
      quote="Communication is key. Reach out to us, and we'll make
    sure you get the assistance you deserve."
      add="CONTACT "
      properties="US"
    />

    <div class="ml-[15%] auto grid grid-cols-10">
      <div
        class="border-2 rounded-tl-[3%] rounded-bl-[3%] border-black shadow-2xl mb-10 col-start-1 grid col-span-3 bg-[#d78338]"
      >
        <div class="font-bold mt-[8%] text-xl ml-[5%] text-black">
          <span class="text-black"> Contact Information </span>

          <div class="text-lg mt-[7%]">
            <div class="text-base">
              You can use this contact info for more details.
            </div>
            <div class="mt-[15%] text-[90%]">
              📞+63-977-382-4416 <br />
              <br />
              📧
              <a href="mailto:megalandrealtycebu@gmail.com" target="_blank"
                >megalandrealtycebu@gmail.com</a
              >
              <br />
              <br />
              📍
              <a
                href="https://www.google.com/maps/place/148+Residence/@10.2978898,123.8960511,17z/data=!3m1!4b1!4m6!3m5!1s0x33a9995871e93837:0x3b325ce49ea3a559!8m2!3d10.2978898!4d123.898626!16s%2Fg%2F11b69bmx82?entry=ttu"
                target="_blank"
                >Unit 101, 148 Residences, Pelaez St,
                <span class="ml-[8%]">Cebu City</span></a
              >
              <br /><br />
            </div>
            <div class="flex justify-center mt-10">
              <mdicon
                name="facebook"
                :width="30"
                :height="30"
                class="hover:text-[#013883] mr-10"
              />
              <mdicon
                name="instagram"
                :width="30"
                :height="30"
                class="hover:text-[#b9308c] mr-10"
              />
              <mdicon
                name="twitter"
                :width="30"
                :height="30"
                class="hover:text-[#1c9cea] mr-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="grid align-middle mb-10 col-span-7 w-[85%]">
        <div
          class="grid grid-cols-2 flex-1 rounded-tr-[3%] rounded-br-[3%] gap-5 border-black shadow-2xl bg-gray-100"
        >
          <div class="flex justify-center mt-[10%]">
            <div class="w-[55%]">
              <h2 class="font-bold text-xl">Contact Details</h2>
              <form class="mx-auto">
                <div class="mb-10 mt-10">
                  <div class="relative">
                    <input
                      type="text"
                      id="name"
                      class="font-bold block px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-[#e67f22] focus:outline-none focus:ring-0 focus:border-border-[#e67f22] peer"
                      required
                      placeholder=""
                    />
                    <label
                      for="name"
                      class="font-bold absolute text-sm focus:outline-[#e67f22] text-[#e67f22] dark:text-black duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg- dark:bg-gray-100 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >Name *</label
                    >
                  </div>
                </div>
                <div class="mb-10">
                  <div class="relative">
                    <input
                      type="text"
                      id="email"
                      class="font-bold block px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-[#e67f22] focus:outline-none focus:ring-0 focus:border-border-[#e67f22] peer"
                      required
                      placeholder=""
                    />
                    <label
                      for="email"
                      class="font-bold absolute text-sm text-[#e67f22] dark:text-black duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg- dark:bg-gray-100 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >Email *</label
                    >
                  </div>
                </div>
                <div class="mb-10">
                  <div class="relative">
                    <input
                      type="text"
                      id="phone"
                      class="font-bold block px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-[#e67f22] appearance-none dark:text-black dark:border-black dark:focus:border-[#e67f22] focus:outline-none focus:ring-0 focus:border-border-[#e67f22] peer"
                      required
                      placeholder=""
                    />
                    <label
                      for="phone"
                      class="font-bold absolute text-sm text-[#e67f22] dark:text-black duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg- dark:bg-gray-100 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >Phone Number *</label
                    >
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="w-[85%] mt-[10%]">
            <h2 class="font-bold text-xl mb-[33%]">Message/Concern</h2>
            <div class="mt-[15%]">
              <textarea
                class="font-bold p-5 border-2 border-solid dark:border-black border-[#e67f22] rounded-lg h-40 resize-none bg-gray-100 focus:outline-[#e67f22]"
                rows="8"
                placeholder="Write your thoughts here..."
              >
              </textarea>
            </div>
          </div>
          <div class="ml-[23%] mb-[10%] w-[100%]">
            <button
              class="text-[#323946] bg-[#e67f22] px-2 py-3 rounded-2xl shadow-xl text-2.4 text-2d0d06 leading-5 font-semibold tracking-wide transform transition-all duration-500 ease-in-out box-shadow-custom"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import MegalandHouse from "../components/MegalandHouse.vue";
</script>

<style scoped>
.bg-custom {
  background-image: url(../assets/conpic.jpg);
}

.box-shadow-custom:hover {
  box-shadow: 0 0 1rem #e67f22;
  background-color: #e67f22;
  color: white;
}

input,
textarea {
  @apply w-full;
}
</style>
