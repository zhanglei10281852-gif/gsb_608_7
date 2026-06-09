# Badge 徽标

徽标用于显示数字、状态或小红点。

## 功能

- 数字、点状、文字徽标
- 颜色变体
- 位置：右上角、右下角等

## Props

| 属性     | 类型                                                   | 默认值      | 说明     |
| -------- | ------------------------------------------------------ | ----------- | -------- |
| value    | `number \| string`                                     | -           | 显示值   |
| dot      | `boolean`                                              | `false`     | 点状徽标 |
| max      | `number`                                               | `99`        | 最大值   |
| type     | `success \| warning \| error \| info`                  | `error`     | 颜色类型 |
| position | `top-right \| top-left \| bottom-right \| bottom-left` | `top-right` | 位置     |
| hidden   | `boolean`                                              | `false`     | 隐藏徽标 |

## 使用示例

```vue
<!-- 数字徽标 -->
<NBadge :value="5">
  <NButton>消息</NButton>
</NBadge>

<!-- 超过最大值 -->
<NBadge :value="100" :max="99">
  <NButton>通知</NButton>
</NBadge>

<!-- 点状徽标 -->
<NBadge dot type="success">
  <NAvatar name="用户" />
</NBadge>
```
