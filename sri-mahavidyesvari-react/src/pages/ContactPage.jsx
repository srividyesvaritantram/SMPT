import { motion } from 'framer-motion';
import Navbar from '../components/navbar/Navbar.jsx';
import ScrollReveal from '../components/common/ScrollReveal.jsx';
import GoldenButton from '../components/common/GoldenButton.jsx';
import { FooterSection } from './Home/HomeSections.jsx';
import { FiMapPin, FiMail, FiInstagram, FiMessageCircle } from 'react-icons/fi';
import contactHeroImg from '../assets/contact.png';
import whatsappQrImg from '../assets/whatsapp_qr.jpeg';
import logoImg from '../assets/logo.png';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Navbar />
      <div>

        {/* ══ HERO ══ */}
        <section className="cp-hero">
          <div className="cp-hero__bg" />
          <div className="cp-hero__veil" />
          <div className="cp-hero__bottom-fade" />

          {/* LEFT — 45% */}
          <div className="cp-hero__content">

            <motion.div
              className="cp-hero__badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.10, duration: 0.80, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span>📞</span>
              <span className="cp-hero__badge-text">Contact Us</span>
            </motion.div>

            <motion.h1
              className="cp-hero__heading font-cinzel"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Connect with{' '}
              <span className="cp-hero__heading-gold">Sri MahaVidyesvari<br />Tantra Peetham</span>
            </motion.h1>

            <motion.div
              className="cp-hero__rule"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.34, duration: 0.70 }}
            >
              <span className="cp-hero__rule-line" />
              <span className="cp-hero__rule-diamond" />
              <span className="cp-hero__rule-line" />
            </motion.div>

            <motion.p
              className="cp-hero__desc font-cormorant"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Whether you seek spiritual guidance, wish to enroll in courses, participate in workshops,
              request sacred offerings, or simply have a question, we are here to help. Reach out to
              Sri MahaVidyesvari Tantra Peetham and begin your spiritual journey with us.
            </motion.p>

            <motion.div
              className="cp-hero__btns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.54, duration: 0.80, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.a
                href="https://chat.whatsapp.com/KOxlAGgqOzJDz8JbW6LUKy"
                target="_blank"
                rel="noopener noreferrer"
                className="cp-hero__btn cp-hero__btn--primary"
                whileHover={{ y: -3, boxShadow: '0 14px 40px rgba(184,134,11,0.55)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.22 }}
              >
                Join WhatsApp Community
              </motion.a>
              <motion.a
                href="https://wa.me/919390886029"
                target="_blank"
                rel="noopener noreferrer"
                className="cp-hero__btn cp-hero__btn--secondary"
                whileHover={{ background: 'rgba(212,175,55,0.12)', borderColor: 'rgba(212,175,55,0.80)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.22 }}
              >
                Chat on WhatsApp
              </motion.a>
            </motion.div>

          </div>

          {/* RIGHT — 55% */}
          <div className="cp-hero__img-panel">
            <div className="cp-hero__img-glow" />
            <motion.div
              className="cp-hero__img-float"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.img
                src={contactHeroImg}
                alt="Contact Sri MahaVidyesvari Tantra Peetham"
                className="cp-hero__img"
                loading="eager"
                draggable="false"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.18, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </motion.div>
          </div>

        </section>


        {/* ══════════════════════════════════════════════════════
            SECTION 1 — STAY CONNECTED
        ══════════════════════════════════════════════════════ */}
        <section className="cp-comm">
          <div className="cp-comm__pattern" aria-hidden="true" />
          <div className="cp-comm__container">

            {/* LEFT — 55% content */}
            <div className="cp-comm__content">

              <ScrollReveal delay={0.05}>
                <p className="cp-comm__eyebrow">
                  <span className="cp-comm__eyebrow-line" />
                  OFFICIAL COMMUNITY
                  <span className="cp-comm__eyebrow-line" />
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.13}>
                <h2 className="cp-comm__heading font-cinzel">
                  Stay Connected with<br />
                  <span className="cp-comm__heading-gold">Our Community</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.20}>
                <div className="cp-comm__rule">
                  <span className="cp-comm__rule-line" />
                  <span className="cp-comm__rule-diamond" />
                  <span className="cp-comm__rule-line" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.27}>
                <p className="cp-comm__text font-cormorant">
                  Our online learning platform is currently under development. Until then, all workshops,
                  courses, sacred offerings, spiritual events, announcements, and important updates will
                  be shared through our official WhatsApp Community.
                </p>
                <p className="cp-comm__text font-cormorant">
                  Join our community to remain connected with Sri MahaVidyesvari Tantra Peetham and
                  receive the latest information directly.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.34}>
                <ul className="cp-comm__features">
                  {[
                    'Course Updates',
                    'Workshop Announcements',
                    'Spiritual Events',
                    'Temple Activities',
                    'Community Discussions',
                  ].map((f) => (
                    <li key={f} className="cp-comm__feature-item">
                      <span className="cp-comm__feature-check">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.42}>
                <div className="cp-comm__btns">
                  <motion.a
                    href="https://chat.whatsapp.com/KOxlAGgqOzJDz8JbW6LUKy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cp-btn cp-btn--primary"
                    whileHover={{ y: -3, boxShadow: '0 14px 40px rgba(184,134,11,0.45)' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.22 }}
                  >
                    Join WhatsApp Community
                  </motion.a>
                  <motion.a
                    href="https://wa.me/919390886029"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cp-btn cp-btn--secondary"
                    whileHover={{ background: 'linear-gradient(135deg,#B8860B,#E8C76A)', color: '#fff', borderColor: 'transparent' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.22 }}
                  >
                    Chat on WhatsApp
                  </motion.a>
                </div>
              </ScrollReveal>

            </div>

            {/* RIGHT — 45% illustration */}
            <ScrollReveal direction="left" duration={0.9} className="cp-comm__visual-col">
              <motion.div
                className="cp-comm__visual"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="cp-comm__visual-glow" />
                <div className="cp-comm__visual-icon-wrap">
                  <div className="cp-comm__visual-ring cp-comm__visual-ring--outer" />
                  <div className="cp-comm__visual-ring cp-comm__visual-ring--inner" />
                  <div className="cp-comm__visual-circle">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="cp-comm__wa-svg">
                      <circle cx="24" cy="24" r="24" fill="#25D366" />
                      <path d="M24 10C16.268 10 10 16.268 10 24c0 2.637.692 5.112 1.9 7.254L10 38l6.95-1.872A13.94 13.94 0 0024 38c7.732 0 14-6.268 14-14S31.732 10 24 10zm6.9 19.1c-.29.816-1.7 1.56-2.33 1.66-.63.1-1.41.14-2.27-.14-.52-.17-1.19-.4-2.04-.78-3.59-1.55-5.93-5.17-6.11-5.41-.18-.24-1.46-1.94-1.46-3.7 0-1.76.92-2.63 1.25-2.99.33-.36.72-.45.96-.45.24 0 .48.002.69.012.22.01.52-.084.81.618.3.72 1.02 2.48 1.11 2.66.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.37-.16.73.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.92 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1 .99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.2 1.686z" fill="#fff" />
                    </svg>
                  </div>
                </div>
                <div className="cp-comm__visual-label font-cinzel">Official WhatsApp Community</div>
                <div className="cp-comm__visual-sub">Sri MahaVidyesvari Tantra Peetham</div>
              </motion.div>
            </ScrollReveal>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SECTION 2 — CONTACT INFORMATION CARDS
        ══════════════════════════════════════════════════════ */}
        <section className="cp-info">
          <div className="cp-info__pattern" aria-hidden="true" />
          <div className="cp-info__container">

            <ScrollReveal className="cp-info__header">
              <p className="cp-info__eyebrow">
                <span className="cp-info__eyebrow-line" />
                REACH US
                <span className="cp-info__eyebrow-line" />
              </p>
              <h2 className="cp-info__heading font-cinzel">
                Contact <span className="cp-info__heading-gold">Information</span>
              </h2>
              <div className="cp-info__rule">
                <span className="cp-info__rule-line" />
                <span className="cp-info__rule-diamond" />
                <span className="cp-info__rule-line" />
              </div>
              <p className="cp-info__subtitle font-cormorant">
                We are always happy to assist you with courses, workshops, temple services, and spiritual guidance.
              </p>
            </ScrollReveal>

            <div className="cp-info__grid">

              {/* Card 1 — WhatsApp */}
              <ScrollReveal delay={0.08}>
                <motion.div
                  className="cp-icard"
                  whileHover={{ y: -8, boxShadow: '0 28px 64px rgba(123,30,58,0.13), 0 0 36px rgba(184,134,11,0.18)' }}
                  transition={{ duration: 0.28 }}
                >
                  <div className="cp-icard__accent" />
                  <div className="cp-icard__icon-wrap cp-icard__icon-wrap--green">
                    <FiMessageCircle size={26} />
                  </div>
                  <h3 className="cp-icard__title font-cinzel">WhatsApp</h3>
                  <div className="cp-icard__rule"><span /><span className="cp-icard__rule-dot" /><span /></div>
                  <p className="cp-icard__value">+91 93908 86029</p>
                  <p className="cp-icard__desc font-cormorant">
                    For Courses, Workshops, Astrology, Temple Services and General Enquiries.
                  </p>
                  <motion.a
                    href="https://wa.me/919390886029"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cp-icard__btn"
                    whileHover={{ y: -2, boxShadow: '0 10px 32px rgba(184,134,11,0.38)' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.20 }}
                  >
                    Chat on WhatsApp
                  </motion.a>
                </motion.div>
              </ScrollReveal>

              {/* Card 2 — Email */}
              <ScrollReveal delay={0.16}>
                <motion.div
                  className="cp-icard"
                  whileHover={{ y: -8, boxShadow: '0 28px 64px rgba(123,30,58,0.13), 0 0 36px rgba(184,134,11,0.18)' }}
                  transition={{ duration: 0.28 }}
                >
                  <div className="cp-icard__accent" />
                  <div className="cp-icard__icon-wrap">
                    <FiMail size={26} />
                  </div>
                  <h3 className="cp-icard__title font-cinzel">Email</h3>
                  <div className="cp-icard__rule"><span /><span className="cp-icard__rule-dot" /><span /></div>
                  <p className="cp-icard__value">srimahavidyesvari@gmail.com</p>
                  <p className="cp-icard__desc font-cormorant">
                    For official communication, support and collaborations.
                  </p>
                  <motion.a
                    href="mailto:srimahavidyesvari@gmail.com"
                    className="cp-icard__btn"
                    whileHover={{ y: -2, boxShadow: '0 10px 32px rgba(184,134,11,0.38)' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.20 }}
                  >
                    Send Email
                  </motion.a>
                </motion.div>
              </ScrollReveal>

              {/* Card 3 — Instagram */}
              <ScrollReveal delay={0.24}>
                <motion.div
                  className="cp-icard"
                  whileHover={{ y: -8, boxShadow: '0 28px 64px rgba(123,30,58,0.13), 0 0 36px rgba(184,134,11,0.18)' }}
                  transition={{ duration: 0.28 }}
                >
                  <div className="cp-icard__accent" />
                  <div className="cp-icard__icon-wrap cp-icard__icon-wrap--rose">
                    <FiInstagram size={26} />
                  </div>
                  <h3 className="cp-icard__title font-cinzel">Instagram</h3>
                  <div className="cp-icard__rule"><span /><span className="cp-icard__rule-dot" /><span /></div>
                  <p className="cp-icard__value">@sri_mahavidyesvari_tantra</p>
                  <p className="cp-icard__desc font-cormorant">
                    Follow us for updates, spiritual insights and announcements.
                  </p>
                  <motion.a
                    href="https://instagram.com/sri_mahavidyesvari_tantra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cp-icard__btn"
                    whileHover={{ y: -2, boxShadow: '0 10px 32px rgba(184,134,11,0.38)' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.20 }}
                  >
                    Visit Instagram
                  </motion.a>
                </motion.div>
              </ScrollReveal>

              {/* Card 4 — Location */}
              <ScrollReveal delay={0.32}>
                <motion.div
                  className="cp-icard cp-icard--location"
                  whileHover={{ y: -8, boxShadow: '0 28px 64px rgba(123,30,58,0.13), 0 0 36px rgba(184,134,11,0.18)' }}
                  transition={{ duration: 0.28 }}
                >
                  <div className="cp-icard__accent" />
                  <div className="cp-icard__icon-wrap cp-icard__icon-wrap--maroon">
                    <FiMapPin size={26} />
                  </div>
                  <h3 className="cp-icard__title font-cinzel">Location</h3>
                  <div className="cp-icard__rule"><span /><span className="cp-icard__rule-dot" /><span /></div>
                  <p className="cp-icard__value cp-icard__value--address">
                    Sri MahaVidyesvari Tantra Peetham<br />
                    Visakhapatnam<br />
                    Andhra Pradesh<br />
                    India
                  </p>
                  <p className="cp-icard__desc font-cormorant">Temple location.</p>
                  <div className="cp-icard__map-placeholder">
                    <span className="cp-icard__map-text">Google Maps — Coming Soon</span>
                  </div>
                  <motion.button
                    className="cp-icard__btn cp-icard__btn--disabled"
                    disabled
                    transition={{ duration: 0.20 }}
                  >
                    Coming Soon
                  </motion.button>
                </motion.div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SECTION 3 — WHATSAPP COMMUNITY (CREAM)
        ══════════════════════════════════════════════════════ */}
        <section className="cp-wa-community">
          <div className="cp-wa-community__texture" aria-hidden="true" />
          <div className="cp-wa-community__inner">

            {/* LEFT — Large WhatsApp Icon */}
            <ScrollReveal direction="right" duration={0.85}>
              <motion.a
                href="https://chat.whatsapp.com/KOxlAGgqOzJDz8JbW6LUKy"
                target="_blank"
                rel="noopener noreferrer"
                className="cp-wa-community__icon-link"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="cp-wa-community__icon">
                  <circle cx="60" cy="60" r="60" fill="url(#cpWaGrad)" />
                  <path d="M60 25C40.67 25 25 40.67 25 60c0 6.59 1.73 12.78 4.75 18.13L25 95l17.38-4.68A34.88 34.88 0 0060 95c19.33 0 35-15.67 35-35S79.33 25 60 25zm17.25 47.75c-.73 2.04-4.25 3.9-5.83 4.15-1.58.25-3.53.35-5.68-.35-1.3-.43-2.98-1-5.1-1.95-8.98-3.88-14.83-12.93-15.28-13.53-.45-.6-3.65-4.85-3.65-9.25 0-4.4 2.3-6.58 3.13-7.48.83-.9 1.8-1.13 2.4-1.13.6 0 1.2.01 1.73.03.55.03 1.3-.21 2.03 1.55.75 1.8 2.55 6.2 2.78 6.65.23.45.38.98.08 1.58-.3.6-.45.98-.9 1.5-.45.53-.95 1.18-1.35 1.58-.45.45-.93.93-.4 1.83.53.9 2.35 3.88 5.05 6.28 3.48 3.1 6.4 4.05 7.3 4.5.9.45 1.43.38 1.95-.23.53-.6 2.25-2.63 2.85-3.53.6-.9 1.2-.75 2.03-.45.83.3 5.25 2.48 6.15 2.93.9.45 1.5.68 1.73 1.05.23.38.23 2.18-.5 4.22z" fill="#fff" />
                  <defs>
                    <linearGradient id="cpWaGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#25D366" />
                      <stop offset="100%" stopColor="#128C7E" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.a>
            </ScrollReveal>

            {/* RIGHT — Content + QR + Buttons */}
            <ScrollReveal direction="left" duration={0.85}>
              <div className="cp-wa-community__content">
                <h2 className="cp-wa-community__heading font-cinzel">Join Our Official WhatsApp Community</h2>
                <p className="cp-wa-community__desc font-serif">
                  Become a part of the Sri Mahavidyesvari Tantra Peetham community to receive instant updates about:
                </p>
                <ul className="cp-wa-community__list font-serif">
                  <li>Sri Vidya Courses</li>
                  <li>Workshops</li>
                  <li>Spiritual Events</li>
                  <li>Temple Activities</li>
                  <li>Announcements</li>
                  <li>New Blog Articles</li>
                  <li>Enrollment Notifications</li>
                  <li>Daily Spiritual Updates</li>
                </ul>
                <div className="cp-wa-community__qr-wrap">
                  <img
                    src={whatsappQrImg}
                    alt="WhatsApp Community QR Code — Sri MahaVidyesvari Tantra Peetham"
                    className="cp-wa-community__qr"
                    loading="lazy"
                  />
                </div>
                <div className="cp-wa-community__btns">
                  <GoldenButton
                    label="Join WhatsApp Community"
                    size="lg"
                    onClick={() => window.open('https://chat.whatsapp.com/KOxlAGgqOzJDz8JbW6LUKy', '_blank')}
                  />
                  <GoldenButton
                    label="Contact Us"
                    size="lg"
                    outlined
                    onClick={() => document.getElementById('cp-info-section')?.scrollIntoView({ behavior: 'smooth' })}
                  />
                </div>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SECTION 4 — CALL TO ACTION
        ══════════════════════════════════════════════════════ */}
        <section className="cp-cta">
          <div className="cp-cta__bg" aria-hidden="true" />
          <div className="cp-cta__overlay" aria-hidden="true" />
          <motion.div
            className="cp-cta__orb cp-cta__orb--left"
            animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.85, 0.55] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
          <motion.div
            className="cp-cta__orb cp-cta__orb--right"
            animate={{ scale: [1, 1.14, 1], opacity: [0.45, 0.72, 0.45] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            aria-hidden="true"
          />

          <div className="cp-cta__content">

            <ScrollReveal delay={0.05}>
              <div className="cp-cta__badge">
                <img src={logoImg} alt="" className="cp-cta__badge-om-img" />
                <span className="cp-cta__badge-text">Sri MahaVidyesvari Tantra Peetham</span>
                <img src={logoImg} alt="" className="cp-cta__badge-om-img" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.10}>
              <motion.a
                href="https://chat.whatsapp.com/KOxlAGgqOzJDz8JbW6LUKy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block', textDecoration: 'none', marginBottom: 28 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 90, height: 90, filter: 'drop-shadow(0 8px 28px rgba(37,211,102,0.40))' }}>
                  <circle cx="50" cy="50" r="50" fill="url(#ctaWaG)" />
                  <path d="M50 21C33.88 21 21 33.88 21 50c0 5.5 1.44 10.65 3.96 15.1L21 79l14.47-3.9A28.88 28.88 0 0050 79c16.12 0 29-12.88 29-29S66.12 21 50 21zm14.38 39.58c-.6 1.7-3.54 3.25-4.86 3.46-1.32.21-2.94.29-4.74-.29-1.08-.36-2.48-.83-4.25-1.63-7.48-3.23-12.36-10.78-12.73-11.28-.38-.5-3.04-4.04-3.04-7.71 0-3.67 1.92-5.48 2.6-6.23.69-.75 1.5-.94 2-.94s1 0 1.44.01c.46.01 1.08-.18 1.69 1.29.63 1.5 2.13 5.17 2.31 5.54.19.38.31.81.06 1.31-.25.5-.38.81-.75 1.25-.38.44-.79.98-1.13 1.31-.38.38-.77.78-.33 1.52.44.75 1.96 3.23 4.21 5.23 2.9 2.58 5.33 3.38 6.1 3.75.75.38 1.19.31 1.63-.19.44-.5 1.88-2.19 2.38-2.94.5-.75 1-.63 1.69-.38.69.25 4.38 2.06 5.13 2.44.75.38 1.25.56 1.44.88.19.31.19 1.81-.42 3.52z" fill="#fff" />
                  <defs><linearGradient id="ctaWaG" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#25D366" /><stop offset="100%" stopColor="#128C7E" /></linearGradient></defs>
                </svg>
              </motion.a>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <h2 className="cp-cta__heading font-cinzel">
                Join Our Spiritual<br />
                <span className="cp-cta__heading-gold">Community Today</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="cp-cta__rule">
                <span className="cp-cta__rule-line" />
                <span className="cp-cta__rule-diamond" />
                <span className="cp-cta__rule-line" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.32}>
              <p className="cp-cta__subtitle font-cormorant">
                Become part of Sri Mahavidyesvari Tantra Peetham and receive updates about Sri Vidya Courses,
                Workshops, Temple Events, Spiritual Teachings, and our Official WhatsApp Community.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.40}>
              <div className="cp-cta__btns">
                <motion.a
                  href="https://chat.whatsapp.com/KOxlAGgqOzJDz8JbW6LUKy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cp-cta__btn cp-cta__btn--primary"
                  whileHover={{ y: -4, boxShadow: '0 18px 48px rgba(255,248,238,0.35)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.22 }}
                >
                  Join WhatsApp Community
                </motion.a>
                <motion.a
                  href="/contact"
                  className="cp-cta__btn cp-cta__btn--secondary"
                  whileHover={{ background: '#FFF8EE', color: '#4A0F22', borderColor: 'transparent' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.22 }}
                >
                  Contact Us
                </motion.a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.48}>
              <div style={{ marginTop: 40, background: '#fff', borderRadius: 18, padding: 14, display: 'inline-block', boxShadow: '0 8px 36px rgba(0,0,0,0.15)', border: '1px solid rgba(212,175,55,0.20)' }}>
                <img src={whatsappQrImg} alt="WhatsApp Community QR Code" style={{ width: 240, height: 'auto', display: 'block', borderRadius: 12 }} />
              </div>
              <p style={{ marginTop: 14, fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.60)', letterSpacing: '0.5px' }}>
                Scan with WhatsApp camera to join
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.54}>
              <div className="cp-cta__divider">
                <span className="cp-cta__divider-line" />
                <span className="cp-cta__divider-lotus">🪷</span>
                <span className="cp-cta__divider-line" />
              </div>
            </ScrollReveal>

          </div>
        </section>

      </div>
      <FooterSection />
    </div>
  );
}
