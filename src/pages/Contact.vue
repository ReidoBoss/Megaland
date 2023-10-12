<script lang="ts" setup >
   
</script>

<template>
    <div class="page-container">
      <div class="image-container">
        <img src="../assets/mgpng.png" alt="mgpng" class="mgpng" />
      </div>
      <div class="content">
        Contact Page
      </div>
    </div>
  </template>
  
  <style scoped>
  .page-container {
    display: relative;
    flex-direction: column;
    min-height: 100vh; /* Ensure the container covers the full viewport height */
  }
  
  .image-container {
    width: 100%;
    height: 520px;
    background-image: url('../assets/conpic.jpeg'); /* Replace 'your-image.jpg' with the path to your background image */
    background-size: cover;
    background-position: relative;
    position: relative; /* Add position: relative to allow positioning the logo */
  }
  
  .image-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(206, 204, 204, 0.8); /* 80% gray overlay */
    z-index: 1; /* Place the overlay above the background image */
  }
  
  .mgpng {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 300%; /* Adjust the size of the logo as needed (increased to 70%) */
    z-index: 2; /* Ensure the logo appears above the overlay */
    filter: none; /* Remove grayscale filter for the mgpng element */
  }
  
  .content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #333;
    z-index: 3; /* Place the content above the overlay and mgpng */
  }
  </style>
  
  