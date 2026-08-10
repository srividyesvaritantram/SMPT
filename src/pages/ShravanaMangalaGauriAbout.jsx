import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/common/ScrollReveal.jsx';
import GoldenButton from '../components/common/GoldenButton.jsx';
import mangalaGauriImg from '../assets/mangala-gauri-main.jpeg';
import { SMG_DATES, SMG_INTRO, SMG_TAGLINE } from './shravanaMangalaGauriData.js';
import './ShravanaMangalaGauriAbout.css';

const WA_URL = 'https://wa.me/919390886029';

export default function ShravanaMangalaGauriAbout() {
  const navigate = useNavigate();

  return (
    <div className="smg-about">
      {/* ══════════════════════════════════════════════════════════
          ŚRĀVAṆA MANGALAVĀRA — MANGALA GAURĪ VRATAM · SHORT PREVIEW
          Full content opens on its own detail page via READ MORE.
      ══════════════════════════════════════════════════════════ */}
      <section className="smg-about__hero">
        <div className="smg-about__hero-inner">
          {/* LEFT — Content */}
          <div className="smg-about__hero-content">
            <ScrollReveal direction="up" duration={0.85}>
              <span className="smg-about__hero-badge">ŚRĀVAṆA MANGALAVĀRA</span>
            </ScrollReveal>

            <ScrollReveal delay={0.1} duration={0.85}>
              <h1 className="smg-about__hero-title font-cinzel">MANGALA GAURĪ<br />VRATAM</h1>
            </ScrollReveal>

            <ScrollReveal delay={0.18} duration={0.85}>
              <p className="smg-about__hero-subtitle font-cormorant">
                Benefits of Ārādhana • Abhiṣeka • Archana
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.26} duration={0.85}>
              <div className="smg-about__hero-rule">
                <span className="smg-about__hero-rule-line" />
                <span className="smg-about__hero-rule-dot" />
                <span className="smg-about__hero-rule-line" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.32} duration={0.85}>
              <p className="smg-about__hero-desc font-cormorant">{SMG_TAGLINE}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.38} duration={0.85}>
              <div className="smg-about__hero-date-badge">
                <span className="smg-about__hero-date-label">2026 DATES</span>
                <span className="smg-about__hero-date-value">{SMG_DATES}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.42} duration={0.85}>
              <p className="smg-about__hero-intro font-cormorant">{SMG_INTRO}</p>
            </ScrollReveal>

            {/* No detailed Parts on the Event page.
                PART 2 onward (Prayers of the Vratam → Conclusion) lives
                ONLY on the Read More detail page. */}

            <ScrollReveal delay={0.52} duration={0.85}>
              <div className="smg-about__hero-btns">
                <GoldenButton
                  label="Read More"
                  size="lg"
                  onClick={() => navigate('/events/shravana-mangala-gauri')}
                />
                <GoldenButton
                  label="Join the Vratam"
                  size="lg"
                  outlined
                  onClick={() => window.open(WA_URL, '_blank')}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT — Image */}
          <ScrollReveal direction="left" duration={0.9} className="smg-about__hero-image-col">
            <div className="smg-about__hero-img-wrap">
              <div className="smg-about__hero-img-glow" />
              <motion.img
                src={mangalaGauriImg}
                alt="Mangala Gaurī — Goddess Pārvatī as the Giver of Saubhāgya"
                className="smg-about__hero-img"
                loading="eager"
                draggable="false"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <div className="smg-about__hero-img-frame" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
