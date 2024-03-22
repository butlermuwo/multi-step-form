<template>
    <div>
      <header class="heading">Projects</header>
      <router-link to="/"></router-link>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
  };
  </script>  

<style scoped>
 .heading {
    color: #1F1F1F;
    font-weight: 700;
    border: 1px;
    background-color: #FFFFFF;
    padding: 20px 0px 20px 42px ;
 }
</style>