import { useState } from 'react';
import '../styles/Inquiry.css';

export default function Inquiry() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    country: '',
    application: '',
    port: '',
    quantity: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission will be handled by backend
    console.log('Form submitted:', formData);
  };

  return (
    <section id="inquiry">
      <div className="container inquiry-grid">
        <div>
          <div className="section-eyebrow">Get Started</div>
          <h2>Ready to source bamboo from Indonesia?</h2>
          <p>Submit your sourcing details and we'll respond with specifications, pricing, and sample arrangements.</p>
          <div className="benefit">✓ Verified buyers receive complete spec sheets, treatment reports & lab analysis</div>
          <div className="benefit">✓ Sample requests accommodated for serious buyers & landscape professionals</div>
          <div className="benefit">✓ Response within 24 hours on business days</div>
          <div className="direct-contact">
            <div className="section-eyebrow">Direct contact</div>
            <div>+62 xxx-xxxx-xxxx</div>
            <a href="mailto:hello@sumbara.id">hello@sumbara.id</a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="form-card">
          <div className="form-row">
            <div className="form-field">
              <label>Company name *</label>
              <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" required />
            </div>
            <div className="form-field">
              <label>Your name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Business email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required />
            </div>
            <div className="form-field">
              <label>Country *</label>
              <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Application *</label>
              <select name="application" value={formData.application} onChange={handleChange} required>
                <option value="">Select application</option>
                <option value="fencing">Fencing & garden screening</option>
                <option value="landscape">Landscape construction</option>
                <option value="furniture">Furniture</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-field">
              <label>Target delivery port</label>
              <input type="text" name="port" value={formData.port} onChange={handleChange} placeholder="e.g. Port of Hamburg" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Estimated quantity</label>
              <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g. 1 container/month" />
            </div>
          </div>

          <div className="form-row single">
            <div className="form-field">
              <label>Additional notes</label>
              <textarea name="notes" value={formData.notes} onChange={handleChange} rows="3" placeholder="Specific grade requirements, timeline, or questions..."></textarea>
            </div>
          </div>

          <button type="submit" className="submit-btn">➤ Submit sourcing request</button>
          <p className="form-note">Your information is used solely to verify your buyer status and respond to your inquiry.</p>
        </form>
      </div>
    </section>
  );
}
