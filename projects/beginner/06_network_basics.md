---
title: Network Diagnostics
description: Create a comprehensive network diagnostic toolkit to understand connectivity concepts
tags: [beginner, network, bash, diagnostics, troubleshooting]
---

## Learning Objectives

- Understand core networking concepts: IP addressing, DNS, routing
- Learn to troubleshoot network connectivity issues
- Develop skills in network performance analysis
- Interpret diagnostic tool outputs
- Create reusable network troubleshooting scripts

## Requirements

You are required to write a script `network-diagnostics.sh` that accepts a hostname or IP address and performs comprehensive network diagnostics:

1. **Connection Testing**
   - Validate input format (hostname or IP)
   - Perform ICMP ping test with configurable count and packet size
   - Report packet loss percentage and RTT statistics (min/avg/max)
   - Test connection to common ports (80, 443, 22)

2. **Routing Analysis**
   - Run traceroute to the target
   - Count number of hops to destination
   - Calculate latency per hop
   - Detect routing anomalies (timeouts, high latency hops)

3. **DNS Investigation**
   - Forward and reverse DNS lookups
   - Query record types: A, AAAA, MX, TXT, CNAME
   - Check DNS resolution speed
   - Display TTL values

4. **Network Information**
   - Display local network configuration
   - Show active interfaces and their status
   - Display routing table
   - List established connections related to target

5. **Reporting**
   - Formatted, timestamped report
   - Summary section with pass/fail indicators
   - Save results to a structured log file
   - Recommend potential solutions for identified issues

### Stretch Goals

- Add TLS/SSL certificate verification for HTTPS endpoints
- Implement parallel testing for faster results
- Add MTU discovery and path MTU testing
- Create ASCII visualizations of test results

### Deliverables

- `network-diagnostics.sh` script
- Sample outputs for different test scenarios
- Documentation covering usage, result interpretation, and troubleshooting recommendations

### References

- [Linux Networking Commands](https://www.tecmint.com/linux-networking-commands/)
- [DNS Concepts - Cloudflare](https://www.cloudflare.com/learning/dns/what-is-dns/)
- [Understanding traceroute](https://www.slashroot.in/how-does-traceroute-work-and-examples-using-traceroute-command)
- [Network Troubleshooting - Red Hat](https://www.redhat.com/sysadmin/troubleshooting-network-connectivity)
- [Netcat Guide - DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-netcat-to-establish-and-test-tcp-and-udp-connections)

---

Once you complete this task you will know how to use command-line tools to diagnose network issues and interpret their outputs - crucial skills for operating distributed systems where network problems are the most common failure point.