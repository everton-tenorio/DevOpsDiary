---
title: Chaos Engineering & Game Day
description: Validate system resilience through controlled failure injection and structured Game Day exercises
tags: [advanced, chaos-engineering, resilience, reliability, sre, devops]
---

## Learning Objectives

- Understand chaos engineering as a discipline for proactive resilience validation
- Design hypothesis-driven chaos experiments grounded in real failure modes
- Use Chaos Mesh and Litmus Chaos to inject failures at different system layers
- Conduct a structured Game Day exercise that tests organizational readiness
- Build a resilience baseline and track improvement over time

## Requirements

You are required to design and execute a chaos engineering program for your platform:

1. **Chaos Engineering Foundations**
   - Read and document your understanding of the Principles of Chaos Engineering
   - Create a `chaos-program.md` defining:
     - Steady state hypothesis: what does "normal" look like? (define measurable baselines)
     - Experiment scope: which systems are in scope and which are explicitly out of scope
     - Blast radius control: how you ensure experiments don't cascade beyond the intended target
     - Go/No-Go criteria: conditions that immediately abort an experiment
     - Communication plan: who needs to be notified before and during experiments
   - Map your platform's failure modes:
     - Single points of failure
     - Cascading failure paths
     - External dependencies
     - Recovery mechanisms already in place

2. **Infrastructure Failure Experiments**
   - Deploy Chaos Mesh on your cluster
   - Design and execute the following experiments, documenting hypothesis, execution, and results for each:
     - **Pod failure**: kill random Pods in `prod` Namespace - does the service remain available?
     - **Node failure**: drain a node - do Pods reschedule within SLO?
     - **Network partition**: introduce 500ms latency between frontend and backend - do timeouts and retries work?
     - **Packet loss**: inject 30% packet loss on database connections - does the connection pool handle it?
     - **DNS failure**: block DNS resolution for an external dependency - does the circuit breaker open?
   - For each experiment: measure impact against your SLOs, document what failed, and implement fixes before the next experiment

3. **Application-Level Failure Experiments**
   - Use Litmus Chaos or custom failure injection to test:
     - **Memory pressure**: inject memory consumption until OOM killer triggers - does Kubernetes recover gracefully?
     - **CPU stress**: saturate CPU on the application Pod - does HPA scale out in time?
     - **Disk I/O saturation**: fill ephemeral storage - does the application fail gracefully or corrupt data?
     - **Dependency timeout**: mock a downstream service to return 504 after 10 seconds - does the upstream service timeout and return a meaningful error?
     - **Cascading failure simulation**: kill the cache - does the application degrade gracefully or fail completely?
   - Implement or verify resilience patterns for each failure mode:
     - Circuit breakers, retries with exponential backoff, timeouts, bulkheads, graceful degradation

4. **Database Chaos**
   - Execute the following database chaos experiments:
     - Kill the primary database Pod - verify automatic failover within SLO
     - Block replication traffic for 60 seconds - verify replication catches up after reconnection
     - Inject slow queries (using `pg_sleep`) - verify connection pool behavior under query saturation
     - Corrupt a non-critical table - verify backup restore procedure
   - Each experiment must have a defined abort condition and verified recovery procedure

5. **Game Day Exercise**
   - Design and run a structured Game Day:
     - **Scenario**: define a realistic production failure scenario (e.g., "the payment service is returning 500s and we don't know why")
     - **Participants**: assign roles - Incident Commander, On-Call Engineer, Observer
     - **Rules**: the Observer injects failures using Chaos Mesh; participants must detect, diagnose, and resolve using only documented runbooks and standard tools
     - **Timing**: measure detection time, diagnosis time, and resolution time
   - Conduct a retrospective after the Game Day:
     - What was detected quickly? Why?
     - What took too long? What was missing?
     - Which runbooks were helpful? Which were inaccurate or missing?
   - Document the Game Day scenario, timeline, findings, and action items

### Stretch Goals

- Implement automated chaos as part of the CI/CD pipeline: run a chaos experiment automatically after every production deployment
- Build a resilience score (0–100) based on the outcome of all experiments
- Design and execute a multi-region chaos experiment simulating a full availability zone outage

### Deliverables

- `chaos-program.md` with principles, scope, blast radius controls, and failure mode map
- Chaos Mesh deployment with experiment YAML files for all required scenarios
- Per-experiment documentation: hypothesis, execution, observed impact, fix applied
- Resilience patterns implementation evidence (circuit breakers, retries, timeouts)
- Game Day scenario document, execution timeline, and retrospective findings
- Resilience improvement backlog with prioritized action items

### References

**Books**
- [Chaos Engineering - Casey Rosenthal & Nora Jones](https://www.oreilly.com/library/view/chaos-engineering/9781492043850/)
- [Learning Chaos Engineering - Russ Miles](https://www.oreilly.com/library/view/learning-chaos-engineering/9781492050995/)
- [Site Reliability Engineering - Google, Chapter 22: Addressing Cascading Failures](https://sre.google/sre-book/addressing-cascading-failures/)

**Courses and Communities**
- [Chaos Engineering Community](https://chaos.community/)
- [Principles of Chaos Engineering](https://principlesofchaos.org/)
- [Netflix SimianArmy](https://github.com/Netflix/SimianArmy)

**Tools and Documentation**
- [Chaos Mesh Documentation](https://chaos-mesh.org/docs/)
- [Litmus Chaos](https://litmuschaos.io/)
- [AWS Fault Injection Simulator](https://aws.amazon.com/fis/)
- [Gremlin Chaos Engineering Platform](https://www.gremlin.com/chaos-engineering/)
- [Resilience4j - Circuit Breaker Library](https://resilience4j.readme.io/)

**Articles**
- [Netflix: Chaos Engineering Upgraded](https://netflixtechblog.com/chaos-engineering-upgraded-878d341f15fa)
- [Google: DiRT - Disaster Recovery Testing](https://sre.google/sre-book/disaster-recovery-testing/)

---

Once you complete this task you will know - with evidence - that your platform survives real failures. Chaos engineering is the difference between believing your system is resilient and proving it.
