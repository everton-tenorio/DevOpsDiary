const e=`---
title: Threat Modeling & Security Testing
description: Integrate threat modeling and automated security testing into your pipeline
tags: [intermediate, devsecops, security, devops]
---

Learning Objectives

    Apply the STRIDE methodology for threat modeling

    Implement Static Application Security Testing (SAST)

    Configure Dynamic Application Security Testing (DAST)

    Add Interactive Application Security Testing (IAST)

    Automate dependency and container image scanning


## Requirements

1. Create a STRIDE threat model document for your application  
2. Integrate SAST tool (e.g., SonarQube, ESLint security plugin)  
3. Configure a DAST scanner (e.g., OWASP ZAP) against a staging environment  
4. Enable IAST in your test suite if supported  
5. Automate dependency scanning (e.g., OWASP Dependency-Check or Snyk)  

### **Stretch goals**
- Fail builds on critical/high severity findings  
- Generate security reports as pipeline artifacts  
- Simulate an exploit based on a discovered vulnerability  

### Deliverables
- Threat model document committed to repo  
- Configuration files for SAST, DAST, IAST, and dependency scanners  
- Sample security report showing scan results  

### Links
- [OWASP Threat Modeling](https://owasp.org/www-community/Threat_Modeling)  
- [SonarQube SAST](https://www.sonarqube.org/)  
- [OWASP ZAP](https://owasp.org/www-project-zap/)  

---

You will embed security early in your development lifecycle.
`;export{e as default};
