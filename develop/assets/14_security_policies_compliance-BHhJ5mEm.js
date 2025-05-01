const e=`---
title: Security Policies & Compliance
description: Enforce security policies and meet compliance standards in Kubernetes
tags: [intermediate, kubernetes, security, compliance, devops]
---

Learning Objectives

    Apply Pod Security Admission or PSPs for workload isolation

    Configure RBAC for fine-grained access control

    Manage secrets securely with Vault or Sealed Secrets

    Implement network security policies across Namespaces

    Address PCI-DSS and HIPAA compliance requirements


## Requirements

1. Enable Pod Security Admission (or PSP) and label Namespaces accordingly  
2. Create RBAC Roles and RoleBindings for team members  
3. Integrate HashiCorp Vault or Sealed Secrets for sensitive data  
4. Define NetworkPolicies for cross-Namespace restrictions  
5. Document PCI-DSS and HIPAA controls applied  

### **Stretch goals**
- Automate compliance checks with OPA/Gatekeeper  
- Generate audit logs and ship to an external system  
- Perform a gap analysis against a chosen compliance standard  

### Deliverables
- PSP (or PodSecurityAdmission), RBAC, and NetworkPolicy manifests  
- Vault or Sealed Secrets configuration in your repo  
- Compliance summary report  

### Links
- [Pod Security Admission](https://kubernetes.io/docs/concepts/security/pod-security-admission/)  
- [RBAC Authorization](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)  
- [HashiCorp Vault](https://www.vaultproject.io/docs/)  

---

This task ensures your cluster meets enterprise security and compliance needs.

`;export{e as default};
