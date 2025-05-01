const e=`---
title: Cloud CLI Basics
description: Learn to automate AWS resource management and monitoring using the AWS CLI
tags: [beginner, cloud, aws, cli, automation]
---

## Learning Objectives
- Understand cloud resource management principles
- Learn to interact with cloud providers programmatically
- Develop skills in cloud resource inventory and reporting
- Implement secure credential management
- Create reusable cloud automation scripts

## Requirements

You are required to create an AWS CLI automation toolkit:

1. **AWS CLI Setup and Authentication**
   - Install the AWS CLI (\`aws --version\`)
   - Configure AWS CLI with credentials (\`aws configure\`)
   - Implement secure credential handling
   - Create a configuration validation test
   - Document the setup process

2. **Resource Inventory Script: \`aws-report.sh\`**
   - Create a comprehensive inventory script that:
     - Lists S3 buckets (\`aws s3 ls\`)
     - Describes EC2 instances with details (\`aws ec2 describe-instances\`)
     - Lists IAM users and their details (\`aws iam list-users\`)
     - Inventories security groups (\`aws ec2 describe-security-groups\`)
     - Lists EBS volumes and their attachment status (\`aws ec2 describe-volumes\`)
   - Format output into well-structured JSON or table files
   - Include timestamp and AWS account ID in reports
   - Implement proper error handling for API calls

3. **Analysis and Reporting**
   - Create summary statistics (counts, sizes, states)
   - Flag potential issues (unattached volumes, unused security groups)
   - Calculate estimated costs based on resource usage
   - Generate reports in multiple formats (JSON, CSV, text)
   - Implement sorting and filtering options

4. **Resource Management**
   - Add commands to start/stop EC2 instances
   - Create/delete S3 buckets
   - Assign/revoke IAM permissions
   - Create helpful usage examples

### **Stretch goals**
- Add multi-region support with comparison
- Implement resource tagging validation
- Create cost optimization recommendations
- Add support for other AWS services (Lambda, RDS, etc.)
- Generate interactive HTML dashboard from collected data

### Deliverables
- \`aws-setup.sh\` script for CLI installation and configuration
- \`aws-report.sh\` script implementing all resource reporting
- Sample outputs from each command (with sensitive information redacted)
- Documentation including:
  - Prerequisites and setup instructions
  - Script usage with parameter descriptions
  - Output format explanations
  - Troubleshooting tips
  - AWS service references

### Links
- [AWS CLI Official Documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)
- [AWS CLI Installation Guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [AWS CLI Configuration Guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
- [AWS CLI Examples for S3](https://docs.aws.amazon.com/cli/latest/userguide/cli-services-s3-commands.html)
- [AWS CLI Examples for EC2](https://docs.aws.amazon.com/cli/latest/userguide/cli-services-ec2.html)
- [AWS Cloud Practitioner Essentials Course](https://aws.amazon.com/training/course-descriptions/cloud-practitioner-essentials/)
- [AWS CLI Command Reference](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/index.html)
- [AWS Pricing Calculator](https://calculator.aws/)

---

Once you have completed this project, you will understand how to use AWS CLI for basic resource management and reporting - fundamental skills for managing cloud infrastructure as code.`;export{e as default};
