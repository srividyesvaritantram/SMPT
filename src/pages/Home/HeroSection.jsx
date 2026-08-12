import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiPlay, FiArrowDown } from 'react-icons/fi';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import heroImg from '../../assets/home-hero.jpeg';
import logoImg from '../../assets/logo.png';
import './HeroSection.css';

const stats = [
  { value: '25+',  label: 'Sacred Courses' },
  { value: '10K+', label: 'Seekers'         },
  { value: '50+',  label: 'Workshops'       },
  { value: '5★',   label: 'Rating'          },
];

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { delay, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      {/* ── FULL-BLEED BACKGROUND IMAGE ── */}
      <img
        src={heroImg}
        alt="Sri Mahavidyesvari"
        className="hero__bg-img"
      />

      {/* ── SOFT LEFT-SIDE READABILITY GRADIENT (fades to transparent at ~40%) ── */}
      <div className="hero__left-veil" />

      {/* ── BOTTOM FADE into page ── */}
      <div className="hero__bottom-fade" />

      {/* ── LEFT CONTENT (no box, no card) ── */}
      <div className="hero__content">

        {/* Om badge */}
        <motion.div className="hero__om-badge" {...fadeUp(0.1)}>
          <img src={logoImg} alt="" className="hero__om-img" />
          <span className="hero__om-text">Sri Mahavidyesvari Tantra Peetham</span>
          <img src={logoImg} alt="" className="hero__om-img" />
        </motion.div>

        {/* Eyebrow */}
        <motion.p className="hero__eyebrow" {...fadeUp(0.22)}>
          THE ABODE OF THE DIVINE MOTHER
        </motion.p>

        {/* Heading */}
        <motion.h1 className="hero__title font-cinzel" {...fadeUp(0.34)}>
          Awaken the<br />
          <span className="hero__title-gold">Divine Within</span>
        </motion.h1>

        {/* Gold rule */}
        <motion.div className="hero__rule" {...fadeUp(0.44)}>
          <span className="hero__rule-line" />
          <span className="hero__rule-diamond" />
          <span className="hero__rule-line" />
        </motion.div>

        {/* Description */}
        <motion.p className="hero__desc font-cormorant" {...fadeUp(0.52)}>
          A sacred space for sincere seekers of truth and divine knowledge.
          Learn, practice and experience ancient wisdom through
          Tantra, Mantra and Yantra.
        </motion.p>

        {/* Buttons */}
        <motion.div className="hero__btns" {...fadeUp(0.64)}>
          <GoldenButton
            label="Explore Sri Vidya"
            size="lg"
            icon={FiPlay}
            onClick={() => navigate('/courses')}
          />
          <GoldenButton
            label="Learn More"
            size="lg"
            outlined
            onClick={() => navigate('/about')}
          />
        </motion.div>

        {/* Stats glass card */}
        <motion.div className="hero__stats" {...fadeUp(0.78)}>
          {stats.map((s, i) => (
            <div key={s.label} className="hero__stat">
              {i > 0 && <div className="hero__stat-sep" />}
              <div className="hero__stat-inner">
                <span className="hero__stat-value font-cinzel">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FiArrowDown size={18} />
      </motion.div>

    </section>
  );
}
