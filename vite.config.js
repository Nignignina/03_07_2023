import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/variables/geometries.scss";
        @import "./src/scss/colors/all-colors.scss";
        @import "./src/scss/layouts/all-layouts.scss";
        @import "./src/scss/typhography/all-typhography.scss";
       
        `,
      },
    },
  },
});
