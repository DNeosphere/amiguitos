import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` @import "src/variables.scss";
        @import "src/common.scss";`,
        implementation: sass,
      },
    },
  }
})
