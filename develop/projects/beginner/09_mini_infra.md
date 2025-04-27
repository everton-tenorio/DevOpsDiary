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

You are required to set up a complete web server environment manually, documenting each step:

1. **Server Provisioning**
   - Provision a virtual machine (local VM using VirtualBox/VMware or cloud free tier like AWS EC2/Azure VM/GCP CE)
   - Allocate appropriate resources (CPU, memory, storage)
   - Install a Linux distribution (Ubuntu Server 22.04 LTS recommended)
   - Configure network settings (static IP if local, understand public/private IP if cloud)
   - Update the system packages to latest versions

2. **Web Server Installation**
   - Install a web server of your choice:
     - **Option A: Apache**
       - Install Apache (`apt install apache2` or equivalent)
       - Configure main apache2.conf file
       - Create a virtual host configuration
     - **Option B: Nginx**
       - Install Nginx (`apt install nginx` or equivalent)
       - Configure nginx.conf file
       - Create a server block configuration
   - Verify the web server is running (`systemctl status apache2/nginx`)

3. **Network Security Configuration**
   - Configure a basic firewall using UFW or iptables:
     - Allow HTTP (port 80)
     - Allow HTTPS (port 443)
     - Allow SSH (port 22, consider changing to non-standard port)
     - Deny all other incoming traffic
   - Verify firewall configuration and status
   - Test connectivity from an external system

4. **Content Deployment**
   - Create a simple static HTML page (`index.html`) with the following:
     - "Hello, World!" heading
     - Brief description of your server setup
     - Current timestamp (static or dynamic)
     - Basic CSS styling
   - Deploy the HTML file to the web server's document root
   - Verify the page is accessible via browser

5. **Documentation**
   - Create a detailed setup guide documenting all steps
   - Include all commands used
   - Document any issues encountered and their solutions
   - Include screenshots of the working web server
   - Document server specs and configuration details

### **Stretch goals**
- Configure HTTPS with a self-signed certificate or Let's Encrypt certificate
- Implement basic server hardening measures:
  - Disable root SSH login
  - Implement SSH key-based authentication
  - Install and configure fail2ban
- Set up log rotation and monitoring
- Configure a simple performance monitoring dashboard
- Implement automatic security updates

### Deliverables
- Working web server accessible via HTTP/HTTPS
- Complete documentation of the setup process
- `index.html` file with required content
- Screenshots of the deployed website
- Security and configuration report

### Links
- [DigitalOcean Tutorial: How To Install Apache/Nginx on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-22-04)
- [Ubuntu Server Documentation](https://ubuntu.com/server/docs)
- [UFW Firewall Configuration Guide](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-20-04)
- [Let's Encrypt SSL Certificate Guide](https://letsencrypt.org/getting-started/)
- [Linux Server Security Hardening Guide](https://www.tecmint.com/?s=security+best+practices+for+linux+servers)
- [Web Server Performance Tuning](https://www.nginx.com/blog/tuning-nginx/)
- [VirtualBox Official Documentation](https://www.virtualbox.org/wiki/Documentation)
- [AWS EC2 Getting Started Guide](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)

---

Once you have completed this project, you will understand manual server provisioning and basic network security configuration - essential skills for managing infrastructure in a DevOps environment.