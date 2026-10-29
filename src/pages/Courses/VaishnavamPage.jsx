import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { FooterSection } from '../Home/HomeSections.jsx';
import logoImg from '../../assets/logo.png';
import './VaishnavamPage.css';

const HERO_IMG = '/assets/course-images/vaishnavam/vaishanavam.jpeg';
const IMG_PRAMANAS = '/assets/course-images/vaishnavam/vaishanavm1.jpeg';
const IMG_TANTRA = '/assets/course-images/vaishnavam/vaishanavam2.jpeg';
const IMG_ESSENCE = '/assets/course-images/vaishnavam/vaishanavam3.jpeg';

const NAV_SECTIONS = [
  { id: 'what-is', label: 'What is Vaishnavism?' },
  { id: 'pramanas', label: '6 Pramanas' },
  { id: 'upasana', label: 'Types of Upasana' },
  { id: 'tantra', label: 'Pancharatra Tantra' },
  { id: 'importance', label: 'Why Vaishnavism' },
  { id: 'essence', label: 'Essence & Practice' },
];

const WHAT_IS = [
  { point: 'Definition', answer: 'Vishnu = Vyakta + Avyakta + Sarva Vyapaka. Vaishnavam = Path where Vishnu / Narayana / Krishna / Rama is Parabrahman — Supreme God from whom Brahma, Shiva are born.' },
  { point: 'Root Word', answer: 'Vish = To pervade. Vishnu = One who pervades everything — Inside and Outside.' },
  { point: 'Main Mantra', answer: 'Om Namo Narayanaya — Ashtakshara — 8 letters — Most powerful in Vedas.' },
  { point: 'Main Goal', answer: 'Moksha = Vaikuntha Prapti — Go to Vaikuntha and serve Vishnu forever — Not merge, but serve.' },
  { point: 'Who is Vishnu?', answer: 'Rig Veda says Vishnu is Supreme Yagna Purusha. 3 steps of Vishnu cover all 3 worlds — Trivikrama.' },
];

const VEDA_TABLE = [
  { veda: 'Rig Veda 1.154', says: 'Full Sukta on Vishnu — Vishnu is Yajna, Vishnu is Truth.' },
  { veda: 'Purusha Sukta — Rig Veda 10.90', says: 'Purusha is Vishnu himself — From him Brahma, world came.' },
  { veda: 'Upanishads — Maha Narayana Upanishad', says: 'Narayana is Supreme — Brahma was born from Narayana, Shiva was born from Narayana — Narayana Parabrahman.' },
  { veda: 'Katha, Mundaka Upanishad', says: 'Vishnu\u2019s Paramapada is highest goal.' },
];

const PURANA_TABLE = [
  { purana: 'Vishnu Purana', says: 'Bible of Vaishnavism. Says Vishnu is Parabrahman, Brahma and Shiva are his forms. Creation starts from Vishnu.' },
  { purana: 'Bhagavata Purana', says: 'Most important. 12 Skandhas, 18,000 verses — Full story of Krishna. Says Krishnas Tu Bhagavan Swayam — Krishna is Supreme himself.' },
  { purana: 'Garuda Purana', says: 'Death, After death, Vaikuntha route.' },
  { purana: 'Matsya, Kurma, Varaha Purana', says: 'Vishnu Avatars.' },
  { purana: 'Naradiya Purana', says: 'Bhakti.' },
];

const ITIHASA_REFS = [
  { title: 'Ramayana', detail: 'Rama = Vishnu Avatar — Ramo Vigrahavan Dharmah — Rama is Dharma in human form.' },
  { title: 'Mahabharata + Bhagavad Gita', detail: 'Krishna = Vishnu. Gita is heart of Vaishnavism. Krishna says Mam Ekam Sharanam Vraja — Surrender to me alone.' },
  { title: 'Gita 18.66', detail: 'Charama Shloka — main mantra of Vaishnavism.' },
];

const PANCHARATRA_TABLE = [
  { point: 'What is it?', answer: 'Shiva asked, Vishnu answered — 5 nights discussion — So called Pancha-Ratra.' },
  { point: 'How many Samhitas?', answer: '108 Samhitas — Main: Ahirbudhnya Samhita, Jayakhya Samhita, Lakshmi Tantra.' },
  { point: 'What it says?', answer: 'Temple construction, Yantra, Mantra, Deity worship, Vaikhanasa vs Pancharatra.' },
  { point: 'Importance', answer: 'Without Pancharatra, no temple worship. All ISKCON, Tirupati, Srirangam follow Pancharatra.' },
];

