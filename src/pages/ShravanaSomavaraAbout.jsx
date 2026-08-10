import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/common/ScrollReveal.jsx';
import GoldenButton from '../components/common/GoldenButton.jsx';
import sivaAradhanaImg from '../assets/siva-aradhana-event.jpeg';
import { SSD_DATES, SSD_INTRO, SSD_PREVIEW_HIGHLIGHTS, SSD_TAGLINE } from './shravanaSomavaraData.js';
import './ShravanaSomavaraAbout.css';

export default function ShravanaSomavaraAbout() {
  const navigate = useNavigate();

  return (
    <div className="ssa-about">
      {/* ══════════════════════════════════════════════════════════
          ŚRĀVAṆA SOMAVĀRA — ŚIVA ĀRĀDHANA & ŚIVA ABHIṢEKA · SHORT PREVIEW
          Full content opens on its own detail page via READ MORE.
      ══════════════════════════════════════════════════════════ */}
      <section className="ssa-about__hero">
        <div className="ssa-about__hero-inner">
          {/* LEFT — Content */}
          <div className="ssa-about__hero-content">
            <ScrollReveal direction="up" duration={0.85}>
              <span className="ssa-about__hero-badge">ŚRĀVAṆA SOMAVĀRA</span>
            </ScrollReveal>

            <ScrollReveal delay={0.1} duration={0.85}>
              <h1 className="ssa-about__hero-title font-cinzel">ŚIVA ĀRĀDHANA<br />ŚIVA ABHIṢEKA</h1>
            </ScrollReveal>

            <ScrollReveal delay={0.18} duration={0.85}>
              <p className="ssa-about__hero-subtitle font-cormorant">{SSD_TAGLINE}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.26} duration={0.85}>
              <div className="ssa-about__hero-rule">
                <span className="ssa-about__hero-rule-line" />
                <span className="ssa-about__hero-rule-dot" />
                <span className="ssa-about__hero-rule-line" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.32} duration={0.85}>
              <p className="ssa-about__hero-desc font-cormorant">{SSD_INTRO}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.38} duration={0.85}>
              <div className="ssa-about__hero-date-badge">
                <span className="ssa-about__hero-date-label">2026 DATES</span>
                <span className="ssa-about__hero-date-value">{SSD_DATES}</span>
              </div>
            </ScrollReveal>

            {/* Preview — a glimpse of the complete content */}
            <ScrollReveal delay={0.42} duration={0.85}>
              <div className="ssa-about__preview">
                {SSD_PREVIEW_HIGHLIGHTS.map((item) => (
                  <div className="ssa-about__preview-item" key={item.label}>
                    <span className="ssa-about__preview-icon" aria-hidden="true">{item.icon}</span>
                    <span className="ssa-about__preview-text font-cormorant">{item.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.48} duration={0.85}>
              <div className="ssa-about__hero-btns">
                <GoldenButton
                  label="Read More"
                  size="lg"
                  onClick={() => navigate('/events/shravana-somavara')}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT — Image */}
          <ScrollReveal direction="left" duration={0.9} className="ssa-about__hero-image-col">
            <div className="ssa-about__hero-img-wrap">
              <div className="ssa-about__hero-img-glow" />
              <motion.img
                src={sivaAradhanaImg}
                alt="Bhagavān Śiva — Śiva Ārādhana & Abhiṣeka"
                className="ssa-about__hero-img"
                loading="eager"
                draggable="false"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <div className="ssa-about__hero-img-frame" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
