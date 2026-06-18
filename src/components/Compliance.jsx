import '../styles/Compliance.css';

export default function Compliance() {
  const certs = [
    { name: 'Phytosanitary Certificate', desc: 'Issued per shipment, clears customs first time', status: 'request' },
    { name: 'Moisture & Treatment Report', desc: 'Lab-verified moisture content & preservation method per shipment', status: 'request' },
    { name: 'Quality & Durability Testing', desc: 'Straightness, diameter, and stress testing per export grade standards', status: 'request' },
    { name: 'SVLK Timber Legality', desc: 'Confirmation with producer partner pending', status: 'pending' },
  ];

  return (
    <section id="compliance">
      <div className="container compliance-grid">
        <div>
          <div className="section-eyebrow">Compliance & Documents</div>
          <h2>Export-grade documentation.</h2>
          <p>All shipments are prepared with the certifications and paperwork fencing and landscape buyers need to clear customs without delay.</p>
          <div className="access-box">
            <div className="access-row">🔒 Detailed pricing, treatment reports, and certifications available to verified buyers only.</div>
            <a href="#inquiry">Request access →</a>
          </div>
        </div>
        <div className="cert-list">
          {certs.map((cert, i) => (
            <div key={i} className="cert-item">
              <div>
                <h4>{cert.name}</h4>
                <p>{cert.desc}</p>
              </div>
              <span className={`pill pill-${cert.status}`}>
                {cert.status === 'request' ? '✓ On request' : '🔒 Pending'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
