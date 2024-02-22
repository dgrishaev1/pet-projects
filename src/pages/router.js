import Main from "./Main.vue";
import Create from "./Create.vue";
import { createRouter, createWebHistory } from "vue-router";

export const ROUTES = {
  MAIN: "/",
  CREATE: "/create",
};

const routes = [
  { path: ROUTES.MAIN, name: "Главная", component: Main },
  { path: ROUTES.CREATE, name: "Создание публикации", component: Create },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
