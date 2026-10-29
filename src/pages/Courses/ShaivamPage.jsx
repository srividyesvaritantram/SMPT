import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { FooterSection } from '../Home/HomeSections.jsx';
import heroImg from '../../assets/shaivam4.jpeg';
import shaivam5Img from '../../assets/shaivam5.jpeg';
import shaivam2Img from '../../assets/shaivam2.jpeg';
import shaivam3Img from '../../assets/shaivam3.jpeg';
import logoImg from '../../assets/logo.png';
import './ShaivamPage.css';

const NAV_SECTIONS = [
  { id: 'what-is', label: 'What is Shaivism?' },
  { id: 'pramanas', label: 'Scriptural Foundations' },
  { id: 'upasana', label: 'Types of Upasana' },
  { id: 'tantra', label: 'Shaiva Agama' },
  { id: 'importance', label: 'Why Shaivism' },
  { id: 'relations', label: 'Shiva + Vishnu + Shakti' },
  { id: 'essence', label: 'Essence & Practice' },
];

const WHAT_IS = [
  { point: 'Definition', answer: 'Shiva = Shiva means Auspicious, Mangala, Who lies beyond. Shaivam = Path where Shiva / Rudra / Mahadeva is Parabrahman — Supreme God from whom Vishnu, Brahma, Shakti are born.' },
  { point: 'Root Word', answer: 'Shi = To lie, to rest. Va = Auspicious. Shiva = One who rests in auspiciousness — Beyond all gunas.' },
  { point: 'Main Mantra', answer: 'Om Namah Shivaya — Panchakshara — 5 letters — Most chanted mantra on earth.' },
  { point: 'Main Goal', answer: 'Moksha = Shivoham — I become Shiva. Merge in Shiva — Shiva Sayujya.' },
  { point: 'How Old?', answer: 'Oldest. Mohenjo-Daro Pashupati seal 3000 BC is Shiva. Rig Veda 10.92 calls Rudra as Supreme.' },
];

const VEDA_TABLE = [
  { veda: 'Rig Veda', says: 'Rudra is \u201CMightiest of mighty\u201D, has healing power, destroys sin — 3 Suktas only for Rudra.' },
  { veda: 'Yajur Veda — Sri Rudram + Chamakam', says: 'Most important. Sri Rudram = 11 Anuvakas, 300+ names of Rudra. Chamakam asks all worldly + spiritual boons from Shiva. No other God has this.' },
  { veda: 'Atharva Veda', says: 'Bhavam Sharvam Rudram Pashupatim... — Shiva is Pashupati — Lord of all souls.' },
  { veda: 'Upanishads — Shvetashvatara, Atharva Shira, Kaivalya', says: 'Shiva is Brahman. From Shiva, Brahma, Vishnu born. Shiva is beyond 3 gunas.' },
];

const PURANA_TABLE = [
  { purana: 'Shiva Purana', says: 'Bible of Shaivism. 24,000 verses. Says Shiva is Parabrahman, Vishnu and Brahma came from Shiva Linga. Shiva Linga is infinite pillar of light.' },
  { purana: 'Linga Purana', says: 'Linga = Formless form of Shiva. Why Linga worship? Science of Linga.' },
  { purana: 'Skanda Purana', says: 'Largest Purana — 81,000 verses — Mostly about Shiva\u2019s son Kartikeya + Shiva Kshetras.' },
  { purana: 'Matsya, Kurma, Vayu Purana', says: 'Shiva as destroyer + protector.' },
  { purana: 'Agni Purana', says: 'Shiva worship method.' },
];

const AGAMA_TABLE = [
  { point: 'How many?', answer: '28 Shaiva Agamas + 64 Bhairava Agamas + 20 Rudra Agamas = 112 Agamas.' },
  { point: 'Who gave?', answer: 'Shiva himself told to Parvati, Parvati to Nandi, Nandi to Rishis — Called Shiva Agama.' },
  { point: 'Main Agamas', answer: 'Kamika, Yogaja, Chintya, Karana, Ajita, Dipta etc — Each 4 parts: Charya, Kriya, Yoga, Jnana.' },
  { point: 'What it says?', answer: 'Temple construction, Linga installation, Yantra, Mantra, Yoga, Moksha — More detailed than Pancharatra.' },
  { point: 'Difference from Veda', answer: 'Veda says \u201CWorship formless\u201D. Agama says \u201CWorship Linga + Idol + Yantra\u201D — So Agama is for Kali Yuga practical worship.' },
];

const ITIHASA_REFS = [
  { title: 'Ramayana', detail: 'Rama worshipped Shiva at Rameshwaram before going to Lanka. Rameshwara = Rama\u2019s Ishwara. Rama is Vishnu avatar but worships Shiva.' },
  { title: 'Mahabharata', detail: 'Krishna worshipped Shiva for son Samba — Shiva is giver of boons to Vishnu. Arjuna got Pashupatastra from Shiva.' },
  { title: 'Gita', detail: 'Krishna says Rudranam Shankaro Asmi — Among Rudras, I am Shankara — Shows Shiva\u2019s importance.' },
];

const KASHMIR_REFS = [
  { title: 'Shiva Sutra', detail: 'Found by Vasugupta — Shiva\u2019s direct teaching.' },
  { title: 'Spanda Karika', detail: 'Everything vibrates from Shiva.' },
  { title: 'Pratyabhijna Hridaya', detail: 'Recognize yourself as Shiva.' },
];

