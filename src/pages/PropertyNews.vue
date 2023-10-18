<template>
  <div class="p-3">
    <div class="flex text-[#E67E23] mb-2">
      <div class="flex w-[16%] text-lg font-semibold pl-3">
        Search Filter <FunnelIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <div class="flex w-[56%] text-lg font-semibold pl-5">
        Blog <NewspaperIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <div class="flex w-[28%] text-lg font-semibold pl-5">
        All <UserIcon class="h-[26px] w-[26px] ml-1" />
      </div>
    </div>
    <div class="flex">
      <div class="w-[16%]">
        <div class="h-[700px] flex-col overflow-auto">
          <Accordion
            title="Property Type"
            :content="[
              { type: 'radio', data: 'Buy' },
              { type: 'radio', data: 'rent' },
            ]"
          />
          <Accordion
            title="Property Category"
            :content="[
              { type: 'checkbox', data: 'Commercial' },
              { type: 'checkbox', data: 'Condo' },
              { type: 'checkbox', data: 'House' },
              { type: 'checkbox', data: 'Land' },
              { type: 'checkbox', data: 'Townhouse' },
            ]"
          />
          <Accordion
            title="Location"
            :content="[
              { type: 'text', data: 'City' },
              { type: 'text', data: 'Address' },
              { type: 'text', data: 'Neighborhood' },
              { type: 'text', data: 'Zipcode' },
              { type: 'dialog', data: 'Philippines' },
              { type: 'dialog', data: 'Cebu' },
            ]"
          />
          <Accordion
            title="Price"
            :content="[
              { type: 'text', data: '₱ _ _ _ _ _ _ _ _ _ _ _ _ ' },
              { type: 'range', data: 'Cebu' },
            ]"
          />
          <Accordion
            title="Area"
            :content="[
              { type: 'text', data: 'Square Meter ' },
              { type: 'range', data: 'Cebu' },
            ]"
          />
          <Accordion
            title="Rooms"
            :content="[
              { type: 'spinner', data: 'Bedroom' },
              { type: 'spinner', data: 'Bathroom' },
            ]"
          />
        </div>
      </div>
      <div class="w-[56%] bg-white ml-5 p-5 border-2 rounded-md shadow-xl">
        <div class="">
          <div class="flex flex-col justify-center items-center mt-5">
            <div class="m-5">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/8GAmyQqh_Kc?si=tFIxsWVFER6dBU2V"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            <div class="flex-col flex">
              <div class="font-sans">
                Be a Homeowner at Woodway Townhomes 2 and enjoy the benefits and
                amenities we got to offer Developed by: Brickland Property
                Venture Corp. ????Location: Brgy. Pooc, Talisay City Want to
                take a look inside? ???? HICKORY (Single Attached- Mirror
                Design) Details Floor Area: 123 sq.m. +/- Lot Area: 92-101 sq.m.
                +/- ⭐4 bedrooms ⭐3 toilet & bath ⭐living area/ dining area
                ⭐kitchen area (with soft close kitchen cabinets with overhead)
                ⭐provision for extra storage room under stairs ⭐balcony ⭐w/
                covered car park ⭐ service area with own laundry tub ✔high
                quality w/ beautifully designed finishes ✔ high ceiling with big
                windows ✔ all LED lights ✔ concrete wall partitions ✔provision
                for spacious garden ✔Upscale private subdivision along Brgy road
                ✔24 hr security w/gated perimeter fence ✔clubhouse amenities
                ✔parks & playground ✔basketball court ✔flood free zone ✔low
                density community FEW UNITS LEFT! BEST INVESTMENT TO MAKE! what
                are you waiting for? ???? 09773824416 (Globe) ☎️ 254-1640(
                Landline) ???? marivildu75@gmail.com #houseandlotforsaleincebu
                #houseandlotforsaleintalisaycitycebu #woodwaytownhomes2
                #realestate #BestInvestment #propertyinvesting #megalandrealty
                #cebuanarealestatebroker #ceburealestatebroker
                #realestatebrokerphilippines
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-[28%] mr-6">
        <div
          class="w-full h-[475px] overflow-auto bg-white border-2 rounded-md shadow-xl p-5 ml-5 mb-5 "
        >
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
        <div class="flex  w-full text-[#E67E23] ml-3 mb-2">
          <div class="flex  text-lg font-semibold pl-3">
            Comments:
            <ChatBubbleLeftIcon class="h-[26px] w-[26px] ml-1 text-[#E67E23]" />
          </div>
        </div>
        <div>
          <div
            class="flex w-full overflow-auto bg-white border-2 rounded-md shadow-xl p-3 ml-5 mb-6 cursor-pointer hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)]"
          >
            <div class="ml-2 w-full">
              <input
                type="text"
                placeholder="Leave a comment..."
                class="w-full border-b-2 pl-2 p3-1 focus:outline-none"
              />
            </div>
          </div>

          <!-- comments -->
          <Comment/>
          <Comment/>
          <Comment/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Accordion from "../components/Accordion.vue";
import {
  FunnelIcon,
  NewspaperIcon,
  UserIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/vue/24/outline";
import Blog from "../components/Blog.vue";
import Comment from "../components/Comment.vue"
</script>
