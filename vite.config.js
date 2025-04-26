import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ mode }) => {
  // vamos usar um modo "preview" para o build de develop
  const isPreview = mode === 'preview'

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    assetsInclude: ['**/*.md'],
    // base diferente para main x develop
    base: isPreview
      ? '/DevOpsDiary/develop/'   // preview
      : '/DevOpsDiary/',          // produção
  }
})

