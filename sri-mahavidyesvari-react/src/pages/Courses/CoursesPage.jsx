import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { FooterSection } from '../Home/HomeSections.jsx';
import saraswathiImg      from '../../assets/saraswathi_devi.png';
import sriVidyaImg        from '../../assets/sri_vidya1.png';
import chandImg           from '../../assets/chandi.png';
import shaivamImg         from '../../assets/shaivam.png';
import vaishImg           from '../../assets/vaishnavam_course.png';
import skaanImg           from '../../assets/skaandam_course.png';
import sauramImg          from '../../assets/sauram.png';
import ganapathyamImg     from '../../assets/ganapathyam.png';
import dasaMahavidyasImg  from '../../assets/dasa_maha_vidyas.png';
import dhanvantariImg     from '../../assets/dhanvantari.png';
import narayaniImg        from '../../assets/narayani_vidya.png';
import govindaImg         from '../../assets/govinda.png';
import './CoursesPage.css';

const WA_URL = 'https://wa.me/91YOURNUMBER?text=Namaste%20%F0%9F%99%8F%0A%0AI%20would%20like%20to%20enroll%20in%20a%20course%20at%20Sri%20MahaVidyesvari%20Tantra%20Peetham.';

const ALL_COURSES = [
  {
    id: 'chandi-vidya',
    title: 'Chandi Vidyā',
    desc: 'Chandi Vidya is the fierce, compassionate Shakti-path where Devi as Chandika destroys inner darkness and awakens courage, purity, protection, and spiritual transformation.',
    img: chandImg,
    path: '/courses/chandi-vidya',
  },
  {
    id: 'shaivam',
    title: 'Shaivam',
    desc: 'Study the sacred traditions of Lord Shiva, including mantra, Agama, temple worship, meditation, and the deeper philosophy of Shaivism according to authentic Guru Parampara.',
    img: shaivamImg,
    path: '/courses/shaivam',
  },
  {
    id: 'vaishnavam',
    title: 'Vaishnavam',
    desc: 'Vaishnavam is the devotion-centered path of surrender to Lord Vishnu and His divine incarnations, cultivating dharma, devotion, compassion, and inner peace.',
    img: vaishImg,
    path: '/courses/vaishnavam',
  },
  {
    id: 'skaandam',
    title: 'Skaandam',
    desc: 'Skaandam is the heroic path of Lord Skanda that awakens courage, discipline, wisdom, and victory over inner and outer obstacles.',
    img: skaanImg,
    path: '/courses/skaandam',
  },
  {
    id: 'ganapathyam',
    title: 'Gāṇapatyam',
    desc: 'Ganapati Tantram is the practical path of invoking Lord Ganesha to remove obstacles, sharpen intellect, and establish success through sacred mantra and disciplined worship.',
    img: ganapathyamImg,
    path: '/courses/ganapathyam',
  },
  {
    id: 'sauram',
    title: 'Sauram',
    desc: 'Sauram is the Sun-centered path where Lord Sūrya is worshipped as the living source of prāṇa, vitality, health, wisdom, discipline, and inner illumination.',
    img: sauramImg,
    path: '/courses/sauram',
  },
  {
    id: 'dasa-maha-vidyas',
    title: 'Daśa Mahāvidyās',
    desc: 'The Ten Wisdom Goddesses who govern every aspect of cosmic reality — explore their symbolism, mantra traditions, and the deeper framework behind these powerful divine manifestations.',
    img: dasaMahavidyasImg,
    path: '/courses/dasa-maha-vidyas',
  },
  {
    id: 'dhanvantari',
    title: 'Dhanvantari Vidyā',
    desc: 'Dhanvantari Vidyā invokes Bhagavan Dhanvantari, the divine physician, to restore balance, strengthen prāṇa, and promote healing of body, mind, and spirit through sacred practice.',
    img: dhanvantariImg,
    path: '/courses/dhanvantari',
  },
  {
    id: 'narayani-vidya',
    title: 'Nārāyaṇī Vidyā',
    desc: 'Nārāyaṇī Vidyā is the Shakti-knowledge of the Supreme Mother as Nārāyaṇī — the feminine sovereignty that holds, moves, and completes the universe with divine compassion and strength.',
    img: narayaniImg,
    path: '/courses/narayani-vidya',
  },
  {
    id: 'vaishnavam-advanced',
    title: 'Govinda Upāsanā',
    desc: 'A deeper exploration of Lord Govinda through traditional worship, sacred mantras, devotional discipline, and the spiritual significance of Vishnu\'s divine incarnations.',
    img: govindaImg,
    path: '/courses/govinda',
  },
];

