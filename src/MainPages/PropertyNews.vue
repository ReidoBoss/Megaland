<template>
  <div class="p-3">
    <div class="flex text-[#E67E23] mb-2 md:">
      <div
        class="flex w-[16%] text-lg pl-3 font-poppins font-bold md:text-md lg:text-lg custom-sm:hidden sm:hidden md:hidden lg:block"
      >
        Search Filter
      </div>
      <div
        class="flex w-[56%] custom-sm:ml-[2%] text-lg lg:ml-[2%] lg:pl-5 font-poppins font-bold"
      >
        Blog <NewspaperIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <div
        class="custom-sm:hidden flex w-[30%] text-lg font-poppins font-bold md:ml-9 lg:ml-[10%]"
      >
        All <mdicon class="ml-2" name="post-outline" :width="26" :height="26" />
      </div>
    </div>
    <div class="flex custom-sm:flex custom-sm:flex-col">
      <div
        class="md:hidden sm:hidden custom-sm:hidden xl:block lg:block lg:h-[700px] custom-sm:h-[700px] lg:w-[16%] flex-col overflow-auto ml-6"
      >
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

      <BlogDetails
        :iframe="iframe"
        :developer="developer"
        :title="title"
        :description="description"
        :location="location"
        :details="details"
        :broker="broker"
        :contact_phone="contact_phone"
        :contact_telephone="contact_telephone"
        :email_address="email"
        :key_tags="key_tags"
        :amenities="amenities"
        :landmarks="landmarks"
        :highlights="highlights"
      />

      <div
        class="lg:w-[25%] md:w-[100%] lg:mr-6 custom-sm:flex custom-sm:flex-col"
      >
        <div
          class="custom-sm:block md:hidden lg:hidden flex w-[30%] text-lg flex-row font-poppins font-bold md:ml-9 lg:ml-[10%] text-orange-500"
        >
          <span class="flex-row w-[200px] flex my-3 ml-2"
            ><h3 class="flex">
              More Blogs
              <mdicon
                class="flex absolute ml-[28%] flex-row"
                name="post-outline"
                :width="26"
                :height="26"
              />
            </h3>
          </span>
        </div>

        <div
          class="custom-sm:flex custom-sm:flex-col custom-sm:h-[300px] custom-sm:w-[95%] custom-sm:mx-auto lg:w-full lg:h-[480px] overflow-auto bg-white border-2 custom-sm:hover:border-orange-500 rounded-md shadow-xl lg:p-5 md:p-2 md:ml-2 lg:ml-5 mb-5"
        >
          <Blog
            v-for="(blog, index) in allBlogs"
            @click="currentBlog(blog.id)"
            :thumbnailUrl="blog.thumbnail"
            :description="blog.name"
            :name="blog.broker"
          />
        </div>
        <div></div>
        <div>
          <div clas="lg:w-[28%] md:w-[100%]">
            <div
              class="flex lg:w-full text-[#E67E23] lg:ml-3 lg:mb-2 md:ml-1 md:mb-1"
            >
              <div class="flex text-lg font-semibold pl-3 custom-sm:my-4">
                Comments:
                <ChatBubbleLeftIcon
                  class="h-[26px] w-[26px] ml-1 text-[#E67E23]"
                />
              </div>
            </div>
            <div class="w-[95%] mx-auto">
              <div
                class="flex lg:w-full md:w-[96%] overflow-auto bg-white rounded-md shadow-xl lg:p-3 lg:ml-5 lg:mb-6 md:p-3 md:ml-3 md:my-6 cursor-pointer hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)]"
              >
                <div class="flex ml-2 w-full">
                  <input
                    type="text"
                    placeholder="Leave a comment..."
                    class="w-full border-b-2 pl-2 p3-1 focus:outline-none"
                  />
                  <a
                    href=""
                    class="flex items-center justify-center my-auto ml-1.5"
                    ><PaperAirplaneIcon
                      class="ml-1 mr-1 w-[25px] h-[25px] text-[#E67E23] hover:scale-110"
                  /></a>
                </div>
              </div>

              <!-- comments -->
              <Comment
                name="@Mikilabsyu143"
                description="I held her close to me
