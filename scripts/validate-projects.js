const fs = require('fs');
const path = require('path');
const projectsDir = './projects';
fs.readdirSync(projectsDir).forEach(file => {
  const content = fs.readFileSync(path.join(projectsDir, file), 'utf-8');
  if (!content.includes('title:') || !content.includes('description:')) {
    console.error(`Invalid project: ${file}`);
    process.exit(1);
  }
});
