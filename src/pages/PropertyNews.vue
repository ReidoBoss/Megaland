<script lang="ts" setup >
   
</script>

<template>
  <div class="header">
    <h1 class="header-title">Property News</h1>
  </div>

  <div class="article-wrapper">
    <!-- Main ari dapita-->
    <div class="main-video">
      <h2 class="video-title">Discover Your Dream Home at Woodway Townhomes 2 in Talisay City!</h2>
      <p class="normal-text">     ⌛15mins ago     |   <a href="https://www.facebook.com/marivil.du"> 📁Marivil Du</a>     |     💬420 Comments     </p>
      <div class="iframe-wrapper">
        <iframe :src="embedUrl" frameborder="0" allowfullscreen></iframe>
      </div>

      <div>
        <h1 class = "video-title">Discover Your Dream Home at Woodway Townhomes 2 in Talisay City!</h1>
        <p class="article-text">Are you ready to embrace the epitome of luxurious living in Talisay City's picturesque Brgy. Pooc? Look no further than 'HICKORY' at Woodway Townhomes 2, a masterpiece crafted by Brickland Property Venture Corp.
          With a generous floor area of approximately 123 sq.m. and lot sizes ranging from 92 to 101 sq.m., 'HICKORY' offers spaciousness and elegance like no other. This single-at...
          <br>
          Are you ready to embrace the epitome of luxurious living in Talisay City's picturesque Brgy. Pooc? Look no further than 'HICKORY' at Woodway Townhomes 2, a masterpiece crafted by Brickland Property Venture Corp.
          With a generous floor area of approximately 123 sq.m. and lot sizes ranging from 92 to 101 sq.m., 'HICKORY' offers spaciousness and elegance like no other. This single-at... <br>
          (Single Attached- Mirror Design)<br>
          Details<br>
          Floor Area: 123 sq.m. +/-<br>
          Lot Area: 92-101 sq.m. +/-<br>

          ⭐4 bedrooms<br>
          ⭐3 toilet & bath<br>
          ⭐living area/ dining area<br>
          ⭐kitchen area (with soft close kitchen cabinets with overhead)<br>
          ⭐provision for extra storage room under stairs<br>
          ⭐balcony<br>
          ⭐w/ covered car park<br>
          ⭐ service area with own laundry tub<br>
          ☎09773824416 (Globe)<br>
          ☎️ 254-1640( Landline)<br>
          ☎️ marivildu75@gmail.com<br>
          </p>

          <div>
  
      <div>
        <h1 class="bold-text">Comment Section</h1>
        <div class="comment-list">
          <div v-for="(comment, index) in comments" :key="index" class="comment">
            <img :src="comment.commenter.profileImage" class="profile-image" alt="Profile Image" />
            <div class="comment-content">
              <p class="comment-author">{{ comment.name }}</p>
              <p class="comment-text">{{ comment.commenter.text }}</p>
            </div>
          </div>
        </div>
        <input v-model="newComment" @keyup.enter="addComment" placeholder="Add a comment..." >
        
      </div>
    </div>

      </div>

    </div>
    <!-- Small Video Ari dapita -->
    <div class="video-grid">
      <h1 class="video-title">Latest Videos</h1>
      <div class="video-item" v-for="(video, index) in videoList" :key="index">
        <h3 class="normal-title">{{ video.title }}</h3>
        <div class="iframe-wrapper">
          <iframe :src="video.embedUrl" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>

  </div>


</template>

<script>
export default {
  data() {
    return {
      embedUrl: "https://www.youtube.com/embed/8GAmyQqh_Kc",
      videoList: [
        {
          title: "Kaido Vs Luffy",
          embedUrl: "https://www.youtube.com/embed/H-MSY0WuUF4",
        },
        {
          title: "5 Star Beach in Bohol",
          embedUrl: "https://www.youtube.com/embed/yTzzcnDCr3E",
        },
        {
          title: "CEBU NORTH REAL ESTATE BOARD",
          embedUrl: "https://www.youtube.com/embed/peQAb4GsEmg",
        },
        {
          title: "5 Star Beach in Bohol",
          embedUrl: "https://www.youtube.com/embed/yTzzcnDCr3E",
        },
        
      ],
      comments: [
        {
          name: "Michael Oliva Tonilon",
          commenter: {
            text: "Yow that's cool.",
            profileImage:"https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/275351773_1051486155402599_5343039413248564312_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFz8rzYyl1PRVJVgXAvqdfGzCzMmIj12wDMLMyYiPXbAJ-nxlCfyN3-q1j9A9GTKIrUhFgFE2-JUl5Sue3YgJku&_nc_ohc=jlRs3Vbq_BwAX8HJkDv&_nc_ht=scontent.fceb1-3.fna&oh=00_AfB3q9gSILYZKuBlAbJqbX7PpEqSp8ngSqMhKEBb1qd4Lg&oe=652EFD5E",
          },
        },
        {
          name: "Paul Here!",
          commenter: {
            text: "Wow chuya gud ana!",
            profileImage: "https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/350123900_925595145377733_1256141448477068296_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHnT9laaf6ieqgx6x8GScqnQaaYsQ4chShBppixDhyFKOpituBdBOL0LLH0TAOP-xpniMKr_BU7iLtrGP98Pi80&_nc_ohc=sckBLcudRoYAX_ftr9X&_nc_ht=scontent.fceb1-3.fna&oh=00_AfBY8-EWCDy7dI1BDGnCWBSWC148SNGkA8b_MkLne65PzA&oe=65302C65",
          },
        },
      ],
      newComment: "",
    };
  },
  methods: {
    addComment() {

    },
  },
};
</script>


<style scoped>
.comment-author{
    font-size: 15px;
    font-weight: bold;
    margin: 20px 0;
    text-align: left;
}
.bold-text {
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
    text-align: left;
  }

  .comment-list {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #f7f7f7;
  }

  .comment {
    display: flex;
    align-items: center;
    margin: 10px 0;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
  }

  .profile-image {
    width: 40px; 
    height: 40px; 
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover; 
  }

  .comment-content {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 0;
    font-size: 16px;
  }


.bold-text{
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
    text-align: left;  
}
.comment-list {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #f7f7f7;
  }

  .comment {
    margin: 10px 0;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 0;
    font-size: 16px;
  }
  .header {
    background-color: #FFA500;
    color: #fff;
    padding: 20px;
    text-align: center;
  }

  .header-title {
    font-size: 36px;
    font-weight: bold;
    margin: 0;
  }

  .article-wrapper {
    display: flex;
    margin-left: 40px;
  }

  .main-video {
    flex: 2; 
    margin-right: 20px;
  }

  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  }

  .video-item {
    display: flex;
    flex-direction: column;
  }

  .iframe-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    padding-bottom: 57%;
    transform: scale(0.8);
    transform-origin: left top;
  }
  .normal-title{
    font-size: 20px;
    font-weight: normal;
    margin: 20px 0;
    text-align: left;   
  }
  .article-text{
    font-size: 17px;
    font-weight: normal;
    margin: 20px 0;
    text-align: left;   
  }
  .normal-text{
    font-size: 15px;
    font-weight: normal;
    color: blue;
    margin: 20px 0;
    text-align: left;   
  }
  .video-title {
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0;
    text-align: left;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
