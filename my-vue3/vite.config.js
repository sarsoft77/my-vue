import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuePugPlugin from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      preprocessOptions: { // 'preprocessOptions' is passed through to the pug compiler 
        plugins: [
          vuePugPlugin
        ]
      }
    }
  })],
  optimizeDeps: {
    entries: ['index.pug'],
  }
})
