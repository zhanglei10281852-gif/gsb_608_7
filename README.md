# Nexa UI

## How to Run

```bash
# Docker 方式启动（推荐）
docker-compose up --build -d

# 本地开发
npm install
npm run dev          # 组件预览
npm run docs:dev     # 文档站点
```

## Services

| 服务     | 地址                  | 说明                 |
| -------- | --------------------- | -------------------- |
| 组件预览 | http://localhost:3000 | Nexa UI 组件演示页面 |
| 文档站点 | http://localhost:3001 | VitePress 组件文档   |

## 测试账号

本项目为前端组件库，无需登录账号。

## 题目内容

项目概述开发名为「Nexa UI」的现代化Vue3组件库，采用原子设计理念，注重设计系统、开发者体验和可访问性。技术栈Vue 3.4 + Composition API + TypeScript 5.3Vite 5.x 构建工具UnoCSS 原子化CSS引擎Framer Motion 风格的动画系统Iconify 图标体系Vitepress 文档系统Vitest + Testing Library 测试框架设计系统规范设计原则现代极简主义，采用毛玻璃效果、微圆角组件状态完整：default, hover, focus, active, disabled交互动画时长：100ms（快速），250ms（标准），500ms（舒缓）无障碍访问支持（ARIA标签、键盘导航）色彩系统主色系：蓝紫色渐变（现代科技感）css:root {--primary-50: #f5f3ff;--primary-500: #8b5cf6;--primary-600: #7c3aed;--surface-0: #ffffff;--surface-50: #f8fafc;--surface-900: #0f172a;}排版系统css:root {--font-sans: 'Inter', -apple-system, sans-serif;--font-mono: 'JetBrains Mono', monospace;--text-xs: 0.75rem; /_ 12px _/--text-sm: 0.875rem; /_ 14px _/--text-base: 1rem; /_ 16px _/--text-lg: 1.125rem; /_ 18px _/--text-xl: 1.25rem; /_ 20px _/}组件清单（第一期）基础组件Button - 按钮组件变体：solid, outline, ghost, text尺寸：xs, sm, md, lg, xl图标支持：左图标、右图标、纯图标加载状态、禁用状态Input - 输入框标签、占位符、帮助文本前缀/后缀内容验证状态：success, warning, error密码显示切换、搜索框变体Card - 卡片容器头部、内容区、底部操作区悬停效果、可点击卡片边框、阴影变体Avatar - 头像图片、字母、图标类型圆形/方形、尺寸预设组合头像、在线状态指示器导航组件Tabs - 标签页水平/垂直布局带下划线指示器可关闭标签、图标支持Breadcrumb - 面包屑可点击路径、分隔符自定义响应式折叠反馈组件Toast - 轻提示位置：top-left, top-right, bottom-left, bottom-right类型：success, error, warning, info自动关闭、手动关闭进度条显示Modal - 模态框大小：sm, md, lg, xl头部、底部操作区拖拽、点击外部关闭动画效果：fade, slide, scaleSkeleton - 骨架屏文本、图片、卡片骨架动画效果：pulse, wave自定义行列配置数据展示Table - 表格固定表头、列宽调整排序、筛选、分页斑马纹、紧凑模式虚拟滚动（大数据量）Badge - 徽标数字、点状、文字徽标颜色变体位置：右上角、右下角等

**技术栈：**

- Vue 3.4 + Composition API + TypeScript 5.3
- Vite 5.x 构建工具
- UnoCSS 原子化 CSS 引擎
- Framer Motion 风格的动画系统
- Iconify 图标体系
- Vitepress 文档系统
- Vitest + Testing Library 测试框架

**设计系统规范：**

- 现代极简主义，采用毛玻璃效果、微圆角
- 组件状态完整：default, hover, focus, active, disabled
- 交互动画时长：100ms（快速），250ms（标准），500ms（舒缓）
- 无障碍访问支持（ARIA 标签、键盘导航）
- 主色系：蓝紫色渐变（现代科技感）

**组件清单（第一期）：**

基础组件：

- Button 按钮 - 变体(solid/outline/ghost/text)、尺寸(xs/sm/md/lg/xl)、图标支持、加载/禁用状态
- Input 输入框 - 标签、占位符、帮助文本、验证状态、密码切换
- Card 卡片 - 头部/内容/底部、悬停效果、可点击
- Avatar 头像 - 图片/字母/图标、圆形/方形、在线状态

导航组件：

- Tabs 标签页 - 水平/垂直布局、下划线指示器
- Breadcrumb 面包屑 - 可点击路径、分隔符自定义

反馈组件：

- Toast 轻提示 - 4种位置、4种类型、自动关闭、进度条
- Modal 模态框 - 多种尺寸、动画效果(fade/slide/scale)
- Skeleton 骨架屏 - 文本/图片/卡片骨架、pulse/wave动画

数据展示：

- Table 表格 - 排序、斑马纹、紧凑模式
- Badge 徽标 - 数字/点状、颜色变体、位置配置

---

## 项目介绍

Nexa UI 是一个现代化的 Vue 3 组件库，专注于：

- 🎨 **设计系统** - 完整的色彩、排版、间距规范
- ♿ **无障碍** - WCAG 兼容，支持键盘导航和屏幕阅读器
- ⚡ **高性能** - Tree-shakeable，UnoCSS 原子化样式
- 🔧 **开发体验** - 完整的 TypeScript 支持

## 脚本命令

```bash
npm run dev          # 启动组件预览
npm run build        # 构建生产版本
npm run test         # 运行测试
npm run docs:dev     # 启动文档站点
npm run docs:build   # 构建文档
```
