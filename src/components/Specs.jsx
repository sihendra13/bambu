import '../styles/Specs.css';

export default function Specs() {
  const specs = [
    { field: 'Species (local / Latin)', value: 'Tonkin Bamboo (solid-culm)', why: 'Preferred for fencing. Dense, durable, superior to hollow structural types.' },
    { field: 'Diameter', value: '0.75" – 1" (19–25 mm)', why: 'Standard for residential & commercial fencing panels, posts, and rolled screening.' },
    { field: 'Length', value: '4ft / 6ft / 8ft height, 8ft width', why: 'Standard panel dimensions for North American & European market specifications.' },
    { field: 'Moisture content', value: '<12% (verified lab report)', why: 'Critical. Above 12% risks warping, cracking, and fungal decay in outdoor conditions.' },
    { field: 'Preservation method', value: 'Heat-treated @ 200°C (no chemicals)', why: 'Achieves highest EU durability class; 15–20 year outdoor lifespan without toxic treatments.' },
    { field: 'MOQ (Minimum Order)', value: '1 container (≈20 MT)', why: 'Standard container load; bulk orders available with custom specifications.' },
  ];

  return (
    <section id="specs">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">The Product</div>
          <h2>Industry-standard specifications</h2>
          <p>Tonkin bamboo, heat-treated for durability, graded to export standards for reliable fencing and landscape applications worldwide.</p>
        </div>
        <div className="spec-table">
          {specs.map((spec, i) => (
            <div key={i} className="spec-row">
              <div className="spec-field">{spec.field}</div>
              <div className="spec-value">{spec.value}</div>
              <div className="spec-why">{spec.why}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
