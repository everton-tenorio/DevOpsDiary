---
title: Kubernetes Cluster Setup & Application Deployment
description: Provision a Kubernetes cluster and deploy a sample application
tags: [intermediate, kubernetes, devops, orchestration]
---

## Requirements

1. Provision a Kubernetes cluster (e.g., Minikube, kind, GKE, EKS or AKS)  
2. Create two Namespaces: `dev` and `prod`  
3. Deploy a simple web application using a Deployment and Service  
4. Store configuration in a ConfigMap and sensitive data in a Secret  
5. Apply resource `requests` and `limits` to your Pods  
6. Demonstrate scaling the Deployment (`kubectl scale`)  

### **Stretch goals**
- Use `NetworkPolicy` to restrict pod communication  
- Implement Pod Security Standards via labels  
- Deploy a StatefulSet for a database component  

### Deliverables
- YAML manifests for Namespaces, Deployment, Service, ConfigMap, and Secret  
- README with `kubectl` commands used  
- Screenshot or logs showing successful rollout and scaling  

### Links
- [Kubernetes Setup Guides](https://kubernetes.io/docs/setup/)  
- [Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)  
- [ConfigMaps & Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)  


---

### Learning Objectives

- Provision a Kubernetes cluster (minikube or managed)
- Organize workloads using Namespaces
- Deploy apps with Deployments and Services
- Manage configuration with ConfigMaps and Secrets
- Configure resource quotas and limits

---

This task will solidify your ability to deploy and manage workloads on Kubernetes.

