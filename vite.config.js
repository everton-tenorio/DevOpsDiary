import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Workaround para __dirname em ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const isPreview = mode === 'preview';
  const isProd = mode === 'production';

  return {
    plugins: [
      vue(),
      {
        // Plugin personalizado para copiar arquivos .md
        name: 'copy-md-files',
        generateBundle() {
          const srcDir = path.resolve(__dirname, 'projects');
          const destDir = path.resolve(__dirname, 'dist/projects');

          // Função para copiar diretórios recursivamente
          const copyDir = (src, dest) => {
            if (!fs.existsSync(dest)) {
              fs.mkdirSync(dest, { recursive: true });
            }
            const entries = fs.readdirSync(src, { withFileTypes: true });
            for (const entry of entries) {
              const srcPath = path.join(src, entry.name);
              const destPath = path.join(dest, entry.name);
              if (entry.isDirectory()) {
                copyDir(srcPath, destPath);
              } else if (entry.name.endsWith('.md')) {
                fs.copyFileSync(srcPath, destPath);
              }
            }
          };

          copyDir(srcDir, destDir);
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    assetsInclude: ['**/*.md'],
    publicDir: 'public',
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
      },
    },
    base: isPreview ? '/DevOpsDiary/develop/' : isProd ? '/DevOpsDiary/':  '/',
  };
});