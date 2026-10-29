import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { FooterSection } from '../Home/HomeSections.jsx';
import heroImg from '../../assets/bhuvaneswari.jpeg';
import shaktam1Img from '../../assets/shaktham1.jpeg';
import shaktam2Img from '../../assets/shaktham2.jpeg';
import shaktam3Img from '../../assets/shaktham3.jpeg';
import logoImg from '../../assets/logo.png';
import './ShaktamPage.css';

const NAV_SECTIONS = [
  { id: 'what-is', label: 'What Is Shaktam?' },
  { id: 'scriptures', label: 'Scriptural Foundations' },
  { id: 'upasana', label: 'Forms of Upasana' },
  { id: 'tantra', label: 'Tantra & Kundalini' },
  { id: 'importance', label: 'Why Shaktam Matters' },
  { id: 'divine-forms', label: 'Shakti & the Divine Forms' },
  { id: 'essence', label: 'The Essence of Shaktam' },
];

const SCRIPTURES = [
  { text: 'Rig Veda 10.125 — Devi Sukta', ref: 'Devi speaks as Vāk: "I roam with the Rudras and the Vasus, I hold up the heavens."' },
  { text: 'Devi Mahatmyam (Markandeya Purana)', ref: 'A classical text of seven hundred verses narrating the Mother\'s victories over adharmic forces.' },
  { text: 'Devi Bhagavata Purana', ref: 'The Mother revealed as Bhagavati — source of creation, preservation and dissolution.' },
  { text: 'Shakta Tantras', ref: 'Rudrayamala, Kali Tantra and related texts that teach mantra, yantra and upasana of the Mahavidyas.' },
  { text: 'Lalita Sahasranama', ref: 'The thousand names of Sri Lalita Tripura Sundari, chanted within the Sri Kula tradition.' },
];

const MAHAVIDYAS = [
  { name: 'Kali', bija: 'Krim', assoc: 'Time and the dissolving of the ego' },
  { name: 'Tara', bija: 'Strim', assoc: 'Compassion and the gift of speech' },
  { name: 'Tripura Sundari', bija: 'Klim', assoc: 'Supreme beauty and grace of the Sri Kula' },
  { name: 'Bhuvaneshvari', bija: 'Hrim', assoc: 'Mother of the worlds' },
  { name: 'Bhairavi', bija: 'Hskhrim', assoc: 'The fierce purifying aspect' },
  { name: 'Chhinnamasta', bija: 'Klim', assoc: 'Self-offering and transcendence' },
  { name: 'Dhumavati', bija: 'Dhum', assoc: 'The smoky form that grants detachment' },
  { name: 'Bagalamukhi', bija: 'Hlim', assoc: 'Stillness that neutralises negativity' },
  { name: 'Matangi', bija: 'Aim', assoc: 'Speech, music and the arts' },
  { name: 'Kamala', bija: 'Shrim', assoc: 'Abundance, fortune and purity' },
];

const KULA_TABLE = [
  { aspect: 'Central Deity', sri: 'Sri Lalita Tripura Sundari', kali: 'Maha Kali' },
  { aspect: 'Sacred Texts', sri: 'Lalita Sahasranama, Sri Vidya corpus', kali: 'Kali Tantra, Krama tradition' },
  { aspect: 'Yantra', sri: 'Sri Chakra (Shri Yantra)', kali: 'Kali Yantra' },
  { aspect: 'Seed Mantra', sri: 'Aim Klim Sauh', kali: 'Krim' },
  { aspect: 'Disposition', sri: 'Radiant, blissful, motherly grace', kali: 'Fierce, swift, transformative' },
  { aspect: 'Traditional Colours', sri: 'Gold and saffron', kali: 'Deep blue and red' },
  { aspect: 'Spiritual Emphasis', sri: 'Worship, beauty and liberation through grace', kali: 'Direct dissolution of the ego through tapas' },
];

