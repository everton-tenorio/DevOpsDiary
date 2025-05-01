---
title: Docker Security Hardening
description: Apply security best practices to Docker images for intermediate DevOps workflows
tags: [intermediate, docker, security, devops]
---

## Requirements

1. Scan your base and final images with [Trivy](https://github.com/aquasecurity/trivy) and document findings  
2. Enable Docker Content Trust and sign your images  
3. Remove all unnecessary packages and tools from the final image  
4. Run the container as a non-root user only  
5. Set the container filesystem to read-only where feasible  
6. Document each hardening step in your repo's SECURITY.md  

### **Stretch goals**
- Integrate image scanning into CI pipeline  
- Use Clair or other scanners for comparison  
- Automate vulnerability alerts via Slack or email  

### Deliverables
- Hardened Dockerfile with security steps  
- Trivy scan reports committed to the repo  
- SECURITY.md detailing your hardening process  

### Links
- [Docker Content Trust](https://docs.docker.com/engine/security/trust/)  
- [Trivy Vulnerability Scanner](https://github.com/aquasecurity/trivy)  
- [Read-only Filesystem in Docker](https://docs.docker.com/engine/reference/run/#read-only)  

---

### Learning Objectives

- Scan images for vulnerabilities using Trivy
- Implement Docker Content Trust (DCT)
- Apply least-privilege principles in images
- Harden containers by removing unnecessary packages
- Configure read-only file systems where possible

---

These practices will ensure your containers meet enterprise security standards.
