# Card 卡片

卡片是一个容器组件，用于展示相关内容。

## 功能

- 头部、内容区、底部操作区
- 悬停效果
- 可点击卡片
- 边框、阴影变体

## Props

| 属性      | 类型                     | 默认值  | 说明     |
| --------- | ------------------------ | ------- | -------- |
| hoverable | `boolean`                | `false` | 悬停效果 |
| clickable | `boolean`                | `false` | 可点击   |
| bordered  | `boolean`                | `true`  | 显示边框 |
| shadow    | `none \| sm \| md \| lg` | `sm`    | 阴影大小 |

## Slots

| 插槽    | 说明     |
| ------- | -------- |
| default | 卡片内容 |
| header  | 头部区域 |
| footer  | 底部区域 |

## Events

| 事件  | 参数         | 说明                             |
| ----- | ------------ | -------------------------------- |
| click | `MouseEvent` | 点击事件（clickable 为 true 时） |
