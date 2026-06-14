import { Link } from 'react-router-dom';
import LiquidGlassButton from '../../../components/LiquidGlassButton';

type HeroSectionProps = {
  onDownload: () => void;
};

export default function HeroSection({ onDownload }: HeroSectionProps) {
  return (
    <section id="hero-section" className="homepage-panel">
      <div className="marketing-badge">
        <span className="marketing-badge-text">Welcome to PPC TODA</span>
      </div>
      <div id="headline" className="marketing-title">
        <span className="gradient-text">Tricycle</span> Booking at Your Fingertips
      </div>
      <div id="subtext" className="marketing-description">
        PPC TODA is the official app of Puerto Princesa City&apos;s Tricycle Operators and Drivers
        Association Federation, designed to improve services and make transportation easier and
        more reliable for passengers.
      </div>
      <div className="buttons-group">
        <div className="contactbuttonmargin" id="download-button">
          <LiquidGlassButton className="liquid-glass-shell" onClick={onDownload}>
            Download the app
          </LiquidGlassButton>
        </div>
        <Link to="/why-ppc-toda" className="contactbuttonmargin" id="why-button">
          <LiquidGlassButton className="liquid-glass-shell">
            Why PPC TODA?
          </LiquidGlassButton>
        </Link>
        <Link to="/about" className="contactbuttonmargin" id="about-button">
          <LiquidGlassButton className="liquid-glass-shell">
            About
          </LiquidGlassButton>
        </Link>
      </div>
    </section>
  );
}
