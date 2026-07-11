import { motion } from 'framer-motion';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import dattatreyaImg from '../../assets/dathathreya.png';
import guruSuryaImg     from '../../assets/guru_surya.png';
import guruChandraImg   from '../../assets/guru_chandra.png';
import guruAgniImg      from '../../assets/guru_agni.png';
import guruKuberaImg    from '../../assets/guru_kubera.png';
import guruIndraImg     from '../../assets/guru_indra.png';
import guruBrahmaImg    from '../../assets/guru_brahma.png';
import guruMaheshaImg   from '../../assets/guru_mahesha.png';
import guruMurariImg    from '../../assets/guru_murari.png';
import guruAgasthyaImg  from '../../assets/guru_agasthya.png';
import guruSkandhaImg   from '../../assets/guru_skandha.png';
import guruAnangaImg    from '../../assets/guru_ananga.png';
import guruLopamudraImg from '../../assets/guru_lopamudra.png';
import logoImg from '../../assets/logo.png';
import './GuruParamparaSection.css';

const GURUS_12 = [
  { name: 'Surya',     img: guruSuryaImg,     cls: 'guru-surya'     },
  { name: 'Chandra',   img: guruChandraImg,   cls: 'guru-chandra'   },
  { name: 'Agni',      img: guruAgniImg,      cls: 'guru-agni'      },
  { name: 'Kubera',    img: guruKuberaImg,    cls: 'guru-kubera'    },
  { name: 'Indra',     img: guruIndraImg,     cls: 'guru-indra'     },
  { name: 'Brahma',    img: guruBrahmaImg,    cls: 'guru-brahma'    },
  { name: 'Mahesha',   img: guruMaheshaImg,   cls: 'guru-mahesha'   },
  { name: 'Murari',    img: guruMurariImg,    cls: 'guru-murari'    },
  { name: 'Agasthya',  img: guruAgasthyaImg,  cls: 'guru-agasthya'  },
  { name: 'Skandha',   img: guruSkandhaImg,   cls: 'guru-skandha'   },
  { name: 'Ananga',    img: guruAnangaImg,    cls: 'guru-ananga'    },
  { name: 'Lopamudra', img: guruLopamudraImg, cls: 'guru-lopamudra' },
];