const VAIKHANASA_POINTS = [
  { no: '1', text: 'Started by Sage Vikhanasa — Brahma\u2019s mind-born son.' },
  { no: '2', text: 'Followed in Tirupati Balaji Temple — Most famous Vaishnava temple follows Vaikhanasa, not Pancharatra.' },
  { no: '3', text: 'Says Vishnu is Archa — Worshipable in stone.' },
];

const ACHARYA_TABLE = [
  { acharya: 'Ramanujacharya', philosophy: 'Vishishtadvaita — Qualified non-dualism', meaning: 'Jiva is part of Vishnu, not separate, not fully same.' },
  { acharya: 'Madhvacharya', philosophy: 'Dvaita — Dualism', meaning: 'Jiva and Vishnu are eternally different.' },
  { acharya: 'Nimbarkacharya', philosophy: 'Dvaitadvaita', meaning: 'Both different and non-different.' },
  { acharya: 'Vallabhacharya', philosophy: 'Shuddhadvaita', meaning: 'Everything is pure Krishna.' },
  { acharya: 'Chaitanya Mahaprabhu', philosophy: 'Achintya Bheda Abheda', meaning: 'Inconceivable difference + non-difference.' },
];

const FIVE_FORMS = [
  { form: '1. Para', detail: 'Supreme form in Vaikuntha — With 4 arms, Shankha Chakra', example: 'Narayana in Vaikuntha', worshipped: 'Vaikuntha — Meditation only' },
  { form: '2. Vyuha', detail: '4 expansions for creation', example: 'Vasudeva, Sankarshana, Pradyumna, Aniruddha', worshipped: 'For creation, maintenance' },
  { form: '3. Vibhava', detail: 'Avatars — Incarnations', example: '10 main: Matsya, Kurma, Varaha, Narasimha, Vamana, Parashurama, Rama, Krishna, Buddha, Kalki + 24 total in Bhagavata', worshipped: 'Temples, Story' },
  { form: '4. Antaryami', detail: 'Lives inside heart of every Jiva', example: 'Paramatma inside you', worshipped: 'Yoga, Meditation — Antaryami Brahman' },
  { form: '5. Archa', detail: 'Lives in stone idol — Temple Deity', example: 'Tirupati Balaji, Srirangam, Puri Jagannath, Pandharpur Vitthal', worshipped: 'Most important for Kali Yuga — Idol worship' },
];

const NAVA_VIDHA = [
  { no: '1', type: 'Shravanam', meaning: 'Hearing stories of Vishnu', example: 'Parikshit Maharaj heard Bhagavata' },
  { no: '2', type: 'Kirtanam', meaning: 'Chanting name', example: 'Sukadeva Goswami' },
  { no: '3', type: 'Smaranam', meaning: 'Remembering always', example: 'Prahlada' },
  { no: '4', type: 'Pada Sevanam', meaning: 'Serving feet', example: 'Lakshmi' },
  { no: '5', type: 'Archanam', meaning: 'Idol worship', example: 'Prithu Maharaj' },
  { no: '6', type: 'Vandanam', meaning: 'Praying', example: 'Akrura' },
  { no: '7', type: 'Dasyam', meaning: 'Servant mood', example: 'Hanuman for Rama' },
  { no: '8', type: 'Sakhyam', meaning: 'Friend mood', example: 'Arjuna for Krishna' },
  { no: '9', type: 'Atma Nivedanam', meaning: 'Full surrender', example: 'Bali Maharaj gave everything' },
];

const SAMPRADAYAS = [
  { no: '1', sampradaya: 'Shri Sampradaya', source: 'Lakshmi Devi', acharya: 'Ramanujacharya', philosophy: 'Vishishtadvaita', mantra: 'Om Namo Narayanaya', centers: 'Srirangam, Tirupati, Melkote — South India' },
  { no: '2', sampradaya: 'Brahma Sampradaya', source: 'Brahma', acharya: 'Madhvacharya + Chaitanya + ISKCON', philosophy: 'Dvaita + Achintya Bheda Abheda', mantra: 'Om Namo Bhagavate Vasudevaya + Hare Krishna Maha Mantra', centers: 'Udupi, ISKCON Worldwide' },
  { no: '3', sampradaya: 'Rudra Sampradaya', source: 'Shiva', acharya: 'Vallabhacharya + Vishnuswami', philosophy: 'Shuddhadvaita', mantra: 'Shri Krishna Sharanam Mama', centers: 'Nathdwara, Mathura' },
  { no: '4', sampradaya: 'Kumara / Sanaka Sampradaya', source: '4 Kumaras', acharya: 'Nimbarkacharya', philosophy: 'Dvaitadvaita', mantra: 'Om Namo Narayanaya + Radha Krishna', centers: 'Vrindavan' },
];

