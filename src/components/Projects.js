import { Github, ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

const projectData = [
    {
        title: "Production-Grade AI Infrastructure Platform",
        description: "End-to-end MLOps platform featuring MLflow tracking, registry, and FastAPI inference. Built on Kubernetes with Docker, featuring canary deployments and automated rollbacks via CI/CD.",
        tags: ["Kubernetes", "MLflow", "FastAPI", "Docker", "CI/CD"],
        github: "#",
        live: "#"
    },
    {
        title: "LLM Experiment Tracking & Governance",
        description: "Centralized system for tracking large language model experiments. Includes prompt versioning, response evaluation benchmarks, and governance policies for model capabilities.",
        tags: ["LLMOps", "Python", "Weights & Biases", "LangChain"],
        github: "#",
        live: "#"
    },
    {
        title: "Scalable ML Inference API",
        description: "High-throughput inference service designed for low-latency requests. Implemented batch processing and auto-scaling policies to handle traffic spikes efficiently.",
        tags: ["Ray Serve", "Python", "AsyncIO", "Redis"],
        github: "#",
        live: "#"
    },
    {
        title: "Agentic AI System Orchestrator",
        description: "Framework for coordinating multi-agent workflows. Enables agents to dynamically select tools, share context, and execute complex multi-step reasoning tasks.",
        tags: ["GenAI", "Agents", "Vector DB", "OpenAI API"],
        github: "#",
        live: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="container section">
            <h2 className="heading-lg" style={{ marginBottom: '3rem' }}>Notable Projects</h2>

            <div className={styles.grid}>
                {projectData.map((project, idx) => (
                    <div key={idx} className={styles.card}>
                        <div>
                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>
                        </div>

                        <div className={styles.tags}>
                            {project.tags.map(tag => (
                                <span key={tag} className={styles.tag}>{tag}</span>
                            ))}
                        </div>

                        <div className={styles.links}>
                            <a href={project.github} className={styles.link} target="_blank" rel="noopener noreferrer">
                                <Github size={16} /> Code
                            </a>
                            <a href={project.live} className={styles.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={16} /> Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
