---
title: AI Infrastructure & MLOps
description: Operate machine learning models in production with proper CI/CD, monitoring, and cost management for AI workloads
tags: [advanced, mlops, ai-infrastructure, kubernetes, gpu, devops]
---

## Learning Objectives

- Understand the MLOps lifecycle and how it extends traditional DevOps practices
- Serve machine learning models in production with Kubernetes and GPU scheduling
- Build CI/CD pipelines for model versioning, testing, and deployment
- Monitor model performance in production: latency, throughput, drift, and cost
- Manage the cost of GPU compute as an engineering discipline

## Requirements

You are required to build and operate the infrastructure for running AI/ML workloads in production. You do not need to train models - the focus is entirely on operating them:

1. **MLOps Architecture and Model Registry**
   - Deploy MLflow as a model registry and experiment tracker:
     - Configure a PostgreSQL backend for metadata
     - Configure S3 or GCS for artifact storage (model files, datasets)
     - Register at least two versions of a pre-trained model (use any public model from Hugging Face)
   - Document the MLOps lifecycle:
     - Model development → experiment tracking → model registration → staging → production
     - How this differs from and integrates with the existing software delivery pipeline
   - Define model promotion criteria:
     - A model is promoted to production only if: accuracy > baseline, latency p95 < 200ms, no regression on a validation dataset

2. **Model Serving Infrastructure**
   - Deploy a model serving stack on Kubernetes:
     - **Option A**: BentoML - package and serve a Hugging Face model as an HTTP API
     - **Option B**: Triton Inference Server - serve an ONNX or TensorRT model
     - **Option C**: Seldon Core or KServe - full model serving platform on Kubernetes
   - Configure the serving deployment with:
     - Readiness and liveness probes
     - Resource requests/limits (CPU for non-GPU workloads; document GPU requirements if relevant)
     - Horizontal scaling based on inference request queue depth (KEDA)
     - Rolling deployment strategy for model updates
   - Expose the model via an API Gateway with rate limiting and authentication
   - Verify the serving endpoint: send inference requests and validate responses

3. **GPU Scheduling (Conceptual + Practical where possible)**
   - If GPU nodes are available (GKE Autopilot with GPU, AWS EC2 g4dn, or local GPU):
     - Deploy the NVIDIA Device Plugin for Kubernetes
     - Schedule a model inference Pod with GPU resource requests (`nvidia.com/gpu: 1`)
     - Measure inference latency on GPU vs. CPU
   - If GPU nodes are not available:
     - Document the complete GPU scheduling setup in `gpu-infrastructure.md`
     - Use a CPU-optimized quantized model (GGUF format with llama.cpp or similar) as a substitute
     - Document cost comparison: GPU instance cost vs. CPU instance cost for equivalent throughput
   - Configure time-slicing or MIG (Multi-Instance GPU) for shared GPU utilization documentation

4. **CI/CD for Models**
   - Implement a model deployment pipeline triggered on model registry promotion:
     - Pull the new model version from MLflow registry
     - Run automated evaluation: inference latency test, accuracy on a held-out dataset
     - Canary deploy: route 10% of traffic to the new model, 90% to the current production model
     - Monitor for 30 minutes: if no degradation, promote to 100%
     - Automatic rollback if p95 latency degrades > 30% or error rate > 1%
   - Implement model versioning in the serving layer:
     - Multiple model versions can run simultaneously
     - Traffic split is configurable without redeployment
     - Each version is independently observable

5. **Model Observability and Cost Management**
   - Deploy a monitoring stack for model inference:
     - **Request metrics**: requests/second, p50/p95/p99 latency, error rate per model version
     - **Resource metrics**: CPU/GPU utilization, memory usage, batch size distribution
     - **Business metrics**: number of inferences served, cost per 1,000 inferences
   - Implement data drift detection:
     - Use Evidently AI or WhyLogs to monitor input feature distributions
     - Alert when drift exceeds a defined threshold
     - Document what drift means for model reliability and when retraining is needed
   - FinOps for AI:
     - Calculate cost per 1,000 inference requests for both CPU and GPU serving
     - Implement scale-to-zero for non-critical model endpoints (using KEDA)
     - Document the cost-latency trade-off: when is GPU serving worth the cost?

### Stretch Goals

- Implement a full RAG (Retrieval-Augmented Generation) pipeline with a vector database (Qdrant or Weaviate) and measure infrastructure requirements
- Set up a model fine-tuning pipeline that triggers automatically when drift is detected above threshold
- Benchmark quantized models (GGUF/GGML) vs. full-precision serving and document the accuracy-cost trade-off

### Deliverables

- MLflow deployment with model registry, two registered model versions, and promotion criteria documented
- Model serving deployment on Kubernetes with scaling, probes, and API gateway configured
- GPU scheduling documentation (or live GPU deployment if available)
- CI/CD pipeline for model deployment with canary rollout and automatic rollback
- Grafana dashboard for model observability: request metrics, resource metrics, and drift alerts
- FinOps report: cost per 1,000 inferences for CPU vs. GPU, scale-to-zero configuration

### References

**Books**
- [Designing Machine Learning Systems - Chip Huyen](https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/) *(essential - the best book on ML in production)*
- [Machine Learning Engineering - Andriy Burkov](http://www.mlebook.com/)
- [Practical MLOps - Noah Gift & Alfredo Deza](https://www.oreilly.com/library/view/practical-mlops/9781098103002/)

**Courses**
- [Machine Learning Engineering for Production (MLOps) - Andrew Ng, Coursera](https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops)
- [Full Stack Deep Learning](https://fullstackdeeplearning.com/)
- [Made With ML - Goku Mohandas](https://madewithml.com/)

**Tools and Documentation**
- [MLflow Documentation](https://mlflow.org/docs/latest/index.html)
- [BentoML Documentation](https://docs.bentoml.com/)
- [Triton Inference Server](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/)
- [KServe Documentation](https://kserve.github.io/website/)
- [KEDA HTTP Add-on](https://github.com/kedacore/http-add-on)
- [Evidently AI - ML Monitoring](https://docs.evidentlyai.com/)
- [Hugging Face Model Hub](https://huggingface.co/models)
- [NVIDIA Device Plugin for Kubernetes](https://github.com/NVIDIA/k8s-device-plugin)

**Articles**
- [Chip Huyen: ML Systems Design Interview](https://huyenchip.com/machine-learning-systems-design/toc.html) *(free)*
- [Netflix: ML Platform](https://netflixtechblog.com/ml-platform-meetup-infra-for-contextual-bandits-and-reinforcement-learning-8a915eb13d4e)
- [Uber: Michelangelo ML Platform](https://www.uber.com/blog/michelangelo-machine-learning-platform/)

---

Once you complete this task you will operate AI workloads with the same rigor as any other production service - with versioning, canary deployments, drift detection, and cost accountability. This is what separates a platform engineer who understands AI infrastructure from one who just deploys containers.
