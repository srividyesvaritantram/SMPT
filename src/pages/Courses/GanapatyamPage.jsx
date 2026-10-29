import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { FooterSection } from '../Home/HomeSections.jsx';
import heroImg from '../../assets/ganapathy2.jpeg';
import ganapathyaImg from '../../assets/ganapathya.jpeg';
import balaGanapathiImg from '../../assets/bala_ganapathi.jpeg';
import logoImg from '../../assets/logo.png';
import './GanapatyamPage.css';

const NAV_SECTIONS = [
  { id: 'what-is', label: 'What is Ganapatyam?' },
  { id: 'seven-pramanas', label: 'Seven Pramanas' },
  { id: 'practice', label: 'Practice of Ganapatyam' },
  { id: 'nine-importance', label: 'Nine Importance' },
  { id: 'today', label: 'Why Today' },
  { id: 'essence', label: 'Essence' },
];

const SHANMATA = [
  { name: 'Shaivam', god: 'Shiva', highlight: false },
  { name: 'Vaishnavam', god: 'Vishnu', highlight: false },
  { name: 'Shaktam', god: 'Shakti', highlight: false },
  { name: 'Ganapatyam', god: 'Ganapati', highlight: true },
  { name: 'Kaumaram', god: 'Kartikeya', highlight: false },
  { name: 'Sauram', god: 'Surya', highlight: false },
];

const GANESHA_PURANA_REF = [
  { ref: 'Upasana Khanda 1.12', text: 'Brahma created the world by chanting the syllable "Gam".' },
  { ref: 'Upasana Khanda 4.8', text: 'A traditional account of Shiva worshipping Ganapati.' },
];

const FOUR_AVATARS = [
  { name: 'Mahotkata', yuga: 'Satya Yuga' },
  { name: 'Mayureshvara', yuga: 'Treta Yuga' },
  { name: 'Gajanana', yuga: 'Dvapara Yuga' },
  { name: 'Dhumraketu', yuga: 'Kali Yuga' },
];

const EIGHT_FORMS = [
  { name: 'Vakratunda', obstacle: 'Jealousy', desc: 'His curved trunk traditionally symbolises control over restless envy.' },
  { name: 'Ekadanta', obstacle: 'Pride', desc: 'The single tusk represents the transcending of ego and self-importance.' },
  { name: 'Mahodara', obstacle: 'Attachment', desc: 'The vast belly symbolises the space to contain and release clinging.' },
  { name: 'Gajanana', obstacle: 'Greed', desc: 'The elephant face is associated with clarity that dissolves covetousness.' },
  { name: 'Lambodara', obstacle: 'Anger', desc: 'A form traditionally offered as a remedy for burning anger.' },
  { name: 'Vikata', obstacle: 'Lust', desc: 'The terrible form associated with mastering desire.' },
  { name: 'Vighnaraja', obstacle: 'Ego', desc: 'The Lord of obstacles is invoked to overcome the sense of separate self.' },
  { name: 'Dhumravarna', obstacle: 'Arrogance', desc: 'The smoke-coloured form is traditionally linked to dispelling superiority.' },
];

const VEDA_TABLE = [
  { text: 'Rig Veda 2.23.1', ref: 'Gananam Tva... — associated with Ganapati / Brahmanaspati' },
  { text: 'Yajur Veda', ref: 'Om Ganapataye Namah' },
  { text: 'Atharva Veda', ref: 'Ganapati Atharva Shirsha' },
  { text: 'Ganapati Upanishad', ref: 'Tvam Pratyaksham Tattvam Asi' },
];

const TANTRA_TABLE = [
  { tantra: 'Rudra Yamala', teaching: 'Ganapati as the Muladhara Chakra Devata' },
  { tantra: 'Meru Tantra', teaching: '64 Ganapati forms associated with the 64 Yoginis' },
  { tantra: 'Kularnava Tantra', teaching: 'Ganapati worship before mantra practice' },
  { tantra: 'Gautamiya Tantra', teaching: 'Different forms and traditions of Ganapatyam' },
];

const ATHARVA_SHIRSHA_VERSES = [
  {
    no: 'Verse 1',
    text: 'Om Namaste Ganapataye. Tvam eva Pratyaksham Tattvam Asi',
    meaning: 'You are the directly perceived Truth.',
  },
  {
    no: 'Verse 3',
    text: 'Tvam Brahma Tvam Vishnu Tvam Rudra Tvam Indra',
    meaning: 'The text identifies Ganapati with the major divine forms of the tradition — Brahma, Vishnu, Rudra and Indra.',
  },
  {
    no: 'Verse 6',
    text: 'Ritam Vachmi Satyam Vachmi',
    meaning: 'A traditional declaration of speaking what is right and true.',
  },
  {
    no: 'Verse 9',
    text: 'Yo Durva Kuraih Yajati Sa Vaishravanopamo Bhavati',
    meaning: 'The text states that one who worships with Durva grass becomes as blessed as Vaishravana (Kubera).',
  },
];

