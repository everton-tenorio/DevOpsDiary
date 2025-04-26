const fs = require('fs');
const path = require('path');

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
