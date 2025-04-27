const e=`---
title: Git Basics
description: Master version control fundamentals through practical Git operations
tags: [beginner, git, version-control]
---

\`\`\`
Learning Objectives
- Understand Git's distributed version control system concepts
- Learn core Git commands and workflows
- Implement proper branching strategies
- Connect local repositories to remote platforms (GitHub)
- Document code changes with meaningful commit messages
\`\`\`

## Requirements

You are required to create a local Git repository, connect it to GitHub, and perform basic operations:

1. **Repository Creation and Setup**
   - Initialize a repository (\`git init\`)
   - Configure your identity (\`git config --global user.name/user.email\`)
   - Create a README.md with project description
   
2. **Working with Changes**
   - Create and edit files in your repository
   - Check file status (\`git status\`)
   - Stage changes (\`git add <filename>\` or \`git add .\`)
   - Commit with meaningful messages (\`git commit -m "message"\`)
   
3. **Remote Repository Integration**
   - Create a GitHub repository
   - Connect local to remote (\`git remote add origin <URL>\`)
   - Push local commits to GitHub (\`git push -u origin main\`)
   - Clone the repository to a different location (\`git clone <URL>\`)
   
4. **Branching and Merging**
   - Create a feature branch (\`git branch feature-x\` and \`git checkout feature-x\` or \`git checkout -b feature-x\`)
   - Make changes on the feature branch
   - Merge changes back to main (\`git checkout main\` and \`git merge feature-x\`)
   - Resolve any merge conflicts
   
5. **History and Collaboration**
   - View commit history (\`git log\`)
   - Compare differences (\`git diff\`)
   - Pull changes from remote (\`git pull\`)

### **Stretch goals**
- Add a \`.gitignore\` file to exclude common temporary files and directories (e.g., \`node_modules/\`, \`.env\`)
- Create and resolve a pull request on GitHub
- Use \`git rebase\` to maintain a clean project history
- Configure SSH key authentication for GitHub

### Deliverables
- A GitHub repository with:
  - At least 5 commits showing progression of work
  - A feature branch that has been merged back into main
  - A meaningful README.md file
  - A properly configured .gitignore file
- Documentation of the commands used and lessons learned

### Links
- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Guides: Hello World](https://guides.github.com/activities/hello-world/)
- [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials)
- [Interactive Git Branching Learning Tool](https://learngitbranching.js.org/)
- [Git Cheat Sheet by GitHub](https://education.github.com/git-cheat-sheet-education.pdf)
- [Pro Git Book (free)](https://git-scm.com/book/en/v2)

---

Once you have completed this project, you will have a solid understanding of Git workflows, branching, and collaborating with remote repositories - essential skills for any DevOps engineer.`;export{e as default};
