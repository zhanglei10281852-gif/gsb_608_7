# 快速开始

## 安装

```bash
npm install nexa-ui
```

## 全局注册

```ts
import { createApp } from "vue";
import NexaUI from "nexa-ui";
import "nexa-ui/style.css";

const app = createApp(App);
app.use(NexaUI);
app.mount("#app");
```

## 按需引入

```vue
<script setup>
import { NButton, NInput } from "nexa-ui";
import "nexa-ui/style.css";
</script>

<template>
  <NButton>点击我</NButton>
  <NInput placeholder="请输入" />
</template>
```

## TypeScript 支持

Nexa UI 使用 TypeScript 编写，提供完整的类型定义：

```ts
import type { Size, Variant, Status } from "nexa-ui";
```
