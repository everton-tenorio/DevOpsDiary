---
title: Basic Security Checks
description: Develop a comprehensive security audit script for Linux server hardening
tags: [beginner, security, bash, hardening, audit]
---

## Learning Objectives

- Understand common system security vulnerabilities and mitigations
- Learn to perform basic security audits on Linux systems
- Develop security monitoring and reporting skills
- Implement server hardening best practices
- Create actionable security recommendations

## Requirements

You are required to write a Bash script `security-check.sh` that performs a comprehensive security audit on a Linux system:

1. **User Account Security**
   - List all accounts, highlighting those with UID 0 (root equivalent)
   - Identify users with empty or weak password hashes
   - List users with sudo privileges
   - Check password aging policies
   - Detect accounts with duplicate UIDs

2. **SSH Configuration Audit**
   - Check `/etc/ssh/sshd_config`
   - Flag if default port 22 is in use
   - Verify root login is disabled
   - Check authentication method (password vs. key-based)
   - Verify SSH protocol version is 2
   - Check idle timeout settings

3. **Firewall Verification**
   - Check if UFW/iptables/firewalld is installed and running
   - Verify default policies
   - List open ports and allowed services
   - Flag overly permissive rules (`0.0.0.0/0`)
   - Verify rate limiting on SSH

4. **System Security Checks**
   - Detect running services and open ports (`ss`, `netstat`)
   - Verify critical file permissions (`/etc/passwd`, `/etc/shadow`)
   - Check for world-writable files in critical directories
   - Verify SUID/SGID binaries
   - Check for available security updates

5. **Logging and Monitoring**
   - Verify system logging is configured
   - Review failed login attempts
   - Check for unauthorized cron jobs
   - Verify disk usage (full disks prevent logging)

### Stretch Goals

- Generate a security score (0–100) based on findings
- Create an HTML report with color-coded severity levels
- Add remediation recommendations for each finding
- Add rootkit scanning using `rkhunter`

### Deliverables

- `security-check.sh` implementing all required checks
- Example output from a test system
- Documentation covering: usage, tests performed, result interpretation, and remediation steps

### References

- [How To Secure A Linux Server](https://github.com/imthenachoman/How-To-Secure-A-Linux-Server)
- [CIS Linux Benchmarks](https://www.cisecurity.org/benchmark/distribution_independent_linux/)
- [NIST Security Controls](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_2_0/home)
- [SSH Hardening Guide](https://linux-audit.com/audit-and-harden-your-ssh-configuration/)
- [OpenSCAP Security Compliance](https://www.open-scap.org/getting-started/)
- [Linux Security Checklist](https://linuxsecurity.expert/security-tools/linux-security-expert-1/lse-linux-security-checklist/)

---

Once you complete this task you will be familiar with basic Linux security auditing — essential knowledge for maintaining secure infrastructure and a direct prerequisite for the cloud and infrastructure tasks ahead.