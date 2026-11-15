import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiCheckCircle, FiMessageCircle, FiX } from 'react-icons/fi';
import './BookGuruModal.css';

const WA_NUMBER = '919390886029';

function localToday() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

const EMPTY_FORM = {
  name: '',
  phone: '',
  email: '',
  date: '',
  notes: '',
};

/**
 * Book Guru / lineage enquiry form.
 *
 * The website has no server-side booking API; its live booking channel is
 * WhatsApp. This modal validates the visitor's details, identifies the chosen
 * ritual automatically and prepares a WhatsApp message. It deliberately does
 * NOT claim that a booking is confirmed — confirmation depends on the Peetham.
 *
 * mode = 'booking' | 'enquiry'
 */
export default function BookGuruModal({
  open,
  onClose,
  ritualName = '',
  category = '',
  mode = 'booking',
}) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [preparedLink, setPreparedLink] = useState('');
  const firstFieldRef = useRef(null);
  const panelRef = useRef(null);

  const isEnquiry = mode === 'enquiry';
  const today = localToday();

  /* Reset whenever the modal is opened for a (possibly different) ritual. */
  useEffect(() => {
    if (!open) return;
    setForm(EMPTY_FORM);
    setErrors({});
    setPreparedLink('');
  }, [open, ritualName, mode]);

  /* ESC to close + body scroll lock + initial focus. */
  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', onKeyDown);

    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 60);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open, onClose]);

  if (!open) return null;

  const update = (field) => (event) => {
    const { value } = event.target;
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) {
      next.name = 'Please enter your full name.';
    }
    const digits = form.phone.replace(/\D/g, '');
    if (!form.phone.trim()) {
      next.phone = 'Please enter a contact number.';
    } else if (digits.length < 7 || digits.length > 15) {
      next.phone = 'Enter a valid phone number with 7–15 digits.';
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Enter a valid email address, or leave this blank.';
    }
    if (!isEnquiry && !form.date) {
      next.date = 'Please choose a preferred date.';
    }
    if (form.date && form.date < today) {
      next.date = 'Please choose today or a future date.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildMessage = () => {
    const lines = [
      'Namaste 🙏',
      '',
      'Jai Guru. I would like to ' +
        (isEnquiry ? 'enquire about availability for' : 'request a booking for') +
        ' the following offering:',
      '',
      `Offering: ${ritualName || 'Sacred fire ritual'}`,
    ];

    if (category) lines.push(`Category: ${category}`);
    lines.push('', `Name: ${form.name.trim()}`, `Phone: ${form.phone.trim()}`);

    if (form.email.trim()) lines.push(`Email: ${form.email.trim()}`);
    if (form.date) lines.push(`Preferred date: ${form.date}`);
    if (form.notes.trim()) lines.push(`Notes: ${form.notes.trim()}`);

    lines.push(
      '',
      isEnquiry
        ? 'Please let me know whether this rite can be arranged and what information you need from me.'
        : 'Please confirm availability, the appropriate form of the rite and further details.',
      '',
      'Thank you.'
    );

    return lines.join('\n');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    const link = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    setPreparedLink(link);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleBackdrop = (event) => {
    if (event.target === event.currentTarget) onClose?.();
  };

  return createPortal(
    <div className="bgm-backdrop" onMouseDown={handleBackdrop}>
      <div
        className={`bgm-panel${preparedLink ? ' bgm-panel--done' : ''}`}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bgm-title"
      >
        <button type="button" className="bgm-close" onClick={onClose} aria-label="Close">
          <FiX size={18} />
        </button>

        {!preparedLink ? (
          <>
            <header className="bgm-head">
              <span className="bgm-head__eyebrow">
                {isEnquiry ? 'Lineage enquiry' : 'Book with the Guru'}
              </span>
              <h2 className="bgm-head__title" id="bgm-title">
                {isEnquiry ? 'Enquire About Availability' : 'Book Guru'}
              </h2>
              <p className="bgm-head__ritual">{ritualName || 'Sacred fire ritual'}</p>
              {category ? <p className="bgm-head__category">{category}</p> : null}
            </header>

            <form className="bgm-form" onSubmit={handleSubmit} noValidate>
              <p className="bgm-form__intro">
                Share your details below. The form prepares a message to the Peetham on
                WhatsApp; it does not confirm a booking by itself.
              </p>

              <div className="bgm-field">
                <label htmlFor="bgm-name">Full name <span aria-hidden="true">*</span></label>
                <input
                  id="bgm-name"
                  ref={firstFieldRef}
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={update('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'bgm-name-error' : undefined}
                  placeholder="Your full name"
                />
                {errors.name ? <p className="bgm-error" id="bgm-name-error">{errors.name}</p> : null}
              </div>

              <div className="bgm-field-row">
                <div className="bgm-field">
                  <label htmlFor="bgm-phone">Phone / WhatsApp <span aria-hidden="true">*</span></label>
                  <input
                    id="bgm-phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'bgm-phone-error' : undefined}
                    placeholder="+91 00000 00000"
                  />
                  {errors.phone ? <p className="bgm-error" id="bgm-phone-error">{errors.phone}</p> : null}
                </div>

                <div className="bgm-field">
                  <label htmlFor="bgm-email">Email <span className="bgm-optional">(optional)</span></label>
                  <input
                    id="bgm-email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={update('email')}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'bgm-email-error' : undefined}
                    placeholder="you@example.com"
                  />
                  {errors.email ? <p className="bgm-error" id="bgm-email-error">{errors.email}</p> : null}
                </div>
              </div>

              <div className="bgm-field">
                <label htmlFor="bgm-date">
                  Preferred date {isEnquiry ? <span className="bgm-optional">(optional)</span> : <span aria-hidden="true">*</span>}
                </label>
                <input
                  id="bgm-date"
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={update('date')}
                  aria-invalid={Boolean(errors.date)}
                  aria-describedby={errors.date ? 'bgm-date-error' : undefined}
                />
                {errors.date ? <p className="bgm-error" id="bgm-date-error">{errors.date}</p> : null}
              </div>

              <div className="bgm-field">
                <label htmlFor="bgm-notes">Notes <span className="bgm-optional">(optional)</span></label>
                <textarea
                  id="bgm-notes"
                  rows={3}
                  value={form.notes}
                  onChange={update('notes')}
                  placeholder="Any details the Peetham should know — location, occasion, family tradition…"
                />
              </div>

              <p className="bgm-privacy">
                Your details are used only to prepare this WhatsApp message. Nothing is
                stored on this website.
              </p>

              <div className="bgm-actions">
                <button type="submit" className="bgm-btn bgm-btn--primary">
                  <FiMessageCircle size={16} />
                  {isEnquiry ? 'Prepare Enquiry' : 'Prepare Booking'}
                </button>
                <button type="button" className="bgm-btn bgm-btn--ghost" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="bgm-done">
            <span className="bgm-done__icon" aria-hidden="true">
              <FiCheckCircle size={34} />
            </span>
            <h2 className="bgm-head__title" id="bgm-title">
              {isEnquiry ? 'Enquiry Prepared' : 'Booking Request Prepared'}
            </h2>
            <p className="bgm-done__text">
              WhatsApp has been opened with your details for{' '}
              <strong>{ritualName || 'the selected ritual'}</strong>.
            </p>
            <p className="bgm-done__notice">
              Please press <strong>Send</strong> in WhatsApp to reach the Peetham.{' '}
              {isEnquiry
                ? 'This is not a confirmed arrangement until the Peetham replies.'
                : 'Your booking is not confirmed until the Peetham replies and confirms availability.'}
            </p>
            <div className="bgm-actions">
              <a
                className="bgm-btn bgm-btn--primary"
                href={preparedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMessageCircle size={16} />
                Open WhatsApp again
              </a>
              <button type="button" className="bgm-btn bgm-btn--ghost" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
