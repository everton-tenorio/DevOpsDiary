---
title: Architecture Decision Records & Technical Leadership
description: Document architectural decisions, lead technical discussions, and develop the skills that distinguish a senior from a staff engineer
tags: [advanced, architecture, leadership, adr, technical-writing, devops]
---

## Learning Objectives

- Write Architecture Decision Records (ADRs) that communicate trade-offs clearly
- Lead RFC (Request for Comments) processes to align teams on technical direction
- Develop technical mentorship skills and structured knowledge transfer practices
- Build an engineering roadmap that balances reliability, velocity, and cost
- Understand the difference between senior and staff/principal engineering scope

## Requirements

You are required to document the architectural decisions made throughout the Advanced level and practice the technical leadership skills expected of a staff engineer:

1. **Architecture Decision Records (ADRs)**
   - Write ADRs for the five most significant decisions made throughout the DevOpsDiary path:
     - Example decisions: "Why Kubernetes over ECS", "Why GitOps over push-based CI/CD", "Why PostgreSQL over a managed cloud database", "Why we chose Istio over Linkerd", "Why multi-cloud vs. single-cloud"
   - Each ADR must follow this structure:
     - **Title**: short noun phrase describing the decision
     - **Status**: Proposed / Accepted / Deprecated / Superseded
     - **Context**: the situation and forces at play that required a decision
     - **Decision**: what was decided and why
     - **Consequences**: what becomes easier, what becomes harder, what new problems are introduced
     - **Alternatives Considered**: other options evaluated and why they were rejected
   - Store ADRs in the repository under `docs/adr/` using the `NNNN-title.md` naming convention
   - Link ADRs to the code and configuration they govern

2. **RFC Process**
   - Write an RFC (Request for Comments) for one future architectural change to your platform:
     - Suggested topics: migrating to a serverless compute model, adopting eBPF-based networking, introducing a data mesh architecture, or replacing the current CI/CD system
   - RFC structure:
     - **Summary**: one paragraph describing the change
     - **Motivation**: why is this change needed? What problem does it solve?
     - **Detailed Design**: how will this be implemented?
     - **Trade-offs**: what are we gaining? What are we giving up?
     - **Rollout Plan**: how do we migrate without disruption?
     - **Open Questions**: what do we still not know?
   - Share the RFC (in a GitHub Discussion or PR) and collect at least 3 pieces of feedback
   - Respond to feedback and document how you incorporated or rejected each suggestion

3. **Technical Mentorship Documentation**
   - Create an onboarding guide for a new engineer joining your platform team:
     - Platform overview: what it does, how it is structured, where the code lives
     - Development environment setup: from zero to running locally in under 30 minutes
     - First contribution guide: how to make a change, test it, and deploy it
     - Runbook index: where to find runbooks, how they are organized
     - Escalation guide: who to contact for what
   - Write a "how we make decisions" document:
     - When is an ADR required vs. a PR comment?
     - Who has final decision authority on different categories of decisions?
     - How do we handle disagreements?
   - Document the things you wish you had known when you started this path:
     - Most common mistakes, non-obvious pitfalls, and how to avoid them

4. **Engineering Roadmap**
   - Build a 6-month engineering roadmap for your platform:
     - Current state: what is working, what is fragile, what is missing
     - Quarter 1 priorities: reliability and security hardening
     - Quarter 2 priorities: developer experience and cost optimization
     - Each item must include: business justification, estimated effort, expected outcome, success metric
   - Define the criteria for "platform done enough":
     - At what point is adding features less valuable than improving reliability and reducing toil?
   - Create a technical debt register:
     - Every known shortcut, workaround, and temporary solution in the platform
     - For each: severity, estimated remediation effort, business risk if left unaddressed
     - Prioritized by impact × effort

5. **Senior vs. Staff Engineering Reflection**
   - Write a `staff-engineering.md` document reflecting on the distinction:
     - **Senior**: deep technical expertise, solves hard problems within defined scope, mentors individuals
     - **Staff**: influences technical direction across teams, defines the problems worth solving, makes architectural decisions that last years
     - **Principal**: organization-wide technical vision, represents engineering in business discussions, sets standards adopted across all teams
   - For each level, describe:
     - A decision a senior would make vs. a decision a staff would make on the same problem
     - How communication style and scope of concern differ
     - What "impact" means at each level
   - Identify the gaps between your current skills and staff-level expectations
   - Design a personal development plan with specific actions for the next 6 months

### Stretch Goals

- Present your RFC in a recorded video walkthrough and share it publicly
- Contribute an ADR template to a public repository (MADR format)
- Write a blog post on one architectural decision from your platform with the context and trade-offs - this is the kind of content that builds reputation in the industry

### Deliverables

- Five ADRs stored in `docs/adr/` linked to relevant platform components
- One RFC with feedback incorporated and response documented
- New engineer onboarding guide with "how we make decisions" document
- 6-month engineering roadmap with business justification per item
- Technical debt register with prioritization
- `staff-engineering.md` reflection document with personal development plan

### References

**Books**
- [Staff Engineer: Leadership Beyond the Management Track - Will Larson](https://staffeng.com/book) *(essential reading)*
- [The Staff Engineer's Path - Tanya Reilly](https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/)
- [An Elegant Puzzle: Systems of Engineering Management - Will Larson](https://lethain.com/elegant-puzzle/)
- [A Philosophy of Software Design - John Ousterhout](https://web.stanford.edu/~ouster/cgi-bin/book.php)
- [Fundamentals of Software Architecture - Mark Richards & Neal Ford](https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/)

**Courses and Communities**
- [StaffEng.com - Stories and advice from staff engineers](https://staffeng.com/)
- [LeadDev - Engineering leadership content](https://leaddev.com/)
- [Architecture Weekly - Oskar Dudycz](https://www.architecture-weekly.com/)

**Tools and Guides**
- [MADR - Markdown Architecture Decision Records](https://adr.github.io/madr/)
- [ADR Tools - CLI for managing ADRs](https://github.com/npryce/adr-tools)
- [RFC Process at major tech companies](https://github.com/nicolejaneway/what-is-an-rfc)
- [Technical Debt Quadrant - Martin Fowler](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html)
- [Will Larson's Blog - Irrational Exuberance](https://lethain.com/)

---

Once you complete this task you will communicate architectural decisions clearly, lead technical discussions that produce alignment instead of conflict, and understand what it actually takes to grow from senior to staff - because the technical skills are necessary but no longer sufficient at that level.
