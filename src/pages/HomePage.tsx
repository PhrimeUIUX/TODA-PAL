import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LiquidGlassButton from '../components/LiquidGlassButton';

type Review = {
  name: string;
  role: string;
  stars: number;
  photo: string;
  text: string;
};

const LATEST_APK_URL =
  'https://storage.googleapis.com/ppctoda_website/ppctoda_apk/ppctoda_v1.0.28(48).apk';
const FAST_DOWNLOAD_URL = 'https://ppc-toda.vercel.app/download';
const IOS_APP_URL = 'https://apps.apple.com/us/app/ppc-toda/id6743928831';

const SUPPORT_CONTACTS = [
  { name: 'Miguel Gacho', phone: '0918 910 0445', tel: '09189100445' },
  { name: 'Mike Tindog', phone: '0909 726 1642', tel: '09097261642' },
  { name: 'Mike Tindog', phone: '0994 734 5087', tel: '09947345087' },
  { name: 'Jesus Bisco', phone: '0970 809 2344', tel: '09708092344' },
  { name: 'Rodel Valdez', phone: '0991 272 6375', tel: '09912726375' },
  { name: 'Jing Bacosa', phone: '0910 076 4811', tel: '09100764811' },
  { name: 'Nercielito "Nene"', phone: '0992 027 2940', tel: '09920272940' },
  { name: 'Darwin Donaire', phone: '0993 059 8005', tel: '09930598005' }
] as const;

const REVIEWS: Review[] = [
  {
    name: 'Faith N.',
    role: 'Passenger',
    stars: 5,
    photo: 'https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/faith.jpg',
    text: 'Mabilis, maayos, at user-friendly. Highly recommended ang PPC TODA app!'
  },
  {
    name: 'PhrimeUIUX',
    role: 'Developer',
    stars: 5,
    photo: 'https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/phrime.jpg',
    text: 'Astig ah, Basta astig dito guayz try niyo! Supafast, supamura. Tara na sa PPC TODA!'
  },
  {
    name: 'Rovic S.',
    role: 'Passenger',
    stars: 4,
    photo: 'https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/rovic.jpg',
    text: 'Ang bilis ng serbisyo! Hindi na kailangan maghintay ng matagal, salamat PPC TODA!'
  },
  {
    name: 'Jhouize D.',
    role: 'Passenger',
    stars: 5,
    photo: 'https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/jhouize.jpg',
    text: 'Buti na lang may PPC TODA app. Laking ginhawa sa araw-araw na biyahe!'
  },
  {
    name: 'Fherlyn N.',
    role: 'Passenger',
    stars: 5,
    photo: 'https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/ferlhyn.jpg',
    text: 'Sobrang convenient gamitin ang PPC TODA app. Isang click lang, may tricycle ka na!'
  },
  {
    name: 'Shayla F.',
    role: 'Passenger',
    stars: 5,
    photo: 'https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/shayla.jpg',
    text: 'Very accommodating, very easy to use - mura, mabilis, at walang kuskus balukos.'
  },
  {
    name: 'Max & Bunny',
    role: 'Partner',
    stars: 5,
    photo: 'https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/maxbunny.jpg',
    text: 'Araw-araw po namin ginagamit ang PPC TODA para sa Max & Bunny Restaurant.'
  }
];

