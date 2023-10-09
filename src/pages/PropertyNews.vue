<script lang="ts" setup >
   
</script>

<template>
  <div class="header">
    <h1 class="header-title">Property News</h1>
  </div>

  
  <div class="iframe-container">
    <h2 text-align ="left" class="video-title">Testing testing</h2>
    <div class="iframe-wrapper">
      <iframe
        :src="embedUrl"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>

    
  
  </template>
  
  <script>
  export default {
    computed: {
      embedUrl() {
        return `https://www.youtube.com/embed/8GAmyQqh_Kc`;
      },
    },
  };
  </script>
  
  <style scoped>
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
 .article-wrapper{
    display: flex;
    margin-left: 20px;
 }
  .iframe-container {
    display: flex;
    justify-content: left;
    flex-direction: column;
    align-items: center;
    height: 100vh; 
  }
  
  .iframe-wrapper {
    position: relative;
    width: 70%;
    padding-bottom: 39.375%;
    transform: scale(0.8); 
    transform-origin: left top; 
    margin-left: 0px; 
  }
  .video-title {
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0; /* Adjust the margin as needed */
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
  