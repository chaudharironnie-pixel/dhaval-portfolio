import React from 'react';
import '../styles/Interest.css';

function Interest() {
  return (
    <div className="dark-card details-bar">
      <span className="bar-label">Details</span>
      <div className="bar-divider" />
      <span className="detail-tag">🎓 MCA Student</span>
      <a className="detail-tag detail-tag--link" href="https://mail.google.com/mail/?view=cm&to=chaudharidhaval00@gmail.com" target="_blank" rel="noreferrer">📧 chaudharidhaval00@email.com</a>
      <a className="detail-tag detail-tag--link" href="tel:+919099425757">📞 +91 90994 25757</a>
      <span className="detail-tag">🇮🇳 Gujarat, India</span>
    </div>
  );
}

export default Interest;
