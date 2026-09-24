'use client';

import { useEffect, useState } from 'react';

import Navbar from '@/components/Navbar';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import Reveal from '@/components/Reveal';

import {
    profile,
    highlights,
    experiences,
    projects,
    skills,
    education,
    certification,
} from '@/data/portfolio';


/* =========================================================
   TECHNICAL SKILL CARD
========================================================= */

function SkillCard({ skill }) {
    if (!skill) return null;

    return (
        <article className="skill-visual-card reveal">
            <div
                className="skill-visual-bg"
                style={{
                    backgroundImage: `url("${skill.image}")`,
                }}
            />

            <div className="skill-visual-overlay" />

            <div className="skill-visual-content">
                <h3>
                    {skill.title}
                </h3>

                <div className="skill-visual-items">
                    {skill.items?.map((item) => (
                        <span key={item}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}


/* =========================================================
   HOME
========================================================= */

export default function Home() {
    const [certificateOpen, setCertificateOpen] =
        useState(false);


    /* =======================================================
       CERTIFICATE POPUP BEHAVIOUR
    ======================================================= */

    useEffect(() => {
        if (!certificateOpen) return;

        const oldOverflow =
            document.body.style.overflow;

        document.body.style.overflow =
            'hidden';

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setCertificateOpen(false);
            }
        };

        document.addEventListener(
            'keydown',
            handleEscape
        );

        return () => {
            document.body.style.overflow =
                oldOverflow;

            document.removeEventListener(
                'keydown',
                handleEscape
            );
        };
    }, [certificateOpen]);


    return (
        <main id="top">
            <Reveal />
            <Navbar />


            {/* ===================================================
          HERO
      ==================================================== */}

            <section className="hero section-pad">
                <div className="hero-glow glow-one" />
                <div className="hero-glow glow-two" />

                <div className="container hero-grid">

                    <div className="hero-copy reveal">
                        <span className="hero-chip">
                            Available for R&amp;D · PhD ·
                            Engineering opportunities
                        </span>

                        <p className="hero-kicker">
                            Signal · RF · Embedded Systems ·
                            Applied AI
                        </p>

                        <h1>
                            Engineering signals into{' '}
                            <span>
                                reliable systems.
                            </span>
                        </h1>

                        <p className="hero-text">
                            {profile.intro}
                        </p>

                        <div className="hero-actions">
                            <a
                                className="btn primary"
                                href="#projects"
                            >
                                Explore my projects
                                <span>↘️</span>
                            </a>

                            <a
                                className="btn secondary"
                                href={`mailto:${profile.email}`}
                            >
                                Contact me
                            </a>
                        </div>

                        <div className="hero-facts">
                            <div>
                                <strong>RF</strong>
                                <span>
                                    HFSS · CST · VNA
                                </span>
                            </div>

                            <div>
                                <strong>DSP</strong>
                                <span>
                                    MATLAB · Python
                                </span>
                            </div>

                            <div>
                                <strong>HW</strong>
                                <span>
                                    STM32 · FPGA
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className="portrait-wrap reveal">
                        <div className="portrait-card">

                            <div className="portrait-accent" />

                            <img
                                src="/eya-sahli.png"
                                alt="Eya Sahli"
                            />

                            <div className="portrait-caption">
                                <small>
                                    Based in
                                </small>

                                <strong>
                                    Bourg-la-Reine, France
                                </strong>
                            </div>

                        </div>

                        <div className="floating-card fc-one">
                            <span>2025</span>
                            RF Research
                        </div>

                        <div className="floating-card fc-two">
                            <span>4</span>
                            Core domains
                        </div>
                    </div>

                </div>
            </section>


            {/* ===================================================
          ABOUT
      ==================================================== */}

            <section
                id="about"
                className="section-pad about-section"
            >
                <div className="container">

                    <SectionTitle
                        eyebrow="About"
                        title="A multidisciplinary engineering profile"
                        text="From electromagnetic simulation to embedded acquisition and machine learning, my work connects modelling, hardware and experimental validation."
                    />


                    <div className="about-grid">

                        <div className="about-story reveal">

                            <p>
                                I hold a Master 2 in{' '}
                                <strong>
                                    Signal and Telecommunications
                                </strong>{' '}
                                from Bretagne INP — ENIB,
                                following a Master 1 in{' '}
                                <strong>
                                    Embedded Electronic Systems
                                </strong>{' '}
                                and a Bachelor’s degree in{' '}
                                <strong>
                                    Biomedical Engineering
                                </strong>.
                            </p>

                            <p>
                                My projects span RF and microwave
                                characterization, sensor-based
                                electronics, autonomous energy systems,
                                embedded acquisition, digital
                                communications, multimedia processing
                                and deep learning. I particularly enjoy
                                problems where theoretical modelling
                                must be confronted with real
                                measurements.
                            </p>

                            <div className="research-note">

                                <span>
                                    Research mindset
                                </span>

                                <p>
                                    Scientific writing is currently in
                                    progress for work on chipless-RFID
                                    detection and deep-learning image
                                    classification.
                                </p>

                            </div>

                        </div>


                        <div className="highlight-grid reveal">

                            {highlights.map(
                                ([title, text], index) => (
                                    <div
                                        className={`highlight-card highlight-${index + 1}`}
                                        key={title}
                                    >
                                        <div className="highlight-decoration" />

                                        <strong>
                                            {title}
                                        </strong>

                                        <span>
                                            {text}
                                        </span>
                                    </div>
                                )
                            )}

                        </div>

                    </div>

                </div>
            </section>


            {/* ===================================================
          EXPERIENCE
      ==================================================== */}

            <section
                id="experience"
                className="section-pad soft-section"
            >
                <div className="container">

                    <SectionTitle
                        eyebrow="Experience"
                        title="Research & engineering experience"
                        text="Hands-on work across RF instrumentation, energy harvesting, biomedical sensing and experimental validation."
                    />

                    <div className="experience-list">

                        {experiences.map(
                            (experience, index) => (
                                <ExperienceCard
                                    key={experience.title}
                                    experience={experience}
                                    index={index}
                                />
                            )
                        )}

                    </div>

                </div>
            </section>


            {/* ===================================================
          PROJECTS
      ==================================================== */}

            <section
                id="projects"
                className="section-pad"
            >
                <div className="container">

                    <SectionTitle
                        eyebrow="Selected work"
                        title="Projects across signal, RF, AI & embedded systems"
                        text="A curated selection of projects that best represent my technical range and research interests."
                    />

                    <div className="project-grid">

                        {projects.map((project) => (
                            <ProjectCard
                                project={project}
                                key={project.title}
                            />
                        ))}

                    </div>

                </div>
            </section>


            {/* ===================================================
          TECHNICAL SKILLS
      ==================================================== */}

            <section
                id="skills"
                className="section-pad soft-section"
            >
                <div className="container">

                    <SectionTitle
                        eyebrow="Toolkit"
                        title="Technical skills"
                        text="Tools and methods used across modelling, implementation, measurement and validation."
                    />

                    <div className="skills-visual-grid">

                        {skills.map((skill) => (
                            <SkillCard
                                key={skill.title}
                                skill={skill}
                            />
                        ))}

                    </div>

                </div>
            </section>


            {/* ===================================================
          EDUCATION + CERTIFICATE
      ==================================================== */}

            <section
                id="education"
                className="section-pad"
            >
                <div className="container">

                    <SectionTitle
                        eyebrow="Background"
                        title="Education & certification"
                    />


                    <div className="education-layout">

                        <div className="education-list">

                            {education.map((item) => (
                                <article
                                    className="education-card reveal"
                                    key={item.degree}
                                >
                                    <time>
                                        {item.period}
                                    </time>

                                    <div>
                                        <h3>
                                            {item.degree}
                                        </h3>

                                        <p>
                                            {item.school}
                                        </p>

                                        <span>
                                            {item.place}
                                        </span>
                                    </div>

                                </article>
                            ))}

                        </div>


                        {/* =============================================
                CERTIFICATE PREVIEW
            ============================================== */}

                        <button
                            type="button"
                            className="certificate-preview"
                            onClick={() =>
                                setCertificateOpen(true)
                            }
                        >
                            <div
                                className="certificate-preview-image"
                                style={{
                                    backgroundImage:
                                        `url("${certification.image}")`,
                                }}
                            />

                            <div className="certificate-preview-overlay" />

                            <div className="certificate-preview-header">
                                <span>
                                    Certification
                                </span>

                                <span className="certificate-preview-arrow">
                                    ↗️
                                </span>
                            </div>


                            <div className="certificate-preview-content">

                                <div className="certificate-nvidia">
                                    NVIDIA
                                </div>

                                <h3>
                                    {certification.title}
                                </h3>

                                <p>
                                    {certification.issuer}
                                    {' · '}
                                    {certification.year}
                                </p>

                                <span className="certificate-open-text">
                                    View certificate
                                </span>

                            </div>
                        </button>

                    </div>

                </div>
            </section>


            {/* ===================================================
          CONTACT
      ==================================================== */}

            <section
                id="contact"
                className="contact-section section-pad"
            >
                <div className="container contact-card reveal">

                    <div>

                        <span className="eyebrow">
                            Let’s connect
                        </span>

                        <h2>
                            Interested in RF, signal processing,
                            embedded systems or applied AI?
                        </h2>

                        <p>
                            I am open to engineering, R&amp;D and
                            doctoral opportunities where rigorous
                            modelling and experimentation meet real
                            systems.
                        </p>

                    </div>


                    <div className="contact-actions">

                        <a
                            href={`mailto:${profile.email}`}
                            className="btn primary"
                        >
                            {profile.email}
                        </a>

                        <a
                            href={`tel:${profile.phone.replace(/\s/g, '')}`}
                            className="contact-phone"
                        >
                            {profile.phone}
                        </a>

                        <span>
                            {profile.location}
                        </span>

                    </div>

                </div>
            </section>


            {/* ===================================================
          FOOTER
      ==================================================== */}

            <footer>

                <div className="container footer-inner">

                    <span>
                        © 2026 Eya Sahli
                    </span>

                    <span>
                        Signal · RF · Embedded Systems · AI
                    </span>

                </div>

            </footer>


            {/* ===================================================
          CERTIFICATE POPUP
      ==================================================== */}

            {certificateOpen && (
                <div
                    className="certificate-popup-backdrop"
                    onMouseDown={(event) => {
                        if (
                            event.target === event.currentTarget
                        ) {
                            setCertificateOpen(false);
                        }
                    }}
                >
                    <div
                        className="certificate-popup"
                        role="dialog"
                        aria-modal="true"
                    >

                        <button
                            type="button"
                            className="certificate-popup-close"
                            onClick={() =>
                                setCertificateOpen(false)
                            }
                            aria-label="Close certificate"
                        >
                            ×
                        </button>


                        <div className="certificate-popup-visual">

                            <img
                                src={certification.image}
                                alt={certification.title}
                            />

                        </div>


                        <div className="certificate-popup-info">

                            <span className="certificate-popup-label">
                                Professional certification
                            </span>

                            <div className="certificate-popup-brand">
                                NVIDIA
                            </div>

                            <h2>
                                {certification.title}
                            </h2>

                            <p>
                                Issued by{' '}
                                <strong>
                                    {certification.issuer}
                                </strong>
                            </p>


                            <div className="certificate-popup-data">

                                <div>
                                    <span>
                                        Issuer
                                    </span>

                                    <strong>
                                        {certification.issuer}
                                    </strong>
                                </div>

                                <div>
                                    <span>
                                        Year
                                    </span>

                                    <strong>
                                        {certification.year}
                                    </strong>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            )}

        </main>
    );
}