export default function CoursesPage() {
  const navigate = useNavigate();

  return (
    <div className="cp-page">
      <Navbar />

      {/* ══════════════════════════════════════════════════════
          HERO — Premium split layout
      ══════════════════════════════════════════════════════ */}
      <section className="cp-hero">

        {/* LEFT — content 45% */}
        <motion.div
          className="cp-hero__left"
          initial={{ opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="cp-hero__eyebrow"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ✨ Sacred Courses
          </motion.span>

          <motion.h1
            className="cp-hero__h1 font-cinzel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.32 }}
          >
            Master the Timeless Wisdom of<br />
            <span className="cp-hero__h1-gold">Sanātana Dharma</span>
          </motion.h1>

          <motion.div
            className="cp-hero__divider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.44 }}
          >
            <span className="cp-hero__divider-line" />
            <span className="cp-hero__divider-om font-devanagari">ॐ</span>
            <span className="cp-hero__divider-line" />
          </motion.div>

          <motion.p
            className="cp-hero__desc font-serif"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.50 }}
          >
            Explore authentic spiritual courses rooted in Guru Parampara and
            traditional Śāstric teachings. Each course provides systematic
            learning, disciplined practice, and deeper understanding of Tantra,
            Mantra, and sacred traditions, helping seekers progress with clarity,
            devotion, and wisdom.
          </motion.p>

          <motion.div
            className="cp-hero__btns"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
          >
            <GoldenButton
              label="Explore Courses"
              size="lg"
              onClick={() =>
                document
                  .getElementById('courses-section')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            />
            <GoldenButton
              label="Enroll Now"
              size="lg"
              outlined
              onClick={() => window.open(WA_URL, '_blank')}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT — image 58–60% */}
        <motion.div
          className="cp-hero__right"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="cp-hero__img-halo" />
          <img
            src={saraswathiImg}
            alt="Goddess Saraswathi — Sacred Courses"
            className="cp-hero__img"
            loading="eager"
            draggable="false"
          />
        </motion.div>

      </section>

      {/* ══════════════════════════════════════════════════════
          SRI VIDYĀ — Featured Course Section
      ══════════════════════════════════════════════════════ */}
      <section id="courses-section" className="cp-featured">
        <div className="cp-featured__inner">
          <div className="cp-featured__grid">

            {/* LEFT — image */}
            <ScrollReveal direction="right" duration={0.9}>
              <div className="cp-feat-img-col">
                <div className="cp-feat-img-glow" />
                <motion.div
                  className="cp-feat-img-card"
                  whileHover={{
                    scale: 1.022,
                    boxShadow:
                      '0 48px 96px rgba(90,18,40,0.20), 0 0 0 2.5px rgba(212,175,55,0.65), 0 0 64px rgba(212,175,55,0.16)',
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <img
                    src={sriVidyaImg}
                    alt="Sri Vidyā — Sacred Course"
                    className="cp-feat-img cp-feat-img--sri-vidya"
                    loading="lazy"
                  />
                  <div className="cp-feat-img-shine" />
                </motion.div>
                <span className="cp-feat-corner cp-feat-corner--tl">✶</span>
                <span className="cp-feat-corner cp-feat-corner--br">✶</span>
              </div>
            </ScrollReveal>

            {/* RIGHT — content */}
            <ScrollReveal direction="left" duration={0.85}>
              <div className="cp-feat-content">

                <span className="cp-section-badge">✨ Featured Course</span>

                <h2 className="cp-feat-h2 font-cinzel">Sri Vidyā</h2>

                <div className="cp-feat-body font-serif">
                  <p className="cp-feat-body__label font-cinzel">Principal Deities of Sri Vidyā</p>
                  <p>
                    In Sri Vidya, the Supreme Mother is approached through a defined
                    spiritual order rather than unstructured devotion. At Sri
                    MahaVidyesvari Tantra Peetham, we follow the Parashurama
                    Kalpasutras, which establish the traditional sequence, discipline,
                    and ritual framework of this sacred path.
                  </p>
                  <p>
                    Within this lineage, the principal deities represent functional
                    powers of the same Divine Reality. Maha Ganapati removes obstacles
                    and prepares the sādhaka for worship. Shyamala (Mātangi) governs
                    mantra, speech, knowledge, and refinement of understanding. Varahi
                    grants protection, discipline, and the destruction of obstacles that
                    hinder spiritual progress. Bala Tripurasundari provides the essential
                    foundation upon which the entire Sri Vidya tradition is built.
                  </p>
                  <p>
                    This sacred progression culminates in the worship of Sri Lalita
                    Tripurasundari, the Para Devata of Sri Vidya, who resides at the
                    Bindu of the Sri Chakra. These deities are therefore not separate
                    objects of worship, but divinely ordained gateways through which the
                    seeker is gradually prepared, protected, and guided into the presence
                    of the Supreme Mother.
                  </p>
                </div>

                <div className="cp-feat-cta">
                  <GoldenButton
                    label="Know More"
                    size="lg"
                    onClick={() => navigate('/courses/sri-vidya')}
                  />
                </div>

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ALL SACRED COURSES — Uniform premium card grid
      ══════════════════════════════════════════════════════ */}
      <section className="cp-catalogue">
        <div className="cp-catalogue__inner">

          <ScrollReveal direction="up" duration={0.7}>
            <div className="cp-catalogue__header">
              <span className="cp-section-badge">🪷 Sacred Learning</span>
              <h2 className="cp-catalogue__title font-cinzel">Sacred Courses</h2>
              <p className="cp-catalogue__subtitle font-serif">
                Explore our full range of traditional courses rooted in authentic Guru
                Parampara and Śāstric wisdom. Each course is designed to deepen your
                spiritual knowledge and strengthen your sādhana.
              </p>
            </div>
          </ScrollReveal>

          <div className="cp-catalogue__grid">
            {ALL_COURSES.map((card, i) => (
              <ScrollReveal key={card.id} direction="up" delay={i * 0.06} duration={0.75}>
                <motion.div
                  className="cp-card"
                  whileHover={{ y: -8, boxShadow: '0 28px 64px rgba(123,30,58,0.13), 0 0 36px rgba(184,134,11,0.18)' }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="cp-card__accent" />
                  <div className="cp-card__thumb">
                    <motion.img
                      src={card.img}
                      alt={card.title}
                      loading="lazy"
                      className="cp-card__img"
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  </div>
                  <div className="cp-card__body">
                    <h3 className="cp-card__title font-cinzel">{card.title}</h3>
                    <div className="cp-card__rule">
                      <span className="cp-card__rule-line" />
                      <span className="cp-card__rule-dot" />
                      <span className="cp-card__rule-line" />
                    </div>
                    <p className="cp-card__desc font-serif">{card.desc}</p>
                    <GoldenButton
                      label="Know More"
                      size="md"
                      onClick={() => navigate(card.path)}
                    />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA — Begin Your Journey into Sacred Knowledge
      ══════════════════════════════════════════════════════ */}
      <section className="cp-cta">
        {/* Sacred geometry background pattern */}
        <div className="cp-cta__geo" aria-hidden="true" />
        <div className="cp-cta__glow" aria-hidden="true" />

        <ScrollReveal direction="up" duration={0.85}>
          <div className="cp-cta__box">
            {/* Corner ornaments */}
            <span className="cp-cta__corner cp-cta__corner--tl">✦</span>
            <span className="cp-cta__corner cp-cta__corner--tr">✦</span>
            <span className="cp-cta__corner cp-cta__corner--bl">✦</span>
            <span className="cp-cta__corner cp-cta__corner--br">✦</span>

            <span className="cp-cta__badge">📚 Begin Your Learning</span>

            <h2 className="cp-cta__heading font-cinzel">
              Begin Your Journey into<br />
              <span className="cp-cta__heading-gold">Sacred Knowledge</span>
            </h2>

            <div className="cp-cta__divider">
              <span className="cp-cta__divider-line" />
              <span className="cp-cta__divider-lotus">✿</span>
              <span className="cp-cta__divider-line" />
            </div>

            <p className="cp-cta__body font-serif">
              Every authentic spiritual journey begins with right knowledge. Our
              traditional courses are carefully structured according to Guru
              Parampara and Śāstric teachings, guiding seekers from foundational
              understanding to deeper spiritual practice with clarity, discipline,
              and devotion.
            </p>

            <div className="cp-cta__btns">
              <GoldenButton
                label="Enroll in a Course"
                size="lg"
                onClick={() => window.open(WA_URL, '_blank')}
              />
              <GoldenButton
                label="View All Workshops"
                size="lg"
                outlined
                onClick={() => navigate('/workshops')}
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <FooterSection />

    </div>
  );
}
