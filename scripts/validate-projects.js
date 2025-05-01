import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Workaround para __dirname em ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const projectsDir = path.join(__dirname, '../projects');

const categories = fs.readdirSync(projectsDir);

categories.forEach(category => {
  const categoryPath = path.join(projectsDir, category);

  if (!fs.statSync(categoryPath).isDirectory()) return;

  const projectFiles = fs.readdirSync(categoryPath);

  projectFiles.forEach(file => {
    const filePath = path.join(categoryPath, file);

    if (!fs.statSync(filePath).isFile()) return;

    const content = fs.readFileSync(filePath, 'utf-8');

    if (!content.includes('title:') || !content.includes('description:')) {
      console.error(`❌ Invalid project file: ${filePath}`);
      process.exit(1);
    }
  });
});

console.log('✅ All project files are valid.');