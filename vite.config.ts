import { defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react-swc"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@use \"@/shared/styles/_globals.scss\" as *;"
      }
    }
  }
})
