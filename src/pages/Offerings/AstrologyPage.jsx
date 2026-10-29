import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import ComingSoonModal from '../../components/common/ComingSoonModal.jsx';
import govindaImg  from '../../assets/govinda.png';
import { FooterSection } from '../Home/HomeSections.jsx';
import astrologyImg from '../../assets/astrology.jpeg';
import homamImg      from '../../assets/homam_offerings.png';
import abhishekamImg from '../../assets/abhishekam.png';
import yantraImg     from '../../assets/yantra_puja_offerings.png';
import archanaImg    from '../../assets/archana.png';
import logoImg from '../../assets/logo.png';
import TempleSilpaShastra from './TempleSilpaShastra.jsx';
import SouthIndianIconography from './SouthIndianIconography.jsx';
import './AstrologyPage.css';

const WA_URL =
  'https://wa.me/919390886029?text=Namaste%20%F0%9F%99%8F%20I%20would%20like%20to%20book%20a%20Consultation.';

const OFFERING_COMING_SOON_MESSAGE =
  'We are working on adding more information about this offering. Please check back soon for updates.';

const ASTROLOGY_CHECKLIST = [
  'Horoscope Analysis',
  'Career Guidance',
  'Marriage Compatibility',
  'Health Guidance',
  'Family Guidance',
  'Spiritual Remedies',
  'Muhurta Guidance',
  'Mantra Recommendations',
  'Dosha Analysis',
  'Practical Life Guidance',
];

const ritualCards = [
  {
    id: 'homas',
    icon: '🔥',
    title: 'Homas',
    desc: 'Homa is the sacred art of offering mantras, devotion, and sacred substances into the consecrated fire through which the devas are invoked and worshipped. At Sri Mahavidyeswari Tantra Peetham, we perform Homas with proper saṅkalpa, praying for divine grace, protection, removal of obstacles, and the fulfillment of righteous wishes.',
    path: '/offerings/homas',
    img: homamImg,
  },
  {
    id: 'archana',
    icon: '🌸',
    title: 'Archana',
    desc: "Archana is the devotional recitation of the deity's sacred names with flowers, kumkum, turmeric, and other traditional offerings. Performed with proper saṅkalpa, it invokes the deity's blessings for well-being, protection, clarity, peace, and auspiciousness.",
    path: '/offerings/archana',
    img: archanaImg,
  },
  {
    id: 'abhishekam',
    icon: '💧',
    title: 'Abhishekam',
    desc: 'Abhishekam is the sacred ritual of offering water, milk, and other traditional substances to the deity with devotion and reverence. It is performed with proper saṅkalpa to invoke divine blessings, spiritual growth, purity, protection, and inner peace.',
    path: '/offerings/abhishekam',
    img: abhishekamImg,
  },
  {
    id: 'yantra-puja',
    icon: '🔱',
    title: 'Yantra Pūjā',
    desc: "Yantra Pūjā is the sacred worship of a deity's yantra through mantra, offerings, and devotion. This ritual awakens the yantra as a living seat of divine power, bringing protection, harmony, clarity, spiritual strength, and auspiciousness.",
    path: '/offerings/yantra-puja',
    img: yantraImg,
  },
];

