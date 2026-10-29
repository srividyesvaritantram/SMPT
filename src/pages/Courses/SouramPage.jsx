import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { FooterSection } from '../Home/HomeSections.jsx';
import heroImg from '../../assets/surya.jpeg';
import surya2Img from '../../assets/surya2.jpeg';
import surya3Img from '../../assets/surya3.jpeg';
import surya4Img from '../../assets/surya4.jpeg';
import surya5Img from '../../assets/surya5.jpeg';
import logoImg from '../../assets/logo.png';
import './SouramPage.css';

const NAV_SECTIONS = [
  { id: 'what-is', label: 'What is Sauram?' },
  { id: 'pramanas', label: '6 Pramanas' },
  { id: 'upasana', label: '5 Classifications' },
  { id: 'yantra', label: 'Yantra & Mantra' },
  { id: 'importance', label: 'Why Today' },
  { id: 'relations', label: 'Divine Relation' },
  { id: 'essence', label: 'Essence & Practice' },
];

const VEDA_TABLE = [
  { veda: 'Rig Veda 1.50 — Surya Mantra', says: '\u201CUd Utyam Jatavedasam\u201D — \u201CThe Sun, the Jatavedas, is carried by the rays to be seen by all.\u201D The rising Sun is prayed to as the visible, all-seeing divine.' },
  { veda: 'Rig Veda 3.62.10 — Gayatri Mantra', says: 'The Gayatri is offered by sage Vishvamitra to Savitar — the Sun as the impeller of all. \u201CTat Savitur Varenyam\u2026 dhiyo yo nah prachodayat\u201D — may the Sun-Guide illumine our intellects.' },
  { veda: 'Rig Veda 1.89.10 — Aditi & the Adityas', says: '\u201CAditir Dyauh, Aditir Antariksham\u201D — Aditi is heaven, Aditi is the mid-region. Rig Veda names Aditi the mother of the Adityas — the forms of the Sun.' },
  { veda: 'Yajur Veda — Eye of the Universe', says: 'The Yajur Veda declares Surya \u201CSuryo Jyotisham Jyotih\u201D — the light of all lights, the eye of the world that witnesses all actions.' },
  { veda: 'Atharva Veda — Prayer for Health', says: 'The Atharva Veda prays to the Sun for long life, clear sight, and the dispelling of darkness and disease from the body.' },
  { veda: 'Gayatri / Savitri Upanishad', says: 'The Saura Upanishadic tradition meditates on the golden person within the solar orb as Brahman — the Sun seen from outside is its body, the Self is its light.' },
];

const PURANA_REFS = [
  { name: 'Saura Purana', detail: 'The primary scripture of the Sauram path. It instructs the worship of Surya as Brahman, the forms of the Sun, the Surya Mantra, and the rites of the Saura Agama. One of the sacred texts traditionally dedicated to the Sun.' },
  { name: 'Bhavishya Purana', detail: 'Preserves the Savitri Mantra tradition and the daily worship of the Sun at dawn. It promises that he who worships Surya with the Gayatri shines like the Sun — the Sun is honoured as the creator of the day and the witness of all deeds.' },
  { name: 'Samba Purana', detail: 'Samba, son of Krishna, is said to have worshipped Surya in penance and to have built the first great Surya temples. This text details temple worship of the Sun, the Surya Murti and the twelve Adityas.' },
  { name: 'Vishnu Purana', detail: 'Lists the twelve Adityas as forms of one divine being, and describes the chariot of the Sun drawn by seven horses — the radiant wheel of time that measures the day, the season and the year of all creation.' },
];

const ITIHASA_REFS = [
  { name: 'Ramayana — Surya Vamsha', detail: 'Rama is born in the Surya Vamsha — the Solar dynasty. Before the final battle with Ravana, Sage Agastya teaches Rama the Aditya Hridaya Stotra praising the twelve names of the Sun (Valmiki Ramayana, Yuddha Kanda 107).' },
  { name: 'Bhagavad Gita 15.12', detail: 'Krishna says: \u201CYad Aditya-gatan Tejo\u2026 tat tejo viddhi mamakam\u201D — the light that shines in the Sun is My light. The Sun is called the eye and the lamp of the universe.' },
  { name: 'Mahabharata — Karna', detail: 'Karna, the greatest of Surya\u2019s devotees, prays to the setting Sun every evening through the Mahabharata. Surya grants him the divine Kavacha and Kundala — the armour that could not be pierced (Vana Parva).' },
  { name: 'Mahabharata — Surya\u2019s Chariot', detail: 'The epic describes Surya\u2019s chariot drawn by seven horses — the seven colours and the seven metres of the Veda — carrying time itself across the sky from east to west.' },
];

const TANTRA_REFS = [
  { name: 'Saura Agama', detail: 'The ritual code of the Sun temples — the Surya Murti facing East, the Arka flower, the red lotus and the daily Arghya offered at dawn. The Saura Agama governs the great solar shrines such as Konark and Modhera.' },
  { name: 'Surya Tantra', detail: 'Meditation on the Surya Mandala — the twelve-rayed wheel of the morning Sun. The Sun is interpreted as the Self within; the inner Sun is given the name Tvam-eva — \u201CThou art That.\u201D' },
  { name: 'Surya Beeja — Seed Syllable', detail: 'The sacred single syllable of the Sun is Hram. Combined with Om and the name of Surya it forms the Surya Maha-Mantra — the central formula of the Surya Tantra.' },
  { name: 'Aru — The Six Rays', detail: 'Traditionally the Sun is meditated upon with six rays (Aru) governing the six seasons and the six centres of life in the body — purifying perception, breath and vitality.' },
];

