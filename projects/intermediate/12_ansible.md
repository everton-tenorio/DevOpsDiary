---
title: Configuration Management with Ansible
description: Automate server configuration and application deployment using Ansible
tags: [intermediate, ansible, configuration-management, automation]
---

## Learning Objectives
- Understand configuration management concepts and approaches
- Learn Ansible architecture and components
- Develop skills in writing reusable Ansible playbooks
- Implement idempotent configuration management
- Create role-based Ansible structures for better organization

## Requirements

You are required to implement server configuration management using Ansible:

1. **Ansible Environment Setup**
   - Install Ansible on your control node
   - Create an inventory file with target servers
     - Use at least one cloud VM from your previous Terraform project
     - Optionally add a local VM for testing
   - Configure SSH access to managed nodes
   - Verify connectivity (`ansible all -m ping`)
   - Document your setup process

2. **Basic Server Configuration**
   - Create a playbook (`basic_setup.yml`) that:
     - Updates all system packages
     - Configures timezone and locale
     - Installs common utilities (curl, vim, htop, etc.)
     - Creates a non-root user with sudo privileges
     - Configures SSH hardening (disable root login, key-based auth)
     - Sets up a basic firewall (ufw/firewalld)
   - Run the playbook against your inventory
   - Verify the configuration applied correctly

3. **Web Server Deployment**
   - Create a playbook (`web_server.yml`) to:
     - Install and configure Nginx or Apache
     - Deploy a sample website from templates
     - Configure virtual hosts
     - Set up proper file permissions
     - Enable HTTPS with self-signed certificates
     - Configure basic performance settings
   - Implement handlers for service restarts
   - Use templates for configuration files
   - Use variables for customization

4. **Role-Based Organization**
   - Refactor your playbooks into roles:
     ```
     roles/
     ├── common/          # Base system configuration
     │   ├── tasks/
     │   ├── handlers/
     │   ├── templates/
     │   └── defaults/
     ├── web_server/      # Web server configuration
     │   ├── tasks/
     │   ├── handlers/
     │   ├── templates/
     │   └── defaults/
     └── security/        # Security hardening
         ├── tasks/
         ├── handlers/
         ├── templates/
         └── defaults/
     ```
   - Create a main playbook that applies roles to hosts
   - Document the role structure and purpose

5. **Ansible Best Practices**
   - Implement proper error handling
   - Ensure idempotency in all tasks
   - Use tags for selective execution
   - Implement proper variable precedence
   - Document all roles and variables

### **Stretch goals**
- Implement Ansible Vault for secret management
- Create a dynamic inventory script for cloud resources
- Implement a database server role (MySQL/PostgreSQL)
- Develop integration tests for your Ansible roles
- Create a CI pipeline to validate Ansible syntax

### Deliverables
- Complete Ansible project with inventory, playbooks, and roles
- Documentation of role structure and variable usage
- Screenshots showing successful playbook execution
- Before/after verification of configured services
- Sample templates and configuration files
- README with instructions for using the Ansible configuration

### Links
- [Ansible Documentation](https://docs.ansible.com/)
- [Ansible Best Practices](https://docs.ansible.com/ansible/latest/user_guide/playbooks_best_practices.html)
- [Ansible for DevOps (Book)](https://www.ansiblefordevops.com/)
- [Ansible Galaxy](https://galaxy.ansible.com/) - Repository of roles
- [Ansible Role Development Guide](https://www.digitalocean.com/community/tutorials/how-to-create-reusable-ansible-playbooks-for-infrastructure-management)
- [Jinja2 Template Designer Documentation](https://jinja.palletsprojects.com/en/latest/templates/)
- [Testing Ansible Roles with Molecule](https://molecule.readthedocs.io/en/latest/)
- [Ansible Security Automation](https://www.ansible.com/use-cases/security-automation)

---

Once you have completed this project, you will be able to automate server configuration using Ansible - an essential skill for implementing consistent, repeatable, and scalable infrastructure management in a DevOps environment.