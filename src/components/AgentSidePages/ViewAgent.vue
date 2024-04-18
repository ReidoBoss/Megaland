<template>
  <div class="bg-[#e9d8c5] custom-sm:w-[100%] lg:w-[80%] h-full mx-auto">
    <div
      class="w-full lg:hidden md:block custom-sm:block sm:block bg-[#e9d8c5]"
    >

    </div>


    <div class="bg-gray-900 lg:block w-[100%] h-[100%] sticky top-0 mx-auto">
      <div class="flex flex-row row-span-2 bg-[#e9d8c5] ">
        <div class="lg:w-[80%] mx-auto">
          <div class="lg:w-[100%] md:w-[100%] custom-sm:w-[100%]  my-[5%]">
            <div class="flex flex-wrap mx-auto my-[5%] lg:w-[18%] md:w-[25%] custom-sm:w-[50%] bg-primary rounded-full h-[180px] border-2 "><span class="w-[90%] h-[90%] flex items-center justify-center rounded-full mx-auto my-auto bg-white">
              <img class="lg:w-[90%] lg:h-[90%] custom-sm:w-[100%] custom-sm:h-[100%] my-auto mx-auto rounded-full " :src="profile"/></span></div>
            
              <table class="table table-bordered lg:w-full custom-sm:w-90% md:w-90% mx-auto text-xs">
                <tbody>
                    <tr class="border-primary border w-full">
                        <td class="border-primary border w-25% py-2 px-2 font-poppins font-bold">Agent Name</td>
                        <td class="border-primary border px-2 font-semibold">{{name}}</td>
                    </tr>
                    <tr class="border-primary border w-50%">
                        <td class="border-primary border w-25% py-2 px-2 font-poppins font-bold">Position</td>
                        <td class="border-primary border px-2 font-semibold">{{ position }}</td>
                    </tr>
                    <tr class="border-primary border w-50%">
                        <td class="border-primary border w-25% py-2 px-2 font-poppins font-bold">Address</td>
                        <td class="border-primary border px-2 font-semibold">{{ address }}</td>
                    </tr>
                    <tr class="border-primary border w-50%">
                        <td class="border-primary border w-25% py-2 px-2 font-poppins font-bold">Contact</td>
                        <td class="border-primary border px-2 font-semibold">{{ contact }}</td>
                    </tr>
                    <tr class="border-primary border w-50% font-semibold">
                        <td class="border-primary border w-25% py-2 px-2 font-poppins font-bold">Country</td>
                        <td class="border-primary border px-2 font-semibold">{{ country }}</td>
                    </tr>
                    <tr class="border-primary border w-50%">
                        <td class="border-primary border w-25% py-2 px-2 font-poppins font-bold">City</td>
                        <td class="border-primary border px-2 font-semibold">{{ city }}</td>
                    </tr>
                    <tr class="border-primary border w-50%">
                        <td class="border-primary border w-20% py-2 px-2 font-poppins font-bold">Total Property Listed</td>
                        <td class="border-primary border px-2 font-semibold">{{ total_property }}</td>
                    </tr>
                    <tr class="border-primary border w-50%">
                        <td class="border-primary border w-20% py-2 px-2 font-poppins font-bold">Facebook Link</td>
                        <td class="border-primary border px-2 font-semibold">{{ facebook }}</td>
                    </tr>
                    <tr class="border-primary border w-50%">
                        <td class="border-primary border w-25% py-2 px-2 font-poppins font-bold">Twitter</td>
                        <td class="border-primary border px-2 font-semibold">{{ twitter }}</td>
                    </tr>
                    <tr class="border-primary border w-50%">
                        <td class="border-primary border w-25% py-2 px-2 font-poppins font-bold">Instagram</td>
                        <td class="border-primary border px-2 font-semibold">{{ instagram }}</td>
                    </tr>
                    <tr class="border-primary border w-50%">
                        <td class="border-primary border w-25% py-2 px-2 font-poppins font-bold">Description</td>
                        <td class="border-primary border px-2 font-semibold py-3 text-justify">{{ description }}</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref,onMounted } from "vue";

onMounted(()=>{
  getAgent();
});

const active = ref(0);
const isSidebarVisible = ref(false);
var agentUserID = localStorage.getItem('agent_userID');

const profile = ref();
const name = ref();
const address = ref();
const contact = ref();
const country = ref();
const city = ref();
const facebook = ref();
const twitter = ref();
const instagram=ref();
const description = ref();
const region = ref();
const total_property = ref();
const position = ref();
const agentDetails = ref([]);

const getAgent = async () =>{
  try{
    const agents = await getAgents();
    for(var i=0 ; i < agents.length; i++){

      if(agents[i].user_id==agentUserID){
        const agent = await getAgentByID(agents[i].agent_id);
          localStorage.setItem('agentID',agent.agent_id);
          profile.value = await convertBlob(agent.profile_picture.data)
          name.value =  agent.agent_name;
          description.value= agent.description;
          address.value= agent.address;
          contact.value = agent.contact_number;
          city.value= agent.city;
          country.value= agent.country;
          region.value=agent.region;
          facebook.value= agent.facebook;
          twitter.value= agent.x;
          instagram.value= agent.instagram;
          total_property.value = agent.total_property
          position.value=agent.position;

      }

    }
  }
  catch(error){
  }
}

const getAgents = async () => {
  const response = await fetch('http://localhost:8080/getAgents');
  const data = await response.json();
  return data;
}
const getAgentByID = async(id) =>{
  const response = await fetch(`http://localhost:8080/getAgentByID/${id}`);
  const data = await response.json();
  return data[0];
}

const convertBlob = (image) => {
  return new Promise((resolve, reject) => {
    if (image) {
      const blob = new Blob([new Uint8Array(image)], { type: "image/jpeg" });
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const dataURL = reader.result;
        resolve(dataURL);
      };
    }
  });
};
</script>
