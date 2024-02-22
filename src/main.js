import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

const Create = { template: "<div>Create</div>" };

const routes = [
  { path: "/", component: App },
  { path: "/create", component: Create },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp({});
app.use(router);
app.use(Buefy);
app.mount("#app");
