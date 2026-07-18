import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import { COURSE_CARDS, CourseVidyaCard } from '../../components/common/CourseVidyaCard.jsx';
import narayaniImg     from '../../assets/narayani_vidya.png';
import dhanvantariImg  from '../../assets/dhanavanthari.png';
import ashtaLakshmiImg from '../../assets/ashta_lakshmi_vidya.png';
import './ShowcaseCarousel.css';

/* ═══════════════════════════════════════════════════════════════
   SECTION 1 — FEATURED COURSES  (cream bg)
═══════════════════════════════════════════════════════════════ */
export function CoursesCarousel() {
  const navigate = useNavigate();
  return (
    <>
    <section className="sc sc--courses">
      <div className="sc__pattern" aria-hidden="true" />
      <div className="sc__container">

        <ScrollReveal className="sc__header">
          <p className="sc__eyebrow">
            <span className="sc__eyebrow-line" />
            FEATURED COURSES
            <span className="sc__eyebrow-line" />
          </p>
          <h2 className="sc__title font-cinzel">
            Sacred <span className="sc__gold">Learning Programs</span>
          </h2>
          <p className="sc__subtitle font-cormorant">
            Explore authentic Sri Vidya learning programs that will soon be available.
          </p>
        </ScrollReveal>

        <div className="sc__grid sc__grid--3">
          {COURSE_CARDS.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.07}>
              <CourseVidyaCard item={item} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="sc__footer">
          <GoldenButton
            label="View All Courses"
            size="lg"
            outlined
            onClick={() => navigate('/courses')}
          />
        </ScrollReveal>

      </div>
    </section>

    {/* Premium lotus connector: cream Courses → maroon Workshops */}
    <div className="sc-lotus-connector" aria-hidden="true">
      <span className="sc-lotus-line" />
      <div className="sc-lotus-emblem">
        <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="sc-lotus-svg" width="130" height="130">
          <circle cx="65" cy="65" r="62" stroke="url(#scLg)" strokeWidth="1.5" opacity="0.45" />
          <circle cx="65" cy="65" r="55" stroke="url(#scLg)" strokeWidth="0.8" opacity="0.25" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#scLpb)" opacity="0.55" transform="rotate(0 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#scLpb)" opacity="0.50" transform="rotate(45 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#scLpb)" opacity="0.50" transform="rotate(90 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#scLpb)" opacity="0.50" transform="rotate(135 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#scLpb)" opacity="0.50" transform="rotate(180 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#scLpb)" opacity="0.50" transform="rotate(225 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#scLpb)" opacity="0.50" transform="rotate(270 65 65)" />
          <ellipse cx="65" cy="36" rx="8" ry="21" fill="url(#scLpb)" opacity="0.50" transform="rotate(315 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#scLpf)" transform="rotate(22.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#scLpf)" transform="rotate(67.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#scLpf)" transform="rotate(112.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#scLpf)" transform="rotate(157.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#scLpf)" transform="rotate(202.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#scLpf)" transform="rotate(247.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#scLpf)" transform="rotate(292.5 65 65)" />
          <ellipse cx="65" cy="38" rx="7" ry="19" fill="url(#scLpf)" transform="rotate(337.5 65 65)" />
          <circle cx="65" cy="65" r="15" fill="url(#scLcg)" />
          <circle cx="65" cy="65" r="15" stroke="url(#scLg)" strokeWidth="1.5" opacity="0.8" />
          <circle cx="65" cy="65" r="9"  fill="url(#scLci)" />
          <circle cx="65" cy="65" r="3.5" fill="#FFF7D6" opacity="0.95" />
          <defs>
            <linearGradient id="scLg" x1="0" y1="0" x2="130" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#B8860B" />
              <stop offset="50%"  stopColor="#E8C76A" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
            <linearGradient id="scLpb" x1="65" y1="15" x2="65" y2="65" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#F9C8D8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="scLpf" x1="65" y1="19" x2="65" y2="65" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="40%"  stopColor="#F9C8D8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.55" />
            </linearGradient>
            <radialGradient id="scLcg" cx="50%" cy="40%" r="60%">
              <stop offset="0%"   stopColor="#E8C76A" />
              <stop offset="60%"  stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8860B" />
            </radialGradient>
            <radialGradient id="scLci" cx="40%" cy="35%" r="65%">
              <stop offset="0%"   stopColor="#FFF7D6" />
              <stop offset="100%" stopColor="#D4AF37" />
            </radialGradient>
          </defs>
        </svg>
        <div className="sc-lotus-glow" />
      </div>
      <span className="sc-lotus-line" />
    </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   VIDYĀ WORKSHOP DATA
═══════════════════════════════════════════════════════════════ */
const VIDYA_WORKSHOPS = [
  {
    id: 'narayani',
    image: narayaniImg,
    title: 'Nārāyaṇī Vidyā',
    description: 'Nārāyaṇī Vidyā is the Shakti-knowledge of the Supreme Mother as Nārāyaṇī, the feminine sovereignty that holds, moves, and completes the universe. In this vidyā, Devi is realized as the source of protection, order, nourishment, and grace behind all creation, guiding the seeker with divine compassion and strength.',
  },
  {
    id: 'dhanvantari',
    image: dhanvantariImg,
    title: 'Dhanvantari Vidyā',
    description: 'Dhanvantari Vidyā invokes Bhagavan Dhanvantari, the divine physician, to restore balance, strengthen prāṇa, and promote healing of body, mind, and spirit through sacred practice and disciplined devotion.',
  },
  {
    id: 'ashta-lakshmi',
    image: ashtaLakshmiImg,
    title: 'Aṣṭa Lakṣmī Vidyā',
    description: 'Aṣṭa Lakṣmī Vidyā reveals the eight sacred forms of Goddess Lakshmi, bringing prosperity, wisdom, courage, success, nourishment, lineage, abundance, and divine grace into every aspect of life.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   SECTION 2 — WORKSHOPS  (maroon bg)
═══════════════════════════════════════════════════════════════ */
export function WorkshopsCarousel() {
  const navigate = useNavigate();
  return (
    <section className="sc sc--workshops">
      <div className="sc__pattern sc__pattern--alt" aria-hidden="true" />
      <div className="sc__container">

        <ScrollReveal className="sc__header">
          <p className="sc__eyebrow">
            <span className="sc__eyebrow-line" />
            UPCOMING WORKSHOPS
            <span className="sc__eyebrow-line" />
          </p>
          <h2 className="sc__title font-cinzel">
            Spiritual <span className="sc__gold">Workshops</span>
          </h2>
          <p className="sc__subtitle font-cormorant">
            Participate in spiritual workshops, guided practices, and sacred learning experiences.
          </p>
        </ScrollReveal>

        <div className="sc__grid sc__grid--3">
          {VIDYA_WORKSHOPS.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.1}>
              <motion.div
                className="vidya-card"
                style={{ height: '100%' }}
                whileHover={{ y: -8, boxShadow: '0 28px 64px rgba(123,30,58,0.13), 0 0 36px rgba(184,134,11,0.18)' }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="vidya-card__accent" />
                <div className="vidya-card__thumb">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="vidya-card__img"
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </div>
                <div className="vidya-card__body">
                  <h3 className="vidya-card__title font-cinzel">{item.title}</h3>
                  <div className="vidya-card__rule">
                    <span className="vidya-card__rule-line" />
                    <span className="vidya-card__rule-dot" />
                    <span className="vidya-card__rule-line" />
                  </div>
                  <p className="vidya-card__desc font-cormorant">{item.description}</p>
                  <GoldenButton
                    label="Learn More"
                    size="md"
                    onClick={() => navigate('/workshops')}
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="sc__footer">
          <GoldenButton
            label="View All Workshops"
            size="lg"
            onClick={() => navigate('/workshops')}
          />
        </ScrollReveal>

      </div>
    </section>
  );
}
