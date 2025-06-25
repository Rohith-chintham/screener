import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Screener App. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/yourname" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:contact@example.com">Contact</a>
        <a href="/privacy">Privacy</a>
        <p><b>NSE Clearing Limited</b></p>
        <p>Registered Office :
           kakatiya Plaza, C-1, Block G,
           kandagatla Complex,
           Hanamkonda (E)
           Telangana - 506001</p>
      </div>
    </footer>
  );
};

export default Footer;
