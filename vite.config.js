import { defineConfig } from "vite";

const { createVuePlugin } = require("vite-plugin-vue2");

import esbuildPlugin from "esbuild-plugin-vite-element-ui";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin({
      vueTemplateOptions: {
        compilerOptions: {
          // 去掉 回车 引起的 margin
          whitespace: "condense",
        },
      },
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildPlugin()],
    },
  },
});