const ACHARAS = [
  {
    name: 'Dakshinachara',
    sub: 'The Right-hand Path',
    text: 'A conservative and Vedic-friendly observance: public worship, purity of body and mind, and practices that are accepted within the wider society.',
  },
  {
    name: 'Vamachara',
    sub: 'The Left-hand Path',
    text: 'An esoteric practice that internalises what society normally avoids, transforming it into a tool of awakening. Traditionally undertaken only under a qualified Guru.',
  },
  {
    name: 'Kaulachara',
    sub: 'The Kaula Path',
    text: 'An advanced synthesis in which the seeker sees the entire world as the play of Shakti. It rests on a tested Guru–disciple bond and inner purity, not outer ritual alone.',
  },
];

const YANTRAS = [
  { name: 'Sri Chakra', text: 'Nine interlocking triangles around a central point (bindu), worshipped as the royal seat of Sri Lalita Tripura Sundari in the Sri Kula tradition.' },
  { name: 'Kali Yantra', text: 'A geometric diagram centred on the Kali bija, used within the Kali Kula tradition for direct and fierce transformation.' },
  { name: 'Durga Yantra', text: 'A protective diagram associated with the worship of Durga, commonly invoked during Navaratri and times of need.' },
];

const CHAKRAS = [
  { chakra: 'Muladhara', seat: 'Root', petals: '4', element: 'Earth', note: 'Traditional seat of Kundalini, associated with Ganesha' },
  { chakra: 'Svadhisthana', seat: 'Sacral', petals: '6', element: 'Water', note: 'Creativity and flow' },
  { chakra: 'Manipura', seat: 'Navel', petals: '10', element: 'Fire', note: 'Will and vitality' },
  { chakra: 'Anahata', seat: 'Heart', petals: '12', element: 'Air', note: 'Devotion and love' },
  { chakra: 'Vishuddha', seat: 'Throat', petals: '16', element: 'Ether', note: 'Mantra and pure speech' },
  { chakra: 'Ajna', seat: 'Brow', petals: '2', element: 'Mind', note: 'Intuition and inner vision' },
  { chakra: 'Sahasrara', seat: 'Crown', petals: '1000', element: 'Beyond', note: 'Union with the Divine Mother' },
];

const NAVADURGA = [
  { name: 'Shailaputri', sub: 'Daughter of the mountain' },
  { name: 'Brahmacharini', sub: 'The devoted ascetic' },
  { name: 'Chandraghanta', sub: 'Bell of the crescent moon' },
  { name: 'Kushmanda', sub: 'Creatrix of the universe' },
  { name: 'Skandamata', sub: 'Mother of Skanda' },
  { name: 'Katyayani', sub: 'The warrior maiden' },
  { name: 'Kalaratri', sub: 'The fierce night' },
  { name: 'Mahagauri', sub: 'The radiant one' },
  { name: 'Siddhidatri', sub: 'Giver of siddhis' },
];

const IMPORTANCE = [
  { title: 'The Universal Mother', text: 'Devi is honoured as approachable, forgiving and ever-willing to shelter Her children — a loving presence rather than a distant ideal.' },
  { title: 'Strength and Fearlessness', text: 'Shakti literally means power. Worship of the Mother is traditionally linked to inner courage, stability and the removal of fear and insecurity.' },
  { title: 'Worldly and Spiritual Good', text: 'The tradition speaks of Abhyudaya (worldly welfare) and Nihshreyasa (liberation) — Devi grants both to a sincere seeker.' },
  { title: 'Protection', text: 'In the Devi Mahatmyam the Mother repeatedly protects the gods and the virtuous from adharmic forces; devotees invoke Her for protection in daily life.' },
  { title: 'The Awakening of Kundalini', text: 'Shaktam is centred on the awakening of the inner Shakti, giving a structured map of the subtle body from the Muladhara to the Sahasrara.' },
  { title: 'Accessible Practice', text: 'The tradition offers both grand worship and a simple daily upasana — making a sincere practice possible for every seeker, whatever their circumstance.' },
];

