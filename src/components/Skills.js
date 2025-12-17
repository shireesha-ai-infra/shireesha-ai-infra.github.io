import styles from './Skills.module.css';

const skillData = [
    {
        category: "Foundations",
        skills: ["Python", "Linux Systems", "Git", "Bash Scripting", "Networking"]
    },
    {
        category: "Platform Infrastructure",
        skills: ["Docker", "Kubernetes", "Helm", "Terraform", "AWS/GCP", "Ansible"]
    },
    {
        category: "MLOps & LLMOps",
        skills: ["MLflow", "Model Registry", "Experimental Tracking", "Feature Stores", "DVC"]
    },
    {
        category: "Serving & Inference",
        skills: ["FastAPI", "TorchServe", "Triton Inference Server", "vLLM", "Ray Serve"]
    },
    {
        category: "Pipelines & Workflow",
        skills: ["Apache Airflow", "Kubeflow", "Jenkins", "GitHub Actions", "Argo"]
    },
    {
        category: "Monitoring & Observability",
        skills: ["Prometheus", "Grafana", "Evidently AI", "Drift Detection", "ELK Stack"]
    },
    {
        category: "Generative AI Systems",
        skills: ["RAG Pipelines", "Vector Databases (Pinecone/Milvus)", "LangChain", "LlamaIndex", "Agentic Systems"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="container section">
            <h2 className="heading-lg" style={{ marginBottom: '3rem' }}>Technical Arsenal</h2>

            <div className={styles.grid}>
                {skillData.map((group, idx) => (
                    <div key={idx} className={styles.card}>
                        <div className={styles.category}>{group.category}</div>
                        <div className={styles.skillList}>
                            {group.skills.map((skill, sIdx) => (
                                <span key={sIdx} className={styles.skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
