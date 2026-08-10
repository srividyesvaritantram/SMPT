import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal.jsx';
import GoldenButton from './GoldenButton.jsx';
import mahaLakshmiImg from '../assets/maha-lakshmi.jpeg';
import './ShravanaMahaLakshmiAbout.css';

const WA_URL = 'https://wa.me/919390886029';

export default function ShravanaMahaLakshmiAbout() {
  return (
    <div className="sml-about">
      {/* ═══════════════════════════════════════════════════════════════════
          HERO / INTRODUCTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="sml-about__hero">
        <div className="sml-about__hero-inner">
          {/* LEFT — Content */}
          <div className="sml-about__hero-content">
            <ScrollReveal direction="up" duration={0.85}>
              <span className="sml-about__hero-badge">🪔 Sacred Event</span>
            </ScrollReveal>

            <ScrollReveal delay={0.1} duration={0.85}>
              <h1 className="sml-about__hero-title font-cinzel">ŚRĀVAṆA MĀSA</h1>
            </ScrollReveal>

            <ScrollReveal delay={0.18} duration={0.85}>
              <h2 className="sml-about__hero-subtitle font-cinzel">MAHĀ LAKṢMĪ SĀDHANA VIDHI</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.26} duration={0.85}>
              <div className="sml-about__hero-rule">
                <span className="sml-about__hero-rule-line" />
                <span className="sml-about__hero-rule-dot" />
                <span className="sml-about__hero-rule-line" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.32} duration={0.85}>
              <p className="sml-about__hero-intro font-cormorant">
                <strong>Śrāvaṇa — The Month Most Dear to Mahā Lakṣmī &amp; Viṣṇu</strong>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.38} duration={0.85}>
              <p className="sml-about__hero-desc font-cormorant">
                Śrāvaṇa Māsa is traditionally regarded as a sacred period for devotion, vrata, dāna,
                Lakṣmī worship and spiritual discipline. This special Mahā Lakṣmī Sādhana invites
                devotees to cultivate prosperity, peace, dharma, gratitude and inner abundance.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.44} duration={0.85}>
              <div className="sml-about__hero-date-badge">
                <span className="sml-about__hero-date-label">ŚRĀVAṆA MĀSA 2026</span>
                <span className="sml-about__hero-date-value">18 July 2026 – 16 August 2026</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.50} duration={0.85}>
              <div className="sml-about__hero-btns">
                <GoldenButton
                  label="Join the Sādhana"
                  size="lg"
                  onClick={() => window.open(WA_URL, '_blank')}
                />
                <GoldenButton
                  label="Learn More"
                  size="lg"
                  outlined
                />
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT — Image */}
          <ScrollReveal direction="left" duration={0.9} className="sml-about__hero-image-col">
            <div className="sml-about__hero-img-wrap">
              <div className="sml-about__hero-img-glow" />
              <motion.img
                src={mahaLakshmiImg}
                alt="Mahā Lakṣmī — Goddess of Prosperity and Auspiciousness"
                className="sml-about__hero-img"
                loading="eager"
                draggable="false"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <div className="sml-about__hero-img-frame" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LOTUS DIVIDER */}
      <div className="sml-about__lotus-divider" aria-hidden="true">
        <span className="sml-about__lotus-line" />
        <div className="sml-about__lotus-emblem">
          <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
            <circle cx="65" cy="65" r="62" stroke="url(#smlLg)" strokeWidth="1.3" opacity="0.45" />
            <circle cx="65" cy="65" r="52" stroke="url(#smlLg)" strokeWidth="0.9" opacity="0.30" />
            <ellipse cx="65" cy="35" rx="7.5" ry="20" fill="url(#smlLpf)" opacity="0.95" transform="rotate(0 65 65)" />
            <ellipse cx="65" cy="35" rx="7.5" ry="20" fill="url(#smlLpf)" opacity="0.85" transform="rotate(45 65 65)" />
            <ellipse cx="65" cy="35" rx="7.5" ry="20" fill="url(#smlLpf)" opacity="0.85" transform="rotate(90 65 65)" />
            <ellipse cx="65" cy="35" rx="7.5" ry="20" fill="url(#smlLpf)" opacity="0.85" transform="rotate(135 65 65)" />
            <ellipse cx="65" cy="35" rx="7.5" ry="20" fill="url(#smlLpf)" opacity="0.85" transform="rotate(180 65 65)" />
            <ellipse cx="65" cy="35" rx="7.5" ry="20" fill="url(#smlLpf)" opacity="0.85" transform="rotate(225 65 65)" />
            <ellipse cx="65" cy="35" rx="7.5" ry="20" fill="url(#smlLpf)" opacity="0.85" transform="rotate(270 65 65)" />
            <ellipse cx="65" cy="35" rx="7.5" ry="20" fill="url(#smlLpf)" opacity="0.85" transform="rotate(315 65 65)" />
            <circle cx="65" cy="65" r="18" fill="url(#smlLcg)" />
            <circle cx="65" cy="65" r="18" stroke="url(#smlLg)" strokeWidth="1.3" opacity="0.7" />
            <circle cx="65" cy="65" r="10" fill="url(#smlLci)" />
            <circle cx="65" cy="65" r="4" fill="#FFF7D6" opacity="0.95" />
            <defs>
              <linearGradient id="smlLg" x1="0" y1="0" x2="130" y2="130" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#B8860B" />
                <stop offset="50%" stopColor="#E8C76A" />
                <stop offset="100%" stopColor="#B8860B" />
              </linearGradient>
              <linearGradient id="smlLpf" x1="65" y1="15" x2="65" y2="65" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.55" />
              </linearGradient>
              <radialGradient id="smlLcg" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#E8C76A" />
                <stop offset="60%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#B8860B" />
              </radialGradient>
              <radialGradient id="smlLci" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#FFF7D6" />
                <stop offset="100%" stopColor="#D4AF37" />
              </radialGradient>
            </defs>
          </svg>
          <div className="sml-about__lotus-glow" />
        </div>
        <span className="sml-about__lotus-line" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          MORE ABOUT MAHĀ LAKṢMĪ
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="sml-more-about" className="sml-about__section sml-about__section--cream">
        <div className="sml-about__container">
          <ScrollReveal className="sml-about__section-header">
            <span className="sml-about__section-eyebrow">DIVINE NATURE</span>
            <h2 className="sml-about__section-title font-cinzel">More About Mahā Lakṣmī</h2>
            <p className="sml-about__section-subtitle font-cormorant">
              The Divine Source of Prosperity, Auspiciousness and Spiritual Abundance
            </p>
            <div className="sml-about__section-rule">
              <span className="sml-about__section-rule-line" />
              <span className="sml-about__section-rule-dot" />
              <span className="sml-about__section-rule-line" />
            </div>
          </ScrollReveal>

          <div className="sml-about__facts-grid">
            {[
              {
                num: '01',
                title: 'Svayam-Bhū',
                source: 'Lakṣmī Tantram 2.14',
                text: 'Mahā Lakṣmī is described as Svayam-Bhū — not merely born in the ordinary sense, but manifesting as the primordial divine power, Mūla Prakṛti.',
              },
              {
                num: '02',
                title: 'Two Divine Forms',
                source: 'Devī Bhāgavata 9.3',
                text: 'Nitya Lakṣmī — The eternal Lakṣmī, abiding with Viṣṇu in Vaikuṇṭha. Līlā Lakṣmī — Her manifestations upon Earth through sacred forms such as Sītā, Rukmiṇī and Padmāvatī.',
              },
              {
                num: '03',
                title: 'Divine Śakti',
                source: 'Śrīmad Bhāgavata',
                text: 'Lakṣmī represents divine śakti and auspiciousness. Her power is traditionally associated with the sustaining and harmonizing force of the universe, abiding with Viṣṇu as the source of grace and cosmic order.',
              },
              {
                num: '04',
                title: 'The Four Lotuses',
                source: 'Śāradā Tilaka Tantra',
                text: 'The four lotuses traditionally symbolize the four Puruṣārthas: Dharma, Artha, Kāma and Mokṣa — the complete aims of human life in the traditional Hindu worldview.',
              },
              {
                num: '05',
                title: 'Chañcalā Lakṣmī',
                source: 'Mahābhārata',
                text: 'Lakṣmī is sometimes described as Chañcalā — that which moves swiftly. The teaching encourages dharma, gratitude, discipline and charity so that prosperity is used wisely and auspiciously.',
              },
            ].map((fact, i) => (
              <ScrollReveal key={fact.num} delay={i * 0.1} duration={0.8}>
                <motion.div
                  className="sml-about__fact-card"
                  whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(123,30,58,0.12), 0 0 24px rgba(184,134,11,0.15)' }}
                  transition={{ duration: 0.28 }}
                >
                  <div className="sml-about__fact-card-accent" />
                  <span className="sml-about__fact-num font-cinzel">{fact.num}</span>
                  <h4 className="sml-about__fact-title font-cinzel">{fact.title}</h4>
                  <p className="sml-about__fact-source font-cormorant">{fact.source}</p>
                  <p className="sml-about__fact-text font-cormorant">{fact.text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
