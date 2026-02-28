---
title: Mini Automation Project
description: Create a simple deployment automation script for static websites
tags: [beginner, automation, bash, deployment, nginx]
---

## Learning Objectives

- Understand basic deployment automation concepts
- Learn to create reliable and idempotent shell scripts
- Develop skills in service management
- Implement basic deployment verification
- Create maintainable automation scripts

## Requirements

You are required to write a Bash script `deploy-site.sh` that automates the deployment of a static website:

1. **Script Structure**
   - Well-organized script with clear comments
   - Usage instructions displayed with `-h` or `--help`
   - Accept a parameter for the source directory
   - Basic error handling throughout

2. **Environment Setup**
   - Check if Nginx is installed; install if missing
   - Verify the web root directory exists
   - Create it if necessary

3. **Deployment Process**
   - Copy HTML/CSS/JS files from source directory to web root
   - Set appropriate permissions for web files
   - Create a simple backup of any existing files before overwriting
   - Handle common errors: missing source directory, permission issues

4. **Service Management**
   - Test Nginx configuration before restarting (`nginx -t`)
   - Restart the Nginx service
   - Handle service restart failures gracefully

5. **Verification**
   - Send an HTTP GET request to localhost
   - Check for a 200 status code response
   - Display a clear success or failure message

### Stretch Goals

- Add timestamp logging for each deployment step
- Implement simple version numbering for deployments
- Create a rollback function to restore the previous version

### Deliverables

- `deploy-site.sh` implementing all required steps
- Sample HTML files for testing
- Documentation covering: usage, what each part does, and troubleshooting tips

### References

- [Bash Scripting Tutorial](https://linuxconfig.org/bash-scripting-tutorial-for-beginners)
- [Nginx Beginner's Guide](https://nginx.org/en/docs/beginners_guide.html)
- [Linux File Permissions Explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)
- [curl Command Examples](https://linuxize.com/post/curl-command-examples/)
- [HTTP Status Codes - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---

Once you complete this task you will be able to automate basic website deployments using shell scripting - the same principle behind every CI/CD pipeline you will build in the Intermediate level.