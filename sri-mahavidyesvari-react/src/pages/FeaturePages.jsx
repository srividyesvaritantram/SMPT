import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.jsx';
import GoldenButton from '../components/common/GoldenButton.jsx';
import GlassCard from '../components/common/GlassCard.jsx';
import ScrollReveal from '../components/common/ScrollReveal.jsx';
import { blogPosts, workshops, offerings, events } from '../utils/mockData.js';
import { FiCalendar, FiClock, FiUsers, FiMapPin } from 'react-icons/fi';
import RegisterModal from '../components/RegisterModal.jsx';
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
import whatsappQrImg from '../assets/whatsapp_qr.jpeg';
import { FooterSection } from './Home/HomeSections.jsx';
import logoImg from '../assets/logo.png';
import './FeaturePages.css';

const WA_URL = 'https://wa.me/91YOURNUMBER?text=Namaste%20%F0%9F%99%8F%20I%20would%20like%20to%20book%20a%20Workshop%20seat.';
const WA_NARAYANI = 'https://wa.me/91YOURNUMBER?text=Namaste%20%F0%9F%99%8F%0AI%20would%20like%20to%20register%20for%20the%20N%C4%81r%C4%81ya%E1%B9%87%C4%AB%20Vidy%C4%81%20Workshop.';
const WA_DHANVANTARI = 'https://wa.me/91YOURNUMBER?text=Namaste%20%F0%9F%99%8F%0AI%20would%20like%20to%20register%20for%20the%20Dhanvantari%20Vidy%C4%81%20Workshop.';

