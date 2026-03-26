import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

// ─── EmailJS Config ────────────────────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com (free)
// 2. Add a Gmail service → copy "Service ID" below
// 3. Create a template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//    → copy "Template ID" below
// 4. Go to Account → Public Key → copy below
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // e.g. 'abcDEF123456'
// ────────────────────────────────────────────────────────────────────────────

function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // If EmailJS not configured yet, fall back to Gmail compose
    if (
      EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
      EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
    ) {
      const mailTo = `https://mail.google.com/mail/?view=cm&to=chaudharidhaval00@gmail.com&su=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.from_name}\nEmail: ${form.from_email}\n\n${form.message}`)}`;
      window.open(mailTo, '_blank');
      setStatus('sent');
      setTimeout(() => { setStatus('idle'); setForm({ from_name: '', from_email: '', subject: '', message: '' }); }, 3000);
      return;
    }

    setStatus('sending');
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('sent');
        setForm({ from_name: '', from_email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      });
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
