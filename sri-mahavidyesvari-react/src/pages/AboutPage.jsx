import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.jsx';
import ScrollReveal from '../components/common/ScrollReveal.jsx';
import GoldenButton from '../components/common/GoldenButton.jsx';
import aboutHeroImg from '../assets/about_hero.png';
import aboutPageImg  from '../assets/about_page.png';
import dattatreyaImg from '../assets/dathathreya.png';
import ardhanariswariImg from '../assets/ardhanariswari.png';
import whyTantraImg from '../assets/why_tantra.png';
import guruSuryaImg     from '../assets/guru_surya.png';
import guruChandraImg   from '../assets/guru_chandra.png';
import guruAgniImg      from '../assets/guru_agni.png';
import guruKuberaImg    from '../assets/guru_kubera.png';
import guruIndraImg     from '../assets/guru_indra.png';
import guruBrahmaImg    from '../assets/guru_brahma.png';
import guruMaheshaImg   from '../assets/guru_mahesha.png';
import guruMurariImg    from '../assets/guru_murari.png';
import guruAgasthyaImg  from '../assets/guru_agasthya.png';
import guruSkandhaImg   from '../assets/guru_skandha.png';
import guruAnangaImg    from '../assets/guru_ananga.png';
import guruLopamudraImg from '../assets/guru_lopamudra.png';
import { FooterSection } from './Home/HomeSections.jsx';
import './AboutPage.css';

function LotusDividerIcon({ id = 'ap-divider-icon' }) {
  return (
    <svg
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ap-divider__icon"
      aria-hidden="true"
    >
      <circle cx="65" cy="65" r="62" stroke={`url(#${id}g)`} strokeWidth="1.3" opacity="0.45" />
      <circle cx="65" cy="65" r="52" stroke={`url(#${id}g)`} strokeWidth="0.9" opacity="0.30" />
      <ellipse cx="65" cy="35" rx="7.5" ry="20" fill={`url(#${id}pf)`} opacity="0.95" transform="rotate(0 65 65)" />
      <ellipse cx="65" cy="35" rx="7.5" ry="20" fill={`url(#${id}pf)`} opacity="0.85" transform="rotate(45 65 65)" />
      <ellipse cx="65" cy="35" rx="7.5" ry="20" fill={`url(#${id}pf)`} opacity="0.85" transform="rotate(90 65 65)" />
      <ellipse cx="65" cy="35" rx="7.5" ry="20" fill={`url(#${id}pf)`} opacity="0.85" transform="rotate(135 65 65)" />
      <ellipse cx="65" cy="35" rx="7.5" ry="20" fill={`url(#${id}pf)`} opacity="0.85" transform="rotate(180 65 65)" />
      <ellipse cx="65" cy="35" rx="7.5" ry="20" fill={`url(#${id}pf)`} opacity="0.85" transform="rotate(225 65 65)" />
      <ellipse cx="65" cy="35" rx="7.5" ry="20" fill={`url(#${id}pf)`} opacity="0.85" transform="rotate(270 65 65)" />
      <ellipse cx="65" cy="35" rx="7.5" ry="20" fill={`url(#${id}pf)`} opacity="0.85" transform="rotate(315 65 65)" />
      <circle cx="65" cy="65" r="18" fill={`url(#${id}cg)`} />
      <circle cx="65" cy="65" r="18" stroke={`url(#${id}g)`} strokeWidth="1.3" opacity="0.7" />
      <circle cx="65" cy="65" r="10" fill={`url(#${id}ci)`} />
      <circle cx="65" cy="65" r="4" fill="#FFF7D6" opacity="0.95" />
      <defs>
        <linearGradient id={`${id}g`} x1="0" y1="0" x2="130" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="50%" stopColor="#E8C76A" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id={`${id}pf`} x1="65" y1="15" x2="65" y2="65" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id={`${id}cg`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E8C76A" />
          <stop offset="60%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        <radialGradient id={`${id}ci`} cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFF7D6" />
          <stop offset="100%" stopColor="#D4AF37" />
        </radialGradient>
      </defs>
    </svg>
  );
}

const timeline = [
  { year: '8th C',  event: 'Adi Shankaracharya revives Sri Vidya across India' },
  { year: '10th C', event: 'Abhinavagupta systematizes Kashmir Shaivism' },
  { year: '18th C', event: 'Bhaskararaya writes definitive Sri Vidya commentaries' },
  { year: '20th C', event: 'Swami Sivananda spreads Shakti Upasana globally' },
  { year: 'Today',  event: 'Sri Mahavidyesvari carries the living flame forward' },
];

const whySriVidya = [
  { icon: '🌸', title: 'Supreme Shakti',    text: 'Sri Vidya is the highest form of Devi worship, leading to liberation through grace.' },
  { icon: '🔯', title: 'Sacred Geometry',   text: 'The Sri Yantra encodes the entire cosmos in a single diagram of divine proportion.' },
  { icon: '📿', title: 'Mantra Science',    text: 'The Panchadashi and Shodashi mantras are the most potent in the Vedic tradition.' },
  { icon: '🧘', title: 'Complete Path',     text: 'Integrates jnana, bhakti, and kriya into one unified path of awakening.' },
];

const pillars = [
  { icon: '👁', title: 'Our Vision',   text: 'A world where every sincere seeker has access to authentic, lineage-based spiritual wisdom.' },
  { icon: '🪔', title: 'Our Mission',  text: 'To preserve, teach, and transmit the living tradition of Sri Vidya with integrity and grace.' },
  { icon: '🌿', title: 'Our Values',   text: 'Authenticity, devotion, disciplined practice, and compassionate guidance in every offering.' },
];

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0  },
  transition: { delay, duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] },
});

