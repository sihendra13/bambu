import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { href: '#specs', label: 'Products' },
    { href: '#capacity', label: 'Capacity' },
    { href: '#compliance', label: 'Certifications' },
    { href: '#community', label: 'Impact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon">🌿</span>
          <span className="navbar__logo-text">Sumbara</span>
        </a>
        <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="navbar__link" onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#inquiry" className="navbar__cta" onClick={() => setOpen(false)}>Request Access</a>
          </li>
        </ul>
        <button className="navbar__burger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
}