const SCIENCE_ROWS = [
  { field: 'Source of All Energy', says: 'Every form of energy on Earth — food, wood, oil, wind, water — traces back to sunlight. The shastras call it Prana; the sciences call it photosynthesis. Both point to one truth: the Sun is the giver of life.' },
  { field: 'Vitamin D & the Body Clock', says: 'Sunlight produces Vitamin D and sets the circadian rhythm — the biological clock that governs sleep, immunity and mood. Modern medicine confirms what the Gayatri assumed: the Sun rules our health.' },
  { field: 'Solar Science', says: 'Astronomy measures the Sun as the beating heart of the solar system, holding 99.8% of its mass. The ancient seers had no telescopes — they saw the same Sun as Brahman through inner vision.' },
  { field: 'Ancient Accuracy', says: 'The Surya Siddhanta computed the length of the year, the seasons and the eclipses with remarkable precision. Surya upasana is not superstition — it is reverence for the physical source of every life.' },
];

const THREE_FORMS = [
  { form: 'Udaya Aditya — Rising Sun', brahma: 'Brahma', work: 'Creation', practice: 'Morning worship — Surya Arghya with water, Gayatri japa, prostration to the rising Sun.' },
  { form: 'Madhyahna Aditya — Midday Sun', brahma: 'Vishnu', work: 'Preservation', practice: 'Midday puja — the Sun at full power sustains the world and the vital fire of the body.' },
  { form: 'Astamaya Aditya — Setting Sun', brahma: 'Shiva / Rudra', work: 'Dissolution', practice: 'Evening prayer — surrender of the day; the setting Sun gathers all things into rest.' },
];

const DVADASA_ADITYAS = [
  { name: 'Amshuman', meaning: 'The Rayed One', role: 'All light is His' },
  { name: 'Aryaman', meaning: 'The Noble Companion', role: 'Patronage, friendship, honour' },
  { name: 'Indra', meaning: 'Divine Power', role: 'Strength, kingship, victory' },
  { name: 'Tvashta', meaning: 'The Divine Craftsman', role: 'Creator of living forms' },
  { name: 'Varuna', meaning: 'Cosmic Order (Rta)', role: 'Waters and universal law' },
  { name: 'Dhata', meaning: 'The Supporter', role: 'Upholder of all worlds' },
  { name: 'Mitra', meaning: 'The Friendly Light', role: 'Harmony and alliance' },
  { name: 'Parjanya', meaning: 'The Rain-God', role: 'Nourishment from the sky' },
  { name: 'Vivasvan', meaning: 'The Shining One', role: 'The dawning Sun' },
  { name: 'Pushan', meaning: 'The Nourisher', role: 'Growth, cattle, journeys' },
  { name: 'Bhaga', meaning: 'The Fortunate', role: 'Bliss and prosperity' },
  { name: 'Vishnu', meaning: 'The All-Pervading', role: 'Preserver of all' },
];

const SAMPRADAYAS = [
  { name: 'Northern Saura Sampradaya', detail: 'The grand solar temples — Konark (Surya Deula), Modhera, Martand in Kashmir and Biranchi Narayan in Odisha. Gayatri is chanted at sunrise; the great wheel of Konark is the Surya Chandrasa — the turning year of Brahman realised in stone. The Saurya Agama governs the temple.' },
  { name: 'Southern Saura Sampradaya', detail: 'Surya stands at the centre of Navagraha and Panchayatana worship. The Navagraha temple at Suryanar Kovil, Kumbakonam, and the solar shrines of Tamil Nadu honour the Sun as the king of planets. Aruna — the dawn-charioteer — is chanted at sunrise.' },
];

const FOUR_GOALS = [
  { num: 'I', goal: 'Moksha — Liberation', way: 'Brahma-Surya Jnana', detail: 'Worship the Sun as Brahman — the Self of all. The Saura Purana and the Gayatri Upanishad teach meditation on the golden person in the orb as liberation itself.', shastra: 'Saura Purana' },
  { num: 'II', goal: 'Health & Long Life', way: 'Surya Namaskara + Aditya Mantra', detail: 'Twelve prostrations at dawn and Japa of Om Suryaya Namah restore the vital fire, sharpen the eyes and lengthen life.', shastra: 'Yoga + Ayurveda' },
  { num: 'III', goal: 'Prosperity & Authority', way: 'Raja-Surya Puja', detail: 'Surya is the king of planets. Puja on Sunday grants command, status, success in administration and strength of speech.', shastra: 'Jyotisha' },
  { num: 'IV', goal: 'Victory & Renown', way: 'Aditya Hridaya Stotra', detail: 'Recited before battle, the Aditya Hridaya granted Rama victory. In daily life it grants courage, fame and the defeat of inner enemies.', shastra: 'Valmiki Ramayana' },
];

