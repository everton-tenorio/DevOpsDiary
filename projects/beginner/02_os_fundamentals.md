---
title: OS Fundamentals
description: Build a comprehensive system monitoring script to deepen OS knowledge
tags: [beginner, linux, bash, system-monitoring]
---

## Learning Objectives

- Understand core operating system components and their functions
- Learn to retrieve and interpret system information programmatically
- Develop skills in resource monitoring and analysis
- Implement process management techniques
- Create useful system reports for troubleshooting

## Requirements

You are required to create a Bash script `os-info.sh` that gathers and displays detailed operating system information:

1. **System Identification**
   - OS distribution and version (`/etc/os-release`)
   - Kernel version (`uname -r`)
   - System architecture (`uname -m`)
   - Hostname and network identity (`hostname`, `hostname -f`)

2. **Runtime Statistics**
   - System uptime and load averages (`uptime`)
   - Current date and time (`date`)
   - Logged-in users (`who`)
   - Last login information (`last | head -5`)

3. **Process Information**
   - Total running processes (`ps aux | wc -l`)
   - Top 5 CPU-consuming processes (`ps aux --sort=-%cpu | head -6`)
   - Top 5 memory-consuming processes (`ps aux --sort=-%mem | head -6`)
   - Process tree of a specific service (`pstree -p $(pidof sshd)`)

4. **Memory Usage**
   - Total and available memory (`free -h`)
   - Swap usage (`swapon --show`)
   - Key stats from `/proc/meminfo`

5. **Storage Information**
   - Disk usage by filesystem (`df -h`)
   - Disk usage by directory (`du -sh /var /home /opt`)
   - Inode usage (`df -i`)

6. **Report Formatting**
   - Clear section headers
   - Timestamp of report generation
   - Both detailed and summary views

### Stretch Goals

- Add resource usage trends over time using a cron job
- Add CPU temperature monitoring (if available)
- Implement color-coded output based on usage thresholds
- Include network interface statistics

### Deliverables

- `os-info.sh` script implementing all required sections
- Example output from a real execution
- Documentation explaining what each metric means and how to interpret it

### References

- [Linux Procfs Documentation](https://www.kernel.org/doc/html/latest/filesystems/proc.html)
- [Understanding Linux Load Averages](https://www.brendangregg.com/blog/2017-08-08/linux-load-averages.html)
- [Linux Performance Analysis in 60s - Netflix](https://netflixtechblog.com/linux-performance-analysis-in-60-000-milliseconds-accc10403c55)
- [Guide to /proc filesystem](https://www.thegeekstuff.com/2010/11/linux-proc-filesystem/)
- [Linux Memory: linuxatemyram.com](https://www.linuxatemyram.com/)

---

Once you complete this task you will know how to programmatically retrieve system information for monitoring and debugging - essential knowledge for operating any server in a DevOps environment.