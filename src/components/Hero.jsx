import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <div className="section-eyebrow">Sumbara — Bamboo</div>
          <h1>Bamboo That Holds the Line</h1>
          <p className="hero__lede">Indonesian bamboo poles, treated and graded for outdoor fencing and landscape construction — sourced, tested, and shipped through a single verified partner.</p>
          <div className="hero__cta-row">
            <a href="#inquiry" className="btn btn-primary">Request specifications</a>
            <a href="#specs" className="btn btn-ghost">View spec sheet</a>
          </div>
        </div>
        <div className="hero__art" aria-hidden="true">
          <svg viewBox="0 0 200 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="70" y="10" width="60" height="300" rx="28" fill="#EAF3EE" stroke="#4A7C59" strokeWidth="2"/>
            <g stroke="#4A7C59" strokeWidth="2">
              <line x1="62" y1="60" x2="138" y2="60"/>
              <line x1="62" y1="140" x2="138" y2="140"/>
              <line x1="62" y1="220" x2="138" y2="220"/>
              <line x1="62" y1="270" x2="138" y2="270"/>
            </g>
            <g fill="#4A7C59">
              <circle cx="62" cy="60" r="3"/>
              <circle cx="138" cy="60" r="3"/>
              <circle cx="62" cy="140" r="3"/>
              <circle cx="138" cy="140" r="3"/>
              <circle cx="62" cy="220" r="3"/>
              <circle cx="138" cy="220" r="3"/>
              <circle cx="62" cy="270" r="3"/>
              <circle cx="138" cy="270" r="3"/>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
