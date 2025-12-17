import { Terminal, Cloud, Activity, Server, GitGraph, Eye, Cpu } from 'lucide-react';
import styles from './Skills.module.css';

const skillData = [
    {
        category: "Foundations",
        icon: Terminal,
        skills: ["Python", "Linux Systems", "Git", "Bash Scripting", "Networking"]
    },
    {
        category: "Platform Infrastructure",
        icon: Cloud,
        skills: ["Docker", "Kubernetes", "Helm", "Terraform", "AWS/GCP", "Ansible"]
    },
    {
        category: "MLOps & LLMOps",
        icon: GitGraph,
        skills: ["MLflow", "Model Registry", "Experimental Tracking", "Feature Stores", "DVC"]
    },
    {
        category: "Serving & Inference",
        icon: Server,
        skills: ["FastAPI", "TorchServe", "Triton Inference Server", "vLLM", "Ray Serve"]
    },
    {
        category: "Pipelines & Workflow",
        icon: Activity,
        skills: ["Apache Airflow", "Kubeflow", "Jenkins", "GitHub Actions", "Argo"]
    },
    {
        category: "Monitoring & Observability",
        icon: Eye,
        skills: ["Prometheus", "Grafana", "Evidently AI", "Drift Detection", "ELK Stack"]
    },
    {
        category: "Generative AI Systems",
        icon: Cpu,
        skills: ["RAG Pipelines", "Vector Databases (Pinecone/Milvus)", "LangChain", "LlamaIndex", "Agentic Systems"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="container section">
            <h2 className="heading-lg" style={{ marginBottom: '3rem' }}>Technical Arsenal</h2>

            <div className={styles.grid}>
                {skillData.map((group, idx) => {
                    const Icon = group.icon;
                    return (
                        <div key={idx} className={styles.card}>
                            <div className={styles.category}>
                                <Icon size={20} className="text-accents-5" style={{ color: '#60a5fa' }} />
                                {group.category}
                            </div>
                            <div className={styles.skillList}>
                                {group.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className={styles.skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
