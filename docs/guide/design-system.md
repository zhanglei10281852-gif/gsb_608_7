# 设计系统

## 设计原则

- 现代极简主义，采用毛玻璃效果、微圆角
- 组件状态完整：default, hover, focus, active, disabled
- 交互动画时长：100ms（快速），250ms（标准），500ms（舒缓）
- 无障碍访问支持（ARIA 标签、键盘导航）

## 色彩系统

### 主色系（蓝紫色渐变）

| 变量        | 色值    | 用途     |
| ----------- | ------- | -------- |
| primary-50  | #f5f3ff | 浅色背景 |
| primary-500 | #8b5cf6 | 主色     |
| primary-600 | #7c3aed | 悬停状态 |

### 语义色彩

| 类型    | 色值    | 用途     |
| ------- | ------- | -------- |
| success | #22c55e | 成功状态 |
| warning | #f59e0b | 警告状态 |
| error   | #ef4444 | 错误状态 |
| info    | #3b82f6 | 信息提示 |

## 排版系统

```css
--font-sans: "Inter", -apple-system, sans-serif;
--font-mono: "JetBrains Mono", monospace;

--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
```

## 动画时长

| 名称   | 时长  | 用途     |
| ------ | ----- | -------- |
| fast   | 100ms | 快速反馈 |
| normal | 250ms | 标准过渡 |
| slow   | 500ms | 舒缓动画 |
