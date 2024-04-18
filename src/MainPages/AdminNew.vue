<template>
  <PropertyListing 
  v-if="currentPage==1"
  :propertyListing="page1"
  :propertyTable="page2"
  :addAgent="page3"
  :agentTable="page4"
  :blogListing="page5"
  :blogTable="page6"
  :logout="page7"
  />
  
  <PropertyTable 
  v-if="currentPage==2"
  :propertyListing="page1"
  :propertyTable="page2"
  :addAgent="page3"
  :agentTable="page4"
  :blogListing="page5"
  :blogTable="page6"
  :logout="page7"
  />
  
  
  <AddAgent 
  v-if="currentPage==3"
  :propertyListing="page1"
  :propertyTable="page2"
  :addAgent="page3"
  :agentTable="page4"
  :blogListing="page5"
  :blogTable="page6"
  :logout="page7"
  />
  
  <AgentsTable 
  v-if="currentPage==4"
  :propertyListing="page1"
  :propertyTable="page2"
  :addAgent="page3"
  :agentTable="page4"
  :blogListing="page5"
  :blogTable="page6"
  :logout="page7"
  />
  
  <BlogListing 
  v-if="currentPage==5"
  :propertyListing="page1"
  :propertyTable="page2"
  :addAgent="page3"
  :agentTable="page4"
  :blogListing="page5"
  :blogTable="page6"
  :logout="page7"
  />
  
  <BlogTable 
  v-if="currentPage==6"
  :propertyListing="page1"
  :propertyTable="page2"
  :addAgent="page3"
  :agentTable="page4"
  :blogListing="page5"
  :blogTable="page6"
  :logout="page7"
  />
  
  
  <Logout 
  v-if="currentPage==7"
  :propertyListing="page1"
  :propertyTable="page2"
  :addAgent="page3"
  :agentTable="page4"
  :blogListing="page5"
  :blogTable="page6"
  :logout="page7"
  />
  
  <!-- THIS CHECKS AUTHENTICATION -->
  <AuthChecker
  currentUser="admin"
  />
  </template>
  <script setup>
  
  import SideBarAdminNew from "../components/AdminSidePages/SideBarAdminNew.vue";
  import PropertyListing from "../components/AdminSidePages/PropertyListing.vue";
  import PropertyTable from "../components/AdminSidePages/PropertyTable.vue";
  import AddAgent from "../components/AdminSidePages/AddAgent.vue";
  import AgentsTable from "../components/AdminSidePages/AgentsTable.vue";
  import BlogListing from "../components/AdminSidePages/BlogListing.vue";
  import BlogTable from "../components/AdminSidePages/BlogTable.vue";
  import Logout from "../components/AdminSidePages/SignOutAdminNew.vue";
  import AuthChecker from "../components/AuthChecker.vue";
  
  import { ref } from "vue";
  
  
  const currentPage=ref(1);
  
  const page1 = () => {
    currentPage.value = 1;
  }
  const page2 = () => {
    currentPage.value = 2;
  }
  const page3 = () => {
    currentPage.value = 3;
  }
  const page4 = () => {
    currentPage.value = 4;
  }
  const page5 = () => {
    currentPage.value = 5;
  }
  const page6 = () => {
    currentPage.value = 6;
  }
  const page7 = () => {
    currentPage.value = 7;
  }
  
  
  
  
  </script>
  