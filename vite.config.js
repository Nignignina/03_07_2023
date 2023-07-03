import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/variables/geometries.scss";
        @import "./src/scss/variables/color.scss";
        @import "./src/scss/variables/gradient.scss";
        @import "./src/scss/function/function.scss";
        @import "./src/scss/variables/device.scss";
        `,
      },
    },
  },
});
