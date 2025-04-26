import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const isPreview = process.env.VITE_PREVIEW === 'true';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.md'],
  base: isPreview ? '/DevOpsDiary/develop/' : '/DevOpsDiary/',
});