function WpLotusDivider({ id = 'wp-lotus', variant = 'cream' }) {
  return (
    <div className={`wp-divider wp-divider--${variant}`} aria-hidden="true">
      <span className="wp-divider__line" />
      <span className="wp-divider__lotus">
        <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      </span>
      <span className="wp-divider__line" />
    </div>
  );
}

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
            <img src={logoImg} alt="" className="fp-hero__divider-om-img" />
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
            <motion.div className="blog-card blog-card--coming-soon" whileHover={{ y: -6, boxShadow: '0 0 24px rgba(184,134,11,0.3)' }}>
              <div className="blog-card__thumb"><img src={post.thumbnail} alt={post.title} loading="lazy" /></div>
              <div className="blog-card__body">
                <span className="blog-card__category">{post.category}</span>
                <h3 className="blog-card__title">{post.title}</h3>
                <span className="blog-card__coming-soon">Coming Soon</span>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
      <section className="blog-scripture on-light">
        <div className="blog-scripture__texture" aria-hidden="true" />
        <div className="blog-scripture__inner">
          <ScrollReveal direction="up" duration={0.8}>
            <h2 className="blog-scripture__heading font-cinzel">Scriptural Sources for Sri Vidya</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1} duration={0.8}>
            <div className="blog-scripture__body font-serif">
              <p>
                The tradition of Sri Vidya is not merely a study of texts, but a lived transmission received through an unbroken Guru Parampara. This lineage ensures that the esoteric meanings of the Vidya are preserved and passed down through Diksha (initiation) and oral instruction. In our tradition, the authority of the Shastras is inseparable from the grace of the Preceptor; without the guidance of the lineage, these complex metaphysical structures remain dormant. This “ear-to-ear” transmission transforms theoretical knowledge into a functional spiritual technology, grounding the practitioner in a lineage that stretches back to the primordial sources of wisdom.
              </p>
              <p>
                Our curriculum is anchored in a specific corpus of canonical texts that define the philosophy and ritual precision of the path. We rely on the Brahmanda Purana, specifically the Lalithopakyanam and Lalitha Sahasranama, for the foundational theology and the thousand names of the Divine Mother. The practical application of these teachings is governed by the Parashurama Kalpasutra and its indispensable manual, the Nityotsava. For deep philosophical exposition, we look to the Yogini Hridaya, the Tantra Raja Tantra, and the exhaustive ritual compendium of the Sri Vidyarnava. These works provide the structural framework for understanding the Sri Chakra and the internal alchemy of the soul.
              </p>
              <p>
                Beyond these primary scriptures, our specific Parampara is enriched by a massive scholarly and experiential legacy consisting of approximately 250 reference guides. This extensive library includes specialized commentaries such as Bhaskararaya's Saubhagya Bhaskaram and the Varivasya Rahasya, which decode the subtlest layers of Mantra and Tantra. These hundreds of guides serve as a roadmap for the practitioner, offering the granular detail required for Prakriya (methodology) and ensuring that every aspect of the worship is aligned with traditional mandates. By synthesizing these diverse sources, we offer a path that is both scripturally rigorous and deeply rooted in ancestral practice.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WpLotusDivider id="blog-lotus-1" variant="cream" />

      {/* ══ SECTION 2 — Course Structure (Deep Maroon) ══ */}
      <section className="blog-course-structure">
        <div className="blog-course-structure__texture" aria-hidden="true" />
        <div className="blog-course-structure__inner">
          <ScrollReveal direction="up" duration={0.8}>
            <h2 className="blog-course-structure__heading font-cinzel">Course Structure & Enrollment</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1} duration={0.8}>
            <div className="blog-course-structure__body font-serif">
              <p>
                The structural integrity of our curriculum is built upon the principle of Krama-Siddhanta—a disciplined, linear progression that mirrors the soul’s ascent through the Sri Chakra. Unlike academic learning, this path is strictly experiential; advancement to subsequent levels is predicated not merely on the completion of time, but on the attainment of specific Siddhis and internal markers of proficiency. Each stage serves as a mandatory foundation, ensuring that the aspirant’s subtle body is sufficiently purified and stabilized to handle the higher energetic frequencies of the next transmission. By maintaining these rigorous standards of Adhikara (eligibility), we preserve the efficacy of the Vidya and protect the seeker from the imbalances of premature practice.
              </p>
              <p>
                To accommodate the complexities of modern life, the primary instruction is delivered through a robust online framework, meticulously designed to distill the profound complexities of Sri Vidya into digestible, actionable steps. However, certain advanced levels may necessitate a physical presence for in-person intensives lasting three to five days. These residential modules, currently being finalized, are essential for the transmission of specific Nyasa and ritual nuances that require direct oversight. Our goal is to bridge the gap between ancient asceticism and the contemporary professional world, creating a “Sadhana for the Householder” that is both spiritually uncompromising and practically sustainable within a hectic daily schedule.
              </p>
              <p>
                Beyond the core Sri Vidya path, the curriculum integrates a vast array of Anga-Vidyas and auxiliary sciences essential for a well-rounded practitioner. These supplementary teachings provide the necessary tools—ranging from Mantra Shastra to internal alchemy—that support and nourish the central practice. As we prepare for the upcoming enrollment cycle, all administrative updates will be channeled exclusively through our WhatsApp community.
              </p>
              <p>
                We invite serious aspirants to join this digital Sangha via the link below to remain aligned with our activities and receive timely insights into the unfolding of these sacred teachings.
              </p>
            </div>
          </ScrollReveal>

          {/* WhatsApp CTA Card */}
          <ScrollReveal direction="up" delay={0.2} duration={0.75}>
            <div className="blog-wa-cta">
              <h3 className="blog-wa-cta__heading font-cinzel">Join Our WhatsApp Community</h3>
              <p className="blog-wa-cta__desc font-serif">
                Stay connected with Sri Mahavidyesvari Tantra Peetham and receive updates about courses, workshops, events, enrollments, and spiritual teachings directly through our official WhatsApp community.
              </p>
              <GoldenButton
                label="Join WhatsApp Community"
                size="lg"
                onClick={() => window.open('https://chat.whatsapp.com/KOxlAGgqOzJDz8JbW6LUKy', '_blank')}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ CTA — Begin Your Spiritual Journey (Deep Maroon) ══ */}
      <section className="blog-cta">
        <div className="blog-cta__texture" aria-hidden="true" />
        <ScrollReveal direction="up" duration={0.8}>
          <div className="blog-cta__inner">
            <h2 className="blog-cta__heading font-cinzel">
              Begin Your Spiritual<br />
              <span className="blog-cta__heading-gold">Journey Today</span>
            </h2>
            <p className="blog-cta__body font-serif">
              Join the living Guru Parampara of Sri Mahavidyesvari Tantra Peetham. Learn authentic Sri Vidya through traditional teachings, participate in sacred workshops, receive timely updates, and become part of a growing spiritual community dedicated to preserving the timeless wisdom of Tantra.
            </p>
            <div className="blog-cta__btns">
              <GoldenButton
                label="Explore Courses"
                size="lg"
                onClick={() => window.location.href = '/courses'}
              />
              <GoldenButton
                label="Join WhatsApp Community"
                size="lg"
                onClick={() => window.open('https://chat.whatsapp.com/KOxlAGgqOzJDz8JbW6LUKy', '_blank')}
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ══ WhatsApp Community Section (Cream) ══ */}
      <section className="blog-wa-section on-light">
        <div className="blog-wa-section__texture" aria-hidden="true" />
        <div className="blog-wa-section__inner">
          {/* LEFT — WhatsApp Icon */}
          <ScrollReveal direction="right" duration={0.85}>
            <motion.a
              href="https://chat.whatsapp.com/KOxlAGgqOzJDz8JbW6LUKy"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-wa-section__icon-link"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="blog-wa-section__icon">
                <circle cx="60" cy="60" r="60" fill="url(#waGrad)" />
                <path d="M60 25C40.67 25 25 40.67 25 60c0 6.59 1.73 12.78 4.75 18.13L25 95l17.38-4.68A34.88 34.88 0 0060 95c19.33 0 35-15.67 35-35S79.33 25 60 25zm17.25 47.75c-.73 2.04-4.25 3.9-5.83 4.15-1.58.25-3.53.35-5.68-.35-1.3-.43-2.98-1-5.1-1.95-8.98-3.88-14.83-12.93-15.28-13.53-.45-.6-3.65-4.85-3.65-9.25 0-4.4 2.3-6.58 3.13-7.48.83-.9 1.8-1.13 2.4-1.13.6 0 1.2.01 1.73.03.55.03 1.3-.21 2.03 1.55.75 1.8 2.55 6.2 2.78 6.65.23.45.38.98.08 1.58-.3.6-.45.98-.9 1.5-.45.53-.95 1.18-1.35 1.58-.45.45-.93.93-.4 1.83.53.9 2.35 3.88 5.05 6.28 3.48 3.1 6.4 4.05 7.3 4.5.9.45 1.43.38 1.95-.23.53-.6 2.25-2.63 2.85-3.53.6-.9 1.2-.75 2.03-.45.83.3 5.25 2.48 6.15 2.93.9.45 1.5.68 1.73 1.05.23.38.23 2.18-.5 4.22z" fill="#fff" />
                <defs>
                  <linearGradient id="waGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#25D366" />
                    <stop offset="100%" stopColor="#128C7E" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.a>
          </ScrollReveal>

          {/* RIGHT — Content + QR */}
          <ScrollReveal direction="left" duration={0.85}>
            <div className="blog-wa-section__content">
              <h2 className="blog-wa-section__heading font-cinzel">Join Our WhatsApp Community</h2>
              <p className="blog-wa-section__desc font-serif">
                Stay connected with Sri Mahavidyesvari Tantra Peetham for updates on Courses, Workshops, Events, Blogs, Spiritual Teachings, and Enrollment announcements.
              </p>
              <div className="blog-wa-section__qr-wrap">
                <img
                  src={whatsappQrImg}
                  alt="WhatsApp Community QR Code — Sri MahaVidyesvari Tantra Peetham"
                  className="blog-wa-section__qr"
                  loading="lazy"
                />
              </div>
              <GoldenButton
                label="Join Community"
                size="lg"
                onClick={() => window.open('https://chat.whatsapp.com/KOxlAGgqOzJDz8JbW6LUKy', '_blank')}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

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
            <img src={logoImg} alt="" className="wp-hero__divider-om-img" />
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
      <section className="wp-narayani wp-narayani--light on-light">
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


      <WpLotusDivider id={'wp-lotus-1'} variant={'cream'} />
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

      <WpLotusDivider id={'wp-lotus-2'} variant={'maroon'} />

      {/* ══════════════════════════════════════════════════════
          OTHER SACRED WORKSHOPS — Premium card grid
      ══════════════════════════════════════════════════════ */}
      <section className="wp-other-workshops wp-other-workshops--light on-light">
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
        <div className="wp-cta__om" aria-hidden="true"><img src={logoImg} alt="" className="wp-cta__om-img" /></div>
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
const eventFilters = ['Live', 'Workshop', 'Puja', 'Discourse'];