const PRACTICE_STEPS = [
  { step: 1, title: 'Guru Diksha', scripture: 'Mudgala Purana', text: 'Traditional practice holds that initiation (diksha) from a qualified guru is the foundation of the Ganapatya path, transmitted through the Guru Parampara.' },
  { step: 2, title: 'Pratah Smarana', scripture: 'Ganesha Purana', text: 'Morning remembrance of the traditional twelve names of Ganapati to begin the day with devotion and clarity.' },
  { step: 3, title: 'Durva Arpana', scripture: 'Ganapati Atharva Shirsha', text: 'The traditional offering of 21 blades of Durva grass, regarded as especially beloved to Ganapati.' },
  { step: 4, title: 'Modaka Naivedya', scripture: 'Mudgala Purana', text: 'The offering of Modaka, traditionally regarded as a symbol of Ananda (spiritual bliss).' },
  { step: 5, title: 'Sankashti Chaturthi Vrata', scripture: 'Narada Purana + Ganesha Purana', text: 'A traditional monthly fast and worship observed on the Chaturthi (fourth lunar day) of the Krishna Paksha.' },
  { step: 6, title: 'Ganapati Atharva Shirsha Parayana', scripture: 'Ganapati Atharva Shirsha', text: 'The regular recitation (parayana) of the Ganapati Atharva Shirsha as a core devotional practice.' },
  { step: 7, title: 'Maha Ganapati Yantra Puja', scripture: 'Meru Tantra', text: 'Worship of the Maha Ganapati Yantra, a sacred geometric diagram whose structure radiates from the central point (bindu).' },
  { step: 8, title: 'Japa', scripture: 'Traditional', text: 'Recitation of the main mantra "Om Gam Ganapataye Namah" (traditionally 108 times) and the Maha mantra "Om Shri Maha Ganapataye Namah" (traditionally 1008 times on Chaturthi).' },
];

const SADHANA_TYPES = [
  {
    type: 'Sattvic',
    form: 'Maha Ganapati',
    association: 'Moksha + Grihastha (householder path)',
    text: 'A calm and devotional path of worship associated with spiritual liberation and the harmonious householder life.',
  },
  {
    type: 'Rajasic',
    form: 'Haridra Ganapati',
    association: 'Marriage, prosperity, worldly objectives',
    text: 'Traditionally invoked for auspicious beginnings, marriage, prosperity and harmonising worldly goals with spiritual discipline.',
  },
  {
    type: 'Tamasic',
    form: 'Uchhishta Ganapati',
    association: 'Traditional tantric practice',
    text: 'A specialised tantric form requiring great care; advanced practices are reserved for qualified practitioners under proper guidance.',
  },
];

const NINE_IMPORTANCE = [
  { num: 1, title: 'Prathama Pujya', text: 'Traditional belief that Ganapati is worshipped first.', scripture: 'Shiva Purana' },
  { num: 2, title: 'Vighna Harta + Vighna Karta', text: 'Traditional concept of the remover and creator of obstacles.', scripture: 'Mudgala Purana' },
  { num: 3, title: 'Buddhi Data', text: 'Associated with intelligence and wisdom.', scripture: 'Brahmanaspati tradition' },
  { num: 4, title: 'Muladhara Devata', text: 'Traditional tantric association with the Muladhara chakra.', scripture: 'Rudra Yamala' },
  { num: 5, title: 'Siddhi + Buddhi Pati', text: 'Associated with Siddhi (attainment) and Buddhi (intellect).', scripture: 'Ganesha Purana' },
  { num: 6, title: '64 Kala + 14 Vidya Lord', text: 'Traditional association with the arts and fields of knowledge.' },
  { num: 7, title: 'Debt Removal', text: 'Rinamochana Ganapati, invoked to release the burden of debts.', scripture: 'Rinamochana Stotra tradition' },
  { num: 8, title: 'Kali Yuga', text: 'Traditional Ganapatya emphasis on accessible worship in the Kali Yuga.' },
  { num: 9, title: 'Parabrahman', text: 'Ganapatya theological understanding of Ganapati as the Supreme Reality.' },
];

