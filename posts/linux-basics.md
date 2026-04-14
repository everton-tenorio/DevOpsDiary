---
title: "Linux Basics"
date: 2026-04-14
slug: linux-basics
description: "This guide covers Linux basics, turning isolated commands into a practical foundation for starting in automation workflows."
tags: ["linux", "bash", "filesystem", "devops"]
bannerImage: "/blog/linux-basics.png"
---
This guide covers Linux basics, turning isolated commands into a practical foundation for starting in automation workflows.

This is Task 03 of the DevOpsDiary beginner path. The deliverable is a Bash script called `linux-basics.sh` that demonstrates core filesystem operations. By the time you finish this post, you will understand not just the commands, but the reasoning behind them.

---

## You Just Landed on a Server You Have Never Seen Before

This happens constantly in DevOps work. A new machine, a colleague's environment, a cloud instance that was provisioned before you joined the team. The first thing you do is orient yourself.

```bash
$ pwd
/home/everton

$ whoami
everton

$ ls -la
total 48
drwxr-xr-x 6 everton everton 4096 Mar 22 14:31 .
drwxr-xr-x 3 root    root    4096 Mar 10 09:12 ..
-rw-r--r-- 1 everton everton  220 Mar 10 09:12 .bash_logout
-rw-r--r-- 1 everton everton 3526 Mar 10 09:12 .bashrc
drwxr-xr-x 2 everton everton 4096 Mar 22 14:28 projects
```
</br>

`pwd` tells you where you are. `whoami` tells you who the system thinks you are. `ls -la` tells you what is here and who owns it.

That last column before the filename is not decoration. It is information. `drwxr-xr-x` means directory, owner can read/write/execute, group can read/execute, others can read/execute. `everton everton` means the owner is everton and the group is everton. The date tells you when it was last modified.

You read that output every time you land somewhere new. It takes three seconds and saves you from operating blind.

---

## The Filesystem Hierarchy: Where Things Live

Linux follows a standard called the Filesystem Hierarchy Standard. Every distribution puts things in roughly the same places. Knowing this means you are not lost on any Linux system, regardless of whether it is Ubuntu, Debian, Devuan, or CentOS.

```
/
├── /bin      essential binaries available to all users (ls, cp, bash)
├── /etc      system configuration files
├── /home     user home directories
├── /var      variable data: logs, caches, mail spools
├── /tmp      temporary files, cleared on reboot
├── /proc     virtual filesystem with live kernel state
├── /dev      devices represented as files
├── /usr      user programs, libraries, documentation
└── /opt      optional and third-party software
```
</br>

`/etc` is where you will spend a significant amount of time. Every service on the system has its configuration there. SSH lives at `/etc/ssh/sshd_config`. Nginx lives at `/etc/nginx/`. Network configuration, user management, cron jobs — all in `/etc`.

`/var/log` is where you go when something breaks. System logs, application logs, authentication logs. The answer to most production incidents is somewhere in `/var/log`.

`/proc` you already know from Task 02. It is not a real directory. The kernel writes it in memory and everything in it reflects the live state of the system.

---

## Building a Project Structure

The task requires creating a nested directory structure from scratch. This is one of the most common operations in any automation script.

```bash
mkdir -p project/{docs,src/{modules,config},logs}
```
</br>

The `-p` flag does two things: it creates parent directories as needed, and it does not fail if the directory already exists. Without `-p`, you would need to create each directory individually in the right order. With it, one command creates the entire tree.

The brace expansion `{docs,src/{modules,config},logs}` is a shell feature, not a `mkdir` feature. The shell expands it before passing the arguments to `mkdir`. The result is equivalent to running:

```bash
mkdir -p project/docs
mkdir -p project/src/modules
mkdir -p project/src/config
mkdir -p project/logs
```
</br>

Verify the result:

```bash
$ find project -type d
project
project/docs
project/src
project/src/modules
project/src/config
project/logs
```
</br>

