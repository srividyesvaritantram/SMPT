import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { FooterSection } from '../Home/HomeSections.jsx';
import heroImg from '../../assets/skandam1.jpeg';
import skandam2Img from '../../assets/skandam2.jpeg';
import skandam3Img from '../../assets/skandam3.jpeg';
import skandam5Img from '../../assets/skandam5.jpeg';
import skandam6Img from '../../assets/skandam6.jpeg';
import logoImg from '../../assets/logo.png';
import './SkandamPage.css';

const NAV_SECTIONS = [
  { id: 'what-is', label: 'What is Kaumaram?' },
  { id: 'scriptural', label: 'Scriptural Foundations' },
  { id: 'types', label: 'Types of Upasana' },
  { id: 'vel-tattva', label: 'Vel Tattva & Tantra' },
  { id: 'importance', label: 'Why Kaumaram Matters' },
  { id: 'divine-forms', label: 'Divine Forms' },
  { id: 'essence', label: 'The Essence' },
];

const VEDA_TABLE = [
  { veda: 'Rig Veda 10.135', says: 'Kumara Agni — Kumara is fire — Young fire' },
  { veda: 'Yajur Veda — Taittiriya Aranyaka', says: 'Shanmukha is Supreme — Skanda is Brahma, Vishnu, Shiva together' },
  { veda: 'Chandogya Upanishad 7.26', says: 'Skanda is Sanat Kumara — One who teaches Narada — Skanda is Guru of Gurus' },
  { veda: 'Kena Upanishad', says: 'Young boy Kumara appears as Yaksha — Even Indra cannot know him' },
];

const PURANA_REFS = [
  { name: 'Skanda Purana', detail: 'The largest of the eighteen Mahapuranas, traditionally comprising 88,000 verses. The primary scripture of Kaumaram, covering the birth, battles and worship of Skanda.' },
  { name: 'Shiva Purana — Rudra Samhita', detail: 'Contains the account of Skanda\'s birth from Shiva\'s seed, the role of Agni and the Krittikas, and the merging of six children into Shanmukha.' },
  { name: 'Matsya Purana', detail: 'References to Kumara as a deity of warfare and protection, associated with the Krittika stars and the divine fire.' },
  { name: 'Mahabharata — Vana Parva Chapters 223–233', detail: 'The detailed account of Tarakasura\'s boon, the birth of Skanda, his role as commander of the divine armies, and the destruction of the asuras.' },
];

const TAMIL_TEXTS = [
  { name: 'Tirumurugatruppadai', author: 'Nakkirar', detail: 'One of the earliest Tamil literary works on Murugan, part of the Pathuppattu (Ten Idylls). Describes the six abodes and the worship of Murugan.' },
  { name: 'Kanda Shasti Kavasam', author: 'Devaraya Swamigal', detail: 'A powerful protective hymn invoking Skanda\'s Vel for protection from evil, disease and negative forces. Widely recited across Tamil Nadu.' },
  { name: 'Thiruppugazh', author: 'Saint Arunagirinathar', detail: 'Over 1,300 devotional songs praising Murugan, forming the devotional backbone of Kaumaram in the Tamil tradition. The Saranam song is universally chanted.' },
  { name: 'Skanda Shasti Kavacham', author: 'Traditional', detail: 'A hymn of armour/protection dedicated to Lord Skanda, traditionally recited for courage, removal of obstacles, and divine protection.' },
];

const ARUPADAI_VEEDU = [
  { name: 'Tiruparankundram', form: 'Standing / Vel', upasana: 'Entry-level worship / Invocation', tattva: 'Earth (Prithvi)' },
  { name: 'Tiruchendur', form: 'Victory form', upasana: 'Protection / Warfare / Removal of enemies', tattva: 'Water (Jala)' },
  { name: 'Palani', form: 'Dhandayuthapani (Staff-bearer)', upasana: 'Healing / Medicine / Renunciation', tattva: 'Fire (Agni)' },
  { name: 'Swamimalai', form: 'Teaching Om to Ganesha', upasana: 'Knowledge / Guru transmission', tattva: 'Air (Vayu)' },
  { name: 'Thiruttani', form: 'Peaceful / Pacified', upasana: 'Pacification / Removal of doshas', tattva: 'Space (Akasha)' },
  { name: 'Pazhamudircholai', form: 'With two consorts (Valli & Devasena)', upasana: 'Devotion / Fulfilment / Complete grace', tattva: 'Consciousness (Chit)' },
];

const THREE_WEAPONS = [
  { weapon: 'Vel / Shakti Vel', shakti: 'Jnana Shakti — Wisdom', modern: 'Piercing through confusion, discernment, intellectual clarity', mantra: 'Om Sharavanabhavaya Namah', use: 'Meditation on truth, removing spiritual ignorance' },
  { weapon: 'Mayil / Peacock', shakti: 'Kriya Shakti — Action', modern: 'Riding over illusion (Maya), transforming pride into service', mantra: 'Om Subrahmanyaaya Namah', use: 'Active service, transforming ego into devotion' },
  { weapon: 'Seval / Cock', shakti: 'Iccha Shakti — Will Power', modern: 'Waking up early, courage to face challenges, fearlessness', mantra: 'Om Bala Kumaraaya Namah', use: 'Courage, awakening, overcoming laziness and fear' },
];

const FOUR_STEPS = [
  { num: '1', title: 'Kavasam / Kavacham', desc: 'Reciting the Kanda Shasti Kavasam regularly. This is the protective armour of Skanda — the first shield the devotee builds around the body, mind and family.' },
  { num: '2', title: 'Mantra Japa', desc: 'Repetition of Om Saravanabhavaya Namah — 108 times daily or more. Regular japa cleanses the mind, builds spiritual energy and invokes Skanda\'s presence.' },
  { num: '3', title: 'Vel Meditation', desc: 'Meditating on the Vel in the Ajna chakra (third eye). Visualise the golden Vel piercing through all darkness and ignorance. According to the Kumara Tantra, all ignorance dissolves.' },
  { num: '4', title: 'Guha Dhyana', desc: 'Deep meditation on Skanda as Guha — the one who dwells in the cave of the heart. The devotee retreats inward and rests in the presence of Murugan within.' },
];

