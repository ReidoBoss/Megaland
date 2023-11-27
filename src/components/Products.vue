<template>
  <div class="">
    <div
      class="w-[380px] h-[500px] bg-white p-5 border-2 rounded-md shadow-xl hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] hover:scale-[1.02]"
    >
      <router-link class="" to="/Details">
        <div class="">
          <img class="h-[200px] w-full" :src="image" alt="" />
        </div>
        <div class="m-1">
          <p class="text-[#454544] text-[17px] font-medium">
            {{ name }}
          </p>
        </div>
        <div>
          <p class="text-[#454544] text-[16px] font-medium">
            Price:
            <span class="text-[20px] text-[#E67E23]"
              >₱ {{ price ? price.toLocaleString("en-US") : "N/A" }}</span
            >
          </p>
        </div>
        <div>
          <p class="text-[#454544] text-[16px] font-medium">
            Area : <span>{{ size }}</span>
          </p>
        </div>
        <div>
          <div class="text-[#454544] text-[16px] font-medium flex">
            <div>Rooms:</div>
            <div class="ml-3">
              <mdicon
                class=""
                name="bed-queen-outline"
                :width="25"
                :height="25"
              />
            </div>
            <div class="ml-1">{{ bedroom }}</div>
            <div class="ml-2">
              <mdicon class="" name="shower-" :width="22" :height="22" />
            </div>
            <div class="ml-1">{{ bathroom }}</div>
          </div>
        </div>
        <div>
          <p class="text-[#454544] text-[16px] font-medium">
            Amenities :
            <span>
              <div class="flex gap-2">
                <mdicon
                  v-if="attic == true"
                  class=""
                  name="home-roof"
                  :width="22"
                  :height="22"
                />

                <mdicon
                  v-if="balcony == true"
                  class=""
                  name="balcony"
                  :width="22"
                  :height="22"
                />

                <!-- <mdicon
                  v-if="deck == true"
                  class=""
                  name="balcony"
                  :width="22"
                  :height="22"
                /> -->
                <mdicon
                  v-if="fenced == true"
                  class=""
                  name="fence"
                  :width="22"
                  :height="22"
                />
                <mdicon
                  v-if="fireplace == true"
                  class=""
                  name="fireplace"
                  :width="22"
                  :height="22"
                />
                <!-- <mdicon
                  v-if="frontyard == true"
                  class=""
                  name="balcony"
                  :width="22"
                  :height="22"
                /> -->

                <mdicon
                  v-if="gasheat == true"
                  class=""
                  name="stove"
                  :width="22"
                  :height="22"
                />
                <mdicon
                  v-if="gym == true"
                  class=""
                  name="dumbbell"
                  :width="22"
                  :height="22"
                />
                <!-- <mdicon
                  v-if="lakeview == true"
                  class=""
                  name="balcony"
                  :width="22"
                  :height="22"
                /> -->
                <!-- <mdicon
                  v-if="pond == true"
                  class=""
                  name="balcony"
                  :width="22"
                  :height="22"
                /> -->
                <mdicon
                  v-if="pool == true"
                  class=""
                  name="pool"
                  :width="22"
                  :height="22"
                />
                <!-- <mdicon
                  v-if="recreation == true"
                  class=""
                  name="balcony"
                  :width="22"
                  :height="22"
                /> -->
                <mdicon
                  v-if="sprinklers == true"
                  class=""
                  name="sprinkler-variant"
                  :width="22"
                  :height="22"
                />
                <mdicon
                  v-if="storage == true"
                  class=""
                  name="warehouse"
                  :width="22"
                  :height="22"
                />
                <mdicon
                  v-if="washer == true"
                  class=""
                  name="tumble-dryer"
                  :width="22"
                  :height="22"
                />
                <mdicon
                  v-if="winecellar == true"
                  class=""
                  name="liquor"
                  :width="22"
                  :height="22"
                />
              </div>
            </span>
          </p>
        </div>
        <div>
          <p class="text-[#454544] text-[16px] font-medium">
            Nearest Place:
            <span>
              <div class="flex gap-2">
                <mdicon
                  v-if="airport == true"
                  class=""
                  name="airport"
                  :width="22"
                  :height="22"
                />
                <mdicon
                  v-if="busstand == true"
                  class=""
                  name="bus-stop"
                  :width="22"
                  :height="22"
                />
                <mdicon
                  v-if="patroltank == true"
                  class=""
                  name="gat-station"
                  :width="22"
                  :height="22"
                />
                <mdicon
                  v-if="railway == true"
                  class=""
                  name="train"
                  :width="22"
                  :height="22"
                />
                <mdicon
                  v-if="shopping == true"
                  class=""
                  name="shopping"
                  :width="22"
                  :height="22"
                />
                <mdicon
                  v-if="universities == true"
                  class=""
                  name="account-school"
                  :width="22"
                  :height="22"
                />
                <mdicon
                  v-if="winecellar == true"
                  class=""
                  name="liquor"
                  :width="22"
                  :height="22"
                />
              </div>
            </span>
          </p>
        </div>
        <div class="flex justify-center items-center mt-2 text-white">
          <button
            class="bg-[#E67E23] h-9 w-[225px] rounded-md text-white text-center font-semibold text-[20px] hover:bg-white hover:text-[#E67E23] hover:border-[#E67E23] border-[#E67E23] border-2 transition duration-300"
          >
            Details
          </button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface ProductType {
  name: string;
  price: number;
  size: number;
  bedroom: number;
  bathroom: number;
  image: string;

  attic: boolean;
  balcony: boolean;
  deck: boolean;
  fenced: boolean;
  fireplace: boolean;
  frontyard: boolean;
  gasheat: boolean;
  gym: boolean;
  lakeview: boolean;
  pond: boolean;
  pool: boolean;
  recreation: boolean;
  sprinklers: boolean;
  storage: boolean;
  washer: boolean;
  winecellar: boolean;

  airport: boolean;
  busstand: boolean;
  hospital: boolean;
  patroltank: boolean;
  railway: boolean;
  shopping: boolean;
  universities: boolean;
}

defineProps<ProductType>();
</script>
