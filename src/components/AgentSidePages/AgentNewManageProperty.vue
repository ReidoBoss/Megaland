<template>
  <div class="h-full">

    <div class="lg:block w-[100%] h-[100%] sticky top-0 bg-[#e9d8c5]">
      <div class="flex flex-row row-span-2">
  

        <div
          class="custom-sm:w-[90%] custom-sm:h-[750px] md:w-[80%] mx-auto lg:w-[80%] md:h-[750px] md:mt-[10%] lg:mt-[5%]"
        >
          <div
            class="custom-sm:w-[100%] md:w-[90%] mt-[5%] border-2 rounded-lg px-5 py-5 bg-white mx-auto"
          >
            <div class="flex justify-start items-center">
              <mdicon
                name="AccountPlusOutline"
                :width="35"
                :height="35"
                class="hover:text-white text-[#111929] mr-2"
              />
              <span class="font-semibold text-md"> Property List Table</span>
            </div>
            <div class="md:flex md:flex-row md:row-span-3 md:gap-6">
              <div
                class="flex justify-start items-start flex-col mt-5 md:w-[30%]"
              >
                <label class="block mb-2 text-sm font-medium" for="agentname"
                  >Property Name:</label
                >
                <input
                  id="agentname"
                  type="text"
                  class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>
              <div
                class="flex justify-start items-start flex-col mt-5 md:w-[30%]"
              >
                <label class="block mb-2 text-sm font-medium" for="agentemail"
                  >Email</label
                >
                <input
                  id="agentemail"
                  type="email"
                  class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>

              <div
                class="flex justify-start items-start flex-col mt-5 md:w-[30%]"
              >
                <label
                  class="block mb-2 text-sm font-medium"
                  for="propertystatus"
                  >Status</label
                >
                <select
                  v-model="property_enable"
                  id="propertystatus"
                  class="block w-full px-4 py-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 custom-sm:text-sm custom-sm:leading-6 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
                >
                  <option class="block mb-2 text-sm font-medium" value="Enable">
                    Enable
                  </option>
                  <option class="block mb-2 text-sm font-medium" value="D">
                    Disable
                  </option>
                </select>
              </div>
            </div>
            <div class="flex justify-start items-start flex-col mt-6">
              <button
                @click="submitAgent"
                class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#7F1D1D] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-[#7F1D1D] mr-4"
                id="saveAgent"
              >
                Filter
              </button>
            </div>
          </div>

          <div class="rounded-lg mx-auto lg:w-[100%]">
            <div
              class="relative overflow-x-auto my-[5%] lg:w-[90%] lg:mx-auto lg:my-[8%] md:w-[90%] md:my-[5%] mx-auto rounded-lg custom-sm:mt-[8%]"
            >
              <table class="text-left rtl:text-right">
                <thead class="text-[8.5px] uppercase bg-gray-200">
                  <tr class="text-xs">
                    <th scope="col" class="py-3"></th>
                    <th scope="col" class="px-6 py-3">Images</th>
                    <th scope="col" class="px-12 py-3">Name</th>
                    <th scope="col" class="px-6 py-3">Property Status</th>
                    <th scope="col" class="px-6 py-3">Price</th>

                    <th scope="col" class="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody class="font-semibold text-sm">
                  <tr  v-for="(property, index) in properties"
                  :key="index" 
                  :property_id="property.property_id"
                  :image="property.imageUrl || ''"
                  :name="property.property_name"
                  :price="property.property_price"
                  :type="property.property_type"

                  class="bg-white border-b">
                    <th
                      scope="row"
                      class="px-2 py-6 font-medium text-gray-900 whitespace-nowrap flex justify-center items-center"
                    >
                      <div class="flex items-center justify-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          class="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                        />
                      </div>
                    </th>
                    <!-- START TABLE  -->
                    <td class="custom-sm:w-[20%] custom-sm:h-[20%] md:w-[10%]">
                      <img
                        class="md:w-[80%] lg:w-[80%] custom-sm:w-[80%] mx-auto my-2"
                        :src="property.imageUrl"
                      />
                    </td>
                    <td class="px-6">{{property.property_name}}</td>

                    <td class="px-6 py-4">{{property.property_type}}</td>
                    <td class="px-6 py-4">{{property.property_price}}</td>
                    <td
                      class="px-6 py-4 text-blue-600 font bold cursor-pointer"
                    >
                      Edit
                    </td>
                  </tr>
                  <!-- END TABLE -->

                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import SideBarAdminNew from "../AdminSidePages/SideBarAdminNew.vue";
import { ref , onMounted} from "vue";
defineProps({
  propertyListing:Function,
  propertyTable:Function,
  addAgent:Function,
  agentTable:Function,
  blogListing:Function,
  blogTable:Function,
  logout:Function,
});


onMounted(()=>{
  getAllPropertyID();
});

const properties = ref([]);



const getAllPropertyID = async () =>{
  properties.value = [];
  try{
    const response = await fetch('http://localhost:8080/getAllPropertyID');
    const data = await response.json();

    for (var i = 0; i < data.length; i++) {
      try {
        var id = data[i].property_id;

        const propertyGenData = await general_data(id);
        const propertyData = await property_data(id);
        const propertyImage = await property_image(id);
        const imageData = propertyImage[0].main_image.data;

        if(propertyData[0].agent_id==localStorage.getItem('agentID')){
            properties.value.push({
              property_id: id,
              property_name: propertyGenData[0].name,
              imageUrl: await convertBlob(imageData),
              property_price: `₱${propertyData[0].property_price.toLocaleString()}`, 
              property_type: propertyData[0].property_type.toUpperCase(),
            });
        }

      }
      catch(error){
        console.log(error);
      }
    }
    


  }
  catch(error){
    console.log("Error: ", error);
  }
}


const property_image = async (i) =>{
  try {
    const response = await fetch(`http://localhost:8080/getPropertyImage/${i}`)
    const data = await response.json();
    return data;
  }
  catch(error){
    console.log("Error: ",error);
  }
}


const general_data = async (i) =>{
  try {
    const response = await fetch(`http://localhost:8080/getGeneralData/${i}`)
    const data = await response.json();
    return data;
  }
  catch(error){
    console.log("Error: ",error);
  }
}

const property_data = async (i) =>{
  try {
    const response = await fetch(`http://localhost:8080/getPropertyData/${i}`)
    const data = await response.json();
    return data;
  }
  catch(error){
    console.log("Error: ",error);
  }
}



const convertBlob = (image) =>{

return new Promise((resolve,reject)=>{
  if(image){
  const blob = new Blob([new Uint8Array(image)], { type: 'image/jpeg' }); 
  const reader = new FileReader();
  reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const dataURL = reader.result;
        resolve (dataURL);
      }
  }
});
}














const active = ref(0);
const isSidebarVisible = ref(false);
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};





</script>
