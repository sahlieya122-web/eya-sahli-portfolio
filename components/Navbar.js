'use client';

import { useEffect, useState } from 'react';

const links = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav-shell ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav container" aria-label="Primary navigation">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span>ES</span>
          <strong>Eya Sahli</strong>
        </a>
        <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>
              {link[0].toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
