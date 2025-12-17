"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Menu, X, FileText, Home } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo} aria-label="Home">
                    <Home size={24} />
                </Link>

                {/* Desktop Menu */}
                <div className={styles.links}>
                    <Link href="#about" className={styles.link}>About</Link>
                    <Link href="#skills" className={styles.link}>Skills</Link>
                    <Link href="#projects" className={styles.link}>Projects</Link>
                    <Link href="#blogs" className={styles.link}>Blogs</Link>
                    <Link href="#experience" className={styles.link}>Experience</Link>

                    <div className={styles.socials}>
                        <a href="https://github.com/shireesha-ai-infra" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={20} className={styles.icon} />
                        </a>
                        <a href="https://www.linkedin.com/in/shireesha-govindu-510018161" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={20} className={styles.icon} />
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                            <FileText size={20} className={styles.icon} />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                        <Link href="#about" className={styles.link} onClick={toggleMenu}>About</Link>
                        <Link href="#skills" className={styles.link} onClick={toggleMenu}>Skills</Link>
                        <Link href="#projects" className={styles.link} onClick={toggleMenu}>Projects</Link>
                        <Link href="#blogs" className={styles.link} onClick={toggleMenu}>Blogs</Link>
                        <Link href="#experience" className={styles.link} onClick={toggleMenu}>Experience</Link>

                        <div className={styles.socials}>
                            <a href="https://github.com/shireesha-ai-infra" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github size={20} className={styles.icon} />
                            </a>
                            <a href="https://www.linkedin.com/in/shireesha-govindu-510018161" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={20} className={styles.icon} />
                            </a>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                                <FileText size={20} className={styles.icon} />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