function isIOS(): boolean {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

export default function HomePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const reviewsTrackRef = useRef<HTMLDivElement | null>(null);

  const loopReviews = useMemo(() => [...REVIEWS, ...REVIEWS], []);

  useEffect(() => {
    if (!isSupportOpen) {
      return;
    }

    window.scrollTo({ top: 400, left: 0, behavior: 'smooth' });
  }, [isSupportOpen]);

  useEffect(() => {
    const track = reviewsTrackRef.current;
    if (!track) {
      return;
    }

    let raf = 0;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position += speed;
      const halfWidth = track.scrollWidth / 2;

      if (position >= halfWidth) {
        position = 0;
      }

      track.style.transform = `translateX(-${position}px)`;
      raf = requestAnimationFrame(animate);
    };

    const reset = () => {
      position = 0;
    };

    raf = requestAnimationFrame(animate);
    window.addEventListener('resize', reset);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', reset);
    };
  }, []);

  const openDownloadFlow = () => {
    if (isIOS()) {
      window.location.href = IOS_APP_URL;
      return;
    }

    setIsDownloadOpen(true);
  };

  const handleDownloadChoice = (choice: 'apk' | 'fast') => {
    if (choice === 'apk') {
      const link = document.createElement('a');
      link.href = LATEST_APK_URL;
      link.download = '';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    if (choice === 'fast') {
      window.location.href = FAST_DOWNLOAD_URL;
    }

    setIsDownloadOpen(false);
  };

  return (
    <>
      <div
        className="contact-customer-service"
        aria-label="Customer Support"
        onClick={() => setIsSupportOpen(true)}
      >
        <i
          className="bi bi-question-circle-fill"
          aria-hidden="true"
          style={{ fontSize: '26px', color: '#ffffff', display: 'block', lineHeight: 1 }}
        ></i>
      </div>

      <div
        id="supportOverlay"
        className={`support-overlay ${isSupportOpen ? '' : 'hidden'}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsSupportOpen(false);
          }
        }}
      >
        <div className="support-modal">
          <div className="support-header">
            <h2>Customer Support</h2>
            <p>Select an admin to call</p>
            <button className="support-close" onClick={() => setIsSupportOpen(false)}>
              &times;
            </button>
          </div>

          <a href="tel:09686410532" id="jonathanorbiso" className="support-card primary">
            <div className="badge">Recommended</div>
            <h3>Jonathan Orbiso</h3>
            <span className="number">0968 641 0532</span>
            <small>Primary Support Admin</small>
          </a>

          <div className="support-list">
            {SUPPORT_CONTACTS.map((contact) => (
              <a key={`${contact.tel}-${contact.name}`} href={`tel:${contact.tel}`} className="support-card">
                <h4>{contact.name}</h4>
                <span>{contact.phone}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="overlay"
        id="popupOverlay"
        role="dialog"
        aria-modal="true"
        style={{ display: isDownloadOpen ? 'flex' : 'none' }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsDownloadOpen(false);
          }
        }}
      >
        <div className="popup">
          <div className="popup-icon">
            <i
              className="bi bi-question-circle-fill"
              aria-hidden="true"
              style={{ fontSize: '34px', color: '#ffffff', display: 'block', lineHeight: 1 }}
            ></i>
          </div>

          <h2>Pumili ng download option</h2>
          <p>Para sa mas mabilis na pag install.</p>

          <div id="answerButtonContainer">
            <button
              className="yes"
              aria-label="Download APK"
              onClick={() => handleDownloadChoice('apk')}
            >
              <img src="/assets/android_2_fill.png" alt="" width="18" height="18" />
              APK
            </button>

            <button
              className="no"
              aria-label="Fast download"
              onClick={() => handleDownloadChoice('fast')}
            >
              <img src="/assets/flash_fill.png" alt="" width="18" height="18" />
              Fast
            </button>
          </div>
        </div>
      </div>

      <nav className="glass-nav">
        <div className="nav-inner">
          <button
            className={`nav-toggle ${isNavOpen ? 'open' : ''}`}
            id="navToggle"
            aria-label="Open menu"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <button id="download-button-trigger" className="nav-cta" onClick={openDownloadFlow}>
            Get started
          </button>
        </div>
      </nav>

      <div className={`nav-drawer ${isNavOpen ? 'open' : ''}`} id="navDrawer">
        <Link to="/about" onClick={() => setIsNavOpen(false)}>
          About
        </Link>
      </div>

      <div id="hero-section" ref={heroRef}>
        <div className="welcome-badge">
          <span className="text">Welcome to PPC TODA</span>
        </div>
        <div id="headline">
          <span className="gradient-text">Tricycle</span> Booking at Your Fingertips
        </div>
        <div id="subtext">
          PPC TODA is the official app of Puerto Princesa City&apos;s Tricycle Operators and Drivers Association Federation,
          designed to improve services and make transportation easier and more reliable for
          passengers.
        </div>
        <div className="contactbuttonmargin" id="download-button">
          <LiquidGlassButton className="liquid-glass-shell" onClick={openDownloadFlow}>
            Download the app
          </LiquidGlassButton>
        </div>
      </div>

      <section id="section-2">
        <header className="reviews-header">
          <p className="reviews-eyebrow">Trusted by locals</p>
          <h2 className="reviews-title">What people say about PPC TODA</h2>
          <p className="reviews-subtitle">
            Real experiences from passengers and partners in Puerto Princesa
          </p>
        </header>

        <section id="reviews-section">
          <div className="reviews-viewport">
            <div className="reviews-track" id="reviewsTrack" ref={reviewsTrackRef}>
              {loopReviews.map((review, index) => (
                <div className="review-card" key={`${review.name}-${index}`}>
                  <div className="review-content">
                    <div className="review-header">
                      <img className="review-photo" src={review.photo} alt={review.name} />
                      <div>
                        <div className="review-name">{review.name}</div>
                        <div className="stars">{'⭐'.repeat(review.stars)}</div>
                        <div className="review-role">{review.role}</div>
                      </div>
                    </div>
                    <div className="review-text">&ldquo;{review.text}&rdquo;</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="reviews-footer">
          <div className="reviews-trust">
            <span className="trust-stars">⭐ 4.9</span>
            <span className="trust-text">Average rating from 10,000+ rides</span>
          </div>

          <a className="reviews-cta" onClick={openDownloadFlow}>
            Book your first ride →
          </a>
        </div>
      </section>

      <footer className="homepage-footer">
        <a
          href="https://facebook.com/Phrimeuniverse"
          target="_blank"
          rel="noopener noreferrer"
          className="homepage-footer-link"
        >
          Web Designed & Developed by Phrime UI/UX
        </a>
      </footer>
    </>
  );
}
