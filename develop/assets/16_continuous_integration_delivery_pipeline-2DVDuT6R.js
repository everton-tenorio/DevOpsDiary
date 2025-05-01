const n=`---
title: Continuous Integration & Delivery Pipeline
description: Build an end-to-end CI/CD pipeline with automated testing and deployments
tags: [intermediate, ci, cd, devops]
---

Learning Objectives

    Automate builds on code commits

    Execute unit and integration tests

    Perform static code analysis and dependency scanning

    Deploy to dev and staging environments automatically

    Implement feature flags for controlled rollouts


## Requirements

1. Configure CI to build Docker images on each push  
2. Run unit tests and integration tests as pipeline stages  
3. Integrate static analysis (e.g., SonarQube) and dependency scanning  
4. Deploy successfully built images to a \`dev\` environment  
5. Implement feature flags (e.g., LaunchDarkly or OpenFeature) in deployment  

### **Stretch goals**
- Add manual approval gates before prod deployment  
- Promote artifacts between environments without rebuilding  
- Use feature toggles to A/B test new functionality  

### Deliverables
- CI/CD pipeline configuration (e.g., GitHub Actions, Jenkinsfile)  
- Test reports and static analysis dashboards  
- Documentation of environment promotion workflow  

### Links
- [GitHub Actions](https://docs.github.com/actions)  
- [Jenkins Pipeline](https://www.jenkins.io/doc/book/pipeline/)  
- [Feature Flags](https://openfeature.dev/)  

---

This pipeline will standardize and accelerate your delivery process.
`;export{n as default};
