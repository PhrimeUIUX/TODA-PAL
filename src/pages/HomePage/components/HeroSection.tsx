import LiquidGlassButton from '../../../components/LiquidGlassButton';

type HeroSectionProps = {
  onDownload: () => void;
};

export default function HeroSection({ onDownload }: HeroSectionProps) {
  return (
    <div id="hero-section">
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
      <div className="contactbuttonmargin" id="download-button">
        <LiquidGlassButton className="liquid-glass-shell" onClick={onDownload}>
          Download the app
        </LiquidGlassButton>
      </div>
    </div>
  );
}