const faqs = [
  {
    q: 'What is Sri Vidya?',
    a: 'Sri Vidya is the highest form of Shakti worship in the Tantric tradition — a complete system integrating Mantra, Yantra, and Tantra into one unified path of divine realization. Centered on the Sri Chakra and the Panchadashi or Shodashi mantras, it leads the sincere practitioner from worldly harmony to ultimate liberation through the grace of the Divine Mother.',
  },
  {
    q: 'What is Tantra?',
    a: 'Tantra is not what popular culture portrays. It is the most comprehensive spiritual science ever developed — a systematic methodology for the direct experience of ultimate reality. The word Tantra means "that which expands consciousness." Rooted in the recognition that the universe itself is the body of the Divine Mother, Tantra transforms every aspect of life into a vehicle for awakening.',
  },
  {
    q: 'Who can join?',
    a: 'Sri Mahavidyeswari Tantra Peetham welcomes all sincere seekers regardless of background, nationality, or prior experience. The only requirement is genuine devotion, an open heart, and a sincere desire to walk the path of authentic spiritual practice. Both beginners and advanced practitioners will find offerings suited to their level.',
  },
  {
    q: 'Are courses available online?',
    a: 'Yes. Many of our foundational and intermediate courses are available online, allowing seekers from across the world to access authentic teachings from the comfort of their home. Certain advanced initiatory practices and Guru Diksha, however, require in-person attendance to preserve the integrity of the living transmission.',
  },
  {
    q: 'Do I need prior experience?',
    a: 'No prior experience is required to begin. Our curriculum is structured to guide you from the very foundations of Vedic and Tantric principles all the way to advanced Sri Vidya Upasana. Each seeker is met where they are, and the Guru provides personalized guidance to ensure steady, authentic progress on the path.',
  },
  {
    q: 'What is Guru Diksha?',
    a: 'Guru Diksha is the sacred initiation through which the Guru transmits Shakti — the living spiritual energy — directly to the student. It is not merely a ceremony but a profound energetic transmission that activates the dormant potential within the seeker. In the Tantric tradition, Diksha is considered the very gateway to authentic practice; without it, the deepest teachings remain inaccessible.',
  },
];

const GURUS_12 = [
  { name: 'Surya',      img: guruSuryaImg,     pos: 'center 18%' },
  { name: 'Chandra',    img: guruChandraImg,   pos: 'center 15%' },
  { name: 'Agni',       img: guruAgniImg,      pos: 'center 12%' },
  { name: 'Kubera',     img: guruKuberaImg,    pos: 'center 22%' },
  { name: 'Indra',      img: guruIndraImg,     pos: 'center 14%' },
  { name: 'Brahma',     img: guruBrahmaImg,    pos: 'center 10%' },
  { name: 'Mahesha',    img: guruMaheshaImg,   pos: 'center 12%' },
  { name: 'Murari',     img: guruMurariImg,    pos: 'center 15%' },
  { name: 'Agasthya',   img: guruAgasthyaImg,  pos: 'center 18%' },
  { name: 'Skandha',    img: guruSkandhaImg,   pos: 'center 16%' },
  { name: 'Ananga',     img: guruAnangaImg,    pos: 'center 14%' },
  { name: 'Lopamudra',  img: guruLopamudraImg, pos: 'center 20%' },
];