'Cause I know she breaks so easily
And then I told her."
              />
              <Comment
                name="@Mikilabsyu143"
                description="But I knew no matter how I tried to console her
She'd just do the best she could
But there are times the best is no damn good"
              />
              <Comment
                name="@Mikilabsyu143"
                description="And no matter how you try to be kind
There's always still a part of you you leave behind
When it falls apart
There's no easy way to break somebody's heart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Accordion from "../components/Accordion.vue";
import {
  NewspaperIcon,
  ChatBubbleLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/24/outline";
import Blog from "../components/Blog.vue";
import Comment from "../components/Comment.vue";
import BlogDetails from "../components/BlogDetails.vue";
import { ref, onMounted, computed } from "vue";

onMounted(() => {
  recommendedBlogs();
});

const iframe = ref();
const name = ref();
const title = ref();
const developer = ref();
const details = ref();
const location = ref();
const description = ref();
const broker = ref();
const contact_phone = ref();
const contact_telephone = ref();
const email = ref();
const key_tags = ref();
const amenities = ref([]);
const landmarks = ref([]);
const highlights = ref([]);

const currentBlog = async (id) => {
  const blog = await getBlog(id);
  iframe.value = blog.iframe;
  title.value = blog.name;
  developer.value = blog.developer;
  location.value = blog.location;
  details.value = blog.details;
  description.value = blog.description;
  broker.value = blog.broker;
  contact_phone.value = blog.contact_phone;
  contact_telephone.value = blog.contact_telephone;
  email.value = blog.email_address;
  key_tags.value = blog.key_tags;

  amenities.value = await getAmenities(id);
  landmarks.value = await getLandmarks(id);
  highlights.value = await getHighlights(id);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const nuller = () => {
  iframe.value = null;
  title.value = null;
  developer.value = null;
  location.value = null;
  details.value = null;
  description.value = null;
  broker.value = null;
  contact_phone.value = null;
  contact_telephone.value = null;
  email.value = null;
  key_tags.value = null;
  amenities.value = null;
  landmarks.value = null;
  highlights.value = null;
};

const allBlogs = ref([]);

const recommendedBlogs = async () => {
  const blogs = await getBlogs(); // all blogs
  for (var i = 0; i < blogs.length; i++) {
    const blogID = blogs[i].blog_id;
    const blog = await getBlog(blogID);
    const image = await getBlogImage(blogID);
    if (i == 0) {
      currentBlog(blogID);
    }
    allBlogs.value.push({
      id: blogID,
      thumbnail: await convertBlob(image),
      name: blog.name,
      broker: blog.broker,
    });
  }
};

const getBlogs = async () => {
  const response = await fetch("http://localhost:8080/getBlogs");
  const data = await response.json();
  return data;
};

const getBlog = async (id) => {
  const response = await fetch(`http://localhost:8080/getBlogByID/${id}`);
  const data = await response.json();
  return data[0];
};

const getBlogImage = async (id) => {
  const response = await fetch(`http://localhost:8080/getBlogImageByID/${id}`);
  const data = await response.json();
  return data[0].thumbnail.data;
};

const getAmenities = async (id) => {
  const response = await fetch(
    `http://localhost:8080/getAmenitiesByBlogID/${id}`
  );
  const data = await response.json();
  return data[0];
};

const getHighlights = async (id) => {
  const response = await fetch(
    `http://localhost:8080/getHighlightsByBlogID/${id}`
  );
  const data = await response.json();
  return data[0];
};

const getLandmarks = async (id) => {
  const response = await fetch(
    `http://localhost:8080/getLandmarksByBlogID/${id}`
  );
  const data = await response.json();
  return data[0];
};

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

<style>
/* Comment Send Button with Orange Scheme */
.comment-button {
  background-color: #ff6600; /* Orange background color */
  color: #fff; /* Text color (white) */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

/* Hover state for the button */
.comment-button:hover {
  background-color: #e65200; /* Darker orange on hover */
}
</style>
