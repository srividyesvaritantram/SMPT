import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import { FiEye, FiCompass } from 'react-icons/fi';
import sriMahadeviImg from '../../assets/sri_mahadevi.png';
import './AboutSection.css';

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <>
      <section className="about">
        {/* Ambient background glows */}
        <div className="about__bg-circle about__bg-circle--tl" />
        <div className="about__bg-circle about__bg-circle--br" />

        <div className="about__container">

          {/* ── LEFT: IMAGE COLUMN ── */}
          <ScrollReveal className="about__image-col" direction="right" duration={0.85}>
            <div className="about__image-card">

              <div className="about__image-glow" />

              <div className="about__image-frame">
                <motion.img
                  src={sriMahadeviImg}
                  alt="Sri Mahadevi — Divine Goddess"
                  className="about__image"
                  loading="lazy"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>

              <div className="about__image-label">
                <span className="about__image-label-line" />
                <span className="about__image-label-text font-devanagari">श्री महाविद्येश्वरी</span>
                <span className="about__image-label-line" />
              </div>

              <div className="about__image-badge">
                <span className="about__badge-om font-devanagari">ॐ</span>
                <span className="about__badge-text">Est. Ancient Tradition</span>
              </div>

            </div>
          </ScrollReveal>

          {/* ── RIGHT: CONTENT COLUMN ── */}
          <div className="about__content-col">

            <ScrollReveal delay={0.05}>
              <p className="about__eyebrow">
                <span className="about__eyebrow-line" />
                ABOUT SRI MAHAVIDYESVARI TANTRA PEETHAM
                <span className="about__eyebrow-line" />
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2 className="about__title font-cinzel">
                Sri MahaVidyesvari<br />
                <span className="about__title-gold golden-text">Tantra Peetham</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.22}>
              <div className="about__rule">
                <span className="about__rule-line" />
                <span className="about__rule-diamond" />
                <span className="about__rule-line" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.28}>
              <p className="about__text font-cormorant">
                Sri MahaVidyesvari Tantra Peetham (SMTP) stands as a seat of living Tantra, rooted in authentic
                śāstric tradition and guided by the Guru–Śiṣya Paramparā. The Peetham is dedicated to preserving,
                practicing, and transmitting the profound wisdom of Sri Vidya, where mantra, yantra, and upāsanā
                are not treated as abstractions but as living sciences of inner transformation.
              </p>
              <p className="about__text font-cormorant">
                Here, Tantra is approached with discipline, clarity, and reverence, free from modern distortion.
                The Peetham offers seekers a grounded path to embody sacred practice in everyday life while honoring
                both the purity of tradition and the needs of our age.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.38}>
              <div className="about__cards">

                <motion.div
                  className="about__card"
                  whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(123,30,58,0.14), 0 0 24px rgba(212,175,55,0.18)' }}
                  transition={{ duration: 0.28 }}
                >
                  <div className="about__card-icon">
                    <FiEye size={18} />
                  </div>
                  <h4 className="about__card-title font-cinzel">Our Vision</h4>
                  <p className="about__card-text">
                    To inspire seekers across the world by preserving authentic Sri Vidya traditions
                    and making sacred knowledge accessible with purity and devotion.
                  </p>
                </motion.div>

                <motion.div
                  className="about__card"
                  whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(123,30,58,0.14), 0 0 24px rgba(212,175,55,0.18)' }}
                  transition={{ duration: 0.28 }}
                >
                  <div className="about__card-icon">
                    <FiCompass size={18} />
                  </div>
                  <h4 className="about__card-title font-cinzel">Our Mission</h4>
                  <p className="about__card-text">
                    To teach, preserve, and transmit the living wisdom of Tantra, Mantra, and
                    Guru Parampara while guiding every seeker toward self-realization.
                  </p>
                </motion.div>

              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="about__ctas">
                <GoldenButton
                  label="Know More"
                  onClick={() => navigate('/about')}
                  size="md"
                />
                <GoldenButton
                  label="Our Offerings"
                  outlined
                  size="md"
                  onClick={() => navigate('/offerings')}
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Premium lotus connector: maroon About → cream Adi Guru ── */}
      <div className="about-lotus-connector" aria-hidden="true">
        <span className="about-lotus-line" />
        <div className="about-lotus-emblem">
          <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="about-lotus-svg" width="110" height="110">
            <circle cx="55" cy="55" r="52" stroke="url(#abLg)" strokeWidth="1.5" opacity="0.45" />
            <circle cx="55" cy="55" r="46" stroke="url(#abLg)" strokeWidth="0.8" opacity="0.25" />
            {/* Back petals */}
            <ellipse cx="55" cy="30" rx="7" ry="18" fill="url(#abLpb)" opacity="0.55" transform="rotate(0 55 55)" />
            <ellipse cx="55" cy="30" rx="7" ry="18" fill="url(#abLpb)" opacity="0.50" transform="rotate(45 55 55)" />
            <ellipse cx="55" cy="30" rx="7" ry="18" fill="url(#abLpb)" opacity="0.50" transform="rotate(90 55 55)" />
            <ellipse cx="55" cy="30" rx="7" ry="18" fill="url(#abLpb)" opacity="0.50" transform="rotate(135 55 55)" />
            <ellipse cx="55" cy="30" rx="7" ry="18" fill="url(#abLpb)" opacity="0.50" transform="rotate(180 55 55)" />
            <ellipse cx="55" cy="30" rx="7" ry="18" fill="url(#abLpb)" opacity="0.50" transform="rotate(225 55 55)" />
            <ellipse cx="55" cy="30" rx="7" ry="18" fill="url(#abLpb)" opacity="0.50" transform="rotate(270 55 55)" />
            <ellipse cx="55" cy="30" rx="7" ry="18" fill="url(#abLpb)" opacity="0.50" transform="rotate(315 55 55)" />
            {/* Front petals */}
            <ellipse cx="55" cy="32" rx="6" ry="16" fill="url(#abLpf)" transform="rotate(22.5 55 55)" />
            <ellipse cx="55" cy="32" rx="6" ry="16" fill="url(#abLpf)" transform="rotate(67.5 55 55)" />
            <ellipse cx="55" cy="32" rx="6" ry="16" fill="url(#abLpf)" transform="rotate(112.5 55 55)" />
            <ellipse cx="55" cy="32" rx="6" ry="16" fill="url(#abLpf)" transform="rotate(157.5 55 55)" />
            <ellipse cx="55" cy="32" rx="6" ry="16" fill="url(#abLpf)" transform="rotate(202.5 55 55)" />
            <ellipse cx="55" cy="32" rx="6" ry="16" fill="url(#abLpf)" transform="rotate(247.5 55 55)" />
            <ellipse cx="55" cy="32" rx="6" ry="16" fill="url(#abLpf)" transform="rotate(292.5 55 55)" />
            <ellipse cx="55" cy="32" rx="6" ry="16" fill="url(#abLpf)" transform="rotate(337.5 55 55)" />
            {/* Centre */}
            <circle cx="55" cy="55" r="13" fill="url(#abLcg)" />
            <circle cx="55" cy="55" r="13" stroke="url(#abLg)" strokeWidth="1.5" opacity="0.8" />
            <circle cx="55" cy="55" r="8"  fill="url(#abLci)" />
            <circle cx="55" cy="55" r="3"  fill="#FFF7D6" opacity="0.95" />
            <defs>
              <linearGradient id="abLg" x1="0" y1="0" x2="110" y2="110" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#B8860B" />
                <stop offset="50%"  stopColor="#E8C76A" />
                <stop offset="100%" stopColor="#B8860B" />
              </linearGradient>
              <linearGradient id="abLpb" x1="55" y1="12" x2="55" y2="55" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#F9C8D8" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="abLpf" x1="55" y1="16" x2="55" y2="55" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="40%"  stopColor="#F9C8D8" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.55" />
              </linearGradient>
              <radialGradient id="abLcg" cx="50%" cy="40%" r="60%">
                <stop offset="0%"   stopColor="#E8C76A" />
                <stop offset="60%"  stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#B8860B" />
              </radialGradient>
              <radialGradient id="abLci" cx="40%" cy="35%" r="65%">
                <stop offset="0%"   stopColor="#FFF7D6" />
                <stop offset="100%" stopColor="#D4AF37" />
              </radialGradient>
            </defs>
          </svg>
          <div className="about-lotus-glow" />
        </div>
        <span className="about-lotus-line" />
      </div>
    </>
  );
}
