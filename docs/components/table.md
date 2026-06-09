# Table 表格

表格用于展示结构化数据。

## 功能

- 固定表头
- 列宽调整（拖拽表头边框）
- 排序、筛选、分页
- 斑马纹
- 紧凑模式
- 虚拟滚动

## Props

| 属性         | 类型       | 默认值  | 说明                          |
| ------------ | ---------- | ------- | ----------------------------- |
| data         | `T[]`      | `[]`    | 表格数据                      |
| columns      | `Column[]` | `[]`    | 列配置                        |
| striped      | `boolean`  | `false` | 斑马纹                        |
| compact      | `boolean`  | `false` | 紧凑模式                      |
| stickyHeader | `boolean`  | `false` | 固定表头                      |
| virtualScroll| `boolean`  | `false` | 虚拟滚动                      |
| rowHeight    | `number`   | `52`    | 虚拟滚动行高（px）            |
| visibleRows  | `number`   | `10`    | 虚拟滚动可见行数              |
| pageSize     | `number`   | `0`     | 每页条数，0 为不分页          |
| currentPage  | `number`   | `1`     | 当前页码，支持 v-model        |

## Column 配置

```ts
interface Column<T> {
  key: keyof T; // 数据字段
  label: string; // 列标题
  sortable?: boolean; // 可排序
  filterable?: boolean; // 可筛选
  resizable?: boolean; // 可调整列宽（默认 true）
  width?: string; // 列宽
}
```

## Slots

| 插槽       | 参数             | 说明             |
| ---------- | ---------------- | ---------------- |
| cell-[key] | `{ value, row }` | 自定义单元格内容 |

## Events

| 事件               | 参数         | 说明           |
| ------------------ | ------------ | -------------- |
| rowClick           | `row, index` | 行点击事件     |
| update:currentPage | `number`     | 页码变化事件   |
