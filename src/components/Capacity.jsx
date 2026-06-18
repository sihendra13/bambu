import '../styles/Capacity.css';

export default function Capacity() {
  const stats = [
    { icon: '🌱', value: '500–1000', label: 'MT/month supply capacity' },
    { icon: '🏢', value: '1000', label: 'MT warehouse capacity' },
    { icon: '👥', value: '10–15', label: 'verified grower partners' },
    { icon: '🌍', value: '15+', label: 'active export markets' },
  ];

  return (
    <section className="bg-sand">
      <div className="container">
        <div className="section-head center">
          <div className="section-eyebrow">Supply Capability</div>
          <h2>Built for fence runs. Ready to scale.</h2>
          <p>Direct sourcing from verified bamboo growers, structured to deliver consistent quality at container volume — not one good batch.</p>
        </div>
        <div className="cap-grid">
          {stats.map((stat, i) => (
            <div key={i} className="cap-card">
              <div className="cap-card__icon">{stat.icon}</div>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
