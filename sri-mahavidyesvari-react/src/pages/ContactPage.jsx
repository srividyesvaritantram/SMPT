import { motion } from 'framer-motion';
import Navbar from '../components/navbar/Navbar.jsx';
import ScrollReveal from '../components/common/ScrollReveal.jsx';
import { FooterSection } from './Home/HomeSections.jsx';
import { FiMapPin, FiMail, FiInstagram, FiMessageCircle } from 'react-icons/fi';
import contactHeroImg from '../assets/contact.png';
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
                href="https://chat.whatsapp.com/"
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
                    href="https://chat.whatsapp.com/"
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
            SECTION 3 — QR CODE PLACEHOLDER
        ══════════════════════════════════════════════════════ */}
        <section className="cp-qr">
          <div className="cp-qr__pattern" aria-hidden="true" />
          <div className="cp-qr__container">

            <ScrollReveal className="cp-qr__header">
              <p className="cp-qr__eyebrow">
                <span className="cp-qr__eyebrow-line" />
                SCAN &amp; JOIN
                <span className="cp-qr__eyebrow-line" />
              </p>
              <h2 className="cp-qr__heading font-cinzel">
                Scan to Join Our{' '}
                <span className="cp-qr__heading-gold">WhatsApp Community</span>
              </h2>
              <div className="cp-qr__rule">
                <span className="cp-qr__rule-line" />
                <span className="cp-qr__rule-diamond" />
                <span className="cp-qr__rule-line" />
              </div>
              <p className="cp-qr__subtitle font-cormorant">
                Scan the QR code to join our official WhatsApp Community and stay updated with
                courses, workshops, temple events, spiritual activities, and announcements.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.20}>
              <div className="cp-qr__placeholder-wrap">
                <div className="cp-qr__placeholder">
                  <div className="cp-qr__placeholder-inner">
                    <div className="cp-qr__placeholder-icon">⬛</div>
                    <p className="cp-qr__placeholder-text font-cinzel">QR Code Coming Soon</p>
                    <p className="cp-qr__placeholder-sub">The official WhatsApp Community QR code will be added here.</p>
                  </div>
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
                <span className="cp-cta__badge-om font-devanagari">ॐ</span>
                <span className="cp-cta__badge-text">Sri MahaVidyesvari Tantra Peetham</span>
                <span className="cp-cta__badge-om font-devanagari">ॐ</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.13}>
              <p className="cp-cta__eyebrow">THE PATH AWAITS YOU</p>
            </ScrollReveal>

            <ScrollReveal delay={0.21}>
              <h2 className="cp-cta__heading font-cinzel">
                Begin Your Spiritual<br />
                <span className="cp-cta__heading-gold">Journey Today</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.29}>
              <div className="cp-cta__rule">
                <span className="cp-cta__rule-line" />
                <span className="cp-cta__rule-diamond" />
                <span className="cp-cta__rule-line" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.37}>
              <p className="cp-cta__subtitle font-cormorant">
                Whether you wish to learn authentic traditions, participate in workshops, receive sacred
                offerings, or seek spiritual guidance, Sri MahaVidyesvari Tantra Peetham warmly welcomes you.
                We look forward to walking with you on your spiritual journey.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.46}>
              <div className="cp-cta__btns">
                <motion.a
                  href="https://chat.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cp-cta__btn cp-cta__btn--primary"
                  whileHover={{ y: -4, boxShadow: '0 18px 48px rgba(184,134,11,0.60)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.22 }}
                >
                  Join WhatsApp Community
                </motion.a>
                <motion.a
                  href="/courses"
                  className="cp-cta__btn cp-cta__btn--secondary"
                  whileHover={{ background: 'rgba(212,175,55,0.14)', borderColor: 'rgba(212,175,55,0.85)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.22 }}
                >
                  Explore Courses
                </motion.a>
              </div>
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
