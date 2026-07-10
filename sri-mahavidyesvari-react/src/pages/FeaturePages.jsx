import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.jsx';
import GoldenButton from '../components/common/GoldenButton.jsx';
import GlassCard from '../components/common/GlassCard.jsx';
import ScrollReveal from '../components/common/ScrollReveal.jsx';
import { blogPosts, workshops, offerings, events } from '../utils/mockData.js';
import { FiCalendar, FiClock, FiUsers, FiMapPin } from 'react-icons/fi';
import govindaImg from '../assets/govinda.png';
import blogHeroImg from '../assets/blog_hero.png';
import eventHeroImg from '../assets/event_hero.png';
import sriMahadeviImg from '../assets/sri_mahadevi.png';
import workshopHeroImg from '../assets/workshop_hero.png';
import narayaniImg from '../assets/narayani_vidya.png';
import dhanvantariImg from '../assets/dhanvantari.png';
import ashtaLakshmiImg from '../assets/ashta_lakshmi_vidya.png';
import dasaMahavidyasImg from '../assets/dasa_maha_vidyas.png';
import kshipraGanapatiImg from '../assets/kshipra_ganapati.png';
import fundamentalsTantraImg from '../assets/fundamentals_of_tantra.png';
import completeChakraImg from '../assets/complete_chakra_course.png';
import ayyappaVidyaImg from '../assets/ayyappa_vidya.png';
import { FooterSection } from './Home/HomeSections.jsx';
import './FeaturePages.css';

const WA_URL = 'https://wa.me/91YOURNUMBER?text=Namaste%20%F0%9F%99%8F%20I%20would%20like%20to%20book%20a%20Workshop%20seat.';
const WA_NARAYANI = 'https://wa.me/91YOURNUMBER?text=Namaste%20%F0%9F%99%8F%0AI%20would%20like%20to%20register%20for%20the%20N%C4%81r%C4%81ya%E1%B9%87%C4%AB%20Vidy%C4%81%20Workshop.';
const WA_DHANVANTARI = 'https://wa.me/91YOURNUMBER?text=Namaste%20%F0%9F%99%8F%0AI%20would%20like%20to%20register%20for%20the%20Dhanvantari%20Vidy%C4%81%20Workshop.';

const OTHER_WORKSHOPS = [
  {
    id: 'ashta-lakshmi-vidya',
    title: 'Aṣṭa Lakṣmī Vidyā',
    desc: 'Aṣṭa Lakṣmī Vidyā approaches Goddess Lakshmi not as a single blessing, but as eight living streams of abundance that nourish every dimension of life. Discover the spiritual significance of Adi Lakshmi, Dhanya Lakshmi, Dhairya Lakshmi, Gaja Lakshmi, Santana Lakshmi, Vijaya Lakshmi, Vidya Lakshmi, and Dhana Lakshmi.',
    img: ashtaLakshmiImg,
    path: '/workshops/ashta-lakshmi-vidya',
  },
  {
    id: 'dasa-maha-vidyas',
    title: 'Daśa Mahāvidyās',
    desc: 'Step into the profound world of the Daśa Mahāvidyās, the Ten Wisdom Goddesses who govern every aspect of cosmic reality. This workshop explores their symbolism, mantra traditions, spiritual practices, and the deeper framework behind these powerful divine manifestations.',
    img: dasaMahavidyasImg,
    path: '/workshops/dasa-maha-vidyas',
  },
  {
    id: 'kshipra-ganapati',
    title: 'Kṣipra Gaṇapati',
    desc: 'In a world demanding speed, Kṣipra Gaṇapati is revered as the swift remover of obstacles and the bestower of divine grace. Learn the sacred worship, mantra, and spiritual practices that help cultivate wisdom, success, protection, and auspicious beginnings.',
    img: kshipraGanapatiImg,
    path: '/workshops/kshipra-ganapati',
  },
  {
    id: 'fundamentals-of-tantra',
    title: 'Fundamentals of Tantra',
    desc: 'Begin your journey into the authentic world of Tantra by learning its essential principles, Guru Parampara, mantra, yantra, sādhana, and traditional spiritual disciplines through structured and practical guidance.',
    img: fundamentalsTantraImg,
    path: '/workshops/fundamentals-of-tantra',
  },
  {
    id: 'complete-chakra-course',
    title: 'Complete Chakra Course',
    desc: 'Explore the complete science of the seven chakras, their spiritual significance, meditation techniques, energy balance, purification methods, and practical tools for inner transformation and holistic well-being.',
    img: completeChakraImg,
    path: '/workshops/complete-chakra-course',
  },
  {
    id: 'ayyappa-vidya',
    title: 'Ayyappa Vidyā',
    desc: 'Understand the sacred traditions of Lord Ayyappa, including devotional practices, mantra, discipline, and the spiritual significance of Maha Sastha, helping seekers cultivate devotion, courage, and self-mastery.',
    img: ayyappaVidyaImg,
    path: '/workshops/ayyappa-vidya',
  },
  {
    id: 'sadacharam',
    title: 'Sadacharam',
    desc: 'Discover the principles of Sadacharam (Right Conduct), a traditional guide to disciplined spiritual living that harmonizes daily actions with inner growth, devotion, and self-transformation.',
    img: null,
    path: '/workshops/sadacharam',
    comingSoon: true,
  },
  {
    id: 'sixty-four-yoginis',
    title: 'Sixty-four Yoginis Upasana Vidhi',
    desc: 'Enter the sacred tradition of the Sixty-four Yoginis and explore the profound spiritual practices, symbolism, and worship methods associated with these powerful divine feminine energies.',
    img: null,
    path: '/workshops/sixty-four-yoginis',
    comingSoon: true,
  },
];

