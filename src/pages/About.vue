<template>
  <!--INTRO-->
  <div
    class="bg-auto bg-no-repeat bg-center"
    style="background-image: url(../assets/card1.jpg)"
  >
    <div class="flex mt-[100px]">
      <div class="justify-center flex-1 max-w-7xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="flex flex-wrap">
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <span class="text-4xl font-bold">
              MEET <span class="text-[#E67E23]">MEGALAND REALTY</span></span
            >
            <h2 class="mt-5 mb-6 text-2xl font-medium text-justify">
              Megaland Realty was founded with one goal in mind: to make buying,
              selling, and renting real estate a simple, hassle free process for
              everyone involved
            </h2>
            <p class="mb-10 font-normal text-justify text-lg">
              With seventeen years of experience in real estate markets in the
              Phillippines especially in Cebu, this goal was realized when we
              opened the doors to our first Cebu office in 2010.
            </p>

            <p class="mb-10 font-normal text-justify text-lg">
              At Megaland Realty you are not looked at as just another customer.
              We will liten to your needs and tailor a plan to fit. Whether
              you’re in the market for a place to call home, an investment
              property or a plot of land to build your own home, Megaland Realty
              will exceed your needs and expectations.
            </p>
          </div>
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div class="relative">
              <div
                class="absolute hidden w-full h-full bg-[#E67E23] rounded -bottom-6 left-6 lg:block"
              ></div>
              <img
                :src="about"
                alt="aboutimage"
                class="relative object-cover w-100 h-100 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--OUR VALUES-->
    <div class="justify-center flex-1 max-w-7xl mx-auto lg:py-6 md:px-6">
      <h1 class="mb-20 font-black text-4xl text-center">
        OUR <span class="text-[#E67E23]">CORE VALUES</span>!
      </h1>
      <div
        class="grid grid-cols-1 lg:grid-cols-4 justify-center relative gap-8 mt-12 w-full font-medium auto-rows-auto"
      >
        <ValCard
          header="Integrity"
          desc="Megaland Realty  was founded on integrity, professionalism, hard work and trust; values that never waver. We proudly carry the Megaland   name, a symbol of quality and integrity. Our brokers take great pride in providing a high level of personalized service to create a luxury experience for all clients, one that you will truly appreciate. Find your next property to buy or rent in Cebu City."
        />
        <ValCard
          header="Vision"
          desc="We envision to build a strong force in Real Estate Industry Service to the next level and to help each other to achieve financial upliftment."
        />
        <ValCard
          header="Buying"
          desc="Buying or selling a property with Megaland Realty as your property partner means you are informed. Good information leads to good decisions, which leads to good results. From condos and homes to prime lands, we will ensure you have all the facts and support you need, helping you minimize risk and maximize the rewards."
        />
        <ValCard
          header="Expertise"
          desc="At Megaland Realty we know the local real estate market. Since February 2008, our professional and friendly agents have been helping people like you with all of their needs, from buying or renting new homes to selling properties. Our sensitivity to the marketplace comes from a single yet powerful perspective: Cebu City is more than just a market, it’s our home."
        />
      </div>
    </div>

    <div class="justify-center grid grid-cols 3 mt-[100px] mb-[100px]">
      <Buttons />
    </div>
  </div>
</template>
<script lang="ts" setup>
import about from "../assets/about.png";
import ValCard from "../components/ValCard.vue";
import Buttons from "../components/Buttons.vue";
</script>
