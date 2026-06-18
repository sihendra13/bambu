export default function Divider() {
  return (
    <svg className="node-divider" viewBox="0 0 1200 24" preserveAspectRatio="none" aria-hidden="true" style={{ display: 'block', width: '100%', height: '22px' }}>
      <line x1="0" y1="12" x2="1200" y2="12" stroke="#4A7C59" strokeWidth="1.2" opacity=".3"/>
      <g fill="#4A7C59" opacity=".55">
        <circle cx="90" cy="12" r="3.5"/>
        <circle cx="280" cy="12" r="3.5"/>
        <circle cx="470" cy="12" r="3.5"/>
        <circle cx="660" cy="12" r="3.5"/>
        <circle cx="850" cy="12" r="3.5"/>
        <circle cx="1040" cy="12" r="3.5"/>
      </g>
    </svg>
  );
}
