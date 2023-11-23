<template>
    <section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20 mb-20">
    <h1 class="text-xl font-bold text-white capitalize dark:text-white">Property Listing Form</h1>
    <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <!--Property Name-->
            <div>
                <label class="text-white dark:text-gray-200" for="propertyname">Property Name:</label>
                <input id="propertyname" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>
            <!--Description-->
            <div>
                <label class="text-white dark:text-gray-200" for="propertydesc">Description:</label>
                <textarea id="propertydesc" type="textarea" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>
            <!--Meta Tags-->
            <div>
                <label class="text-white dark:text-gray-200" for="metatags">Meta Tags</label>
                <input id="metatags" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>
            <!--Agent-->
            <div>
                <label class="text-white dark:text-gray-200" for="propertyagent">Agent</label>    
                <input id="propertyagent" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>
            <!--Property Type-->
            <div>
                <label class="text-white dark:text-gray-200" for="propertytype">Property Type</label>
                <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option>Rent</option>
                    <option>Buy</option>
                </select>
            </div>
            <!--Country-->
            <div>
                <label class="text-white dark:text-gray-200" for="propertycountry">Country</label>    
                <input id="propertycountry" type="text" step="any"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>
            <!--Region-->
            <div>
                <label class="text-white dark:text-gray-200" for="propertyregion">Region</label>    
                <input id="propertyregion" type="text" step="any"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>
            <!--City-->
            <div>
                <label class="text-white dark:text-gray-200" for="propertycity">City</label>    
                <input id="propertycity" type="text" step="any"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>
            <!--Zip Code-->
            <div>
                <label class="text-white dark:text-gray-200" for="zipcode">Zip Code</label>    
                <input id="zipcode" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>
            <!--Property Area-->
            <div>
                <label class="text-white dark:text-gray-200" for="propertyarea">Property Area</label>    
                <input id="propertyarea" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>
            <!--Bedroom-->
            <div>
                <label class="text-white dark:text-gray-200" for="bedroom">Bedroom</label>    
                <input id="bedroom" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>
            <!--Bathroom-->
            <div>
                <label class="text-white dark:text-gray-200" for="bathroom">Bathroom</label>    
                <input id="bathroom" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>

            <!--Rooms-->
            <div>
                <label class="text-white dark:text-gray-200" for="propertyroom">Rooms</label>    
                <input id="propertyroom" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>

            <!--Parking Space-->
            <div>
                <label class="text-white dark:text-gray-200" for="parkingspace">Parking Space</label>    
                <input id="parkingspace" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>


            <!--Date & Checkboxes-->
            <div class="flex flex-col sm:flex-row">
                <div class="mr-4">
                <label class="text-white dark:text-gray-200 font-medium" for="data">Date</label>
                <input id="date" type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>

            <!--Amenities-->
            <div class="mt-4 sm:mt-0">
                <label class="block text-white dark:text-gray-200 font-medium">Property Amenities</label>
                <div class="flex items-center mt-2">
                    <input id="attic" type="checkbox" class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded">
                    <label for="attic" class="ml-2 text-white dark:text-gray-200">Attic</label>
                </div>
                <div class="flex items-center mt-2">
                    <input id="balcony" type="checkbox" class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded">
                    <label for="balcony" class="ml-2 text-white dark:text-gray-200">Balcony</label>
                </div>
                <div class="flex items-center mt-2">
                    <input id="deck" type="checkbox" class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded">
                    <label for="deck" class="ml-2 text-white dark:text-gray-200">Deck</label>
                </div>
                <div class="flex items-center mt-2">
                    <input id="fenced-yard" type="checkbox" class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded">
                    <label for="fenced-yard" class="ml-2 text-white dark:text-gray-200">Fenced Yard</label>
                </div>
                <div class="flex items-center mt-2">
                    <input id="fireplace" type="checkbox" class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded">
                    <label for="fireplace" class="ml-2 text-white dark:text-gray-200">Fireplace</label>
                </div>
                <div class="flex items-center mt-2">
                    <input id="frontyard" type="checkbox" class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded">
                    <label for="frontyard" class="ml-2 text-white dark:text-gray-200">Front Yard</label>
                </div>
            </div>
             </div>

             <!--Nearest Places-->
             <div class="ml-10 sm:mt-0">
                <label class="block text-white dark:text-gray-200 font-medium">Nearest Places</label>
                <div class="flex items-center mt-2">
                    <input id="airport" type="checkbox" class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded">
                    <label for="airport" class="ml-2 text-white dark:text-gray-200">Airport</label>
                </div>
                <div class="flex items-center mt-2">
                    <input id="bus-stand" type="checkbox" class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded">
                    <label for="bus-stand" class="ml-2 text-white dark:text-gray-200">Bus Stand</label>
                </div>
                <div class="flex items-center mt-2">
                    <input id="deck" type="checkbox" class="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 rounded">
                    <label for="deck" class="ml-2 text-white dark:text-gray-200">Deck</label>
                </div>
            </div>

            <!--Upload Image-->
            <div>
                <label class="block text-sm font-medium text-white">
                Upload an Image
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="propertyimage" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span class="">Upload a file</span>
                      <input id="propertyimage" name="propertyimage" type="file" class="sr-only">
                    </label>
                    <p class="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p class="text-xs text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            <!--Upload Video-->
            <div>
                <label class="block text-sm font-medium text-white">
                Upload a Video
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span class="propertyvideo">Upload a file</span>
                      <input id="propertyvideo" name="propertyvideo" type="file" class="sr-only">
                    </label>
                    <p class="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p class="text-xs text-white">
                    MP4, MKV up to 100MB
                  </p>
                </div>
              </div>
            </div>
        </div>

        <div class="flex justify-end mt-6">
            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 mr-4" id="save">Save</button>
            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 mr-4" id="edit">Edit</button>
            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600" id="delete">Delete</button>
        </div>
    </form>
</section>
</template>