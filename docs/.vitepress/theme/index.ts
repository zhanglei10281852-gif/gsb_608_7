import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import "uno.css";
import "../../../src/styles/index.css";

export default {
  extends: DefaultTheme,
} satisfies Theme;
