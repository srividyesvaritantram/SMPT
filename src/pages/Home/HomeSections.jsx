import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import GlassCard from '../../components/common/GlassCard.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import { courses, workshops, testimonials, offerings, blogPosts } from '../../utils/mockData.js';
import { SRAVANA_2026_EVENTS } from '../../components/events/Shravana2026Events.jsx';
import { FiStar, FiCheck, FiChevronRight, FiMail, FiPhone, FiMapPin, FiClock, FiYoutube, FiInstagram, FiFacebook, FiMessageCircle } from 'react-icons/fi';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Flower2, MonitorPlay, GraduationCap, Globe, Award, HeadphonesIcon } from 'lucide-react';
import ardhanariswariImg from '../../assets/ardhanariswari.png';
import logoImg from '../../assets/logo.png';
import whyTantraImg from '../../assets/why_tantra.png';
import learnSriVidyaImg from '../../assets/learn_sri_vidya.png';
import mahavidyeswariImg from '../../assets/mahavidyeswari.png';
import homamImg       from '../../assets/homam_offerings.png';
import tarpanaImg     from '../../assets/tarpana_offerings.png';
import yantraImg      from '../../assets/yantra_puja_offerings.png';
import narayaniImg from '../../assets/narayani_vidya.png';
import dhanvantariImg from '../../assets/dhanvantari.png';
import ashtaLakshmiImg from '../../assets/ashta_lakshmi_vidya.png';
import dasaMahavidyasImg from '../../assets/dasa_maha_vidyas.png';
import './HomeSections.css';
import '../Courses/CoursesPage.css';

