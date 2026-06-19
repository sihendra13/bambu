import { MapPin, Phone, Mail } from 'lucide-react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span>🌿</span>
              <span className="footer__logo-text">Sumbara</span>
            </div>
            <p className="footer__tagline">Indonesia's Natural Commodities. Global Reach.</p>
            <p className="footer__role">Digital Sourcing Hub</p>
            <p className="footer__desc">
              Premium Indonesian bamboo for fencing and landscape construction. Sourced directly from verified growers and export-ready for global markets.
            </p>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Products</p>
            <a href="#specs">Natural Tonkin Bamboo</a>
            <a href="#specs">Heat-Treated Carbonized</a>
            <a href="#compliance">Certifications</a>
            <a href="#inquiry">Request Sample</a>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Company</p>
            <a href="#capacity">Supply Capacity</a>
            <a href="#community">Sustainability</a>
            <a href="#inquiry">Contact Us</a>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Contact</p>
            <div className="footer__contact-item">
              <MapPin size={13} />
              <span>Jl. Tiwir VII Sumbersari, Moyudan, Sleman, Yogyakarta, Indonesia</span>
            </div>
            <div className="footer__contact-item">
              <Phone size={13} />
              <a href="tel:+62">+62 xxx-xxxx-xxxx</a>
            </div>
            <div className="footer__contact-item">
              <Mail size={13} />
              <a href="mailto:hello@sumbara.id">hello@sumbara.id</a>
            </div>
            <div className="footer__contact-item">
              <span style={{fontSize:13}}>📸</span>
              <a href="https://instagram.com/kayuwangi.id" target="_blank" rel="noopener">@kayuwangi.id</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 PT. Kayuwangi Jagadhita Inovasi. All rights reserved.</p>
          <p className="footer__haccp">Digital Sourcing Hub · Sleman, Yogyakarta · Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
