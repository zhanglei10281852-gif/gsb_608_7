import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const isLib = mode === "lib";

  return {
    plugins: [
      vue(),
      UnoCSS(),
      isLib &&
        dts({
          entryRoot: "src",
          outDir: "dist",
          include: ["src/**/*.ts", "src/**/*.vue"],
          exclude: [
            "src/**/*.test.ts",
            "src/test/**",
            "src/App.vue",
            "src/main.ts",
            "src/counter.ts",
            "src/style.css",
            "src/vite-env.d.ts",
          ],
          tsconfigPath: "./tsconfig.json",
          rollupTypes: true,
          insertTypesEntry: true,
        }),
    ].filter(Boolean),
    publicDir: isLib ? false : "public",
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    build: isLib
      ? {
          lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "NexaUI",
            fileName: (format) =>
              format === "es" ? "nexa-ui.js" : `nexa-ui.${format}.cjs`,
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
                return assetInfo.name || "";
              },
            },
          },
          cssCodeSplit: false,
          sourcemap: true,
          emptyOutDir: true,
        }
      : {
          outDir: "dist-app",
          sourcemap: true,
        },
  };
});
