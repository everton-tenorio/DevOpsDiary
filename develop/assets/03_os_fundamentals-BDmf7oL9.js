const e=`---
title: OS Fundamentals
description: Build a comprehensive system monitoring script to deepen OS knowledge
tags: [beginner, linux, bash, system-monitoring]
---

## Learning Objectives
- Understand core operating system components and their functions
- Learn to retrieve and interpret system information programmatically
- Develop skills in system resource monitoring and analysis
- Implement process management techniques
- Create useful system reports for troubleshooting

## Requirements

You are required to create a Bash script \`os-info.sh\` that gathers and displays detailed operating system information:

1. **System Identification**
   - OS distribution and version (e.g., from \`/etc/os-release\`)
   - Kernel version (\`uname -r\`)
   - System architecture (\`uname -m\`)
   - Hostname and network identity (\`hostname\`, \`hostname -f\`)

2. **Runtime Statistics**
   - System uptime and load averages (\`uptime\`)
   - Current date and time (\`date\`)
   - List of currently logged-in users (\`who\`)
   - Last login information (\`last | head -5\`)

3. **Process Information**
   - Total running processes count (\`ps aux | wc -l\`)
   - Top 5 CPU-consuming processes (\`ps aux --sort=-%cpu | head -6\`)
   - Top 5 memory-consuming processes (\`ps aux --sort=-%mem | head -6\`)
   - Process tree of a specific service (e.g., \`pstree -p $(pidof sshd)\`)

4. **Memory Usage**
   - Total and available memory (\`free -h\`)
   - Swap usage statistics (\`swapon --show\`)
   - Memory info from \`/proc/meminfo\` (parse key statistics)

5. **Storage Information**
   - Disk usage by filesystem (\`df -h\`)
   - Disk usage by directory (\`du -sh /var /home /opt\`)
   - Inode usage (\`df -i\`)

6. **Report Formatting**
   - Use clear section headers
   - Format output for readability (columns, spacing)
   - Include timestamp of report generation
   - Offer both detailed and summary views

### **Stretch goals**
- Add resource usage trends (requires data collection over time)
- Create a cron job to run the script hourly and save reports
- Add CPU temperature monitoring (if available on system)
- Implement color-coded outputs based on resource usage thresholds
- Add network interface statistics and current connections

### Deliverables
- The \`os-info.sh\` script implementing all required information gathering
- Example output from different systems (if possible)
- Documentation explaining the significance of each metric
- Recommendations for interpreting the collected information

### Links
- [Linux Procfs Documentation](https://www.kernel.org/doc/html/latest/filesystems/proc.html)
- [Understanding Linux Load Averages](https://www.brendangregg.com/blog/2017-08-08/linux-load-averages.html)
- [Linux Performance Tools Tutorial](https://netflixtechblog.com/linux-performance-analysis-in-60-000-milliseconds-accc10403c55)
- [Guide to /proc filesystem](https://www.thegeekstuff.com/2010/11/linux-proc-filesystem/)
- [Linux System Monitoring Tools Every SysAdmin Should Know](https://www.tecmint.com/command-line-tools-to-monitor-linux-performance/)
- [Understanding Memory Usage in Linux](https://www.linuxatemyram.com/)

---

Once you have completed this project, you will understand how to programmatically retrieve system information for monitoring and debugging - essential knowledge for effective system administration and DevOps practices.`;export{e as default};
