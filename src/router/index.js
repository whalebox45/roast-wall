import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
// import RoastPage from "@/views/RoastPage.vue";

const routes = [
  { path: "/", component: HomeView },
//   { path: "/roast/:id", component: RoastPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
