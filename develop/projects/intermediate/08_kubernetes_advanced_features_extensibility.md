---
title: Kubernetes Advanced Features & Extensibility
description: Leverage Custom Resources, Operators, and advanced controllers in Kubernetes
tags: [intermediate, kubernetes, devops, extensibility]
---

## Requirements

1. Create a CRD and deploy an instance of the custom resource  
2. Install or develop a simple Kubernetes Operator (e.g., using Operator SDK)  
3. Enable and test an Admission Controller (e.g., `PodSecurity`)  
4. Define a PodDisruptionBudget for your web application  
5. Create and apply a PriorityClass to critical workloads  

### **Stretch goals**
- Write a basic webhook Admission Controller  
- Extend an existing Operator with new custom logic  
- Benchmark scheduling differences with PriorityClasses  

### Deliverables
- CRD and Operator manifests in your repo  
- Admission Controller configuration  
- PodDisruptionBudget and PriorityClass YAMLs  

### Links
- [Custom Resources](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/)  
- [Kubernetes Operators](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)  
- [Pod Disruption Budgets](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/)  

---


Learning Objectives

    Define and use CustomResourceDefinitions (CRDs)

    Understand and deploy Kubernetes Operators

    Configure Admission Controllers

    Implement PodDisruptionBudgets for high availability

    Apply PriorityClasses for workload scheduling

---

You will gain deep insights into extending Kubernetes beyond core APIs.
