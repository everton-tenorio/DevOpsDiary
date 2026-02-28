---
title: Capstone - Production-Ready Platform
description: Design and deliver a complete, production-grade DevOps platform integrating every discipline covered across the full DevOpsDiary path
tags: [advanced, capstone, platform-engineering, production, devops]
---

## Learning Objectives

- Integrate all disciplines from the full DevOpsDiary path into a cohesive platform
- Make and document real architectural trade-offs under constraints
- Demonstrate that every component meets defined production-readiness criteria
- Build a public portfolio artifact that reflects senior-level engineering judgment
- Identify what you would do differently with more time or resources - and why

## Requirements

This is not a new set of tools to learn. It is a synthesis task. You are required to design, deliver, and document a complete platform from scratch - using the knowledge from all 40 tasks across Beginner, Intermediate, and Advanced levels - as if you were joining a new company and needed to build their engineering platform.

**The scenario**: A Series B startup (50 engineers, 3 product teams) has asked you to design and implement their engineering platform. They currently deploy manually via SSH. They have a budget constraint: the platform must cost under $500/month to operate. They need to go from zero to production-ready in 6 weeks.

1. **Platform Design Document**
   - Write a `platform-design.md` (3,000–5,000 words) covering:
     - **Context**: company stage, team size, current pain points, constraints
     - **Architecture overview**: diagram + narrative of all platform components
     - **Technology choices**: for each major decision, document what you chose, why, and what you explicitly rejected
     - **Delivery plan**: 6-week milestone breakdown from kickoff to production
     - **Cost model**: estimated monthly cost per component, total vs. $500 budget
     - **Risk register**: top 5 risks with probability, impact, and mitigation
   - The document must be written for a mixed audience: engineers and non-technical founders

2. **Core Platform Implementation**
   - Implement the platform with a minimum viable scope:
     - **Infrastructure**: Terraform for all cloud resources - VPC, Kubernetes cluster, databases, storage
     - **GitOps**: ArgoCD or Flux watching a `gitops/` repository
     - **Developer self-service**: at least one Backstage template for a new service golden path
     - **CI/CD**: GitHub Actions pipeline: build → scan → test → deploy via GitOps
     - **Observability**: Prometheus + Grafana + AlertManager with at least 5 meaningful alerts
     - **Security**: OPA Gatekeeper policies, image signing with Cosign, Vault for secrets
   - Everything must be provisioned as code - no manual steps in the cloud console
   - A new engineer must be able to reproduce the entire platform from the repository alone

3. **Production-Readiness Checklist**
   - Complete and commit a `production-readiness.md` checklist for the platform and each service:

   **Reliability**
   - [ ] SLOs defined and measured with Prometheus recording rules
   - [ ] Error budget alerts configured (fast burn + slow burn)
   - [ ] Runbooks exist for every P1 alert
   - [ ] Disaster recovery tested with measured RTO and RPO
   - [ ] Database HA with automatic failover tested

   **Security**
   - [ ] All container images signed and verified on admission
   - [ ] No static secrets - all secrets are dynamic or injected via Vault
   - [ ] OPA policies enforced: non-root, resource limits, approved registries
   - [ ] Supply chain: SBOM generated and signed for every image
   - [ ] Network policies: default deny, explicit allow

   **Performance**
   - [ ] Load test executed - breaking point documented
   - [ ] Autoscaling tested under real load
   - [ ] Performance regression test in CI pipeline

   **Cost**
   - [ ] All resources tagged with team, service, environment
   - [ ] Kubecost configured with budget alerts per namespace
   - [ ] Idle resource audit completed
   - [ ] Unit economics documented: cost per deployment, cost per 1,000 requests

   **Developer Experience**
   - [ ] New service golden path: from trigger to deployed in < 10 minutes
   - [ ] Onboarding guide: new engineer to first PR in < 1 day
   - [ ] DORA metrics tracked and visible

4. **Chaos Validation**
   - Execute a final chaos validation of the complete platform:
     - Kill a random Pod in `prod` - service must remain available
     - Kill the primary database - failover must complete within SLO
     - Inject 500ms network latency between services - circuit breakers must activate
     - Exhaust memory on one node - Pods must reschedule without data loss
   - Document every experiment: hypothesis, execution, result, and SLO impact
   - The platform must pass all four experiments before being declared production-ready

5. **Portfolio Documentation**
   - Write a `README.md` for the capstone repository suitable for public sharing:
     - What the platform does and what problems it solves
     - Architecture diagram and component overview
     - Getting started: how to deploy the platform in a new environment
     - Design decisions: 3 key decisions with trade-off explanations
     - Lessons learned: what you would do differently and why
   - Record a 10-15 minute walkthrough video demonstrating:
     - The golden path: from new service request to deployed on Kubernetes
     - An alert firing and a runbook being followed
     - The error budget dashboard
   - Publish the repository publicly on GitHub

### Stretch Goals

- Add the AI infrastructure layer from task 09: deploy a model serving endpoint within the same platform
- Implement the multi-cloud architecture from task 02: duplicate the platform across two cloud providers with automated failover
- Run the full platform through a third-party security audit (many vendors offer free community scans)

### Deliverables

- `platform-design.md`: comprehensive design document (3,000–5,000 words)
- Complete Terraform codebase provisioning all cloud infrastructure
- GitOps repository with application manifests and Helm charts
- Backstage deployment with at least one working Software Template
- CI/CD pipeline configuration
- Observability stack with dashboards and alerts
- Security configuration: OPA policies, Cosign, Vault
- `production-readiness.md` checklist - every item checked off with evidence
- Chaos validation report: 4 experiments with results
- Public GitHub repository with a complete `README.md`
- 10-15 minute walkthrough video

### References

This task intentionally does not list new references. Every reference you need has been provided across the 10 previous Advanced tasks and the Intermediate level. If you find yourself needing to look something up, that is expected - the ability to find and apply the right knowledge at the right time is the skill being tested here.

**If you want additional challenge:**
- [The Phoenix Project - Gene Kim](https://itrevolution.com/the-phoenix-project/) - read it now if you haven't, it will reframe everything you built
- [Production Kubernetes - Josh Rosso et al.](https://www.oreilly.com/library/view/production-kubernetes/9781492092292/)
- [Building Microservices - Sam Newman](https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/)
- [Accelerate - Nicole Forsgren, Jez Humble, Gene Kim](https://itrevolution.com/accelerate-book/) - the research that DORA metrics are based on

---

Once you complete this task you will have built something real, documented every decision, and created a public artifact that demonstrates senior-level engineering judgment. This is the portfolio piece that shows you can design a platform, not just operate one someone else designed.

The path ends here. But the work of a senior engineer never does - systems degrade, requirements change, and the best engineers are the ones who keep learning with the same curiosity they had at task 01.

**#DevOpsDiary**
