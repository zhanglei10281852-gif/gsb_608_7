import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist',
      tsconfigPath: './tsconfig.json',
      exclude: [
        'src/**/*.test.ts',
        'src/main.ts',
        'src/App.vue',
        'src/counter.ts',
        'vitest.setup.ts',
      ],
      cleanVueFileName: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NexaUI',
      formats: ['es', 'umd'],
      fileName: (format) => `nexa-ui.${format === 'es' ? 'js' : 'umd.cjs'}`,
    },
    rollupOptions: {
      external: ['vue', '@vueuse/motion'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          '@vueuse/motion': 'VueUseMotion',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
