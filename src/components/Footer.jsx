import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {currentYear}{' '}
          <a
            href="https://magicunicorn.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Magic Unicorn Unconventional Technology & Stuff Inc website"
          >
            Magic Unicorn Unconventional Technology &amp; Stuff Inc
          </a>
        </p>
      </div>
    </footer>
  );
}
