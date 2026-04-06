import type { ReactNode } from 'react';
import './ErrorScreen.css';

type ErrorScreenProps = {
  code?: string;
  title: string;
  description: string;
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryAction?: ReactNode;
  variant?: 'panel' | 'plain';
};

export default function ErrorScreen({
  code,
  title,
  description,
  primaryActionLabel,
  primaryActionHref,
  secondaryAction,
  variant = 'panel'
}: ErrorScreenProps) {
  return (
    <main className="error-screen">
      <div className="error-screen__backdrop" aria-hidden="true" />
      <section
        className={
          variant === 'plain' ? 'error-screen__panel error-screen__panel--plain' : 'error-screen__panel'
        }
      >
        {code ? <p className="error-screen__code">{code}</p> : null}
        <h1 className="error-screen__title">{title}</h1>
        <p className="error-screen__description">{description}</p>
        <div className="error-screen__actions">
          <a href={primaryActionHref} className="error-screen__primary">
            {primaryActionLabel}
          </a>
          {secondaryAction}
        </div>
      </section>
    </main>
  );
}
