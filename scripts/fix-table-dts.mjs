// Post-build shim for NTable.d.ts
// vue-tsc currently fails to emit .d.ts for components using
// `<script setup lang="ts" generic="...">` (TS4082). We ship a sound,
// hand-written generic type declaration so consumers still get IntelliSense.
import { writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const target = resolve(__dirname, '../dist/components/Table/NTable.d.ts')

if (!existsSync(dirname(target))) {
  mkdirSync(dirname(target), { recursive: true })
}

const dts = `import type { DefineComponent } from 'vue'

export interface TableColumn<T> {
  key: keyof T
  label: string
  sortable?: boolean
  filterable?: boolean
  resizable?: boolean
  width?: string
}

export interface TableProps<T> {
  data: T[]
  columns: TableColumn<T>[]
  striped?: boolean
  compact?: boolean
  stickyHeader?: boolean
  virtualScroll?: boolean
  rowHeight?: number
  visibleRows?: number
  pageSize?: number
  currentPage?: number
}

export interface TableEmits<T> {
  (e: 'rowClick', row: T, index: number): void
  (e: 'update:currentPage', page: number): void
}

declare const NTable: DefineComponent<TableProps<any>, {}, {}, {}, {}, any, any, TableEmits<any>>
export default NTable
`

writeFileSync(target, dts, 'utf8')
// eslint-disable-next-line no-console
console.log('[postbuild] wrote', target)
