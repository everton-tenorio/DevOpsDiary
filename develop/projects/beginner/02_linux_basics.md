---
title: Linux Basics
description: Master essential Linux commands and filesystem operations through hands-on scripting
tags: [beginner, linux, bash, filesystem]
---

## Learning Objectives
- Navigate and manipulate the Linux filesystem confidently
- Understand file/directory permissions and ownership concepts
- Create and execute Bash scripts for automation
- Implement proper file organization practices
- Document system operations effectively

## Requirements

You are required to create a Bash script named `linux-basics.sh` that demonstrates core Linux filesystem operations:

1. **Directory Management**
   - Create a nested directory structure:
     ```
     project/
     ├── docs/
     ├── src/
     │   ├── modules/
     │   └── config/
     └── logs/
     ```
   - Navigate between directories (`cd`)
   - Display current working directory (`pwd`)

2. **File Operations**
   - Create multiple files using different methods (`touch`, `echo`, `cat`)
   - Copy files between directories (`cp`)
   - Move/rename files (`mv`)
   - Create symbolic links (`ln -s`)
   - Display file contents (`cat`, `head`, `tail`, `less`)

3. **Permissions and Ownership**
   - Change file permissions using both symbolic and numeric notation (`chmod`)
   - Change file ownership (`chown`, `chgrp`)
   - Create a script with executable permissions
   - Use `sudo` for elevated operations (document usage)

4. **File Analysis and Searching**
   - List directory contents with detailed information (`ls -la`)
   - Search for files by name (`find`)
   - Search within files (`grep`)
   - Display file type (`file`)

5. **Script Documentation**
   - Add proper header comments explaining script purpose
   - Document each major section/function
   - Include usage examples

### **Stretch goals**
- Implement logging: append all script actions and timestamps to a log file
- Add error handling for operations that might fail
- Create a simple menu system for user interaction
- Add advanced file operations (compression, archiving with `tar`, `gzip`)

### Deliverables
- `linux-basics.sh` script implementing all required operations
- Example output showing successful execution
- Documentation explaining each command and its purpose
- Log file showing operation history (if stretch goal implemented)

### Links
- [Linux Command Line Basics](https://ubuntu.com/tutorials/command-line-for-beginners)
- [Linux Filesystem Hierarchy Standard](https://tldp.org/LDP/Linux-Filesystem-Hierarchy/html/)
- [Bash Scripting Tutorial](https://linuxconfig.org/bash-scripting-tutorial-for-beginners)
- [Linux File Permissions Explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)
- [Advanced Bash Scripting Guide](https://tldp.org/LDP/abs/html/)
- [Linux Documentation Project](https://tldp.org/)

---

Once you have completed this project, you will be able to navigate the Linux filesystem confidently, automate routine tasks, and manage file permissions via shell scripting - fundamental skills for any DevOps practitioner.