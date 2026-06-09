# Breadcrumb 面包屑

面包屑用于显示当前页面在层级结构中的位置。

## 功能

- 可点击路径
- 分隔符自定义
- 响应式折叠

## Props

| 属性      | 类型               | 默认值 | 说明         |
| --------- | ------------------ | ------ | ------------ |
| items     | `BreadcrumbItem[]` | `[]`   | 面包屑项配置 |
| separator | `string`           | `/`    | 分隔符       |
| maxItems  | `number`           | `0`    | 最大显示数量 |

## BreadcrumbItem 配置

```ts
interface BreadcrumbItem {
  label: string; // 显示文本
  href?: string; // 链接地址
  icon?: string; // 图标类名
}
```

## Events

| 事件  | 参数          | 说明         |
| ----- | ------------- | ------------ |
| click | `item, index` | 点击面包屑项 |

## 无障碍

- 使用 `<nav>` 元素包裹
- 设置 `aria-label="Breadcrumb"`
- 当前页面设置 `aria-current="page"`