/* Shared premium lotus SVG — unique gradient IDs per instance via idPrefix */
function LotusSVG({ cls, size, idPrefix }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={cls} aria-hidden="true" width={size} height={size}>
      <circle cx="55" cy="55" r="52" stroke={`url(#${idPrefix}g)`} strokeWidth="1.5" opacity="0.45" />
      <circle cx="55" cy="55" r="46" stroke={`url(#${idPrefix}g)`} strokeWidth="0.8" opacity="0.25" />
      <ellipse cx="55" cy="30" rx="7" ry="18" fill={`url(#${idPrefix}pb)`} opacity="0.55" transform="rotate(0 55 55)" />
      <ellipse cx="55" cy="30" rx="7" ry="18" fill={`url(#${idPrefix}pb)`} opacity="0.50" transform="rotate(45 55 55)" />
      <ellipse cx="55" cy="30" rx="7" ry="18" fill={`url(#${idPrefix}pb)`} opacity="0.50" transform="rotate(90 55 55)" />
      <ellipse cx="55" cy="30" rx="7" ry="18" fill={`url(#${idPrefix}pb)`} opacity="0.50" transform="rotate(135 55 55)" />
      <ellipse cx="55" cy="30" rx="7" ry="18" fill={`url(#${idPrefix}pb)`} opacity="0.50" transform="rotate(180 55 55)" />
      <ellipse cx="55" cy="30" rx="7" ry="18" fill={`url(#${idPrefix}pb)`} opacity="0.50" transform="rotate(225 55 55)" />
      <ellipse cx="55" cy="30" rx="7" ry="18" fill={`url(#${idPrefix}pb)`} opacity="0.50" transform="rotate(270 55 55)" />
      <ellipse cx="55" cy="30" rx="7" ry="18" fill={`url(#${idPrefix}pb)`} opacity="0.50" transform="rotate(315 55 55)" />
      <ellipse cx="55" cy="32" rx="6" ry="16" fill={`url(#${idPrefix}pf)`} transform="rotate(22.5 55 55)" />
      <ellipse cx="55" cy="32" rx="6" ry="16" fill={`url(#${idPrefix}pf)`} transform="rotate(67.5 55 55)" />
      <ellipse cx="55" cy="32" rx="6" ry="16" fill={`url(#${idPrefix}pf)`} transform="rotate(112.5 55 55)" />
      <ellipse cx="55" cy="32" rx="6" ry="16" fill={`url(#${idPrefix}pf)`} transform="rotate(157.5 55 55)" />
      <ellipse cx="55" cy="32" rx="6" ry="16" fill={`url(#${idPrefix}pf)`} transform="rotate(202.5 55 55)" />
      <ellipse cx="55" cy="32" rx="6" ry="16" fill={`url(#${idPrefix}pf)`} transform="rotate(247.5 55 55)" />
      <ellipse cx="55" cy="32" rx="6" ry="16" fill={`url(#${idPrefix}pf)`} transform="rotate(292.5 55 55)" />
      <ellipse cx="55" cy="32" rx="6" ry="16" fill={`url(#${idPrefix}pf)`} transform="rotate(337.5 55 55)" />
      <circle cx="55" cy="55" r="13" fill={`url(#${idPrefix}cg)`} />
      <circle cx="55" cy="55" r="13" stroke={`url(#${idPrefix}g)`} strokeWidth="1.5" opacity="0.8" />
      <circle cx="55" cy="55" r="8"  fill={`url(#${idPrefix}ci)`} />
      <circle cx="55" cy="55" r="3"  fill="#FFF7D6" opacity="0.95" />
      <defs>
        <linearGradient id={`${idPrefix}g`} x1="0" y1="0" x2="110" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#B8860B" />
          <stop offset="50%"  stopColor="#E8C76A" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id={`${idPrefix}pb`} x1="55" y1="12" x2="55" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#F9C8D8" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id={`${idPrefix}pf`} x1="55" y1="16" x2="55" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="40%"  stopColor="#F9C8D8" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id={`${idPrefix}cg`} cx="50%" cy="40%" r="60%">
          <stop offset="0%"   stopColor="#E8C76A" />
          <stop offset="60%"  stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        <radialGradient id={`${idPrefix}ci`} cx="40%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#FFF7D6" />
          <stop offset="100%" stopColor="#D4AF37" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function GuruParamparaSection() {
  return (
    <section className="gp">

      {/* ══════════════════════════════════════════
          NEW PREMIUM INTRO — Adi Guru Dattatreya
      ══════════════════════════════════════════ */}
      <div className="gp__intro">
        {/* Subtle mandala background pattern */}
        <div className="gp__intro-pattern" aria-hidden="true" />

        {/* Floating particles */}
        <div className="gp__particles" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <span key={i} className={`gp__particle gp__particle--${i + 1}`} />
          ))}
        </div>

        <div className="gp__intro-container">

          {/* ── LEFT: IMAGE COLUMN ── */}
          <ScrollReveal direction="right" duration={0.9} className="gp__intro-image-col">
            <motion.div
              className="gp__intro-img-wrap"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.img
                src={dattatreyaImg}
                alt="Lord Dattatreya — Adi Guru"
                className="gp__intro-img"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              {/* Antique gold border glow */}
              <div className="gp__intro-img-glow" />
            </motion.div>
          </ScrollReveal>

          {/* ── RIGHT: CONTENT COLUMN ── */}
          <div className="gp__intro-content-col">

            {/* Small label */}
            <ScrollReveal delay={0.05}>
              <p className="gp__intro-label">
                <span className="gp__intro-label-star">✦</span>
                GURU PARAMPARA
                <span className="gp__intro-label-star">✦</span>
              </p>
            </ScrollReveal>

            {/* Heading */}
            <ScrollReveal delay={0.15}>
              <h2 className="gp__intro-heading font-cinzel">
                <span className="gp__intro-lotus">🪷</span>
                Adi Guru{' '}
                <span className="gp__intro-gold">Dattatreya</span>
              </h2>
            </ScrollReveal>

            {/* Gold divider */}
            <ScrollReveal delay={0.22}>
              <div className="gp__intro-divider">
                <span className="gp__intro-divider-line" />
                <span className="gp__intro-divider-diamond" />
                <span className="gp__intro-divider-line" />
              </div>
            </ScrollReveal>

            {/* Paragraphs */}
            <ScrollReveal delay={0.30}>
              <div className="gp__intro-body font-cormorant">
                <p>
                  The entire system we follow comes from the Datta Sampradaya, one of the
                  oldest Guru traditions in India.
                </p>
                <p>
                  Dattatreya is regarded as the Adi Guru because he represents the principle
                  of learning directly from realization, not theory.
                </p>
                <p>
                  This Sampradaya emphasizes direct transmission, discipline, and
                  accountability in spiritual practice.
                </p>
                <p>
                  Guru Parampara exists to ensure the authenticity and purity of every
                  teaching. Mantras, Nyasas, and Upasana methods become truly effective
                  when they are received through an authentic Guru Parampara.
                </p>
              </div>
            </ScrollReveal>

            {/* Buttons */}
            <ScrollReveal delay={0.42}>
              <div className="gp__intro-btns">
                <GoldenButton label="Know More" size="md" />
                <GoldenButton label="Guru's Bio" size="md" outlined />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>

      {/* Lotus connector: cream Adi Guru → maroon Masters */}
      <div className="gp__intro-lotus-connector" aria-hidden="true">
        <span className="gp__intro-lotus-line" />
        <div className="gp__intro-lotus-emblem">
          <LotusSVG cls="gp__intro-lotus-svg" size={110} idPrefix="gpIL" />
          <div className="gp__intro-lotus-glow" />
        </div>
        <span className="gp__intro-lotus-line" />
      </div>

      {/* ══════════════════════════════════════════
          SECTION HEADER — The Sacred Lineage
      ══════════════════════════════════════════ */}
      <div className="gp__lineage-section">
        <div className="gp__container">

          <ScrollReveal className="text-center" style={{ marginBottom: 48 }}>
            <p className="gp__lineage-eyebrow">
              <span className="gp__eyebrow-line" />
              THE SACRED LINEAGE
              <span className="gp__eyebrow-line" />
            </p>
            <h2 className="gp__lineage-title font-cinzel">
              Masters of the <span className="gp__gold">Living Tradition</span>
            </h2>
            <p className="gp__lineage-subtitle font-cormorant">
              Our teachings flow through an unbroken chain of realized masters
              spanning over twelve centuries of living tradition.
            </p>
          </ScrollReveal>

          {/* ── GURU GRID — 6 per row ── */}
          <ScrollReveal delay={0.15}>
            <div className="gp__timeline">
              {GURUS_12.map((guru, i) => (
                <motion.div
                  key={guru.name}
                  className="gp__card"
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 56px rgba(123,30,58,0.18), 0 0 28px rgba(212,175,55,0.22)',
                  }}
                  transition={{ duration: 0.28 }}
                >
                  {/* Portrait */}
                  <div className="gp__portrait-wrap">
                    <div className="gp__portrait-ring" />
                    <div className="gp__portrait">
                      <img
                        src={guru.img}
                        alt={guru.name}
                        loading="lazy"
                        className={guru.cls}
                      />
                      <div className="gp__portrait-overlay">
                        <img src={logoImg} alt="" className="gp__portrait-om-img" />
                      </div>
                    </div>
                    <div className="gp__num-badge">{i + 1}</div>
                  </div>
                  {/* Info */}
                  <div className="gp__info">
                    <h4 className="gp__name font-cinzel">{guru.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Premium lotus section connector: maroon Masters → cream Why Tantra */}
          <ScrollReveal delay={0.3}>
            <div className="gp__lotus-connector">
              <span className="gp__lotus-line" />
              <div className="gp__lotus-emblem">
                <LotusSVG cls="gp__lotus-svg" size={110} idPrefix="gpLL" />
                <div className="gp__lotus-glow" />
              </div>
              <span className="gp__lotus-line" />
            </div>
          </ScrollReveal>

        </div>
      </div>

    </section>
  );
}
