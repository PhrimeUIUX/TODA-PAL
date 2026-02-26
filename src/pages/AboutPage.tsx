import { useEffect } from 'react';
import './about.css';

export default function AboutPage() {
  useEffect(() => {
    document.body.classList.add('about-page');

    return () => {
      document.body.classList.remove('about-page');
    };
  }, []);

  return (
    <section className="about-wrapper">
      <div className="about-glass">
        <div className="about-profile">
          <img src="/assets/about/ppctoda-logo.png" alt="PPC TODA" className="about-avatar" />
          <h1>PPC TODA</h1>
          <p className="about-subtitle">Modern TODA booking experience</p>
        </div>

        <div className="about-info">
          <p>
            PPC TODA is built to make everyday tricycle rides faster, safer, and more accessible
            through thoughtful design and technology.
          </p>
        </div>

        <div className="about-credits">
          <a href="https://speedovate.com" target="_blank" rel="noopener" className="credit-link">
            <img src="/assets/about/speedovate-logo.png" alt="Speedovate" />
            <span>Powered by Speedovate</span>
          </a>

          <a
            href="https://facebook.com/Phrimeuniverse"
            target="_blank"
            rel="noopener"
            className="credit-link"
          >
            <img src="/assets/about/phrimeuiux-profile.png" alt="Phrime UI/UX" />
            <span>Web Designed & Developed by Phrime UI/UX</span>
          </a>
        </div>

        <div className="about-footer">© 2026 PPC TODA</div>
      </div>
    </section>
  );
}
