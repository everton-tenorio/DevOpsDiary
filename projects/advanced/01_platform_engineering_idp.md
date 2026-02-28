---
title: Platform Engineering & Internal Developer Platform
description: Design and build an Internal Developer Platform that enables self-service infrastructure for development teams
tags: [advanced, platform-engineering, idp, kubernetes, devops]
---

## Learning Objectives

- Understand the Platform Engineering discipline and how it differs from traditional DevOps
- Design an Internal Developer Platform (IDP) with self-service capabilities
- Implement golden paths that reduce cognitive load for development teams
- Use Backstage as a developer portal to centralize services, documentation, and tooling
- Measure platform adoption and developer experience (DevEx) with meaningful metrics

## Requirements

You are required to design and implement an Internal Developer Platform for a fictional organization with multiple development teams:

1. **Platform Design**
   - Document the platform vision in a `platform-design.md`:
     - Define the platform's value proposition for development teams
     - Map the current developer journey (from idea to production) and identify friction points
     - Design the target developer journey with the platform in place
     - Define platform APIs: what developers request, what the platform provides
     - Establish SLOs for the platform itself (provisioning time, availability, MTTR)
   - Define at least three golden paths:
     - Golden path for a new microservice (from repo creation to first deployment)
     - Golden path for adding observability to an existing service
     - Golden path for provisioning a managed database

2. **Backstage Developer Portal**
   - Deploy Backstage locally or on your cluster
   - Configure the Software Catalog: register at least three services with `catalog-info.yaml`
   - Integrate the TechDocs plugin: generate and serve documentation from markdown in repos
   - Create a Software Template for the "new microservice" golden path:
     - Scaffolds a Git repository with opinionated structure
     - Creates a Kubernetes Namespace
     - Registers the service in the Software Catalog automatically
   - Configure the Kubernetes plugin to show live cluster state per service

3. **Self-Service Infrastructure**
   - Implement a mechanism for developers to request infrastructure without opening tickets:
     - Option A: Crossplane - developers apply CRDs to request databases, buckets, or queues
     - Option B: Terraform Cloud + API - developers trigger Terraform runs via PR
   - Define guardrails: teams can request resources within approved sizes and regions only
   - Implement automatic cost tagging on all provisioned resources
   - Document the request-to-provisioning flow with expected SLO (e.g., < 5 minutes)

4. **Golden Path Implementation**
   - Implement the "new microservice" golden path end-to-end:
     - Developer triggers the Backstage template
     - Git repository is created with CI/CD pipeline, Dockerfile, and Helm chart pre-configured
     - Kubernetes Namespace is provisioned with default NetworkPolicies and ResourceQuotas
     - Service is registered in the Software Catalog
     - Observability (Prometheus scraping + Grafana dashboard) is pre-configured
   - Verify the entire flow takes under 10 minutes from trigger to deployed service

5. **Platform Metrics and Feedback**
   - Instrument the platform to track:
     - DORA metrics: Deployment Frequency, Lead Time for Changes, MTTR, Change Failure Rate
     - Platform-specific: time to onboard a new service, number of self-service requests vs. manual tickets
   - Create a Grafana dashboard showing DORA metrics over time
   - Design a developer satisfaction survey (NPS for the platform)
   - Document how you would act on feedback to improve the platform

### Stretch Goals

- Implement Crossplane compositions to abstract cloud-specific resources behind platform APIs
- Add a cost estimation step in the Backstage template before provisioning
- Integrate OPA/Gatekeeper policies that automatically enforce platform standards
- Build a CLI tool that wraps common platform operations for developers who prefer terminal over UI

### Deliverables

- `platform-design.md` covering vision, golden paths, and SLOs
- Backstage deployment with Software Catalog, TechDocs, and at least one Software Template
- Self-service infrastructure mechanism with guardrails documented
- End-to-end golden path demonstration with timing evidence
- DORA metrics dashboard in Grafana

### References

**Books**
- [Platform Engineering on Kubernetes - Mauricio Salatino](https://www.manning.com/books/platform-engineering-on-kubernetes)
- [Team Topologies - Matthew Skelton & Manuel Pais](https://teamtopologies.com/book)
- [The DevOps Handbook - Gene Kim et al.](https://itrevolution.com/the-devops-handbook/)

**Courses and Guides**
- [Platform Engineering Community](https://platformengineering.org/)
- [CNCF Platform Engineering Whitepaper](https://tag-app-delivery.cncf.io/whitepapers/platform-eng/)
- [Backstage Official Documentation](https://backstage.io/docs)
- [Crossplane Documentation](https://docs.crossplane.io/)

**Articles**
- [What is Platform Engineering? - Gartner](https://www.gartner.com/en/articles/what-is-platform-engineering)
- [DORA Metrics - Google Cloud](https://cloud.google.com/devops/state-of-devops)
- [Developer Experience at Netflix](https://netflixtechblog.com/)

---

Once you complete this task you will think as a platform engineer - someone who builds the infrastructure that other engineers build on top of. This is the foundational mindset shift from DevOps practitioner to platform owner.
