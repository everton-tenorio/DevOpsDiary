const e=`---
title: Advanced Infrastructure with Terraform and AWS
description: Build a complete infrastructure using Terraform, provisioning a scalable, secure, and highly available environment on AWS.
tags: [advanced, terraform, aws, cloud, infrastructure]
---

## Requirements

You are required to use Terraform to provision a complete cloud environment on AWS that includes:

- VPC (Virtual Private Cloud) with public and private subnets.
- Internet Gateway and NAT Gateway setup.
- EC2 instances (1 in public subnet, 1 in private subnet).
- Security Groups with strict inbound/outbound rules.
- S3 bucket with proper permissions and versioning enabled.
- RDS (Relational Database Service) instance in private subnet.
- An Elastic Load Balancer (ELB) distributing traffic to the public EC2 instance.
- DNS management with Route 53 (simple hosted zone and record pointing to ELB).
- All resources should be reusable with variables and modules where possible.

### **Stretch goals**

- Implement autoscaling groups for the EC2 instances.
- Add CloudFront distribution in front of your ELB for global performance.
- Implement monitoring with AWS CloudWatch alarms and notifications.
- Use Terraform remote backend (S3 + DynamoDB) for state management.
- Add basic IAM roles and policies for best practices security.

### Links

- [Terraform AWS Provider Documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [AWS VPC Concepts](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)
- [Terraform Modules Best Practices](https://developer.hashicorp.com/terraform/language/modules/develop)
- [AWS EC2 Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Instances.html)
- [AWS Load Balancer Overview](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html)
- [Terraform Remote State](https://developer.hashicorp.com/terraform/language/state/remote)
- [AWS CloudFront Introduction](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
- [AWS RDS Documentation](https://docs.aws.amazon.com/rds/index.html)
- [Route 53 Overview](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)

---

Once you complete this project, you will have deep practical knowledge of cloud infrastructure creation and management using Terraform on AWS. You'll also have experience building modular and production-ready IaC (Infrastructure as Code) projects.

This project simulates real-world cloud environments and challenges, preparing you for professional DevOps and Cloud Engineering roles.

`;export{e as default};
