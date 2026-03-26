import React, { useState } from 'react';
import '../styles/Contact.css';

const WEB3FORMS_KEY = '77bd05e5-8c77-40a9-a8cc-cb194bf6f39f';

function Contact() {
  const [form, setForm] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          to: 'chaudharidhaval00@gmail.com',
          name: form.from_name,
          email: form.from_email,
          subject: form.subject,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setForm({ from_name: '', from_email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <div className="contact-section">
      <h2 className="contact-title">WANNA SAY SOMETHING...</h2>
      <p className="contact-sub">
        I'm interested in freelance &amp; business opportunities, especially ambitious projects.
        However, if you have other request or question, don't hesitate to use the form.
      </p>

      <div className="contact-body">
        {/* Form */}
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="contact-row">
            <input
              className="contact-input"
              type="text"
              name="from_name"
              placeholder="Name"
              value={form.from_name}
              onChange={handleChange}
              required
            />
            <input
              className="contact-input"
              type="email"
              name="from_email"
              placeholder="Email"
              value={form.from_email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            className="contact-input contact-input--full"
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
          <textarea
            className="contact-input contact-textarea"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className={`contact-send-btn contact-send-btn--${status}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' && '⏳ SENDING...'}
            {status === 'sent' && '✓ MESSAGE SENT!'}
            {status === 'error' && '✕ FAILED — TRY AGAIN'}
            {status === 'idle' && 'SEND MESSAGE'}
          </button>
        </form>

        {/* Info */}
        <div className="contact-info">
          <div className="contact-info-item">
            <span className="contact-info-icon">📍</span>
            <div>
              <p className="contact-info-label">ADDRESS</p>
              <p className="contact-info-val">Gujarat, India</p>
              <p className="contact-info-val">Ahemdabad, India</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-icon">✉️</span>
            <div>
              <p className="contact-info-label">EMAIL ME</p>
              <a className="contact-info-link" href="mailto:chaudharidhaval00@gmail.com">
                chaudharidhaval00@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-icon">💼</span>
            <div>
              <p className="contact-info-label">LINKEDIN</p>
              <a
                className="contact-info-link"
                href="https://www.linkedin.com/in/dhaval-chaudhari-3456b0341/"
                target="_blank"
                rel="noreferrer"
              >
                Dhaval Chaudhari
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
