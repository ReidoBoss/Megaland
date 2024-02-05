<template>
  <div class="flex-col cursor-pointer pt-1 pb-1">
    <div>
      <!-- Accordion header -->
      <div class="flex custom-sm:mb-3 sm:mb-3" @click="toggleAccordion">
        <div class="flex justify-center items-center w-[12%] mr-2">
          <!-- Chevron icon based on accordion state -->
          <ChevronUpIcon
            v-if="isActive"
            class="h-[15px] w-[15px] text-[#E67E23]"
          />
          <ChevronDownIcon v-else class="h-[15px] w-[15px] text-[#E67E23]" />
        </div>
        <div
          class="flex items-center font-poppins font-bold custom-sm:text-white sm:custom-sm:white md:text-orange-500 lg:text-orange-500 w-[88%]"
        >
          <!-- Title of the accordion -->
          {{ title }}
        </div>
      </div>
      <hr class="border-[#E67E23]" />
      <!-- Accordion content -->
      <div
        v-if="isActive"
        class="custom-sm:text-[#fefefe] sm:text-[#fefefe] md:text-[#fefefe] lg:text-[#334054] font-bold font-poppins pl-4 pt-2"
      >
        <div
          class="flex"
          name="cb1"
          v-for="(item, index) in content"
          :key="index"
        >
          <!-- ... (your existing code) ... -->
          <!-- if type is text -->
          <div v-if="item.type === 'text'">
            <input
              class="w-44 h-6 mb-2 border-[#454544] border focus:outline-none pl-3"
              type="text"
              name="cb1"
              id="textInput"
              :placeholder="item.data"
              :value="textInputValue"
              @input="updateTextInputValue"
              @blur="typedValue(item)"
            />
          </div>
          <!-- if type is radio -->
          <div v-if="item.type === 'radio'">
            <input
              type="radio"
              class="w-4 h-4 mr-2 ml-4"
              :checked="item.data === selectedType"
              @click="propertyType(item)"
            />{{ item.data }}
          </div>
          <!-- if type is checkbox -->
          <div v-if="item.type === 'checkbox'">
            <input
              class="w-4 h-4 mr-2 ml-4"
              type="checkbox"
              name="cb1"
              id=""
              @click="propertyCategory(item)"
            />{{ item.data }}
          </div>
          <!-- if type is dialogbox -->
          <div v-if="item.type === 'dialog'">
            <select
              class="w-44 h-6 mr-2 mb-2 border-[#454544] border focus:outline-none pl-3"
              name=""
              id=""
            >
              <option value="">{{ item.data }}</option>
              <option value="">China</option>
              <option value="">Japan</option>
            </select>
          </div>
          <!-- if type is range -->
          <div v-if="item.type === 'range'">
            <input
              class="w-44 h-6 mr-2 mb-2 border-[#454544] pl-3"
              type="range"
              name=""
              id=""
              min="500000"
              max="20000000"
            />
          </div>
          <!-- if type is spinner -->
          <div v-if="item.type === 'spinner'" class="flex">
            <input
              class="w-12 h-6 ml-4 mr-2 mb-2 border-[#454544] border focus:outline-none pl-3"
              type="number"
              name=""
              id=""
              step="1"
              value="1"
            />
            <p>
              {{ item.data }}
            </p>
          </div>
          <!-- ... (your existing code) ... -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";

var selectedType = ref<string | null>(null);
var chosenCategory: string[] = [];
var typedText: string[] = [];

interface ContentItem {
  type: string;
  data: string;
}

defineProps({
  title: {
    type: String,
  },
  content: Array as () => ContentItem[],
});

const data = ref({
  textInputValue: "",
});
const updateTextInputValue = (event: InputEvent) => {
  const inputElement = event.target as HTMLInputElement;
  data.value.textInputValue = inputElement.value;
};

const typedValue = (item: ContentItem) => {
  // var textValue = data.value.textInputValue;

  var locationArr: string[] = ["City", "Address"];

  if (locationArr.includes(item.data)) {
    localStorage.setItem("property_location_chosen", "yes");
    localStorage.setItem(`${item.data}`, data.value.textInputValue);
    console.log("YEah");
  } else if (item.data == "₱ _ _ _ _ _ _ _ _ _ _ _ _ ") {
    localStorage.setItem("property_price_chosen", "yes");
    localStorage.setItem(`${item.data}`, data.value.textInputValue);
  } else if ((item.data = "Square Meter")) {
    localStorage.setItem("property_area_chosen", "yes");
    localStorage.setItem(`${item.data}`, data.value.textInputValue);
  } else {
    localStorage.setItem("property_area_chosen", "no");
    localStorage.setItem("property_price_chosen", "no");
    localStorage.setItem("property_location_chosen", "no");
    localStorage.setItem(`${item.data}`, data.value.textInputValue);

    console.log("NULL");
  }
};

const isActive = ref(false);

const toggleAccordion = () => {
  isActive.value = !isActive.value;
};

const radioToggle = (item: ContentItem) => {
  if (selectedType.value === item.data) {
    selectedType.value = null;
  } else {
    selectedType.value = item.data;
  }
};

const propertyType = (item: ContentItem) => {
  radioToggle(item);
  var property_type = localStorage.getItem("property_type");

  if (property_type == "" && item.data == "RENT") {
    localStorage.setItem("property_type", item.data);
    localStorage.setItem("property_type_chosen", "yes");
  } else if (property_type == "" && item.data == "BUY") {
    localStorage.setItem("property_type", item.data);
    localStorage.setItem("property_type_chosen", "yes");
  } else if (property_type == "RENT" && item.data == "BUY") {
    localStorage.setItem("property_type", item.data);
    localStorage.setItem("property_type_chosen", "yes");
  } else if (property_type == "BUY" && item.data == "RENT") {
    localStorage.setItem("property_type", item.data);
    localStorage.setItem("property_type_chosen", "yes");
  } else {
    localStorage.setItem("property_type", "");
    localStorage.setItem("property_type_chosen", "no");
  }
};
const propertyCategory = (item: ContentItem) => {
  localStorage.setItem("property_category", item.data);

  const isRepeated = chosenCategory.includes(item.data);

  if (!isRepeated) {
    chosenCategory.push(item.data);
  } else {
    const indexToRemove = chosenCategory.indexOf(item.data);
    chosenCategory.splice(indexToRemove, 1);
  }

  if (chosenCategory.length >= 1) {
    localStorage.setItem("property_category_chosen", "yes");
  } else {
    localStorage.setItem("property_category_chosen", "no");
  }

  localStorage.setItem("chosenArray", JSON.stringify(chosenCategory));
};
</script>