const MARGA = [
  { marga: 'Bhakti Marga', forWhom: 'For all — Easiest', method: 'Chanting, Temple, Ekadashi Vrata — 24 Ekadashi per year is heart of Vaishnavism' },
  { marga: 'Prapatti Marga / Sharanagati', forWhom: 'For those who cannot do Sadhana', method: 'Total surrender — Ramanuja\u2019s special — Mam Ekam Sharanam Vraja — Just surrender' },
  { marga: 'Acharya Abhimana Marga', forWhom: 'For disciples', method: 'Surrender to Guru — Guru will take you to Vishnu' },
];

const RITUALS_TABLE = [
  { no: '1', ritual: 'Abhigamana', detail: 'Going to temple morning' },
  { no: '2', ritual: 'Upadana', detail: 'Collecting flowers' },
  { no: '3', ritual: 'Ijya', detail: 'Puja' },
  { no: '4', ritual: 'Svadhyaya', detail: 'Reading Bhagavata/Gita' },
  { no: '5', ritual: 'Yoga', detail: 'Meditation on Vishnu' },
];

const IMPORTANCE_ROWS = [
  { num: '1', importance: 'Easiest for Kali Yuga', shastra: 'Bhagavata Purana 12.3.52', detail: 'Kalau Kirtayat Kesavam — In Kali Yuga, just chanting Kesava\u2019s name gives Moksha. No need big Yagna.' },
  { num: '2', importance: 'Gives both Bhukti + Mukti', shastra: 'Vishnu Purana', detail: 'Other paths give only Mukti. Vaishnavism gives worldly happiness + Moksha both.' },
  { num: '3', importance: 'No need Sanyasa', shastra: 'Bhagavad Gita 9.26', detail: 'Patram Pushpam Phalam Toyam — Offer leaf, flower, water — Grihastha can do.' },
  { num: '4', importance: 'Removes all sins', shastra: 'Garuda Purana', detail: 'Even big sinner like Ajamila got Vaikuntha by chanting Narayana at death.' },
  { num: '5', importance: 'Protects Dharma', shastra: 'Bhagavad Gita 4.7-8', detail: 'Yada Yada Hi Dharmasya... — Vishnu comes whenever Dharma falls.' },
  { num: '6', importance: 'Vaikuntha — No rebirth', shastra: 'Maha Narayana Upanishad', detail: 'Vaikuntha is beyond 14 Lokas. No return. Other Lokas — Brahma Loka etc — You return. Vaikuntha — Permanent.' },
  { num: '7', importance: '24 Ekadashi Vrata', shastra: 'Padma Purana', detail: 'Most powerful Vrata. One Ekadashi = 1000 Ashwamedha Yagna. Cleans sins of 7 births.' },
];

const PILLARS = [
  { label: 'Tattva', text: 'Vishnu is Parabrahman.' },
  { label: 'Hita', text: 'Bhakti + Prapatti is means.' },
  { label: 'Purushartha', text: 'Vaikuntha Seva is goal, not merging.' },
];

function Ornament() {
  return (
    <div className="vn-orn" aria-hidden="true">
      <span className="vn-orn__line" />
      <span className="vn-orn__diamond">✦</span>
      <span className="vn-orn__line" />
    </div>
  );
}

function FramedFigure({ src, alt, caption, className = '' }) {
  return (
    <figure className={`vn-figure${className ? ` ${className}` : ''}`}>
      <div className="vn-figure__frame">
        <span className="vn-figure__corner vn-figure__corner--tl" aria-hidden="true">✦</span>
        <span className="vn-figure__corner vn-figure__corner--br" aria-hidden="true">✦</span>
        <img src={src} alt={alt} className="vn-figure__img" loading="lazy" draggable="false" />
      </div>
      {caption && <figcaption className="vn-figure__caption font-serif">{caption}</figcaption>}
    </figure>
  );
}