const CHAKRAS = [
  { name: 'Muladhara', element: 'Earth', quality: 'Stability' },
  { name: 'Swadhisthana', element: 'Water', quality: 'Creativity' },
  { name: 'Manipura', element: 'Fire', quality: 'Power' },
  { name: 'Anahata', element: 'Air', quality: 'Love' },
  { name: 'Vishuddha', element: 'Space', quality: 'Speech' },
  { name: 'Ajna', element: 'Consciousness', quality: 'Wisdom' },
];

const IMPORTANCE_ROWS = [
  { num: 'I', point: 'Commander of the Devas — Victory', detail: 'Skanda is Senapati (commander) of the divine armies. He grants victory in battle, in legal matters, and in all forms of competition.', shastra: 'Skanda Purana, Mahabharata Shalya Parva' },
  { num: 'II', point: 'Guru of Shiva — Knowledge', detail: 'According to tradition, Skanda teaches Shiva the meaning of Pranava (Om) at Swamimalai. He is the Guru even of the Supreme.', shastra: 'Skanda Purana, Swamimalai tradition' },
  { num: 'III', point: 'Controls Sarpa Dosha / Naga Dosha', detail: 'Skanda is the traditional remedy for Sarpa Dosha (serpent affliction) and Naga Dosha in astrology. The Vel is offered to neutralise these effects.', shastra: 'Tamil astrological tradition, Skanda Purana' },
  { num: 'IV', point: 'Cures Disease — Vaidya', detail: 'Skanda is the divine physician (Vaidya). He is invoked for healing physical and mental ailments, particularly chronic diseases.', shastra: 'Skanda Purana, Palani tradition' },
  { num: 'V', point: 'Youngest — So Fastest to Please', detail: 'Among the six paths, Kaumaram is considered the quickest to yield results because Skanda — the youngest deity — responds rapidly to sincere devotion.', shastra: 'Tamil Shastra, Kaumaram tradition' },
  { num: 'VI', point: 'Tamil + Sanskrit Unity', detail: 'Kaumaram uniquely bridges Tamil and Sanskrit spiritual traditions. Skanda is both the Tamil God (Murugan) and a Vedic deity (Kumara/Kartikeya).', shastra: 'Tamil Sangam + Vedic texts' },
];

const DIVINE_RELATIONS = [
  { god: 'Shiva', relation: 'Father', meaning: 'Shiva gives power to destroy. The seed of Skanda originates from Shiva\'s third eye — the transmission of supreme knowledge from father to son.' },
  { god: 'Parvati / Shakti', relation: 'Mother', meaning: 'Shakti gives form to Skanda. Parvati embraced the six children and merged them into one — the maternal power that gives Skanda his unified form.' },
  { god: 'Vishnu', relation: 'Maternal Uncle?', meaning: 'Vishnu is traditionally associated with the marriage of Skanda to Devasena. Some say Vishnu plays a protective role in Skanda\'s early life, though the exact relationship varies across traditions.' },
  { god: 'Ganesha', relation: 'Elder Brother', meaning: 'Wisdom + action together. Ganesha and Skanda represent complementary paths — Ganesha the remover of obstacles through wisdom, Skanda the destroyer through valour.' },
  { god: 'Brahma', relation: 'Prisoner', meaning: 'Brahma is described as the Pranava Guru. In some accounts, Brahma was imprisoned by Shiva for arrogance, and Skanda was involved in his release. Brahma also traditionally offers the sacred Vel.' },
];

function Ornament() {
  return (
    <div className="sk-orn" aria-hidden="true">
      <span className="sk-orn__line" />
      <span className="sk-orn__diamond">✦</span>
      <span className="sk-orn__line" />
    </div>
  );
}

function FramedFigure({ src, alt, caption, className = '' }) {
  return (
    <figure className={`sk-figure${className ? ` ${className}` : ''}`}>
      <div className="sk-figure__frame">
        <span className="sk-figure__corner sk-figure__corner--tl" aria-hidden="true">✦</span>
        <span className="sk-figure__corner sk-figure__corner--br" aria-hidden="true">✦</span>
        <img src={src} alt={alt} className="sk-figure__img" loading="lazy" draggable="false" />
      </div>
      {caption && <figcaption className="sk-figure__caption font-serif">{caption}</figcaption>}
    </figure>
  );
}

