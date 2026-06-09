# Tabs 标签页

标签页用于在不同内容区域之间切换。

## 功能

- 水平/垂直布局
- 带下划线指示器（自动滑动跟随）
- 可关闭标签
- 图标支持
- 键盘导航（方向键、Home、End）

## Props

| 属性       | 类型      | 默认值  | 说明                     |
| ---------- | --------- | ------- | ------------------------ |
| modelValue | `string`  | -       | 当前激活的标签 key       |
| tabs       | `Tab[]`   | `[]`    | 标签配置数组             |
| vertical   | `boolean` | `false` | 垂直布局                 |
| closable   | `boolean` | `false` | 全局可关闭（可被 Tab 级覆盖） |

## Tab 配置

```ts
interface Tab {
  key: string; // 唯一标识
  label: string; // 标签文本
  icon?: string; // 图标类名
  disabled?: boolean; // 禁用状态
  closable?: boolean; // 可关闭（覆盖全局设置）
}
```

## Events

| 事件              | 参数     | 说明             |
| ----------------- | -------- | ---------------- |
| update:modelValue | `string` | 切换标签事件     |
| close             | `string` | 关闭标签事件(key)|

## 无障碍

- 使用 `role="tablist"` 和 `role="tab"`
- 支持 `aria-selected` 和 `aria-disabled`
- 键盘导航：左右/上下方向键切换、Home/End 跳转首尾