export default function VaishnavamPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Vaishnavam | Complete Shastra Explanation';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      'content',
      'Explore Vaishnavam — the path of Bhakti where Vishnu / Narayana / Krishna / Rama is Parabrahman. Complete shastra, 6 Pramanas, 5 Forms, Nava Vidha Bhakti, 4 Sampradayas, Pancharatra Tantra and sadhana.'
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
    <div className="vn-page">
      <Navbar />

      {/* ══════════════ HERO ══════════════ */}
      <section className="vn-hero">
        <div className="vn-hero__bg" aria-hidden="true" />
        <div className="vn-hero__inner">
          <div className="vn-hero__content">
            <motion.span
              className="vn-hero__eyebrow"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              VAISHNAVAM · VISHNU · NARAYANA · KRISHNA · RAMA · PANCHARATRA AGAMA
            </motion.span>

            <motion.h1
              className="vn-hero__title font-cinzel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Vaishnavism
            </motion.h1>

            <motion.p
              className="vn-hero__kicker font-cinzel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Complete Shastra Explanation
            </motion.p>

            <motion.p
              className="vn-hero__subtitle font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              Vaishnavam = One of 6 Main Paths to Moksha — Where Vishnu is Parabrahman
            </motion.p>

            <motion.div
              className="vn-hero__divider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <span className="vn-hero__divider-line" />
              <img src={logoImg} alt="" className="vn-hero__divider-om" />
              <span className="vn-hero__divider-line" />
            </motion.div>

            <motion.p
              className="vn-hero__intro font-serif"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              Vaishnavam is the path where <strong>Lord Vishnu — Narayana — Krishna — Rama</strong> is honoured as <strong>Parabrahman</strong>, the Supreme God from whom Brahma and Shiva are born. Its goal is not merging but <strong>serving Vishnu forever in Vaikuntha</strong>, the supreme abode beyond all worlds.
            </motion.p>

            <motion.span
              className="vn-hero__badge font-serif"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72 }}
            >
              🪷 Vaishnavam · Vishnu · Narayana · Krishna · Rama · Pancharatra
            </motion.span>

            <motion.div
              className="vn-hero__btn"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.78 }}
            >
              <GoldenButton
                label="Explore Vaishnavam"
                size="lg"
                onClick={() => scrollToId('what-is')}
              />
            </motion.div>
          </div>

          <motion.div
            className="vn-hero__art"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="vn-hero__halo" aria-hidden="true" />
            <figure className="vn-hero__frame">
              <img
                src={HERO_IMG}
                alt="Lord Vishnu — Parabrahman of the Vaishnavam tradition"
                className="vn-hero__img"
                loading="eager"
                draggable="false"
              />
            </figure>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ BACK LINK ══════════════ */}
      <div className="vn-top-back">
        <button type="button" className="vn-top-back__btn" onClick={() => navigate('/courses')}>
          ← Back to Courses
        </button>
      </div>

      {/* ══════════════ CONTENTS NAV ══════════════ */}
      <nav className="vn-nav" aria-label="Course contents">
        <div className="vn-nav__inner">
          {NAV_SECTIONS.map((s) => (
            <button key={s.id} type="button" className="vn-nav__item" onClick={() => scrollToId(s.id)}>
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ══════════════ 1 — WHAT IS VAISHNAVISM? ══════════════ */}
      <section id="what-is" className="vn-section vn-section--warm">
        <div className="vn-container">
          <ScrollReveal className="vn-section__head">
            <span className="vn-eyebrow">SECTION 1 · THE PATH OF BHAKTI</span>
            <h2 className="vn-section__title font-cinzel">What Is Vaishnavism?</h2>
            <p className="vn-section__subtitle font-serif">The path where Vishnu — Narayana — is honoured as Parabrahman</p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="vn-table-wrap">
              <table className="vn-table">
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

          <ScrollReveal style={{ marginTop: '8px' }}>
            <div className="vn-scripture-card">
              <span className="vn-scripture-card__mark" aria-hidden="true">&ldquo;</span>
              <p className="vn-scripture-card__sanskrit font-serif">Om Tad Vishnoh Paramam Padam Sada Pashyanti Surayah</p>
              <p className="vn-scripture-card__meaning font-serif">Wise men always see the supreme abode of Vishnu</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="vn-callout" style={{ marginTop: '24px' }}>
              <span className="vn-callout__label font-cinzel">Highlight</span>
              <p className="vn-callout__text font-serif">
                <strong>This is the seed of Vaishnavism — Vaikuntha is ultimate.</strong>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 2 — IMPORTANCE IN SCRIPTURES — 6 PRAMANAS ══════════════ */}
      <section id="pramanas" className="vn-section vn-section--maroon">
        <div className="vn-container">
          <ScrollReveal className="vn-section__head">
            <span className="vn-eyebrow">SECTION 2 · SCRIPTURAL FOUNDATIONS</span>
            <h2 className="vn-section__title font-cinzel">Importance of Vaishnavism in Scriptures</h2>
            <p className="vn-section__subtitle font-serif">Six Pramanas — foundations of the Vaishnava path</p>
            <Ornament />
          </ScrollReveal>

          {/* ── 1. Veda Pramana ── */}
          <ScrollReveal>
            <h3 className="vn-block__title font-cinzel">1. Veda Pramana</h3>
            <div className="vn-table-wrap">
              <table className="vn-table">
                <thead>
                  <tr><th>Veda</th><th>What it says</th></tr>
                </thead>
                <tbody>
                  {VEDA_TABLE.map((r) => (
                    <tr key={r.veda}><td><strong>{r.veda}</strong></td><td>{r.says}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* ── 2. Purana Pramana ── */}
          <ScrollReveal>
            <h3 className="vn-block__title font-cinzel">2. Purana Pramana — 6 Puranas are Vaishnava Puranas</h3>
            <p className="vn-lead font-serif">
              Padma Purana classifies Puranas — Sattvic Puranas = Vaishnava Puranas.
            </p>
            <div className="vn-table-wrap">
              <table className="vn-table">
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
              <div className="vn-mantra-box">
                <span className="vn-mantra-box__label font-cinzel">Bhagavata Purana</span>
                <p className="vn-mantra-box__sanskrit font-serif">Ete Chamsha Kalah Pumsah Krishnas Tu Bhagavan Swayam</p>
                <p className="vn-mantra-box__meaning font-serif">All these are portions and expansions of the Lord; Krishna is Bhagavan himself.</p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── 3. Itihasa Pramana ── */}
          <ScrollReveal>
            <h3 className="vn-block__title font-cinzel">3. Itihasa Pramana</h3>
            <div className="vn-grid vn-grid--3">
              {ITIHASA_REFS.map((t) => (
                <ScrollReveal key={t.title}>
                  <div className="vn-card">
                    <span className="vn-card__label font-cinzel">{t.title}</span>
                    <p className="vn-card__text font-serif">{t.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* ── 4. Pancharatra Agama ── */}
          <ScrollReveal>
            <h3 className="vn-block__title font-cinzel">4. Pancharatra Agama — Tantra Shastra of Vaishnavism</h3>
            <p className="vn-lead font-serif">
              This is Tantra Shastra of Vaishnavas — Like Shaivas have Agama, Vaishnavas have Pancharatra.
            </p>
            <div className="vn-table-wrap">
              <table className="vn-table">
                <thead>
                  <tr><th>Point</th><th>Details</th></tr>
                </thead>
                <tbody>
                  {PANCHARATRA_TABLE.map((r) => (
                    <tr key={r.point}><td><strong>{r.point}</strong></td><td>{r.answer}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* ── 5. Vaikhanasa Agama ── */}
          <ScrollReveal>
            <h3 className="vn-block__title font-cinzel">5. Vaikhanasa Agama</h3>
            <div className="vn-grid vn-grid--3">
              {VAIKHANASA_POINTS.map((p) => (
                <ScrollReveal key={p.no}>
                  <div className="vn-card">
                    <span className="vn-card__label font-cinzel">{p.no}.</span>
                    <p className="vn-card__text font-serif">{p.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* ── 6. Brahma Sutra + Vedanta ── */}
          <ScrollReveal>
            <h3 className="vn-block__title font-cinzel">6. Brahma Sutra + Vedanta</h3>
            <div className="vn-table-wrap">
              <table className="vn-table">
                <thead>
                  <tr><th>Acharya</th><th>Philosophy</th><th>Meaning</th></tr>
                </thead>
                <tbody>
                  {ACHARYA_TABLE.map((r) => (
                    <tr key={r.acharya}>
                      <td><strong>{r.acharya}</strong></td>
                      <td>{r.philosophy}</td>
                      <td>{r.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="vn-callout" style={{ marginTop: '24px' }}>
                <span className="vn-callout__label font-cinzel">Conclusion of the 5 Acharyas</span>
                <p className="vn-callout__text font-serif">
                  <strong>All 5 say Vishnu is Supreme.</strong>
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '50px' }}>
            <FramedFigure
              src={IMG_PRAMANAS}
              alt="Lordship of Vishnu after the scriptural foundations of Vaishnavism"
              caption="After the six pramanas — the Lord of the Vedas, Puranas, Itihasa, Agamas and Vedanta"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 3 — TYPES OF UPASANA ══════════════ */}
      <section id="upasana" className="vn-section vn-section--warm">
        <div className="vn-container">
          <ScrollReveal className="vn-section__head">
            <span className="vn-eyebrow">SECTION 3 · TYPES OF UPASANA</span>
            <h2 className="vn-section__title font-cinzel">Types of Upasana in Vaishnavism</h2>
            <p className="vn-section__subtitle font-serif">3 Classifications</p>
            <Ornament />
          </ScrollReveal>

          {/* ── CLASSIFICATION 1 — 5 Forms ── */}
          <ScrollReveal>
            <h3 className="vn-block__title font-cinzel">Classification 1 — 5 Forms of Vishnu — Pancharatra</h3>
            <div className="vn-table-wrap">
              <table className="vn-table">
                <thead>
                  <tr><th>Form</th><th>What is it?</th><th>Example</th><th>Where Worshipped</th></tr>
                </thead>
                <tbody>
                  {FIVE_FORMS.map((f) => (
                    <tr key={f.form}>
                      <td><strong>{f.form}</strong></td>
                      <td>{f.detail}</td>
                      <td>{f.example}</td>
                      <td>{f.worshipped}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="vn-callout">
                <span className="vn-callout__label font-cinzel">Pancharatra Says</span>
                <p className="vn-callout__text font-serif">
                  <strong>In Kali Yuga, Archa is easiest. God comes as stone to bless you.</strong>
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── CLASSIFICATION 2 — Nava Vidha Bhakti ── */}
          <ScrollReveal>
            <h3 className="vn-block__title font-cinzel">Classification 2 — Nava Vidha Bhakti — 9 Types of Bhakti</h3>
            <p className="vn-lead font-serif">
              Bhagavata Purana 7.5.23 — Prahlada says to Hiranyakashipu.
            </p>
            <div className="vn-table-wrap">
              <table className="vn-table">
                <thead>
                  <tr><th>No</th><th>Type</th><th>Meaning</th><th>Example</th></tr>
                </thead>
                <tbody>
                  {NAVA_VIDHA.map((b) => (
                    <tr key={b.no}>
                      <td><strong>{b.no}</strong></td>
                      <td><strong>{b.type}</strong></td>
                      <td>{b.meaning}</td>
                      <td>{b.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="vn-callout">
                <span className="vn-callout__label font-cinzel">Vaishnavism Says</span>
                <p className="vn-callout__text font-serif">
                  <strong>Any ONE of the 9 is enough for Moksha.</strong>
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── CLASSIFICATION 3 — 4 Sampradayas ── */}
          <ScrollReveal>
            <h3 className="vn-block__title font-cinzel">Classification 3 — 4 Sampradayas — 4 Lineages</h3>
            <p className="vn-lead font-serif">
              Padma Purana says — 4 authentic Vaishnava Sampradayas — All from Vishnu himself.
            </p>
            <div className="vn-table-wrap">
              <table className="vn-table">
                <thead>
                  <tr><th>No</th><th>Sampradaya</th><th>Source</th><th>Acharya</th><th>Philosophy</th><th>Mantra</th><th>Main Centers</th></tr>
                </thead>
                <tbody>
                  {SAMPRADAYAS.map((s) => (
                    <tr key={s.no}>
                      <td><strong>{s.no}</strong></td>
                      <td><strong>{s.sampradaya}</strong></td>
                      <td>{s.source}</td>
                      <td>{s.acharya}</td>
                      <td>{s.philosophy}</td>
                      <td><em className="vn-mantra">{s.mantra}</em></td>
                      <td>{s.centers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="vn-callout">
                <span className="vn-callout__label font-cinzel">All Four Traditions</span>
                <p className="vn-callout__text font-serif">
                  <strong>All 4 say Vishnu is Supreme, but the way is slightly different.</strong>
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── CLASSIFICATION 4 — 3 Marga ── */}
          <ScrollReveal>
            <h3 className="vn-block__title font-cinzel">Classification 4 — 3 Marga — 3 Paths in Vaishnavism</h3>
            <div className="vn-table-wrap">
              <table className="vn-table">
                <thead>
                  <tr><th>Marga</th><th>For Whom</th><th>Method</th></tr>
                </thead>
                <tbody>
                  {MARGA.map((m) => (
                    <tr key={m.marga}>
                      <td><strong>{m.marga}</strong></td>
                      <td>{m.forWhom}</td>
                      <td>{m.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 4 — TANTRA SHASTRA — PANCHARATRA IN DETAIL ══════════════ */}
      <section id="tantra" className="vn-section vn-section--maroon">
        <div className="vn-container">
          <ScrollReveal className="vn-section__head">
            <span className="vn-eyebrow">SECTION 4 · PANCHARATRA TANTRA</span>
            <h2 className="vn-section__title font-cinzel">Tantra Shastra — Pancharatra in Detail</h2>
            <p className="vn-section__subtitle font-serif">What does Pancharatra Tantra say?</p>
            <Ornament />
          </ScrollReveal>

          {/* ── 1. Mantra ── */}
          <ScrollReveal>
            <h3 className="vn-block__title font-cinzel">1. Mantra</h3>
            <div className="vn-mantra-box">
              <span className="vn-mantra-box__label font-cinzel">Om Namo Narayanaya</span>
              <p className="vn-mantra-box__sanskrit font-serif">Om Namo Narayanaya</p>
              <p className="vn-mantra-box__meaning font-serif">
                Om = Parabrahman. Namo = Jiva surrender. Narayanaya = Supreme goal.
              </p>
            </div>
          </ScrollReveal>

          {/* ── 2. Yantra ── */}
          <ScrollReveal>
            <h3 className="vn-block__title font-cinzel">2. Yantra</h3>
            <div className="vn-grid vn-grid--2">
              <ScrollReveal>
                <div className="vn-card">
                  <span className="vn-card__label font-cinzel">Sudarshana Yantra + Narayana Yantra</span>
                  <p className="vn-card__text font-serif">6 pointed star with Shankha Chakra.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <div className="vn-card">
                  <span className="vn-card__label font-cinzel">Ahirbudhnya Samhita</span>
                  <p className="vn-card__text font-serif">The Ahirbudhnya Samhita teaches the science of yantra and mantra together.</p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* ── 3. Five Rituals ── */}
          <ScrollReveal>
            <h3 className="vn-block__title font-cinzel">3. Five Rituals Daily for a Vaishnava</h3>
            <div className="vn-table-wrap">
              <table className="vn-table">
                <thead>
                  <tr><th>#</th><th>Ritual</th><th>Meaning</th></tr>
                </thead>
                <tbody>
                  {RITUALS_TABLE.map((r) => (
                    <tr key={r.no}>
                      <td><strong>{r.no}</strong></td>
                      <td><strong>{r.ritual}</strong></td>
                      <td>{r.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* ── 4. Deity Installation ── */}
          <ScrollReveal>
            <h3 className="vn-block__title font-cinzel">4. Four Types of Deity Installation</h3>
            <div className="vn-grid vn-grid--2">
              <ScrollReveal>
                <div className="vn-card">
                  <span className="vn-card__label font-cinzel">Sthavara</span>
                  <p className="vn-card__text font-serif">Fixed temple.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <div className="vn-card">
                  <span className="vn-card__label font-cinzel">Jangama</span>
                  <p className="vn-card__text font-serif">Moving procession.</p>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <p className="vn-lead font-serif" style={{ marginTop: '16px' }}>etc.</p>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── Lakshmi Tantra ── */}
          <ScrollReveal>
            <div className="vn-mantra-box" style={{ marginTop: '32px' }}>
              <span className="vn-mantra-box__label font-cinzel">Lakshmi Tantra</span>
              <p className="vn-mantra-box__meaning font-serif" style={{ fontSize: '16.5px' }}>
                Lakshmi is not just wife, she is <strong>Shakti of Vishnu</strong>. Without Lakshmi, Vishnu not complete. So Vaishnavism worships <strong>Lakshmi Narayana together</strong>.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '40px' }}>
            <FramedFigure
              src={IMG_TANTRA}
              alt="The Pancharatra Tantra — the tantra shastra of temple worship, mantras and yantras"
              caption="Lakshmi Narayana — the Pancharatra Tantra of Vaishnavism"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 5 — IMPORTANCE OF VAISHNAVISM ══════════════ */}
      <section id="importance" className="vn-section vn-section--warm">
        <div className="vn-container">
          <ScrollReveal className="vn-section__head">
            <span className="vn-eyebrow">SECTION 5 · WHY VAISHNAVISM IS NEEDED</span>
            <h2 className="vn-section__title font-cinzel">Importance of Vaishnavism</h2>
            <p className="vn-section__subtitle font-serif">What the path of Bhakti offers the seeker</p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="vn-table-wrap">
              <table className="vn-table">
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
              src={IMG_ESSENCE}
              alt="Lord Vishnu in glory before the final essence of Vaishnavism"
              caption="Before the essence — the Lord who leads every soul to Vaikuntha"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 6 — ESSENCE OF VAISHNAVISM ══════════════ */}
      <section id="essence" className="vn-section vn-section--maroon">
        <div className="vn-container">
          <ScrollReveal className="vn-section__head">
            <span className="vn-eyebrow">SECTION 6 · THE CLOSING VISION</span>
            <h2 className="vn-section__title font-cinzel">Essence of Vaishnavism</h2>
            <p className="vn-section__subtitle font-serif">Bhagavad Gita 18.66 — Charama Shloka</p>
            <Ornament />
          </ScrollReveal>

          {/* ── Charama Shloka ── */}
          <ScrollReveal>
            <div className="vn-mantra-box">
              <span className="vn-mantra-box__label font-cinzel">Bhagavad Gita 18.66 — Charama Shloka</span>
              <p className="vn-mantra-box__sanskrit font-serif">Sarva Dharman Parityajya Mam Ekam Sharanam Vraja<br />Aham Tva Sarva Papebhyo Mokshayishyami Ma Shuchah</p>
              <p className="vn-mantra-box__meaning font-serif">Leave all Dharmas, surrender to me alone, I will free you from all sins, don\u2019t fear.</p>
            </div>
          </ScrollReveal>

          {/* ── Three Pillars ── */}
          <ScrollReveal>
            <h3 className="vn-block__title font-cinzel">3 Pillars</h3>
            <div className="vn-grid vn-grid--3">
              {PILLARS.map((p) => (
                <ScrollReveal key={p.label}>
                  <motion.div className="vn-card vn-card--deep" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                    <span className="vn-card__label font-cinzel">{p.label}</span>
                    <p className="vn-card__text font-serif">{p.text}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* ── Final ── */}
          <ScrollReveal className="vn-closing">
            <span className="vn-closing__mark" aria-hidden="true">✦</span>
            <p className="vn-closing__source font-cinzel" style={{ marginBottom: '16px' }}>Vishnu Purana 1.1</p>
            <p className="vn-closing__meaning font-serif">
              Vishnu is inside you, outside you, he is you, he is not you — He pervades all. Worshipping him is easiest way in Kali Yuga.
            </p>
            <div className="vn-closing__divider">
              <span className="vn-closing__divider-line" />
              <span className="vn-closing__divider-star">✦</span>
              <span className="vn-closing__divider-line" />
            </div>
            <p className="vn-closing__sanskrit font-serif" style={{ fontSize: 'clamp(26px, 3.4vw, 40px)', marginTop: '8px' }}>
              ॐ नमो नारायणाय
            </p>
            <p className="vn-closing__source font-cinzel" style={{ marginTop: '8px' }}>Om Namo Narayanaya</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="vn-cta">
        <div className="vn-cta__geo" aria-hidden="true" />
        <ScrollReveal direction="up" duration={0.85}>
          <div className="vn-cta__box">
            <span className="vn-cta__corner vn-cta__corner--tl" aria-hidden="true">✦</span>
            <span className="vn-cta__corner vn-cta__corner--tr" aria-hidden="true">✦</span>
            <span className="vn-cta__corner vn-cta__corner--bl" aria-hidden="true">✦</span>
            <span className="vn-cta__corner vn-cta__corner--br" aria-hidden="true">✦</span>

            <span className="vn-cta__badge">🪷 Walk the Path of Bhakti</span>
            <h2 className="vn-cta__heading font-cinzel">
              Begin Your Journey Into<br />
              <span className="vn-cta__heading-gold">Vaishnavam</span>
            </h2>
            <div className="vn-cta__divider">
              <span className="vn-cta__divider-line" />
              <span className="vn-cta__divider-lotus">✿</span>
              <span className="vn-cta__divider-line" />
            </div>
            <p className="vn-cta__body font-serif">
              Explore the 6 Pramanas, the 5 Forms, Nava Vidha Bhakti, the 4 Sampradayas and the
              Pancharatra Agama — beginning with a single Om Namo Narayanaya.
            </p>
            <div className="vn-cta__btns">
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