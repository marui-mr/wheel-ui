import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import Markdown from "./components/Markdown.vue";
import { h } from "vue";
import intro from "./lib/markdown/intro.md";
import install from "./lib/markdown/install.md";
import start from "./lib/markdown/start.md";

const history = createWebHashHistory();
const md = (string) => h(Markdown, { content: string, key: string });
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: "/doc/intro" },
        {
          path: "intro",
          component: md(intro),
        },
        {
          path: "start",
          component: md(start),
        },
        {
          path: "install",
          component: md(install),
        },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});
