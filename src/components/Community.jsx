import '../styles/Community.css';

export default function Community() {
  const stats = [
    { value: '10–15', label: 'Grower families supported' },
    { value: 'Java & Sumatra', label: 'Regions of origin' },
    { value: '100%', label: 'Sustainable harvesting' },
    { value: '3–5 yrs', label: 'Regrowth cycle' },
  ];

  return (
    <section id="community" className="bg-sand">
      <div className="container">
        <div className="community-band">
          <div className="community-grid">
            <div>
              <div className="section-eyebrow community-eyebrow">Community & Sustainability</div>
              <h2>From the grove. For the grower.</h2>
              <p>Every pole sourced supports the livelihood of rural bamboo growers. Bamboo regenerates in three to five years without replanting, among the fastest-growing renewable building materials in the world.</p>
            </div>
            <div className="comm-stats">
              {stats.map((stat, i) => (
                <div key={i} className="comm-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
