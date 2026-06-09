import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";

export default defineConfig({
  title: "Nexa UI",
  description: "Modern Vue 3 Component Library",
  lang: "zh-CN",
  vite: {
    plugins: [UnoCSS()],
  },
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Components", link: "/components/button" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          items: [
            { text: "Getting Started", link: "/guide/getting-started" },
            { text: "Design System", link: "/guide/design-system" },
          ],
        },
      ],
      "/components/": [
        {
          text: "Basic Components",
          items: [
            { text: "Button", link: "/components/button" },
            { text: "Input", link: "/components/input" },
            { text: "Card", link: "/components/card" },
            { text: "Avatar", link: "/components/avatar" },
          ],
        },
        {
          text: "Navigation",
          items: [
            { text: "Tabs", link: "/components/tabs" },
            { text: "Breadcrumb", link: "/components/breadcrumb" },
          ],
        },
        {
          text: "Feedback",
          items: [
            { text: "Toast", link: "/components/toast" },
            { text: "Modal", link: "/components/modal" },
            { text: "Skeleton", link: "/components/skeleton" },
          ],
        },
        {
          text: "Data Display",
          items: [
            { text: "Table", link: "/components/table" },
            { text: "Badge", link: "/components/badge" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/your-org/nexa-ui" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright 2026 Nexa UI",
    },
  },
});
