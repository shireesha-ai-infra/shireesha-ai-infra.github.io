export const projects = [
    {
        id: "ml-llm-experiment-tracking",
        title: "ML & LLM Experperiment Tracking System with MLFlow",
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
        id: "model-registry-llmops ",
        title: "Model Registry & Versioning (Models + Prompts + RAG)",
        description: "End-to-end MLOps platform featuring MLflow tracking, registry, and FastAPI inference. Built on Kubernetes with Docker, featuring canary deployments and automated rollbacks via CI/CD.",
        tags: ["Kubernetes", "MLflow", "FastAPI", "Docker", "CI/CD"],
        github: "https://github.com/shireesha-ai-infra/model-registry-llmops",
        live: "#",
        longDescription: `
            This project implements a production-grade AI asset registry for managing the full lifecycle of machine learning models, LLM prompts, OpenAI configurations, and RAG pipelines.
It uses MLflow as a unified backend to track experiments, store artifacts, and govern asset versions.
All assets are promoted through explicit staging → production workflows, ensuring safety and auditability.
The system supports instant rollback without retraining, enabling reliable AI deployments.
It mirrors real-world AI Infrastructure and LLMOps practices used in modern product companies.
        `,
        executionFlow: `
            1.Training & Experimentation
ML models, prompts, LLM configs, and RAG pipelines are created and evaluated through isolated experiment runs.
	2.	Experiment Tracking
Metrics, parameters, artifacts, and logs are captured using MLflow for full reproducibility.
	3.	Unified Registry Storage
Validated assets are registered in a centralized MLflow registry with metadata and versioning.
	4.	Staging → Production Promotion
Assets are explicitly promoted to production only after validation; serving systems consume production-approved assets.
	5.	Serving & Rollback
Inference APIs resolve only production assets, with instant rollback to previous safe versions if issues occur.
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
