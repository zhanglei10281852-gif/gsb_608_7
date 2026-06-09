import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Nexa UI",
  description: "现代化 Vue 3 组件库",
  lang: "zh-CN",
  themeConfig: {
    nav: [
      { text: "指南", link: "/guide/getting-started" },
      { text: "组件", link: "/components/button" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "介绍",
          items: [
            { text: "快速开始", link: "/guide/getting-started" },
            { text: "设计系统", link: "/guide/design-system" },
          ],
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          items: [
            { text: "Button 按钮", link: "/components/button" },
            { text: "Input 输入框", link: "/components/input" },
            { text: "Card 卡片", link: "/components/card" },
            { text: "Avatar 头像", link: "/components/avatar" },
          ],
        },
        {
          text: "导航组件",
          items: [
            { text: "Tabs 标签页", link: "/components/tabs" },
            { text: "Breadcrumb 面包屑", link: "/components/breadcrumb" },
          ],
        },
        {
          text: "反馈组件",
          items: [
            { text: "Toast 轻提示", link: "/components/toast" },
            { text: "Modal 模态框", link: "/components/modal" },
            { text: "Skeleton 骨架屏", link: "/components/skeleton" },
          ],
        },
        {
          text: "数据展示",
          items: [
            { text: "Table 表格", link: "/components/table" },
            { text: "Badge 徽标", link: "/components/badge" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/your-org/nexa-ui" },
    ],
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "© 2026 Nexa UI",
    },
  },
});