---

## File Operations

Once you have a structure, you need to populate it and move things around. Linux gives you several ways to create files depending on what you need.

```bash
# create an empty file
touch project/docs/README.md

# create a file with content
echo "# Linux Basics Project" > project/docs/README.md

# create a file with multiple lines
cat > project/docs/notes.txt << EOF
Task: linux-basics.sh
Author: everton
Date: $(date +%Y-%m-%d)
EOF
```
</br>

`touch` creates an empty file or updates the timestamp of an existing one. `echo` with `>` creates a file with a single line, overwriting if it exists. `>>` appends instead of overwriting. `cat` with a here-document (`<< EOF`) lets you write multiple lines inline.

Copying and moving:

```bash
cp project/docs/README.md project/src/README.md
cp -r project/docs/ project/docs_backup/

mv project/docs/notes.txt project/docs/NOTES.md
mv project/docs_backup/ project/archive/
```
</br>

`cp -r` copies recursively, which is required for directories. `mv` works for both files and directories without a flag, and it also serves as rename when source and destination are in the same directory.

---

## Permissions: Who Can Do What

Every file and directory in Linux has three permission sets: owner, group, and others. Each set has three bits: read, write, execute.

```bash
$ ls -la project/
-rw-r--r-- 1 everton everton  24 Mar 22 14:45 README.md
drwxr-xr-x 2 everton everton 4096 Mar 22 14:31 src/
```
</br>

Breaking down `-rw-r--r--`:

```
- rw- r-- r--
│ │   │   └── others: read only
│ │   └────── group: read only
│ └────────── owner: read and write
└──────────── file type (- = regular file, d = directory)
```
</br>

The numeric representation maps directly to binary. Read is 4, write is 2, execute is 1. You add them for each group:

```
7 = 4+2+1 = rwx
6 = 4+2+0 = rw-
5 = 4+0+1 = r-x
4 = 4+0+0 = r--
```
</br>

So `chmod 755` sets `rwxr-xr-x`. `chmod 644` sets `rw-r--r--`. These two cover the vast majority of cases. Scripts that need to run get 755. Configuration files that should only be readable by the owner get 600. Web server static files typically get 644.

```bash
# make the script executable
chmod +x linux-basics.sh

# numeric notation
chmod 755 linux-basics.sh
chmod 644 project/docs/README.md

# change ownership
chown everton:everton project/docs/README.md
chown -R everton:www-data project/src/
```
</br>

`chown -R` changes ownership recursively. The `user:group` syntax sets both at once. When you are configuring a web server, you often need files owned by the deploy user but readable by the web server group. This is where `chown` with group assignment becomes important.

---

## Finding Things

A production server can have hundreds of thousands of files. You need to be able to find what you are looking for without browsing directories manually.

`find` searches by file attributes: name, type, size, age, permissions.

```bash
# find all log files under /var
find /var/log -name "*.log"

# find files modified in the last 7 days
find . -type f -mtime -7

# find world-writable files (security concern)
find /etc -perm -o+w

# find and delete files older than 30 days
find /tmp -type f -mtime +30 -delete

# find and execute a command on each result
find . -name "*.sh" -exec chmod +x {} \;
```
</br>

The `-exec` flag is where `find` becomes genuinely powerful. `{}` is replaced by each found file, and `\;` ends the command. This pattern shows up constantly in automation scripts.

`grep` searches inside files.

```bash
# search recursively for a string
grep -r "PermitRootLogin" /etc/ssh/

# show line numbers
grep -n "error" /var/log/syslog

# invert match: show lines that do NOT match
grep -v "^#" /etc/ssh/sshd_config

# case insensitive
grep -i "failed" /var/log/auth.log

# search with context (3 lines before and after)
grep -B3 -A3 "segfault" /var/log/syslog
```
</br>

