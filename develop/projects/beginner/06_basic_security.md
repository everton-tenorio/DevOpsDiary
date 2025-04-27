---
title: Basic Security Checks
description: Develop a comprehensive security audit script for Linux server hardening
tags: [beginner, security, bash, hardening, audit]
---

## Learning Objectives
- Understand common system security vulnerabilities and mitigation
- Learn to perform basic security audits on Linux systems
- Develop security monitoring and reporting skills
- Implement best practices for server hardening
- Create actionable security recommendations

## Requirements

You are required to write a Bash script `security-check.sh` that performs a comprehensive security audit on a Linux system:

1. **User Account Security**
   - List all user accounts, highlighting those with UID 0 (root equivalent)
   - Identify users with empty or weak password hashes
   - Check for users with login shells who shouldn't have them
   - List users with sudo privileges
   - Check password aging policies
   - Detect accounts with the same UID

2. **SSH Configuration Audit**
   - Check SSH daemon configuration file (`/etc/ssh/sshd_config`)
   - Verify SSH port (flag if default port 22 is used)
   - Check if root login is permitted
   - Verify authentication methods (password vs. key-based)
   - Check SSH protocol version (should be 2 only)
   - Verify idle timeout settings

3. **Firewall Verification**
   - Check if UFW/iptables/firewalld is installed and running
   - Verify default policies (input, forward, output)
   - List all open ports and allowed services
   - Flag unnecessary open ports
   - Check for overly permissive rules (e.g., 0.0.0.0/0)
   - Verify rate limiting on SSH/admin services

4. **System Security Checks**
   - Detect running services and open ports (`netstat`/`ss`)
   - Check for unattended-upgrades configuration
   - Verify file permissions on critical files (`/etc/passwd`, `/etc/shadow`, etc.)
   - Check for world-writable files in critical directories
   - Verify SUID/SGID binaries and compare against baseline
   - Check for available security updates

5. **Logging and Monitoring**
   - Verify system logging configuration
   - Check login records for suspicious activity
   - Review failed login attempts
   - Check for unauthorized or unexpected cron jobs
   - Verify disk usage (full disks can lead to logging failures)

### **Stretch goals**
- Generate a security score based on findings
- Create an HTML report with color-coded severity levels
- Add recommendations for each identified issue
- Implement automatic remediation option (with confirmation)
- Add malware/rootkit scanning using tools like `rkhunter`

### Deliverables
- Complete `security-check.sh` script
- Example output from a test system
- Documentation explaining:
  - Usage instructions
  - Security tests performed
  - How to interpret results
  - Remediation steps for common issues
  - References to security best practices

### Links
- [Linux Server Hardening Guide](https://github.com/imthenachoman/How-To-Secure-A-Linux-Server)
- [CIS Linux Benchmarks](https://www.cisecurity.org/benchmark/distribution_independent_linux/)
- [NIST Security Controls](https://nvd.nist.gov/800-53)
- [SSH Hardening Guide](https://linux-audit.com/audit-and-harden-your-ssh-configuration/)
- [Linux Security and Hardening Checklist](https://linuxsecurity.expert/security-tools/linux-security-expert-1/lse-linux-security-checklist/)
- [Practical Linux Security Cookbook](https://www.packtpub.com/product/practical-linux-security-cookbook/9781789138399)
- [OpenSCAP Security Compliance](https://www.open-scap.org/getting-started/)

---

Once you have completed this project, you will be familiar with basic security auditing tasks on a Linux system - essential knowledge for maintaining secure infrastructure in a DevOps environment.