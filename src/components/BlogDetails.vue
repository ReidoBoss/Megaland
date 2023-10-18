<template>
 <div class="w-[56%] bg-white ml-5 p-5 border-2 rounded-md shadow-xl">
        <div class="">
          <div class="flex flex-col justify-center items-center mt-5">
            <div class="m-5">
              <iframe
                width="700"
                height="420"
                butttom="hidden"
                src="https://www.youtube.com/embed/8GAmyQqh_Kc?si=tFIxsWVFER6dBU2V"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            <div class="flex-col flex">
              <div class="font-sans">
                <div class="font-sans">
    <strong class="font-bold">{{title}}</strong><br><br>
    
    <strong class="font-bold">Location:</strong> {{location}}<br><br>
    
    <strong class="font-bold">Developed By:</strong> {{developer}}<br><br>
    
    <strong class="font-bold">Details:</strong> {{housedetails}}<br><br>
    
    <div class="whitespace-break-spaces">
        <strong>Amenities:</strong> {{amenities}}<br><br>
    </div>
    
    <strong class="font-bold">Broker:</strong> {{name}}<br><br>
    
    <strong class="font-bold mb-10">Contact Info:</strong> {{contact}}<br><br>
    
    <strong class="font-bold">Email Address:</strong> {{email}}<br><br>
    
    <strong class="font-bold">Key Tags:</strong> {{tags}}<br><br>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>

</template>
<script lang="ts" setup>
interface BlogDescriptions {
  title: string;
  location: string;
  developer: string;
  amenities: string;
  housedetails: string;
  name: string;
  contact: string;
  email: string;
  tags: string;
}
defineProps<BlogDescriptions>();
</script>