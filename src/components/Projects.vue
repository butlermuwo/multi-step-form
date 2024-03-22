<template>
    <div>
      <input type="text" placeholder="Search">
      <button>Add projects</button>
      <ul>
        <li v-for="(value, key) in formData" :key="key">
          {{ key }}: {{ value }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      console.log(this.$store); 
    },
    computed: {
      formData() {
        return this.$store.state.formData;
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  