import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ComingSoonModal.css';

/**
 * Shared premium "Coming Soon" notification used by Courses and Offerings.
 * It intentionally does not navigate anywhere — it only informs the visitor.
 */
export default function ComingSoonModal({
  open,
  onClose,
  itemName,
  title = 'Details Coming Soon',
  message = 'We are working on adding more information about this offering. Please check back soon for updates.',
  eyebrow = 'Sri Mahavidyesvari',
}) {
  useEffect(() => {
    if (!open) return undefined;

    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="cs-modal__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
          onClick={onClose}
        >
          <motion.div
            className="cs-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cs-modal-title"
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(event) => event.stopPropagation()}
          >
            <span className="cs-modal__glow" aria-hidden="true" />

            <button
              type="button"
              className="cs-modal__close"
              onClick={onClose}
              aria-label="Close notification"
            >
              ✕
            </button>

            <div className="cs-modal__ornament" aria-hidden="true">
              <span className="cs-modal__ornament-ring" />
              <span className="cs-modal__ornament-lotus">🪷</span>
            </div>

            <p className="cs-modal__eyebrow font-cinzel">{eyebrow}</p>

            {itemName && (
              <p className="cs-modal__item font-cinzel">{itemName}</p>
            )}

            <h2 id="cs-modal-title" className="cs-modal__title font-cinzel">
              {title}
            </h2>

            <div className="cs-modal__rule" aria-hidden="true">
              <span className="cs-modal__rule-line" />
              <span className="cs-modal__rule-dot">✦</span>
              <span className="cs-modal__rule-line" />
            </div>

            <p className="cs-modal__message font-serif">{message}</p>

            <motion.button
              type="button"
              className="cs-modal__button font-cinzel"
              onClick={onClose}
              whileHover={{ y: -2, boxShadow: '0 12px 32px rgba(212, 175, 55, 0.30)' }}
              whileTap={{ scale: 0.97 }}
            >
              Got It
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
