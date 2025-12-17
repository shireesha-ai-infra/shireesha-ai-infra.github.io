import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.badge}>
                AI Infrastructure | MLOps | Agentic Systems
            </div>

            <h1 className={styles.name}>
                Shireesha Govindu
            </h1>

            <h2 className={styles.headline}>
                Building the Infrastructure That Makes AI Reliable at Scale
            </h2>

            <p className={styles.subtext}>
                AI Infrastructure & MLOps Engineer with Tier-1 product company experience.
                Systems-first mindset. Infrastructure &gt; models. Production &gt; demos.
            </p>

            <div className={styles.ctaGroup}>
                <Link href="#projects" className={styles.btn}>
                    Projects
                </Link>
                <a href="/resume.pdf" className={styles.btn} target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
                <a href="https://github.com/shireesha-ai-infra" className={styles.btn} target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </div>
        </section>
    );
}