const SAMPRADAYAS = [
  { no: '1', name: 'Pashupata', founder: 'Lakulisha — Shiva\u2019s Avatar', philosophy: 'Oldest — 2nd century BC', place: 'Gujarat, Rajasthan', method: 'Ashes on body, Laughing, Dancing — To remove ego' },
  { no: '2', name: 'Shaiva Siddhanta', founder: 'Tirumular, Meykandar', philosophy: 'Dualism — Shiva and Jiva different but Jiva can become Shiva-like', place: 'Tamil Nadu — Madurai, Chidambaram', method: 'Temple worship, Linga Puja, 4 steps Charya Kriya Yoga Jnana' },
  { no: '3', name: 'Kashmir Shaivism / Trika', founder: 'Vasugupta, Abhinavagupta', philosophy: 'Non-dualism — Everything is Shiva — Shivoham', place: 'Kashmir', method: 'Yoga, Spanda, Pratyabhijna — Recognize self as Shiva' },
  { no: '4', name: 'Lingayat / Veerashaiva', founder: 'Basavanna', philosophy: 'Shiva is Linga, Jiva is Anga — Linga + Anga union', place: 'Karnataka', method: 'Wear Linga on body always — Ishta Linga' },
  { no: '5', name: 'Kapalika / Kalamukha', founder: 'Bhairava form', philosophy: 'Extreme Tantra', place: 'Earlier all India, now secret', method: 'Skull worship — For fast Siddhi — Guru only' },
  { no: '6', name: 'Nath / Gorakhnath', founder: 'Matsyendranath, Gorakhnath', philosophy: 'Hatha Yoga + Shiva', place: 'All India — Nath temples', method: 'Yoga, Kundalini, Alchemy' },
];

const FIVE_FORMS = [
  { form: '1. Sadyojata', face: 'West face — Child', dir: 'West', element: 'Earth', mantra: 'Om Sadyojatam Prapadyami', upasana: 'Creation — Brahma power' },
  { form: '2. Vamadeva', face: 'North face — Beautiful', dir: 'North', element: 'Water', mantra: 'Om Vamadevaya Namah', upasana: 'Protection — Vishnu power' },
  { form: '3. Aghora', face: 'South face — Fearful', dir: 'South', element: 'Fire', mantra: 'Om Aghoreshwaraya Namah', upasana: 'Destruction — Rudra power' },
  { form: '4. Tatpurusha', face: 'East face — Meditating', dir: 'East', element: 'Air', mantra: 'Om Tatpurushaya Vidmahe', upasana: 'Concealing — Hides truth' },
  { form: '5. Ishana', face: 'Top face — Supreme', dir: 'Up', element: 'Space', mantra: 'Om Ishanah Sarva Vidyanam', upasana: 'Revealing — Gives Moksha' },
];

const PANCHAKRITYA = [
  { name: 'Srishti', meaning: 'Create' },
  { name: 'Sthiti', meaning: 'Protect' },
  { name: 'Samhara', meaning: 'Destroy' },
  { name: 'Tirodhana', meaning: 'Hide' },
  { name: 'Anugraha', meaning: 'Bless' },
];

const LINGA_TYPES = [
  { type: '1. Ishta Linga', made: 'Small crystal, Wear on body', whom: 'Lingayat, Personal Sadhaka', result: 'Personal protection, Always with Shiva' },
  { type: '2. Bana Linga / Narmada Linga', made: 'Narmada river stone', whom: 'Grihastha for home', result: 'Removes all Dosha, Brings Lakshmi' },
  { type: '3. Sthavara Linga / Jyotirlinga', made: 'Big stone in temple', whom: 'All public', result: '12 Jyotirlinga — Most powerful — Saurashtre Somanatham...' },
];

const JYOTIRLINGA = [
  'Somnath', 'Mallikarjuna', 'Mahakaleshwar', 'Omkareshwar', 'Kedarnath', 'Bhimashankar',
  'Kashi Vishwanath', 'Trimbakeshwar', 'Vaidyanath', 'Nageshwar', 'Rameswaram', 'Grishneshwar',
];

const FOUR_STEPS = [
  { step: '1. Charya', name: 'Servant path', action: 'Clean temple, Make garland, Serve devotees', example: 'Kannappa Nayanar', result: 'Removes ego' },
  { step: '2. Kriya', name: 'Son path', action: 'Puja, Abhisheka, Mantra — Om Namah Shivaya 108 daily', example: 'Temple priests', result: 'Gets Shiva\u2019s closeness' },
  { step: '3. Yoga', name: 'Friend path', action: 'Meditation, Pranayama, Kundalini — Focus on third eye', example: 'Gorakhnath', result: 'Gets Shiva\u2019s form' },
  { step: '4. Jnana', name: 'Knowledge path', action: 'Shivoham, Aham Brahmasmi — I am Shiva', example: 'Adi Shankara, Ramana Maharshi', result: 'Merges in Shiva — Sayujya' },
];

const THREE_MALAS = [
  { mala: 'Anava Mala', impurity: 'Ego — I am small', removal: 'By Om Namah Shivaya' },
  { mala: 'Mayiya Mala', impurity: 'Attachment — This world is real', removal: 'By Jnana' },
  { mala: 'Karma Mala', impurity: 'Action result — I am doer', removal: 'By Seva + Yoga' },
];

const PANCHAKSHARA = [
  { letter: 'Na', element: 'Earth', face: 'Sadyojata' },
  { letter: 'Ma', element: 'Water', face: 'Vamadeva' },
  { letter: 'Shi', element: 'Fire', face: 'Aghora' },
  { letter: 'Va', element: 'Air', face: 'Tatpurusha' },
  { letter: 'Ya', element: 'Space', face: 'Ishana' },
];