const RELATIONSHIPS = [
  {
    god: 'Shiva',
    form: 'Parvati / Uma',
    text: 'Consciousness and Energy are traditionally one reality, seen as Shiva and Shakti. The Ardhanarishvara form embodies their inseparable union beyond names and forms.',
  },
  {
    god: 'Vishnu',
    form: 'Lakshmi',
    text: 'As Mahalakshmi, Devi is the power of preservation and abundance that supports the universe, and the Companion of Vishnu in sustaining dharma.',
  },
  {
    god: 'Surya',
    form: 'Savitri / Gayatri',
    text: 'As Gayatri, the Mother is honoured as the voice of the Vedas and the illumination of the inner sun that dispels ignorance.',
  },
  {
    god: 'Ganapati',
    form: 'Siddhi and Buddhi',
    text: 'Ganapati is traditionally the son of Parvati and the remover of obstacles; His powers Siddhi (attainment) and Buddhi (intellect) rest upon Shakti. Devotees invoke Him before Devi worship.',
  },
  {
    god: 'Skanda',
    form: 'Devasena and Valli',
    text: 'Skanda (Kartikeya) is the son of Shiva and Shakti, the leader of the celestial hosts, whose grace descends through the Mother\'s power and through his consorts Devasena and Valli.',
  },
];

const DAILY_UPASANA = [
  { step: 1, title: 'Dawn', text: 'A cleansed beginning — a simple bath, fresh clothes, and lighting of the lamp before the Devi image or yantra.' },
  { step: 2, title: 'Morning', text: 'Recite the Devi Gayatri or the Durga mantra eleven or one hundred and eight times, following the count given by one\'s Guru.' },
  { step: 3, title: 'Noon', text: 'Offer a simple naivedya (food offering) and spend a few minutes reading or chanting from the Devi Mahatmyam.' },
  { step: 4, title: 'Dusk', text: 'Evening japa of the Devi name or bija mantra, offered with complete attention of heart and mind.' },
  { step: 5, title: 'Friday', text: 'A traditional day for the worship of the Mother — a longer japa, a small arati, and an act of seva.' },
  { step: 6, title: 'Ashtami / Purnima', text: 'Monthly observance with extended worship, or a visit to a Devi temple for darshan.' },
  { step: 7, title: 'Navaratri', text: 'The nine sacred nights honouring the Navadurga forms — the crown of the Shakta year.' },
];

const PILLARS = [
  { title: 'Guru Parampara', text: 'Initiation (diksha) through an unbroken line of Gurus. The seed mantra is received from the Guru and kept as a living link.' },
  { title: 'Mantra · Yantra · Tantra', text: 'A systematic practice of japa, sacred geometry and ritual — the classical engine of Shakta sadhana when taught and supervised by a qualified Guru.' },
  { title: 'Bhakti & Seva', text: 'Devotion that is expressed as selfless service. For the Mother\'s children, love and compassion are themselves worship.' },
];

function Ornament() {
  return (
    <div className="sp-orn" aria-hidden="true">
      <span className="sp-orn__line" />
      <span className="sp-orn__diamond">✦</span>
      <span className="sp-orn__line" />
    </div>
  );
}

function FramedFigure({ src, alt, caption, className = '' }) {
  return (
    <figure className={`sp-figure${className ? ` ${className}` : ''}`}>
      <div className="sp-figure__frame">
        <span className="sp-figure__corner sp-figure__corner--tl" aria-hidden="true">✦</span>
        <span className="sp-figure__corner sp-figure__corner--br" aria-hidden="true">✦</span>
        <img src={src} alt={alt} className="sp-figure__img" loading="lazy" draggable="false" />
      </div>
      {caption && <figcaption className="sp-figure__caption font-serif">{caption}</figcaption>}
    </figure>
  );
}

