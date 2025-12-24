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
        description: "End-to-end MLOps platform featuring MLflow registry, and versioning of ML & LLM models, Prompts and RAG",
        tags: ["Model Registry", "Versioning", "Prompting", "LLM", "RAG"],
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
        id: "handling-llm-hallucinations",
        title: "Handling LLM Hallucinations",
        description: "A production-grade RAG platform featuring real-time hallucination detection (faithfulness & citation verification), automated mitigation loops, and Weaviate-backed vector retrieval.",
        tags: ["LLM Hallucinations", "RAG", "Vector DB", "OpenAI API"],
        github: "https://github.com/shireesha-ai-infra/LLM_Hallucinations__Handling",
        live: "#",
        longDescription: `
            This system orchestrates a robust retrieval-augmented generation pipeline where every LLM response is rigorously validated before reaching the user. It uses an NLI-based "Faithfulness Detector" to ensure the answer is logically entailed by the retrieved Weaviate context and a "Citation Verifier" to guarantee source integrity. If a hallucination is detected, the "Mitigation Engine" automatically triggers self-correction loops or fallback protocols to prevent misinformation. The entire workflow is instrumented with Prometheus metrics to enforce SLAs on reliability and latency.
        `,
        executionFlow: `
            1. Retrieval: The RAGService embeds the user query and fetches relevant grounded context chunks from the Weaviate vector store.
            2. Generation: The LLMGateway (OpenAI) generates an initial answer based strictly on the provided context system prompt.
            3. Validation: The FaithfulnessDetector checks if the answer is supported by the context, while the CitationVerifier ensures all [doc-id] references exist.
            4. Mitigation: If validation scores drop below threshold (e.g., < 0.9), the MitigationEngine rejects the answer and prompts the LLM to rewrite it ("Self-Correction").
            5. Response: The final validated answer is returned to the user with attached quality metadata, or a safe fallback message is shown if maximum retries are exceeded.
        `
    }
];
