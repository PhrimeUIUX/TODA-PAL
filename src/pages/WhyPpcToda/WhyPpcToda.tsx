import { memo, type SVGProps, useEffect } from 'react';
import './WhyPpcToda.css';

type IconComponent = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

type ComparisonColumn = {
  title: string;
  tone: 'positive' | 'negative';
  items: readonly string[];
};

type Metric = {
  label: string;
  value: string;
  Icon: IconComponent;
};

type Cta = {
  title: string;
  description: string;
  href: string;
  label: string;
  variant: 'solid' | 'outline';
};

const CheckIcon: IconComponent = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="m5 13 4 4L19 7" />
  </svg>
);

const CrossIcon: IconComponent = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

const DriversIcon: IconComponent = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="8" cy="8" r="3" />
    <circle cx="16" cy="8" r="3" />
    <path d="M3.5 20v-1.5A3.5 3.5 0 0 1 7 15h2a3.5 3.5 0 0 1 3.5 3.5V20" />
    <path d="M11.5 20v-1.5A3.5 3.5 0 0 1 15 15h2a3.5 3.5 0 0 1 3.5 3.5V20" />
  </svg>
);

const UsersIcon: IconComponent = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20v-1.6A4.4 4.4 0 0 1 9.4 14h5.2a4.4 4.4 0 0 1 4.4 4.4V20" />
  </svg>
);

const BookingsIcon: IconComponent = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2.5" />
    <path d="M8 2.8V6M16 2.8V6M4 9.5h16" />
    <path d="m9 14 2 2 4-4" />
  </svg>
);

const FacebookIcon: IconComponent = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-7.3H16l.5-3h-3V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.2v2.3H8v3h2.1V21h3.4Z" />
  </svg>
);

const COMPARISON_COLUMNS: readonly ComparisonColumn[] = [
  {
    title: 'When You Use It',
    tone: 'positive',
    items: [
      'Fares are based on tariff',
      'Fares are fixed and accurate',
      'No need to worry about change',
      'Drivers accept cashless payments',
      'Drivers are franchised and compliant',
      'Drivers are available anytime, anywhere'
    ]
  },
  {
    title: "When You Don't Use It",
    tone: 'negative',
    items: [
      "You're prone to overpricing",
      "You're prone to obscure fares",
      'Drivers have insufficient change',
      'Drivers only accept cash payment',
      "You're prone to unauthorized drivers",
      "You're always guessing the availability"
    ]
  }
] as const;

const METRICS: readonly Metric[] = [
  { label: 'Drivers', value: '150+', Icon: DriversIcon },
  { label: 'Users', value: '3K+', Icon: UsersIcon },
  { label: 'Bookings', value: '10K+', Icon: BookingsIcon }
] as const;

const CTAS: readonly Cta[] = [
  {
    title: 'Visiting Puerto Princesa City?',
    description: 'Book rides instantly, pay digitally, and enjoy fair fares.',
    href: 'https://ppctoda.com',
    label: 'Get The App',
    variant: 'solid'
  },
  {
    title: 'Experiencing Similar Challenges?',
    description: "Bring PPC TODA's tricycle transport solution to your area.",
    href: 'mailto:hello@speedovate.com?subject=Digitalize%20My%20Area',
    label: 'Digitalize My Area',
    variant: 'outline'
  },
  {
    title: 'Want To Connect With Our Startup?',
    description: 'Partner, invest, or support our tricycle transport solution.',
    href: 'mailto:hello@speedovate.com?subject=Collaborate%20With%20Us',
    label: 'Collaborate With Us',
    variant: 'outline'
  }
] as const;

const WhyPpcToda = memo(function WhyPpcToda() {
  useEffect(() => {
    document.body.classList.add('why-page');
    return () => document.body.classList.remove('why-page');
  }, []);

  return (
    <main className="why-root">
      <section className="why-container why-hero">
        <img
          src="/assets/favicon/web-app-manifest-512x512.png"
          alt="PPC TODA"
          className="why-hero-logo"
        />

        <h1>It Only Takes One App To Upgrade Your Tricycle Transport</h1>
        <p className="why-lead">
          For passengers who want fairness, for drivers who want opportunities, and for cities
          ready to modernize.
        </p>

        <div className="why-video-wrap">
          <iframe
            className="why-video"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1607766550537962%2F&show_text=false&width=560&t=0"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            title="PPC TODA Reel"
          />
        </div>
      </section>

      <section className="why-container why-section">
        <h2>The Difference Of Using And Not Using Our App</h2>
        <div className="why-comparison-grid">
          {COMPARISON_COLUMNS.map((column) => {
            const positive = column.tone === 'positive';
            const ToneIcon = positive ? CheckIcon : CrossIcon;

            return (
              <article key={column.title} className={`why-card ${positive ? 'tone-good' : 'tone-bad'}`}>
                <h3>{column.title}</h3>
                <ul>
                  {column.items.map((item) => (
                    <li key={item}>
                      <span className="why-list-icon" aria-hidden="true">
                        <ToneIcon width={13} height={13} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="why-container why-section">
        <h2>Our Traction</h2>
        <p className="why-subtext">Since launching on March 19, 2025, PPC TODA has already...</p>

        <div className="why-metrics-grid">
          {METRICS.map(({ value, label, Icon }) => (
            <article key={label} className="why-metric-card">
              <Icon width={30} height={30} aria-hidden="true" className="why-metric-icon" />
              <div className="why-metric-value">{value}</div>
              <div className="why-metric-label">{label}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="why-container why-section why-copy">
        <h2>The Transition</h2>
        <p>
          Passengers now enjoy fair, convenient rides, while tricycle drivers gain more passengers
          and income beyond their traditional operations.
        </p>
        <p>
          PPC TODA only started as a community project in Puerto Princesa City, now it is evolving
          into PPC TODA, a national-scale startup bringing scalable, tech-driven tricycle transport
          solutions to communities across the Philippines and beyond.
        </p>
        <p className="why-strong">
          Philippine Startup Week 2025 embodies this vision: Start Local, Go Global.
        </p>

        <img
          src="/assets/favicon/web-app-manifest-512x512.png"
          alt="PPC TODA"
          className="why-brand-logo"
        />
      </section>

      <section className="why-container why-section why-copy">
        <h2>The Builder</h2>
        <p>Speedovate, proudly from Palawan, is the builder behind PPC TODA.</p>
        <p>
          DICT MIMAROPA STEP UP 2024 Graduate and Winner.
          <br />
          DICT MIMAROPA Geeks on a Beach 7 Representative.
          <br />
          With proven impact and scalable innovation, PPC TODA is ready to digitalize tricycle
          transport nationwide.
        </p>

        <img
          src="/assets/about/speedovate-logo.png"
          alt="Speedovate"
          className="why-builder-logo"
        />
      </section>

      <section className="why-container why-cta-block">
        {CTAS.map((cta) => (
          <article key={cta.title} className="why-cta-item">
            <h3>{cta.title}</h3>
            <p>{cta.description}</p>
            <a href={cta.href} className={`why-btn ${cta.variant === 'solid' ? 'solid' : 'outline'}`}>
              {cta.label}
            </a>
          </article>
        ))}

        <a
          href="https://facebook.com/ppctodaofficial"
          target="_blank"
          rel="noreferrer"
          className="why-facebook"
          aria-label="PPC TODA Facebook page"
        >
          <span className="why-facebook-icon">
            <FacebookIcon width={30} height={30} aria-hidden="true" />
          </span>
          <span>Connect with us on Facebook!</span>
        </a>
      </section>
    </main>
  );
});

export default WhyPpcToda;