`grep -v "^#"` is particularly useful for reading configuration files. Most config files have extensive comments. `grep -v "^#"` removes all comment lines and shows only the active configuration, which is usually what you need when you are diagnosing why a service is behaving a certain way.

Combining `find` and `grep`:

```bash
# find all scripts containing a specific function
find . -name "*.sh" | xargs grep -l "deploy_app"
```
</br>

`xargs` takes lines from standard input and passes them as arguments to the next command. This pattern, `find | xargs grep`, is one of the most useful combinations in the Linux toolkit.

---

## Symbolic Links

A symbolic link is a file that points to another file or directory. The link itself contains only the path to the target. When you access the link, the kernel follows the pointer and gives you the target.

```bash
ln -s /opt/myapp/config/nginx.conf /etc/nginx/nginx.conf
```
</br>

```bash
$ ls -la /etc/nginx/
lrwxrwxrwx 1 root root 32 Mar 22 15:00 nginx.conf -> /opt/myapp/config/nginx.conf
```
</br>

The `l` at the start of `lrwxrwxrwx` indicates a symlink. The `->` shows where it points.

Why does this matter in practice? In deployment workflows, symlinks let you switch between versions atomically. You deploy the new version to `/opt/myapp/releases/v2.1.0/`, then update the symlink from `/opt/myapp/current` to point to the new release. All processes that reference `/opt/myapp/current` immediately see the new version. If something is wrong, you change the symlink back. No files were moved or copied during the switch.

This is the pattern used by Capistrano, by many deploy scripts, and by tools like systemd for managing alternative binaries.

---

## Putting It Together: linux-basics.sh

The complete script combines all of the above into a single executable that can be run on any Linux system to demonstrate each concept.

```bash
#!/bin/bash

# linux-basics.sh
# Task 03 - DevOpsDiary beginner path
# Demonstrates core Linux filesystem operations

set -e

TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
LOG_FILE="linux-basics.log"

log() {
    echo "[$TIMESTAMP] $1" | tee -a "$LOG_FILE"
}

echo "======================================"
echo "  LINUX BASICS — $TIMESTAMP"
echo "======================================"

# 1. directory structure
log "Creating project directory structure"
mkdir -p project/{docs,src/{modules,config},logs}
find project -type d

# 2. file operations
log "Creating and manipulating files"
touch project/docs/README.md
echo "# Linux Basics Project" > project/docs/README.md
cp project/docs/README.md project/src/README.md
ln -sf "$(pwd)/project/src/config" project/config_link

# 3. permissions
log "Setting permissions"
chmod 755 linux-basics.sh
chmod 644 project/docs/README.md
ls -la project/docs/

# 4. searching
log "Running find and grep examples"
find project -name "*.md"
grep -r "Linux" project/

log "Done."
```
</br>

`set -e` makes the script exit immediately if any command fails. This is important in automation. Without it, a failed `mkdir` would let the script continue and produce confusing results. `tee -a` writes to both stdout and the log file simultaneously.

---

## What to Read

The Linux command line is deep. Two resources worth your time:

**The Linux Command Line** by William Shotts is available free at linuxcommand.org and covers everything in this task in more depth. It is practical, direct, and does not assume you already know everything.

**Unix and Linux System Administration Handbook** by Evi Nemeth is the reference for when you move beyond basics into configuring systems for real workloads. It is dense and thorough.

The commands in this task are not the interesting part. The interesting part is understanding why the filesystem is structured the way it is, why permissions exist in three groups, why symlinks are a deployment primitive and not just a shortcut. That understanding is what makes the difference between someone who can follow instructions and someone who can debug a broken system at 2 AM.

---

- The Linux Command Line, William Shotts - https://linuxcommand.org
- Filesystem Hierarchy Standard - https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html
- Linux File Permissions Explained - https://redhat.com/sysadmin/linux-file-permissions-explained
- DevOpsDiary Task 03 - https://devopsdiary.site/beginner/03_linux_basics