const RITUALS = [
  { name: 'Abhisheka', detail: 'Bathing Linga with water, milk, honey, ghee, curd — Panchamrita' },
  { name: 'Alankara', detail: 'Decoration' },
  { name: 'Naivedya', detail: 'Food' },
  { name: 'Deepa', detail: 'Lamp' },
  { name: 'Mantra Japa', detail: 'Daily repetition of the sacred mantra' },
];

const IMPORTANCE_ROWS = [
  { num: '1', importance: 'Oldest — Sanatana', shastra: 'Mohenjo-Daro + Veda', detail: 'Shiva worship 5000 years old — Proof.' },
  { num: '2', importance: 'Gives Vairagya + Bhoga both', shastra: 'Shiva Purana', detail: 'Shiva is ascetic (Cremation ground) + Householder (with Parvati) — So teaches balance.' },
  { num: '3', importance: 'Controls Death', shastra: 'Shiva Purana', detail: 'Mrityunjaya Mantra: Om Tryambakam Yajamahe... — Only Shiva can stop death — No other God has this mantra.' },
  { num: '4', importance: 'Easiest Moksha', shastra: 'Shvetashvatara Upanishad', detail: 'Just chant Om Namah Shivaya with Bilva leaf — No need big Yagna.' },
  { num: '5', importance: 'Science of Yoga', shastra: 'Yoga Sutra says Shiva is first Yogi — Adiyogi — All Yoga from Shiva', detail: 'Gorakhnath, Patanjali are Shaivas.' },
  { num: '6', importance: '12 Jyotirlinga = Energy Centers', shastra: 'Skanda Purana', detail: '12 Linga are earth\u2019s energy grid — Like acupuncture points — Visiting balances earth + body.' },
  { num: '7', importance: 'No caste', shastra: 'Tirumular Tirumantra', detail: 'Ondre Kulam Oruvane Devan — One caste, One God. Lingayat removed caste 900 years ago.' },
];

const RELATION_ROWS = [
  { relation: 'Shiva + Vishnu', shastra: 'Shiva Purana: Vishnu is heart of Shiva, Shiva is heart of Vishnu — Shivasya Hridaye Vishnuh, Vishnoshcha Hridaye Shivah', meaning: 'No fight — Same.' },
  { relation: 'Shiva + Shakti', shastra: 'Saundarya Lahari: Shiva without Shakti is Shava (corpse). Shakti without Shiva is useless.', meaning: 'Need both — Ardhanarishwara.' },
  { relation: 'Shiva + Ganapati', shastra: 'Ganesha Purana', meaning: 'Ganapati is Shiva\u2019s son but also his Guru — Shiva meditates on Maha Ganapati.' },
];

const PILLARS = [
  { label: 'Pati', text: 'Shiva is Lord — Pashupati.' },
  { label: 'Pashu', text: 'Jiva is animal bound by 3 Malas.' },
  { label: 'Pasha', text: 'Bondage — Anava, Mayiya, Karma — Remove by Charya Kriya Yoga Jnana.' },
];

const PRACTICAL = [
  { label: 'Morning', title: 'Mantra Japa', mantra: 'Om Namah Shivaya 108', detail: 'Removes sin.' },
  { label: 'Monday', title: 'Fast + Bilva', mantra: 'Bilva leaf to Shiva Linga', detail: 'Fulfills wishes.' },
  { label: 'Evening', title: 'Protection', mantra: 'Om Tryambakam Yajamahe 11 times', detail: 'Protects from death, disease.' },
];

function Ornament() {
  return (
    <div className="sh-orn" aria-hidden="true">
      <span className="sh-orn__line" />
      <span className="sh-orn__diamond">✦</span>
      <span className="sh-orn__line" />
    </div>
  );
}

function FramedFigure({ src, alt, caption, className = '' }) {
  return (
    <figure className={`sh-figure${className ? ` ${className}` : ''}`}>
      <div className="sh-figure__frame">
        <span className="sh-figure__corner sh-figure__corner--tl" aria-hidden="true">✦</span>
        <span className="sh-figure__corner sh-figure__corner--br" aria-hidden="true">✦</span>
        <img src={src} alt={alt} className="sh-figure__img" loading="lazy" draggable="false" />
      </div>
      {caption && <figcaption className="sh-figure__caption font-serif">{caption}</figcaption>}
    </figure>
  );
}