export function EventsPage() {
  const [filter, setFilter] = useState(0);
  const [tab, setTab] = useState(0);
  const [regModal, setRegModal] = useState(false);
  const navigate = useNavigate();

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
            <img src={logoImg} alt="" className="fp-hero__divider-om-img" />
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
                <h2 className="varahi-event__title font-cinzel">Navaratri Sadhana & Aradhana</h2>
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
                    <p className="varahi-event__img-label font-cinzel">Navaratri Sadhana</p>
                  </div>
                  <span className="varahi-event__status-badge">Upcoming</span>
                </div>

                {/* Right — content */}
                <div className="varahi-event__content">
                  <h3 className="varahi-event__card-title font-cinzel">Navaratri Sadhana & Aradhana</h3>

                  <p className="varahi-event__desc">
                    Join us for nine sacred nights of Navaratri Sadhana & Aradhana, a powerful
                    period of intense spiritual practice. Participate in traditional rituals,
                    mantra chanting, and receive divine blessings for protection, courage,
                    prosperity, and spiritual transformation.
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
                        <p className="varahi-event__detail-value">July 15 – July 23, 2026</p>
                      </div>
                    </div>
                    <div className="varahi-event__detail-row">
                      <span className="varahi-event__detail-icon">⏰</span>
                      <div>
                        <p className="varahi-event__detail-label">Time</p>
                        <p className="varahi-event__detail-value">8:00 AM onwards (9 days)</p>
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
                  <div className="event-card__type-badge" style={{ background: '#6B1026' }}>
                    
                    COMING SOON
                  </div>
                  
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
                  <GoldenButton label="Coming Soon" width="100%" style={{ marginTop: 16, opacity: 0.55, pointerEvents: 'none' }} />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>{/* end events-content */}

      {/* ══ CTA — Join Our Upcoming Spiritual Events ══ */}
      <section className="events-cta">
        <div className="events-cta__texture" aria-hidden="true" />
        <ScrollReveal direction="up" duration={0.8}>
          <div className="events-cta__inner">
            <span className="wp-section-badge">🪔 Sacred Gatherings</span>
            <h2 className="events-cta__heading font-cinzel">
              Join Our Upcoming<br />
              <span className="events-cta__heading-gold">Spiritual Events</span>
            </h2>
            <p className="events-cta__body font-serif">
              Experience authentic Vedic rituals, sacred homas, devotional celebrations,
              spiritual discourses, and Guru-guided programs at Sri Mahavidyesvari Tantra
              Peetham. Reserve your place and become part of a living spiritual tradition.
            </p>
            <div className="events-cta__divider">
              <span className="events-cta__divider-line" />
              <span className="events-cta__divider-diamond">✦</span>
              <span className="events-cta__divider-line" />
            </div>
            <div className="events-cta__btns">
              <GoldenButton
                label="Reserve Your Seat"
                size="lg"
                onClick={() => window.open('https://wa.me/919390886029', '_blank')}
              />
              <GoldenButton
                label="Contact Us"
                size="lg"
                outlined
                onClick={() => navigate('/contact')}
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <RegisterModal open={regModal} onClose={() => setRegModal(false)} />
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
