const e=`---
title: Advanced Networking & Ingress Controllers
description: Configure network policies and ingress routing for Kubernetes workloads
tags: [intermediate, kubernetes, networking, devops]
---

Learning Objectives

    Implement Kubernetes NetworkPolicies for pod communication

    Deploy and configure an Ingress Controller (e.g., NGINX, Traefik)

    Set up secure external access (TLS termination)

    Manage service discovery and DNS resolution

    Understand CNI plugin basics for network isolation


## Requirements

1. Create NetworkPolicy YAMLs to restrict traffic between front and backends  
2. Install an Ingress Controller and configure an Ingress resource  
3. Enable TLS termination at the Ingress level  
4. Verify DNS resolution of services within the cluster  
5. Document CNI plugin configuration and its impact  

### **Stretch goals**
- Implement path-based and host-based routing  
- Use ExternalDNS to automate DNS records in a cloud provider  
- Test network policy isolation failures and fixes  

### Deliverables
- NetworkPolicy and Ingress resource manifests  
- TLS certificates (self-signed or managed) in Secrets  
- README showing access methods and DNS setup  

### Links
- [Network Policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/)  
- [Ingress Controllers](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/)  
- [Kubernetes DNS](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/)  

---

You’ll be able to secure and expose your Kubernetes services reliably.

`;export{e as default};
