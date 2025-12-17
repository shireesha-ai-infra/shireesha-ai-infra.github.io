import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import styles from './page.module.css';

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectDetail({ params }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main className={styles.container}>
            <Link href="/#projects" className={styles.backLink}>
                <ArrowLeft size={20} /> Back to Projects
            </Link>

            <header className={styles.header}>
                <h1 className={styles.title}>{project.title}</h1>

                <div className={styles.tags}>
                    {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div className={styles.links}>
                    {project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            <Github size={20} /> View Code
                        </a>
                    )}
                    {project.live !== '#' && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            <ExternalLink size={20} /> Live Demo
                        </a>
                    )}
                </div>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Explanation</h2>
                <div className={styles.content}>
                    {project.longDescription}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Execution Flow</h2>
                <div className={styles.content}>
                    {project.executionFlow}
                </div>
            </section>
        </main>
    );
}
