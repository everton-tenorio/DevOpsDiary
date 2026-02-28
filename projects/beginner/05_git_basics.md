---
title: Git Basics
description: Master version control fundamentals through practical Git operations
tags: [beginner, git, version-control]
---

## Learning Objectives

- Understand Git's distributed version control model
- Learn core Git commands and workflows
- Implement proper branching strategies
- Connect local repositories to remote platforms (GitHub)
- Document code changes with meaningful commit messages

## Requirements

You are required to create a local Git repository, connect it to GitHub, and perform the following operations:

1. **Repository Creation and Setup**
   - Initialize a repository (`git init`)
   - Configure your identity (`git config --global user.name` / `user.email`)
   - Create a `README.md` with a project description

2. **Working with Changes**
   - Create and edit files in your repository
   - Check file status (`git status`)
   - Stage changes (`git add`)
   - Commit with meaningful messages following Conventional Commits (`git commit -m "feat: ..."`)

3. **Remote Repository Integration**
   - Create a GitHub repository
   - Connect local to remote (`git remote add origin <URL>`)
   - Push local commits to GitHub (`git push -u origin main`)
   - Clone the repository to a different location (`git clone <URL>`)

4. **Branching and Merging**
   - Create a feature branch (`git checkout -b feature-x`)
   - Make changes on the feature branch
   - Merge back to main (`git merge feature-x`)
   - Resolve merge conflicts

5. **History and Collaboration**
   - View commit history (`git log --oneline --graph`)
   - Compare differences (`git diff`)
   - Pull changes from remote (`git pull`)

### Stretch Goals

- Add a `.gitignore` for common files (`node_modules/`, `.env`, `*.log`)
- Create and merge a pull request on GitHub
- Use `git rebase` to maintain a clean project history
- Configure SSH key authentication for GitHub

### Deliverables

- A GitHub repository with:
  - At least 5 commits showing progression of work
  - A feature branch that was merged back into main
  - A meaningful `README.md`
  - A properly configured `.gitignore`
- Documentation of the commands used and lessons learned

### References

- [Git Official Documentation](https://git-scm.com/doc)
- [Pro Git Book (free)](https://git-scm.com/book/en/v2)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Interactive Git Branching](https://learngitbranching.js.org/)
- [GitHub Guides: Hello World](https://guides.github.com/activities/hello-world/)
- [Git Cheat Sheet - GitHub](https://education.github.com/git-cheat-sheet-education.pdf)

---

Once you complete this task you will have a solid understanding of Git workflows, branching, and remote collaboration - essential skills for every DevOps engineer and prerequisite for every task that follows.