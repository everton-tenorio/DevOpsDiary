---
title: Mini Infrastructure Project
description: Deploy and configure a production-ready web server environment manually
tags: [beginner, infra, vm, webserver, security]
---

## Learning Objectives

- Understand server provisioning and configuration
- Learn web server installation and configuration best practices
- Develop skills in network security and firewall management
- Implement basic system hardening techniques
- Document infrastructure deployment for repeatability

## Requirements

You are required to set up a complete web server environment manually, documenting every step:

1. **Server Provisioning**
   - Provision a virtual machine (local VM with VirtualBox/VMware, or cloud free tier: AWS EC2, Azure VM, GCP CE)
   - Install Ubuntu Server 22.04 LTS
   - Configure network settings (static IP if local, public/private IP if cloud)
   - Update all system packages

2. **Web Server Installation**
   - Choose and install a web server:
     - **Option A: Apache** - configure `apache2.conf` and create a virtual host
     - **Option B: Nginx** - configure `nginx.conf` and create a server block
   - Verify the web server is running (`systemctl status`)

3. **Network Security Configuration**
   - Configure a firewall using UFW or iptables:
     - Allow HTTP (80), HTTPS (443), SSH (22)
     - Deny all other incoming traffic
   - Verify firewall status
   - Test connectivity from an external system

4. **Content Deployment**
   - Create a simple `index.html` with a "Hello, World!" heading, a description of your setup, and basic CSS
   - Deploy to the web server's document root
   - Verify the page is accessible via browser

5. **Documentation**
   - Create a setup guide documenting all steps and commands
   - Document any issues encountered and their solutions
   - Include screenshots of the working web server

### Stretch Goals

- Configure HTTPS with Let's Encrypt or a self-signed certificate
- Implement SSH hardening: disable root login, key-based auth only, `fail2ban`
- Set up log rotation
- Configure automatic security updates

### Deliverables

- Working web server accessible via HTTP
- Complete documentation of the setup process
- `index.html` with required content
- Screenshots of the deployed website

### References

- [How To Install Nginx on Ubuntu - DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-22-04)
- [UFW Firewall Guide - DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-20-04)
- [Ubuntu Server Documentation](https://ubuntu.com/server/docs)
- [Let's Encrypt Getting Started](https://letsencrypt.org/getting-started/)
- [VirtualBox Documentation](https://www.virtualbox.org/wiki/Documentation)
- [AWS EC2 Getting Started](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)

---

Once you complete this task you will have manually provisioned and secured a real server - the hands-on foundation that makes everything from containers to Kubernetes actually make sense.