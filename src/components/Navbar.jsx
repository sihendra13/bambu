import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const complianceEl = document.getElementById('compliance');
      const inquiryEl = document.getElementById('inquiry');

      if (inquiryEl && window.scrollY >= inquiryEl.offsetTop - 200) {
        setActiveSection('inquiry');
      } else if (complianceEl && window.scrollY >= complianceEl.offsetTop - 200) {
        setActiveSection('compliance');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon">🌿</span>
          <span className="navbar__logo-text">Sumbara</span>
        </a>
        <ul className="navbar__links">
          <li><a href="#" className={`navbar__link ${activeSection === 'home' ? 'active' : ''}`}>Bamboo</a></li>
          <li><a href="#compliance" className={`navbar__link ${activeSection === 'compliance' ? 'active' : ''}`}>Certifications</a></li>
          <li><a href="#inquiry" className="navbar__cta">Request Access</a></li>
        </ul>
      </div>
    </nav>
  );
}
