import DefaultTheme from "vitepress/theme";
import { MotionPlugin } from "@vueuse/motion";
import NexaUI from "@/index";
import "virtual:uno.css";
import "@/styles/index.css";
import type { Theme } from "vitepress";

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(MotionPlugin);
    app.use(NexaUI);
  },
};

export default theme;
