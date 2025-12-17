import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.content}`}>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Shireesha Govindu. All rights reserved.
                </div>

                <div className={styles.links}>
                    <a href="https://github.com/shireesha-ai-infra" target="_blank" rel="noopener noreferrer" aria-label="Github">
                        <Github size={20} className={styles.link} />
                    </a>
                    <a href="https://www.linkedin.com/in/shireesha-govindu-510018161" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={20} className={styles.link} />
                    </a>
                    <a href="mailto:hello@example.com" aria-label="Email">
                        <Mail size={20} className={styles.link} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
