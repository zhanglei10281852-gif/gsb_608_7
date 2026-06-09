/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import dts from 'vite-plugin-dts'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'

  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // Don't copy public/ assets in library mode
    publicDir: isLib ? false : 'public',
    plugins: [
      vue(),
      UnoCSS(),
      // Generate .d.ts types for the library build
      isLib &&
        dts({
          tsconfigPath: resolve(__dirname, 'tsconfig.lib.json'),
          insertTypesEntry: true,
          // Don't roll types up; the Table component uses a generic <script setup
          // generic="..."> which API Extractor cannot fully bundle. Keeping per-file
          // .d.ts preserves correctness for all components.
          rollupTypes: false,
          cleanVueFileName: true,
          copyDtsFiles: false,
          skipDiagnostics: true,
          include: ['src/**/*.ts', 'src/**/*.vue'],
          exclude: ['src/**/*.test.ts', 'src/main.ts', 'src/App.vue', 'src/counter.ts'],
        }),
    ].filter(Boolean),
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
    preview: {
      host: '0.0.0.0',
      port: 3000,
    },
    build: isLib
      ? {
          // Library mode: output ESM + UMD
          outDir: 'dist',
          emptyOutDir: true,
          sourcemap: true,
          lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'NexaUI',
            formats: ['es', 'umd'],
            fileName: (format) => (format === 'es' ? 'nexa-ui.js' : 'nexa-ui.umd.cjs'),
          },
          rollupOptions: {
            external: ['vue', '@vueuse/motion'],
            output: {
              globals: {
                vue: 'Vue',
                '@vueuse/motion': 'VueUseMotion',
              },
              assetFileNames: (assetInfo) => {
                if (assetInfo.name === 'style.css') return 'nexa-ui.css'
                return assetInfo.name ?? '[name][extname]'
              },
              exports: 'named',
            },
          },
        }
      : {
          outDir: 'dist-app',
          emptyOutDir: true,
          sourcemap: false,
        },
    test: {
      globals: true,
      environment: 'happy-dom',
      include: ['src/**/*.test.ts'],
      setupFiles: ['./vitest.setup.ts'],
      css: false,
    },
  }
})