// ─── Shared Lotus Connector ─────────────────────────────────────────────────
function LotusSVGInner({ id }) {
  return (
    <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="lotus-connector__svg" width="130" height="130">
      <circle cx="65" cy="65" r="62" stroke={`url(#${id}g)`} strokeWidth="1.5" opacity="0.45" />
      <circle cx="65" cy="65" r="55" stroke={`url(#${id}g)`} strokeWidth="0.8" opacity="0.25" />
      <ellipse cx="65" cy="36" rx="8" ry="21" fill={`url(#${id}pb)`} opacity="0.55" transform="rotate(0 65 65)" />
      <ellipse cx="65" cy="36" rx="8" ry="21" fill={`url(#${id}pb)`} opacity="0.50" transform="rotate(45 65 65)" />
      <ellipse cx="65" cy="36" rx="8" ry="21" fill={`url(#${id}pb)`} opacity="0.50" transform="rotate(90 65 65)" />
      <ellipse cx="65" cy="36" rx="8" ry="21" fill={`url(#${id}pb)`} opacity="0.50" transform="rotate(135 65 65)" />
      <ellipse cx="65" cy="36" rx="8" ry="21" fill={`url(#${id}pb)`} opacity="0.50" transform="rotate(180 65 65)" />
      <ellipse cx="65" cy="36" rx="8" ry="21" fill={`url(#${id}pb)`} opacity="0.50" transform="rotate(225 65 65)" />
      <ellipse cx="65" cy="36" rx="8" ry="21" fill={`url(#${id}pb)`} opacity="0.50" transform="rotate(270 65 65)" />
      <ellipse cx="65" cy="36" rx="8" ry="21" fill={`url(#${id}pb)`} opacity="0.50" transform="rotate(315 65 65)" />
      <ellipse cx="65" cy="38" rx="7" ry="19" fill={`url(#${id}pf)`} transform="rotate(22.5 65 65)" />
      <ellipse cx="65" cy="38" rx="7" ry="19" fill={`url(#${id}pf)`} transform="rotate(67.5 65 65)" />
      <ellipse cx="65" cy="38" rx="7" ry="19" fill={`url(#${id}pf)`} transform="rotate(112.5 65 65)" />
      <ellipse cx="65" cy="38" rx="7" ry="19" fill={`url(#${id}pf)`} transform="rotate(157.5 65 65)" />
      <ellipse cx="65" cy="38" rx="7" ry="19" fill={`url(#${id}pf)`} transform="rotate(202.5 65 65)" />
      <ellipse cx="65" cy="38" rx="7" ry="19" fill={`url(#${id}pf)`} transform="rotate(247.5 65 65)" />
      <ellipse cx="65" cy="38" rx="7" ry="19" fill={`url(#${id}pf)`} transform="rotate(292.5 65 65)" />
      <ellipse cx="65" cy="38" rx="7" ry="19" fill={`url(#${id}pf)`} transform="rotate(337.5 65 65)" />
      <circle cx="65" cy="65" r="15" fill={`url(#${id}cg)`} />
      <circle cx="65" cy="65" r="15" stroke={`url(#${id}g)`} strokeWidth="1.5" opacity="0.8" />
      <circle cx="65" cy="65" r="9"  fill={`url(#${id}ci)`} />
      <circle cx="65" cy="65" r="3.5" fill="#FFF7D6" opacity="0.95" />
      <defs>
        <linearGradient id={`${id}g`} x1="0" y1="0" x2="130" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#B8860B" />
          <stop offset="50%"  stopColor="#E8C76A" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id={`${id}pb`} x1="65" y1="15" x2="65" y2="65" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#F9C8D8" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id={`${id}pf`} x1="65" y1="19" x2="65" y2="65" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="40%"  stopColor="#F9C8D8" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id={`${id}cg`} cx="50%" cy="40%" r="60%">
          <stop offset="0%"   stopColor="#E8C76A" />
          <stop offset="60%"  stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        <radialGradient id={`${id}ci`} cx="40%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#FFF7D6" />
          <stop offset="100%" stopColor="#D4AF37" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function LotusConnector({ id, bg }) {
  return (
    <div className={`lotus-connector lotus-connector--${bg}`} aria-hidden="true">
      <span className="lotus-connector__line" />
      <div className="lotus-connector__emblem">
        <LotusSVGInner id={id} />
        <div className="lotus-connector__glow" />
      </div>
      <span className="lotus-connector__line" />
    </div>
  );
}

// ─── Why Tantra ───────────────────────────────────────────────────────────────
const tantraFeatures = [
  { icon: '🧘', title: 'Complete Path', text: 'Tantra integrates body, mind, and spirit into a unified path of liberation.' },
  { icon: '♾️', title: 'Non-Dual Vision', text: 'Recognizes the divine in all of existence — nothing is excluded from the sacred.' },
  { icon: '⚡', title: 'Shakti Awakening', text: 'Activates the dormant divine energy within through systematic practice.' },
  { icon: '🌿', title: 'Practical Wisdom', text: 'Offers concrete techniques — mantra, yantra, tantra — for direct experience.' },
];

export function WhyTantraSection() {
  return (
    <>
    <section className="wt">
      {/* Subtle ivory background pattern */}
      <div className="wt__pattern" aria-hidden="true" />

      <div className="wt__container">

        {/* ── TOP LABEL ── */}
        <ScrollReveal className="wt__header">
          <p className="wt__eyebrow">
            <span className="wt__eyebrow-line" />
            WHY TANTRA
            <span className="wt__eyebrow-line" />
          </p>
        </ScrollReveal>

        {/* ── TWO-COLUMN LAYOUT ── */}
        <div className="wt__layout">

          {/* LEFT — Text Content (55%) */}
          <div className="wt__content-col">

            <ScrollReveal delay={0.08}>
              <h2 className="wt__heading font-cinzel">
                Tantra –{' '}
                <span className="wt__gold">The Sacred Science</span>
                <br />of Divine Transformation
              </h2>
            </ScrollReveal>

            {/* Gold divider */}
            <ScrollReveal delay={0.16}>
              <div className="wt__divider">
                <span className="wt__divider-line" />
                <span className="wt__divider-diamond" />
                <span className="wt__divider-line" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.24}>
  <div className="wt__body font-cormorant">
    <p>
      Tantra exists because human life has both material and spiritual needs. Unlike paths that reject the world,
      Tantra addresses life as it is. It offers bhukti (worldly stability, health, protection, prosperity) and
      mukti (inner freedom and liberation) through the same disciplined path, without forcing a false choice
      between the two.
    </p>
    <p>
      Scriptures repeatedly state that Tantra is especially suited for Kali Yuga. In an age where attention is weak
      and time is limited, Tantra meets seekers where they are, grounding sacred practice in real life while guiding
      them toward lasting transformation.
    </p>
  </div>
</ScrollReveal>


            {/* Sanskrit verse */}
            <ScrollReveal delay={0.30}>
              <div className="wt__verse">
                <span className="wt__verse-line" />
                <p className="wt__verse-text font-devanagari">सर्वं खल्विदं ब्रह्म</p>
                <span className="wt__verse-line" />
              </div>
            </ScrollReveal>

            {/* Buttons */}
            <ScrollReveal delay={0.38}>
              <div className="wt__btns">
                <GoldenButton label="Explore the Tradition" size="md" />
                <GoldenButton label="Learn More" size="md" outlined />
              </div>
            </ScrollReveal>

          </div>

          {/* RIGHT — Image (45%) */}
          <ScrollReveal direction="left" duration={0.9} className="wt__image-col">
            <motion.div
              className="wt__img-wrap"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.img
                src={whyTantraImg}
                alt="Tantra – The Sacred Science of Divine Transformation"
                className="wt__img"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <div className="wt__img-glow" />
            </motion.div>
          </ScrollReveal>

        </div>

        {/* ── FEATURE CARDS (unchanged) ── */}
        <div className="wt__features">
          {tantraFeatures.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <motion.div
                className="wt__feature-card"
                whileHover={{ y: -8, boxShadow: '0 20px 48px rgba(123,30,58,0.12), 0 0 28px rgba(184,134,11,0.18)' }}
                transition={{ duration: 0.25 }}
              >
                <span className="wt__feature-icon">{f.icon}</span>
                <h4 className="wt__feature-title font-cinzel">{f.title}</h4>
                <p className="wt__feature-text">{f.text}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>

    {/* Premium lotus connector: cream Why Tantra → maroon Learn Sri Vidya */}
    <div className="wt-lsv-lotus-connector" aria-hidden="true">
      <span className="wt-lsv-lotus-line" />
      <div className="wt-lsv-lotus-emblem">
        <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="wt-lsv-lotus-svg" width="130" height="130">
          <circle cx="65" cy="65" r="62" stroke="url(#wtLg)" strokeWidth="1.5" opacity="0.45" />
          <circle cx="65" cy="65" r="55" stroke="url(#wtLg)" strokeWidth="0.8" opacity="0.25" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#wtLpb)" opacity="0.55" transform="rotate(0 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#wtLpb)" opacity="0.50" transform="rotate(45 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#wtLpb)" opacity="0.50" transform="rotate(90 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#wtLpb)" opacity="0.50" transform="rotate(135 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#wtLpb)" opacity="0.50" transform="rotate(180 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#wtLpb)" opacity="0.50" transform="rotate(225 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#wtLpb)" opacity="0.50" transform="rotate(270 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#wtLpb)" opacity="0.50" transform="rotate(315 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#wtLpf)" transform="rotate(22.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#wtLpf)" transform="rotate(67.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#wtLpf)" transform="rotate(112.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#wtLpf)" transform="rotate(157.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#wtLpf)" transform="rotate(202.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#wtLpf)" transform="rotate(247.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#wtLpf)" transform="rotate(292.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#wtLpf)" transform="rotate(337.5 65 65)" />
          <circle cx="65" cy="65" r="15" fill="url(#wtLcg)" />
          <circle cx="65" cy="65" r="15" stroke="url(#wtLg)" strokeWidth="1.5" opacity="0.8" />
          <circle cx="65" cy="65" r="9"  fill="url(#wtLci)" />
          <circle cx="65" cy="65" r="3.5" fill="#FFF7D6" opacity="0.95" />
          <defs>
            <linearGradient id="wtLg" x1="0" y1="0" x2="130" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#B8860B" />
              <stop offset="50%"  stopColor="#E8C76A" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
            <linearGradient id="wtLpb" x1="65" y1="15" x2="65" y2="65" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#F9C8D8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="wtLpf" x1="65" y1="19" x2="65" y2="65" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="40%"  stopColor="#F9C8D8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.55" />
            </linearGradient>
            <radialGradient id="wtLcg" cx="50%" cy="40%" r="60%">
              <stop offset="0%"   stopColor="#E8C76A" />
              <stop offset="60%"  stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8860B" />
            </radialGradient>
            <radialGradient id="wtLci" cx="40%" cy="35%" r="65%">
              <stop offset="0%"   stopColor="#FFF7D6" />
              <stop offset="100%" stopColor="#D4AF37" />
            </radialGradient>
          </defs>
        </svg>
        <div className="wt-lsv-lotus-glow" />
      </div>
      <span className="wt-lsv-lotus-line" />
    </div>
    </>
  );
}

// ─── Learn Sri Vidya Invite ──────────────────────────────────────────────────
export function LearnSriVidyaInviteSection() {
  const navigate = useNavigate();
  return (
    <>
    <section className="lsv">
      <div className="lsv__pattern" aria-hidden="true" />
      <div className="lsv__outer">
        <ScrollReveal duration={0.85}>
          <div className="lsv__card">

            {/* ── LEFT: Content ── */}
            <div className="lsv__content">

              <p className="lsv__label">
                <span className="lsv__label-star">✦</span>
                BEGIN YOUR SPIRITUAL JOURNEY
                <span className="lsv__label-star">✦</span>
              </p>

              <h2 className="lsv__heading font-cinzel">
                Learn{' '}
                <span className="lsv__gold">Sri Vidya</span>
              </h2>

              <div className="lsv__divider">
                <span className="lsv__divider-line" />
                <span className="lsv__divider-diamond" />
                <span className="lsv__divider-line" />
              </div>

              <div className="lsv__body font-cormorant">
                <p>
                  Sri Vidya is the sacred tantric path in which mantra, yantra, worship, and inner realization come together in the radiant presence of the Divine Mother.
                  It is a tradition of profound spiritual depth that reveals the unity of consciousness, cosmos, sacred sound, and divine power.
                  Revered as a path that bestows both worldly well-being and ultimate liberation, Sri Vidyā embraces the fullness of human aspiration,
                  supporting the seeker in the pursuit of prosperity, harmony, protection, wisdom, and spiritual awakening.
                </p>
                <p>
                  Through devotion, contemplation, and inner refinement, it guides one from outer worship to inner realization, and from the blessings of life
                  to the freedom of the highest truth. It is therefore cherished as a complete path, sanctifying both experience and transcendence.
                </p>
              </div>

              <GoldenButton label="Course Details" size="md" onClick={() => navigate('/courses')} />

            </div>

            {/* ── RIGHT: Image ── */}
            <div className="lsv__image-col">
              <motion.div
                className="lsv__img-wrap"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.img
                  src={learnSriVidyaImg}
                  alt="Learn Sri Vidya — Sacred Learning"
                  className="lsv__img"
                  loading="lazy"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <div className="lsv__img-glow" />
              </motion.div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Premium lotus connector: maroon lsv → cream courses */}
    <div className="lsv-lotus-connector" aria-hidden="true">
      <span className="lsv-lotus-line" />
      <div className="lsv-lotus-emblem">
        <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="lsv-lotus-svg" width="130" height="130">
          <circle cx="65" cy="65" r="62" stroke="url(#lsvLg)" strokeWidth="1.5" opacity="0.45" />
          <circle cx="65" cy="65" r="55" stroke="url(#lsvLg)" strokeWidth="0.8" opacity="0.25" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#lsvLpb)" opacity="0.55" transform="rotate(0 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#lsvLpb)" opacity="0.50" transform="rotate(45 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#lsvLpb)" opacity="0.50" transform="rotate(90 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#lsvLpb)" opacity="0.50" transform="rotate(135 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#lsvLpb)" opacity="0.50" transform="rotate(180 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#lsvLpb)" opacity="0.50" transform="rotate(225 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#lsvLpb)" opacity="0.50" transform="rotate(270 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#lsvLpb)" opacity="0.50" transform="rotate(315 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#lsvLpf)" transform="rotate(22.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#lsvLpf)" transform="rotate(67.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#lsvLpf)" transform="rotate(112.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#lsvLpf)" transform="rotate(157.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#lsvLpf)" transform="rotate(202.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#lsvLpf)" transform="rotate(247.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#lsvLpf)" transform="rotate(292.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#lsvLpf)" transform="rotate(337.5 65 65)" />
          <circle cx="65" cy="65" r="15" fill="url(#lsvLcg)" />
          <circle cx="65" cy="65" r="15" stroke="url(#lsvLg)" strokeWidth="1.5" opacity="0.8" />
          <circle cx="65" cy="65" r="9"  fill="url(#lsvLci)" />
          <circle cx="65" cy="65" r="3.5" fill="#FFF7D6" opacity="0.95" />
          <defs>
            <linearGradient id="lsvLg" x1="0" y1="0" x2="130" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#B8860B" />
              <stop offset="50%"  stopColor="#E8C76A" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
            <linearGradient id="lsvLpb" x1="65" y1="15" x2="65" y2="65" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#F9C8D8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="lsvLpf" x1="65" y1="19" x2="65" y2="65" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="40%"  stopColor="#F9C8D8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.55" />
            </linearGradient>
            <radialGradient id="lsvLcg" cx="50%" cy="40%" r="60%">
              <stop offset="0%"   stopColor="#E8C76A" />
              <stop offset="60%"  stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8860B" />
            </radialGradient>
            <radialGradient id="lsvLci" cx="40%" cy="35%" r="65%">
              <stop offset="0%"   stopColor="#FFF7D6" />
              <stop offset="100%" stopColor="#D4AF37" />
            </radialGradient>
          </defs>
        </svg>
        <div className="lsv-lotus-glow" />
      </div>
      <span className="lsv-lotus-line" />
    </div>
    </>
  );
}

// ─── Learn Sri Vidya ──────────────────────────────────────────────────────────
const modules = [
  { label: 'Module 1', title: 'Foundations of Shakta Tantra', lessons: '6 lessons' },
  { label: 'Module 2', title: 'Sri Yantra — Geometry of the Cosmos', lessons: '8 lessons' },
  { label: 'Module 3', title: 'Panchadashi Mantra Initiation', lessons: '10 lessons' },
  { label: 'Module 4', title: 'Navavarana Puja Mastery', lessons: '12 lessons' },
  { label: 'Module 5', title: 'Advanced Upasana & Samadhi', lessons: '9 lessons' },
];
const benefits = [
  'Authentic Diksha pathway from beginner to advanced',
  'Mantra, Yantra & Tantra — the complete triad',
  'Navavarana Puja — step-by-step video guidance',
  'Lalita Sahasranama with meaning & meditation',
  'Live Q&A sessions with the lineage teacher',
  'Lifetime access with regular content updates',
];

export function LearnSriVidyaSection() {
  return (
    <section className="learn section-padding" style={{ background: 'linear-gradient(135deg, var(--dark-surface), var(--dark-bg))' }}>
      <div className="container">
        <ScrollReveal className="text-center mb-64">
          <p className="section-eyebrow">CURRICULUM</p>
          <h2 className="section-title font-cinzel golden-text">Learn Sri Vidya</h2>
          <p className="section-subtitle">A structured, progressive curriculum designed to take you from sincere seeker to accomplished practitioner.</p>
        </ScrollReveal>
        <div className="learn__layout">
          <ScrollReveal className="learn__image-col">
            <div className="learn__image-wrap">
              <img src={mahavidyeswariImg} alt="Sri Vidya" className="learn__image" />
              <div className="learn__image-overlay" />
              <div className="learn__stats">
                {[['45+','Lessons'],['5','Modules'],['30h','Content']].map(([v,l]) => (
                  <div key={l} className="learn__stat">
                    <span className="golden-text font-cinzel" style={{ fontSize: 20, fontWeight: 800 }}>{v}</span>
                    <span style={{ fontSize: 11, color: '#B8A882' }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <div className="learn__content-col">
            <ScrollReveal><h3 className="learn__content-title">Course Overview</h3></ScrollReveal>
            {modules.map((m, i) => (
              <ScrollReveal key={m.label} delay={0.1 + i * 0.08}>
                <motion.div className="learn__module" whileHover={{ backgroundColor: 'var(--dark-card-elevated)' }}>
                  <span className="learn__module-label">{m.label}</span>
                  <span className="learn__module-title">{m.title}</span>
                  <span className="learn__module-lessons">{m.lessons}</span>
                  <FiChevronRight size={16} color="#B8A882" />
                </motion.div>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={0.5}>
              <GlassCard style={{ marginTop: 32 }}>
                <h4 style={{ color: '#E8C76A', marginBottom: 16, fontSize: 15, fontWeight: 600 }}>What You Will Gain</h4>
                {benefits.map((b) => (
                  <div key={b} className="learn__benefit">
                    <FiStar size={14} color="#E8C76A" />
                    <span>{b}</span>
                  </div>
                ))}
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
                <GoldenButton label="START LEARNING" />
                <GoldenButton label="VIEW CURRICULUM" outlined />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Featured Courses ─────────────────────────────────────────────────────────
export function FeaturedCoursesSection() {
  const navigate = useNavigate();
  return (
    <section className="featured section-padding featured--cream">
      <div className="container">
        <ScrollReveal className="text-center mb-60">
          <p className="section-eyebrow">SACRED KNOWLEDGE</p>
          <h2 className="section-title font-cinzel golden-text">Featured Courses</h2>
          <p className="section-subtitle">Explore our curated collection of spiritual courses designed to guide you on your path to enlightenment.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="featured__grid">
            {courses.map((c, i) => (
              <motion.div
                key={c.id}
                className="cp-card"
                whileHover={{ y: -8, boxShadow: '0 28px 64px rgba(123,30,58,0.13), 0 0 36px rgba(184,134,11,0.18)' }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="cp-card__accent" />
                <div className={`cp-card__thumb${c.id === 'ganapathyam' ? ' cp-card__thumb--contain' : ''}`}>
                  <motion.img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className={`cp-card__img${c.id === 'ganapathyam' ? ' cp-card__img--contain' : ''}`}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </div>
                <div className="cp-card__body">
                  <h3 className="cp-card__title font-cinzel">{c.title}</h3>
                  <div className="cp-card__rule">
                    <span className="cp-card__rule-line" />
                    <span className="cp-card__rule-dot" />
                    <span className="cp-card__rule-line" />
                  </div>
                  <p className="cp-card__desc font-serif">{c.desc}</p>
                  <GoldenButton
                    label="Know More"
                    size="md"
                    onClick={() => navigate(c.path)}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.4} className="text-center" style={{ marginTop: 48 }}>
          <GoldenButton label="VIEW ALL COURSES" outlined onClick={() => navigate('/courses')} />
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── Śrāvaṇa Events Notification Card (compact, near Hero) ────────────────
const SRAVANA_NOTIFICATION_EXPIRY = new Date('2026-08-28T23:59:59');

export function DivineEventsNotificationCard() {
  const navigate = useNavigate();
  const [dismissed, setDismissed] = useState(false);

  // Automatically hide the notification once the Śrāvaṇa event period has passed.
  // Visible through 28 August 2026; disappears automatically after that date.
  if (new Date() > SRAVANA_NOTIFICATION_EXPIRY) return null;
  if (dismissed) return null;

  const goToSravana = () => navigate('/events#sravana-events');
  const goToLakshmi = () => navigate('/events#sravana-events');

  const handleClose = (e) => {
    e.stopPropagation();
    setDismissed(true);
  };

  return (
    <motion.div
      className="divine-events-notification"
      role="complementary"
      aria-label="Upcoming Spiritual Events"
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <GlassCard
        className="divine-events-notification__card"
        borderRadius={18}
        hoverable={false}
        style={{
          maxWidth: 340,
          width: '100%',
          padding: 22,
          background: 'rgba(255, 248, 238, 0.88)',
          border: '1px solid rgba(212, 175, 55, 0.45)',
          boxShadow: '0 12px 48px rgba(74, 15, 34, 0.12), 0 0 28px rgba(212, 175, 55, 0.10)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          cursor: 'default',
        }}
      >
        <button
          type="button"
          className="divine-events-notification__close"
          onClick={handleClose}
          aria-label="Close notification"
        >
          ✕
        </button>

        <div className="divine-events-notification__inner">

          {/* ── EVENT 1 — Śrāvaṇa Ārādhanas ── */}
          <div
            className="divine-events-notification__event"
            role="button"
            tabIndex={0}
            onClick={goToSravana}
            onKeyDown={(e) => { if (e.key === 'Enter') goToSravana(); }}
          >
            <div className="divine-events-notification__head">
              <span className="divine-events-notification__ornament" aria-hidden="true">✦</span>
              <span className="divine-events-notification__label">ŚRĀVAṆA ĀRĀDHANAS</span>
            </div>

            <h4 className="divine-events-notification__heading font-cinzel">
              Śrāvaṇa Ārādhanas
            </h4>

            <p className="divine-events-notification__desc font-cormorant">
              Sacred Ārādhanas and special spiritual practices conducted throughout the holy month of Śrāvaṇa, dedicated to prosperity, knowledge, health, and divine blessings.
            </p>

            <p className="divine-events-notification__date">14 – 28 August</p>

            <div className="divine-events-notification__btns">
              <GoldenButton
                label="View All Ārādhanas"
                size="sm"
                noOrnaments
                onClick={(e) => {
                  e.stopPropagation();
                  goToSravana();
                }}
              />
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="divine-events-notification__divider" aria-hidden="true">
            <span className="divine-events-notification__divider-line" />
            <span className="divine-events-notification__divider-dot">◆</span>
            <span className="divine-events-notification__divider-line" />
          </div>

          {/* ── EVENT 2 — Śrī Mahālakṣmī Sādhanas ── */}
          <div
            className="divine-events-notification__event"
            role="button"
            tabIndex={0}
            onClick={goToLakshmi}
            onKeyDown={(e) => { if (e.key === 'Enter') goToLakshmi(); }}
          >
            <div className="divine-events-notification__head">
              <span className="divine-events-notification__ornament" aria-hidden="true">✿</span>
              <span className="divine-events-notification__label">ŚRĪ MAHĀLAKṢMĪ SĀDHANAS</span>
            </div>

            <h4 className="divine-events-notification__heading font-cinzel">
              Śrī Mahālakṣmī Sādhanas
            </h4>

            <p className="divine-events-notification__subtitle font-cinzel">
              Sacred Sādhanas for Prosperity, Abundance &amp; Divine Grace
            </p>

            <p className="divine-events-notification__desc font-cormorant">
              Experience sacred Śrī Mahālakṣmī Sādhanas rooted in authentic tradition and Guru Paramparā, offered for spiritual growth, prosperity, abundance, and divine grace.
            </p>

            <div className="divine-events-notification__btns">
              <GoldenButton
                label="View Śrī Mahālakṣmī Sādhanas"
                size="sm"
                noOrnaments
                onClick={(e) => {
                  e.stopPropagation();
                  goToLakshmi();
                }}
              />
            </div>
          </div>

        </div>
      </GlassCard>
    </motion.div>
  );
}

// ─── Events Preview ───────────────────────────────────────────────────────────
const SRAVANA_CATEGORY = {
  lakshmi: 'Ārādhana',
  siva: 'Abhiṣeka',
  gauri: 'Vratam',
  pradosha: 'Vratam',
};

function sravanaShortAbout(about) {
  const cut = about.slice(0, 118);
  const lastSpace = cut.lastIndexOf(' ');
  const text = lastSpace > 70 ? cut.slice(0, lastSpace) : cut;
  return `${text}…`;
}

export function EventsPreviewSection() {
  const navigate = useNavigate();

  const openEvent = (anchor) => navigate(`/events#${anchor}`);

  return (
    <>
    <section className="events-section">
      <div className="events-section__container">
        <ScrollReveal>
          <div className="events-section__header">
            <div>
              <p className="events-section__eyebrow">ŚRĀVAṆA 2026 · SACRED EVENTS</p>
              <h2 className="events-section__title font-cinzel">Śrāvaṇa Special Events</h2>
            </div>
            <GoldenButton label="VIEW ALL EVENTS" outlined onClick={() => navigate('/events')} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="sve-preview__grid">
            {SRAVANA_2026_EVENTS.map((event) => (
              <motion.div
                key={event.anchor}
                className="sve-preview-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="sve-preview-card__top">
                  <span className="sve-preview-card__date">
                    <span className="sve-preview-card__date-dot" aria-hidden="true" />
                    {event.weekday} • {event.date}
                  </span>
                  <span className="sve-preview-card__cat">{SRAVANA_CATEGORY[event.theme]}</span>
                </div>
                <h4 className="sve-preview-card__title font-cinzel">{event.title}</h4>
                <p className="sve-preview-card__desc font-serif">
                  {sravanaShortAbout(event.about)}
                </p>
                <div className="sve-preview-card__footer">
                  <GoldenButton
                    label="About / More Details"
                    size="sm"
                    noOrnaments
                    onClick={() => openEvent(event.anchor)}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
    <LotusConnector id="evtBlg" bg="maroon" />
    </>
  );
}

// ─── Blog Preview ─────────────────────────────────────────────────────────────
export function BlogPreviewSection() {
  const navigate = useNavigate();
  return (
    <>
    <section className="blog-section">
      <div className="blog-section__container">
        <ScrollReveal>
          <div className="blog-section__header">
            <div>
              <p className="blog-section__eyebrow">SACRED WRITINGS</p>
              <h2 className="blog-section__title font-cinzel">From the Blog</h2>
            </div>
            <GoldenButton label="VIEW ALL POSTS" outlined onClick={() => navigate('/blog')} />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="blog-section__grid">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.div key={post.id} className="blog-card blog-card--coming-soon" whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(90,16,37,0.12), 0 0 28px rgba(184,134,11,0.16)' }}>
                <div className="blog-card__thumb">
                  <img src={post.thumbnail} alt={post.title} loading="lazy" />
                  <span className="blog-card__cat">{post.category}</span>
                </div>
                <div className="blog-card__body">
                  <h4 className="blog-card__title">{post.title}</h4>
                  <span className="blog-card__coming-soon">Coming Soon</span>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
    <LotusConnector id="blgWhy" bg="cream" />
    </>
  );
}
// --- Workshops Showcase ---
const HOME_WORKSHOPS = [
  {
    id: 'narayani-vidya',
    title: 'N\u0101r\u0101ya\u1E47\u012B Vidy\u0101',
    desc: 'N\u0101r\u0101ya\u1E47\u012B Vidy\u0101 is the sacred wisdom of the Divine Mother as N\u0101r\u0101ya\u1E47\u012B, the Supreme \u015Aakti who sustains, protects, and governs the universe with boundless compassion and strength.',
    image: narayaniImg,
    path: '/workshops',
  },
  {
    id: 'dhanvantari-vidya',
    title: 'Dhanvantari Vidy\u0101',
    desc: 'Dhanvantari Vidy\u0101 is the sacred wisdom of Bhagavan Dhanvantari, the Divine Physician and the eternal source of Ayurveda, offering timeless principles of holistic health and spiritual healing.',
    image: dhanvantariImg,
    path: '/workshops',
  },
  {
    id: 'ashta-lakshmi-vidya',
    title: 'A\u1E63\u1E6Da Lak\u1E63m\u012B Vidy\u0101',
    desc: 'A\u1E63\u1E6Da Lak\u1E63m\u012B Vidy\u0101 approaches Goddess Lakshmi not as a single blessing, but as eight living streams of abundance that nourish every dimension of life.',
    image: ashtaLakshmiImg,
    path: '/workshops/ashta-lakshmi-vidya',
  },
  {
    id: 'dasa-maha-vidyas',
    title: 'Da\u015Ba Mah\u0101vidy\u0101s',
    desc: 'Step into the profound world of the Da\u015Ba Mah\u0101vidy\u0101s, the Ten Wisdom Goddesses who govern every aspect of cosmic reality through their symbolism and mantra traditions.',
    image: dasaMahavidyasImg,
    path: '/workshops/dasa-maha-vidyas',
  },
];

export function WorkshopsShowcaseSection() {
  const navigate = useNavigate();
  return (
    <section className="hp-workshops">
      <div className="hp-workshops__texture" aria-hidden="true" />
      <div className="hp-workshops__inner">
        <ScrollReveal>
          <div className="hp-workshops__header">
            <p className="hp-workshops__eyebrow">{'\u2728'} Live Workshops</p>
            <h2 className="hp-workshops__title font-cinzel">Immersive Experiences</h2>
            <p className="hp-workshops__subtitle font-serif">
              Explore authentic spiritual workshops rooted in Guru Parampara and traditional \u015A\u0101stric wisdom.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="hp-workshops__grid">
            {HOME_WORKSHOPS.map((w, i) => (
              <motion.div
                key={w.id}
                className="hp-ws-card"
                whileHover={{ y: -8, boxShadow: '0 28px 64px rgba(0,0,0,0.35), 0 0 36px rgba(212,175,55,0.18)' }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={() => navigate(w.path)}
                style={{ cursor: 'pointer' }}
              >
                <div className="hp-ws-card__img-wrap">
                  <img src={w.image} alt={w.title} className="hp-ws-card__img" loading="lazy" />
                  <div className="hp-ws-card__img-overlay" />
                </div>
                <div className="hp-ws-card__body">
                  <h3 className="hp-ws-card__title font-cinzel">{w.title}</h3>
                  <p className="hp-ws-card__desc font-serif">{w.desc}</p>
                  <div className="hp-ws-card__footer">
                    <GoldenButton
                      label="Register Now"
                      onClick={(e) => { e.stopPropagation(); navigate(w.path); }}
                    />
                  </div>
                </div>
                <div className="hp-ws-card__topbar" />
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="hp-workshops__cta-row">
          <GoldenButton label="ALL WORKSHOPS" outlined onClick={() => navigate('/workshops')} />
        </ScrollReveal>
      </div>
    </section>
  );
}




// ─── Offerings Showcase ───────────────────────────────────────────────────────
const OFFERING_CARDS = [
  {
    id: 'homa',
    image: homamImg,
    title: 'Homa',
    description: 'Homa is the sacred act of feeding the devas through fire with mantra and offerings, inviting divine grace, purification, protection, and spiritual transformation.',
  },
  {
    id: 'tarpana',
    image: tarpanaImg,
    title: 'Tarpana',
    description: 'Tarpana is the sacred offering of water and other liquids to the devas, expressing gratitude, reverence, and devotion while invoking divine blessings and inner peace.',
  },
  {
    id: 'yantra',
    image: yantraImg,
    title: 'Yantra Puja',
    description: 'Yantra Puja is the worship of the sacred Yantra through mantra, offerings, and meditation, awakening it as the living seat of the Divine Mother.',
  },
];

export function OfferingsShowcaseSection() {
  const navigate = useNavigate();
  return (
    <>
    <section className="off">
      <div className="off__pattern" aria-hidden="true" />
      <div className="off__container">
        <ScrollReveal className="off__header">
          <p className="off__eyebrow">
            <span className="off__eyebrow-star">❖</span>
            SACRED OFFERINGS
            <span className="off__eyebrow-star">❖</span>
          </p>
          <h2 className="off__title font-cinzel">
            Sacred <span className="off__gold">Offerings</span>
          </h2>
          <div className="off__divider">
            <span className="off__divider-line" />
            <span className="off__divider-diamond" />
            <span className="off__divider-line" />
          </div>
          <p className="off__subtitle font-cormorant">
            Experience authentic Vedic and Tantric rituals performed according to the sacred Guru Parampara.
          </p>
        </ScrollReveal>
        <div className="off__grid">
          {OFFERING_CARDS.map((card, i) => (
            <ScrollReveal key={card.id} delay={i * 0.12}>
              <motion.div
                className="off-card"
                whileHover={{ y: -8, boxShadow: '0 28px 64px rgba(123,30,58,0.13), 0 0 36px rgba(184,134,11,0.18)' }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="off-card__accent" />
                <div className="off-card__thumb">
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="off-card__img"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </div>
                <div className="off-card__body">
                  <h3 className="off-card__title font-cinzel">{card.title}</h3>
                  <div className="off-card__rule">
                    <span className="off-card__rule-line" />
                    <span className="off-card__rule-dot" />
                    <span className="off-card__rule-line" />
                  </div>
                  <p className="off-card__desc font-cormorant">{card.description}</p>
                  <GoldenButton label="Know More" size="md" onClick={() => navigate('/offerings')} />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <LotusConnector id="offEvt" bg="cream" />
    </>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────
const features = [
  { icon: <Flower2 size={24} />, title: 'Ancient Wisdom', desc: 'Teachings rooted in authentic Vedic traditions passed down through generations.' },
  { icon: <MonitorPlay size={24} />, title: 'HD Video Quality', desc: 'Crystal-clear video lessons with adaptive streaming for any connection.' },
  { icon: <GraduationCap size={24} />, title: 'Expert Instructors', desc: 'Learn from realized masters and experienced spiritual teachers.' },
  { icon: <Globe size={24} />, title: 'Learn Anywhere', desc: 'Access your courses on any device, anytime, anywhere in the world.' },
  { icon: <Award size={24} />, title: 'Certificates', desc: 'Earn recognized certificates upon completing your spiritual courses.' },
  { icon: <HeadphonesIcon size={24} />, title: '24/7 Support', desc: 'Dedicated spiritual guidance and technical support always available.' },
];

export function WhyChooseUsSection() {
  return (
    <>
    <section className="why-us section-padding" style={{ background: 'linear-gradient(135deg, #2B0615 0%, #4A0F22 100%)' }}>
      <div className="container">
        <ScrollReveal className="text-center mb-60">
          <p className="section-eyebrow">WHY CHOOSE US</p>
          <h2 className="section-title font-cinzel golden-text">The Premium Difference</h2>
        </ScrollReveal>
        <div className="why-us__grid">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <motion.div className="why-us__card" whileHover={{ y: -8, borderColor: 'rgba(184,134,11,0.5)', boxShadow: '0 0 30px rgba(184,134,11,0.2)' }}>
                <motion.div className="why-us__icon" whileHover={{ background: 'linear-gradient(135deg, #B8860B, #E8C76A)' }}>
                  {f.icon}
                </motion.div>
                <h4 className="why-us__title">{f.title}</h4>
                <p className="why-us__desc">{f.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <LotusConnector id="whyTst" bg="maroon" />
    </>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export function TestimonialsSection() {
  return (
    <>
    <section className="testimonials-section">
      <div className="testimonials-section__container">
        <ScrollReveal className="testimonials-section__header">
          <p className="testimonials-section__eyebrow">TESTIMONIALS</p>
          <h2 className="testimonials-section__title font-cinzel">What Our Students Say</h2>
        </ScrollReveal>
        <div className="testimonials-section__grid">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <motion.div className="testimonial-card-new" whileHover={{ y: -6 }}>
                <div className="testimonial-card-new__stars">
                  {[1,2,3,4,5].map((s) => s <= Math.floor(t.rating) ? <FaStar key={s} size={16} color="#D4AF37" /> : <FaStarHalfAlt key={s} size={16} color="#D4AF37" />)}
                </div>
                <p className="testimonial-card-new__text">&quot;{t.text}&quot;</p>
                <div className="testimonial-card-new__author">
                  <div className="testimonial-card-new__avatar">{t.name[0]}</div>
                  <div>
                    <p className="testimonial-card-new__name">{t.name}</p>
                    <p className="testimonial-card-new__location">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <LotusConnector id="tstFaq" bg="cream" />
    </>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
const WA_NUMBER = '919390886029';
const CONTACT_EMAIL = 'srividyesvaritantram@gmail.com';

const contactInfoItems = [
  {
    icon: <FiMapPin size={18} />,
    title: 'Location',
    value: 'Sri MahaVidyesvari Tantra Peetham\nVisakhapatnam\nAndhra Pradesh, India',
    href: null,
  },
  {
    icon: <FiMail size={18} />,
    title: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: <FiMessageCircle size={18} />,
    title: 'WhatsApp',
    value: '+91 93908 86029',
    href: `https://wa.me/${WA_NUMBER}`,
    iconCls: 'contact__info-icon--wa',
  },
  {
    icon: <FiInstagram size={18} />,
    title: 'Instagram',
    value: '@sri_mahavidyesvari_tantra',
    href: 'https://instagram.com/sri_mahavidyesvari_tantra',
  },
];

const quickActions = [
  {
    label: 'Chat on WhatsApp',
    icon: '💬',
    cls: 'contact__action-btn--wa',
    href: `https://wa.me/${WA_NUMBER}`,
  },
  {
    label: 'Send Email',
    icon: '✉️',
    cls: 'contact__action-btn--email',
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    label: 'Follow Instagram',
    icon: '📷',
    cls: 'contact__action-btn--ig',
    href: 'https://instagram.com/sri_mahavidyesvari_tantra',
  },
  {
    label: 'View Location',
    icon: '📍',
    cls: 'contact__action-btn--map contact__action-btn--disabled',
    href: null,
    comingSoon: true,
  },
];

export function ContactSection() {
  const EMPTY = { name: '', email: '', phone: '', subject: '', message: '' };
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())                          e.name    = 'Full name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required';
    if (!/^[+\d\s\-()]{7,15}$/.test(form.phone))   e.phone   = 'Valid phone number is required';
    if (!form.subject.trim())                       e.subject = 'Subject is required';
    if (!form.message.trim())                       e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildWAText = () => {
    const msg =
      `Namaste 🙏\n\nNew Enquiry from Sri MahaVidyesvari Tantra Peetham Website\n\n` +
      `Name:\n${form.name}\n\n` +
      `Email:\n${form.email}\n\n` +
      `Phone:\n${form.phone}\n\n` +
      `Subject:\n${form.subject}\n\n` +
      `Message:\n${form.message}`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const buildMailto = () => {
    const body =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Subject: ${form.subject}\n\n` +
      `Message:\n${form.message}`;
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Website Contact Form')}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!validate()) return;
    window.open(buildWAText(), '_blank');
  };

  const handleEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;
    window.open(buildMailto(), '_blank');
  };

  return (
    <>
    <section className="contact-section">
      <div className="container">
        <ScrollReveal className="text-center mb-64">
          <p className="section-eyebrow">GET IN TOUCH</p>
          <h2 className="section-title font-cinzel golden-text">Contact Us</h2>
          <p className="section-subtitle">Have questions about our courses or spiritual path? We are here to guide you.</p>
        </ScrollReveal>

        <div className="contact__layout">

          {/* ── LEFT: Form ── */}
          <ScrollReveal className="contact__form-col">
            <GlassCard borderRadius={28}>
              <form className="contact__form" onSubmit={(e) => e.preventDefault()} noValidate>
                <h3 className="contact__form-title">Send a Message</h3>

                <div className="contact__row">
                  <div className="contact__field">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={form.name}
                      onChange={set('name')}
                      className={errors.name ? 'contact__input--error' : ''}
                    />
                    {errors.name && <span className="contact__error">{errors.name}</span>}
                  </div>
                  <div className="contact__field">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={set('email')}
                      className={errors.email ? 'contact__input--error' : ''}
                    />
                    {errors.email && <span className="contact__error">{errors.email}</span>}
                  </div>
                </div>

                <div className="contact__row">
                  <div className="contact__field">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 xxxxxxxxxxx"
                      value={form.phone}
                      onChange={set('phone')}
                      className={errors.phone ? 'contact__input--error' : ''}
                    />
                    {errors.phone && <span className="contact__error">{errors.phone}</span>}
                  </div>
                  <div className="contact__field">
                    <label>Subject</label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      value={form.subject}
                      onChange={set('subject')}
                      className={errors.subject ? 'contact__input--error' : ''}
                    />
                    {errors.subject && <span className="contact__error">{errors.subject}</span>}
                  </div>
                </div>

                <div className="contact__field">
                  <label>Message</label>
                  <textarea
                    rows={5}
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={set('message')}
                    className={errors.message ? 'contact__input--error' : ''}
                  />
                  {errors.message && <span className="contact__error">{errors.message}</span>}
                </div>

                <div className="contact__form-btns">
                  <GoldenButton label="Send via WhatsApp" size="md" icon={FiMessageCircle} onClick={handleWhatsApp} />
                  <GoldenButton label="Send via Email" size="md" icon={FiMail} outlined onClick={handleEmail} />
                </div>
              </form>
            </GlassCard>
          </ScrollReveal>

          {/* ── RIGHT: Info + Quick Actions ── */}
          <ScrollReveal delay={0.2} className="contact__info-col">

            {/* Contact info card */}
            <GlassCard>
              {contactInfoItems.map((item) => (
                <div key={item.title} className="contact__info-row">
                  <div className={`contact__info-icon ${item.iconCls || ''}`}>{item.icon}</div>
                  <div>
                    <p className="contact__info-title">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="contact__info-value contact__info-value--link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact__info-value" style={{ whiteSpace: 'pre-line' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </GlassCard>

            {/* Quick action buttons */}
            <div className="contact__actions">
              {quickActions.map((a) => (
                <motion.button
                  key={a.label}
                  className={`contact__action-btn ${a.cls}`}
                  onClick={() => !a.comingSoon && a.href && window.open(a.href, a.href.startsWith('mailto') ? '_self' : '_blank')}
                  whileHover={!a.comingSoon ? { y: -3, boxShadow: '0 10px 28px rgba(184,134,11,0.25)' } : {}}
                  whileTap={!a.comingSoon ? { scale: 0.97 } : {}}
                  transition={{ duration: 0.22 }}
                  disabled={!!a.comingSoon}
                >
                  <span className="contact__action-icon">{a.icon}</span>
                  <span className="contact__action-label">{a.label}</span>
                  {a.comingSoon && <span className="contact__action-soon">Coming Soon</span>}
                </motion.button>
              ))}
            </div>

          </ScrollReveal>
        </div>
      </div>
    </section>
    <LotusConnector id="cntCta" bg="cream" />
    </>
  );
}

// ─── Newsletter ───────────────────────────────────────────────────────────────
export function NewsletterSection() {
  const navigate = useNavigate();
  return (
    <section className="final-cta">
      <div className="final-cta__container">
        <ScrollReveal>
          <h2 className="final-cta__title font-cinzel">Begin Your Spiritual Journey Today</h2>
          <p className="final-cta__desc font-serif">
            Join thousands of sincere seekers and begin your authentic journey into Sri Vidya through Guru-guided teachings, sacred courses, workshops, and traditional spiritual practices at Sri Mahavidyesvari Tantra Peetham.
          </p>
          <div className="final-cta__btns">
            <GoldenButton label="Explore Sri Vidya" size="lg" onClick={() => navigate('/courses')} />
            <GoldenButton label="Contact Us" size="lg" outlined onClick={() => navigate('/contact')} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'What is Sri Vidya?', a: 'Sri Vidya is the highest form of Shakta Tantra — a complete spiritual science integrating mantra, yantra, and tantra for the direct experience of the Divine Mother.' },
  { q: 'Do I need prior experience to join?', a: 'No. Our courses are structured for all levels — from complete beginners to advanced practitioners. Each course clearly states its prerequisites.' },
  { q: 'Are the teachings authentic and lineage-based?', a: 'Yes. All teachings flow from an unbroken Guru Parampara spanning over twelve centuries. Nothing is taught outside the traditional framework.' },
  { q: 'Can I access courses on mobile?', a: 'Absolutely. Our platform is fully responsive and works seamlessly on all devices — mobile, tablet, and desktop.' },
  { q: 'What language are the courses in?', a: 'Courses are available in English, Tamil, and Sanskrit. Each course listing clearly mentions the language.' },
  { q: 'How do I get initiated (Diksha)?', a: 'Diksha is offered through our live workshops and personal guidance sessions. Contact us to learn about the initiation pathway.' },
];

export function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <>
    <section className="faq-section">
      <div className="faq-section__container">
        <ScrollReveal className="faq-section__header">
          <p className="faq-section__eyebrow">HAVE QUESTIONS?</p>
          <h2 className="faq-section__title font-cinzel">Frequently Asked Questions</h2>
          <p className="faq-section__subtitle">Everything you need to know before beginning your sacred journey.</p>
        </ScrollReveal>
        <div className="faq-section__list">
          {faqs.map((f, i) => (
            <ScrollReveal key={f.q} delay={i * 0.07}>
              <motion.div
                className={`faq-item ${open === i ? 'faq-item--open' : ''}`}
                onClick={() => setOpen(open === i ? null : i)}
                whileHover={{ borderColor: 'rgba(212,175,55,0.55)' }}
              >
                <div className="faq-item__question">
                  <span>{f.q}</span>
                  <motion.span
                    className="faq-item__icon"
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >+</motion.span>
                </div>
                {open === i && (
                  <motion.p
                    className="faq-item__answer"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >{f.a}</motion.p>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <LotusConnector id="faqCnt" bg="maroon" />
    </>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
const footerLinks = [
  {
    title: 'Courses',
    links: [
      { label: 'Sri Vidya',    href: '/courses/sri-vidya' },
      { label: 'Chandi Vidya', href: '/courses/chandi-vidya' },
      { label: 'Shaivam',      href: '/courses/shaivam' },
      { label: 'Vaishnavam',   href: '/courses/vaishnavam' },
      { label: 'Gāṇapatyam',   href: '/courses/ganapathyam' },
      { label: 'Skaandam',     href: '/courses/skaandam' },
    ],
  },
  {
    title: 'Workshops',
    links: [
      { label: 'Nārāyaṇī Vidyā',    href: '/workshops' },
      { label: 'Dhanvantari Vidyā',  href: '/workshops' },
      { label: 'Aṣṭa Lakṣmī Vidyā', href: '/workshops/ashta-lakshmi-vidya' },
      { label: 'Daśa Mahāvidyās',    href: '/workshops/dasa-maha-vidyas' },
      { label: 'Kṣipra Gaṇapati',    href: '/workshops/kshipra-ganapati' },
    ],
  },
  {
    title: 'Offerings',
    links: [
      { label: 'Astrology',           href: '/offerings/astrology' },
      { label: 'Temple Śilpa Śāstra', href: '/offerings/temple-shilpa-sastra' },
      { label: 'Homas',               href: '/offerings/homas' },
      { label: 'Archana',             href: '/offerings/archana' },
      { label: 'Abhishekam',          href: '/offerings/abhishekam' },
      { label: 'Yantra Pūjā',         href: '/offerings/yantra-puja' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'About',            href: '/about' },
      { label: 'Contact',          href: '/contact' },
      { label: 'Blog',             href: '/blog' },
      { label: 'Events',           href: '/events' },
      { label: 'FAQ',              href: '/about/faqs' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

const socialLinks = [
  { icon: <FiYoutube size={18} />,       label: 'YouTube',   href: 'https://youtube.com',                             cls: 'footer__social--yt' },
  { icon: <FiInstagram size={18} />,     label: 'Instagram', href: 'https://instagram.com/sri_mahavidyesvari_tantra', cls: 'footer__social--ig' },
  { icon: <FiFacebook size={18} />,      label: 'Facebook',  href: 'https://facebook.com',                            cls: 'footer__social--fb' },
  { icon: <FiMessageCircle size={18} />, label: 'WhatsApp',  href: 'https://chat.whatsapp.com/KOxlAGgqOzJDz8JbW6LUKy', cls: 'footer__social--wa' },
];

export function FooterSection() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* ── TOP ROW ── */}
        <div className="footer__top">

          {/* Brand column */}
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <img src={logoImg} alt="Sri Mahavidyesvari" className="footer__brand-om-img" />
              <h3 className="footer__brand-name font-cinzel">Sri Mahavidyesvari</h3>
            </div>
            <p className="footer__brand-tagline font-cinzel">Tantra Peetham</p>
            <p className="footer__brand-desc">
              A sacred institution preserving the authentic Guru Parampara,
              Sri Vidya, and Sanatana Dharma through traditional learning
              and disciplined practice.
            </p>
            {/* Social icons */}
            <div className="footer__socials">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`footer__social ${s.cls}`}
                  aria-label={s.label}
                  whileTap={{ scale: 0.94 }}
                  transition={{ duration: 0.20 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="footer__col">
              <h4 className="footer__col-title font-cinzel">{col.title}</h4>
              <div className="footer__col-rule" />
              <ul className="footer__col-list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <motion.button
                      className="footer__col-link"
                      onClick={() => navigate(link.href)}
                      whileHover={{ x: 4, color: '#E8C76A' }}
                      transition={{ duration: 0.18 }}
                    >
                      <span className="footer__link-dot" />
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="footer__col footer__col--contact">
            <h4 className="footer__col-title font-cinzel">Contact</h4>
            <div className="footer__col-rule" />
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <FiMapPin size={14} className="footer__contact-icon" />
                <span>Sri MahaVidyesvari Tantra Peetham<br />Visakhapatnam<br />Andhra Pradesh, India</span>
              </li>
              <li className="footer__contact-item">
                <FiMail size={14} className="footer__contact-icon" />
                <a href="mailto:srividyesvaritantram@gmail.com" className="footer__contact-link">srividyesvaritantram@gmail.com</a>
              </li>
              <li className="footer__contact-item">
                <FiMessageCircle size={14} className="footer__contact-icon footer__contact-icon--wa" />
                <a href="https://wa.me/919390886029" target="_blank" rel="noopener noreferrer" className="footer__contact-link">+91 93908 86029</a>
              </li>
              <li className="footer__contact-item">
                <FiInstagram size={14} className="footer__contact-icon" />
                <a href="https://instagram.com/sri_mahavidyesvari_tantra" target="_blank" rel="noopener noreferrer" className="footer__contact-link">@sri_mahavidyesvari_tantra</a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── DIVIDER ── */}
        <div className="footer__divider">
          <span className="footer__divider-line" />
          <img src={logoImg} alt="" className="footer__divider-om-img" />
          <span className="footer__divider-line" />
        </div>

        {/* ── BOTTOM ROW ── */}
        <div className="footer__bottom">
          <p className="footer__copy">© 2026 Sri MahaVidyesvari Tantra Peetham. All Rights Reserved.</p>
          <div className="footer__bottom-links">
            <motion.button className="footer__bottom-link" onClick={() => navigate('/privacy')} whileHover={{ color: '#E8C76A' }} transition={{ duration: 0.18 }}>Privacy Policy</motion.button>
            <span className="footer__bottom-sep">·</span>
            <motion.button className="footer__bottom-link" onClick={() => navigate('/terms')} whileHover={{ color: '#E8C76A' }} transition={{ duration: 0.18 }}>Terms of Service</motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
}