const TODAY_TABLE = [
  { concern: 'Work / Business', form: 'Lakshmi Ganapati + Rinamochana', ref: 'Atharva Shirsha tradition' },
  { concern: 'Mental restlessness', form: 'Yoga Ganapati + Heramba', ref: 'Tantric tradition' },
  { concern: 'Marriage concerns', form: 'Haridra Ganapati + Shakti Ganapati', ref: 'Meru Tantra tradition' },
  { concern: 'Household harmony', form: 'Maha Ganapati Yantra', ref: 'Traditional worship' },
  { concern: 'Children', form: 'Santana Ganapati + Navanita Ganapati', ref: 'Mudgala Purana tradition' },
  { concern: 'Fear / negative influences', form: 'Uddanda Ganapati + Durga Ganapati', ref: 'Tantric tradition' },
];

const GLP_FORMS = [
  { count: '8', label: 'forms (Mudgala Purana)' },
  { count: '12', label: 'traditional names' },
  { count: '32', label: 'forms' },
  { count: '64', label: 'forms' },
  { count: '108', label: 'forms' },
];

function Ornament() {
  return (
    <div className="gp-orn" aria-hidden="true">
      <span className="gp-orn__line" />
      <span className="gp-orn__diamond">✦</span>
      <span className="gp-orn__line" />
    </div>
  );
}

