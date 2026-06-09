import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    dts({
      insertTypesEntry: true,
      outDir: "dist",
      entryRoot: "src",
      include: ["src/**/*.ts", "src/**/*.vue"],
      exclude: [
        "src/**/*.test.ts",
        "src/test/**",
        "src/App.vue",
        "src/main.ts",
        "src/counter.ts",
      ],
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "NexaUI",
      fileName: "nexa-ui",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["vue", "@vueuse/motion"],
      output: {
        globals: {
          vue: "Vue",
          "@vueuse/motion": "VueUseMotion",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "style.css";
          return assetInfo.name as string;
        },
        exports: "named",
      },
    },
    emptyOutDir: true,
  },
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.test.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/components/**/*.vue", "src/composables/**/*.ts"],
      exclude: ["src/**/*.test.ts"],
    },
  },
});
