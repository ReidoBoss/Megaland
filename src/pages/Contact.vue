<script lang="ts" setup >
   
</script>

<template>
    <div class="page-container">
      <div class="image-container">
        <img src="../assets/mgpng.png" alt="mgpng" class="mgpng" />
        <img src="../assets/getInTouch.png" alt="mgpng" class="mgpng" style="width: 200px; height: auto;" />
      </div>
      
      <div class="contact-text">
        <p>📞+63-977-382-4416 📧megalandrealtycebu@gmail.com  📍 Unit 101, 148 Residences, Pelaez St, Cebu City</p>
      </div>
    </div>

    <div class="form-container">
    <div class="form-column">
      <h2>Contact Information</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" v-model="formData.phone" required />
        </div>
      </form>
    </div>

    <div class="form-column">
      <h2>Message/Concern</h2>
      <textarea v-model="formData.message" rows="8"></textarea>
    </div>      
    </div>
  </template>
 <script>
 export default {
   data() {
     return {
       formData: {
         name: "",
         email: "",
         phone: "",
         message: "",
       },
     };
   },
   methods: {
     submitForm() {
       // Handle form submission logic here
       console.log("Form submitted with data:", this.formData);
       // You can send this data to an API or perform other actions as needed.
     },
   },
 };
 </script>
  
  <style scoped>

.form-container {
  display: flex;
  justify-content: space-between;
}

.form-column {
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
  .contact-text{
    font-weight: bold;
    font-size: 20px;
    display: flex;
    justify-content: center; /* Horizontal centering */
    align-items: center;     /* Vertical centering */
    z-index: 2;
  }
  .page-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 350px;
    background-image: url('../assets/conpic.jpeg'); /* Replace 'your-image.jpg' with the path to your background image */
    background-size: cover;
    background-position: relative;
  }
  .page-container::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: rgba(206, 204, 204, 0.8); /* 80% gray overlay */
    z-index: 1; /* Place the overlay above the background image */
  }
  
  .image-container {
    width: 100%;
    height: 25vh; 
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
  
  
