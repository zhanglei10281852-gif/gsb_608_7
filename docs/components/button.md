# Button 按钮

按钮用于触发操作或导航。

## 变体

| 变体    | 说明             |
| ------- | ---------------- |
| solid   | 实心按钮（默认） |
| outline | 描边按钮         |
| ghost   | 幽灵按钮         |
| text    | 文字按钮         |

## 尺寸

支持 5 种尺寸：`xs`、`sm`、`md`（默认）、`lg`、`xl`

## 状态

- `loading` - 加载状态
- `disabled` - 禁用状态
- `iconOnly` - 纯图标按钮

## Props

| 属性     | 类型                                | 默认值  | 说明       |
| -------- | ----------------------------------- | ------- | ---------- |
| variant  | `solid \| outline \| ghost \| text` | `solid` | 按钮变体   |
| size     | `xs \| sm \| md \| lg \| xl`        | `md`    | 按钮尺寸   |
| disabled | `boolean`                           | `false` | 禁用状态   |
| loading  | `boolean`                           | `false` | 加载状态   |
| iconOnly | `boolean`                           | `false` | 纯图标按钮 |

## Events

| 事件  | 参数         | 说明     |
| ----- | ------------ | -------- |
| click | `MouseEvent` | 点击事件 |

## 无障碍

- 使用原生 `<button>` 元素
- 禁用或加载时设置 `aria-disabled`
- 加载时设置 `aria-busy`
- 支持键盘导航（Enter/Space）