const DHANVANTARI_HIGHLIGHTS = [
  'Introduction to Bhagavan Dhanvantari',
  'Foundations of Ayurveda',
  'Understanding Vāta, Pitta & Kapha',
  'Ayurvedic Daily Lifestyle (Dinacharya)',
  'Seasonal Living (Ritucharya)',
  'Sattvic Food & Nutrition',
  'Healing Mantras and Spiritual Practices',
  'Prāṇa and Holistic Wellness',
  'Traditional Health Guidance',
  'Interactive Question & Answer Session',
];

const NARAYANI_HIGHLIGHTS = [
  'Introduction to Nārāyaṇī Vidyā',
  'Traditional Guru Parampara Teachings',
  'Scriptural Foundations',
  'Sacred Mantras and Their Significance',
  'Guided Spiritual Practice',
  'Practical Daily Sādhana',
  'Devotional Discipline',
  'Question & Answer Session',
  'Certificate of Participation (if applicable)',
];

// ─── Blog Page ────────────────────────────────────────────────────────────────
export function BlogPage() {
  return (
    <div className="feature-page">
      <Navbar />

      {/* ══ HERO — Premium split layout ══ */}
      <section className="fp-hero">

        {/* LEFT — content 50% */}
        <motion.div
          className="fp-hero__left"
          initial={{ opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="fp-hero__badge"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            📖 Spiritual Articles
          </motion.span>

          <motion.h1
            className="fp-hero__h1 font-cinzel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.32 }}
          >
            Wisdom Through<br />
            <span className="fp-hero__h1-gold">Sacred Knowledge</span>
          </motion.h1>

          <motion.div
            className="fp-hero__divider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.44 }}
          >
            <span className="fp-hero__divider-line" />
            <span className="fp-hero__divider-om font-devanagari">ॐ</span>
            <span className="fp-hero__divider-line" />
          </motion.div>

          <motion.p
            className="fp-hero__desc font-serif"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.50 }}
          >
            Explore authentic articles on Sri Vidya, Tantra, Sanatana Dharma,
            and Guru Parampara. Every article is rooted in traditional wisdom
            and presented for sincere seekers on the path of self-discovery.
          </motion.p>

          <motion.p
            className="fp-hero__desc font-serif"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.56 }}
          >
            From sacred rituals and mantra to philosophy and spiritual practice,
            each article illuminates the timeless teachings of Sanātana Dharma
            with clarity, depth, and devotion.
          </motion.p>

          <motion.div
            className="fp-hero__btns"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
          >
            <GoldenButton label="Explore Articles" size="lg"
              onClick={() => document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth' })} />
            <GoldenButton label="Latest Posts" size="lg" outlined
              onClick={() => document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth' })} />
          </motion.div>
        </motion.div>

        {/* RIGHT — image 50% */}
        <motion.div
          className="fp-hero__right"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="fp-hero__img-halo" />
          <img
            src={blogHeroImg}
            alt="Sacred Knowledge — Spiritual Blog"
            className="fp-hero__img"
            loading="eager"
            draggable="false"
          />
        </motion.div>

      </section>

      {/* ══ BLOG GRID ══ */}
      <div className="blog-grid" id="blog-grid">
        {blogPosts.map((post, i) => (
          <ScrollReveal key={post.id} delay={i * 0.08}>
            <motion.div className="blog-card" whileHover={{ y: -6, boxShadow: '0 0 24px rgba(184,134,11,0.3)' }}>
              <div className="blog-card__thumb"><img src={post.thumbnail} alt={post.title} loading="lazy" /></div>
              <div className="blog-card__body">
                <span className="blog-card__category">{post.category}</span>
                <h3 className="blog-card__title">{post.title}</h3>
                <div className="blog-card__meta"><span>{post.date}</span><span>·</span><span>{post.readTime}</span></div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <FooterSection />
    </div>
  );
}

// ─── Workshops Page ───────────────────────────────────────────────────────────
export function WorkshopsPage() {
  const navigate = useNavigate();
  return (
    <div className="feature-page">
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO — Premium split layout
      ══════════════════════════════════════════ */}
      <section className="wp-hero">

        {/* LEFT — content 45% */}
        <motion.div
          className="wp-hero__left"
          initial={{ opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="wp-hero__eyebrow"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ✨ Sacred Workshops
          </motion.span>

          <motion.h1
            className="wp-hero__h1 font-cinzel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.32 }}
          >
            Traditional Spiritual Workshops<br />
            <span className="wp-hero__h1-gold">Rooted in Guru Parampara</span>
          </motion.h1>

          <motion.div
            className="wp-hero__divider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.44 }}
          >
            <span className="wp-hero__divider-line" />
            <span className="wp-hero__divider-om font-devanagari">ॐ</span>
            <span className="wp-hero__divider-line" />
          </motion.div>

          <motion.p
            className="wp-hero__desc font-serif"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.50 }}
          >
            Explore authentic spiritual workshops designed to preserve and transmit
            the timeless wisdom of Tantra, Mantra, and Śāstric traditions. Each
            workshop combines sacred knowledge, disciplined practice, and practical
            guidance to support seekers on their spiritual journey.
          </motion.p>

          <motion.div
            className="wp-hero__btns"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
          >
            <GoldenButton
              label="Explore Workshops"
              size="lg"
              onClick={() =>
                document
                  .getElementById('workshops-section')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            />
            <GoldenButton
              label="Book Your Seat"
              size="lg"
              outlined
              onClick={() => window.open(WA_URL, '_blank')}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT — image 55% */}
        <motion.div
          className="wp-hero__right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          <div className="wp-hero__img-halo" />
          <img
            src={workshopHeroImg}
            alt="Sacred Spiritual Workshops — Guru Parampara"
            className="wp-hero__img"
            loading="eager"
            draggable="false"
          />
        </motion.div>

      </section>

      {/* ══════════════════════════════════════════════════════
          NĀRĀYAṆĪ VIDYĀ — Featured Workshop Section
      ══════════════════════════════════════════════════════ */}
      <section className="wp-narayani wp-narayani--light">
        {/* faint Sanskrit watermark */}
        <div className="wp-narayani__watermark" aria-hidden="true" />

        <div className="wp-narayani__inner">
          <div className="wp-narayani__grid">

            {/* LEFT — image 45% */}
            <ScrollReveal direction="right" duration={0.9}>
              <div className="wp-feat-img-col">
                <div className="wp-feat-img-glow" />
                <motion.div
                  className="wp-feat-img-card"
                  whileHover={{
                    scale: 1.022,
                    boxShadow:
                      '0 48px 96px rgba(90,18,40,0.20), 0 0 0 2.5px rgba(212,175,55,0.65), 0 0 64px rgba(212,175,55,0.16)',
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <img
                    src={narayaniImg}
                    alt="Nārāyaṇī Vidyā — Sacred Workshop"
                    className="wp-feat-img"
                    loading="lazy"
                  />
                  <div className="wp-feat-img-shine" />
                </motion.div>
                <span className="wp-feat-corner wp-feat-corner--tl">✶</span>
                <span className="wp-feat-corner wp-feat-corner--br">✶</span>
              </div>
            </ScrollReveal>

            {/* RIGHT — content 55% */}
            <ScrollReveal direction="left" duration={0.85}>
              <div className="wp-feat-content">

                <span className="wp-section-badge">✨ Featured Workshop</span>
                <span className="wp-section-badge wp-section-badge--pink">🌸 Sacred Learning</span>

                <h2 className="wp-feat-h2 font-cinzel">
                  Nārāyaṇī Vidyā
                </h2>

                <div className="wp-feat-body font-serif">
                  <p>
                    Nārāyaṇī Vidyā is the sacred wisdom of the Divine Mother as Nārāyaṇī,
                    the Supreme Śakti who sustains, protects, and governs the universe with
                    boundless compassion and strength. This workshop introduces seekers to
                    the traditional understanding of Nārāyaṇī through authentic Guru
                    Parampara and Śāstric teachings.
                  </p>
                  <p>
                    Participants will learn the deeper spiritual significance of the Divine
                    Mother, understand the principles of devotion and disciplined practice,
                    and explore the sacred foundations of mantra, meditation, and inner
                    transformation. The teachings emphasize both scriptural knowledge and
                    practical application, enabling seekers to cultivate clarity, faith,
                    and spiritual stability in everyday life.
                  </p>
                  <p>
                    Whether you are beginning your spiritual journey or seeking to deepen
                    your existing practice, Nārāyaṇī Vidyā provides a strong foundation
                    rooted in reverence, wisdom, and divine grace.
                  </p>
                </div>

                {/* Workshop Highlights card */}
                <div className="wp-highlights">
                  <p className="wp-highlights__title font-cinzel">Workshop Highlights</p>
                  <div className="wp-highlights__grid">
                    {NARAYANI_HIGHLIGHTS.map((item, i) => (
                      <motion.div
                        key={item}
                        className="wp-highlights__item"
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <span className="wp-highlights__tick">✔</span>
                        <span className="wp-highlights__text font-serif">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="wp-feat-cta">
                  <GoldenButton
                    label="Book Your Seat"
                    size="lg"
                    onClick={() => window.open(WA_NARAYANI, '_blank')}
                  />
                </div>

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DHANVANTARI VIDYĀ — Featured Workshop Section
      ══════════════════════════════════════════════════════ */}
      <section className="wp-dhanvantari">
        <div className="wp-narayani__watermark wp-dhanvantari__watermark" aria-hidden="true" />

        <div className="wp-narayani__inner">
          <div className="wp-narayani__grid">

            {/* LEFT — image 45% */}
            <ScrollReveal direction="right" duration={0.9}>
              <div className="wp-feat-img-col">
                <div className="wp-feat-img-glow" />
                <motion.div
                  className="wp-feat-img-card"
                  whileHover={{
                    scale: 1.022,
                    boxShadow:
                      '0 48px 96px rgba(90,18,40,0.20), 0 0 0 2.5px rgba(212,175,55,0.65), 0 0 64px rgba(212,175,55,0.16)',
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <img
                    src={dhanvantariImg}
                    alt="Bhagavan Dhanvantari — Divine Physician"
                    className="wp-feat-img wp-feat-img--contain"
                    loading="lazy"
                  />
                  <div className="wp-feat-img-shine" />
                </motion.div>
                <span className="wp-feat-corner wp-feat-corner--tl">✶</span>
                <span className="wp-feat-corner wp-feat-corner--br">✶</span>
              </div>
            </ScrollReveal>

            {/* RIGHT — content 55% */}
            <ScrollReveal direction="left" duration={0.85}>
              <div className="wp-feat-content">

                <span className="wp-section-badge">✨ Featured Workshop</span>
                <span className="wp-section-badge wp-section-badge--green">🌿 Divine Healing</span>

                <h2 className="wp-feat-h2 font-cinzel">
                  Dhanvantari Vidyā
                </h2>

                <div className="wp-feat-body font-serif">
                  <p>
                    Dhanvantari Vidyā is the sacred wisdom of Bhagavan Dhanvantari, the
                    Divine Physician and the eternal source of Ayurveda. This workshop
                    introduces participants to the timeless principles of holistic health,
                    spiritual healing, and Ayurvedic living through authentic Guru Parampara
                    and traditional Śāstric teachings.
                  </p>
                  <p>
                    Participants will explore the spiritual foundations of Ayurveda,
                    understanding that true health is the harmonious balance of body, mind,
                    prāṇa, and consciousness. The workshop provides an introduction to
                    Ayurvedic philosophy, daily lifestyle practices (Dinacharya), seasonal
                    living (Ritucharya), sattvic nutrition, and simple wellness principles
                    that support physical vitality, emotional balance, and spiritual growth.
                  </p>
                  <p>
                    The teachings also explain the significance of Bhagavan Dhanvantari,
                    sacred healing mantras, and traditional practices that promote inner
                    peace, resilience, and well-being. Through disciplined learning and
                    practical guidance, participants gain a deeper appreciation of Ayurveda
                    as a sacred science of life that nurtures both health and spiritual
                    evolution.
                  </p>
                </div>

                {/* Workshop Highlights card */}
                <div className="wp-highlights">
                  <p className="wp-highlights__title font-cinzel">Workshop Highlights</p>
                  <div className="wp-highlights__grid">
                    {DHANVANTARI_HIGHLIGHTS.map((item, i) => (
                      <motion.div
                        key={item}
                        className="wp-highlights__item"
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <span className="wp-highlights__tick">✔</span>
                        <span className="wp-highlights__text font-serif">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="wp-feat-cta">
                  <GoldenButton
                    label="Book Your Seat"
                    size="lg"
                    onClick={() => window.open(WA_DHANVANTARI, '_blank')}
                  />
                </div>

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          OTHER SACRED WORKSHOPS — Premium card grid
      ══════════════════════════════════════════════════════ */}
      <section className="wp-other-workshops wp-other-workshops--light">
        <div className="wp-other-workshops__inner">

          <ScrollReveal direction="up" duration={0.7}>
            <div className="wp-other-workshops__header">
              <span className="wp-section-badge">✨ Continue Your Learning</span>
              <h2 className="wp-other-workshops__title font-cinzel">Other Sacred Workshops</h2>
              <p className="wp-other-workshops__subtitle font-serif">
                Explore more traditional workshops rooted in authentic Guru Parampara and Śāstric wisdom.
                Each workshop is designed to deepen your spiritual knowledge, strengthen your sādhana,
                and guide you on the path of self-transformation.
              </p>
            </div>
          </ScrollReveal>

          <div className="wp-other-workshops__grid">
            {OTHER_WORKSHOPS.map((card, i) => (
              <ScrollReveal key={card.id} direction="up" delay={i * 0.08} duration={0.75}>
                <motion.div
                  className={`aop-ocard${card.comingSoon ? ' aop-ocard--coming-soon' : ''}`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  onClick={() => !card.comingSoon && navigate(card.path)}
                  style={{ cursor: card.comingSoon ? 'default' : 'pointer' }}
                >
                  <div className="aop-ocard__img-wrap">
                    {card.img ? (
                      <img src={card.img} alt={card.title} className="aop-ocard__img" loading="lazy" />
                    ) : (
                      <div className="wp-ocard__img-placeholder" />
                    )}
                    <div className="aop-ocard__img-overlay" />
                    {card.comingSoon && (
                      <span className="wp-ocard__coming-soon-badge">Coming Soon</span>
                    )}
                  </div>
                  <div className="aop-ocard__body">
                    <h3 className="aop-ocard__title font-cinzel">{card.title}</h3>
                    <p className="aop-ocard__desc aop-ocard__desc--full font-serif">{card.desc}</p>
                    <div className="aop-ocard__footer">
                      <GoldenButton
                        label={card.comingSoon ? 'Coming Soon' : 'Know More'}
                        outlined
                        onClick={(e) => { e.stopPropagation(); if (!card.comingSoon) navigate(card.path); }}
                        style={card.comingSoon ? { opacity: 0.55, cursor: 'not-allowed', pointerEvents: 'none' } : {}}
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

      {/* ══════════════════════════════════════════════════════
          CTA — Begin Your Spiritual Journey
      ══════════════════════════════════════════════════════ */}
      <section className="wp-cta">
        <div className="wp-cta__om font-devanagari" aria-hidden="true">ॐ</div>
        <ScrollReveal direction="up" duration={0.8}>
          <div className="wp-cta__inner">
            <span className="wp-section-badge">✨ Begin Your Spiritual Journey</span>
            <h2 className="wp-cta__heading font-cinzel">
              Start Your Sacred Learning<br />
              <span className="wp-cta__heading-gold">Journey Today</span>
            </h2>
            <p className="wp-cta__body font-serif">
              Join our authentic workshops rooted in Guru Parampara and traditional Śāstric wisdom.
              Whether you are beginning your spiritual journey or deepening your existing practice,
              our workshops provide structured guidance, practical learning, and spiritual discipline
              to help you progress with confidence and devotion.
            </p>
            <div className="wp-cta__divider">
              <span className="wp-cta__divider-line" />
              <span className="wp-cta__divider-diamond">✦</span>
              <span className="wp-cta__divider-line" />
            </div>
            <div className="wp-cta__btns">
              <GoldenButton
                label="Register Now"
                size="lg"
                onClick={() => window.open(WA_URL, '_blank')}
              />
              <GoldenButton
                label="Explore Courses"
                size="lg"
                outlined
                onClick={() => navigate('/courses')}
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <FooterSection />

    </div>
  );
}

// ─── Offerings Page ───────────────────────────────────────────────────────────
export function OfferingsPage() {
  const navigate = useNavigate();

  return (
    <div className="feature-page">
      <Navbar />

      {/* ── Hero Section ── */}
      <motion.section
        className="offerings-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <img
          src={govindaImg}
          alt="Lord Govinda — Sacred Offerings"
          className="offerings-hero__img"
          loading="eager"
        />
        <div className="offerings-hero__overlay" />
        <motion.div
          className="offerings-hero__content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        >
          <p className="section-eyebrow offerings-hero__eyebrow">DIVINE SERVICES</p>
          <h1 className="font-cinzel golden-text offerings-hero__title">Sacred Offerings</h1>
          <p className="offerings-hero__subtitle">
            Book personalized puja, homam, and archana services performed by
            qualified priests according to Vedic traditions.
          </p>
          <div className="offerings-hero__actions">
            <GoldenButton label="EXPLORE SERVICES" />
            <GoldenButton label="BOOK A PUJA" outlined />
          </div>
        </motion.div>
      </motion.section>

      {/* ── Offerings Grid ── */}
      <div className="offerings-grid">
        {offerings.map((o, i) => (
          <ScrollReveal key={o.id} delay={i * 0.1}>
            <motion.div className="offering-page-card" whileHover={{ y: -6, borderColor: 'rgba(184,134,11,0.5)', boxShadow: '0 0 24px rgba(184,134,11,0.2)' }}>
              <span style={{ fontSize: 48 }}>{o.icon}</span>
              <h3 className="offering-page-card__title">{o.title}</h3>
              <p className="offering-page-card__desc">{o.description}</p>
              <div className="offering-page-card__footer">
                <div>
                  <p style={{ color: '#E8C76A', fontWeight: 700, fontSize: 16 }}>{o.price}</p>
                  <p style={{ color: '#B8A882', fontSize: 12 }}>{o.duration}</p>
                </div>
                <GoldenButton label="BOOK" icon={FiCalendar} />
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

// ─── Events Page ──────────────────────────────────────────────────────────────
const eventFilters = ['All', 'Live', 'Workshop', 'Puja', 'Discourse'];

export function EventsPage() {
  const [filter, setFilter] = useState(0);
  const [tab, setTab] = useState(0);

  return (
    <div className="feature-page">
      <Navbar />

      {/* ══ HERO — Premium split layout ══ */}
      <section className="fp-hero">

        {/* LEFT — content 50% */}
        <motion.div
          className="fp-hero__left"
          initial={{ opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="fp-hero__badge"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            🪔 Sacred Events
          </motion.span>

          <motion.h1
            className="fp-hero__h1 font-cinzel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.32 }}
          >
            Experience Divine<br />
            <span className="fp-hero__h1-gold">Celebrations</span>
          </motion.h1>

          <motion.div
            className="fp-hero__divider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.44 }}
          >
            <span className="fp-hero__divider-line" />
            <span className="fp-hero__divider-om font-devanagari">ॐ</span>
            <span className="fp-hero__divider-line" />
          </motion.div>

          <motion.p
            className="fp-hero__desc font-serif"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.50 }}
          >
            Participate in sacred festivals, homas, pujas, workshops, and
            spiritual gatherings conducted by Sri MahaVidyesvari Tantra Peetham.
            Each event is rooted in authentic Guru Parampara and traditional
            Śāstric practice.
          </motion.p>

          <motion.p
            className="fp-hero__desc font-serif"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.56 }}
          >
            Join our sacred community for Guru events, traditional celebrations,
            and divine rituals that nourish the soul and deepen your connection
            to the Divine Mother.
          </motion.p>

          <motion.div
            className="fp-hero__btns"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
          >
            <GoldenButton label="Upcoming Events" size="lg"
              onClick={() => document.getElementById('events-content')?.scrollIntoView({ behavior: 'smooth' })} />
            <GoldenButton label="Register Now" size="lg" outlined
              onClick={() => window.open('https://wa.me/919390886029', '_blank')} />
          </motion.div>
        </motion.div>

        {/* RIGHT — image 50% */}
        <motion.div
          className="fp-hero__right"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="fp-hero__img-halo" />
          <img
            src={eventHeroImg}
            alt="Sacred Events — Sri MahaVidyesvari"
            className="fp-hero__img"
            loading="eager"
            draggable="false"
          />
        </motion.div>

      </section>

      <div id="events-content">

        {/* ══ VARAHI DEVI PUJA — Featured Event Card ══ */}
        <section className="varahi-event" id="varahi-event">
          <div className="varahi-event__inner">
            <ScrollReveal direction="up" duration={0.85}>
              <div className="varahi-event__header">
                <span className="varahi-event__eyebrow">🪔 Upcoming Sacred Event</span>
                <h2 className="varahi-event__title font-cinzel">Sri Varahi Devi Puja</h2>
                <div className="varahi-event__rule">
                  <span className="varahi-event__rule-line" />
                  <span className="varahi-event__rule-dot" />
                  <span className="varahi-event__rule-line" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15} duration={0.85}>
              <div className="varahi-event__card">
                {/* Left — image placeholder */}
                <div className="varahi-event__img-col">
                  <div className="varahi-event__img-placeholder">
                    <span className="varahi-event__img-icon">🪔</span>
                    <p className="varahi-event__img-label font-cinzel">Sri Varahi Devi</p>
                  </div>
                  <span className="varahi-event__status-badge">Upcoming</span>
                </div>

                {/* Right — content */}
                <div className="varahi-event__content">
                  <h3 className="varahi-event__card-title font-cinzel">Sri Varahi Devi Puja</h3>

                  <p className="varahi-event__desc">
                    Join us for the sacred worship of Sri Varahi Devi, one of the powerful
                    manifestations of the Divine Mother. Participate in traditional rituals,
                    mantra chanting, and receive divine blessings for protection, courage,
                    prosperity, and spiritual growth.
                  </p>

                  <div className="varahi-event__details">
                    <div className="varahi-event__detail-row">
                      <span className="varahi-event__detail-icon">📍</span>
                      <div>
                        <p className="varahi-event__detail-label">Location</p>
                        <p className="varahi-event__detail-value">
                          Sri MahaVidyesvari Tantra Peetham<br />
                          Visakhapatnam, Andhra Pradesh, India
                        </p>
                      </div>
                    </div>
                    <div className="varahi-event__detail-row">
                      <span className="varahi-event__detail-icon">📅</span>
                      <div>
                        <p className="varahi-event__detail-label">Date</p>
                        <p className="varahi-event__detail-value">Coming Soon</p>
                      </div>
                    </div>
                    <div className="varahi-event__detail-row">
                      <span className="varahi-event__detail-icon">⏰</span>
                      <div>
                        <p className="varahi-event__detail-label">Time</p>
                        <p className="varahi-event__detail-value">Will be Announced</p>
                      </div>
                    </div>
                  </div>

                  <div className="varahi-event__btns">
                    <motion.button
                      className="varahi-event__btn varahi-event__btn--primary font-cinzel"
                      onClick={() => window.open('https://wa.me/919390886029', '_blank')}
                      whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(37,211,102,0.35)' }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.22 }}
                    >
                      Register Interest
                    </motion.button>
                    <motion.button
                      className="varahi-event__btn varahi-event__btn--secondary font-cinzel"
                      onClick={() => navigate('/contact')}
                      whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(184,134,11,0.30)' }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.22 }}
                    >
                      Contact Us
                    </motion.button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Banner */}
        <div className="events-featured">
          <div className="events-featured__content">
            <span className="events-featured__badge">FEATURED EVENT</span>
            <h2 style={{ color: '#FFF7D6', fontSize: 28, fontWeight: 600, marginTop: 16, lineHeight: 1.3 }}>Sri Vidya Maha Diksha<br />Ceremony 2025</h2>
            <p style={{ color: '#B8A882', fontSize: 14, lineHeight: 1.6, marginTop: 12, maxWidth: 400 }}>A rare and sacred initiation into the supreme Sri Vidya tradition. Limited seats. Register now.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <GoldenButton label="REGISTER NOW" />
              <GoldenButton label="LEARN MORE" outlined />
            </div>
          </div>
          <div className="events-countdown">
            <p style={{ fontSize: 11, color: '#E8C76A', letterSpacing: 3, marginBottom: 16 }}>STARTS IN</p>
            <div className="events-countdown__units">
              {[['03', 'DAYS'], ['14', 'HRS'], ['22', 'MIN'], ['45', 'SEC']].map(([v, l]) => (
                <div key={l} className="events-countdown__unit">
                  <span className="golden-text font-cinzel" style={{ fontSize: 28, fontWeight: 700 }}>{v}</span>
                  <span style={{ fontSize: 9, color: '#B8A882', letterSpacing: 1.5 }}>{l}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 20 }}>
              <FiCalendar size={13} color="#E8C76A" />
              <span style={{ fontSize: 13, color: '#E8C76A' }}>Jan 15, 2025</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
              <FiMapPin size={13} color="#B8A882" />
              <span style={{ fontSize: 13, color: '#B8A882' }}>Online + Chennai</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="events-filters">
          <div className="events-tabs">
            {['Upcoming', 'Past Events'].map((t, i) => (
              <button key={t} className={`events-tab ${tab === i ? 'events-tab--active' : ''}`} onClick={() => setTab(i)}>{t}</button>
            ))}
          </div>
          <div className="events-filter-chips">
            {eventFilters.map((f, i) => (
              <motion.button key={f} className={`filter-chip ${filter === i ? 'filter-chip--active' : ''}`} onClick={() => setFilter(i)} whileTap={{ scale: 0.95 }}>{f}</motion.button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {events.map((event, i) => (
            <ScrollReveal key={event.id} delay={i * 0.08}>
              <motion.div className="event-card" whileHover={{ y: -6, boxShadow: '0 0 28px rgba(184,134,11,0.3)' }}>
                <div className="event-card__thumb" style={{ background: `linear-gradient(135deg, ${event.gradientColors[0]}, ${event.gradientColors[1]})` }}>
                  <span style={{ fontSize: 56 }}>{event.emoji}</span>
                  <div className="event-card__type-badge" style={{ background: event.isLive ? '#E53935' : 'rgba(9,9,9,0.8)' }}>
                    {event.isLive && <span className="ws-card__live-dot" />}
                    {event.isLive ? 'LIVE' : event.type}
                  </div>
                  {event.isFree && <div className="event-card__free-badge">FREE</div>}
                </div>
                <div className="event-card__body">
                  <h3 className="event-card__title">{event.title}</h3>
                  <p className="event-card__desc">{event.description}</p>
                  <div className="event-card__meta">
                    <span><FiCalendar size={12} color="#E8C76A" /> {event.date}</span>
                    <span><FiClock size={12} /> {event.time}</span>
                  </div>
                  <div className="event-card__footer">
                    <span style={{ color: event.seats < 20 ? '#FF9800' : '#B8A882', fontSize: 12 }}>
                      <FiUsers size={12} /> {event.seats} seats left
                    </span>
                    {!event.isFree && <span style={{ color: '#E8C76A', fontWeight: 700, fontSize: 14 }}>{event.price}</span>}
                  </div>
                  <GoldenButton label={event.isLive ? 'JOIN NOW' : 'REGISTER'} width="100%" style={{ marginTop: 16 }} />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>{/* end events-content */}
      <FooterSection />
    </div>
  );
}

// ─── Video Player Page ────────────────────────────────────────────────────────
const lessonTitles = ['Introduction & Overview', 'Foundations of Practice', 'Breathing Techniques', 'Mantra Initiation', 'Dhyana Methods', 'Advanced Concentration'];

export function VideoPlayerPage() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (note.trim()) { setNotes([...notes, note]); setNote(''); }
  };

  return (
    <div className="video-page">
      <div className="video-page__main">
        <div className="video-page__player">
          <video controls className="video-page__video" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          </video>
          <div className="video-page__watermark">Sri Mahavidyesvari</div>
        </div>
        <div className="video-page__info">
          <h2 className="video-page__title">Introduction to Vedic Meditation — Lesson 1</h2>
          <div className="video-page__actions">
            {[
              { icon: liked ? '👍' : '👍', label: '2.4k', active: liked, onClick: () => setLiked(!liked) },
              { icon: bookmarked ? '🔖' : '🔖', label: 'Save', active: bookmarked, onClick: () => setBookmarked(!bookmarked) },
              { icon: '📤', label: 'Share', onClick: () => {} },
              { icon: '⬇️', label: 'Download', onClick: () => {} },
            ].map((a) => (
              <button key={a.label} className={`video-action-btn ${a.active ? 'video-action-btn--active' : ''}`} onClick={a.onClick}>
                {a.icon} {a.label}
              </button>
            ))}
          </div>
          <div className="video-page__notes">
            <h4 style={{ color: '#FFF7D6', marginBottom: 12 }}>My Notes</h4>
            <div className="video-page__note-input">
              <input type="text" placeholder="Add a note at current timestamp..." value={note} onChange={(e) => setNote(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addNote()} />
              <button onClick={addNote} style={{ color: '#B8860B', background: 'none', border: 'none', cursor: 'pointer', fontSize: 20 }}>+</button>
            </div>
            {notes.map((n, i) => (
              <div key={i} className="video-page__note">📝 {n}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="video-page__sidebar">
        <div className="video-page__playlist-header">Course Playlist</div>
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className={`video-page__lesson ${i === 0 ? 'video-page__lesson--active' : ''}`}>
            <div className={`video-page__lesson-num ${i === 0 ? 'video-page__lesson-num--active' : ''}`}>
              {i === 0 ? '▶' : i + 1}
            </div>
            <div className="video-page__lesson-info">
              <p>Lesson {i + 1}: {lessonTitles[i % lessonTitles.length]}</p>
            </div>
            <span style={{ fontSize: 11, color: '#B8A882', flexShrink: 0 }}>{15 + i * 3}:00</span>
          </div>
        ))}
      </div>
    </div>
  );
}
