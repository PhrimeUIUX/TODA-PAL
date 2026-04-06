import { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import DownloadModal from './components/DownloadModal';
import FooterSection from './components/FooterSection';
import HeroSection from './components/HeroSection';
import MobileNav from './components/MobileNav';
import ReviewsSection from './components/ReviewsSection';
import SupportButton from './components/SupportButton';
import SupportModal from './components/SupportModal';
import { FAST_DOWNLOAD_URL, IOS_APP_URL, LATEST_APK_URL } from './data';

function isIOS(): boolean {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

export default function HomePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const homeScrollRef = useRef<HTMLDivElement | null>(null);
  const reviewsCarouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isNavOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsNavOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    const previousScrollOverflow = homeScrollRef.current?.style.overflowY ?? '';
    document.body.style.overflow = 'hidden';
    if (homeScrollRef.current) {
      homeScrollRef.current.style.overflowY = 'hidden';
    }
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      if (homeScrollRef.current) {
        homeScrollRef.current.style.overflowY = previousScrollOverflow;
      }
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isNavOpen]);

  useEffect(() => {
    if (!isSupportOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousScrollOverflow = homeScrollRef.current?.style.overflowY ?? '';
    document.body.style.overflow = 'hidden';
    if (homeScrollRef.current) {
      homeScrollRef.current.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      if (homeScrollRef.current) {
        homeScrollRef.current.style.overflowY = previousScrollOverflow;
      }
    };
  }, [isSupportOpen]);

  useEffect(() => {
    if (!isDownloadOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousScrollOverflow = homeScrollRef.current?.style.overflowY ?? '';
    document.body.style.overflow = 'hidden';
    if (homeScrollRef.current) {
      homeScrollRef.current.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      if (homeScrollRef.current) {
        homeScrollRef.current.style.overflowY = previousScrollOverflow;
      }
    };
  }, [isDownloadOpen]);

  useEffect(() => {
    const track = reviewsCarouselRef.current;
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
      <SupportButton onClick={() => setIsSupportOpen(true)} />
      <SupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
        onChoose={handleDownloadChoice}
      />
      <MobileNav
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        onToggle={() => setIsNavOpen((prev) => !prev)}
        onDownload={openDownloadFlow}
      />
      <main ref={homeScrollRef} className="homepage-scroll">
        <HeroSection onDownload={openDownloadFlow} />
        <ReviewsSection reviewsCarouselRef={reviewsCarouselRef} onDownload={openDownloadFlow} />
        <FooterSection />
      </main>
    </>
  );
}
