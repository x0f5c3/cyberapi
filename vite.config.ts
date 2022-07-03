import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VitePluginLinaria from "vite-plugin-linaria";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VitePluginLinaria(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          common: [
            "dayjs",
            "localforage"
          ],
          ui: [
            "vue",
            // "vue-router",
          ],
          naive: [
            "naive-ui",
          ]
        },
      },
    },
  },
});
