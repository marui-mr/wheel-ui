import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Mark from "./components/Mark.vue";
import Mark2 from "./components/Mark2.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Mark },
    { path: "/xxx", component: Mark2 },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
