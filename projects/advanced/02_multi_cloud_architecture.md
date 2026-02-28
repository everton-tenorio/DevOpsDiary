---
title: Multi-Cloud Architecture
description: Design and implement a resilient multi-cloud architecture with workload portability and vendor independence
tags: [advanced, multi-cloud, architecture, kubernetes, devops]
---

## Learning Objectives

- Understand the trade-offs of multi-cloud vs. single-cloud vs. hybrid-cloud strategies
- Design workload portability using cloud-agnostic abstractions
- Implement federated cluster management across multiple cloud providers
- Configure cross-cloud networking, DNS failover, and traffic routing
- Document architecture decisions with explicit trade-off analysis

## Requirements

You are required to design and partially implement a multi-cloud architecture, making and documenting every architectural decision:

1. **Architecture Decision and Documentation**
   - Write an Architecture Decision Record (ADR) for the multi-cloud strategy:
     - Why multi-cloud? Evaluate: resilience, cost optimization, regulatory requirements, avoiding lock-in
     - When does multi-cloud make sense - and when it does NOT (operational complexity, cost of abstraction)
     - Chosen strategy: Active-Active, Active-Passive, or Workload Distribution
     - Accepted trade-offs and long-term operational cost
   - Create an architecture diagram showing the full multi-cloud topology
   - Define which workloads run where and why

2. **Cluster Federation**
   - Provision two Kubernetes clusters in different cloud providers (e.g., GKE + EKS, or EKS + AKS)
   - Use Cluster API or cloud-specific tools to manage both clusters from a single control plane
   - Configure Kubefed or use ArgoCD ApplicationSets to deploy to both clusters simultaneously
   - Verify the same application runs identically on both clusters
   - Document the federation model and its operational overhead

3. **Cloud-Agnostic Abstractions**
   - Use Crossplane or Terraform with provider-agnostic modules to provision:
     - Object storage (S3 on AWS, GCS on GCP, or Blob on Azure)
     - Managed Kubernetes clusters
     - DNS zones
   - The same Terraform/Crossplane code must work against both providers with minimal changes
   - Document which abstractions are genuinely portable and which required provider-specific code

4. **Cross-Cloud Networking and Traffic Management**
   - Configure a global load balancer or DNS-based failover (e.g., Route53 latency routing, Cloudflare Load Balancing)
   - Implement health checks that automatically redirect traffic to the healthy cluster
   - Simulate a full cluster outage in one cloud and verify traffic fails over automatically
   - Measure and document: failover detection time, DNS propagation time, user impact window

5. **Observability Across Clouds**
   - Configure a centralized observability stack that receives metrics and logs from both clusters
   - Use Thanos or Victoria Metrics for cross-cluster Prometheus federation
   - Create a unified Grafana dashboard showing both clusters side by side
   - Define alerts that trigger on the aggregate, not per-cluster

### Stretch Goals

- Implement service mesh federation (Istio multi-cluster or Linkerd multi-cluster) for encrypted cross-cluster communication
- Configure Velero to back up one cluster and restore to the other
- Evaluate and document the total cost of the multi-cloud setup vs. a single-cloud equivalent

### Deliverables

- ADR documenting the multi-cloud decision with explicit trade-offs
- Architecture diagram of the full topology
- Terraform/Crossplane code for cloud-agnostic resource provisioning
- Cluster federation configuration with deployment evidence on both clusters
- Failover test documentation: scenario, commands, timing, and results
- Unified observability dashboard screenshot

### References

**Books**
- [Cloud Strategy - Gregor Hohpe](https://leanpub.com/cloudstrategy)
- [Kubernetes Patterns - Bilgin Ibryam & Roland Huß](https://www.oreilly.com/library/view/kubernetes-patterns/9781492050278/)

**Courses and Guides**
- [Google Cloud: Multi-Cloud Architecture Guide](https://cloud.google.com/architecture/multicloud)
- [AWS: Multi-Region Application Architecture](https://aws.amazon.com/solutions/implementations/multi-region-application-architecture/)
- [CNCF Multi-Cloud Working Group](https://github.com/cncf/tag-runtime)
- [Crossplane Documentation](https://docs.crossplane.io/)
- [Cluster API Documentation](https://cluster-api.sigs.k8s.io/)

**Articles**
- [The Pragmatic Engineer: Multi-Cloud at Spotify](https://newsletter.pragmaticengineer.com/)
- [Thanos: Highly Available Prometheus](https://thanos.io/tip/thanos/getting-started.md/)
- [Cloudflare Load Balancing](https://developers.cloudflare.com/load-balancing/)

---

Once you complete this task you will design infrastructure that survives a full cloud provider outage - and more importantly, you will know when multi-cloud is the right answer and when it is unnecessary complexity.
