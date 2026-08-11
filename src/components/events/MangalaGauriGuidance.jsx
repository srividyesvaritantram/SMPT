import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../common/ScrollReveal.jsx';
import GoldenButton from '../common/GoldenButton.jsx';
import { SMG_DATES } from '../../pages/shravanaMangalaGauriData.js';
import './MangalaGauriGuidance.css';

const WA_URL = 'https://wa.me/919390886029';

/* ── Subtle gold line-art ornaments (lotus / diya) ── */
function LotusOrnament({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 34c0-12-6-20-14-24 2 12 8 18 14 24Z" />
        <path d="M20 34c0-12 6-20 14-24-2 12-8 18-14 24Z" />
        <path d="M20 30c0-10-5-16-12-20 3 10 8 15 12 20Z" />
        <path d="M20 30c0-10 5-16 12-20-3 10-8 15-12 20Z" />
        <path d="M20 30V16" />
        <path d="M20 16c-2-3-5-5-8-6" />
        <path d="M20 16c2-3 5-5 8-6" />
      </g>
    </svg>
  );
}

function DiyaOrnament({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 5c2.5 3 3.5 5 3.5 7a3.5 3.5 0 0 1-7 0c0-2 1-4 3.5-7Z" />
        <path d="M6 23c0-4 6-6.5 14-6.5s14 2.5 14 6.5-6 6.5-14 6.5-14-2.5-14-6.5Z" />
        <path d="M11 28.5c0 3.5 4 5.5 9 5.5s9-2 9-5.5" />
        <path d="M17 36h6" />
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   CARD CONTENT — devotional guidance for the Mangala Gaurī Vratam
───────────────────────────────────────────────────────────────────────── */
const CARDS = [
  {
    id: 'significance',
    icon: '🌺',
    eyebrow: 'Spiritual Significance',
    title: 'Mangala Gaurī Vratam',
    text: 'Devotees observe Mangala Gaurī Vratam with devotion and sincere prayer, seeking divine grace, auspiciousness, family harmony, and spiritual well-being.',
    link: 'Learn from Guru',
    ornament: 'lotus',
    detail: [
      'Goddess Gaurī is an auspicious and compassionate form of Goddess Pārvatī. During the sacred month of Śrāvaṇa, her worship on Tuesdays — known as Śrāvaṇa Maṅgalavāra — is traditionally regarded as a time of great spiritual significance.',
      'The Mangala Gaurī Vratam is therefore observed with devotion and sincere prayer, seeking divine grace, auspiciousness, family harmony and spiritual well-being. Devotees approach the vratam with a reverent heart, offering their prayers to Gaurī for a life filled with saubhāgya, peace and inner contentment.',
    ],
    guruGuidance:
      'The Guru helps devotees understand the deeper meaning of the vratam — its saṅkalpa, its attitude of inner surrender, and the devotional heart with which it is traditionally performed. Understanding precedes observance, and guidance keeps the practice sincere.',
    tradition: [
      'Śrāvaṇa falls within the sacred Cāturmāsya period, traditionally encouraging increased devotion, vrata, prayer and dāna.',
      'Tuesday (Maṅgalavāra) is traditionally connected with Maṅgala and with auspiciousness in marriage and family life.',
      'Gaurī worship in Śrāvaṇa is traditionally associated with saubhāgya — marital happiness, auspiciousness and family well-being.',
    ],
  },
  {
    id: 'guidance',
    icon: '🙏',
    eyebrow: 'Guru Guidance',
    title: 'Why Guru Guidance Matters',
    text: 'Sacred practices are traditionally learned with proper guidance. The Guru helps devotees understand the purpose, discipline, saṅkalpa, mantra, worship procedure, and devotional approach.',
    link: 'Receive Guidance',
    ornament: 'diya',
    detail: [
      'Sacred practices are traditionally learned with proper guidance. The Guru helps devotees understand the purpose, discipline, saṅkalpa, mantra, worship procedure and devotional approach of the vratam.',
      'Learning under guidance keeps the practice sincere, structured and aligned with the traditional understanding of the sampradāya — so that devotion remains the true heart of observance, and every step is performed with clarity and understanding.',
    ],
    guruGuidance:
      'Approach the vratam with the guidance of a Guru or according to your family tradition. A clear saṅkalpa, a properly received mantra and a correct worship procedure keep the practice rooted in tradition and sincere devotion.',
    tradition: [
      'Guru-śiṣya paramparā — the traditional lineage of teacher and disciple — is the classical way sacred practices are transmitted.',
      'Dīkṣā (traditional initiation) and personal guidance help devotees perform worship correctly and with understanding.',
      'Saṅkalpa, mantra and worship procedure are traditionally received from one’s Guru or sampradāya.',
    ],
  },
  {
    id: 'marriage',
    icon: '💍',
    eyebrow: 'Marriage & Family',
    title: 'For Marital Harmony',
    text: 'Mangala Gaurī worship is traditionally associated with prayers for marital happiness, harmony between spouses, family prosperity, and a peaceful household.',
    link: 'Know More',
    ornament: 'lotus',
    detail: [
      'Mangala Gaurī worship is traditionally associated with prayers for marital happiness, harmony between spouses, family prosperity and a peaceful household.',
      'Through the vratam, devotees offer their sincere prayers to Gaurī for a dharmic marriage rooted in mutual love, respect and devotion — and for peace, prosperity and well-being within the family.',
    ],
    guruGuidance:
      'The Guru teaches that the vratam is not merely a ritual but a sincere prayer offered with saṅkalpa — nurturing harmony, mutual respect and devotion in family life.',
    tradition: [
      'Suhāgan tradition — married devotees traditionally observe the vrata for marital harmony and the welfare of their families.',
      'Santāna — traditional prayers for children and family prosperity.',
      'Griha Śānti — prayers for peace and harmony between family members.',
    ],
  },
  {
    id: 'obstacles',
    icon: '✨',
    eyebrow: 'Removal of Obstacles',
    title: 'For a Smooth & Auspicious Life',
    text: 'Devotees perform the vratam with sincere saṅkalpa and prayer for the removal of obstacles and difficulties affecting marriage, family life, and personal progress.',
    link: 'View Spiritual Guidance',
    ornament: 'lotus',
    detail: [
      'Devotees perform the vratam with sincere saṅkalpa and prayer for the removal of obstacles and difficulties affecting marriage, family life and personal progress.',
      'In traditional understanding, some obstacles connected with marriage are associated with the planet Maṅgala. Gaurī worship on Śrāvaṇa Tuesdays is traditionally offered as a devotional practice for overcoming such obstacles through grace and sincere prayer. These benefits are presented as traditional devotional beliefs and spiritual aspirations, not guaranteed outcomes.',
    ],
    guruGuidance:
      'For personal matters such as marriage-related obstacles, the Guru advises approaching the practice with devotion, and seeking personal guidance suited to one’s own situation and tradition.',
    tradition: [
      'Maṅgala Doṣa Śānti — a traditional devotional practice for those seeking spiritual remedies for perceived marriage-related planetary obstacles.',
      'Maṅgala (Mars) is traditionally associated with Tuesday and with courage, energy and marriage in Jyotiṣa.',
      'Sincere saṅkalpa and prayer are regarded as essential to the devotional approach.',
    ],
  },
  {
    id: 'practice',
    icon: '🪔',
    eyebrow: 'Sacred Worship',
    title: 'Traditional Vratam Practice',
    text: 'Learn about the traditional approach to Mangala Gaurī worship, including preparation, saṅkalpa, devotional offerings, prayer, and observance.',
    link: 'View Vratam Method',
    ornament: 'lotus',
    detail: [
      'The traditional approach to Mangala Gaurī worship includes preparation, saṅkalpa, devotional offerings, prayer and observance of the sacred Tuesday.',
      'This is presented as traditional guidance — devotees follow according to their family tradition, Guru guidance and personal circumstances. Not every listed ritual is mandatory.',
    ],
    guruGuidance:
      'Follow the traditional vidhi according to your family or sampradāya tradition. The Guru guides devotees to perform the worship with clarity, cleanliness and a devoted heart.',
    tradition: [
      'Preparation — observe an appropriate fast and wear clean traditional clothing according to personal health and family tradition.',
      'Devotional offerings — traditionally include turmeric, kumkum, red bangles and other auspicious items offered with love.',
      'Prayer and observance — traditionally include the vrat kathā, prārthanā and prayers such as Patim Dehi • Putram Dehi • Saubhāgyam Dehi.',
    ],
  },
  {
    id: 'blessings',
    icon: '🌿',
    eyebrow: 'Divine Blessings',
    title: 'Grace of Goddess Gaurī',
    text: 'Through devotion and sincere prayer, devotees seek the blessings of Goddess Gaurī for peace, strength, prosperity, auspiciousness, and family well-being.',
    link: 'Explore Blessings',
    ornament: 'lotus',
    detail: [
      'Through devotion and sincere prayer, devotees seek the blessings of Goddess Gaurī for peace, strength, prosperity, auspiciousness and family well-being.',
      'The grace of Gaurī is traditionally invoked with love and surrender. The deepest blessing of the vratam is understood to be inner peace, growing devotion and spiritual well-being.',
    ],
    guruGuidance:
      'The Guru reminds devotees that the heart of the vratam is devotion and sincerity. Grace flows to those who approach the Goddess with faith, humility and a pure intention.',
    tradition: [
      'Turmeric and kumkum — traditionally associated with purity, auspiciousness and the divine feminine.',
      'Red adornments — bangles, bindi and clothing — traditionally symbolize auspiciousness and the sumaṅgalī tradition.',
      'Dāna — offering traditional gifts to married women (sumaṅgalī) is an integral part of the observance.',
    ],
  },
];

const guruCopy = {
  eyebrow: 'GURU PEETHAM GUIDANCE',
  title: 'Guidance from the Guru',
  subtitle: 'Learn • Understand • Practice • Receive Divine Grace',
  text: 'Sacred practices are traditionally approached with devotion, discipline and proper spiritual guidance. The Guru helps devotees understand the significance and traditional method of the practice.',
};

/* ── Modal: clean cream panel with full explanation ── */
function GuidanceModal({ card, onClose }) {
  return (
    <motion.div
      className="mgc-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${card.eyebrow} — ${card.title}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mgc-modal__backdrop" onClick={onClose} aria-hidden="true" />
      <motion.div
        className="mgc-modal__panel"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="mgc-modal__accent" aria-hidden="true" />

        <motion.button
          className="mgc-modal__close-x"
          onClick={onClose}
          aria-label="Close guidance"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.18 }}
        >
          ✕
        </motion.button>

        <header className="mgc-modal__head">
          <div className="mgc-modal__icon">{card.icon}</div>
          <span className="mgc-modal__eyebrow">{card.eyebrow}</span>
          <h3 className="mgc-modal__title font-cinzel">{card.title}</h3>
          <div className="mgc-modal__rule" aria-hidden="true">
            <span className="mgc-modal__rule-line" />
            <span className="mgc-modal__rule-diamond">✦</span>
            <span className="mgc-modal__rule-line" />
          </div>
        </header>

        <div className="mgc-modal__body">
          {card.detail.map((paragraph, i) => (
            <p key={`${card.id}-p-${i}`} className="mgc-modal__p">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mgc-modal__guru">
          <span className="mgc-modal__guru-label">
            <LotusOrnament size={16} />
            Guru Guidance
          </span>
          <p className="mgc-modal__guru-text font-cormorant">{card.guruGuidance}</p>
        </div>

        <span className="mgc-modal__section-label">Traditional Information</span>
        <ul className="mgc-modal__trad-list">
          {card.tradition.map((item, i) => (
            <li key={`${card.id}-t-${i}`} className="mgc-modal__trad-item">
              <span className="mgc-modal__tick">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mgc-modal__date">
          <span className="mgc-modal__date-icon">📅</span>
          <div>
            <span className="mgc-modal__date-label">Śrāvaṇa Maṅgalavāra 2026 Dates</span>
            <span className="mgc-modal__date-value">{SMG_DATES}</span>
          </div>
        </div>

        <div className="mgc-modal__actions">
          <GoldenButton
            label="Connect with Guru"
            size="md"
            onClick={() => window.open(WA_URL, '_blank')}
          />
          <motion.button
            className="mgc-modal__close-btn"
            onClick={onClose}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   SECTION — premium devotional guidance cards below the Vratam section
───────────────────────────────────────────────────────────────────────── */
export default function MangalaGauriGuidance() {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (!activeCard) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveCard(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [activeCard]);

  const openCard = (card) => setActiveCard(card);
  const closeModal = () => setActiveCard(null);

  return (
    <section className="mgc" aria-label="Devotional guidance for the Mangala Gaurī Vratam">
      <div className="mgc__inner">
        {/* Ornamental top divider */}
        <div className="mgc__top-rule" aria-hidden="true">
          <span className="mgc__top-line" />
          <LotusOrnament size={40} />
          <span className="mgc__top-line" />
        </div>

        {/* Section heading */}
        <ScrollReveal direction="up" duration={0.85}>
          <div className="mgc__header">
            <span className="mgc__eyebrow">Śrāvaṇa Maṅgalavāra • Guru Guidance</span>
            <h2 className="mgc__title font-cinzel">Wisdom for the Sacred Vratam</h2>
            <p className="mgc__subtitle font-cormorant">
              Traditional understanding and Guru guidance for the devotion, practice and blessings of
              the Mangala Gaurī Vratam.
            </p>
            <div className="mgc__rule" aria-hidden="true">
              <span className="mgc__rule-line" />
              <span className="mgc__rule-diamond">✦</span>
              <span className="mgc__rule-line" />
            </div>
          </div>
        </ScrollReveal>

        {/* 6 devotional cards */}
        <div className="mgc__grid">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.id} delay={(i % 3) * 0.08} duration={0.75}>
              <article
                className="mgc-card"
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-expanded={activeCard?.id === card.id}
                onClick={() => openCard(card)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openCard(card);
                  }
                }}
              >
                <span className="mgc-card__corner" aria-hidden="true">
                  {card.ornament === 'diya' ? <DiyaOrnament size={34} /> : <LotusOrnament size={34} />}
                </span>

                <span className="mgc-card__icon" aria-hidden="true">{card.icon}</span>
                <span className="mgc-card__eyebrow">{card.eyebrow}</span>
                <h3 className="mgc-card__title font-cinzel">{card.title}</h3>
                <p className="mgc-card__text">{card.text}</p>

                <span className="mgc-card__link">
                  {card.link}
                  <span className="mgc-card__link-arrow" aria-hidden="true">→</span>
                </span>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Full-width Guru card */}
        <ScrollReveal direction="up" duration={0.85}>
          <div className="mgc-guru">
            <span className="mgc-guru__lotus" aria-hidden="true">
              <LotusOrnament size={56} />
            </span>
            <span className="mgc-guru__eyebrow">{guruCopy.eyebrow}</span>
            <h3 className="mgc-guru__title font-cinzel">{guruCopy.title}</h3>
            <p className="mgc-guru__subtitle font-cormorant">{guruCopy.subtitle}</p>
            <p className="mgc-guru__text font-cormorant">{guruCopy.text}</p>
            <div className="mgc-guru__cta">
              <GoldenButton
                label="Connect with Guru"
                size="lg"
                onClick={() => window.open(WA_URL, '_blank')}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Learn-more modal */}
      <AnimatePresence>
        {activeCard && <GuidanceModal key={activeCard.id} card={activeCard} onClose={closeModal} />}
      </AnimatePresence>
    </section>
  );
}
