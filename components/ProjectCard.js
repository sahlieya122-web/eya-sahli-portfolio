'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

export default function ProjectCard({ project }) {

    const [open, setOpen] = useState(false);

    const [mounted, setMounted] = useState(false);

    const closeButtonRef = useRef(null);

    const titleId = useId();

    const tags = project.tags || [];

    useEffect(() => {

        setMounted(true);

    }, []);

    useEffect(() => {

        if (!open) return;

        const oldOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event) => {

            if (event.key === 'Escape') {

                setOpen(false);

            }

        };

        document.addEventListener('keydown', handleKeyDown);

        const timer = setTimeout(() => {

            closeButtonRef.current?.focus();

        }, 40);

        return () => {

            document.body.style.overflow = oldOverflow;

            document.removeEventListener(
                'keydown',
                handleKeyDown
            );

            clearTimeout(timer);

        };

    }, [open]);

    const modal =

        mounted &&

        open &&

        createPortal(

            <div
                className="project-popup-backdrop"
                onMouseDown={(event) => {

                    if (event.target === event.currentTarget) {

                        setOpen(false);

                    }

                }}
            >

                <div
                    className="project-popup"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                >

                    <button
                        ref={closeButtonRef}
                        type="button"
                        className="project-popup-close"
                        onClick={() => setOpen(false)}
                        aria-label="Close project"
                    >
                        ×
                    </button>

                    <div className="project-popup-visual">

                        <div
                            className="project-popup-image"
                            style={{
                                backgroundImage: `url("${project.image}")`,
                            }}
                        />

                        <div className="project-popup-image-overlay" />

                        <div className="project-popup-meta">

                            {project.category && (

                                <span>
                                    {project.category}
                                </span>

                            )}

                            {project.year && (

                                <span>
                                    {project.year}
                                </span>

                            )}

                        </div>

                        <div className="project-popup-heading">

                            <span>
                                Selected project
                            </span>

                            <h2 id={titleId}>
                                {project.title}
                            </h2>

                        </div>

                    </div>

                    <div className="project-popup-content">

                        <div className="project-popup-block">

                            <span className="popup-label">
                                Project overview
                            </span>

                            <p>
                                {project.description}
                            </p>

                            {project.details && (

                                <p>
                                    {project.details}
                                </p>

                            )}

                        </div>

                        {tags.length > 0 && (

                            <div className="project-popup-block">

                                <span className="popup-label">
                                    Technologies &amp; methods
                                </span>

                                <div className="project-popup-tags">

                                    {tags.map((tag) => (

                                        <span key={tag}>
                                            {tag}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        )}

                        {(project.link ||
                            project.demo ||
                            project.github) && (

                            <div className="project-popup-actions">

                                {(project.link || project.demo) && (

                                    <a
                                        href={
                                            project.link ||
                                            project.demo
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View project
                                        <strong>↗️</strong>
                                    </a>

                                )}

                                {project.github && (

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="secondary"
                                    >
                                        GitHub
                                        <strong>↗️</strong>
                                    </a>

                                )}

                            </div>

                        )}

                    </div>

                </div>

            </div>,

            document.body

        );

    return (

        <>

            <article
                className={`project-card project-photo-card ${
                    project.featured ? 'featured' : ''
                }`}
                tabIndex={0}
                role="button"
                aria-label={`Open project ${project.title}`}
                onClick={() => setOpen(true)}
                onKeyDown={(event) => {

                    if (
                        event.key === 'Enter' ||
                        event.key === ' '
                    ) {

                        event.preventDefault();

                        setOpen(true);

                    }

                }}
            >

                <div
                    className="project-photo"
                    style={{
                        backgroundImage: `url("${project.image}")`,
                    }}
                />

                <div className="project-photo-overlay" />

                <div className="project-photo-content">

                    <div className="project-meta">

                        <span>
                            {project.category}
                        </span>

                        <span>
                            {project.year}
                        </span>

                    </div>

                    <h3>
                        {project.title}
                    </h3>

                    <p>
                        {project.description}
                    </p>

                    <div className="tag-row">

                        {tags.map((tag) => (

                            <span
                                className="tag photo-tag"
                                key={tag}
                            >
                                {tag}
                            </span>

                        ))}

                    </div>

                </div>

                <div className="project-card-open">
                    ↗️
                </div>

            </article>

            {modal}

        </>

    );

}