const HORSES = [
  { num: '1', color: 'Red', chakra: 'Muladhara', quality: 'Stability & Grounding' },
  { num: '2', color: 'Orange', chakra: 'Swadhisthana', quality: 'Creativity & Vitality' },
  { num: '3', color: 'Yellow', chakra: 'Manipura', quality: 'Power & Will' },
  { num: '4', color: 'Green', chakra: 'Anahata', quality: 'Love & Compassion' },
  { num: '5', color: 'Blue', chakra: 'Vishuddha', quality: 'Truth & Speech' },
  { num: '6', color: 'Indigo', chakra: 'Ajna', quality: 'Wisdom & Insight' },
  { num: '7', color: 'Violet / White', chakra: 'Sahasrara', quality: 'Liberation & Bliss' },
];

const IMPORTANCE_ROWS = [
  { num: 'I', point: 'Pratyaksha — The Visible God', detail: 'The only major deity you can see with your own eyes every day. No image is required — darshan is guaranteed by dawn.', shastra: 'Sanatana tradition' },
  { num: 'II', point: 'Gayatri — Mother of Mantras', detail: 'The foremost mantra of the Vedas is addressed to Savitar, the Sun — the divine impeller of the intellect.', shastra: 'Rig Veda 3.62.10' },
  { num: 'III', point: 'Health & Vitality', detail: 'Sunlight is the source of physical vitality; Surya Namaskara opens the body, breath and mind to prana.', shastra: 'Ayurveda + Yoga' },
  { num: 'IV', point: 'Time & Jyotisha', detail: 'The Sun rules the calendar, the seasons, the planets and the soul — Surya is Atmakaraka, the significator of the Self.', shastra: 'Surya Siddhanta' },
  { num: 'V', point: 'Energy & Life', detail: 'All life-energy on Earth originates from the Sun — seen in the Veda as Prana itself and confirmed by modern science.', shastra: 'Modern Science' },
  { num: 'VI', point: 'Unity of the Six Paths', detail: 'Surya is honoured in every sampradaya — as Vishnu of the solar orb, as Shiva in the setting sun, as the Gayatri-Shakti of all mantras.', shastra: 'Shanmata' },
];

const DIVINE_RELATIONS = [
  { name: 'Vishnu', relation: 'Solar Eye', meaning: 'Surya Narayana — Vishnu dwells within the solar orb; Krishna says the light of the Sun is His light. Rama of the Surya Vamsha carries the solar line into the Ramayana.' },
  { name: 'Shiva', relation: 'Solar Rest', meaning: 'The setting Sun is meditated upon as the form of Rudra — the one who gathers all things into rest. The Samba Purana links Shiva and Surya directly through Samba\u2019s penance.' },
  { name: 'Shakti', relation: 'Solar Power', meaning: 'Gayatri is the mother of the mantras — the Shakti of the Sun. Savitri is the feminine divine who illumines the mind. Surya + Shakti = light and power together.' },
  { name: 'Parabrahman', relation: 'One Light', meaning: 'Sauram says the Sun is Brahman; Vaishnavam sees Vishnu in the orb; Shaivam sees Shiva; Shaktam sees the Goddess; Kaumaram sees the fire of the Sun. One Sun — one Self — seen through many forms.' },
];

const PILLARS = [
  { label: 'Pratyaksha', title: 'Direct Vision', text: 'The Sun is beheld daily — worship begins with seeing. Sauram\u2019s first pillar is darshan of the visible Brahman.' },
  { label: 'Gayatri', title: 'Sacred Sound', text: 'The Gayatri mantra is the sound-body of the Sun. Japa at sunrise tunes the mind to solar intelligence.' },
  { label: 'Surya Namaskara', title: 'Sacred Action', text: 'Twelve prostrations join body, breath and devotion — the Sun is greeted by the whole being.' },
];

const PRACTICAL = [
  { label: 'Morning', title: 'Surya Arghya + Gayatri', text: '<em>Om Suryaya Namah</em> — 108 times at sunrise, with water offered to the rising Sun. Gayatri japa — 10 times.' },
  { label: 'Sunday', title: 'Surya\u2019s Day', text: 'Optional fast on Sunday; recite the Aditya Hridaya Stotra; offer red flowers, red sandal and water; wear red or orange — traditional.' },
  { label: 'Evening', title: 'Thanksgiving', text: 'Offer gratitude to the setting Sun; one reading of the Aditya Hridaya; sleep early — the solar rhythm heals.' },
];

function Ornament() {
  return (
    <div className="sr-orn" aria-hidden="true">
      <span className="sr-orn__line" />
      <span className="sr-orn__diamond">✦</span>
      <span className="sr-orn__line" />
    </div>
  );
}

function FramedFigure({ src, alt, caption, className = '' }) {
  return (
    <figure className={`sr-figure${className ? ` ${className}` : ''}`}>
      <div className="sr-figure__frame">
        <span className="sr-figure__corner sr-figure__corner--tl" aria-hidden="true">✦</span>
        <span className="sr-figure__corner sr-figure__corner--br" aria-hidden="true">✦</span>
        <img src={src} alt={alt} className="sr-figure__img" loading="lazy" draggable="false" />
      </div>
      {caption && <figcaption className="sr-figure__caption font-serif">{caption}</figcaption>}
    </figure>
  );
}

