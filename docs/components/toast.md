# Toast 轻提示

轻提示用于显示简短的操作反馈信息。

## 功能

- 位置：top-left, top-right, bottom-left, bottom-right
- 类型：success, error, warning, info
- 自动关闭
- 手动关闭
- 进度条显示

## Props

| 属性         | 类型                                                   | 默认值      | 说明               |
| ------------ | ------------------------------------------------------ | ----------- | ------------------ |
| message      | `string`                                               | -           | 提示内容           |
| type         | `success \| error \| warning \| info`                  | `info`      | 提示类型           |
| position     | `top-left \| top-right \| bottom-left \| bottom-right` | `top-right` | 显示位置           |
| duration     | `number`                                               | `3000`      | 自动关闭时间（ms） |
| closable     | `boolean`                                              | `true`      | 显示关闭按钮       |
| showProgress | `boolean`                                              | `true`      | 显示进度条         |

## Events

| 事件  | 说明     |
| ----- | -------- |
| close | 关闭事件 |
