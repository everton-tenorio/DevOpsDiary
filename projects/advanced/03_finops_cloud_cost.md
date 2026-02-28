---
title: FinOps - Cloud Cost as an Engineering Discipline
description: Implement cost visibility, optimization, and accountability practices across cloud infrastructure
tags: [advanced, finops, cost-optimization, cloud, devops]
---

## Learning Objectives

- Understand the FinOps framework and the cultural shift it requires
- Implement cost visibility with granular tagging and allocation
- Identify and eliminate waste: idle resources, oversized instances, unused storage
- Configure showback and chargeback models for team-level accountability
- Establish unit economics: cost per request, cost per deployment, cost per customer

## Requirements

You are required to implement a FinOps practice for the infrastructure built throughout the Advanced level:

1. **Cost Visibility and Tagging**
   - Design and enforce a tagging strategy across all cloud resources:
     - Required tags: `team`, `environment`, `service`, `cost-center`, `owner`
     - Implement tag enforcement via AWS Config Rules, Azure Policy, or GCP Organization Policies
     - Audit existing resources for missing tags and remediate
   - Configure cloud cost explorer or a third-party tool (Infracost, OpenCost, or Kubecost):
     - Break down costs by team, environment, and service
     - Identify the top 5 most expensive resources
     - Generate a weekly cost report

2. **Kubernetes Cost Allocation with Kubecost**
   - Deploy Kubecost on your cluster
   - Configure namespace-level cost allocation
   - Identify the most expensive workloads per namespace
   - Configure cost alerts: alert when a namespace exceeds its monthly budget
   - Document the cost of running your full DevOpsDiary platform per day

3. **Waste Elimination**
   - Audit and eliminate:
     - Idle EC2/VMs (running but no traffic for 7+ days)
     - Unattached EBS volumes, unused Elastic IPs, orphaned snapshots
     - Oversized instances: use AWS Compute Optimizer or equivalent recommendations
     - Over-provisioned Kubernetes resources: compare requests vs. actual usage with VPA recommendations
   - Document every eliminated resource: what it was, monthly cost, why it existed
   - Calculate total monthly savings achieved

4. **Rightsizing and Autoscaling**
   - Implement Kubernetes Vertical Pod Autoscaler (VPA) in recommendation mode
   - Review VPA recommendations and apply rightsized requests/limits
   - Configure Kubernetes Cluster Autoscaler or Karpenter to scale nodes based on actual demand
   - Implement KEDA (Kubernetes Event-Driven Autoscaling) for a workload that scales to zero when idle
   - Measure cost reduction before and after autoscaling implementation

5. **Showback, Chargeback, and Unit Economics**
   - Implement a showback model: generate a monthly report showing each team's cloud spend
   - Design a chargeback model: define how costs would be allocated back to teams or products
   - Calculate unit economics for your platform:
     - Cost per deployment (CI/CD pipeline run)
     - Cost per 1,000 HTTP requests served
     - Cost per developer onboarded via the IDP
   - Create a FinOps dashboard in Grafana showing spend trends, waste, and unit costs
   - Write a `finops-runbook.md` documenting the monthly cost review process

### Stretch Goals

- Implement spot/preemptible instances for non-critical workloads and measure savings
- Configure Reserved Instances or Savings Plans for baseline workloads and calculate break-even
- Integrate Infracost into the CI pipeline to show cost impact of every Terraform PR

### Deliverables

- Tagging strategy document and enforcement policy configuration
- Kubecost deployment with namespace cost allocation configured
- Waste audit report: resources eliminated and monthly savings
- Autoscaling configuration (VPA recommendations applied + Cluster Autoscaler or Karpenter)
- FinOps dashboard showing spend trends and unit economics
- `finops-runbook.md` for monthly cost review

### References

**Books**
- [Cloud FinOps - J.R. Storment & Mike Fuller](https://www.oreilly.com/library/view/cloud-finops/9781492054610/)
- [The FinOps Book - FinOps Foundation](https://www.finops.org/resources/finops-book/)

**Courses and Certifications**
- [FinOps Certified Practitioner - FinOps Foundation](https://learn.finops.org/)
- [AWS Cost Optimization - AWS Training](https://aws.amazon.com/training/learn-about/cost-optimization/)
- [Google Cloud Cost Management](https://cloud.google.com/cost-management)

**Tools and Documentation**
- [Kubecost Documentation](https://docs.kubecost.com/)
- [OpenCost - CNCF](https://www.opencost.io/)
- [Karpenter - Node Autoscaling](https://karpenter.sh/)
- [KEDA - Event-Driven Autoscaling](https://keda.sh/)
- [Infracost - Cost in CI/CD](https://www.infracost.io/)
- [AWS Compute Optimizer](https://aws.amazon.com/compute-optimizer/)
- [FinOps Framework](https://www.finops.org/framework/)

---

Once you complete this task you will treat cloud cost as an engineering metric - not a finance problem - and will be able to reduce waste, allocate costs fairly, and justify infrastructure decisions in terms of business value.
