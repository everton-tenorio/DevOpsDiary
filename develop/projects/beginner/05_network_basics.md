---
title: Network Diagnostics
description: Create a comprehensive network diagnostic toolkit to understand connectivity concepts
tags: [beginner, network, bash, diagnostics, troubleshooting]
---

## Learning Objectives
- Understand core networking concepts (IP addressing, DNS, routing)
- Learn to troubleshoot network connectivity issues
- Develop skills in network performance analysis
- Interpret and visualize network diagnostic data
- Create reusable network troubleshooting tools

## Requirements

You are required to write a script named `network-diagnostics.sh` that accepts a hostname or IP address and performs comprehensive network diagnostics:

1. **Connection Testing**
   - Validate input (check if hostname/IP is properly formatted)
   - Perform ICMP ping test (configurable count, interval, packet size)
   - Calculate and report packet loss percentage and RTT statistics (min/avg/max)
   - Test connection to common ports (HTTP/80, HTTPS/443, SSH/22)
   - Perform TCP handshake timing tests

2. **Routing Analysis**
   - Run traceroute to the target
   - Count number of hops to destination
   - Identify network boundaries (private to public transitions)
   - Calculate latency per hop
   - Detect routing anomalies (timeouts, asymmetric paths)

3. **DNS Investigation**
   - Perform forward and reverse DNS lookups
   - Query different record types (A, AAAA, MX, TXT, CNAME)
   - Check DNS propagation across multiple DNS servers
   - Display TTL values and expiry information
   - Test DNS resolution speed

4. **Network Information**
   - Display local network configuration
   - Show active network interfaces and their status
   - Display routing table information
   - List established connections related to target
   - Check for packet fragmentation issues

5. **Reporting**
   - Create a formatted, timestamped report
   - Include summary section with pass/fail indicators
   - Provide detailed metrics and raw data
   - Recommend potential solutions for identified issues
   - Save results to a log file in a structured format

### **Stretch goals**
- Add MTU discovery and path MTU testing
- Implement parallel testing for faster results
- Create visualizations (ASCII or export data for graphing)
- Add TLS/SSL certificate verification for HTTPS endpoints
- Implement bandwidth testing using iperf3 (if available)

### Deliverables
- Complete `network-diagnostics.sh` script
- Sample outputs for different test scenarios
- Documentation including:
  - Usage instructions with all parameters
  - Interpretation guide for results
  - Common network issues and their indicators
  - Troubleshooting recommendations

### Links
- [Introduction to Computer Networking](https://computer.howstuffworks.com/internet/basics/how-internet-works.htm)
- [Linux Networking Commands Explained](https://www.tecmint.com/linux-networking-commands/)
- [Understanding traceroute Output](https://www.slashroot.in/how-does-traceroute-work-and-examples-using-traceroute-command)
- [DNS Concepts and Operation](https://www.cloudflare.com/learning/dns/what-is-dns/)
- [Network Troubleshooting Methodologies](https://www.redhat.com/sysadmin/troubleshooting-network-connectivity)
- [TCP/IP Tutorial and Technical Overview](https://www.ibm.com/docs/en/zos/2.1.0?topic=networking-tcpip-tutorial-technical-overview)
- [Guide to Netcat (nc) Command](https://www.digitalocean.com/community/tutorials/how-to-use-netcat-to-establish-and-test-tcp-and-udp-connections)

---

Once you have completed this project, you will understand how to use command-line tools to troubleshoot network issues and interpret their outputs - crucial skills for diagnosing connectivity problems in modern distributed systems.