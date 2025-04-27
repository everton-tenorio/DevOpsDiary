const e=`---
title: Mini Automation Project
description: Create a simple deployment automation script for static websites
tags: [beginner, automation, bash, deployment, nginx]
---

## Learning Objectives
- Understand basic deployment automation concepts
- Learn to create reliable shell scripts
- Develop skills in service management
- Implement basic deployment verification
- Create maintainable automation scripts

## Requirements

You are required to write a Bash script \`deploy-site.sh\` that automates the deployment of a static website:

1. **Script Structure**
   - Create a well-organized script with comments
   - Include basic error handling
   - Add usage instructions (displayed with \`-h\` or \`--help\`)
   - Accept parameters for source directory

2. **Environment Setup**
   - Check if Nginx is installed, and install if missing
   - Verify Nginx is installed correctly
   - Check if the web root directory exists

3. **Deployment Process**
   - Copy HTML/CSS/JS files from a specified local directory to the web root
   - Set appropriate permissions for web files
   - Create a simple backup of any existing files
   - Handle common errors (missing source directory, permissions)

4. **Service Management**
   - Test Nginx configuration (\`nginx -t\`)
   - Restart the Nginx service
   - Handle service restart failures

5. **Verification**
   - Send a simple HTTP GET request to localhost
   - Check if the server responds with a 200 status code
   - Display a success or failure message

### **Stretch goal**
- Add basic timestamp logging for each step
- Implement a simple version numbering for deployments
- Create a basic rollback function to restore the previous version

### Deliverables
- Complete \`deploy-site.sh\` script
- Sample HTML files for testing
- Simple documentation explaining:
  - How to use the script
  - What each part of the script does
  - Basic troubleshooting tips

### Links
- [Bash Scripting Tutorial](https://linuxconfig.org/bash-scripting-tutorial-for-beginners)
- [Nginx Basics](https://nginx.org/en/docs/beginners_guide.html)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [Linux File Permissions Explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)
- [Introduction to Web Servers](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
- [Curl Command Tutorial](https://linuxize.com/post/curl-command-examples/)

---

Once you have completed this project, you will be able to automate basic website deployments using shell scripting - a fundamental skill that will prepare you for more advanced DevOps automation tasks in the future.`;export{e as default};
