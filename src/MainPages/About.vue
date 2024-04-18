<template>
  <!--INTRO-->
  <div
    class="bg-auto bg-no-repeat bg-center"

  >
    <div class="flex mt-[100px] custom-sm:mt-5 sm:mt-10 md:mt-20">
      <div class="justify-center flex-1 max-w-7xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="flex flex-wrap">
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <span
              class="font-black custom-sm:text-xl sm:text-2xl md:text-3.5xl lg:text-4xl"
            >
              MEET <span class="text-[#E67E23]">MEGALAND REALTY</span></span
            >
            <h2
              class="mt-5 mb-6 font-medium text-justify md:text-xl sm:text-lg custom-sm:text-sm font-poppins"
            >
              Megaland Realty was founded with one goal in mind: to make buying,
              selling, and renting real estate a simple, hassle free process for
              everyone involved
            </h2>
            <p
              class="mb-10 font-normal text-justify text-md md:text-lg custom-sm:text-sm font-poppins"
            >
              With seventeen years of experience in real estate markets in the
              Phillippines especially in Cebu, this goal was realized when we
              opened the doors to our first Cebu office in 2010.
            </p>

            <p
              class="mb-10 font-normal text-justify sm:text-md md:text-lg custom-sm:text-sm font-poppins"
            >
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
    <div class="justify-center flex-1 mx-14 lg:py-6 md:px-6">
      <h1
        class="mb-20 custom-sm:mb-4 text-center font-black custom-sm:text-xl sm:text-2xl md:text-3.5xl lg:text-4xl"
      >
        OUR <span class="text-[#E67E23]">CORE VALUES</span>
      </h1>
      <div class="font-poppins flex justify-evenly gap-5">
        <ValCard
          :imgSrc="'/src/assets/Integrity.jpg'"
          header="Integrity"
          desc="Megaland Realty  was founded on integrity, professionalism, hard work and trust; values that never waver. We proudly carry the Megaland   name, a symbol of quality and integrity. Our brokers take great pride in providing a high level of personalized service to create a luxury experience for all clients, one that you will truly appreciate. Find your next property to buy or rent in Cebu City."
        />
        <ValCard
          :imgSrc="'/src/assets/Vision.jpg'"
          header="Vision"
          desc="We envision to build a strong force in Real Estate Industry Service to the next level and to help each other to achieve financial upliftment."
        />
        <ValCard
          :imgSrc="'/src/assets/Expertise.jpg'"
          header="Expertise"
          desc="At Megaland Realty we know the local real estate market. Since February 2008, our professional and friendly agents have been helping people like you with all of their needs, from buying or renting new homes to selling properties. Our sensitivity to the marketplace comes from a single yet powerful perspective: Cebu City is more than just a market, it’s our home."
        />
      </div>
    </div>

    <div class="mx-20 mb-10">
      <h1
        class="mb-20 custom-sm:mb-4 text-center font-black custom-sm:text-xl sm:text-2xl md:text-3.5xl lg:text-4xl"
      >
        OUR <span class="text-[#E67E23]">TEAM</span>
      </h1>
      <div class="flex flex-wrap gap-5 justify-evenly">
        <AgentCard 
        v-for="(agent, index) in agents"
        :key="index"

        :image="agent.image"
        :id="agent.id"
        :name="agent.name"
        :position="agent.position"
        :description="agent.description"
        :hoverable="false" />
 
      </div>
    </div>

    <div class="w-full mt-6 items-center">
      <h1
        class="mt-10 mb-20 font-black text-center custom-sm:text-xl sm:text-2xl md:text-3.5xl lg:text-4xl"
      >
        <span> OUR </span><span class="text-[#E67E23]">GALLERY !</span>
      </h1>
      <Gallery />
    </div>
  </div>
</template>

<script setup>
import about from "../assets/about.png";
import ValCard from "../components/ValCard.vue";
import AgentCard from "../components/AgentCard.vue";
import Gallery from "../components/Gallery.vue";
import { ref, onMounted} from "vue"

onMounted(()=>{
  getAgents()
});

//START OF AGENT FETCH
const agents = ref([]);//array of agents
const getAgents = async () =>{
  const response = await fetch('http://localhost:8080/getAgents');
  const data = await response.json();

  

  for(var i= 0 ; i < data.length ; i ++){
    var image = await getAgentImageByID(data[i].agent_id);
    
    agents.value.push({
      id: data[i].agent_id,
      image: await convertBlob(image),
      name: data[i].agent_name,
      position: data[i].position,
      description: data[i].description,
    });
  }
}
const getAgentImageByID = async(id)=>{
  const response = await fetch(`http://localhost:8080/getAgentByID/${id}`);
  const data = await response.json();

  return data[0].profile_picture.data;
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

</script>
