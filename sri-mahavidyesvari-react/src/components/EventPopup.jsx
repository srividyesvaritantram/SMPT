import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './EventPopup.css';

// ─────────────────────────────────────────────────────────────────────────────
// EVENT CONFIG — update only these fields for future events
// ─────────────────────────────────────────────────────────────────────────────
const EVENT = {
  title:       'Navaratri Sadhana & Aradhana',
  description: '📢 Upcoming Event: Navaratri Sadhana & Aradhana – July 15 – July 23, 2026. Join us for nine sacred nights of divine worship.',
  location:    'Sri MahaVidyesvari Tantra Peetham',
  date:        '15 – 23 July 2026',
  time:        '8:00 AM',
  // ISO-style expiry — card auto-hides after this moment (local time)
  expiresAt:   new Date('2026-07-23T23:59:00'),
  link:        '/events',
};
// ─────────────────────────────────────────────────────────────────────────────

export default function EventPopup() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const expired = new Date() >= EVENT.expiresAt;
    if (!expired) setVisible(true);
  }, []);

  const close = () => {
    setVisible(false);
  };

  const handleKnowMore = () => {
    close();
    navigate('/events');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="en-card"
          role="complementary"
          aria-label="Upcoming Event Notification"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20, scale: 0.96 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{
            scale: 1.02,
            boxShadow:
              '0 32px 80px rgba(13,2,8,0.55), 0 0 0 1.5px rgba(212,175,55,0.55), 0 0 48px rgba(184,134,11,0.22)',
          }}
        >
          {/* Top gold accent line */}
          <div className="en-card__accent" />

          {/* Close button */}
          <motion.button
            className="en-card__close"
            onClick={close}
            aria-label="Close notification"
            whileHover={{ scale: 1.12, background: 'rgba(212,175,55,0.22)' }}
            whileTap={{ scale: 0.93 }}
            transition={{ duration: 0.18 }}
          >
            ✕
          </motion.button>

          {/* Badge */}
          <span className="en-card__badge">📅 July 15 – July 23, 2026</span>

          {/* Divider */}
          <div className="en-card__rule">
            <span className="en-card__rule-line" />
            <span className="en-card__rule-dot" />
            <span className="en-card__rule-line" />
          </div>

          {/* Title */}
          <h3 className="en-card__title font-cinzel">{EVENT.title}</h3>

          {/* Description */}
          <p className="en-card__desc">{EVENT.description}</p>

          {/* Info rows */}
          <div className="en-card__info">
            <div className="en-card__info-row">
              <span className="en-card__info-icon">📍</span>
              <span className="en-card__info-text">{EVENT.location}</span>
            </div>
            <div className="en-card__info-row">
              <span className="en-card__info-icon">📅</span>
              <span className="en-card__info-text">Event Date: {EVENT.date}</span>
            </div>
            <div className="en-card__info-row">
              <span className="en-card__info-icon">🕘</span>
              <span className="en-card__info-text">Time: {EVENT.time}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="en-card__btns">
            <motion.button
              className="en-card__btn en-card__btn--primary font-cinzel"
              onClick={handleKnowMore}
              whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(184,134,11,0.48)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.22 }}
            >
              Know More
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