export default function AstrologyPage() {
  const location = useLocation();
  const [comingSoonOffering, setComingSoonOffering] = useState(null);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (!hash) return;
    const timer = window.setTimeout(() => {
      const el = document.getElementById(hash);
      if (!el) return;
      const navbar = document.querySelector('nav.navbar');
      const offset = navbar ? navbar.offsetHeight : 72;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 18;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }, 280);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <div className="aop-page">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="aop-hero">

        <motion.div
          className="aop-hero__left"
          initial={{ opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="aop-hero__eyebrow"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ✨ Sacred Offerings
          </motion.span>

          <h1 className="aop-hero__h1 font-cinzel">
            Sacred Spiritual<br />
            Offerings for<br />
            <span className="aop-hero__h1-gold">Divine Growth</span>
          </h1>

          <p className="aop-hero__desc font-serif">
            Discover the sacred services and spiritual offerings of Sri
            Mahavidyeswari Tantra Peetham. Every offering is rooted in authentic
            Guru Parampara and traditional Shastra, guiding seekers toward
            clarity, protection, inner transformation, and spiritual evolution.
          </p>

          <p className="aop-hero__desc font-serif">
            From Astrology and Sri Vidya guidance to sacred rituals, mantra
            sadhana, homas, spiritual counseling, and traditional practices,
            each offering is designed to support your journey with wisdom,
            devotion, and divine grace.
          </p>

          <div className="aop-hero__divider">
            <span className="aop-hero__divider-line" />
            <img src={logoImg} alt="" className="aop-hero__divider-om-img" />
            <span className="aop-hero__divider-line" />
          </div>

          <motion.div
            className="aop-hero__btns"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <GoldenButton
              label="Book Consultation"
              size="lg"
              onClick={() =>
                document
                  .getElementById('astrology-section')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            />
            <GoldenButton
              label="Explore Offerings"
              size="lg"
              outlined
              onClick={() =>
                document
                  .getElementById('offerings-section')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="aop-hero__right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          <div className="aop-hero__deity-halo" />
          <img
            src={govindaImg}
            alt="Lord Govinda reclining — Sacred Offerings"
            className="aop-hero__deity"
            loading="eager"
            draggable="false"
          />
        </motion.div>

      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — ASTROLOGY
      ═══════════════════════════════════════════════════════ */}
      <section id="astrology-section" className="aop-astro on-light">
        <div className="aop-astro__inner">
          <div className="aop-astro__grid">

            {/* LEFT — image */}
            <ScrollReveal direction="right" duration={0.9}>
              <div className="aop-feat-img-col">
                <div className="aop-feat-img-glow" />
                <motion.div
                  className="aop-feat-img-card"
                  whileHover={{
                    scale: 1.022,
                    boxShadow:
                      '0 48px 96px rgba(90,18,40,0.20), 0 0 0 2.5px rgba(212,175,55,0.65), 0 0 64px rgba(212,175,55,0.16)',
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <img
                    src={astrologyImg}
                    alt="Vedic Astrology — Sacred Jyotisha"
                    className="aop-feat-img"
                    loading="lazy"
                  />
                  <div className="aop-feat-img-shine" />
                </motion.div>
                <span className="aop-feat-corner aop-feat-corner--tl">✦</span>
                <span className="aop-feat-corner aop-feat-corner--br">✦</span>
              </div>
            </ScrollReveal>

            {/* RIGHT — content */}
            <ScrollReveal direction="left" duration={0.85}>
              <div className="aop-feat-content">

                <span className="aop-section-badge">✨ Sacred Astrology</span>

                <h2 className="aop-feat-h2 font-cinzel">
                  Traditional Astrology Guidance
                </h2>

                <p className="aop-body font-serif">
                  At Sri MahaVidyesvari Tantra Peetham, we offer authentic Vedic
                  Jyotisha consultations rooted in classical tradition and Guru
                  Parampara. Our astrology guidance goes beyond prediction — it
                  illuminates the deeper karmic patterns of your life and provides
                  practical, spiritually grounded remedies aligned with your
                  dharmic path.
                </p>

                <p className="aop-body font-serif">
                  Each consultation is conducted with reverence, precision, and
                  deep scriptural knowledge, helping you navigate life's
                  challenges with clarity, confidence, and divine support.
                </p>

                <div className="aop-checklist-block">
                  <p className="aop-checklist-label font-cinzel">Consultation Includes</p>
                  <div className="aop-checklist">
                    {ASTROLOGY_CHECKLIST.map((item, i) => (
                      <motion.div
                        key={item}
                        className="aop-checklist__item"
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <span className="aop-checklist__tick">✔</span>
                        <span className="aop-checklist__text font-serif">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="aop-feat-cta">
                  <GoldenButton
                    label="Book Consultation"
                    size="lg"
                    onClick={() => window.open(WA_URL, '_blank')}
                  />
                </div>

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — TEMPLE ŚILPA ŚĀSTRA
          (expanded sacred-architecture knowledge library)
      ═══════════════════════════════════════════════════════ */}
      <TempleSilpaShastra />

      {/* ═══════════════════════════════════════════════════════
          SECTION 3B — SOUTH INDIAN ICONOGRAPHY / PĀÑCALOHA
      ═══════════════════════════════════════════════════════ */}
      <SouthIndianIconography />

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — OTHER SACRED OFFERINGS (4-card grid)
      ═══════════════════════════════════════════════════════ */}

      <section id="offerings-section" className="aop-rituals on-light">
        <div className="aop-rituals__inner">

          <ScrollReveal direction="up" duration={0.7}>
            <div className="aop-rituals__header">
              <span className="aop-section-badge">🪔 Sacred Rituals</span>
              <h2 className="aop-rituals__title font-cinzel">
                Other Sacred Offerings
              </h2>
              <p className="aop-rituals__subtitle font-serif">
                Explore the remaining sacred services offered by Sri Mahavidyeswari
                Tantra Peetham. Each offering is performed according to authentic
                Śāstric traditions with proper saṅkalpa, devotion, and Guru Parampara.
              </p>
            </div>
          </ScrollReveal>

          <div className="aop-rcards-grid">
            {ritualCards.map((card, i) => (
              <ScrollReveal key={card.id} direction="up" delay={i * 0.08} duration={0.75}>
                <motion.div
                  className="aop-ocard"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="aop-ocard__img-wrap">
                    <img
                      src={card.img}
                      alt={card.title}
                      className={`aop-ocard__img${card.id === 'abhishekam' ? ' aop-ocard__img--abhishekam' : ''}`}
                      loading="lazy"
                    />
                    <div className="aop-ocard__img-overlay" />
                    <span className="aop-ocard__icon">{card.icon}</span>
                  </div>
                  <div className="aop-ocard__body">
                    <h3 className="aop-ocard__title font-cinzel">{card.title}</h3>
                    <p className="aop-ocard__desc aop-ocard__desc--full font-serif">{card.desc}</p>
                    <div className="aop-ocard__footer">
                      <GoldenButton
                        label="Know More"
                        outlined
                        onClick={() => setComingSoonOffering(card.title)}
                      />
                    </div>
                  </div>
                  <div className="aop-ocard__topbar" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5 — NEED GUIDANCE? (CTA) (DEEP MAROON)
      ═══════════════════════════════════════════════════════ */}
      <section className="aop-cta">

        {/* subtle gold decorative edges */}
        <div className="aop-cta__deco-line aop-cta__deco-line--left" aria-hidden="true" />
        <div className="aop-cta__deco-line aop-cta__deco-line--right" aria-hidden="true" />
        <div className="aop-cta__deco-diamond aop-cta__deco-diamond--tl" aria-hidden="true">✦</div>
        <div className="aop-cta__deco-diamond aop-cta__deco-diamond--tr" aria-hidden="true">✦</div>
        <div className="aop-cta__deco-lotus aop-cta__deco-lotus--bl" aria-hidden="true">❋</div>
        <div className="aop-cta__deco-lotus aop-cta__deco-lotus--br" aria-hidden="true">❋</div>
        <div className="aop-cta__deco-wave" aria-hidden="true" />

        <ScrollReveal direction="up" duration={0.8}>
          <div className="aop-cta__inner">
            <span className="aop-cta__badge">🙏 We Are Here to Help</span>
            <h2 className="aop-cta__heading font-cinzel">
              Need Guidance?<br />
              <span className="aop-cta__heading-gold">We Are Here for You</span>
            </h2>
            <p className="aop-cta__body font-serif">
              Whether you seek clarity through Astrology, sacred ritual guidance,
              or a deeper understanding of your spiritual path — our Guru and
              team are here to support you with authentic, compassionate, and
              śāstric guidance rooted in Guru Parampara.
            </p>
            <div className="aop-cta__divider">
              <span className="aop-cta__divider-line" />
              <span className="aop-cta__divider-diamond">✦</span>
              <span className="aop-cta__divider-line" />
            </div>
            <div className="aop-cta__btns">
              <GoldenButton
                label="Book Consultation on WhatsApp"
                size="lg"
                onClick={() => window.open(WA_URL, '_blank')}
              />
              <GoldenButton
                label="Explore All Offerings"
                size="lg"
                outlined
                onClick={() =>
                  document
                    .getElementById('astrology-section')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════ */}
      <FooterSection />

      <ComingSoonModal
        open={Boolean(comingSoonOffering)}
        onClose={() => setComingSoonOffering(null)}
        itemName={comingSoonOffering}
        title="Details Coming Soon"
        message={OFFERING_COMING_SOON_MESSAGE}
        eyebrow="Sacred Offerings"
      />

    </div>
  );
}
