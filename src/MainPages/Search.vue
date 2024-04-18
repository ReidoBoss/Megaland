<template>
  <!-- Check if propertyData is empty -->
  <div
    v-if="propertyData.length === 0"
    style="text-align: center; margin-top: 20vh; color: #ffa500"
  >
    <p style="font-size: 80px; width: 60%; margin: 0 auto">
      No products available for <br />""
    </p>
  </div>
  <!-- Render products if propertyData is not empty -->
  <div class="flex flex-wrap mt-2 h-full w-[100%] gap-y-9 justify-evenly">
    <Products
      class=""
      v-for="(property, index) in propertyData"
      :key="index"
      :image="'https://storage.googleapis.com/petbacker/images/blog/2017/dog-and-cat-cover.jpg'"
      :name="property.property_name"
      :price="property.property_price"
      :category="property.property_category"
      :size="property.property_area"
      :type="property.property_type"
      :bedroom="property.property_bedroom"
      :bathroom="property.property_bathroom"
      :address="property.property_local_area"
      :city="property.property_city"
      :airport="property.property_airport"
      :busstand="property.property_busstand"
      :hospital="property.property_hospital"
      :patroltank="property.property_patroltank"
      :railway="property.property_railway"
      :shopping="property.property_shopping"
      :universities="property.property_universities"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Products from "../components/Products.vue";

</script>