export default function ShaktamPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Shaktam | The Path of the Divine Mother — Sri Kula, Kali Kula & Tantra';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      'content',
      'Explore Shaktam — the worship of Shakti as the Supreme Reality — through the Mahavidyas, Sri Kula and Kali Kula, Kundalini, the scriptures and a simple daily upasana.'
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
    <div className="sp-page">
      <Navbar />

      {/* ══════════════ HERO ══════════════ */}
      <section className="sp-hero">
        <div className="sp-hero__bg" aria-hidden="true" />
        <div className="sp-hero__inner">
          <div className="sp-hero__content">
            <motion.span
              className="sp-hero__eyebrow"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              SHANMATA • SHAKTA TANTRA • DEVI UPASANA
            </motion.span>

            <motion.h1
              className="sp-hero__title font-cinzel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              SHAKTAM
            </motion.h1>

            <motion.p
              className="sp-hero__subtitle font-cinzel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              The Path of the Divine Mother — Mantra, Tantra &amp; the Grace of Shakti
            </motion.p>

            <motion.div
              className="sp-hero__divider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <span className="sp-hero__divider-line" />
              <img src={logoImg} alt="" className="sp-hero__divider-om" />
              <span className="sp-hero__divider-line" />
            </motion.div>

            <motion.p
              className="sp-hero__intro font-serif"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              Shaktam is the Shakta tradition — the worship of Shakti, the Divine
              Mother, as the Supreme Reality. Rooted in the Vedas, the Puranas and
              the Shakta Tantras, it honours the feminine Divine through the ten
              Mahavidyas, the grace of the Sri Kula and Kali Kula, and the
              awakening of Kundalini at the heart of the seeker.
            </motion.p>

            <motion.div
              className="sp-hero__btn"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.78 }}
            >
              <GoldenButton
                label="Explore Shaktam"
                size="lg"
                onClick={() => scrollToId('what-is')}
              />
            </motion.div>
          </div>

          <motion.div
            className="sp-hero__art"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="sp-hero__halo" aria-hidden="true" />
            <FramedFigure
              src={heroImg}
              alt="Bhuvaneshvari — the Divine Mother as ruler of the worlds"
              caption="Sri Bhuvaneshvari — the Mother of the Worlds"
            />
          </motion.div>
        </div>
      </section>

      {/* ══════════════ CONTENTS NAVIGATION ══════════════ */}
      <nav className="sp-nav" aria-label="Course contents">
        <div className="sp-nav__inner">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              className="sp-nav__item"
              onClick={() => scrollToId(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ══════════════ WHAT IS SHAKTAM? (CREAM) ══════════════ */}
      <section id="what-is" className="sp-section sp-section--cream">
        <div className="sp-container">
          <ScrollReveal className="sp-section__head">
            <span className="sp-eyebrow">THE OPENING QUESTION</span>
            <h2 className="sp-section__title font-cinzel">What Is Shaktam?</h2>
            <p className="sp-section__subtitle font-serif">
              One of the six major paths of the Shanmata — the path of the Divine Mother
            </p>
            <Ornament />
          </ScrollReveal>

          <div className="sp-grid sp-grid--2">
            <ScrollReveal>
              <motion.div className="sp-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                <span className="sp-card__label font-cinzel">Definition</span>
                <p className="sp-card__text font-serif">
                  <strong>Shakti = the Divine Power / the Supreme Mother.</strong> Shaktam is
                  the tradition in which Shakti — the feminine aspect of the Divine — is honoured
                  as the Supreme Reality from whom all creation, preservation and dissolution arise.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <motion.div className="sp-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                <span className="sp-card__label font-cinzel">The Mother of the Worlds</span>
                <p className="sp-card__text font-serif">
                  As <strong>Bhuvaneshvari</strong>, the Mother is envisioned as the sovereign of
                  the worlds — the one by whose grace the cosmos is unfolded, sustained and
                  withdrawn. In Shaktam, knowledge of Her is sought through devotion (bhakti),
                  scripture (shastra) and disciplined practice (sadhana).
                </p>
              </motion.div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="sp-scripture-card">
              <span className="sp-scripture-card__mark" aria-hidden="true">❝</span>
              <p className="sp-scripture-card__sanskrit font-serif">
                Om Sarva Mangala Mangalye, Shive Sarvartha Sadhike,
                Sharanye Tryambake Gauri, Narayani Namostute
              </p>
              <p className="sp-scripture-card__source font-cinzel">Devi Mahatmyam · 11.10</p>
              <p className="sp-scripture-card__meaning font-serif">
                “Salutations to Narayani — the auspicious one, the fulfiller of every true
                purpose, the refuge whom all may approach.”
              </p>
              <p className="sp-scripture-card__note font-serif">
                A classical verse of the Shakta tradition, traditionally recited in the
                presence of the Mother during puja and japa.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="sp-shanmata-wrap">
            <h3 className="sp-block__title sp-block__title--maroon font-cinzel">Within the Six Sampradayas</h3>
            <div className="sp-shanmata">
              {[
                { name: 'Shaivam', god: 'Shiva', hl: false },
                { name: 'Vaishnavam', god: 'Vishnu', hl: false },
                { name: 'Shaktam', god: 'Shakti', hl: true },
                { name: 'Ganapatyam', god: 'Ganapati', hl: false },
                { name: 'Kaumaram', god: 'Kartikeya', hl: false },
                { name: 'Sauram', god: 'Surya', hl: false },
              ].map((s) => (
                <ScrollReveal key={s.name} delay={0.03}>
                  <div className={`sp-shanmata__card${s.hl ? ' sp-shanmata__card--hl' : ''}`}>
                    <span className="sp-shanmata__name font-cinzel">{s.name}</span>
                    <span className="sp-shanmata__god font-serif">{s.god} as Supreme</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <p className="sp-note font-serif">
              Of the six streams of the Shanmata, the <strong>Shaktam</strong> stream is the
              focus of this course — the Mother honoured at the centre.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <FramedFigure
              src={shaktam1Img}
              alt="The Divine Mother in Her gentle and compassionate form"
              caption="Sakala Mangala — the ever-auspicious Mother"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ SCRIPTURAL FOUNDATIONS (MAROON) ══════════════ */}
      <section id="scriptures" className="sp-section sp-section--maroon">
        <div className="sp-container">
          <ScrollReveal className="sp-section__head">
            <span className="sp-eyebrow sp-eyebrow--gold">VEDA • PURANA • TANTRA</span>
            <h2 className="sp-section__title font-cinzel">Scriptural Foundations</h2>
            <p className="sp-section__subtitle font-serif">
              The sacred texts that carry the Shakta tradition
            </p>
            <Ornament />
          </ScrollReveal>

          <div className="sp-table-wrap">
            <table className="sp-table sp-table--maroon">
              <thead>
                <tr>
                  <th>Scripture</th>
                  <th>Traditional Significance</th>
                </tr>
              </thead>
              <tbody>
                {SCRIPTURES.map((r) => (
                  <tr key={r.text}>
                    <td><strong>{r.text}</strong></td>
                    <td>{r.ref}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="sp-grid sp-grid--2">
            <ScrollReveal>
              <div className="sp-card sp-card--deep">
                <span className="sp-card__label font-cinzel">Devi Gayatri</span>
                <p className="sp-card__sanskrit font-serif">
                  Om Mahishasurni Vidmahe, Durga Devi Dhimahi, Tanno Durga Prachodayat
                </p>
                <p className="sp-card__text font-serif">
                  A traditional Gayatri mantra of the Mother, recited in the Shakta tradition
                  for clarity, protection and grace.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="sp-card sp-card--deep">
                <span className="sp-card__label font-cinzel">Devi Sukta · Rig Veda 10.125</span>
                <p className="sp-card__sanskrit font-serif">
                  Aham Rudrebhir Vasubhischaraami, Aham Adityar Ut Varunair Mahi
                </p>
                <p className="sp-card__text font-serif">
                  “I roam with the Rudras and the Vasus, I support heaven and earth.” A hymn of
                  the Rig Veda in which the Goddess speaks as Vāk — often quoted as a Vedic
                  root of the Shakta vision. It is presented here as a scriptural reference,
                  not as proof of every later theological claim.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="sp-callout">
              <span className="sp-callout__label font-cinzel">Devi Mahatmyam — The Glory of the Goddess</span>
              <p className="sp-callout__text font-serif">
                The Devi Mahatmyam (embedded in the Markandeya Purana) is regarded within the
                tradition as the very heart of Shaktam. Its dialogue between the sage Medhas and
                King Suratha unfolds the births, battles and blessings of Durga, Lakshmi and
                Saraswati — the three-eyed vision of the one Mother in Her many forms.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ FORMS OF SHAKTA UPASANA (CREAM) ══════════════ */}
      <section id="upasana" className="sp-section sp-section--cream">
        <div className="sp-container">
          <ScrollReveal className="sp-section__head">
            <span className="sp-eyebrow">THE MOTHERLY WAY</span>
            <h2 className="sp-section__title font-cinzel">Forms of Shakta Upasana</h2>
            <p className="sp-section__subtitle font-serif">
              Two great families of worship, and three classical modes of practice
            </p>
            <Ornament />
          </ScrollReveal>

          <h3 className="sp-block__title sp-block__title--maroon font-cinzel">Sri Kula &amp; Kali Kula</h3>
          <div className="sp-table-wrap">
            <table className="sp-table sp-table--light">
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Sri Kula</th>
                  <th>Kali Kula</th>
                </tr>
              </thead>
              <tbody>
                {KULA_TABLE.map((r) => (
                  <tr key={r.aspect}>
                    <td><strong>{r.aspect}</strong></td>
                    <td>{r.sri}</td>
                    <td>{r.kali}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="sp-block__title sp-block__title--maroon font-cinzel">Three Classical Modes</h3>
          <div className="sp-grid sp-grid--3">
            {ACHARAS.map((a) => (
              <ScrollReveal key={a.name} delay={0.05}>
                <motion.div className="sp-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sp-card__label font-cinzel">{a.sub}</span>
                  <h4 className="sp-card__h4 font-cinzel">{a.name}</h4>
                  <p className="sp-card__text font-serif">{a.text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="sp-note font-serif">
              These are traditional categories of the Shakta Tantras. Advanced forms of
              practice are reserved for qualified seekers under the direct guidance of a
              Guru.
            </p>
          </ScrollReveal>

          <h3 className="sp-block__title sp-block__title--maroon font-cinzel">Sacred Geometry — The Yantras</h3>
          <div className="sp-grid sp-grid--3">
            {YANTRAS.map((y) => (
              <ScrollReveal key={y.name} delay={0.05}>
                <motion.div className="sp-card" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sp-card__label font-cinzel">Yantra</span>
                  <h4 className="sp-card__h4 font-cinzel">{y.name}</h4>
                  <p className="sp-card__text font-serif">{y.text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <div className="sp-upasana">
            <ScrollReveal>
              <h3 className="sp-block__title sp-block__title--maroon font-cinzel">A Simple Daily Upasana</h3>
              <p className="sp-note font-serif sp-note--narrow">
                The tradition gives both grand worship and a manner of daily practice suited
                to every seeker:
              </p>
            </ScrollReveal>
            <div className="sp-timeline">
              {DAILY_UPASANA.map((s) => (
                <ScrollReveal key={s.step}>
                  <div className="sp-step">
                    <div className="sp-step__marker">
                      <span className="sp-step__num font-cinzel">{s.step}</span>
                    </div>
                    <motion.div className="sp-step__card" whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                      <h4 className="sp-step__title font-cinzel">{s.title}</h4>
                      <p className="sp-step__text font-serif">{s.text}</p>
                    </motion.div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ TANTRA & KUNDALINI (MAROON) ══════════════ */}
      <section id="tantra" className="sp-section sp-section--maroon">
        <div className="sp-container">
          <ScrollReveal className="sp-section__head">
            <span className="sp-eyebrow sp-eyebrow--gold">THE ESOTERIC SCIENCE</span>
            <h2 className="sp-section__title font-cinzel">Tantra &amp; Kundalini</h2>
            <p className="sp-section__subtitle font-serif">
              The Mahavidyas, the subtle body and the seat of the inner Shakti
            </p>
            <Ornament />
          </ScrollReveal>

          <h3 className="sp-block__title sp-block__title--light font-cinzel">The Ten Mahavidyas</h3>
          <p className="sp-note sp-note--on-maroon font-serif">
            The ten great wisdom-forms of the Mother, traditionally enumerated in the Shakta
            Tantras. Each carries its own seed mantra (bija) and disposition:
          </p>
          <div className="sp-mahavidyas">
            {MAHAVIDYAS.map((m, i) => (
              <ScrollReveal key={m.name} delay={(i % 5) * 0.04}>
                <motion.div className="sp-mahavidya" whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sp-mahavidya__bija font-cinzel">{m.bija}</span>
                  <h5 className="sp-mahavidya__name font-cinzel">{m.name}</h5>
                  <p className="sp-mahavidya__assoc font-serif">{m.assoc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="sp-note sp-note--on-maroon font-serif">
              Bija mantras are traditionally received from the Guru; they are shown here only
              for study and recognition.
            </p>
          </ScrollReveal>

          <h3 className="sp-block__title sp-block__title--light font-cinzel">The Chakras and the Awakening</h3>
          <div className="sp-table-wrap">
            <table className="sp-table sp-table--maroon">
              <thead>
                <tr>
                  <th>Chakra</th>
                  <th>Seat</th>
                  <th>Petals</th>
                  <th>Element</th>
                  <th>Traditional Note</th>
                </tr>
              </thead>
              <tbody>
                {CHAKRAS.map((c) => (
                  <tr key={c.chakra}>
                    <td><strong>{c.chakra}</strong></td>
                    <td>{c.seat}</td>
                    <td>{c.petals}</td>
                    <td>{c.element}</td>
                    <td>{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ScrollReveal>
            <div className="sp-kundalini">
              <span className="sp-kundalini__label font-cinzel">The Goal of the Path</span>
              <p className="sp-kundalini__text font-serif">
                In the Shakta view, the awakened Kundalini rises from the Muladhara through
                the chakras and merges in the Sahasrara — the crown — where the seeker rests in
                union with the Divine Mother. This ascent is traditionally described as the
                meeting of the individual Shakti with the supreme Shakti.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <FramedFigure
              src={shaktam2Img}
              alt="Meditative forms of the Divine Mother and the inner Shakti"
              caption="The awakened Shakti — the inner journey of the seeker"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ WHY SHAKTAM MATTERS (CREAM) ══════════════ */}
      <section id="importance" className="sp-section sp-section--cream">
        <div className="sp-container">
          <ScrollReveal className="sp-section__head">
            <span className="sp-eyebrow">THE MOTHER'S RELEVANCE</span>
            <h2 className="sp-section__title font-cinzel">Why Shaktam Matters</h2>
            <p className="sp-section__subtitle font-serif">
              What the worship of the Mother offers the modern seeker
            </p>
            <Ornament />
          </ScrollReveal>

          <div className="sp-importance">
            {IMPORTANCE.map((item, i) => (
              <ScrollReveal key={item.title} delay={(i % 3) * 0.05}>
                <motion.div className="sp-importance__card" whileHover={{ y: -5 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sp-importance__num font-cinzel">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="sp-importance__title font-cinzel">{item.title}</h4>
                  <p className="sp-importance__text font-serif">{item.text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <div className="sp-peetha">
            <ScrollReveal>
              <span className="sp-peetha__label font-cinzel">The Shakti Peethas</span>
              <p className="sp-peetha__text font-serif">
                The tradition speaks of <strong>fifty-one Shakti Peethas</strong> — sacred places
                where the Mother is especially present. Among the most famous are
                <strong> Kamakhya</strong> in Assam, <strong>Kalighat</strong> in Kolkata,
                <strong> Vaishno Devi</strong> in the north and the great
                <strong> Kamakshi</strong> temples of South India — centres of pilgrimage to
                which devotees journey to receive the Mother's darshan and blessings.
              </p>
            </ScrollReveal>
          </div>

          <div className="sp-navadurga">
            <ScrollReveal>
              <h3 className="sp-block__title sp-block__title--maroon font-cinzel">The Navadurga — Nine Forms</h3>
              <p className="sp-note font-serif">
                Worshipped across the nine nights of Navaratri, the Navadurga are the nine
                classical forms of Durga:
              </p>
            </ScrollReveal>
            <div className="sp-navadurga__grid">
              {NAVADURGA.map((n, i) => (
                <ScrollReveal key={n.name} delay={(i % 3) * 0.04}>
                  <div className="sp-navadurga__card">
                    <span className="sp-navadurga__name font-cinzel">{n.name}</span>
                    <span className="sp-navadurga__sub font-serif">{n.sub}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal>
            <FramedFigure
              src={shaktam3Img}
              alt="The radiant and protective forms of the Goddess"
              caption="The many names of the one Mother"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ SHAKTI & THE DIVINE FORMS (MAROON) ══════════════ */}
      <section id="divine-forms" className="sp-section sp-section--maroon">
        <div className="sp-container">
          <ScrollReveal className="sp-section__head">
            <span className="sp-eyebrow sp-eyebrow--gold">ONE MOTHER, MANY FORMS</span>
            <h2 className="sp-section__title font-cinzel">Shakti and the Divine Forms</h2>
            <p className="sp-section__subtitle font-serif">
              The Mother's traditional relationship with the other paths of the Shanmata
            </p>
            <Ornament />
          </ScrollReveal>

          <div className="sp-grid sp-grid--2">
            {RELATIONSHIPS.map((r) => (
              <ScrollReveal key={r.god} delay={0.04}>
                <motion.div className="sp-card sp-card--deep" whileHover={{ y: -5 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sp-card__label font-cinzel">With {r.god}</span>
                  <h4 className="sp-card__h4 font-cinzel">{r.form}</h4>
                  <p className="sp-card__text font-serif">{r.text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="sp-unity">
              <span className="sp-unity__label font-cinzel">Traditional Understanding</span>
              <p className="sp-unity__text font-serif">
                In the Shanmata vision, these are not competing powers but the single Divine
                seen through different gates. Shaktam offers its own gate — the Mother
                Herself — while honouring the forms of Shiva, Vishnu, Surya, Ganapati and
                Skanda as expressions of the same Shakti.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ THE ESSENCE OF SHAKTAM (CREAM) ══════════════ */}
      <section id="essence" className="sp-section sp-section--cream">
        <div className="sp-container">
          <ScrollReveal className="sp-section__head">
            <span className="sp-eyebrow">THE HEART OF THE PATH</span>
            <h2 className="sp-section__title font-cinzel">The Essence of Shaktam</h2>
            <p className="sp-section__subtitle font-serif">
              Three pillars, one practical rule, and a closing prayer
            </p>
            <Ornament />
          </ScrollReveal>

          <h3 className="sp-block__title sp-block__title--maroon font-cinzel">The Three Pillars</h3>
          <div className="sp-grid sp-grid--3">
            {PILLARS.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.06}>
                <motion.div className="sp-card sp-pillar" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <span className="sp-pillar__num font-cinzel">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="sp-card__h4 font-cinzel">{p.title}</h4>
                  <p className="sp-card__text font-serif">{p.text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="sp-rule">
              <span className="sp-rule__label font-cinzel">The Practical Rule</span>
              <p className="sp-rule__text font-serif">
                “Simple, sincere and daily — a little offered to the Mother every day is
                worth far more than a great deal offered only occasionally.”
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="sp-closing">
              <span className="sp-closing__mark" aria-hidden="true">❝</span>
              <p className="sp-closing__sanskrit font-serif">
                Ya Devi Sarva Bhuteshu Shakti Rupena Samsthita,
                Namastasyai Namastasyai Namastasyai Namo Namah
              </p>
              <p className="sp-closing__source font-cinzel">Devi Mahatmyam · Chandika Stotram</p>
              <p className="sp-closing__meaning font-serif">
                “Salutations again and again to the Goddess who dwells in every being as
                Shakti, as Power, as Strength.”
              </p>
              <p className="sp-closing__note font-serif">
                Presented as the theological and devotional heart of Shaktam, offered
                respectfully within the larger family of the Shanmata.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ CLOSING SPIRITUAL CALL (MAROON) ══════════════ */}
      <section className="sp-cta">
        <div className="sp-cta__geo" aria-hidden="true" />
        <ScrollReveal>
          <div className="sp-cta__box">
            <span className="sp-cta__corner sp-cta__corner--tl" aria-hidden="true">✦</span>
            <span className="sp-cta__corner sp-cta__corner--tr" aria-hidden="true">✦</span>
            <span className="sp-cta__corner sp-cta__corner--bl" aria-hidden="true">✦</span>
            <span className="sp-cta__corner sp-cta__corner--br" aria-hidden="true">✦</span>

            <span className="sp-cta__badge">🪷 Take Refuge in the Mother</span>
            <h2 className="sp-cta__heading font-cinzel">
              Begin Your Journey Into<br />
              <span className="sp-cta__heading-gold">Shaktam</span>
            </h2>
            <div className="sp-cta__divider">
              <span className="sp-cta__divider-line" />
              <span className="sp-cta__divider-lotus">✿</span>
              <span className="sp-cta__divider-line" />
            </div>
            <p className="sp-cta__body font-serif">
              Explore the scriptures, the Mahavidyas, the two great Kulas and the practical
              upasana of the Divine Mother — with the humility that befits Her children.
            </p>
            <div className="sp-cta__btns">
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