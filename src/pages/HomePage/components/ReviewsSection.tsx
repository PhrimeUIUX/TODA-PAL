import type { RefObject } from 'react';
import LiquidGlassButton from '../../../components/LiquidGlassButton';
import { LOOPED_REVIEWS } from '../data';

type ReviewsSectionProps = {
  reviewsCarouselRef: RefObject<HTMLDivElement | null>;
  onDownload: () => void;
};

export default function ReviewsSection({ reviewsCarouselRef, onDownload }: ReviewsSectionProps) {
  const getReviewInitials = (name: string) =>
    name
      .replace(/&/g, ' ')
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? '')
      .join('');

  return (
    <section className="reviews-section homepage-panel">
      <header className="reviews-header">
        <div className="marketing-badge reviews-badge">
          <span className="marketing-badge-text">Trusted by locals</span>
        </div>
        <h2 className="marketing-title">Why People Love PPC TODA</h2>
        <p className="marketing-description">
          Real experiences from passengers and partners in Puerto Princesa
        </p>
      </header>

      <section className="reviews-carousel">
        <div className="reviews-viewport">
          <div className="reviews-track" ref={reviewsCarouselRef}>
            {LOOPED_REVIEWS.map((review, index) => (
              <div className="review-card" key={`${review.name}-${index}`}>
                <div className="review-content">
                  <div className="review-header">
                    <div className="review-avatar" aria-hidden="true">
                      {getReviewInitials(review.name)}
                    </div>
                    <div>
                      <div className="review-name">{review.name}</div>
                      <div className="review-stars">{'⭐'.repeat(review.stars)}</div>
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
          <span className="marketing-description trust-text">Average rating from 10,000+ rides</span>
        </div>

        <LiquidGlassButton className="liquid-glass-shell" onClick={onDownload}>
          Book your first ride →
        </LiquidGlassButton>
      </div>
    </section>
  );
}