export default function SouramPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Souram / Sauram | Complete Shastra, Philosophy & Sadhana';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      'content',
      'Explore Souram / Sauram — the 5th path of Sanatana Dharma where Surya / the Sun is Parabrahman. Complete shastra, 6 Pramanas, 12 Adityas, Surya Yantra, Gayatri and daily sadhana.'
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
    <div className="sr-page">
      <Navbar />

      {/* ══════════════ HERO ══════════════ */}
      <section className="sr-hero">
        <div className="sr-hero__bg" aria-hidden="true" />
        <div className="sr-hero__inner">
          <div className="sr-hero__content">
            <motion.span
              className="sr-hero__eyebrow"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              SAURAM · SURYA UPASANA · ADITYA · GAYATRI · SURYA TANTRA
            </motion.span>

            <motion.h1
              className="sr-hero__title font-cinzel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              SOURAM / SAURAM / SHOURAM
            </motion.h1>

            <motion.p
              className="sr-hero__subtitle font-cinzel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              5th Main Path of Sanatana Dharma — Where Surya / Sun is Parabrahman
            </motion.p>

            <motion.p
              className="sr-hero__tagline font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              The Oldest Visible God — Complete Shastra Explanation
            </motion.p>

            <motion.div
              className="sr-hero__divider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <span className="sr-hero__divider-line" />
              <img src={logoImg} alt="" className="sr-hero__divider-om" />
              <span className="sr-hero__divider-line" />
            </motion.div>

            <motion.p
              className="sr-hero__intro font-serif"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              You asked <strong>Shouram</strong> — In Shastra its real name is <strong>Sauram</strong>. Saura = Of Surya. Surya = Sun. This is the <strong>5th of 6 main paths</strong>: Ganapatyam, Vaishnavam, Shaivam, Shaktam, Kaumaram, Sauram. Only Sauram God you can see daily with eyes.
            </motion.p>

            <motion.span
              className="sr-hero__badge font-serif"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72 }}
            >
              🪷 Souram · Surya Upasana · Aditya · Gayatri · Surya Tantra
            </motion.span>

            <motion.div
              className="sr-hero__btn"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.78 }}
            >
              <GoldenButton
                label="Explore Sauram"
                size="lg"
                onClick={() => scrollToId('what-is')}
              />
            </motion.div>
          </div>

          <motion.div
            className="sr-hero__art"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="sr-hero__halo" aria-hidden="true" />
            <figure className="sr-hero__frame">
              <img
                src={heroImg}
                alt="Surya — the radiant Sun God, Parabrahman of the Sauram tradition"
                className="sr-hero__img"
                loading="eager"
                draggable="false"
              />
            </figure>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ BACK LINK ══════════════ */}
      <div className="sr-top-back">
        <button type="button" className="sr-top-back__btn" onClick={() => navigate('/courses')}>
          ← Back to Courses
        </button>
      </div>

      {/* ══════════════ CONTENTS NAV ══════════════ */}
      <nav className="sr-nav" aria-label="Course contents">
        <div className="sr-nav__inner">
          {NAV_SECTIONS.map((s) => (
            <button key={s.id} type="button" className="sr-nav__item" onClick={() => scrollToId(s.id)}>
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ══════════════ 1 — WHAT IS SAURAM? ══════════════ */}
      <section id="what-is" className="sr-section sr-section--warm">
        <div className="sr-container">
          <ScrollReveal className="sr-section__head">
            <span className="sr-eyebrow">SECTION 1 · THE OPENING QUESTION</span>
            <h2 className="sr-section__title font-cinzel">What Is Sauram?</h2>
            <p className="sr-section__subtitle font-serif">The path of the Sun, where Surya is seen as the Supreme</p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="sr-table-wrap">
              <table className="sr-table">
                <thead>
                  <tr><th>Aspect</th><th>Explanation</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Definition</strong></td><td>Sauram = Path where Surya / Sun is Parabrahman — Supreme God. Surya is not a planet or a fire — He is the visible Brahman, the Self of all that moves and stands still.</td></tr>
                  <tr><td><strong>Root Word</strong></td><td>Saura = Of Surya. Surya = Sun. Shouram is the spoken form; the shastra name is Sauram.</td></tr>
                  <tr><td><strong>Main Mantra</strong></td><td><em>Om Suryaya Namah</em> · <em>Om Surya Devaya Namah</em> · <em>Gayatri Mantra</em> · <em>Om Hram Hrim Hraum Sah Suryaya Namah</em></td></tr>
                  <tr><td><strong>Main Goal</strong></td><td>Moksha = Surya Loka Prapti, and beyond that the realisation of the inner Sun — the Atman. The Sun seen without is the gate; the Sun felt within is the goal.</td></tr>
                  <tr><td><strong>How Old?</strong></td><td>Very old. The Rig Veda prays to the Sun in its very first hymns. The Gayatri — the mother of the Vedas — is addressed to Savitar, the Sun. Surya is the oldest continuously honoured visible deity of Sanatana Dharma.</td></tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="sr-callout" style={{ marginTop: '4px' }}>
              <span className="sr-callout__label font-cinzel">The First Principle of Sauram</span>
              <p className="sr-callout__text font-serif">
                <strong>Pratyaksha — direct vision.</strong> Every other deva is seen through faith, symbol or image. Surya is seen with open eyes every single morning. This is why the Sun is called <strong>Pratyakshe-Daivatam</strong> — the directly seen Divinity — the first darshan a human being ever receives.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '52px' }}>
            <FramedFigure
              src={surya5Img}
              alt="A radiant depiction of Surya as the visible Brahman of the Sauram tradition"
              caption="Surya — the visible Brahman; the first darshan of every morning"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 2 — SCRIPTURAL FOUNDATIONS — 6 PRAMANAS ══════════════ */}
      <section id="pramanas" className="sr-section sr-section--maroon">
        <div className="sr-container">
          <ScrollReveal className="sr-section__head">
            <span className="sr-eyebrow">SECTION 2 · SCRIPTURAL FOUNDATIONS</span>
            <h2 className="sr-section__title font-cinzel">Importance of Sauram in Scriptures — 6 Pramanas</h2>
            <p className="sr-section__subtitle font-serif">The six scriptural pillars that uphold the path of the Sun</p>
            <Ornament />
          </ScrollReveal>

          {/* ── 1. Veda Pramana ── */}
          <ScrollReveal>
            <h3 className="sr-block__title font-cinzel">1. Veda Pramana</h3>
            <div className="sr-table-wrap">
              <table className="sr-table">
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
            <h3 className="sr-block__title font-cinzel">2. Purana Pramana</h3>
            <div className="sr-grid sr-grid--2">
              {PURANA_REFS.map((p) => (
                <ScrollReveal key={p.name}>
                  <div className="sr-card">
                    <span className="sr-card__label font-cinzel">{p.name}</span>
                    <p className="sr-card__text font-serif">{p.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <div className="sr-mantra-box">
                <span className="sr-mantra-box__label font-cinzel">Supreme Declaration</span>
                <p className="sr-mantra-box__sanskrit font-serif">Aham Suryo Brahmasmi</p>
                <p className="sr-mantra-box__meaning font-serif">I am Surya, I am Brahman — the supreme declaration of the Saura tradition. The Sun is not merely a body in the sky; He is the Brahman of which the solar orb is the visible form.</p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── 3. Itihasa Pramana ── */}
          <ScrollReveal>
            <h3 className="sr-block__title font-cinzel">3. Itihasa Pramana</h3>
            <div className="sr-grid sr-grid--2">
              {ITIHASA_REFS.map((t) => (
                <ScrollReveal key={t.name}>
                  <div className="sr-card">
                    <span className="sr-card__label font-cinzel">{t.name}</span>
                    <p className="sr-card__text font-serif">{t.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* ── 4. Tantra / Saura Agama ── */}
          <ScrollReveal>
            <h3 className="sr-block__title font-cinzel">4. Tantra Shastra — Saura Agama & Surya Tantra</h3>
            <div className="sr-grid sr-grid--2">
              {TANTRA_REFS.map((t) => (
                <ScrollReveal key={t.name}>
                  <div className="sr-card">
                    <span className="sr-card__label font-cinzel">{t.name}</span>
                    <p className="sr-card__text font-serif">{t.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* ── 5. Ayurveda + Jyotisha ── */}
          <ScrollReveal>
            <h3 className="sr-block__title font-cinzel">5. Ayurveda + Jyotisha Pramana</h3>
            <div className="sr-grid sr-grid--2">
              <ScrollReveal>
                <div className="sr-card">
                  <span className="sr-card__label font-cinzel">Ayurveda</span>
                  <p className="sr-card__text font-serif">
                    Ayur means life and Veda is knowledge — Ayurveda is the science of life, and the Sun is its first light. Morning sunlight strengthens the digestive fire, immunity and eyesight; Surya rules Pitta and the power of perception. Surya Namaskara — twelve postures of prostration — opens the channels and stimulates every chakra.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <div className="sr-card">
                  <span className="sr-card__label font-cinzel">Jyotisha</span>
                  <p className="sr-card__text font-serif">
                    Surya is the king of the Navagrahas, the significator of the Atman, and the master of the calendar. The Surya Siddhanta computed the motion of the Sun with remarkable precision. Sunday is His day; solar festivals such as Makar Sankranti and Thai Pongal mark the Sun&#39;s northward journey.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* ── 6. Modern Science ── */}
          <ScrollReveal>
            <h3 className="sr-block__title font-cinzel">6. Modern Science Pramana</h3>
            <div className="sr-table-wrap">
              <table className="sr-table">
                <thead>
                  <tr><th>Field</th><th>What Science Confirms</th></tr>
                </thead>
                <tbody>
                  {SCIENCE_ROWS.map((r) => (
                    <tr key={r.field}><td><strong>{r.field}</strong></td><td>{r.says}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '40px' }}>
            <FramedFigure
              src={surya2Img}
              alt="The radiant Sun as described through the six pramanas of the Sauram tradition"
              caption="The Sun behind the six pramanas — Veda, Purana, Itihasa, Tantra, Ayurveda-Jyotisha and Science"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 3 — TYPES OF UPASANA — 5 CLASSIFICATIONS ══════════════ */}
      <section id="upasana" className="sr-section sr-section--warm">
        <div className="sr-container">
          <ScrollReveal className="sr-section__head">
            <span className="sr-eyebrow">SECTION 3 · TYPES OF UPASANA</span>
            <h2 className="sr-section__title font-cinzel">Types of Surya Upasana — 5 Classifications</h2>
            <p className="sr-section__subtitle font-serif">How the Sun has been worshipped across time, form, region, goal and energy</p>
            <Ornament />
          </ScrollReveal>

          {/* ── Classification 1: 3 Forms of Surya ── */}
          <ScrollReveal>
            <h3 className="sr-block__title font-cinzel">Classification 1 · Three Forms of Surya — According to Time</h3>
            <div className="sr-table-wrap">
              <table className="sr-table">
                <thead>
                  <tr><th>Form</th><th>Divine Face</th><th>Work</th><th>Practice</th></tr>
                </thead>
                <tbody>
                  {THREE_FORMS.map((f) => (
                    <tr key={f.form}>
                      <td><strong>{f.form}</strong></td>
                      <td>{f.brahma}</td>
                      <td>{f.work}</td>
                      <td>{f.practice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="sr-callout">
                <span className="sr-callout__label font-cinzel">Why Three Forms?</span>
                <p className="sr-callout__text font-serif">
                  Because the one Sun shows three faces at dawn, noon and dusk, the Puranas call Surya <strong>the Trimurti of time</strong> — Brahma, Vishnu and Shiva in a single orb. Each hour of the day is a phase of the one solar consciousness.
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── Classification 2: 12 Adityas ── */}
          <ScrollReveal>
            <h3 className="sr-block__title font-cinzel">Classification 2 · The 12 Adityas — 12 Names of the Sun</h3>
            <div className="sr-table-wrap">
              <table className="sr-table">
                <thead>
                  <tr><th>Name</th><th>Meaning</th><th>Role</th></tr>
                </thead>
                <tbody>
                  {DVADASA_ADITYAS.map((a) => (
                    <tr key={a.name}>
                      <td><strong>{a.name}</strong></td>
                      <td>{a.meaning}</td>
                      <td>{a.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="sr-callout">
                <span className="sr-callout__label font-cinzel">The Wheel of Months</span>
                <p className="sr-callout__text font-serif">
                  Traditionally the twelve Adityas are the twelve months of the Sun&#39;s wheel — one face for each turn of the year. Some lists differ slightly between the Rig Veda and the Puranas — <em>some say</em> twelve, others shorten them to the Surya-dvadala: the twelve petals of the heart-lotus.
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '40px' }}>
            <FramedFigure
              src={surya4Img}
              alt="The twelve Adityas — the twelve names and months of the Sun as one divine wheel"
              caption="The 12 Adityas — one Sun wearing the twelve months of the year"
            />
          </ScrollReveal>

          {/* ── Classification 3: 2 Sampradayas ── */}
          <ScrollReveal>
            <h3 className="sr-block__title font-cinzel">Classification 3 · Two Main Sampradayas — North vs South</h3>
            <div className="sr-grid sr-grid--2">
              {SAMPRADAYAS.map((s) => (
                <ScrollReveal key={s.name}>
                  <div className="sr-card sr-card--deep">
                    <span className="sr-card__label font-cinzel">{s.name}</span>
                    <p className="sr-card__text font-serif">{s.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <div className="sr-callout">
                <span className="sr-callout__label font-cinzel">What Both Agree On</span>
                <p className="sr-callout__text font-serif">
                  North and South both worship the same Sun. Both proclaim Him <strong>Pratyaksha Devata</strong> — the visible God. No pilgrim must travel far; the Sun comes to every devotee every morning, North or South.
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── Classification 4: 4 Types by Goal ── */}
          <ScrollReveal>
            <h3 className="sr-block__title font-cinzel">Classification 4 · Four Types of Surya Upasana — According to Goal</h3>
            <div className="sr-table-wrap">
              <table className="sr-table">
                <thead>
                  <tr><th>Goal</th><th>Path</th><th>Explanation</th><th>Scripture</th></tr>
                </thead>
                <tbody>
                  {FOUR_GOALS.map((g) => (
                    <tr key={g.num}>
                      <td><strong>{g.num} · {g.goal}</strong></td>
                      <td>{g.way}</td>
                      <td>{g.detail}</td>
                      <td>{g.shastra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* ── Classification 5: 7 Horses = 7 Chakras ── */}
          <ScrollReveal>
            <h3 className="sr-block__title font-cinzel">Classification 5 · Seven Horses of Surya — The 7 Chakras</h3>
            <div className="sr-horse-grid">
              {HORSES.map((h) => (
                <ScrollReveal key={h.num}>
                  <motion.div className="sr-horse-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                    <span className="sr-horse-card__num">{h.num}</span>
                    <span className="sr-horse-card__name font-cinzel">{h.color}</span>
                    <span className="sr-horse-card__attr font-cinzel">{h.chakra}</span>
                    <span className="sr-horse-card__quality font-serif">{h.quality}</span>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <div className="sr-callout" style={{ marginTop: '24px' }}>
                <span className="sr-callout__label font-cinzel">The Chariot of the Soul</span>
                <p className="sr-callout__text font-serif">
                  The Puranas speak of <strong>seven horses</strong>; <em>some say</em> six. The seven are the seven colours of the spectrum that modern science has measured — and the seven chakras rising from root to crown. The charioteer is Aruna, the rising dawn; the two wheels are day and night; the chariot is the body; and Surya who rides within is the <strong>Atman</strong> — the Self of all.
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 4 — SURYA YANTRA + MANTRA ══════════════ */}
      <section id="yantra" className="sr-section sr-section--maroon">
        <div className="sr-container">
          <ScrollReveal className="sr-section__head">
            <span className="sr-eyebrow">SECTION 4 · YANTRA & MANTRA SCIENCE</span>
            <h2 className="sr-section__title font-cinzel">Surya Yantra + Mantra Science</h2>
            <p className="sr-section__subtitle font-serif">The solar geometry and the sound-body of the Sun</p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="sr-grid sr-grid--2">
              <ScrollReveal>
                <div className="sr-card">
                  <span className="sr-card__label font-cinzel">Surya Yantra</span>
                  <p className="sr-card__text font-serif">
                    A twelve-petalled solar wheel with the Surya Beeja at its centre. The devotee visualises the petals as the twelve Adityas surrounding the golden core — meditating on the yantra at sunrise purifies the mind, attracts vitality and removes planetary sorrows. The yantra is the map; the mantra is the key.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <div className="sr-card">
                  <span className="sr-card__label font-cinzel">Surya Maha-Mantra</span>
                  <p className="sr-card__text font-serif">
                    The central formula of the Surya Tantra, built on the Sun&#39;s seed syllable <strong>Hram</strong>. Recited 108 times at sunrise or mid-day, it awakens the inner Sun and steadies the life-force. On Sunday it is recited in conjunction with the twelve names of the Aditya Hridaya.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="sr-mantra-box">
              <span className="sr-mantra-box__label font-cinzel">Surya Beeja Mantra</span>
              <p className="sr-mantra-box__sanskrit font-serif">Om Hram Hrim Hraum Sah Suryaya Namah</p>
              <p className="sr-mantra-box__meaning font-serif">Salutations to Surya, who carries the seed of the Sun — Hram. This is the shortest complete formula of the Surya Tantra.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h3 className="sr-block__title font-cinzel">The 12 Names of the Sun — Aditya Hridaya</h3>
            <div className="sr-table-wrap">
              <table className="sr-table">
                <thead>
                  <tr><th>#</th><th>Name</th><th>#</th><th>Name</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1</strong></td><td>Mitra — the Friend</td>
                    <td><strong>7</strong></td><td>Hiranyagarbha — the Golden Womb</td>
                  </tr>
                  <tr>
                    <td><strong>2</strong></td><td>Ravi — the Radiant</td>
                    <td><strong>8</strong></td><td>Marichi — the Ray</td>
                  </tr>
                  <tr>
                    <td><strong>3</strong></td><td>Surya — the Sun Supreme</td>
                    <td><strong>9</strong></td><td>Aditya — the Son of Aditi</td>
                  </tr>
                  <tr>
                    <td><strong>4</strong></td><td>Bhanu — the Luminous</td>
                    <td><strong>10</strong></td><td>Savita — the Impeller</td>
                  </tr>
                  <tr>
                    <td><strong>5</strong></td><td>Khaga — the Sky-Walker</td>
                    <td><strong>11</strong></td><td>Arka — the Energy</td>
                  </tr>
                  <tr>
                    <td><strong>6</strong></td><td>Pushan — the Nourisher</td>
                    <td><strong>12</strong></td><td>Bhaskara — the Light-Maker</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="sr-callout">
              <span className="sr-callout__label font-cinzel">Aditya Hridaya Stotra</span>
              <p className="sr-callout__text font-serif">
                These twelve names form the heart of the <strong>Aditya Hridaya Stotra</strong>, taught by Sage Agastya to Rama on the eve of his final battle — and with it Rama won victory. The stotra is recited on Sundays, before important work, and as a shield of courage.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '40px' }}>
            <FramedFigure
              src={surya3Img}
              alt="The Surya Yantra and the sacred solar science of the Sauram tradition"
              caption="The Surya Yantra — the twelve-petalled wheel of the Sun and its mantra key"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 5 — IMPORTANCE — WHY SAURAM TODAY ══════════════ */}
      <section id="importance" className="sr-section sr-section--warm">
        <div className="sr-container">
          <ScrollReveal className="sr-section__head">
            <span className="sr-eyebrow">SECTION 5 · RELEVANCE TODAY</span>
            <h2 className="sr-section__title font-cinzel">Importance of Sauram — Why It Matters Today</h2>
            <p className="sr-section__subtitle font-serif">What the path of the Sun offers the modern world</p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="sr-table-wrap">
              <table className="sr-table">
                <thead>
                  <tr><th>#</th><th>Point</th><th>Explanation</th><th>Source</th></tr>
                </thead>
                <tbody>
                  {IMPORTANCE_ROWS.map((r) => (
                    <tr key={r.num}>
                      <td><strong>{r.num}</strong></td>
                      <td><strong>{r.point}</strong></td>
                      <td>{r.detail}</td>
                      <td>{r.shastra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 6 — VISHNU + SHIVA + SHAKTI + SURYA ══════════════ */}
      <section id="relations" className="sr-section sr-section--maroon">
        <div className="sr-container">
          <ScrollReveal className="sr-section__head">
            <span className="sr-eyebrow">SECTION 6 · THE ONE SUN, MANY FORMS</span>
            <h2 className="sr-section__title font-cinzel">Vishnu + Shiva + Shakti + Surya — The Relation</h2>
            <p className="sr-section__subtitle font-serif">How the Sun relates to the other faces of the Divine</p>
            <Ornament />
          </ScrollReveal>

          <div className="sr-grid sr-grid--2">
            {DIVINE_RELATIONS.map((d) => (
              <ScrollReveal key={d.name}>
                <div className="sr-card">
                  <span className="sr-card__label font-cinzel">{d.name} — {d.relation}</span>
                  <p className="sr-card__text font-serif">{d.meaning}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="sr-callout" style={{ marginTop: '24px' }}>
              <span className="sr-callout__label font-cinzel">The One in All</span>
              <p className="sr-callout__text font-serif">
                In the Shanmata tradition the six paths are six doors to one hall. Sauram is not separate from Vaishnavam or Shaivam — it is their sunlight. The Surya who rises is the same Brahman whom Vishnu, Shiva, Shakti, Ganapati and Skanda reveal in different forms. <strong>One Sun. One Self. Many windows.</strong>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 7 — ESSENCE & PRACTICE ══════════════ */}
      <section id="essence" className="sr-section sr-section--warm">
        <div className="sr-container">
          <ScrollReveal className="sr-section__head">
            <span className="sr-eyebrow">SECTION 7 · THE CLOSING VISION</span>
            <h2 className="sr-section__title font-cinzel">The Essence and Practice of Sauram</h2>
            <p className="sr-section__subtitle font-serif">The final teaching, the three pillars and the practical path</p>
            <Ornament />
          </ScrollReveal>

          {/* ── Vedic Quote ── */}
          <ScrollReveal>
            <div className="sr-scripture-card">
              <span className="sr-scripture-card__mark" aria-hidden="true">&ldquo;</span>
              <p className="sr-scripture-card__sanskrit font-serif">
                Suryo Atma Jagatas Tastushascha
              </p>
              <p className="sr-scripture-card__source font-cinzel">— Rig Veda 1.115.1</p>
              <p className="sr-scripture-card__meaning font-serif">
                Surya is the Self of all that moves and all that stands still. The Veda utters in a single line the whole of Sauram: the Sun you see each morning is the very soul of the universe — and of you.
              </p>
            </div>
          </ScrollReveal>

          {/* ── Three Pillars ── */}
          <ScrollReveal>
            <h3 className="sr-block__title font-cinzel">Three Pillars of Sauram</h3>
            <div className="sr-grid sr-grid--3">
              {PILLARS.map((p) => (
                <ScrollReveal key={p.label}>
                  <motion.div className="sr-card sr-card--deep" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                    <span className="sr-card__label font-cinzel">{p.label}</span>
                    <h4 className="sr-card__h4 font-cinzel">{p.title}</h4>
                    <p className="sr-card__text font-serif">{p.text}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* ── Practical Rule ── */}
          <ScrollReveal>
            <h3 className="sr-block__title font-cinzel">Practical Rule — Daily Practice</h3>
            <div className="sr-grid sr-grid--3">
              {PRACTICAL.map((c) => (
                <ScrollReveal key={c.label}>
                  <motion.div className="sr-card sr-card--deep" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                    <span className="sr-card__label font-cinzel">{c.label}</span>
                    <h4 className="sr-card__h4 font-cinzel">{c.title}</h4>
                    <p className="sr-card__text font-serif" dangerouslySetInnerHTML={{ __html: c.text }} />
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* ── Final Devotional Message ── */}
          <ScrollReveal className="sr-closing">
            <span className="sr-closing__mark" aria-hidden="true">✦</span>
            <p className="sr-closing__source font-cinzel" style={{ marginBottom: '16px' }}>In Kali Yuga, Sauram says:</p>
            <p className="sr-closing__sanskrit font-serif" style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}>
              Om Suryaya Namah — the Sun is here daily.
            </p>
            <div className="sr-closing__divider">
              <span className="sr-closing__divider-line" />
              <span className="sr-closing__divider-star">✦</span>
              <span className="sr-closing__divider-line" />
            </div>
            <p className="sr-closing__meaning font-serif">
              No temple visits required. He comes to you. Just open your eyes — Sauram is the path of the open eyes. While other devas are seen through faith, Surya is seen through the window every morning. He asks not for a journey, only for a single glance of gratitude at dawn. That glance, repeated daily, becomes darshan; that darshan becomes meditation; that meditation becomes Brahman.
            </p>
            <p className="sr-closing__note font-serif">
              Arghya to the Sun — Salutations to the Light of lights.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="sr-cta">
        <div className="sr-cta__geo" aria-hidden="true" />
        <ScrollReveal direction="up" duration={0.85}>
          <div className="sr-cta__box">
            <span className="sr-cta__corner sr-cta__corner--tl" aria-hidden="true">✦</span>
            <span className="sr-cta__corner sr-cta__corner--tr" aria-hidden="true">✦</span>
            <span className="sr-cta__corner sr-cta__corner--bl" aria-hidden="true">✦</span>
            <span className="sr-cta__corner sr-cta__corner--br" aria-hidden="true">✦</span>

            <span className="sr-cta__badge">🪷 Walk the Path of the Sun</span>
            <h2 className="sr-cta__heading font-cinzel">
              Begin Your Journey Into<br />
              <span className="sr-cta__heading-gold">Sauram</span>
            </h2>
            <div className="sr-cta__divider">
              <span className="sr-cta__divider-line" />
              <span className="sr-cta__divider-lotus">✿</span>
              <span className="sr-cta__divider-line" />
            </div>
            <p className="sr-cta__body font-serif">
              Explore the Saura Purana, the Gayatri, the twelve Adityas and the daily upasana
              of Surya — the visible Brahman — beginning with the first darshan of dawn.
            </p>
            <div className="sr-cta__btns">
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