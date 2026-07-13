import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './RegisterModal.css';

const WA_MSG = encodeURIComponent(
  '🙏 Namaste.\n\nI would like to register my interest for the Sri Varahi Devi Puja on July 15, 2026.\n\nKindly share the event details and registration process.\n\nThank you.'
);
const WA_URL = `https://wa.me/919390886029?text=${WA_MSG}`;

export default function RegisterModal({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!open) { setLoading(false); return; }
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    modalRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  const handleContinue = () => {
    setLoading(true);
    setTimeout(() => { window.open(WA_URL, '_blank'); onClose(); }, 1100);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="reg-modal__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="reg-modal"
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Register Interest"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="reg-modal__close" onClick={onClose} aria-label="Close">✕</button>

            {!loading ? (
              <>
                <span className="reg-modal__emoji">🌸</span>
                <h2 className="reg-modal__heading font-cinzel">Register Your Interest</h2>

                <p className="reg-modal__text">
                  Thank you for your interest in participating in the sacred Sri Varahi Devi Puja.
                </p>
                <p className="reg-modal__text">
                  Our team will connect with you through WhatsApp to provide event details, venue information, and further guidance.
                </p>

                <div className="reg-modal__info">
                  <div className="reg-modal__info-row">
                    <span>📅</span><span>July 15, 2026</span>
                  </div>
                  <div className="reg-modal__info-row">
                    <span>📍</span><span>Sri MahaVidyesvari Tantra Peetham</span>
                  </div>
                </div>

                <div className="reg-modal__btns">
                  <motion.button
                    className="reg-modal__btn reg-modal__btn--primary font-cinzel"
                    onClick={handleContinue}
                    whileHover={{ y: -3, boxShadow: '0 12px 36px rgba(74,15,34,0.35)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    💬 Continue to WhatsApp
                  </motion.button>
                  <motion.button
                    className="reg-modal__btn reg-modal__btn--secondary font-cinzel"
                    onClick={onClose}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Cancel
                  </motion.button>
                </div>
              </>
            ) : (
              <div className="reg-modal__loading">
                <div className="reg-modal__spinner" />
                <p className="reg-modal__loading-text">✓ Preparing WhatsApp...</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