export default function SkandamPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Skandam / Kaumaram | Complete Shastra, Philosophy & Sadhana';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      'content',
      'Explore Skandam / Kaumaram — the 6th path of Sanatana Dharma where Skanda / Kartikeya / Murugan is Parabrahman. Complete shastra, Vel Tattva, Arupadai Veedu and sadhana.'
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
    <div className="sk-page">
      <Navbar />

      {/* ══════════════ HERO ══════════════ */}
      <section className="sk-hero">
        <div className="sk-hero__bg" aria-hidden="true" />
        <div className="sk-hero__inner">
          <div className="sk-hero__content">
            <motion.span
              className="sk-hero__eyebrow"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              KAUMARAM · SKANDAM · KARTIKEYA SAMPRADAYA
            </motion.span>

            <motion.h1
              className="sk-hero__title font-cinzel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              SKANDAM
            </motion.h1>

            <motion.p
              className="sk-hero__subtitle font-cinzel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              6th Main Path of Sanatana Dharma — Where Skanda / Kartikeya / Murugan is Parabrahman
            </motion.p>

            <motion.div
              className="sk-hero__divider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <span className="sk-hero__divider-line" />
              <img src={logoImg} alt="" className="sk-hero__divider-om" />
              <span className="sk-hero__divider-line" />
            </motion.div>

            <motion.p
              className="sk-hero__intro font-serif"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              In Shastra, the real name is <strong>Kaumaram</strong> — also known as <strong>Skandam</strong> or <strong>Kartikeya Sampradaya</strong>. Skanda = Son of Shiva. Kumara = Always young, never ages. This is the 6th of the 6 main paths of Sanatana Dharma: Ganapatyam, Vaishnavam, Shaivam, Shaktam, Sauram, Kaumaram. Where Skanda is honoured as Parabrahman — the Supreme Reality.
            </motion.p>

            <motion.div
              className="sk-hero__btn"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.78 }}
            >
              <GoldenButton
                label="Explore Skandam"
                size="lg"
                onClick={() => scrollToId('what-is')}
              />
            </motion.div>
          </div>

          <motion.div
            className="sk-hero__art"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="sk-hero__halo" aria-hidden="true" />
            <figure className="sk-hero__frame">
              <img
                src={heroImg}
                alt="Lord Skanda — Shanmukha, the six-faced divine youth, Parabrahman of the Kaumaram tradition"
                className="sk-hero__img"
                loading="eager"
                draggable="false"
              />
            </figure>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ BACK LINK ══════════════ */}
      <div className="sk-top-back">
        <button type="button" className="sk-top-back__btn" onClick={() => navigate('/courses')}>
          ← Back to Courses
        </button>
      </div>

      {/* ══════════════ CONTENTS NAV ══════════════ */}
      <nav className="sk-nav" aria-label="Course contents">
        <div className="sk-nav__inner">
          {NAV_SECTIONS.map((s) => (
            <button key={s.id} type="button" className="sk-nav__item" onClick={() => scrollToId(s.id)}>
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ══════════════ 1 — WHAT IS KAUMARAM? ══════════════ */}
      <section id="what-is" className="sk-section sk-section--maroon">
        <div className="sk-container">
          <ScrollReveal className="sk-section__head">
            <span className="sk-eyebrow">THE OPENING QUESTION</span>
            <h2 className="sk-section__title font-cinzel">What Is Kaumaram / Skandam?</h2>
            <p className="sk-section__subtitle font-serif">The heroic path of Lord Kartikeya in the six-fold tradition</p>
            <Ornament />
          </ScrollReveal>

          {/* ── Info Table ── */}
          <ScrollReveal>
            <div className="sk-table-wrap">
              <table className="sk-table">
                <thead>
                  <tr><th>Aspect</th><th>Explanation</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Definition</strong></td><td>Skanda = Who jumped from Shiva&#39;s semen. Kumara = Always a 5-year-old boy, never ages. Kaumaram = Path where Skanda / Murugan is Parabrahman — Supreme God.</td></tr>
                  <tr><td><strong>Root Word</strong></td><td>Skand = To jump, to leap. Kumara = Ku (Earth) + Mara (Destroy) — Who destroys darkness on earth.</td></tr>
                  <tr><td><strong>Main Mantra</strong></td><td><em>Om Sharavanabhava</em> · <em>Om Saravanabhavaya Namah</em> · <em>Vetri Vel Muruganukku Arohara</em></td></tr>
                  <tr><td><strong>Main Goal</strong></td><td>Moksha = Skanda Loka Prapti. Go to Skanda Loka / Kartikeya Loka. According to the Skanda Purana, Skanda Loka is eternal and imperishable, like Vaikuntha. Those who reach Skanda Loka do not return to the cycle of birth and death.</td></tr>
                  <tr><td><strong>How Old?</strong></td><td>Very old. Rig Veda mentions Kumara. Tamil Sangam literature is over 2,000 years old. Murugan is the Tamil God — worshipped since time immemorial.</td></tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* ── Three Birth Stories ── */}
          <ScrollReveal>
            <h3 className="sk-block__title font-cinzel">Who Is Skanda? — Three Traditional Birth Accounts</h3>
            <div className="sk-grid sk-grid--3">
              <ScrollReveal>
                <motion.div className="sk-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sk-card__label font-cinzel">1. Shiva Purana</span>
                  <p className="sk-card__text font-serif">
                    Shiva&#39;s seed fell into fire (Agni). Agni carried it to the Ganges. Six Krittika maidens found six babies by the Saravana lake. Parvati came and embraced all six, merging them into one divine child with six faces and twelve arms — <strong>Shanmukha</strong>.
                  </p>
                </motion.div>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <motion.div className="sk-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sk-card__label font-cinzel">2. Skanda Purana</span>
                  <p className="sk-card__text font-serif">
                    The asura Tarakasura had a boon: only Shiva&#39;s son could kill him. But Shiva had no son. The gods arranged the divine marriage of Shiva and Parvati. Skanda was born and grew up to destroy Tarakasura and restore dharma.
                  </p>
                </motion.div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <motion.div className="sk-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sk-card__label font-cinzel">3. Kumarasambhava — Kalidasa</span>
                  <p className="sk-card__text font-serif">
                    Shiva and Parvati performed tapas together. Kama (god of love) was burned by Shiva&#39;s third eye for interrupting. But from Shiva&#39;s mind and seed, Skanda was born — destined to destroy Tarakasura and restore cosmic order.
                  </p>
                </motion.div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* ── Six Faces ── */}
          <ScrollReveal>
            <div className="sk-callout">
              <span className="sk-callout__label font-cinzel">Why Six Faces? — Shanmukha</span>
              <p className="sk-callout__text font-serif">
                <strong>5 faces = 5 elements</strong> (Prithvi, Apas, Agni, Vayu, Akasha). <strong>6th face = Consciousness</strong> — the all-pervading awareness behind all elements. The six faces also look in all <strong>six directions</strong>: East, West, North, South, Up (Zenith), Down (Nadir) — symbolising Skanda&#39;s omnipresence and protection in every direction.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '52px' }}>
            <FramedFigure
              src={skandam3Img}
              alt="Lord Skanda — Shanmukha, the six-faced divine youth"
              caption="The complete form of Lord Skanda as traditionally described in the Shiva Purana and Skanda Purana"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 2 — SCRIPTURAL FOUNDATIONS ══════════════ */}
      <section id="scriptural" className="sk-section">
        <div className="sk-container">
          <ScrollReveal className="sk-section__head">
            <span className="sk-eyebrow">VEDA · PURANA · TAMIL · TANTRA · VEDANTA</span>
            <h2 className="sk-section__title font-cinzel">Scriptural Foundations of Kaumaram — 6 Pramanas</h2>
            <p className="sk-section__subtitle font-serif">The scriptural sources that uphold the path of Skanda</p>
            <Ornament />
          </ScrollReveal>

          {/* ── 1. Veda Pramana ── */}
          <ScrollReveal>
            <h3 className="sk-block__title font-cinzel">1. Veda Pramana</h3>
            <div className="sk-table-wrap">
              <table className="sk-table">
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
          </ScrollReveal>

          {/* ── 2. Purana Pramana ── */}
          <ScrollReveal>
            <h3 className="sk-block__title font-cinzel">2. Purana Pramana</h3>
            <div className="sk-grid sk-grid--2">
              {PURANA_REFS.map((p) => (
                <ScrollReveal key={p.name}>
                  <div className="sk-card sk-card--deep">
                    <span className="sk-card__label font-cinzel">{p.name}</span>
                    <p className="sk-card__text font-serif">{p.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <div className="sk-mantra-box">
                <span className="sk-mantra-box__label font-cinzel">Supreme Declaration</span>
                <p className="sk-mantra-box__sanskrit font-serif">Aham Brahma, Aham Vishnu, Aham Rudra, Aham Skandah</p>
                <p className="sk-mantra-box__meaning font-serif">I am Brahma, I am Vishnu, I am Rudra, I am Skanda — Skanda declares Himself as the Supreme Reality encompassing all three primary devas.</p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── 3. Tamil Sangam + Tirumurai ── */}
          <ScrollReveal>
            <h3 className="sk-block__title font-cinzel">3. Tamil Sangam + Tirumurai</h3>
            <div className="sk-grid sk-grid--2">
              {TAMIL_TEXTS.map((t) => (
                <ScrollReveal key={t.name}>
                  <div className="sk-card sk-card--deep">
                    <span className="sk-card__label font-cinzel">{t.name}</span>
                    <p className="sk-card__text font-serif" style={{ fontStyle: 'italic', marginBottom: '8px' }}>— {t.author}</p>
                    <p className="sk-card__text font-serif">{t.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div className="sk-rule" style={{ marginTop: '12px' }}>
              <span className="sk-rule__label font-cinzel">The Living Kaumaram Tradition</span>
              <p className="sk-rule__text font-serif">
                Kaumaram is not a path of the past — it is one of the most vibrantly alive traditions today. In Tamil Nadu and in Tamil communities worldwide, Murugan is honoured in every household and temple. Tirumurugatruppadai, Kanda Shasti Kavasam and Thiruppugazh are still recited daily, and the Arupadai Veedu pilgrimage continues unbroken. The living Kaumaram tradition shows that Skanda is not a distant deity of an old scripture, but the ever-young Lord who remains with His people.
              </p>
            </div>
          </ScrollReveal>

          {/* ── 4. Tantra Shastra ── */}
          <ScrollReveal>
            <h3 className="sk-block__title font-cinzel">4. Tantra Shastra — Kumara Tantra</h3>
            <div className="sk-grid sk-grid--2">
              <div className="sk-card sk-card--deep">
                <span className="sk-card__label font-cinzel">Tantric Texts</span>
                <p className="sk-card__text font-serif">
                  <strong>Kumara Tantra / Skanda Yamala</strong> — dedicated tantric texts on Skanda worship.<br />
                  <strong>Rudra Yamala — Kumara Khanda</strong> — sections on Kumara within the Yamala tradition.<br />
                  <strong>Kanda Purana Tantra</strong> — tantric ritual methods associated with the Skanda Purana.
                </p>
              </div>
              <div className="sk-card sk-card--deep">
                <span className="sk-card__label font-cinzel">Tantric Understanding</span>
                <p className="sk-card__text font-serif">
                  <strong>Vel = Jnana Shakti</strong> — the power of wisdom.<br />
                  <strong>Vel = Iccha Shakti + Jnana Shakti + Kriya Shakti</strong> — all three divine powers unified.<br />
                  <strong>Six faces = Six chakras</strong> in the subtle body.<br />
                  <strong>Mayil (Peacock) = Maya</strong> — Skanda rides over illusion.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ── 5. Itihasa + Vel ── */}
          <ScrollReveal>
            <h3 className="sk-block__title font-cinzel">5. Itihasa + Vel</h3>
            <div className="sk-grid sk-grid--2">
              <div className="sk-card sk-card--deep">
                <span className="sk-card__label font-cinzel">Ramayana</span>
                <p className="sk-card__text font-serif">
                  Some say that Skanda is referenced in certain regional recensions of the Ramayana. Some say that Rama himself invoked the protection of Skanda before the battle with Ravana. These associations are part of the oral and regional tradition and are preserved here as traditionally received.
                </p>
              </div>
              <div className="sk-card sk-card--deep">
                <span className="sk-card__label font-cinzel">Mahabharata</span>
                <p className="sk-card__text font-serif">
                  The Mahabharata, Vana Parva Chapters 223–233, provides the most detailed Itihasa account of Skanda. It describes the birth of Skanda, his role as commander of the divine armies, the destruction of Tarakasura, and the significance of the Vel as the supreme weapon of Jnana.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ── 6. Vedanta / Sanat Kumara ── */}
          <ScrollReveal>
            <h3 className="sk-block__title font-cinzel">6. Vedanta — Sanat Kumara</h3>
            <div className="sk-grid sk-grid--2">
              <div className="sk-card sk-card--deep">
                <span className="sk-card__label font-cinzel">Chandogya Upanishad + Four Kumaras</span>
                <p className="sk-card__text font-serif">
                  In the <strong>Chandogya Upanishad</strong> (Seventh Chapter), <strong>Sanat Kumara</strong> teaches Narada the nature of Brahman and the Bhu Ma Vidya (the teaching of the Earth and Space). Sanat Kumara is traditionally regarded as an aspect of Skanda — the eternal youth who is the Guru of Gurus.
                </p>
                <p className="sk-card__text font-serif" style={{ marginTop: '12px' }}>
                  The <strong>Four Kumaras</strong> — Sanaka, Sanandana, Sanatana, and Sanatkumara — are the first four minds created by Brahma. Sanatkumara, the fourth, is the aspect most closely associated with Skanda.
                </p>
              </div>
              <div className="sk-card sk-card--deep">
                <span className="sk-card__label font-cinzel">Skanda as Eternal Guru</span>
                <p className="sk-card__text font-serif">
                  <strong>Narada</strong> approached Sanat Kumara seeking knowledge of the Self. Sanat Kumara taught him the Bhu Ma Vidya — the highest Vedantic teaching. Skanda is thus established as the Guru who transmits the deepest knowledge.
                </p>
                <div className="sk-callout" style={{ marginTop: '16px' }}>
                  <span className="sk-callout__label font-cinzel">Guru Guha</span>
                  <p className="sk-callout__text font-serif">
                    <strong>Guru Guha — Guru who lives in the cave of the heart.</strong> Skanda is called Guha because He dwells in the innermost cave (hridaya guha) of every being. He is the inner Guru who guides from within.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '52px' }}>
            <FramedFigure
              src={skandam2Img}
              alt="The Vel — divine spear of Lord Skanda"
              caption="The Vel: the spear of Jnana that pierces through all ignorance"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 3 — TYPES OF UPASANA ══════════════ */}
      <section id="types" className="sk-section sk-section--maroon">
        <div className="sk-container">
          <ScrollReveal className="sk-section__head">
            <span className="sk-eyebrow">FOUR CLASSIFICATIONS</span>
            <h2 className="sk-section__title font-cinzel">Types of Kaumara Upasana — 4 Classifications</h2>
            <p className="sk-section__subtitle font-serif">Modes of worship, sacred sites, weapons and stages of sadhana</p>
            <Ornament />
          </ScrollReveal>

          {/* ── Classification 1: Bala vs Yuddha ── */}
          <ScrollReveal>
            <h3 className="sk-block__title font-cinzel">Classification 1 — Bala Kumara vs Yuddha Skanda</h3>
            <div className="sk-table-wrap">
              <table className="sk-table">
                <thead>
                  <tr><th>Bala Kumara</th><th>Yuddha Skanda / Deva Senapati</th></tr>
                </thead>
                <tbody>
                  <tr><td>Bala Murugan / Baby Murugan</td><td>Vel Murugan / Warrior</td></tr>
                  <tr><td>5-year-old boy</td><td>Six faces, twelve hands</td></tr>
                  <tr><td>No weapon</td><td>Vel (divine spear)</td></tr>
                  <tr><td>Smiling, innocent</td><td>Peacock mount</td></tr>
                  <tr><td>Knowledge / Students / Children</td><td>Demon-killing form / Victory</td></tr>
                  <tr><td>Court case, study, innocence</td><td>Court case, disease, black magic</td></tr>
                  <tr><td><strong>Mantra:</strong> <em>Om Bala Kumaraaya Namah</em></td><td><strong>Mantras:</strong> <em>Om Sharavanabhava</em>, <em>Om Subrahmanyaaya Namah</em></td></tr>
                </tbody>
              </table>
            </div>
            <div className="sk-callout" style={{ marginTop: '24px' }}>
              <span className="sk-callout__label font-cinzel">Tamil Tradition</span>
              <p className="sk-callout__text font-serif">
                Tamil tradition says: Worship <strong>Bala in the morning for studies</strong>, worship <strong>Yuddha in the evening for protection</strong>. The two forms address different needs and different times of day.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '48px' }}>
            <FramedFigure
              src={skandam6Img}
              alt="Lord Murugan — Bala and warrior forms"
              caption="The two dimensions of Skanda: the playful child and the divine warrior"
            />
          </ScrollReveal>

          {/* ── Classification 2: Arupadai Veedu ── */}
          <ScrollReveal>
            <h3 className="sk-block__title font-cinzel">Classification 2 — Six Abodes / Arupadai Veedu</h3>
            <div className="sk-table-wrap">
              <table className="sk-table">
                <thead>
                  <tr><th>Abode</th><th>Form</th><th>Upasana Type</th><th>Tattva</th></tr>
                </thead>
                <tbody>
                  {ARUPADAI_VEEDU.map((a) => (
                    <tr key={a.name}>
                      <td><strong>{a.name}</strong></td>
                      <td>{a.form}</td>
                      <td>{a.upasana}</td>
                      <td>{a.tattva}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="sk-callout" style={{ marginTop: '24px' }}>
              <span className="sk-callout__label font-cinzel">Upasana Method</span>
              <p className="sk-callout__text font-serif">
                The traditional method is to visit the six abodes in order, beginning at <strong>Tiruparankundram</strong> and ending at <strong>Pazhamudircholai</strong>. Each abode represents a stage in the devotee&#39;s spiritual progression — from invocation to complete grace. The pilgrim moves from Earth (entry-level) to Consciousness (fulfilment).
              </p>
            </div>
          </ScrollReveal>

          {/* ── Classification 3: Three Weapons ── */}
          <ScrollReveal>
            <h3 className="sk-block__title font-cinzel">Classification 3 — Three Weapons, Three Shaktis</h3>
            <div className="sk-grid sk-grid--3">
              {THREE_WEAPONS.map((w, i) => (
                <ScrollReveal key={w.weapon} delay={i * 0.08}>
                  <motion.div className="sk-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                    <span className="sk-card__label font-cinzel">{w.weapon}</span>
                    <p className="sk-card__text font-serif" style={{ fontStyle: 'italic', marginBottom: '8px' }}>{w.shakti}</p>
                    <p className="sk-card__text font-serif" style={{ marginBottom: '6px' }}>{w.modern}</p>
                    <p className="sk-card__text font-serif" style={{ fontSize: '13.5px', color: 'var(--gold-light)' }}><strong>Mantra:</strong> <em>{w.mantra}</em></p>
                    <p className="sk-card__text font-serif" style={{ fontSize: '13.5px', marginTop: '4px' }}><strong>Use:</strong> {w.use}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
            <div className="sk-mantra-box" style={{ marginTop: '28px' }}>
              <span className="sk-mantra-box__label font-cinzel">From the Kumara Tantra</span>
              <p className="sk-mantra-box__sanskrit font-serif">Meditate on Vel in Ajna chakra (third eye) — All ignorance goes.</p>
              <p className="sk-mantra-box__meaning font-serif">The Kumara Tantra instructs the devotee to visualise the golden Vel placed at the Ajna chakra. As the Vel pierces through, all accumulated ignorance dissolves and the light of Jnana shines forth.</p>
            </div>
          </ScrollReveal>

          {/* ── Classification 4: Four Steps ── */}
          <ScrollReveal className="sk-steps-wrap">
            <h3 className="sk-block__title font-cinzel">Classification 4 — Four Steps of Kaumara Sadhana</h3>
            <div className="sk-steps">
              {FOUR_STEPS.map((s) => (
                <ScrollReveal key={s.num} delay={parseInt(s.num) * 0.06}>
                  <div className="sk-step">
                    <div className="sk-step__marker">
                      <span className="sk-step__num font-cinzel">{s.num}</span>
                    </div>
                    <div className="sk-step__card">
                      <h4 className="sk-step__title font-cinzel">{s.title}</h4>
                      <p className="sk-step__text font-serif">{s.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 4 — VEL TATTVA ══════════════ */}
      <section id="vel-tattva" className="sk-section">
        <div className="sk-container">
          <ScrollReveal className="sk-section__head">
            <span className="sk-eyebrow">DIVINE SPEAR · ENERGY · CHAKRAS</span>
            <h2 className="sk-section__title font-cinzel">Tantra Shastra — Vel Tattva</h2>
            <p className="sk-section__subtitle font-serif">The sacred Vel through the lens of Tantra and Kundalini</p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="sk-rule" style={{ marginBottom: '28px' }}>
              <span className="sk-rule__label font-cinzel">The Sacred Vel</span>
              <p className="sk-rule__text font-serif">
                The Vel is the most sacred symbol of Kaumaram. According to the Tantra Shastra, the Vel is not a mere weapon — it holds the entire map of the subtle body and unites the three divine powers in a single form. This is the deepest understanding of Kaumaram: the whole path of Kundalini is contained in the Vel of Murugan.
              </p>
            </div>
          </ScrollReveal>

          <div className="sk-grid sk-grid--2">
            <ScrollReveal>
              <div className="sk-card sk-card--deep">
                <span className="sk-card__label font-cinzel">1. Vel Shape</span>
                <p className="sk-card__text font-serif">
                  <strong>Long blade</strong> — Like the spine / Sushumna nadi.<br />
                  <strong>Sharp tip</strong> — Like Kundalini at the crown.<br />
                  <strong>Broad bottom</strong> — Like Muladhara base.<br />
                  The Vel is the entire yogic energy system in one weapon.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div className="sk-card sk-card--deep">
                <span className="sk-card__label font-cinzel">2. Vel = Three Shaktis</span>
                <p className="sk-card__text font-serif">
                  <strong>Bottom broad part</strong> = Iccha Shakti — Will power.<br />
                  <strong>Middle long blade</strong> = Jnana Shakti — Wisdom.<br />
                  <strong>Top sharp tip</strong> = Kriya Shakti — Action.<br />
                  All three powers are united in the single form of the Vel.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="sk-card sk-card--deep">
                <span className="sk-card__label font-cinzel">3. Vel Yantra</span>
                <p className="sk-card__text font-serif">
                  The Vel Yantra is a sacred geometric diagram associated with Skanda worship. It traditionally represents the convergence of the six faces into one point of divine awareness. The yantra is used in tantric meditation and worship to invoke the energy of Skanda.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div className="sk-card sk-card--deep">
                <span className="sk-card__label font-cinzel">4. Six Faces = Six Chakras</span>
                <p className="sk-card__text font-serif">
                  The six faces of Skanda are traditionally aligned with the six primary chakras of the subtle body. Each face governs a specific energy centre and spiritual quality.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Six Chakra Cards ── */}
          <ScrollReveal>
            <h3 className="sk-block__title font-cinzel">Six Faces and Six Chakras</h3>
            <div className="sk-grid sk-grid--3">
              {CHAKRAS.map((c, i) => (
                <ScrollReveal key={c.name} delay={i * 0.05}>
                  <div className="sk-chakra-card">
                    <span className="sk-chakra-card__name font-cinzel">{c.name}</span>
                    <span className="sk-chakra-card__element">{c.element}</span>
                    <span className="sk-chakra-card__quality">{c.quality}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="sk-mantra-box" style={{ marginTop: '32px' }}>
              <span className="sk-mantra-box__label font-cinzel">Conclusion</span>
              <p className="sk-mantra-box__sanskrit font-serif">That is why Skanda is Lord of Kundalini — He can pierce all chakras with Vel.</p>
              <p className="sk-mantra-box__meaning font-serif">Since each of the six faces corresponds to a chakra, Skanda is the master of the entire kundalini system. His Vel can pierce through every energy centre, awakening the devotee to full spiritual awareness.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '52px' }}>
            <FramedFigure
              src={skandam5Img}
              alt="Lord Skanda — the power of Vel and Kundalini"
              caption="Skanda as Lord of Kundalini — the Vel pierces all six chakras"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 5 — WHY KAUMARAM MATTERS ══════════════ */}
      <section id="importance" className="sk-section sk-section--maroon">
        <div className="sk-container">
          <ScrollReveal className="sk-section__head">
            <span className="sk-eyebrow">THE SIX-POINT IMPORTANCE</span>
            <h2 className="sk-section__title font-cinzel">Why Kaumaram Matters</h2>
            <p className="sk-section__subtitle font-serif">Six reasons this path is traditionally held as deeply relevant</p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="sk-table-wrap">
              <table className="sk-table">
                <thead>
                  <tr><th>#</th><th>Point</th><th>Explanation</th><th>Shastra / Source</th></tr>
                </thead>
                <tbody>
                  {IMPORTANCE_ROWS.map((r) => (
                    <tr key={r.num}>
                      <td><strong>{r.num}</strong></td>
                      <td><strong>{r.point}</strong></td>
                      <td>{r.detail}</td>
                      <td style={{ fontSize: '13.5px' }}>{r.shastra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="sk-mantra-box" style={{ marginTop: '36px' }}>
              <span className="sk-mantra-box__label font-cinzel">Kanda Shasti Kavasam — Devotional Shield</span>
              <p className="sk-mantra-box__sanskrit font-serif">
                Kanda Shasti Kavasam — The protective armour of Lord Skanda, recited by devotees for protection from evil, disease, enemies and all negative forces. It is one of the most powerful and widely recited hymns in Tamil Kaumaram tradition.
              </p>
              <p className="sk-mantra-box__meaning font-serif">
                The Kavasam is traditionally recited once a week or during Skanda Shasti (the six days of Skanda worship). It invokes the Vel and the six faces of Murugan for complete protection of body, mind and spirit.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 6 — DIVINE RELATIONSHIPS ══════════════ */}
      <section id="divine-forms" className="sk-section">
        <div className="sk-container">
          <ScrollReveal className="sk-section__head">
            <span className="sk-eyebrow">THE DIVINE FAMILY</span>
            <h2 className="sk-section__title font-cinzel">Skanda and His Divine Relationships</h2>
            <p className="sk-section__subtitle font-serif">Skanda within the broader family of the divine</p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="sk-table-wrap">
              <table className="sk-table">
                <thead>
                  <tr><th>God</th><th>Relation with Skanda</th><th>Meaning</th></tr>
                </thead>
                <tbody>
                  {DIVINE_RELATIONS.map((d) => (
                    <tr key={d.god}>
                      <td><strong>{d.god}</strong></td>
                      <td><strong>{d.relation}</strong></td>
                      <td>{d.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* ── Two Wives ── */}
          <ScrollReveal>
            <h3 className="sk-block__title font-cinzel">The Two Wives of Murugan</h3>
            <div className="sk-grid sk-grid--2">
              <ScrollReveal>
                <motion.div className="sk-card sk-card--deep" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sk-card__label font-cinzel">Devasena / Devayanai</span>
                  <p className="sk-card__text font-serif">
                    Daughter of Indra. <strong>Sattvic</strong> — pure, refined, heavenly. She represents <strong>heavenly happiness</strong> — the spiritual joy that comes from divine grace and purity.
                  </p>
                </motion.div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <motion.div className="sk-card sk-card--deep" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sk-card__label font-cinzel">Valli</span>
                  <p className="sk-card__text font-serif">
                    Tribal girl. Daughter of earth. <strong>Rajasic</strong> — active, earthly, dynamic. She represents <strong>earthly happiness</strong> — the joy of living fully in the world with divine grace.
                  </p>
                </motion.div>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <div className="sk-callout" style={{ marginTop: '24px' }}>
                <span className="sk-callout__label font-cinzel">Conclusion</span>
                <p className="sk-callout__text font-serif">
                  <strong>Skanda gives both heavenly + earthly happiness — Complete.</strong> Through Devasena, He bestows spiritual fulfilment. Through Valli, He blesses worldly life. Together, they represent the totality of divine grace.
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 7 — ESSENCE ══════════════ */}
      <section id="essence" className="sk-section sk-section--maroon">
        <div className="sk-container">
          <ScrollReveal className="sk-section__head">
            <span className="sk-eyebrow">THE CLOSING VISION</span>
            <h2 className="sk-section__title font-cinzel">The Essence and Practice of Kaumaram</h2>
            <p className="sk-section__subtitle font-serif">The final teaching, the three pillars and the practical path</p>
            <Ornament />
          </ScrollReveal>

          {/* ── Skanda Purana Quote ── */}
          <ScrollReveal className="sk-purana-wrap">
            <div className="sk-scripture-card">
              <span className="sk-scripture-card__mark" aria-hidden="true">&ldquo;</span>
              <p className="sk-scripture-card__sanskrit font-serif">
                Skanda is the Lord of the Ganas, the Commander of the Divine Armies, the one
                whose six faces behold the six directions and the six times of the soul.
                He who dwells in the heart of the devotee is the one who destroys all fear.
              </p>
              <p className="sk-scripture-card__source font-cinzel">— Skanda Purana (traditional summary)</p>
              <p className="sk-scripture-card__meaning font-serif">
                The Skanda Purana is one of the eighteen Mahapuranas and the primary scripture
                of the Kaumaram tradition. It is traditionally said to contain 88,000 verses.
              </p>
            </div>
          </ScrollReveal>

          {/* ── Three Pillars ── */}
          <ScrollReveal>
            <h3 className="sk-block__title font-cinzel">Three Pillars of Kaumaram</h3>
            <div className="sk-grid sk-grid--3">
              <ScrollReveal>
                <motion.div className="sk-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sk-card__label font-cinzel">Vel</span>
                  <h4 className="sk-card__h4 font-cinzel">Jnana — Wisdom Spear</h4>
                  <p className="sk-card__text font-serif">Cuts ignorance. The Vel of Skanda is the weapon of Jnana that pierces through the veil of Avidya and reveals the Self.</p>
                </motion.div>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <motion.div className="sk-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sk-card__label font-cinzel">Mayil</span>
                  <h4 className="sk-card__h4 font-cinzel">Control of Maya</h4>
                  <p className="sk-card__text font-serif">Rides illusion. The peacock represents Maya — Skanda rides over it, demonstrating mastery over worldly illusion.</p>
                </motion.div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <motion.div className="sk-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sk-card__label font-cinzel">Seval</span>
                  <h4 className="sk-card__h4 font-cinzel">Will Power</h4>
                  <p className="sk-card__text font-serif">Awakens. The rooster/cock represents Iccha Shakti — the divine will that wakes the devotee from spiritual slumber.</p>
                </motion.div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* ── Practical Rule ── */}
          <ScrollReveal>
            <h3 className="sk-block__title font-cinzel">Practical Rule — Daily Practice</h3>
            <div className="sk-grid sk-grid--3">
              <ScrollReveal>
                <motion.div className="sk-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sk-card__label font-cinzel">Morning</span>
                  <h4 className="sk-card__h4 font-cinzel">Knowledge + Victory</h4>
                  <p className="sk-card__text font-serif">
                    <em>Om Saravanabhavaya Namah</em> — 108 times.<br />
                    Begin the day with the energy of Skanda. Invoke Jnana and victory over ignorance.
                  </p>
                </motion.div>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <motion.div className="sk-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sk-card__label font-cinzel">Tuesday</span>
                  <h4 className="sk-card__h4 font-cinzel">Courage + Mars</h4>
                  <p className="sk-card__text font-serif">
                    Tuesday Fast. Murugan&#39;s day. Skanda is the commander of Mars — He controls Mars Dosha. Fasting on Tuesday invokes courage, strength and protection.
                  </p>
                </motion.div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <motion.div className="sk-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sk-card__label font-cinzel">Evening</span>
                  <h4 className="sk-card__h4 font-cinzel">Protection — 10 Minutes</h4>
                  <p className="sk-card__text font-serif">
                    <em>Kanda Shasti Kavasam</em> — 1 time.<br />
                    End the day with the protective armour of Skanda. Complete protection in just 10 minutes.
                  </p>
                </motion.div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* ── Final Devotional Message ── */}
          <ScrollReveal className="sk-closing">
            <span className="sk-closing__mark" aria-hidden="true">✦</span>
            <p className="sk-closing__source font-cinzel" style={{ marginBottom: '16px' }}>In Kali Yuga, Kaumaram says:</p>
            <p className="sk-closing__sanskrit font-serif" style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}>
              Muruga, Muruga, Vel Muruga
            </p>
            <div className="sk-hero__divider" style={{ maxWidth: '280px', margin: '24px auto' }}>
              <span className="sk-hero__divider-line" />
              <span style={{ color: 'var(--gold-light)', fontSize: '18px' }}>✦</span>
              <span className="sk-hero__divider-line" />
            </div>
            <p className="sk-closing__meaning font-serif">
              In this age of darkness, the young Kumara comes quickly to help. He does not wait for long penance or complex rituals. A sincere call — <em>Muruga, Muruga</em> — and He is there. His Vel is ready. His grace is immediate. His love is unconditional. He is the eternal youth who responds to the cry of every soul.
            </p>
            <p className="sk-closing__note font-serif">
              Arohara — Surrender to the feet of Lord Murugan.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="sk-cta">
        <div className="sk-cta__geo" aria-hidden="true" />
        <ScrollReveal direction="up" duration={0.85}>
          <div className="sk-cta__box">
            <span className="sk-cta__corner sk-cta__corner--tl" aria-hidden="true">✦</span>
            <span className="sk-cta__corner sk-cta__corner--tr" aria-hidden="true">✦</span>
            <span className="sk-cta__corner sk-cta__corner--bl" aria-hidden="true">✦</span>
            <span className="sk-cta__corner sk-cta__corner--br" aria-hidden="true">✦</span>

            <span className="sk-cta__badge">🪷 Walk the Path of Skanda</span>
            <h2 className="sk-cta__heading font-cinzel">
              Begin Your Journey Into<br />
              <span className="sk-cta__heading-gold">Kaumaram</span>
            </h2>
            <div className="sk-cta__divider">
              <span className="sk-cta__divider-line" />
              <span className="sk-cta__divider-lotus">✿</span>
              <span className="sk-cta__divider-line" />
            </div>
            <p className="sk-cta__body font-serif">
              Explore the scriptures, the Vel Tattva, the Arupadai Veedu and the practical
              upasana of Lord Kartikeya — with courage, humility and devotion.
            </p>
            <div className="sk-cta__btns">
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