export default function ShaivamPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Shaivam | Complete Shastra, Philosophy & Sadhana';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      'content',
      'Explore Shaivam — the oldest path of Sanatana Dharma where Shiva / Rudra / Mahadeva is Parabrahman. Complete shastra, 6 Pramanas, 6 Sampradayas, 12 Jyotirlinga, Shaiva Agama and sadhana.'
    );
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navbar = document.querySelector('nav.navbar');
    const offset = navbar ? navbar.offsetHeight : 72;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 18;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };

  return (
    <div className="sh-page">
      <Navbar />

      {/* ══════════════ HERO ══════════════ */}
      <section className="sh-hero">
        <div className="sh-hero__bg" aria-hidden="true" />
        <div className="sh-hero__inner">
          <div className="sh-hero__content">
            <motion.span
              className="sh-hero__eyebrow"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              SHAIVAM · SHIVA · RUDRA · MAHADEVA · SHAIVA AGAMA
            </motion.span>

            <motion.h1
              className="sh-hero__title font-cinzel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              SHAIVISM — COMPLETE SHASTRA EXPLANATION
            </motion.h1>

            <motion.p
              className="sh-hero__subtitle font-cinzel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              Shaivam = One of 6 Main Paths — Where Shiva is Parabrahman — Oldest Path in World
            </motion.p>

            <motion.div
              className="sh-hero__divider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <span className="sh-hero__divider-line" />
              <img src={logoImg} alt="" className="sh-hero__divider-om" />
              <span className="sh-hero__divider-line" />
            </motion.div>

            <motion.p
              className="sh-hero__intro font-serif"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              Shaivam is the <strong>oldest of the six main paths</strong> of Sanatana Dharma. Here Shiva — Rudra — Mahadeva — is honoured as <strong>Parabrahman</strong>, the Supreme Reality from whom Vishnu, Brahma and Shakti are born. From the Pashupati seal of Mohenjo-Daro to the Yogi of modern temples, Shaivam has never stopped.
            </motion.p>

            <motion.span
              className="sh-hero__badge font-serif"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72 }}
            >
              🪷 Shaivam · Shiva · Rudra · Mahadeva · Shaiva Agama
            </motion.span>

            <motion.div
              className="sh-hero__btn"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.78 }}
            >
              <GoldenButton
                label="Explore Shaivam"
                size="lg"
                onClick={() => scrollToId('what-is')}
              />
            </motion.div>
          </div>

          <motion.div
            className="sh-hero__art"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="sh-hero__halo" aria-hidden="true" />
            <figure className="sh-hero__frame">
              <img
                src={heroImg}
                alt="Lord Shiva — Mahadeva, the auspicious one, Parabrahman of the Shaivam tradition"
                className="sh-hero__img"
                loading="eager"
                draggable="false"
              />
            </figure>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ BACK LINK ══════════════ */}
      <div className="sh-top-back">
        <button type="button" className="sh-top-back__btn" onClick={() => navigate('/courses')}>
          ← Back to Courses
        </button>
      </div>

      {/* ══════════════ CONTENTS NAV ══════════════ */}
      <nav className="sh-nav" aria-label="Course contents">
        <div className="sh-nav__inner">
          {NAV_SECTIONS.map((s) => (
            <button key={s.id} type="button" className="sh-nav__item" onClick={() => scrollToId(s.id)}>
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ══════════════ 1 — WHAT IS SHAIVISM? ══════════════ */}
      <section id="what-is" className="sh-section sh-section--warm">
        <div className="sh-container">
          <ScrollReveal className="sh-section__head">
            <span className="sh-eyebrow">SECTION 1 · THE OLDEST PATH</span>
            <h2 className="sh-section__title font-cinzel">What Is Shaivism?</h2>
            <p className="sh-section__subtitle font-serif">The path where Shiva is honoured as Parabrahman — the Supreme Reality</p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="sh-table-wrap">
              <table className="sh-table">
                <thead>
                  <tr><th>Point</th><th>Answer</th></tr>
                </thead>
                <tbody>
                  {WHAT_IS.map((r) => (
                    <tr key={r.point}>
                      <td><strong>{r.point}</strong></td>
                      <td>{r.answer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* ── Mantra callouts ── */}
          <ScrollReveal>
            <div className="sh-grid sh-grid--3">
              <ScrollReveal>
                <div className="sh-mantra-box">
                  <span className="sh-mantra-box__label font-cinzel">Rig Veda 2.33.10</span>
                  <p className="sh-mantra-box__sanskrit font-serif">Aham Rudraya Namo...</p>
                  <p className="sh-mantra-box__meaning font-serif">I bow to Rudra, who is most powerful.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <div className="sh-mantra-box">
                  <span className="sh-mantra-box__label font-cinzel">Yajur Veda — Sri Rudram</span>
                  <p className="sh-mantra-box__sanskrit font-serif">Namah Shivaya Cha Shivataraaya Cha</p>
                  <p className="sh-mantra-box__meaning font-serif">Only God with a full Suktam in the Veda.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="sh-mantra-box">
                  <span className="sh-mantra-box__label font-cinzel">Shvetashvatara Upanishad 3.2</span>
                  <p className="sh-mantra-box__sanskrit font-serif">Rudro Hi Sarvabhutanam Antah</p>
                  <p className="sh-mantra-box__meaning font-serif">Rudra lives inside all beings.</p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 2 — SCRIPTURAL FOUNDATIONS — 6 PRAMANAS ══════════════ */}
      <section id="pramanas" className="sh-section sh-section--maroon">
        <div className="sh-container">
          <ScrollReveal className="sh-section__head">
            <span className="sh-eyebrow">SECTION 2 · SCRIPTURAL FOUNDATIONS</span>
            <h2 className="sh-section__title font-cinzel">Scriptural Foundations of Shaivism — 6 Pramanas</h2>
            <p className="sh-section__subtitle font-serif">The six scriptural pillars on which Shaivam rests</p>
            <Ornament />
          </ScrollReveal>

          {/* ── 1. Veda Pramana ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">1. Veda Pramana</h3>
            <div className="sh-table-wrap">
              <table className="sh-table">
                <thead>
                  <tr><th>Veda</th><th>What It Says</th></tr>
                </thead>
                <tbody>
                  {VEDA_TABLE.map((r) => (
                    <tr key={r.veda}><td><strong>{r.veda}</strong></td><td>{r.says}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="sh-callout">
                <span className="sh-callout__label font-cinzel">Importance</span>
                <p className="sh-callout__text font-serif">
                  Only Shiva is called <strong>Mahadeva — Great God</strong> in the Vedas. Others are Deva.
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── 2. Purana Pramana ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">2. Purana Pramana — 6 Puranas are Shaiva Puranas</h3>
            <div className="sh-callout" style={{ marginBottom: '24px' }}>
              <span className="sh-callout__label font-cinzel">Padma Purana Says</span>
              <p className="sh-callout__text font-serif">
                Tamasic Puranas are actually for transcending Tamas — Shaiva Puranas.
              </p>
            </div>
            <div className="sh-table-wrap">
              <table className="sh-table">
                <thead>
                  <tr><th>Purana</th><th>What It Says</th></tr>
                </thead>
                <tbody>
                  {PURANA_TABLE.map((r) => (
                    <tr key={r.purana}><td><strong>{r.purana}</strong></td><td>{r.says}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="sh-mantra-box">
                <span className="sh-mantra-box__label font-cinzel">Shiva Purana 1.8</span>
                <p className="sh-mantra-box__sanskrit font-serif">
                  Brahma and Vishnu fought who is supreme. Shiva appeared as infinite Linga of fire. Both could not find end. Then they knew Shiva is Supreme.
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── 3. Agama Pramana ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">3. Agama Pramana — Tantra Shastra of Shaivism</h3>
            <p className="sh-callout__text font-serif" style={{ textAlign: 'center', marginBottom: '24px' }}>
              Shaivism has the <strong>biggest Tantra literature</strong> — 28 main Agamas.
            </p>
            <div className="sh-table-wrap">
              <table className="sh-table">
                <thead>
                  <tr><th>Agama</th><th>Details</th></tr>
                </thead>
                <tbody>
                  {AGAMA_TABLE.map((r) => (
                    <tr key={r.point}><td><strong>{r.point}</strong></td><td>{r.answer}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="sh-callout">
                <span className="sh-callout__label font-cinzel">Without Agama, No Jyotirlinga Temple Exists</span>
                <p className="sh-callout__text font-serif">
                  All 12 Jyotirlinga follow the Agama.
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── 4. Itihasa Pramana ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">4. Itihasa Pramana</h3>
            <div className="sh-grid sh-grid--3">
              {ITIHASA_REFS.map((t) => (
                <ScrollReveal key={t.title}>
                  <div className="sh-card">
                    <span className="sh-card__label font-cinzel">{t.title}</span>
                    <p className="sh-card__text font-serif">{t.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* ── 5. Kashmir Shaivism ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">5. Kashmir Shaivism Pramana</h3>
            <p className="sh-callout__text font-serif" style={{ textAlign: 'center', marginBottom: '24px' }}>
              The most philosophical Shaivism — from Kashmir.
            </p>
            <div className="sh-grid sh-grid--3">
              {KASHMIR_REFS.map((t) => (
                <ScrollReveal key={t.title}>
                  <div className="sh-card">
                    <span className="sh-card__label font-cinzel">{t.title}</span>
                    <p className="sh-card__text font-serif">{t.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* ── 6. Tirumurai + Tamil Saiva Siddhanta ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">6. Tirumurai + Tamil Saiva Siddhanta</h3>
            <div className="sh-card">
              <span className="sh-card__label font-cinzel">63 Nayanmars</span>
              <p className="sh-card__text font-serif">
                Appar, Sundarar, Sambandar — in Tamil Nadu — sang the 12 Tirumurai — 18,000 songs on Shiva — older than the Bhakti movement.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '50px' }}>
            <FramedFigure
              src={shaivam5Img}
              alt="A majestic depiction of Lord Shiva after the scriptural foundations of Shaivism"
              caption="After the six pramanas — the Lord of the Vedas, Puranas, Agamas and the Tamil Tirumurai"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 3 — TYPES OF UPASANA — 4 CLASSIFICATIONS ══════════════ */}
      <section id="upasana" className="sh-section sh-section--warm">
        <div className="sh-container">
          <ScrollReveal className="sh-section__head">
            <span className="sh-eyebrow">SECTION 3 · TYPES OF UPASANA</span>
            <h2 className="sh-section__title font-cinzel">Types of Upasana in Shaivism — 4 Classifications</h2>
            <p className="sh-section__subtitle font-serif">Sampradayas, forms, linga worship, steps and impurities</p>
            <Ornament />
          </ScrollReveal>

          {/* ── 1. Six Sampradayas ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">1. Six Main Sampradayas of Shaivism</h3>
            <p className="sh-callout__text font-serif" style={{ textAlign: 'center', marginBottom: '24px' }}>
              Suta Samhita says there are 6 Shaiva Sampradayas.
            </p>
            <div className="sh-table-wrap">
              <table className="sh-table">
                <thead>
                  <tr><th>No</th><th>Sampradaya</th><th>Started By</th><th>Philosophy</th><th>Main Place</th><th>Upasana Method</th></tr>
                </thead>
                <tbody>
                  {SAMPRADAYAS.map((s) => (
                    <tr key={s.no}>
                      <td><strong>{s.no}</strong></td>
                      <td><strong>{s.name}</strong></td>
                      <td>{s.founder}</td>
                      <td>{s.philosophy}</td>
                      <td>{s.place}</td>
                      <td>{s.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* ── 2. Five Forms ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">2. Five Forms of Shiva — Pancha Brahma Upasana</h3>
            <p className="sh-callout__text font-serif" style={{ textAlign: 'center', marginBottom: '24px' }}>
              Like Vaishnavism has 5 forms, Shaivism has 5 faces of Shiva — Pancha Mukha.
            </p>
            <div className="sh-table-wrap">
              <table className="sh-table">
                <thead>
                  <tr><th>Form</th><th>Face</th><th>Direction</th><th>Element</th><th>Mantra</th><th>Upasana</th></tr>
                </thead>
                <tbody>
                  {FIVE_FORMS.map((f) => (
                    <tr key={f.form}>
                      <td><strong>{f.form}</strong></td>
                      <td>{f.face}</td>
                      <td>{f.dir}</td>
                      <td>{f.element}</td>
                      <td><em className="sh-mantra">{f.mantra}</em></td>
                      <td>{f.upasana}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="sh-callout">
                <span className="sh-callout__label font-cinzel">Five Faces = Five Jobs of Shiva — Panchakritya</span>
                <p className="sh-callout__text font-serif">
                  {PANCHAKRITYA.map((p) => (
                    <span key={p.name}><strong>{p.name}</strong> — {p.meaning}. </span>
                  ))}
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── 3. Three Types of Linga ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">3. Three Types of Linga Upasana</h3>
            <p className="sh-callout__text font-serif" style={{ textAlign: 'center', marginBottom: '24px' }}>
              Shiva Purana says there are 3 types.
            </p>
            <div className="sh-table-wrap">
              <table className="sh-table">
                <thead>
                  <tr><th>Linga Type</th><th>Made Of</th><th>For Whom</th><th>Result</th></tr>
                </thead>
                <tbody>
                  {LINGA_TYPES.map((l) => (
                    <tr key={l.type}>
                      <td><strong>{l.type}</strong></td>
                      <td>{l.made}</td>
                      <td>{l.whom}</td>
                      <td>{l.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="sh-table-wrap" style={{ minWidth: '320px' }}>
              <table className="sh-table">
                <thead>
                  <tr><th>#</th><th>The 12 Jyotirlinga</th></tr>
                </thead>
                <tbody>
                  {JYOTIRLINGA.map((j, idx) => (
                    <tr key={j}>
                      <td><strong>{idx + 1}</strong></td>
                      <td>{j}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="sh-callout">
                <span className="sh-callout__label font-cinzel">Shiva Purana Says</span>
                <p className="sh-callout__text font-serif">
                  Darshan of one Jyotirlinga = Sin of 7 births removed.
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── 4. Four Steps to Moksha ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">4. Four Steps to Moksha — Shaiva Siddhanta</h3>
            <p className="sh-callout__text font-serif" style={{ textAlign: 'center', marginBottom: '24px' }}>
              The most systematic path — like school classes.
            </p>
            <div className="sh-table-wrap">
              <table className="sh-table">
                <thead>
                  <tr><th>Step</th><th>Name</th><th>What To Do</th><th>Example</th><th>Result</th></tr>
                </thead>
                <tbody>
                  {FOUR_STEPS.map((s) => (
                    <tr key={s.step}>
                      <td><strong>{s.step}</strong></td>
                      <td>{s.name}</td>
                      <td>{s.action}</td>
                      <td>{s.example}</td>
                      <td>{s.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="sh-mantra-box">
                <span className="sh-mantra-box__label font-cinzel">Kashmir Shaivism Adds a 5th Step</span>
                <p className="sh-mantra-box__sanskrit font-serif">Anupaya — No means</p>
                <p className="sh-mantra-box__meaning font-serif">Just recognize you are Shiva already.</p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── 5. Three Malas ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">5. Three Malas — Three Impurities To Remove</h3>
            <p className="sh-callout__text font-serif" style={{ textAlign: 'center', marginBottom: '24px' }}>
              From the Shiva Sutra — unique to Shaivism.
            </p>
            <div className="sh-table-wrap">
              <table className="sh-table">
                <thead>
                  <tr><th>Mala</th><th>Impurity</th><th>How Shiva Removes</th></tr>
                </thead>
                <tbody>
                  {THREE_MALAS.map((m) => (
                    <tr key={m.mala}>
                      <td><strong>{m.mala}</strong></td>
                      <td>{m.impurity}</td>
                      <td>By <em className="sh-mantra">{m.removal}</em></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="sh-callout" style={{ marginTop: '24px' }}>
                <span className="sh-callout__label font-cinzel">When 3 Malas are Removed</span>
                <p className="sh-callout__text font-serif">
                  <strong>You become Shiva</strong> — this is Shaiva Moksha.
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 4 — TANTRA SHASTRA — SHAIVA AGAMA ══════════════ */}
      <section id="tantra" className="sh-section sh-section--maroon">
        <div className="sh-container">
          <ScrollReveal className="sh-section__head">
            <span className="sh-eyebrow">SECTION 4 · THE SHAIVA AGAMAS</span>
            <h2 className="sh-section__title font-cinzel">Tantra Shastra — Shaiva Agama in Detail</h2>
            <p className="sh-section__subtitle font-serif">What do the 28 Agamas say?</p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="sh-callout" style={{ marginBottom: '32px' }}>
              <span className="sh-callout__label font-cinzel">The Main Agama</span>
              <p className="sh-callout__text font-serif">
                <strong>Kamika Agama</strong> is the main Agama — everything below comes from its teaching.
              </p>
            </div>
          </ScrollReveal>

          {/* ── 1. Mantra ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">1. Mantra — The Panchakshara</h3>
            <div className="sh-table-wrap">
              <table className="sh-table">
                <thead>
                  <tr><th>Letter</th><th>Element</th><th>Face of Shiva</th></tr>
                </thead>
                <tbody>
                  {PANCHAKSHARA.map((p) => (
                    <tr key={p.letter}>
                      <td><strong className="sh-mantra">{p.letter}</strong></td>
                      <td>{p.element}</td>
                      <td>{p.face}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="sh-mantra-box">
                <span className="sh-mantra-box__label font-cinzel">Om Namah Shivaya — 5 Letters</span>
                <p className="sh-mantra-box__sanskrit font-serif">Om Namah Shivaya</p>
                <p className="sh-mantra-box__meaning font-serif">
                  Each of the 5 letters = 5 elements + 5 faces of Shiva. Na = Earth — Sadyojata. Ma = Water — Vamadeva. Shi = Fire — Aghora. Va = Air — Tatpurusha. Ya = Space — Ishana.
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── 2. Yantra ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">2. Yantra</h3>
            <div className="sh-grid sh-grid--2">
              <ScrollReveal>
                <div className="sh-card">
                  <span className="sh-card__label font-cinzel">Sri Yantra</span>
                  <p className="sh-card__text font-serif">The Sri Yantra is actually Shiva + Shakti together.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <div className="sh-card">
                  <span className="sh-card__label font-cinzel">Shaiva Yantra</span>
                  <p className="sh-card__text font-serif">The Shaiva Yantra is the Shiva Linga Yantra — a triangle with the Linga in the centre and 8 petals around it.</p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* ── 3. Five Daily Rituals ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">3. Five Rituals Daily for a Shaiva</h3>
            <div className="sh-table-wrap">
              <table className="sh-table">
                <thead>
                  <tr><th>#</th><th>Ritual</th><th>Meaning</th></tr>
                </thead>
                <tbody>
                  {RITUALS.map((r, idx) => (
                    <tr key={r.name}>
                      <td><strong>{idx + 1}</strong></td>
                      <td><strong>{r.name}</strong></td>
                      <td>{r.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* ── 4. 36 Tattvas ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">4. The 36 Tattvas — Shaivism\u2019s Cosmology</h3>
            <div className="sh-grid sh-grid--3">
              <ScrollReveal>
                <div className="sh-card">
                  <span className="sh-card__label font-cinzel">36 Principles</span>
                  <p className="sh-card__text font-serif">The world has 36 principles — from Shiva Tattva (1) to Earth Tattva (36). The most detailed cosmology in any religion — Kashmir Shaivism lists all 36.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <div className="sh-card">
                  <span className="sh-card__label font-cinzel">More Than 5 Elements</span>
                  <p className="sh-card__text font-serif">Other systems say 5 elements. Shaivism says 36 — including Mind, Ego, Maya, Knowledge and more.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="sh-card">
                  <span className="sh-card__label font-cinzel">Most Scientific</span>
                  <p className="sh-card__text font-serif">The inner principles include consciousness, mind and ego — modern psychology matches this model.</p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '40px' }}>
            <FramedFigure
              src={shaivam2Img}
              alt="The Shaiva Agama — the tantra shastra of temple worship, mantras and yantras"
              caption="The Shaiva Agama — the practical Tantra Shastra of Shaivism"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 5 — IMPORTANCE ══════════════ */}
      <section id="importance" className="sh-section sh-section--warm">
        <div className="sh-container">
          <ScrollReveal className="sh-section__head">
            <span className="sh-eyebrow">SECTION 5 · WHY SHAIVISM IS NEEDED</span>
            <h2 className="sh-section__title font-cinzel">Importance of Shaivism — Why It Is Needed</h2>
            <p className="sh-section__subtitle font-serif">What the oldest path offers the world</p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="sh-table-wrap">
              <table className="sh-table">
                <thead>
                  <tr><th>Importance</th><th>Shastra</th><th>Details</th></tr>
                </thead>
                <tbody>
                  {IMPORTANCE_ROWS.map((r) => (
                    <tr key={r.num}>
                      <td><strong>{r.num}. {r.importance}</strong></td>
                      <td>{r.shastra}</td>
                      <td>{r.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '40px' }}>
            <FramedFigure
              src={shaivam3Img}
              alt="Lord Shiva in His glory after the importance of Shaivism"
              caption="After the sevenfold importance — the Lord who controls death and gives the easiest Moksha"
            />
          </ScrollReveal>

          {/* ── Maha Mrityunjaya ── */}
          <ScrollReveal>
            <div className="sh-mantra-box" style={{ marginTop: '16px' }}>
              <span className="sh-mantra-box__label font-cinzel">Maha Mrityunjaya Mantra</span>
              <p className="sh-mantra-box__sanskrit font-serif">Om Tryambakam Yajamahe Sugandhim Pushtivardhanam<br />Urvarukamiva Bandhanan Mrityor Mukshiya Mamritat</p>
              <p className="sh-mantra-box__meaning font-serif">Only Shiva can stop death — no other God has this mantra in the Veda.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 6 — RELATION ══════════════ */}
      <section id="relations" className="sh-section sh-section--maroon">
        <div className="sh-container">
          <ScrollReveal className="sh-section__head">
            <span className="sh-eyebrow">SECTION 6 · ONE FAMILY, ONE SELF</span>
            <h2 className="sh-section__title font-cinzel">Shiva + Vishnu + Shakti + Ganapati — Relation</h2>
            <p className="sh-section__subtitle font-serif">How Shiva relates to the other devas of Sanatana Dharma</p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="sh-table-wrap">
              <table className="sh-table">
                <thead>
                  <tr><th>Relation</th><th>Shastra</th><th>Meaning</th></tr>
                </thead>
                <tbody>
                  {RELATION_ROWS.map((r) => (
                    <tr key={r.relation}>
                      <td><strong>{r.relation}</strong></td>
                      <td>{r.shastra}</td>
                      <td>{r.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="sh-callout">
              <span className="sh-callout__label font-cinzel">Hari-Hara</span>
              <p className="sh-callout__text font-serif">
                Half Vishnu, half Shiva — the Hari-Hara form shows their unity — seen in the Harihar temple in Karnataka.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="sh-mantra-box" style={{ marginTop: '24px' }}>
              <span className="sh-mantra-box__label font-cinzel">Shiva Purana — The Shared Heart</span>
              <p className="sh-mantra-box__sanskrit font-serif">Shivasya Hridaye Vishnuh, Vishnoshcha Hridaye Shivah</p>
              <p className="sh-mantra-box__meaning font-serif">Vishnu is the heart of Shiva; Shiva is the heart of Vishnu. No fight — the same Reality.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 7 — ESSENCE & PRACTICE ══════════════ */}
      <section id="essence" className="sh-section sh-section--warm">
        <div className="sh-container">
          <ScrollReveal className="sh-section__head">
            <span className="sh-eyebrow">SECTION 7 · THE CLOSING VISION</span>
            <h2 className="sh-section__title font-cinzel">Essence of Shaivism</h2>
            <p className="sh-section__subtitle font-serif">The final teaching, the three pillars and the practical path</p>
            <Ornament />
          </ScrollReveal>

          {/* ── Upanishad Quote ── */}
          <ScrollReveal>
            <div className="sh-scripture-card">
              <span className="sh-scripture-card__mark" aria-hidden="true">&ldquo;</span>
              <p className="sh-scripture-card__sanskrit font-serif">Eko Hi Rudro Na Dvitiyaya Tasthuh</p>
              <p className="sh-scripture-card__source font-cinzel">— Shvetashvatara Upanishad 3.11</p>
              <p className="sh-scripture-card__meaning font-serif">Only one Rudra exists — there is no second.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="sh-mantra-box" style={{ marginTop: '28px' }}>
              <span className="sh-mantra-box__label font-cinzel">Shiva Purana — Final Teaching</span>
              <p className="sh-mantra-box__sanskrit font-serif">Shiva is Satyam, Shivam, Sundaram</p>
              <p className="sh-mantra-box__meaning font-serif">Truth, Auspiciousness, Beauty — everything ends in Shiva.</p>
            </div>
          </ScrollReveal>

          {/* ── Three Pillars ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">Three Pillars of Shaivism</h3>
            <div className="sh-grid sh-grid--3">
              {PILLARS.map((p) => (
                <ScrollReveal key={p.label}>
                  <motion.div className="sh-card sh-card--deep" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                    <span className="sh-card__label font-cinzel">{p.label}</span>
                    <p className="sh-card__text font-serif">{p.text}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* ── Practical Rule ── */}
          <ScrollReveal>
            <h3 className="sh-block__title font-cinzel">Practical Rule for You</h3>
            <div className="sh-grid sh-grid--3">
              {PRACTICAL.map((c) => (
                <ScrollReveal key={c.label}>
                  <motion.div className="sh-card sh-card--deep" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                    <span className="sh-card__label font-cinzel">{c.label}</span>
                    <h4 className="sh-card__h4 font-cinzel">{c.title}</h4>
                    <p className="sh-card__text font-serif"><em className="sh-mantra">{c.mantra}</em><br />{c.detail}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* ── Final Devotional Message ── */}
          <ScrollReveal className="sh-closing">
            <span className="sh-closing__mark" aria-hidden="true">✦</span>
            <p className="sh-closing__source font-cinzel" style={{ marginBottom: '16px' }}>In Kali Yuga, Shaivism says:</p>
            <p className="sh-closing__sanskrit font-serif" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)' }}>
              Just remember Shiva, even without temple, you get Moksha.
            </p>
            <div className="sh-closing__divider">
              <span className="sh-closing__divider-line" />
              <span className="sh-closing__divider-star">✦</span>
              <span className="sh-closing__divider-line" />
            </div>
            <p className="sh-closing__meaning font-serif">
              Because Shiva lives in the cremation ground — He accepts even the impure. There is no deeper mercy than this.
            </p>
            <p className="sh-closing__sanskrit font-serif" style={{ fontSize: 'clamp(26px, 3.4vw, 40px)', marginTop: '8px' }}>
              ॐ नमः शिवाय
            </p>
            <p className="sh-closing__source font-cinzel" style={{ marginTop: '8px' }}>Om Namah Shivaya</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="sh-cta">
        <div className="sh-cta__geo" aria-hidden="true" />
        <ScrollReveal direction="up" duration={0.85}>
          <div className="sh-cta__box">
            <span className="sh-cta__corner sh-cta__corner--tl" aria-hidden="true">✦</span>
            <span className="sh-cta__corner sh-cta__corner--tr" aria-hidden="true">✦</span>
            <span className="sh-cta__corner sh-cta__corner--bl" aria-hidden="true">✦</span>
            <span className="sh-cta__corner sh-cta__corner--br" aria-hidden="true">✦</span>

            <span className="sh-cta__badge">🪷 Walk the Path of Shiva</span>
            <h2 className="sh-cta__heading font-cinzel">
              Begin Your Journey Into<br />
              <span className="sh-cta__heading-gold">Shaivam</span>
            </h2>
            <div className="sh-cta__divider">
              <span className="sh-cta__divider-line" />
              <span className="sh-cta__divider-lotus">✿</span>
              <span className="sh-cta__divider-line" />
            </div>
            <p className="sh-cta__body font-serif">
              Explore the 6 Pramanas, the 6 Sampradayas, the 12 Jyotirlinga and the daily
              upasana of Mahadeva — beginning with a single Om Namah Shivaya.
            </p>
            <div className="sh-cta__btns">
              <GoldenButton label="Back to Courses" size="lg" onClick={() => navigate('/courses')} />
              <GoldenButton label="Explore Other Courses" size="lg" outlined onClick={() => navigate('/courses')} />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <FooterSection />
    </div>
  );
}