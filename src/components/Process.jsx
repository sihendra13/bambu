import '../styles/Process.css';

export default function Process() {
  const steps = [
    { num: '01', title: 'Harvest', desc: 'Mature culms selected by age and diameter from verified grower partners.' },
    { num: '02', title: 'Treatment', desc: 'Preservation method applied and logged before drying. This step decides outdoor lifespan.' },
    { num: '03', title: 'Sort & QC', desc: 'Diameter, straightness, and moisture verified against spec before grading.' },
    { num: '04', title: 'Pack', desc: 'Bundled and wrapped for container loading, sized to limit transit damage.' },
    { num: '05', title: 'Ship', desc: 'From the source region to global ports. Ready for bulk and repeat orders.' },
  ];

  return (
    <section className="bg-sand">
      <div className="container">
        <div className="process-card">
          <h2>From grove to export container</h2>
          {steps.map((step) => (
            <div key={step.num} className="step">
              <div className="step__num">{step.num}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
