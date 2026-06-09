# Modal 模态框

模态框用于显示需要用户关注的内容。

## 功能

- 大小：xs, sm, md, lg, xl
- 头部、底部操作区
- 拖拽移动（拖拽标题栏）
- 点击外部关闭
- ESC 键关闭
- 动画效果：fade（淡入淡出）、slide（平移）、scale（缩放）
- 毛玻璃效果

## Props

| 属性           | 类型                         | 默认值  | 说明                             |
| -------------- | ---------------------------- | ------- | -------------------------------- |
| modelValue     | `boolean`                    | -       | 显示状态                         |
| title          | `string`                     | -       | 标题                             |
| size           | `xs \| sm \| md \| lg \| xl` | `md`    | 模态框大小                       |
| closable       | `boolean`                    | `true`  | 显示关闭按钮                     |
| closeOnOverlay | `boolean`                    | `true`  | 点击遮罩关闭                     |
| animation      | `fade \| slide \| scale`     | `scale` | 动画效果（驱动不同运动形态）     |
| draggable      | `boolean`                    | `false` | 可拖拽（拖拽标题栏移动）         |
| glass          | `boolean`                    | `true`  | 毛玻璃效果                       |

## Slots

| 插槽    | 说明       |
| ------- | ---------- |
| default | 模态框内容 |
| footer  | 底部操作区 |

## Events

| 事件              | 参数      | 说明         |
| ----------------- | --------- | ------------ |
| update:modelValue | `boolean` | 显示状态变化 |

## 无障碍

- 使用 `role="dialog"` 和 `aria-modal="true"`
- 打开时禁止页面滚动
- 支持 ESC 键关闭
