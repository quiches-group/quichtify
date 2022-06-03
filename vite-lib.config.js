import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/main.lib.js'),
      name: 'quichtify',
      formats: ['es', 'cjs', 'umd'],
    },
  },
  rollupOptions: {
    external: ['vue'],
    output: {
      globals: {
        vue: 'Vue',
      },
    },
  },
});
