import { defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true
      }
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@assets": resolve(__dirname, "src/shared/assets")
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