export default function AboutPage() {
  const navigate = useNavigate();
  const gpRef = useRef(null);
  const guruBioRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  const scrollToParampara = () => gpRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const scrollToBiography = () => guruBioRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="ap">
      <Navbar />

      {/* ══════════════════════════════════════════════════════
          STEP 1 — PREMIUM HERO
      ══════════════════════════════════════════════════════ */}
      <section className="ap-hero">

        {/* Dark background base */}
        <div className="ap-hero__bg" />

        {/* Left-side readability veil */}
        <div className="ap-hero__veil" />

        {/* Bottom page transition */}
        <div className="ap-hero__bottom-fade" />

        {/* Hero image — right side, fully visible, no crop */}
        <div className="ap-hero__img-panel">
          <img
            src={aboutHeroImg}
            alt="Sri Mahavidyesvari — Sacred Deity"
            className="ap-hero__deity-img"
            loading="eager"
            draggable="false"
          />
        </div>

        {/* Content */}
        <div className="ap-hero__content">

          {/* Om badge */}
          <motion.div className="ap-hero__badge" {...fadeUp(0.10)}>
            <span className="ap-hero__badge-om font-devanagari">ॐ</span>
            <span className="ap-hero__badge-text">Sri Mahavidyeswari Tantra Peetham</span>
            <span className="ap-hero__badge-om font-devanagari">ॐ</span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p className="ap-hero__eyebrow" {...fadeUp(0.22)}>
            THE ABODE OF THE DIVINE MOTHER
          </motion.p>

          {/* Main heading */}
          <motion.h1 className="ap-hero__heading font-cinzel" {...fadeUp(0.34)}>
            Sri Mahavidyeswari<br />
            <span className="ap-hero__heading-gold">Tantra Peetham</span>
          </motion.h1>

          {/* Gold rule */}
          <motion.div className="ap-hero__rule" {...fadeUp(0.44)}>
            <span className="ap-hero__rule-line" />
            <span className="ap-hero__rule-diamond" />
            <span className="ap-hero__rule-line" />
          </motion.div>

          {/* Subtitle */}
          <motion.p className="ap-hero__subtitle font-cormorant" {...fadeUp(0.52)}>
            A sacred center preserving the authentic Guru Parampara, Sri Vidya, Tantra,
            and Sanatana Dharma through traditional learning, disciplined practice,
            and divine guidance.
          </motion.p>

          {/* Buttons */}
          <motion.div className="ap-hero__btns" {...fadeUp(0.64)}>
            <motion.button
              className="ap-hero__btn ap-hero__btn--primary"
              whileHover={{ y: -3, boxShadow: '0 14px 40px rgba(184,134,11,0.55)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.22 }}
              onClick={() => navigate('/courses')}
            >
              Explore Courses
            </motion.button>
            <motion.button
              className="ap-hero__btn ap-hero__btn--secondary"
              whileHover={{ background: 'rgba(212,175,55,0.12)', borderColor: 'rgba(212,175,55,0.80)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.22 }}
              onClick={scrollToParampara}
            >
              Learn More
            </motion.button>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          className="ap-hero__scroll"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="ap-hero__scroll-line" />
          <span className="ap-hero__scroll-dot" />
        </motion.div>

      </section>

      <div className="ap-divider ap-divider--dark" aria-hidden="true">
        <span className="ap-divider__line" />
        <span className="ap-divider__lotus"><LotusDividerIcon id="ap-divider-icon-1" /></span>
        <span className="ap-divider__line" />
      </div>

      {/* ══════════════════════════════════════════════════════
          STEP 2 — ABOUT SRI MAHAVIDYESWARI TANTRA PEETHAM
      ══════════════════════════════════════════════════════ */}
      <section className="ap-about">
        <div className="ap-about__pattern" aria-hidden="true" />
        <div className="ap-about__container">

          {/* ── LEFT: IMAGE ── */}
          <ScrollReveal direction="right" duration={0.9} className="ap-about__img-col">
            <div className="ap-about__img-wrap">
              <div className="ap-about__img-glow" />
              <motion.img
                src={aboutPageImg}
                alt="Sri Mahavidyeswari Tantra Peetham"
                className="ap-about__img"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              {/* Devanagari label */}
              <div className="ap-about__img-label">
                <span className="ap-about__img-label-line" />
                <span className="ap-about__img-label-text font-devanagari">श्री महाविद्येश्वरी</span>
                <span className="ap-about__img-label-line" />
              </div>
              {/* Floating badge */}
              <div className="ap-about__img-badge">
                <span className="ap-about__badge-om font-devanagari">ॐ</span>
                <span className="ap-about__badge-text">Est. Ancient Tradition</span>
              </div>
            </div>
          </ScrollReveal>

          {/* ── RIGHT: CONTENT ── */}
          <div className="ap-about__content-col">

            <ScrollReveal delay={0.05}>
              <p className="ap-about__eyebrow">
                <span className="ap-about__eyebrow-line" />
                ABOUT SRI MAHAVIDYESWARI TANTRA PEETHAM
                <span className="ap-about__eyebrow-line" />
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <h2 className="ap-about__heading font-cinzel">
                Sri Mahavidyeswari<br />
                <span className="ap-about__heading-gold">Tantra Peetham</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.22}>
              <div className="ap-about__rule">
                <span className="ap-about__rule-line" />
                <span className="ap-about__rule-diamond" />
                <span className="ap-about__rule-line" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.30}>
              <p className="ap-about__text font-cormorant">
                Sri Mahavidyeswari Tantra Peetham is a sacred institution dedicated to preserving
                and transmitting the timeless wisdom of Sri Vidya, Tantra, Mantra, and the authentic
                Vedic tradition. Founded on the unshakeable foundation of Guru Parampara, the Peetham
                serves as a living bridge between the ancient and the modern.
              </p>
              <p className="ap-about__text font-cormorant">
                Rooted in the Datta Sampradaya and guided by the grace of Adi Guru Dattatreya, every
                teaching offered here flows through an unbroken lineage of realized masters. The Peetham
                upholds the highest standards of authenticity, ensuring that sacred knowledge is transmitted
                with purity, reverence, and disciplined practice.
              </p>
              <p className="ap-about__text font-cormorant">
                Whether you are a sincere seeker taking your first steps on the spiritual path or an
                advanced practitioner deepening your sadhana, Sri Mahavidyeswari Tantra Peetham offers
                a complete system of learning — from foundational Vedic principles to the most profound
                secrets of Sri Vidya Upasana.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.40}>
              <div className="ap-about__pillars">
                <div className="ap-about__pillar">
                  <span className="ap-about__pillar-icon">👁</span>
                  <div>
                    <h4 className="ap-about__pillar-title font-cinzel">Our Vision</h4>
                    <p className="ap-about__pillar-text">A world where every sincere seeker has access to authentic, lineage-based spiritual wisdom.</p>
                  </div>
                </div>
                <div className="ap-about__pillar">
                  <span className="ap-about__pillar-icon">🪔</span>
                  <div>
                    <h4 className="ap-about__pillar-title font-cinzel">Our Mission</h4>
                    <p className="ap-about__pillar-text">To preserve, teach, and transmit the living tradition of Sri Vidya with integrity and grace.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.50}>
              <GoldenButton
                label="Learn More"
                size="md"
                onClick={scrollToParampara}
              />
            </ScrollReveal>

          </div>
        </div>
      </section>

      <div className="ap-divider ap-divider--light" aria-hidden="true">
        <span className="ap-divider__line" />
        <span className="ap-divider__lotus"><LotusDividerIcon id="ap-divider-icon-2" /></span>
        <span className="ap-divider__line" />
      </div>

      {/* ══════════════════════════════════════════════════════
          STEP 3 — GURU PARAMPARA
      ══════════════════════════════════════════════════════ */}
      <section className="ap-gp" ref={gpRef}>
        <div className="ap-gp__pattern" aria-hidden="true" />

        {/* ── PART A: Dattatreya intro two-column ── */}
        <div className="ap-gp__intro">
          <div className="ap-gp__intro-container">

            {/* LEFT: Dattatreya image */}
            <ScrollReveal direction="right" duration={0.9} className="ap-gp__img-col">
              <motion.div
                className="ap-gp__img-wrap"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.img
                  src={dattatreyaImg}
                  alt="Lord Dattatreya — Adi Guru"
                  className="ap-gp__img"
                  loading="lazy"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <div className="ap-gp__img-glow" />
              </motion.div>
            </ScrollReveal>

            {/* RIGHT: Content */}
            <div className="ap-gp__content-col">

              <ScrollReveal delay={0.05}>
                <p className="ap-gp__eyebrow">
                  <span className="ap-gp__eyebrow-star">✦</span>
                  GURU PARAMPARA
                  <span className="ap-gp__eyebrow-star">✦</span>
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.14}>
                <h2 className="ap-gp__heading font-cinzel">
                  <span className="ap-gp__heading-lotus"><LotusDividerIcon id="ap-heading-icon" /></span>
                  Adi Guru{' '}
                  <span className="ap-gp__heading-gold">Dattatreya</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.22}>
                <div className="ap-gp__rule">
                  <span className="ap-gp__rule-line" />
                  <span className="ap-gp__rule-diamond" />
                  <span className="ap-gp__rule-line" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.30}>
                <div className="ap-gp__body font-cormorant">
                  <p>
                    The Guru Parampara is the living chain of transmission through which sacred
                    teachings remain authentic and powerful. At Sri Mahavidyeswari Tantra Peetham,
                    this tradition begins with the Datta Sampradaya, one of the oldest and most
                    revered spiritual lineages.
                  </p>
                  <p>
                    Sri Virajaanandanatha Saraswati stands as a keeper of this living flame,
                    embodying the highest standards of discipline, devotion, and direct transmission.
                    The Guru is not merely a teacher here — the Guru is the gateway to the practice
                    itself.
                  </p>
                  <p>
                    In Sanatana Dharma, the Guru is essential. Without an authentic Guru,
                    the deepest mantras and practices remain theoretical. With the Guru, the
                    seeker enters into the living reality of the tradition.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.42}>
                <GoldenButton
                  label="Know More"
                  size="md"
                  onClick={scrollToBiography}
                />
              </ScrollReveal>

            </div>
          </div>
        </div>

        {/* ── PART B: Guru Timeline ── */}
        <div className="ap-gp__lineage">
          <div className="ap-gp__lineage-container">

            <ScrollReveal className="ap-gp__lineage-header">
              <p className="ap-gp__lineage-eyebrow">
                <span className="ap-gp__eyebrow-line" />
                THE SACRED LINEAGE
                <span className="ap-gp__eyebrow-line" />
              </p>
              <h2 className="ap-gp__lineage-title font-cinzel">
                Masters of the <span className="ap-gp__gold">Living Tradition</span>
              </h2>
              <div className="ap-gp__lineage-rule">
                <span className="ap-gp__rule-line" />
                <span className="ap-gp__rule-diamond" />
                <span className="ap-gp__rule-line" />
              </div>
              <p className="ap-gp__lineage-subtitle font-cormorant">
                Our teachings flow through an unbroken chain of realized masters
                spanning over twelve centuries of living tradition.
              </p>
            </ScrollReveal>

            {/* Timeline cards row */}
            <div className="ap-gp__timeline">
              {GURUS_12.map((guru, i) => (
                <ScrollReveal key={guru.name} delay={i * 0.05}>
                  <motion.div
                    className="ap-gp__card"
                    whileHover={{ y: -10, boxShadow: '0 24px 60px rgba(123,30,58,0.18), 0 0 32px rgba(212,175,55,0.22)' }}
                    transition={{ duration: 0.28 }}
                  >
                    <div className="ap-gp__card-accent" />
                    <div className="ap-gp__portrait-wrap">
                      <div className="ap-gp__portrait-ring" />
                      <div className="ap-gp__portrait">
                        <img
                          src={guru.img}
                          alt={guru.name}
                          loading="lazy"
                          style={{ objectPosition: guru.pos }}
                        />
                        <div className="ap-gp__portrait-overlay">
                          <span className="font-devanagari ap-gp__portrait-om">ॐ</span>
                        </div>
                      </div>
                      <div className="ap-gp__num-badge font-cinzel">{i + 1}</div>
                    </div>
                    <h4 className="ap-gp__name font-cinzel">{guru.name}</h4>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Bottom lotus divider */}
            <ScrollReveal delay={0.3}>
              <div className="ap-gp__bottom-divider">
                <span className="ap-gp__divider-line" />
                <span className="ap-gp__divider-lotus"><LotusDividerIcon id="ap-divider-icon-3" /></span>
                <span className="ap-gp__divider-line" />
              </div>
            </ScrollReveal>

          </div>
        </div>

      </section>

      <div className="ap-divider ap-divider--dark" aria-hidden="true">
        <span className="ap-divider__line" />
        <span className="ap-divider__lotus"><LotusDividerIcon id="ap-divider-icon-4" /></span>
        <span className="ap-divider__line" />
      </div>

      {/* ══════════════════════════════════════════════════════
          STEP 4 — TANTRA VIDYA
      ══════════════════════════════════════════════════════ */}
      <section className="ap-tv">
        <div className="ap-tv__pattern" aria-hidden="true" />
        <div className="ap-tv__container">

          {/* ── LEFT: CONTENT (55%) ── */}
          <div className="ap-tv__content-col">

            <ScrollReveal delay={0.05}>
              <p className="ap-tv__eyebrow">
                <span className="ap-tv__eyebrow-line" />
                TANTRA VIDYA
                <span className="ap-tv__eyebrow-line" />
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <h2 className="ap-tv__heading font-cinzel">
                The Sacred Science of
                <span className="ap-tv__heading-gold"> Tantra</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.22}>
              <div className="ap-tv__rule">
                <span className="ap-tv__rule-line" />
                <span className="ap-tv__rule-diamond" />
                <span className="ap-tv__rule-line" />
              </div>
            </ScrollReveal>

            {/* Topic blocks */}
            <ScrollReveal delay={0.30}>
              <div className="ap-tv__topic">
                <div className="ap-tv__topic-header">
                  <span className="ap-tv__topic-icon">🔱</span>
                  <h3 className="ap-tv__topic-title font-cinzel">What is Tantra?</h3>
                </div>
                <p className="ap-tv__topic-text font-cormorant">
                  Sri MahaVidyesvari Tantra Peetham (SMTP) is a sacred center devoted to preserving,
                  practicing, and sharing the timeless wisdom of Sri Vidya through the authentic Guru–Śiṣya Paramparā.
                  Rooted in traditional śāstric knowledge, the Peetham offers a disciplined path where mantra,
                  yantra, tantra, and upāsanā become living practices for inner transformation.
                  Through spiritual education, sacred rituals, traditional guidance, and dedicated worship,
                  seekers are inspired to cultivate wisdom, devotion, self-realization, and a profound connection
                  with the Divine Mother while upholding the purity of Sanātana Dharma.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.38}>
              <div className="ap-tv__topic">
                <div className="ap-tv__topic-header">
                  <span className="ap-tv__topic-icon">🔯</span>
                  <h3 className="ap-tv__topic-title font-cinzel">Importance of Sri Vidya</h3>
                </div>
                <p className="ap-tv__topic-text font-cormorant">
                  Sri Vidya is the crown jewel of the Tantric tradition — the highest form of
                  Shakti worship. It integrates Mantra, Yantra, and Tantra into one unified
                  system of divine realization. The Sri Chakra, its sacred geometric form,
                  encodes the entire cosmos in a single diagram of divine proportion. The
                  Panchadashi and Shodashi mantras are considered the most potent in the
                  entire Vedic tradition, leading the sincere practitioner from worldly
                  balance to ultimate liberation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.46}>
              <div className="ap-tv__topic">
                <div className="ap-tv__topic-header">
                  <span className="ap-tv__topic-icon">🧘</span>
                  <h3 className="ap-tv__topic-title font-cinzel">Importance of the Guru</h3>
                </div>
                <p className="ap-tv__topic-text font-cormorant">
                  In the Tantric tradition, the Guru is not merely a teacher — the Guru is
                  the living embodiment of the tradition itself. Without authentic Guru
                  initiation, the deepest practices remain locked. The Guru transmits not
                  just knowledge but <strong>Shakti</strong> — the living energy that activates the
                  dormant potential within the student. This is why Guru Parampara is
                  considered the very foundation of all authentic spiritual practice.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.54}>
              <div className="ap-tv__topic">
                <div className="ap-tv__topic-header">
                  <span className="ap-tv__topic-icon">🌿</span>
                  <h3 className="ap-tv__topic-title font-cinzel">Spiritual Discipline</h3>
                </div>
                <p className="ap-tv__topic-text font-cormorant">
                  Tantra demands the highest level of personal discipline, ethical conduct,
                  and inner purity. The practitioner must cultivate a sattvic lifestyle,
                  regular sadhana, and unwavering devotion. It is not a path of shortcuts
                  but of systematic, disciplined transformation — integrating jnana,
                  bhakti, and kriya into one unified path of awakening.
                </p>
              </div>
            </ScrollReveal>

            {/* Sanskrit verse */}
            <ScrollReveal delay={0.60}>
              <div className="ap-tv__verse">
                <span className="ap-tv__verse-line" />
                <p className="ap-tv__verse-text font-devanagari">सर्वं खल्विदं ब्रह्म</p>
                <span className="ap-tv__verse-line" />
              </div>
            </ScrollReveal>

          </div>

          {/* ── RIGHT: IMAGE (45%) ── */}
          <ScrollReveal direction="left" duration={0.9} className="ap-tv__img-col">
            <motion.div
              className="ap-tv__img-wrap"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.img
                src={whyTantraImg}
                alt="The Sacred Science of Tantra"
                className="ap-tv__img"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <div className="ap-tv__img-glow" />
              {/* Floating label */}
              <div className="ap-tv__img-badge">
                <span className="ap-tv__badge-om font-devanagari">ॐ</span>
                <span className="ap-tv__badge-text">Ardhanarishwara</span>
              </div>
            </motion.div>
          </ScrollReveal>

        </div>
      </section>

      <div className="ap-divider ap-divider--light" aria-hidden="true">
        <span className="ap-divider__line" />
        <span className="ap-divider__lotus"><LotusDividerIcon id="ap-divider-icon-5" /></span>
        <span className="ap-divider__line" />
      </div>

      {/* ══════════════════════════════════════════════════════
          STEP 5 — OUR GURU
      ══════════════════════════════════════════════════════ */}
      <section className="ap-og">
        <div className="ap-og__pattern" aria-hidden="true" />
        <div className="ap-og__container">

          {/* ── LEFT: GURU IMAGE (42%) ── */}
          <ScrollReveal direction="right" duration={0.9} className="ap-og__img-col">
            <div className="ap-og__img-wrap">
              <div className="ap-og__img-glow" />
              <motion.img
                src={dattatreyaImg}
                alt="Our Revered Guru"
                className="ap-og__img"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              {/* Floating name badge */}
              <div className="ap-og__name-badge">
                <span className="ap-og__name-badge-om font-devanagari">ॐ</span>
                <div>
                  <p className="ap-og__name-badge-title font-cinzel">Our Revered Guru</p>
                  <p className="ap-og__name-badge-sub">Sri Mahavidyeswari Peetham</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── RIGHT: CONTENT (58%) ── */}
          <div className="ap-og__content-col">

            <ScrollReveal delay={0.05}>
              <p className="ap-og__eyebrow">
                <span className="ap-og__eyebrow-line" />
                OUR GURU
                <span className="ap-og__eyebrow-line" />
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.13}>
              <h2 className="ap-og__heading font-cinzel">
                The Living<br />
                <span className="ap-og__heading-gold">Flame of Tradition</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.20}>
              <div className="ap-og__rule">
                <span className="ap-og__rule-line" />
                <span className="ap-og__rule-diamond" />
                <span className="ap-og__rule-line" />
              </div>
            </ScrollReveal>

            {/* Biography */}
            <ScrollReveal delay={0.27}>
              <p className="ap-og__bio font-cormorant">
                Our Guru is a realized master in the living tradition of the Datta Sampradaya,
                carrying forward the unbroken lineage of Sri Vidya Upasana with unwavering
                devotion and disciplined practice. Initiated into the deepest secrets of Tantra,
                Mantra, and Yantra through authentic Guru Parampara, the Guru has dedicated
                decades to preserving and transmitting this sacred science to sincere seekers
                across the world.
              </p>
            </ScrollReveal>

            {/* Spiritual quote */}
            <ScrollReveal delay={0.34}>
              <div className="ap-og__quote">
                <span className="ap-og__quote-mark">“</span>
                <p className="ap-og__quote-text font-cormorant">
                  The Guru does not give you something new. The Guru removes what is
                  covering the light that was always within you.
                </p>
                <span className="ap-og__quote-mark ap-og__quote-mark--close">”</span>
              </div>
            </ScrollReveal>

            {/* Vision & Mission */}
            <ScrollReveal delay={0.42}>
              <div className="ap-og__vm-grid">
                <div className="ap-og__vm-card">
                  <div className="ap-og__vm-icon">👁</div>
                  <h4 className="ap-og__vm-title font-cinzel">Vision</h4>
                  <p className="ap-og__vm-text">To make authentic Sri Vidya accessible to every sincere seeker, preserving the living tradition for generations to come.</p>
                </div>
                <div className="ap-og__vm-card">
                  <div className="ap-og__vm-icon">🪔</div>
                  <h4 className="ap-og__vm-title font-cinzel">Mission</h4>
                  <p className="ap-og__vm-text">To transmit the complete system of Tantra, Mantra, and Yantra through disciplined Guru-Shishya Parampara with purity and grace.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Achievements */}
            <ScrollReveal delay={0.50}>
              <div className="ap-og__achievements">
                <h4 className="ap-og__ach-title font-cinzel">Achievements &amp; Contributions</h4>
                <div className="ap-og__ach-list">
                  {[
                    { icon: '📜', text: 'Initiated thousands of seekers into authentic Sri Vidya practice' },
                    { icon: '🕍', text: 'Conducted over 500 sacred rituals, Homas, and Yagnas' },
                    { icon: '📚', text: 'Authored comprehensive guides on Tantra and Sri Vidya Upasana' },
                    { icon: '🌍', text: 'Guided seekers across India, USA, UK, and Southeast Asia' },
                  ].map((a, i) => (
                    <div key={i} className="ap-og__ach-item">
                      <span className="ap-og__ach-icon">{a.icon}</span>
                      <span className="ap-og__ach-text">{a.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Know More button */}
            <ScrollReveal delay={0.58}>
              <GoldenButton
                label="Know More"
                size="md"
                onClick={scrollToBiography}
              />
            </ScrollReveal>

          </div>
        </div>
      </section>

      <div className="ap-divider ap-divider--dark" aria-hidden="true">
        <span className="ap-divider__line" />
        <span className="ap-divider__lotus"><LotusDividerIcon id="ap-divider-icon-6" /></span>
        <span className="ap-divider__line" />
      </div>

      {/* ══════════════════════════════════════════════════════
          STEP 5.5 — GURU BIOGRAPHY
      ══════════════════════════════════════════════════════ */}
      <section className="ap-gb" ref={guruBioRef} id="guru-bio">
        <div className="ap-gb__pattern" aria-hidden="true" />
        <div className="ap-gb__container">
          <ScrollReveal className="ap-gb__header">
            <p className="ap-gb__eyebrow">
              <span className="ap-gb__eyebrow-line" />
              GURU BIOGRAPHY
              <span className="ap-gb__eyebrow-line" />
            </p>
            <h2 className="ap-gb__heading font-cinzel">
              Sri Virajaanandanatha Saraswati
            </h2>
            <div className="ap-gb__rule">
              <span className="ap-gb__rule-line" />
              <span className="ap-gb__rule-diamond" />
              <span className="ap-gb__rule-line" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <div className="ap-gb__heading-wrap">
              <LotusDividerIcon id="ap-gb-heading-icon" />
            </div>
            <div className="ap-gb__body">
              <p className="ap-gb__text font-cormorant">
                Sri Virajaanandanatha Saraswati is the living custodian of the Sri Vidya tradition
                at Sri Mahavidyeswari Tantra Peetham. Initiated into the authentic Guru Parampara,
                he received his training in the ancient practices of Tantra, Mantra, and Yantra from
                a lineage of realized masters whose wisdom spans centuries.
              </p>
              <p className="ap-gb__text font-cormorant">
                His life is dedicated to preserving the purity of sacred transmission while guiding
                sincere seekers with compassion, clarity, and unwavering discipline. Under his
                guidance, the Peetham remains a place of deep practice, inner transformation, and
                living devotion.
              </p>
              <p className="ap-gb__text font-cormorant">
                Through personal mentorship, traditional rituals, and immersive teachings, Sri
                Virajaanandanatha Saraswati opens the door to the highest Sri Vidya unfoldment,
                ensuring every instruction remains true to its ancient roots and accessible to the modern seeker.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="ap-divider ap-divider--light" aria-hidden="true">
        <span className="ap-divider__line" />
        <span className="ap-divider__lotus"><LotusDividerIcon id="ap-divider-icon-7" /></span>
        <span className="ap-divider__line" />
      </div>

      {/* ══════════════════════════════════════════════════════
          STEP 6 — WHY CHOOSE US
      ══════════════════════════════════════════════════════ */}
      <section className="ap-wcu">
        <div className="ap-wcu__pattern" aria-hidden="true" />
        <div className="ap-wcu__container">

          {/* Header */}
          <ScrollReveal className="ap-wcu__header">
            <p className="ap-wcu__eyebrow">
              <span className="ap-wcu__eyebrow-line" />
              WHY CHOOSE US
              <span className="ap-wcu__eyebrow-line" />
            </p>
            <h2 className="ap-wcu__heading font-cinzel">
              The Path of <span className="ap-wcu__heading-gold">Authentic Tradition</span>
            </h2>
            <div className="ap-wcu__rule">
              <span className="ap-wcu__rule-line" />
              <span className="ap-wcu__rule-diamond" />
              <span className="ap-wcu__rule-line" />
            </div>
            <p className="ap-wcu__subtitle font-cormorant">
              Every offering at Sri Mahavidyeswari Tantra Peetham is rooted in living tradition,
              authentic lineage, and the highest standards of spiritual integrity.
            </p>
          </ScrollReveal>

          {/* Cards grid */}
          <div className="ap-wcu__grid">
            {[
              { icon: '🪷', title: 'Authentic Guru Parampara',  text: 'Every teaching flows through an unbroken chain of realized masters spanning over twelve centuries of living tradition.' },
              { icon: '📿', title: 'Traditional Learning',       text: 'Structured Guru-Shishya methodology preserving the original oral and textual transmission of sacred knowledge.' },
              { icon: '🔱', title: 'Sacred Rituals',             text: 'Authentic Homas, Yagnas, and Puja ceremonies conducted with strict adherence to Agamic and Tantric protocols.' },
              { icon: '🪔', title: 'Spiritual Guidance',         text: 'Personalized guidance from a realized Guru who walks the path alongside each sincere seeker with compassion.' },
              { icon: '🌸', title: 'Divine Community',           text: 'A sacred Sangha of dedicated practitioners supporting each other on the path of Sri Vidya Upasana.' },
              { icon: '∞',  title: 'Lifetime Learning',          text: 'A complete system from foundational Vedic principles to the deepest secrets of Sri Vidya — for life.' },
            ].map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.10}>
                <motion.div
                  className="ap-wcu__card"
                  whileHover={{ y: -8, boxShadow: '0 24px 56px rgba(123,30,58,0.14), 0 0 28px rgba(212,175,55,0.20)' }}
                  transition={{ duration: 0.28 }}
                >
                  <div className="ap-wcu__card-accent" />
                  <div className="ap-wcu__card-icon">{feature.icon}</div>
                  <h3 className="ap-wcu__card-title font-cinzel">{feature.title}</h3>
                  <div className="ap-wcu__card-rule">
                    <span className="ap-wcu__card-rule-line" />
                    <span className="ap-wcu__card-rule-dot" />
                    <span className="ap-wcu__card-rule-line" />
                  </div>
                  <p className="ap-wcu__card-text font-cormorant">{feature.text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      <div className="ap-divider ap-divider--dark" aria-hidden="true">
        <span className="ap-divider__line" />
        <span className="ap-divider__lotus"><LotusDividerIcon id="ap-divider-icon-8" /></span>
        <span className="ap-divider__line" />
      </div>

      {/* ══════════════════════════════════════════════════════
          STEP 7 — FAQs
      ══════════════════════════════════════════════════════ */}
      <section className="ap-faq">
        <div className="ap-faq__pattern" aria-hidden="true" />
        <div className="ap-faq__container">

          <ScrollReveal className="ap-faq__header">
            <p className="ap-faq__eyebrow">
              <span className="ap-faq__eyebrow-line" />
              FREQUENTLY ASKED QUESTIONS
              <span className="ap-faq__eyebrow-line" />
            </p>
            <h2 className="ap-faq__heading font-cinzel">
              Seekers <span className="ap-faq__heading-gold">Ask</span>
            </h2>
            <div className="ap-faq__rule">
              <span className="ap-faq__rule-line" />
              <span className="ap-faq__rule-diamond" />
              <span className="ap-faq__rule-line" />
            </div>
            <p className="ap-faq__subtitle font-cormorant">
              Answers to the most common questions from sincere seekers on the path.
            </p>
          </ScrollReveal>

          <div className="ap-faq__list">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <ScrollReveal key={i} delay={i * 0.07}>
                  <div className={`ap-faq__item${isOpen ? ' ap-faq__item--open' : ''}`}>
                    <button
                      className="ap-faq__trigger"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="ap-faq__trigger-num font-cinzel">{String(i + 1).padStart(2, '0')}</span>
                      <span className="ap-faq__trigger-q font-cinzel">{faq.q}</span>
                      <motion.span
                        className="ap-faq__trigger-icon"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="ap-faq__body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                          <p className="ap-faq__answer font-cormorant">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      <div className="ap-divider ap-divider--light" aria-hidden="true">
        <span className="ap-divider__line" />
        <span className="ap-divider__lotus"><LotusDividerIcon id="ap-divider-icon-7" /></span>
        <span className="ap-divider__line" />
      </div>

      {/* ══════════════════════════════════════════════════════
          STEP 8 — CALL TO ACTION
      ══════════════════════════════════════════════════════ */}
      <section className="ap-cta">

        {/* Layered background */}
        <div className="ap-cta__bg" aria-hidden="true" />
        <div className="ap-cta__overlay" aria-hidden="true" />

        {/* Animated radial glow orbs */}
        <motion.div
          className="ap-cta__orb ap-cta__orb--left"
          animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.85, 0.55] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <motion.div
          className="ap-cta__orb ap-cta__orb--right"
          animate={{ scale: [1, 1.14, 1], opacity: [0.45, 0.72, 0.45] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          aria-hidden="true"
        />

        <div className="ap-cta__content">

          {/* Om badge */}
          <ScrollReveal delay={0.05}>
            <div className="ap-cta__badge">
              <span className="ap-cta__badge-om font-devanagari">ॐ</span>
              <span className="ap-cta__badge-text">Sri Mahavidyeswari Tantra Peetham</span>
              <span className="ap-cta__badge-om font-devanagari">ॐ</span>
            </div>
          </ScrollReveal>

          {/* Eyebrow */}
          <ScrollReveal delay={0.14}>
            <p className="ap-cta__eyebrow">THE PATH AWAITS YOU</p>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal delay={0.22}>
            <h2 className="ap-cta__heading font-cinzel">
              Begin Your Spiritual<br />
              <span className="ap-cta__heading-gold">Journey Today</span>
            </h2>
          </ScrollReveal>

          {/* Gold rule */}
          <ScrollReveal delay={0.30}>
            <div className="ap-cta__rule">
              <span className="ap-cta__rule-line" />
              <span className="ap-cta__rule-diamond" />
              <span className="ap-cta__rule-line" />
            </div>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal delay={0.38}>
            <p className="ap-cta__subtitle font-cormorant">
              Step onto the sacred path of Sri Vidya and Tantra under the guidance
              of an authentic Guru Parampara. Your journey toward the Divine Mother begins here.
            </p>
          </ScrollReveal>

          {/* Buttons */}
          <ScrollReveal delay={0.48}>
            <div className="ap-cta__btns">
              <motion.button
                className="ap-cta__btn ap-cta__btn--primary"
                whileHover={{ y: -4, boxShadow: '0 18px 48px rgba(184,134,11,0.60)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.22 }}
                onClick={() => navigate('/courses')}
              >
                Explore Courses
              </motion.button>
              <motion.button
                className="ap-cta__btn ap-cta__btn--secondary"
                whileHover={{ background: 'rgba(212,175,55,0.14)', borderColor: 'rgba(212,175,55,0.85)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.22 }}
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </motion.button>
            </div>
          </ScrollReveal>

          {/* Bottom lotus divider */}
          <ScrollReveal delay={0.56}>
            <div className="ap-cta__divider">
              <span className="ap-cta__divider-line" />
              <span className="ap-cta__divider-lotus"><LotusDividerIcon id="ap-divider-icon-8" /></span>
              <span className="ap-cta__divider-line" />
            </div>
          </ScrollReveal>

        </div>
      </section>

      <FooterSection />

    </div>
  );
}
