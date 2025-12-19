import Link from 'next/link';
import { Github, ExternalLink, Folder } from 'lucide-react';
import styles from './Projects.module.css';
import { projects } from '@/data/projects';

export default function Projects() {
    return (
        <section id="projects" className="container section">
            <h2 className="heading-lg" style={{ marginBottom: '3rem' }}>Projects</h2>

            <div className={styles.grid}>
                {projects.map((project, idx) => (
                    <div key={idx} className={styles.card}>
                        <div>
                            <Link href={`/projects/${project.id}`} className={styles.titleLink}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <Folder size={24} color="#60a5fa" />
                                    <h3 className={styles.title}>{project.title}</h3>
                                </div>
                            </Link>
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
