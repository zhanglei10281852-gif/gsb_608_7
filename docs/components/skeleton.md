# Skeleton 骨架屏

骨架屏用于在内容加载时显示占位符。

## 功能

- 文本、图片、卡片骨架
- 动画效果：pulse, wave
- 自定义行列配置

## Props

| 属性      | 类型                              | 默认值  | 说明     |
| --------- | --------------------------------- | ------- | -------- |
| variant   | `text \| circular \| rectangular` | `text`  | 骨架类型 |
| animation | `pulse \| wave \| none`           | `pulse` | 动画效果 |
| width     | `string \| number`                | -       | 宽度     |
| height    | `string \| number`                | -       | 高度     |
| rows      | `number`                          | `1`     | 文本行数 |

## 使用示例

```vue
<!-- 用户卡片骨架 -->
<div class="flex items-center gap-4">
  <NSkeleton variant="circular" width="48" height="48" />
  <div>
    <NSkeleton width="120" height="16" />
    <NSkeleton width="80" height="12" />
  </div>
</div>

<!-- 多行文本骨架 -->
<NSkeleton :rows="3" />

<!-- 图片骨架（波浪动画） -->
<NSkeleton variant="rectangular" width="100%" height="200" animation="wave" />
```
