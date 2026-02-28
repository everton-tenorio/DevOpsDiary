---
title: Advanced Security - Zero Trust & Supply Chain
description: Implement Zero Trust architecture, software supply chain security, and policy as code across the platform
tags: [advanced, devsecops, zero-trust, supply-chain, sbom, slsa, devops]
---

## Learning Objectives

- Implement Zero Trust principles: never trust, always verify, least privilege everywhere
- Secure the software supply chain with SBOM generation and SLSA compliance
- Enforce security policy as code using OPA/Gatekeeper and Falco
- Implement secrets management at scale with dynamic secrets and automatic rotation
- Conduct and document a threat model for the entire platform

## Requirements

You are required to elevate the security posture of the entire platform to enterprise-grade standards:

1. **Zero Trust Architecture**
   - Document the Zero Trust model for your platform in `zero-trust-design.md`:
     - Identity as the new perimeter: every service, user, and workload must authenticate
     - Define trust boundaries and how they are enforced
     - Map every internal communication and classify: authenticated? encrypted? authorized?
   - Implement workload identity:
     - Configure SPIFFE/SPIRE or use cloud-native workload identity (AWS IRSA, GKE Workload Identity)
     - Every Pod must authenticate with a short-lived, automatically rotated identity
     - No long-lived static credentials in Pods
   - Implement mutual TLS for all service-to-service communication (service mesh from Intermediate level)
   - Configure AuthorizationPolicies that deny by default and allow only declared communication paths

2. **Software Supply Chain Security**
   - Generate a Software Bill of Materials (SBOM) for every container image:
     - Use Syft to generate SBOM in SPDX or CycloneDX format
     - Attest and sign the SBOM with Cosign
     - Store the SBOM alongside the image in the registry
   - Implement SLSA Level 2 compliance for your CI/CD pipeline:
     - Provenance: the pipeline must generate and sign build provenance
     - Hermetic builds: builds must not access the internet during compilation
     - Verify provenance before deployment: the GitOps controller must reject images without valid provenance
   - Sign all container images with Cosign:
     - Enable Sigstore keyless signing in CI
     - Configure the cluster to reject unsigned images via admission webhook

3. **Policy as Code**
   - Deploy OPA Gatekeeper with the following policies:
     - All containers must run as non-root
     - All containers must have resource requests and limits defined
     - Images must come from approved registries only
     - All Deployments must have at least 2 replicas in `prod`
     - No Pods without required labels (`team`, `environment`, `service`)
   - Test each policy: deploy a violating resource and verify rejection
   - Deploy Falco for runtime security:
     - Configure rules to detect: shell spawned in a container, unexpected network connection, privilege escalation
     - Route Falco alerts to your AlertManager
     - Simulate each threat and verify detection

4. **Secrets Management at Scale**
   - Implement dynamic secrets with HashiCorp Vault:
     - Database secrets engine: Vault generates short-lived PostgreSQL credentials on request
     - Credentials expire after 1 hour and are automatically rotated
     - No static database passwords anywhere in the platform
   - Configure the Vault Agent Injector or External Secrets Operator to deliver secrets to Pods
   - Implement automatic secret rotation for:
     - TLS certificates (via cert-manager with short TTL)
     - Cloud provider API keys (via Vault cloud secrets engines)
   - Audit all secrets access: every read must be logged and alertable

5. **Platform Threat Model**
   - Create a comprehensive threat model for the full platform using STRIDE:
     - Map the full data flow: developer laptop → CI/CD → registry → cluster → user
     - Identify threats at each stage
     - Document implemented mitigations and accepted residual risks
   - Run a dependency audit across all platform components:
     - Use Grype or Trivy to scan all Helm chart images
     - Identify and remediate all CRITICAL CVEs
     - Document the patching SLA: CRITICAL ≤ 24h, HIGH ≤ 7 days

### Stretch Goals

- Achieve SLSA Level 3 by implementing hermetic builds in an isolated build environment
- Implement a Software Composition Analysis (SCA) gate in CI that blocks deployment on new CRITICAL CVEs
- Configure audit log shipping from Kubernetes API server to an external SIEM (Splunk, Elastic Security)

### Deliverables

- `zero-trust-design.md` with architecture and trust boundary documentation
- SBOM generation integrated in CI, signed and stored with images
- Cosign image signing with cluster admission enforcement
- OPA Gatekeeper policies with test evidence (admitted and rejected resources)
- Falco configuration with alert routing and detection evidence
- Dynamic secrets configuration in Vault with rotation demonstrated
- Platform threat model document with STRIDE analysis

### References

**Books**
- [Zero Trust Networks - Evan Gilman & Doug Barth](https://www.oreilly.com/library/view/zero-trust-networks/9781491962183/)
- [Hacking Kubernetes - Andrew Martin & Michael Hausenblas](https://www.oreilly.com/library/view/hacking-kubernetes/9781492081722/)
- [Software Supply Chain Security - Cassie Crossley](https://www.oreilly.com/library/view/software-supply-chain/9781098133702/)

**Courses and Certifications**
- [Certified Kubernetes Security Specialist (CKS)](https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/)
- [SANS SEC540: Cloud Security and DevSecOps Automation](https://www.sans.org/cyber-security-courses/cloud-security-devsecops-automation/)

**Tools and Documentation**
- [SPIFFE/SPIRE](https://spiffe.io/)
- [Sigstore / Cosign](https://docs.sigstore.dev/)
- [Syft SBOM Generator](https://github.com/anchore/syft)
- [SLSA Framework](https://slsa.dev/)
- [OPA Gatekeeper](https://open-policy-agent.github.io/gatekeeper/)
- [Falco Runtime Security](https://falco.org/docs/)
- [HashiCorp Vault](https://developer.hashicorp.com/vault/docs)
- [Grype Vulnerability Scanner](https://github.com/anchore/grype)

---

Once you complete this task your platform will enforce security at every layer - from the moment code is committed to when it runs in production - making the entire supply chain auditable, signed, and policy-controlled.
