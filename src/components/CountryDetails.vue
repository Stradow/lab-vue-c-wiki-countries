<template>
    <div v-if="country">
      <h1>{{ country.name.common }}</h1>
      <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.cca2.toLowerCase()}.png`" alt="flag" />
      <p>Capital: {{ country.capital[0] }}</p>
      <p>Region: {{ country.region }}</p>
      <p>Subregion: {{ country.subregion }}</p>
      <p>Population: {{ country.population }}</p>
    </div>
  </template>
  
  <script>
  import { ref, watch, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: "CountryDetails",
    setup() {
      const route = useRoute();
      const country = ref(null);
  
      const fetchCountry = async (alpha3Code) => {
        const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`);
        const data = await response.json();
        country.value = data;
      };
  
      watch(
        () => route.params.alpha3Code,
        (newAlpha3Code) => {
          if (newAlpha3Code) {
            fetchCountry(newAlpha3Code);
          }
        },
        { immediate: true }
      );
  
      return { country };
    },
  };
  </script>
  
  <style scoped>
  a {
    color: #42b983;
  }
  </style>
  