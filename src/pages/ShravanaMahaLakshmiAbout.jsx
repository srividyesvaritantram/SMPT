import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/common/ScrollReveal.jsx';
import GoldenButton from '../components/common/GoldenButton.jsx';
import mahaLakshmiImg from '../assets/maha-lakshmi.jpeg';
import { SML_DATES, SML_PREVIEW_HIGHLIGHTS } from './shravanaLakshmiData.js';
import './ShravanaMahaLakshmiAbout.css';

const WA_URL = 'https://wa.me/919390886029';

export default function ShravanaMahaLakshmiAbout() {
  const navigate = useNavigate();

  return (
    <div className="sml-about">
      {/* ══════════════════════════════════════════════════════════
          ŚRĀVAṆA MĀSA — MAHĀ LAKṢMĪ SĀDHANA VIDHI · SHORT PREVIEW
          Full content opens on its own detail page via READ MORE.
      ══════════════════════════════════════════════════════════ */}
      <section className="sml-about__hero">
        <div className="sml-about__hero-inner">
          {/* LEFT — Content */}
          <div className="sml-about__hero-content">
            <ScrollReveal direction="up" duration={0.85}>
              <span className="sml-about__hero-badge">ŚRĀVAṆA MĀSA</span>
            </ScrollReveal>

            <ScrollReveal delay={0.1} duration={0.85}>
              <h1 className="sml-about__hero-title font-cinzel">AISHWARYA PRADHA SRAVANA<br />MAHA LAKSHMI SADHANA VIDHI</h1>
            </ScrollReveal>

            <ScrollReveal delay={0.18} duration={0.85}>
              <p className="sml-about__hero-subtitle font-cormorant">Śrāvaṇa = The Month Most Dear to Mahā Lakṣmī + Viṣṇu</p>
            </ScrollReveal>

            <ScrollReveal delay={0.26} duration={0.85}>
              <div className="sml-about__hero-rule">
                <span className="sml-about__hero-rule-line" />
                <span className="sml-about__hero-rule-dot" />
                <span className="sml-about__hero-rule-line" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.32} duration={0.85}>
              <p className="sml-about__hero-desc font-cormorant">
                Śrāvaṇa Māsa is traditionally regarded as an auspicious period for Lakṣmī worship,
                devotion, vrata, dāna and spiritual discipline. This special Mahā Lakṣmī Sādhana invites
                devotees to cultivate prosperity, peace, dharma, gratitude and inner abundance.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.38} duration={0.85}>
              <div className="sml-about__hero-date-badge">
                <span className="sml-about__hero-date-label">ŚRĀVAṆA MĀSA 2026</span>
                <span className="sml-about__hero-date-value">{SML_DATES}</span>
              </div>
            </ScrollReveal>

            {/* Preview — a glimpse of the complete content */}
            <ScrollReveal delay={0.42} duration={0.85}>
              <div className="sml-about__preview">
                {SML_PREVIEW_HIGHLIGHTS.map((item) => (
                  <div className="sml-about__preview-item" key={item.label}>
                    <span className="sml-about__preview-icon" aria-hidden="true">{item.icon}</span>
                    <span className="sml-about__preview-text font-cormorant">{item.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.48} duration={0.85}>
              <div className="sml-about__hero-btns">
                <GoldenButton
                  label="Read More"
                  size="lg"
                  onClick={() => navigate('/events/shravana-maha-lakshmi')}
                />
                <GoldenButton
                  label="Join the Sādhana"
                  size="lg"
                  outlined
                  onClick={() => window.open(WA_URL, '_blank')}
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
    </div>
  );
}
