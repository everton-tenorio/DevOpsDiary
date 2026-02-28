---
title: SRE Practices - Incident Management, Error Budgets & Postmortem Culture
description: Implement Site Reliability Engineering practices including SLOs, error budgets, on-call, and blameless postmortems
tags: [advanced, sre, incident-management, slo, error-budget, postmortem, devops]
---

## Learning Objectives

- Define meaningful SLIs and SLOs grounded in user experience
- Implement error budgets as the mechanism that balances reliability and velocity
- Build and operate an on-call rotation with runbooks and escalation policies
- Conduct blameless postmortems that produce systemic improvements
- Understand the SRE toil concept and how to systematically reduce it

## Requirements

You are required to implement a complete SRE practice for the platform built throughout the Advanced level:

1. **SLI and SLO Definition**
   - Define SLIs for each critical service:
     - **Availability SLI**: percentage of successful HTTP requests (non-5xx) over total requests
     - **Latency SLI**: percentage of requests served under 300ms (p95)
     - **Error rate SLI**: percentage of requests that returned an application error
   - Define SLOs with justified targets:
     - Choose targets based on user expectations, not arbitrary numbers
     - Define the measurement window: 30-day rolling window
     - Document: why this target? what happens if it is breached?
   - Implement SLO tracking in Prometheus using recording rules:
     ```promql
     # Example: 30-day availability SLO
     sum(rate(http_requests_total{status!~"5.."}[30d]))
     /
     sum(rate(http_requests_total[30d]))
     ```
   - Create an SLO dashboard in Grafana with current SLO status and trend

2. **Error Budgets**
   - Calculate the error budget for each SLO:
     - 99.9% availability SLO → 43.8 minutes of allowed downtime per month
     - Document the relationship: SLO determines budget, budget determines velocity
   - Implement error budget burn rate alerts in AlertManager:
     - Fast burn alert (1h): burn rate > 14.4x - page immediately
     - Slow burn alert (6h): burn rate > 6x - notify team
     - Budget exhausted: freeze all non-critical deployments automatically
   - Create an error budget policy document:
     - When budget is healthy (> 50%): normal deployment velocity
     - When budget is at risk (10-50%): increase testing requirements
     - When budget is exhausted (< 10%): freeze new features, focus on reliability only

3. **On-Call Infrastructure**
   - Set up PagerDuty or OpsGenie (free tier):
     - Create an on-call schedule with escalation policies
     - Configure alert routing from AlertManager to the on-call tool
     - Define escalation: primary → secondary → manager (15-minute intervals)
   - Write runbooks for the top 5 most likely alerts:
     - Pod crash loop: symptoms, immediate mitigation, root cause investigation, escalation criteria
     - High error rate: triage steps, quick rollback procedure, customer communication template
     - Disk pressure: immediate actions, data to collect, resolution steps
     - Certificate expiry: renewal process, emergency steps if expired
     - Database connection exhaustion: pool tuning, scaling steps, rollback
   - Each runbook must be: findable (linked from the alert), actionable (specific commands), and completable by an engineer unfamiliar with the service

4. **Incident Management**
   - Define severity levels for your platform:
     - SEV1: full platform outage, all users affected
     - SEV2: significant degradation, majority of users affected
     - SEV3: partial degradation, minority of users affected
     - SEV4: minor issue, no user impact
   - Document the incident response process:
     - Detection → Triage → Incident declaration → Mitigation → Resolution → Postmortem
     - Define roles: Incident Commander, Communications Lead, Technical Lead
     - Define communication SLAs: SEV1 customer update every 15 minutes
   - Simulate a SEV2 incident:
     - Deploy a deliberately broken version of your application
     - Follow the incident response process from detection to resolution
     - Document every step taken and the timeline

5. **Blameless Postmortem**
   - Write a postmortem for the simulated SEV2 incident using Google's postmortem template:
     - **Summary**: 2-3 sentences describing what happened and its impact
     - **Timeline**: minute-by-minute account of the incident
     - **Root Cause**: the actual underlying cause (not the symptom)
     - **Contributing Factors**: systemic issues that allowed this to happen
     - **What Went Well**: practices and tools that helped
     - **Action Items**: specific, assigned, time-bound improvements (not vague "be more careful")
   - The postmortem must identify at least 3 systemic improvements
   - Document the toil involved in responding to the incident:
     - Manual steps taken
     - How each could be automated or eliminated
     - Prioritized backlog of reliability improvements

### Stretch Goals

- Implement multi-window multi-burn-rate alerts following the Google SRE Workbook methodology
- Build an automated incident timeline tool that reconstructs events from logs and metrics
- Create a Game Day exercise plan to proactively discover reliability weaknesses

### Deliverables

- SLO definitions with Prometheus recording rules and Grafana SLO dashboard
- Error budget burn rate alert configuration with policy document
- On-call schedule and escalation policy in PagerDuty/OpsGenie
- Five runbooks covering the most critical alert scenarios
- Incident severity matrix and response process documentation
- Simulated incident timeline with all steps documented
- Blameless postmortem with at least 3 systemic action items

### References

**Books**
- [Site Reliability Engineering - Google](https://sre.google/sre-book/table-of-contents/) *(free online)*
- [The Site Reliability Workbook - Google](https://sre.google/workbook/table-of-contents/) *(free online)*
- [Seeking SRE - David Blank-Edelman](https://www.oreilly.com/library/view/seeking-sre/9781491978856/)
- [Incident Management for Operations - Rob Schnepp et al.](https://www.oreilly.com/library/view/incident-management-for/9781491922323/)

**Courses**
- [Google SRE Fundamentals - Coursera](https://www.coursera.org/learn/site-reliability-engineering-slos)
- [SRE with Google Cloud - Coursera Specialization](https://www.coursera.org/specializations/sre-devops-engineer-google-cloud)

**Tools and Documentation**
- [Prometheus Alerting Rules](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/)
- [Google SRE Workbook: Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/)
- [PagerDuty Incident Response Guide](https://response.pagerduty.com/)
- [Postmortem Template - Google](https://sre.google/sre-book/example-postmortem/)
- [SLO Generator - Google](https://github.com/google/slo-generator)

---

Once you complete this task you will operate your platform the way Google, Netflix, and Amazon operate theirs - with explicit reliability contracts, data-driven decisions about deployment velocity, and a culture that improves systems instead of blaming people.
