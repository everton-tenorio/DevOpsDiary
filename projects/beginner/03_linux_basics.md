---
title: Linux Basics
description: Master essential Linux commands and filesystem operations through hands-on scripting
tags: [beginner, linux, bash, filesystem]
---

## Learning Objectives

- Navigate and manipulate the Linux filesystem confidently
- Understand file and directory permissions and ownership
- Create and execute Bash scripts for automation
- Implement proper file organization practices
- Document system operations effectively

## Requirements

You are required to create a Bash script `linux-basics.sh` that demonstrates core Linux filesystem operations:

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
   - Create files using different methods (`touch`, `echo`, `cat`)
   - Copy files between directories (`cp`)
   - Move and rename files (`mv`)
   - Create symbolic links (`ln -s`)
   - Display file contents (`cat`, `head`, `tail`)

3. **Permissions and Ownership**
   - Change file permissions using symbolic and numeric notation (`chmod`)
   - Change file ownership (`chown`, `chgrp`)
   - Create a script with executable permissions
   - Use `sudo` for elevated operations and document usage

4. **File Analysis and Searching**
   - List directory contents with detail (`ls -la`)
   - Search for files by name (`find`)
   - Search within files (`grep`)
   - Display file type (`file`)

5. **Script Documentation**
   - Add header comments explaining script purpose
   - Document each major section
   - Include usage examples

### Stretch Goals

- Implement logging: append all actions and timestamps to a log file
- Add error handling for operations that might fail
- Create a simple interactive menu
- Add compression and archiving (`tar`, `gzip`)

### Deliverables

- `linux-basics.sh` implementing all required operations
- Example output from a real execution
- Documentation explaining each command and its purpose

### References

- [Linux Command Line Basics - Ubuntu](https://ubuntu.com/tutorials/command-line-for-beginners)
- [Linux Filesystem Hierarchy Standard](https://tldp.org/LDP/Linux-Filesystem-Hierarchy/html/)
- [Linux File Permissions Explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)
- [Bash Scripting Tutorial](https://linuxconfig.org/bash-scripting-tutorial-for-beginners)
- [Advanced Bash Scripting Guide](https://tldp.org/LDP/abs/html/)

---

Once you complete this task you will navigate the Linux filesystem confidently and automate routine operations via shell script - the daily environment of every DevOps engineer.