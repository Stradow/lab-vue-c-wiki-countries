import { createRouter, createWebHistory } from "vue-router";
import CountriesList from "../../components/CountriesList.vue";
import CountryDetails from "../../components/CountryDetails.vue";

const routes = [
  { path: "/", component: CountriesList },
  { path: "/country/:id", component: CountryDetails }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
