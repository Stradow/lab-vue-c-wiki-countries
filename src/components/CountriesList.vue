<template>
    <div>
      <ul class="list-group">
        <li v-for="country in countries" :key="country.alpha3Code" class="list-group-item">
          <router-link :to="`/list/${country.alpha3Code}`">{{ country.name.common }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: "CountriesList",
    setup() {
      const countries = ref([]);
  
      onMounted(async () => {
        const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
        const data = await response.json();
        countries.value = data;
      });
  
      return { countries };
    },
  };
  </script>
  
  <style scoped>
  a {
    color: #42b983;
  }
  </style>