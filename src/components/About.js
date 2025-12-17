import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={`container ${styles.section}`}>
            <h2 className={styles.heading}>About Me</h2>

            <div className={styles.timeline}>
                <div className={styles.item}>
                    <div className={styles.date}>Present</div>
                    <h3 className={styles.role}>Transitioning to AI Infrastructure & MLOps</h3>
                    <p className={styles.description}>
                        Focusing on building <span className={styles.highlight}>reliable, reproducible, and scalable</span> AI systems.
                        Bridging the gap between research demos and production reality with robust infrastructure (Kubernetes, Docker) and MLOps pipelines (MLflow, Kubeflow).
                    </p>
                </div>

                <div className={styles.item}>
                    <div className={styles.date}>2021 - 2024</div>
                    <h3 className={styles.role}>Software Engineer (Automation & Infra) @ AMD</h3>
                    <p className={styles.description}>
                        Built large-scale Python automation frameworks for validating next-gen silicon.
                        Engineered systems that handle thousands of tests daily, emphasizing <span className={styles.highlight}>scale, quality, and rigorous CI/CD practices</span>.
                    </p>
                </div>

                <div className={styles.item}>
                    <div className={styles.date}>2021 - 2022</div>
                    <h3 className={styles.role}>M.Tech in Computer Science & Engineering</h3>
                    <p className={styles.description}>
                        Deep dive into Systems, Distributed Computing, and Advanced Algorithms.
                        Developed a strong foundation in <span className={styles.highlight}>Linux internals and performance optimization</span>.
                    </p>
                </div>
            </div>
        </section>
    );
}
