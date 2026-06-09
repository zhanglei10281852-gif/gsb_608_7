import DefaultTheme from "vitepress/theme";
import NexaUI from "../../../src/index";
import "uno.css";
import "../../../src/styles/index.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(NexaUI);
  },
};
