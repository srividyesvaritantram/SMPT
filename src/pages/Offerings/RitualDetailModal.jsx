import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FiArrowRight, FiCalendar, FiX } from 'react-icons/fi';
import { STATUS_META } from './ritualCatalogueData.js';

/**
 * Full-detail view for a single ritual.
 *
 * Every field from the catalogue record is shown in full — introduction,
 * deity, significance, purpose, occasions, offerings, procedure and textual
 * references — so that "Know More" never reduces or hides the existing
 * information.
 */
export default function RitualDetailModal({ ritual, category, onClose, onBook }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!ritual) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', onKeyDown);

    const timer = window.setTimeout(() => closeRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(timer);
    };
  }, [ritual, onClose]);

  if (!ritual) return null;

  const status = STATUS_META[ritual.status] || STATUS_META.practised;
  const canBook = Boolean(ritual.bookable);
  const canEnquire = Boolean(ritual.enquiry);

  const handleBook = () => {
    onBook?.(ritual, canBook ? 'booking' : 'enquiry');
  };

  return createPortal(
    <div
      className="rdm-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose?.();
      }}
    >
      <div
        className="rdm-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="rdm-title"
      >
        <button
          type="button"
          className="rdm-close"
          onClick={onClose}
          aria-label="Close ritual details"
          ref={closeRef}
        >
          <FiX size={18} />
        </button>

        <header className="rdm-head">
          <span className="rdm-head__category">
            {category?.icon ? `${category.icon} ` : ''}
            {category?.label || 'Sacred fire ritual'}
          </span>
          <h2 className="rdm-head__title" id="rdm-title">{ritual.name}</h2>
          <p className="rdm-head__deity">{ritual.deity}</p>
          <span className={`rdm-status rdm-status--${status.tone}`}>{status.label}</span>
        </header>

        <div className="rdm-body">
          <section className="rdm-section">
            <h3 className="rdm-section__title">Ritual introduction</h3>
            <p className="rdm-prose">{ritual.intro}</p>
          </section>

          <section className="rdm-section">
            <h3 className="rdm-section__title">Deity &amp; significance</h3>
            <p className="rdm-prose">{ritual.significance}</p>
          </section>

          <div className="rdm-grid">
            <section className="rdm-card">
              <h3 className="rdm-card__title">Main purpose</h3>
              <p className="rdm-card__text">{ritual.purpose}</p>
            </section>

            <section className="rdm-card">
              <h3 className="rdm-card__title">Suitable occasions</h3>
              <p className="rdm-card__text">{ritual.occasions}</p>
            </section>
          </div>

          <section className="rdm-section">
            <h3 className="rdm-section__title">Traditional offerings</h3>
            <p className="rdm-prose">{ritual.offerings}</p>
          </section>

          <section className="rdm-section">
            <h3 className="rdm-section__title">Procedure</h3>
            <ol className="rdm-procedure">
              {ritual.procedure.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="rdm-section">
            <h3 className="rdm-section__title">Traditional references</h3>
            <ul className="rdm-references">
              {ritual.references.map((reference) => (
                <li key={reference}>{reference}</li>
              ))}
            </ul>
          </section>

          {ritual.note ? (
            <aside className="rdm-note">
              <span className="rdm-note__label">Please note</span>
              <p>{ritual.note}</p>
            </aside>
          ) : null}

          <aside className="rdm-disclaimer">
            <span aria-hidden="true">✦</span>
            <p>
              Homa, Havan and Yajña are related terms whose scale, duration, priest
              count and procedure vary by lineage and region. Traditional benefits
              are matters of faith and are not guaranteed outcomes. This information
              is for guidance and does not replace personal advice from the Peetham.
            </p>
          </aside>
        </div>

        <footer className="rdm-footer">
          {canBook ? (
            <button type="button" className="rdm-btn rdm-btn--primary" onClick={handleBook}>
              Book Guru
              <FiArrowRight size={15} />
            </button>
          ) : canEnquire ? (
            <button type="button" className="rdm-btn rdm-btn--primary" onClick={handleBook}>
              Enquire Availability
              <FiArrowRight size={15} />
            </button>
          ) : (
            <span className="rdm-unavailable">
              <FiCalendar size={14} aria-hidden="true" />
              Not currently bookable
            </span>
          )}

          <button type="button" className="rdm-btn rdm-btn--ghost" onClick={onClose}>
            Close
          </button>
        </footer>
      </div>
    </div>,
    document.body
  );
}