export default function GanapatyamPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Ganapatyam | Complete Shastra, Philosophy & Sadhana';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Explore Ganapatyam through its traditional scriptures, philosophy, forms of Ganapati, worship practices and spiritual traditions.');
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
    <div className="gp-page">
      <Navbar />

      {/* ════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════ */}
      <section className="gp-hero">
        <div className="gp-hero__bg" aria-hidden="true" />
        <div className="gp-hero__inner">
          <div className="gp-hero__content">
            <motion.span
              className="gp-hero__eyebrow"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              SHANMATA • GANAPATI UPASANA • VEDIC &amp; TANTRIC TRADITION
            </motion.span>

            <motion.h1
              className="gp-hero__title font-cinzel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              GANAPATYAM
            </motion.h1>

            <motion.p
              className="gp-hero__subtitle font-cinzel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              The Path of Ganapati — Complete Shastra, Philosophy &amp; Sadhana
            </motion.p>

            <motion.div
              className="gp-hero__divider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <span className="gp-hero__divider-line" />
              <img src={logoImg} alt="" className="gp-hero__divider-om" />
              <span className="gp-hero__divider-line" />
            </motion.div>

            <motion.p
              className="gp-hero__intro font-serif"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              Ganapatyam is one of the six major paths of the Shanmata tradition, in which
              Ganapati is honoured as the Supreme Reality. Through the Ganesha Purana, the
              Mudgala Purana, the Ganapati Atharva Shirsha and the tantric traditions, this
              course explores the complete shastra, philosophy and sadhana of the Lord of
              the Ganas.
            </motion.p>

            <motion.div
              className="gp-hero__btn"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.78 }}
            >
              <GoldenButton
                label="Explore Ganapatyam"
                size="lg"
                onClick={() => scrollToId('what-is')}
              />
            </motion.div>
          </div>

          <motion.div
            className="gp-hero__art"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="gp-hero__halo" aria-hidden="true" />
            <figure className="gp-hero__frame">
              <img
                src={heroImg}
                alt="Ganapati — Lord of the Ganas, supreme deity of the Ganapatya tradition"
                className="gp-hero__img"
                loading="eager"
                draggable="false"
              />
            </figure>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CONTENTS NAVIGATION
      ════════════════════════════════════════════════════ */}
      <nav className="gp-nav" aria-label="Course contents">
        <div className="gp-nav__inner">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              className="gp-nav__item"
              onClick={() => scrollToId(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ════════════════════════════════════════════════════
          PART 1 — WHAT IS GANAPATYAM?  (CREAM)
      ════════════════════════════════════════════════════ */}
      <section id="what-is" className="gp-section gp-section--cream">
        <div className="gp-container">
          <ScrollReveal className="gp-section__head">
            <span className="gp-eyebrow">PART 1</span>
            <h2 className="gp-section__title font-cinzel">What Is Ganapatyam?</h2>
            <p className="gp-section__subtitle font-serif">
              One of the six major paths of the Shanmata
            </p>
            <Ornament />
          </ScrollReveal>

          <div className="gp-grid gp-grid--2">
            <ScrollReveal>
              <motion.div className="gp-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                <span className="gp-card__label font-cinzel">Definition</span>
                <p className="gp-card__text font-serif">
                  <strong>Ganapati = Lord of the Ganas.</strong> Ganapatyam is the tradition
                  in which Ganapati is understood as the Supreme Reality / Parabrahman.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <motion.div className="gp-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                <span className="gp-card__label font-cinzel">Origins</span>
                <p className="gp-card__text font-serif">
                  The tradition is traditionally associated with <strong>Moraya Gosavi</strong>,
                  the <strong>Morya tradition</strong>, and is linked to <strong>Adi Shankaracharya</strong>.
                  These associations are presented from traditional accounts and are not asserted
                  as universally established historical facts.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="gp-shanmata__wrap">
            <h3 className="gp-block__title font-cinzel">The Six Sampradayas — Shanmata</h3>
            <div className="gp-shanmata">
              {SHANMATA.map((s, i) => (
                <ScrollReveal key={s.name} delay={i * 0.05}>
                  <motion.div
                    className={`gp-shanmata__card${s.highlight ? ' gp-shanmata__card--hl' : ''}`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <span className="gp-shanmata__name font-cinzel">{s.name}</span>
                    <span className="gp-shanmata__god font-serif">{s.god} as Supreme</span>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
            <p className="gp-note font-serif">
              Of the six streams of the Shanmata, the <strong>Ganapatyam</strong> stream is
              highlighted here as the focus of this course.
            </p>
          </ScrollReveal>

          <div className="gp-granthas">
            <ScrollReveal>
              <motion.div className="gp-grantha" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                <span className="gp-grantha__label font-cinzel">Main Grantha</span>
                <h4 className="gp-grantha__name font-cinzel">Ganesha Purana</h4>
                <p className="gp-grantha__text font-serif">
                  A primary scriptural source of the Ganapatya tradition, traditionally
                  associated with the worship and spiritual understanding of Ganapati.
                </p>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <motion.div className="gp-grantha" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                <span className="gp-grantha__label font-cinzel">Main Grantha</span>
                <h4 className="gp-grantha__name font-cinzel">Mudgala Purana</h4>
                <p className="gp-grantha__text font-serif">
                  Another essential scriptural source, known for its detailed descriptions
                  of the many forms of Ganapati and the obstacles they are traditionally
                  associated with overcoming.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="gp-scripture-card">
              <span className="gp-scripture-card__mark" aria-hidden="true">❝</span>
              <p className="gp-scripture-card__sanskrit font-serif">
                Gananam Tva Ganapati Gum Havamahe
              </p>
              <p className="gp-scripture-card__source font-cinzel">Rig Veda 2.23.1</p>
              <p className="gp-scripture-card__meaning font-serif">
                “We call you, Lord of the Ganas.”
              </p>
              <p className="gp-scripture-card__note font-serif">
                An important traditional reference associated with Ganapati. This verse is
                presented as a scriptural foundation; it is not overstated as conclusively
                proving every later theological claim of the Ganapatya tradition.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="gp-belief">
              <span className="gp-belief__label font-cinzel">Main Belief</span>
              <p className="gp-belief__text font-serif">
                In Ganapatya tradition, Ganapati is honoured as the Supreme Reality — the
                Parabrahman from whom all creation arises. This is a theological affirmation
                of the Ganapatya sampradaya, offered respectfully alongside the other paths
                of the Shanmata.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PART 2 — SEVEN SCRIPTURAL PRAMANAS  (MAROON)
      ════════════════════════════════════════════════════ */}
      <section id="seven-pramanas" className="gp-section gp-section--maroon">
        <div className="gp-container">
          <ScrollReveal className="gp-section__head gp-section__head--light">
            <span className="gp-eyebrow gp-eyebrow--gold">PART 2</span>
            <h2 className="gp-section__title font-cinzel">Seven Scriptural Pramanas</h2>
            <p className="gp-section__subtitle font-serif">
              Scriptural foundations traditionally associated with Ganapatyam
            </p>
            <Ornament />
          </ScrollReveal>

          {/* 1 · VEDA PRAMANA */}
          <div className="gp-pramana">
            <ScrollReveal>
              <h3 className="gp-pramana__title font-cinzel">
                <span className="gp-pramana__num">1</span> Veda Pramana
              </h3>
              <div className="gp-table-wrap">
                <table className="gp-table">
                  <thead>
                    <tr>
                      <th>Veda / Text</th>
                      <th>Traditional Reference</th>
                    </tr>
                  </thead>
                  <tbody>
                    {VEDA_TABLE.map((r) => (
                      <tr key={r.text}>
                        <td><strong>{r.text}</strong></td>
                        <td>{r.ref}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="gp-callout">
                <span className="gp-callout__label font-cinzel">Importance</span>
                <p className="gp-callout__text font-serif">
                  The traditional concept of <strong>Prathama Pujya</strong> holds that
                  Ganapati is worshipped first in any auspicious undertaking, removing
                  obstacles before the other forms of the divine are invoked.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* 2 · PURANA PRAMANA */}
          <div className="gp-pramana">
            <ScrollReveal>
              <h3 className="gp-pramana__title font-cinzel">
                <span className="gp-pramana__num">2</span> Purana Pramana
              </h3>
              <h4 className="gp-pramana__sub font-cinzel">Ganesha Purana &amp; Mudgala Purana</h4>
              <div className="gp-grid gp-grid--2">
                <div className="gp-card gp-card--deep">
                  <span className="gp-card__label font-cinzel">Ganesha Purana</span>
                  {GANESHA_PURANA_REF.map((r) => (
                    <div key={r.ref} className="gp-ref-row">
                      <span className="gp-ref-row__ref font-cinzel">{r.ref}</span>
                      <p className="gp-ref-row__text font-serif">{r.text}</p>
                    </div>
                  ))}
                </div>
                <div className="gp-card gp-card--deep">
                  <span className="gp-card__label font-cinzel">Four Avatars</span>
                  <div className="gp-avatars">
                    {FOUR_AVATARS.map((a) => (
                      <div key={a.name} className="gp-avatar">
                        <span className="gp-avatar__name font-cinzel">{a.name}</span>
                        <span className="gp-avatar__yuga font-serif">{a.yuga}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* 3 · MUDGALA — EIGHT FORMS */}
          <div className="gp-pramana">
            <ScrollReveal>
              <h3 className="gp-pramana__title font-cinzel">
                <span className="gp-pramana__num">3</span> Mudgala Purana — Eight Forms
              </h3>
              <p className="gp-pramana__subtitle font-serif">
                Traditionally associated with overcoming eight inner obstacles
              </p>
              <div className="gp-eight">
                {EIGHT_FORMS.map((f, i) => (
                  <ScrollReveal key={f.name} delay={(i % 4) * 0.05}>
                    <motion.div
                      className={`gp-eight__card${i % 2 === 1 ? ' gp-eight__card--alt' : ''}`}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <span className="gp-eight__num font-cinzel">{String(i + 1).padStart(2, '0')}</span>
                      <h5 className="gp-eight__name font-cinzel">{f.name}</h5>
                      <span className="gp-eight__obstacle font-cinzel">{f.obstacle}</span>
                      <p className="gp-eight__desc font-serif">{f.desc}</p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* 4 · BRAHMA VAIVARTA PURANA */}
          <div className="gp-pramana">
            <ScrollReveal>
              <h3 className="gp-pramana__title font-cinzel">
                <span className="gp-pramana__num">4</span> Brahma Vaivarta Purana
              </h3>
              <div className="gp-scripture-card gp-scripture-card--light">
                <span className="gp-scripture-card__mark" aria-hidden="true">❝</span>
                <p className="gp-scripture-card__sanskrit font-serif">
                  Traditional Puranic Account
                </p>
                <p className="gp-scripture-card__meaning font-serif">
                  The Brahma Vaivarta Purana contains a traditional account concerning
                  Krishna's worship of Ganapati before the Rasa Lila. This is presented as
                  a traditional Puranic account rather than a historical record.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* 5 · SHIVA PURANA */}
          <div className="gp-pramana">
            <ScrollReveal>
              <h3 className="gp-pramana__title font-cinzel">
                <span className="gp-pramana__num">5</span> Shiva Purana
              </h3>
              <div className="gp-scripture-card gp-scripture-card--light">
                <span className="gp-scripture-card__mark" aria-hidden="true">❝</span>
                <p className="gp-scripture-card__sanskrit font-serif">
                  Traditional Scriptural Account
                </p>
                <p className="gp-scripture-card__meaning font-serif">
                  The Shiva Purana contains traditional statements concerning the
                  relationship between Shiva and Maha Ganapati. It is presented here as a
                  traditional scriptural account within the Puranic corpus.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* 6 · TANTRA PRAMANA */}
          <div className="gp-pramana">
            <ScrollReveal>
              <h3 className="gp-pramana__title font-cinzel">
                <span className="gp-pramana__num">6</span> Tantra Pramana
              </h3>
              <div className="gp-table-wrap">
                <table className="gp-table">
                  <thead>
                    <tr>
                      <th>Tantra</th>
                      <th>Traditional Teaching</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TANTRA_TABLE.map((r) => (
                      <tr key={r.tantra}>
                        <td><strong>{r.tantra}</strong></td>
                        <td>{r.teaching}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>

          {/* 7 · ADI SHANKARACHARYA */}
          <div className="gp-pramana gp-pramana--shankara">
            <ScrollReveal>
              <h3 className="gp-pramana__title font-cinzel">
                <span className="gp-pramana__num">7</span> Adi Shankaracharya &amp; Ganapatyam
              </h3>
              <p className="gp-pramana__subtitle font-serif">
                The following works are traditionally attributed to Adi Shankaracharya:
              </p>
              <div className="gp-shankara">
                {['Ganapati Atharva Shirsha Bhashya', 'Ganesha Pancharatnam', 'Ganesha Bhujangam'].map((w, i) => (
                  <ScrollReveal key={w} delay={i * 0.05}>
                    <motion.div className="gp-shankara__item" whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                      <span className="gp-shankara__num font-cinzel">{i + 1}</span>
                      <span className="gp-shankara__name font-cinzel">{w}</span>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
              <div className="gp-callout gp-callout--gold">
                <span className="gp-callout__label font-cinzel">Ganapati as Saguna Parabrahman</span>
                <p className="gp-callout__text font-serif">
                  In Ganapatya theology, Ganapati is regarded as the <strong>Saguna
                  Parabrahman</strong> — the Supreme Reality conceived with attributes and form,
                  accessible to the seeker through devotion and worship. These attributions are
                  traditional; historically verified authorship is a separate scholarly question.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* GANAPATI ATHARVA SHIRSHA */}
          <div className="gp-atharva">
            <ScrollReveal className="gp-section__head gp-section__head--light">
              <span className="gp-eyebrow gp-eyebrow--gold">A Central Text</span>
              <h2 className="gp-section__title font-cinzel">Ganapati Atharva Shirsha</h2>
              <p className="gp-section__subtitle font-serif">
                A central text in Ganapatya tradition
              </p>
              <Ornament />
            </ScrollReveal>
            <div className="gp-atharva__grid">
              {ATHARVA_SHIRSHA_VERSES.map((v, i) => (
                <ScrollReveal key={v.no} delay={(i % 2) * 0.08}>
                  <motion.div className="gp-verse" whileHover={{ y: -5 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                    <span className="gp-verse__no font-cinzel">{v.no}</span>
                    <p className="gp-verse__text font-serif">{v.text}</p>
                    <p className="gp-verse__meaning font-serif">{v.meaning}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="gp-centerpiece">
                <span className="gp-centerpiece__top font-cinzel">OMKARA • GANAPATI</span>
                <p className="gp-centerpiece__main font-serif">
                  Omkar is Ganapati, Ganapati is Omkar
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          IMAGE DIVIDER — BALA GANAPATHI  (CREAM)
      ════════════════════════════════════════════════════ */}
      <section className="gp-section gp-section--cream gp-section--divider">
        <div className="gp-container">
          <ScrollReveal>
            <figure className="gp-divider-img">
              <div className="gp-divider-img__frame">
                <img
                  src={balaGanapathiImg}
                  alt="Bala Ganapati — youthful form of Lord Ganapati"
                  className="gp-divider-img__img"
                  loading="lazy"
                />
              </div>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PART 3 — PRACTICE OF GANAPATYAM  (MAROON)
      ════════════════════════════════════════════════════ */}
      <section id="practice" className="gp-section gp-section--maroon">
        <div className="gp-container">
          <ScrollReveal className="gp-section__head gp-section__head--light">
            <span className="gp-eyebrow gp-eyebrow--gold">PART 3</span>
            <h2 className="gp-section__title font-cinzel">Practice of Ganapatyam</h2>
            <p className="gp-section__subtitle font-serif">
              Traditional practices associated with Ganapatya worship
            </p>
            <Ornament />
          </ScrollReveal>

          <div className="gp-timeline">
            {PRACTICE_STEPS.map((s) => (
              <ScrollReveal key={s.step}>
                <div className="gp-step">
                  <div className="gp-step__marker">
                    <span className="gp-step__num font-cinzel">{s.step}</span>
                  </div>
                  <motion.div
                    className="gp-step__card"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <div className="gp-step__head">
                      <h4 className="gp-step__title font-cinzel">{s.title}</h4>
                      <span className="gp-step__scripture font-cinzel">{s.scripture}</span>
                    </div>
                    <p className="gp-step__text font-serif">{s.text}</p>
                    {s.step === 8 && (
                      <div className="gp-mantra-box">
                        <p className="gp-mantra-box__label font-cinzel">Main Mantra</p>
                        <p className="gp-mantra-box__text font-serif">Om Gam Ganapataye Namah</p>
                        <p className="gp-mantra-box__meta font-serif">Traditional count: 108</p>
                        <p className="gp-mantra-box__label gp-mantra-box__label--maha font-cinzel">Maha Mantra</p>
                        <p className="gp-mantra-box__text font-serif">Om Shri Maha Ganapataye Namah</p>
                        <p className="gp-mantra-box__meta font-serif">Traditional count: 1008 on Chaturthi</p>
                      </div>
                    )}
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* TYPES OF SADHANA */}
          <div className="gp-sadhana">
            <ScrollReveal>
              <h3 className="gp-block__title gp-block__title--light font-cinzel">Types of Sadhana</h3>
            </ScrollReveal>
            <div className="gp-sadhana__grid">
              {SADHANA_TYPES.map((s, i) => (
                <ScrollReveal key={s.type} delay={i * 0.08}>
                  <motion.div className="gp-sadhana__card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                    <span className="gp-sadhana__type font-cinzel">{s.type}</span>
                    <h4 className="gp-sadhana__form font-cinzel">{s.form}</h4>
                    <p className="gp-sadhana__assoc font-serif">{s.association}</p>
                    <p className="gp-sadhana__text font-serif">{s.text}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <div className="gp-warning">
                <span className="gp-warning__icon" aria-hidden="true">⚠</span>
                <p className="gp-warning__text font-serif">
                  Advanced tantric practices should be undertaken only under appropriate
                  traditional guidance from a qualified Guru.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PART 4 — NINE IMPORTANCES  (CREAM)
      ════════════════════════════════════════════════════ */}
      <section id="nine-importance" className="gp-section gp-section--cream">
        <div className="gp-container">
          <ScrollReveal className="gp-section__head">
            <span className="gp-eyebrow">PART 4</span>
            <h2 className="gp-section__title font-cinzel">Why Is Ganapati Important?</h2>
            <p className="gp-section__subtitle font-serif">
              Nine traditional understandings of Ganapati's importance
            </p>
            <Ornament />
          </ScrollReveal>

          <div className="gp-importance">
            {NINE_IMPORTANCE.map((item, i) => (
              <ScrollReveal key={item.num} delay={(i % 3) * 0.05}>
                <motion.div
                  className={`gp-importance__card${i % 2 === 1 ? ' gp-importance__card--alt' : ''}`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <span className="gp-importance__num font-cinzel">{String(item.num).padStart(2, '0')}</span>
                  <h4 className="gp-importance__title font-cinzel">{item.title}</h4>
                  <p className="gp-importance__text font-serif">{item.text}</p>
                  {item.scripture && (
                    <span className="gp-importance__scripture font-cinzel">{item.scripture}</span>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          IMAGE DIVIDER — SRI GANAPATI  (CREAM)
      ════════════════════════════════════════════════════ */}
      <section className="gp-section gp-section--cream gp-section--divider">
        <div className="gp-container">
          <ScrollReveal>
            <figure className="gp-divider-img">
              <div className="gp-divider-img__frame">
                <img
                  src={ganapathyaImg}
                  alt="Sri Ganapati — complete devotional portrait"
                  className="gp-divider-img__img"
                  loading="lazy"
                />
              </div>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PART 5 — WHY GANAPATYAM TODAY  (MAROON)
      ════════════════════════════════════════════════════ */}
      <section id="today" className="gp-section gp-section--maroon">
        <div className="gp-container">
          <ScrollReveal className="gp-section__head gp-section__head--light">
            <span className="gp-eyebrow gp-eyebrow--gold">PART 5</span>
            <h2 className="gp-section__title font-cinzel">Why Ganapatyam Is Relevant Today</h2>
            <p className="gp-section__subtitle font-serif">
              Traditional perspectives for the Kali Yuga
            </p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="gp-mantra-hero">
              <p className="gp-mantra-hero__sanskrit font-serif">
                Kali Yuge Ganapati eva Pratyaksha Siddhi Data
              </p>
              <p className="gp-mantra-hero__note font-serif">
                In the Kali Yuga, Ganapati is traditionally regarded as the giver of direct
                (pratyaksha) attainment (siddhi).
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="gp-table-wrap">
              <table className="gp-table">
                <thead>
                  <tr>
                    <th>Today's Concern</th>
                    <th>Traditional Ganapati Form</th>
                    <th>Traditional Reference</th>
                  </tr>
                </thead>
                <tbody>
                  {TODAY_TABLE.map((r) => (
                    <tr key={r.concern}>
                      <td><strong>{r.concern}</strong></td>
                      <td>{r.form}</td>
                      <td>{r.ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="gp-disclaimer">
              <p className="gp-disclaimer__text font-serif">
                These are traditionally associated associations within the tradition. They are
                not presented as guaranteed outcomes — the tradition does not promise that a
                particular practice will cure disease, eliminate anxiety, obtain a job,
                control another person, or remove black magic.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PART 6 — ESSENCE  (CREAM)
      ════════════════════════════════════════════════════ */}
      <section id="essence" className="gp-section gp-section--cream">
        <div className="gp-container">
          <ScrollReveal className="gp-section__head">
            <span className="gp-eyebrow">PART 6</span>
            <h2 className="gp-section__title font-cinzel">Essence of Ganapatyam</h2>
            <Ornament />
          </ScrollReveal>

          <div className="gp-essence">
            <ScrollReveal>
              <div className="gp-essence__item">
                <span className="gp-essence__source font-cinzel">Ganesha Purana — Traditional Reference</span>
                <p className="gp-essence__sanskrit font-serif">Omkarah Prathamo Devo Ganesha Parabrahma</p>
                <p className="gp-essence__meaning font-serif">
                  Omkara is first; Ganesha is identified with that Supreme Reality in Ganapatya tradition.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="gp-essence__item">
                <span className="gp-essence__source font-cinzel">Ganapati Atharva Shirsha</span>
                <p className="gp-essence__sanskrit font-serif">Evam Yo Veda Sa Sarva Vighnair Muchyate</p>
                <p className="gp-essence__meaning font-serif">
                  The text traditionally associates knowledge of Ganapati with freedom from obstacles.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="gp-essence__item">
                <span className="gp-essence__source font-cinzel">Mudgala Purana</span>
                <p className="gp-essence__sanskrit font-serif">Ekoham Bahudha Jatah</p>
                <p className="gp-essence__meaning font-serif">
                  “I am One, yet I manifest as many.” The 8, 12, 32, 64 and 108 forms are presented as
                  traditional manifestations of the one reality.
                </p>
                <div className="gp-forms">
                  {GLP_FORMS.map((f) => (
                    <div key={f.count} className="gp-forms__chip font-cinzel">
                      {f.count} {f.label}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="gp-closing">
              <span className="gp-closing__mark" aria-hidden="true">❝</span>
              <blockquote className="gp-closing__quote font-serif">
                “Shaiva tradition places Shiva at the center, Vaishnava tradition places Vishnu
                at the center, while Ganapatya tradition places Ganapati at the center as the
                Supreme Reality.”
              </blockquote>
              <p className="gp-closing__line font-cinzel">
                Without Ganapati, no Siddhi, no Buddhi, no Moksha.
              </p>
              <p className="gp-closing__note font-serif">
                Presented as the theological perspective of Ganapatya tradition.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FOOTER CTA  (MAROON)
      ════════════════════════════════════════════════════ */}
      <section className="gp-cta">
        <div className="gp-cta__geo" aria-hidden="true" />
        <ScrollReveal>
          <div className="gp-cta__box">
            <span className="gp-cta__corner gp-cta__corner--tl" aria-hidden="true">✦</span>
            <span className="gp-cta__corner gp-cta__corner--tr" aria-hidden="true">✦</span>
            <span className="gp-cta__corner gp-cta__corner--bl" aria-hidden="true">✦</span>
            <span className="gp-cta__corner gp-cta__corner--br" aria-hidden="true">✦</span>

            <span className="gp-cta__badge">🪷 Begin Your Journey</span>
            <h2 className="gp-cta__heading font-cinzel">
              Begin Your Journey Into<br />
              <span className="gp-cta__heading-gold">Ganapatyam</span>
            </h2>
            <div className="gp-cta__divider">
              <span className="gp-cta__divider-line" />
              <span className="gp-cta__divider-lotus">✿</span>
              <span className="gp-cta__divider-line" />
            </div>
            <p className="gp-cta__body font-serif">
              Explore the philosophy, scriptures, worship traditions and spiritual practices
              associated with Ganapati.
            </p>
            <div className="gp-cta__btns">
              <GoldenButton
                label="Back to Courses"
                size="lg"
                onClick={() => navigate('/courses')}
              />
              <GoldenButton
                label="Explore Other Courses"
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
