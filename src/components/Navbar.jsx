import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon">🌿</span>
          <span className="navbar__logo-text">Sumbara</span>
        </a>
        <ul className="navbar__links">
          <li><a href="#" className="navbar__link">Seaweed</a></li>
          <li><a href="#" className="navbar__link current">Bamboo</a></li>
          <li><a href="#compliance" className="navbar__link">Certifications</a></li>
          <li><a href="#inquiry" className="navbar__cta">Request Access</a></li>
        </ul>
      </div>
    </nav>
  );
}
