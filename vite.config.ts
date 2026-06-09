import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    dts({
      entryRoot: "src",
      outDir: "dist",
      tsconfigPath: "./tsconfig.json",
      insertTypesEntry: true,
      cleanVueFileName: true,
      exclude: [
        "src/**/*.test.ts",
        "src/App.vue",
        "src/main.ts",
        "src/counter.ts",
        "src/style.css",
        "src/test-setup.ts",
        "src/typescript.svg",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "NexaUI",
      fileName: (format) => {
        if (format === "es") return "nexa-ui.js";
        if (format === "umd") return "nexa-ui.umd.cjs";
        return `nexa-ui.${format}`;
      },
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "style.css";
          return assetInfo.name!;
        },
      },
    },
    cssCodeSplit: false,
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./src/test-setup.ts"],
    include: ["src/**/*.test.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: [
        "src/components/**/*.vue",
        "src/composables/**/*.ts",
        "src/utils/**/*.ts",
      ],
    },
  },
});
