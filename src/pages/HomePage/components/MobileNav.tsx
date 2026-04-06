import { Link } from 'react-router-dom';

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
  onDownload: () => void;
};

export default function MobileNav({ isOpen, onClose, onToggle, onDownload }: MobileNavProps) {
  return (
    <>
      <nav className="glass-nav">
        <div className="nav-inner">
          <button
            type="button"
            className={`nav-toggle ${isOpen ? 'open' : ''}`}
            id="navToggle"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="navDrawer"
            onClick={onToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <button type="button" id="download-button-trigger" className="nav-cta" onClick={onDownload}>
            Get started
          </button>
        </div>
      </nav>

      <div className={`nav-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose} aria-hidden={!isOpen} />
      <div className={`nav-drawer ${isOpen ? 'open' : ''}`} id="navDrawer">
        <div className="nav-drawer-header">
          <span className="nav-drawer-title">Menu</span>
          <button
            type="button"
            className="glass-close-button glass-close-button-danger"
            aria-label="Close menu"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <Link to="/about" onClick={onClose}>
          About
        </Link>
        <Link to="/why-ppc-toda" onClick={onClose}>
          Why PPC TODA
        </Link>
      </div>
    </>
  );
}
