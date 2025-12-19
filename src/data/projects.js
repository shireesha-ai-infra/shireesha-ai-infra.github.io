export const projects = [
    {
        id: "ml-llm-experiment-tracking",
        title: "1.ML & LLM Experperiment Tracking System with MLFlow",
        description: "Centralized system for tracking large language model experiments. Includes prompt versioning, response evaluation benchmarks, and governance policies for model capabilities.",
        tags: ["MLFlow","Experiment Tracking","Prompt versioning","LLMOps"],
        github: "https://github.com/shireesha-ai-infra/ml-llm-experiment-tracking",
        live: "#",
        longDescription: `
            This project implements a unified experiment tracking system for classical ML, neural networks, LLMs, and RAG pipelines using MLflow as a centralized control plane.
It treats models, prompts, and retrieval configurations as first-class, versioned artifacts, ensuring full reproducibility across experiments.
The system captures not only accuracy-style metrics, but also latency, token usage, and cost, enabling quality–cost tradeoff analysis.
All experiments are logged in a consistent structure, allowing side-by-side comparison and auditability through the MLflow UI.
This design mirrors production-grade MLOps and LLMOps workflows used in real AI infrastructure systems.
        `,
        executionFlow: `
            1️⃣ Experiment Initialization
Each training or inference script initializes an MLflow experiment, defining the scope (ML, NN, LLM, or RAG) and ensuring logical separation of runs.

2️⃣ Parameter & Configuration Logging
Model hyperparameters, prompt versions, and RAG configurations (chunk size, retriever, embeddings) are logged as immutable parameters for reproducibility.

3️⃣ Training / Inference Execution
The model is trained or the LLM/RAG pipeline is executed, producing predictions or responses while tracking runtime behavior.

4️⃣ Metric & Cost Tracking
Performance metrics (accuracy, loss, relevance), system metrics (latency), and operational metrics (tokens, cost) are logged to MLflow.

5️⃣ Artifact Storage & Comparison
Models, prompt files, and generated outputs are stored as artifacts, enabling visual comparison, rollback, and promotion decisions via the MLflow UI.
        `
    },
    {
        id: "ai-infrastructure-platform",
        title: "Production-Grade AI Infrastructure Platform",
        description: "End-to-end MLOps platform featuring MLflow tracking, registry, and FastAPI inference. Built on Kubernetes with Docker, featuring canary deployments and automated rollbacks via CI/CD.",
        tags: ["Kubernetes", "MLflow", "FastAPI", "Docker", "CI/CD"],
        github: "#",
        live: "#",
        longDescription: `
            This project is a comprehensive MLOps platform designed to streamline the lifecycle of machine learning models from development to production. 
            It addresses the challenges of versioning, deployment consistency, and scalability.
            
            Key capabilities include:
            - **Experiment Tracking**: Utilizing MLflow to log parameters, metrics, and artifacts.
            - **Model Registry**: Centralized management of model versions and stage transitions.
            - **Scalable Inference**: FastAPI services containerized with Docker and orchestrated by Kubernetes for high availability.
        `,
        executionFlow: `
            1. **Data Ingestion**: Data is validated and ingested into the training pipeline.
            2. **Training & Tracking**: Models are trained, with all metadata logged to MLflow.
            3. **Registration**: The best-performing model is registered and promoted to the 'Staging' stage.
            4. **CI/CD Pipeline**: A GitHub Actions workflow triggers, building the Docker image and pushing it to the container registry.
            5. **Deployment**: Kubernetes updates the deployment manifest. Canary deployment strategy allows for gradual traffic shifting.
            6. **Monitoring**: Prometheus and Grafana monitor system health and model latency.
        `
    },
    {
        id: "scalable-ml-inference-api",
        title: "Scalable ML Inference API",
        description: "High-throughput inference service designed for low-latency requests. Implemented batch processing and auto-scaling policies to handle traffic spikes efficiently.",
        tags: ["Python", "ML"],
        github: "https://github.com/shireesha-ai-infra/Scalable_ML_Inference_API",
        live: "#",
        longDescription: `
            A high-performance API backend tailored for serving machine learning models at scale. 
            It optimizes resource utilization through dynamic batching and asynchronous processing.
        `,
        executionFlow: `
            1. **Request Received**: API gateway accepts incoming inference requests.
            2. **Batching**: Requests are aggregated into batches to maximize GPU/CPU throughput.
            3. **Inference**: The model processes the batch.
            4. **Response**: Results are unbundled and returned to the respective clients.
            5. **Scaling**: Horizontal Pod Autoscaler adds replicas based on Request Per Second (RPS) metrics.
        `
    },
    {
        id: "agentic-ai-orchestrator",
        title: "Agentic AI System Orchestrator",
        description: "Framework for coordinating multi-agent workflows. Enables agents to dynamically select tools, share context, and execute complex multi-step reasoning tasks.",
        tags: ["GenAI", "Agents", "Vector DB", "OpenAI API"],
        github: "#",
        live: "#",
        longDescription: `
            An advanced framework that enables autonomous agents to collaborate and solve complex problems. 
            It utilizes a shared memory context and a tool registry to give agents agency.
        `,
        executionFlow: `
            1. **Task Definition**: User defines a high-level goal.
            2. **Decomposition**: The orchestrator breaks the goal into sub-tasks.
            3. **Agent Assignment**: Specialized agents are assigned to each sub-task.
            4. **Execution & Tool Use**: Agents query the Vector DB for context and use tools (web search, calculator, etc.).
            5. **Synthesis**: Results are aggregated and synthesized into a final answer.
        `
    }
];
