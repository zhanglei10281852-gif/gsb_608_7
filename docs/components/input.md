# Input 输入框

输入框用于收集用户输入。

## 功能

- 标签、占位符、帮助文本
- 前缀/后缀内容
- 验证状态：success, warning, error
- 密码显示切换
- 搜索框变体

## Props

| 属性        | 类型                                            | 默认值  | 说明     |
| ----------- | ----------------------------------------------- | ------- | -------- |
| modelValue  | `string`                                        | `''`    | 绑定值   |
| label       | `string`                                        | -       | 标签文本 |
| placeholder | `string`                                        | -       | 占位符   |
| helpText    | `string`                                        | -       | 帮助文本 |
| status      | `success \| warning \| error`                   | -       | 验证状态 |
| disabled    | `boolean`                                       | `false` | 禁用状态 |
| type        | `text \| password \| email \| search \| number` | `text`  | 输入类型 |

## Events

| 事件              | 参数     | 说明                         |
| ----------------- | -------- | ---------------------------- |
| update:modelValue | `string` | 值变化事件                   |
| search            | `string` | 搜索事件（搜索框回车触发）   |
| clear             | -        | 清除事件（搜索框清除按钮触发）|

## 无障碍

- 标签与输入框通过 `id` 关联
- 帮助文本通过 `aria-describedby` 关联
- 错误状态设置 `aria-invalid`
