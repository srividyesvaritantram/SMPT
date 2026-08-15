import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import templeArchImg from '../../assets/temple_architecture.jpeg';
import templesImg from '../../assets/temples.png';
import navaraImg from '../../assets/navara.jpeg';
import nagaraImg from '../../assets/nagara.jpeg';
import kajarahoImg from '../../assets/kajaraho.jpeg';
import cholaImg from '../../assets/chola.jpeg';
import bruhadeswaraImg from '../../assets/bruhadeswara.jpeg';
import madhuraiImg from '../../assets/madhurai.jpeg';
import madhurai1Img from '../../assets/madhurai1.jpeg';
import kanchipuramImg from '../../assets/kanchipuram.jpeg';
import koranrkImg from '../../assets/koranrk.jpeg';
import konarkImg from '../../assets/konark.jpeg';
import puriImg from '../../assets/puri.jpeg';
import pooriImg from '../../assets/poori.jpeg';
import gangImg from '../../assets/gang.jpeg';
import astaImg from '../../assets/asta.jpeg';
import templeOfBoImg from '../../assets/temple_of_bo.jpeg';
import manasaraImg from '../../assets/manasara.jpeg';
import tempImg from '../../assets/temp.jpeg';
import './TempleSilpaShastra.css';

const WA_URL =
  'https://wa.me/919390886029?text=Namaste%20%F0%9F%99%8F%20I%20would%20like%20to%20book%20a%20Consultation.';

/* ───────────────────────────────────────────────────────────────────────
   REUSABLE BUILDING BLOCKS
─────────────────────────────────────────────────────────────────────── */

function SilpaReveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

/* Alternating maroon / cream content block.
   Headings stay sharp and readable; the detailed body is wrapped in a
   premium locked panel so the deeper knowledge is reserved for the Guru. */
function SilpaBlock({ tone = 'maroon', eyebrow, title, subtitle, children, wide = false, locked = true }) {
  const hasHead = Boolean(eyebrow || title || subtitle);
  return (
    <div className={`silpa-block silpa-block--${tone}`}>
      <div className={`silpa-block__inner${wide ? ' silpa-block__inner--wide' : ''}`}>
        {hasHead && (
          <SilpaReveal>
            <div className="silpa-block__head">
              {eyebrow && (
                <span className="silpa-eyebrow">
                  <span className="silpa-eyebrow__rule" />
                  {eyebrow}
                </span>
              )}
              {title && <h3 className="silpa-h3 font-cinzel">{title}</h3>}
              {subtitle && <p className="silpa-sub font-serif">{subtitle}</p>}
            </div>
          </SilpaReveal>
        )}
        {locked ? <SilpaLocked>{children}</SilpaLocked> : children}
      </div>
    </div>
  );
}

/* Premium locked knowledge panel — blurred body behind a soft dark scrim,
   finished with a gold-edged lock badge. */
function SilpaLocked({ children }) {
  return (
    <div className="silpa-locked">
      <div className="silpa-locked__body">{children}</div>
      <div className="silpa-locked__fade" aria-hidden="true" />
      <div className="silpa-locked__badge">
        <svg
          className="silpa-locked__icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="4.5" y="10.5" width="15" height="9.5" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 13.8v2.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="16.9" r="1.1" fill="currentColor" />
        </svg>
        <span className="silpa-locked__badge-title">Locked</span>
        <span className="silpa-locked__badge-sub">Reserved for Guru-guided study</span>
      </div>
    </div>
  );
}

/* Large framed temple image — ratio matches the photo, so nothing is cropped */
function SilpaImage({ src, alt, fit = 'cover', caption }) {
  return (
    <figure className={`silpa-fig${fit === 'contain' ? ' silpa-fig--contain' : ''}`}>
      <div className="silpa-fig__frame">
        <img
          src={src}
          alt={alt}
          className="silpa-fig__img"
          style={{ objectFit: fit }}
          loading="lazy"
        />
      </div>
      {caption && <figcaption className="silpa-fig__cap font-serif">{caption}</figcaption>}
    </figure>
  );
}

/* Gold highlighted statement line */
function SilpaStatement({ children }) {
  return (
    <div className="silpa-statement">
      <span className="silpa-statement__mark" aria-hidden="true">✦</span>
      <p className="silpa-statement__text font-serif">{children}</p>
    </div>
  );
}

/* Sanskrit verse card */
function SilpaQuote({ sanskrit, translation, source }) {
  return (
    <figure className="silpa-quote">
      <span className="silpa-quote__mark" aria-hidden="true">❝</span>
      <p className="silpa-quote__sanskrit font-serif">{sanskrit}</p>
      {translation && <p className="silpa-quote__translation font-serif">{translation}</p>}
      {source && <figcaption className="silpa-quote__source font-cinzel">{source}</figcaption>}
    </figure>
  );
}

/* Responsive scholarly table — desktop table / mobile stacked cards */
function SilpaDataTable({ columns, rows, className = '', colWidths }) {
  const template = colWidths || COL_WIDTHS[columns.length] || '1fr';

  return (
    <div className={`silpa-table-wrap${className ? ` ${className}` : ''}`}>
      <div
        className="silpa-table"
        role="table"
        style={{ '--silpa-cols': template }}
      >
        <div className="silpa-table__head" role="row">
          {columns.map((c) => (
            <div className="silpa-table__th" role="columnheader" key={c.key}>
              {c.label}
            </div>
          ))}
        </div>
        {rows.map((row, i) => (
          <div className="silpa-table__row" role="row" key={i}>
            {columns.map((c) => (
              <div
                className="silpa-table__td"
                role="cell"
                data-label={c.label}
                key={c.key}
              >
                {row[c.key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Card */
function SilpaCard({ num, icon, title, desc, tone = 'light', children }) {
  return (
    <motion.div
      className={`silpa-card silpa-card--${tone}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {num && <span className="silpa-card__num font-cinzel">{num}</span>}
      {icon && <span className="silpa-card__icon">{icon}</span>}
      {title && <h4 className="silpa-card__title font-cinzel">{title}</h4>}
      {desc && <p className="silpa-card__desc font-serif">{desc}</p>}
      {children}
    </motion.div>
  );
}

/* Small chip / tag */
function SilpaChip({ children }) {
  return <span className="silpa-chip font-serif">✦ {children}</span>;
}

const COL_WIDTHS = {
  2: '0.9fr 1.6fr',
  3: '1.2fr 1.3fr 1fr',
  4: '1.1fr 0.9fr 1.4fr 1.2fr',
  5: '0.8fr 1fr 1.3fr 1.3fr 1.2fr',
  6: '1.4fr 1fr 1.2fr 1fr 1fr 0.9fr',
};

/* ═══════════════════════════════════════════════════════════════════
   CONTENT DATA
═══════════════════════════════════════════════════════════════════ */

const MAIN_PRINCIPLES = [
  { subject: 'Vāstu-Puruṣa Maṇḍala', meaning: 'Temple floor plan = Cosmic man. 81 or 64 squares', sastra: 'Mānasāra Ch 2, Matsya Purāṇa 252' },
  { subject: 'Āyādi Ṣaḍvarga', meaning: '6 calculations: Āya, Vyaya, Riksha, Yoni, Vāra, Tithi', sastra: 'Mayamata Ch 3. Decides if temple is auspicious' },
  { subject: 'Tāla-Māna', meaning: 'Proportion system for murti. 10 Tāla = full human', sastra: 'Agni Purāṇa 43, Śilparatna' },
  { subject: 'Garbha-gṛha', meaning: 'Womb chamber. Dark, square, no windows', sastra: 'Suprabhedāgama. Represents Yoni + Brahmanda' },
  { subject: 'Śikhara / Gopura', meaning: 'Tower. Represents Mount Meru', sastra: 'Śilparatna Ch 12. Kalinga = curvilinear' },
  { subject: 'Prāṇa-Pratiṣṭhā', meaning: 'Ritual to put life in murti', sastra: 'Pāñcarātra Āgama. Without this it’s just stone' },
  { subject: 'Upapīṭha + Adhiṣṭhāna', meaning: 'Base of temple. 5–7 layers = 5 elements', sastra: 'Mānasāra Ch 15' },
  { subject: 'Parivāra Devatā', meaning: '8 Dikpālas, Navagraha, Dvārapāla placement', sastra: 'Agni Purāṇa 52' },
];

const REFERENCE_BOOKS = [
  { name: 'Mānasāra Śilpa Śāstra', origin: 'Vishwakarma tradition', subject: 'Encyclopedia. 70 chapters. All temple types, measurements, proportions', pramana: 'Most quoted in South India. Mānasāra 1.1' },
  { name: 'Mayamata', origin: 'Mayāsura Ṛṣi', subject: 'South Indian temples, Dravida style. 36 chapters', pramana: 'Used in Tamil Nadu, Kerala' },
  { name: 'Śilparatna', origin: 'Śrīkumāra', subject: 'Orissa / Kalinga style. Jagannātha temple rules', pramana: 'Used in Purī, Bhubaneśwar' },
  { name: 'Samarāṅgaṇa Sūtradhāra', origin: 'King Bhoja Paramara', subject: '83 chapters. City planning + Temple + Sculpture', pramana: '11th Century. Rajasthan/Malwa' },
  { name: 'Aparājita-pṛcchā', origin: 'Viśvakarma', subject: 'North Indian Nagara style', pramana: 'Used in Gujarat, Rajasthan' },
  { name: 'Vāstuvidyā', origin: 'Kerala', subject: 'Kerala temple style. Wooden temples', pramana: 'Used in Guruvayur' },
  { name: 'Suprabhedāgama', origin: 'Śaiva Āgama', subject: 'Śiva temple construction, murti prāṇa-pratiṣṭhā', pramana: 'Tamil Nadu Śiva temples' },
  { name: 'Pāñcarātra Āgama', origin: 'Viṣṇu tradition', subject: 'Viṣṇu, Rāma, Kṛṣṇa temples. Jagannātha rules', pramana: 'Purī Jagannātha uses this' },
  { name: 'Kāśyapa Śilpa Śāstra', origin: 'Kāśyapa Ṛṣi', subject: 'General temple rules, murti lakṣaṇa', pramana: 'Very old, quoted everywhere' },
];

const TEMPLE_STYLES = [
  { style: 'Nāgara', region: 'North India', shikhara: 'Curved, Beehive', sastra: 'Aparājita-pṛcchā', example: 'Khajuraho, Konark' },
  { style: 'Draviḍa', region: 'South India', shikhara: 'Pyramid, Stepped Gopura', sastra: 'Mayamata, Mānasāra', example: 'Meenakshi, Tanjore' },
  { style: 'Vesara', region: 'Deccan', shikhara: 'Mix of both', sastra: 'Samarāṅgaṇa', example: 'Hoysala temples' },
];

const STRICT_REASONS = [
  { label: 'Śāstra Reason — Mānasāra 1.12', sanskrit: 'Yathā dehe jīvaḥ tathā mandire devatā', meaning: 'As life is in body, so Devatā is in temple.' },
  { label: 'Purāṇa Reason — Garuda Purāṇa 46.22', sanskrit: 'Mandira-kārako yaśca sa yāti viṣṇu-mandiram', meaning: 'One who builds temple goes to Viṣṇu-loka.' },
];

const LEARNING_PATH = [
  { level: 'Foundation', texts: 'Matsya Purāṇa 252–270 + Agni Purāṇa 42–50 — Basics' },
  { level: 'Measurement', texts: 'Mānasāra — Measurements, proportions' },
  { level: 'Regional Architecture', texts: 'Mayamata or Śilparatna — Based on region' },
  { level: 'Ritual', texts: 'Pāñcarātra Āgama or Śaiva Āgama — Ritual + Prāṇa-pratiṣṭhā' },
];

const THREE_BODIES = [
  { name: 'Śilpa Śāstra', role: 'Body of Temple' },
  { name: 'Āgama', role: 'Life of Temple' },
  { name: 'Purāṇa', role: 'Soul/Story of Temple' },
];

const WITHOUT_LINES = [
  'Without Śilpa = Wrong structure',
  'Without Āgama = Empty structure',
  'Without Purāṇa = No bhakti',
];

const NAGARA_REFS = [
  { name: 'Aparājita-pṛcchā', origin: 'Viśvakarma', subject: 'North Indian Nagara style', region: 'Used in Gujarat, Rajasthan' },
  { name: 'Vāstuvidyā', origin: 'Kerala', subject: 'Kerala temple style. Wooden temples', region: 'Used in Guruvayur' },
  { name: 'Suprabhedāgama', origin: 'Śaiva Āgama', subject: 'Śiva temple construction, murti prāṇa-pratiṣṭhā', region: 'Tamil Nadu Śiva temples' },
  { name: 'Pāñcarātra Āgama', origin: 'Viṣṇu tradition', subject: 'Viṣṇu, Rāma, Kṛṣṇa temples. Jagannātha rules', region: 'Purī Jagannātha uses this' },
  { name: 'Kāśyapa Śilpa Śāstra', origin: 'Kāśyapa Ṛṣi', subject: 'General temple rules, murti lakṣaṇa', region: 'Very old, quoted everywhere' },
];

const DIKPALAKAS = [
  { dir: 'East — Pūrva', name: 'Indra', vahana: 'Airavata Elephant', weapon: 'Vajra', color: 'White/Gold', planet: 'Sun' },
  { dir: 'South-East — Āgneya', name: 'Agni', vahana: 'Ram/Mesha', weapon: 'Śakti Spear', color: 'Red', planet: 'Venus' },
  { dir: 'South — Dakṣiṇa', name: 'Yama', vahana: 'Buffalo', weapon: 'Daṇḍa Stick', color: 'Black', planet: 'Mars' },
  { dir: 'South-West — Nairṛtya', name: 'Nairṛti / Rakṣasa', vahana: 'Human', weapon: 'Khaḍga Sword', color: 'Blue-Black', planet: 'Rahu' },
  { dir: 'West — Paścima', name: 'Varuṇa', vahana: 'Makara Crocodile', weapon: 'Pāśa Noose', color: 'White-Blue', planet: 'Saturn' },
  { dir: 'North-West — Vāyavya', name: 'Vāyu', vahana: 'Deer/Antelope', weapon: 'Dhwaja Flag', color: 'Grey/Smoke', planet: 'Moon' },
  { dir: 'North — Uttara', name: 'Kubera', vahana: 'Human/Mongoose', weapon: 'Gadā Mace', color: 'Yellow', planet: 'Jupiter' },
  { dir: 'North-East — Īśāna', name: 'Īśāna / Śiva', vahana: 'Bull Nandi', weapon: 'Triśūla', color: 'Crystal White', planet: 'Mercury' },
];

const DIKPALAKA_DUTIES = [
  {
    name: 'INDRA — EAST',
    duty: 'King of Devas + Rain + Victory',
    purana: 'Rig Veda 2.12, Bhāgavata 6.9 — He protects dharma and gives victory to good.',
    silpa: 'Guards main entrance. In temple, Indra’s image on East Gopura. Gives name-fame to temple.',
    mantra: 'Om Indrāya Namaḥ',
  },
  {
    name: 'AGNI — SOUTH-EAST',
    duty: 'Carrier of offerings to Devas + Purification + Tejas',
    purana: 'Matsya 93.5 — “Agni is mouth of Devas. Whatever you offer in fire reaches gods”',
    silpa: 'Kitchen, Homa Kuṇḍa, Lamp room must be in SE. He burns impurities.',
    mantra: 'Om Agnaye Namaḥ',
  },
  {
    name: 'YAMA — SOUTH',
    duty: 'Dharma Rāja + Judge of dead + Discipline + Ancestors',
    purana: 'Garuda Purāṇa Preta Kāṇḍa — He maintains cosmic law.',
    silpa: 'Pitṛ section, Toilet, Septic tank in South. He removes dead energy.',
    mantra: 'Om Yamāya Namaḥ',
  },
  {
    name: 'NAIRṚTI — SOUTH-WEST',
    duty: 'Destroyer of enemies + Stability + Weight',
    purana: 'Śiva Purāṇa — Nairṛti is a Rakṣasa who surrendered to Śiva. Guards against black magic.',
    silpa: 'Heaviest part of house/temple. Master bedroom, treasury. Gives stability.',
    mantra: 'Om Nairṛtyai Namaḥ',
  },
  {
    name: 'VARUṆA — WEST',
    duty: 'Lord of Water + Law + Contracts + Rain',
    purana: 'Atharva Veda 4.16 — “Varuṇa sees 1000 eyes. Nothing escapes him”',
    silpa: 'Water tank, Bathroom, Borewell in West. He controls water flow.',
    mantra: 'Om Varuṇāya Namaḥ',
  },
  {
    name: 'VĀYU — NORTH-WEST',
    duty: 'Air + Movement + Communication + Speed',
    purana: 'Bhāgavata 3.12 — Vāyu carries smell, sound, life.',
    silpa: 'Living room, Guest room, Windows in NW. For good air circulation + guests.',
    mantra: 'Om Vāyave Namaḥ',
  },
  {
    name: 'KUBERA — NORTH',
    duty: 'Lord of Wealth + Treasury + Business',
    purana: 'Viṣṇu Purāṇa 2.10 — Friend of Śiva. Guards Yakṣas and wealth.',
    silpa: 'Locker, Cash box, Puja room in North. Face North while praying.',
    mantra: 'Om Kubērāya Namaḥ',
  },
  {
    name: 'ĪŚĀNA — NORTH-EAST',
    duty: 'Highest Wisdom + Spirituality + Purity + Śiva Himself',
    purana: 'Śiva Purāṇa Vāyu Samhitā — “Īśāna is Śiva’s face facing NE. Most auspicious”',
    silpa: 'Temple Garbha-gṛha, Puja room, Borewell, Meditation room in NE. Most sacred.',
    mantra: 'Om Īśānāya Namaḥ',
  },
];

const MURTI_PLACEMENT = [
  { spot: 'East Gopura', dikpala: 'Indra', purpose: 'Gives entry permission, victory' },
  { spot: 'SE Corner', dikpala: 'Agni', purpose: 'Purifies offerings' },
  { spot: 'South Wall', dikpala: 'Yama', purpose: 'Controls death, disease' },
  { spot: 'SW Corner', dikpala: 'Nairṛti', purpose: 'Foundation stability' },
  { spot: 'West Wall', dikpala: 'Varuṇa', purpose: 'Protects from water damage' },
  { spot: 'NW Corner', dikpala: 'Vāyu', purpose: 'Ventilation, sound' },
  { spot: 'North Wall', dikpala: 'Kubera', purpose: 'Temple treasury, hundi' },
  { spot: 'NE Corner', dikpala: 'Īśāna', purpose: 'Near Garbha-gṛha, most powerful' },
];

const DIKPALAKA_STORIES = [
  { title: 'Origin of the Dikpālakas — Matsya Purāṇa', text: 'When Vāstu Puruṣa was born from Śiva’s sweat, he was hungry. 45 devas including 8 Dikpālas sat on him and pinned him down. So now they guard that direction forever.' },
  { title: 'Kubera and the Northern Direction — Viṣṇu Purāṇa', text: 'Kubera did tapas in North. Brahma gave him North direction + Alakapuri. So North = Direction of wealth.' },
  { title: 'Īśāna and the North-East — Śiva Purāṇa', text: 'Śiva showed 5 faces. Face to NE = Īśāna. That’s why NE corner is called Īśāna Koṇa and is most powerful.' },
];

const DIKPALAKA_BENEFITS = [
  { num: '01', title: 'Protection', desc: 'No theft, no accident' },
  { num: '02', title: 'Balance', desc: '5 elements balanced' },
  { num: '03', title: 'Energy', desc: 'Temple becomes Chaitanya = Living' },
  { num: '04', title: 'Vāstu Doṣa Nivāraṇa', desc: 'Removes plot defects' },
];

const DIKPALAKA_MEMORY = [
  { dir: 'East', val: 'Indra for Name' },
  { dir: 'North', val: 'Kubera for Money' },
  { dir: 'NE', val: 'Īśāna for Mokṣa' },
  { dir: 'South', val: 'Yama for Discipline' },
  { dir: 'SW', val: 'Nairṛti for Stability' },
];

const TWELVE_GRANTHAS = [
  { name: 'Mānasāra', author: 'Viśvakarmā tradition', region: 'All-India · Viśvakarmā', content: 'Encyclopedia of temple architecture — 70 chapters, all temple types, measurements, proportions', pramana: 'Most quoted in South India · Mānasāra 1.1' },
  { name: 'Mayamata', author: 'Maya (Mayāsura)', region: 'South India · Śiva', content: 'Dravida temple construction — 36 chapters, plan, maṇḍala, vimāna', pramana: 'Used in Tamil Nadu, Kerala' },
  { name: 'Śilparatna', author: 'Śrīkumāra', region: 'Odisha/Kaliṅga · Jagannātha', content: 'Kaliṅga style, Jagannātha temple rules, śikhara and mūrti-lakṣaṇa', pramana: 'Followed at Purī, Bhubaneśvar' },
  { name: 'Samarāṅgaṇa Sūtradhāra', author: 'King Bhoja Paramāra', region: 'Malwa/Rajasthan · Nāgara', content: '83 chapters — city planning + temple + sculpture', pramana: '11th Century · Rajasthan/Malwa' },
  { name: 'Aparājita-pṛcchā', author: 'Bhrahmā — taught by Viśvakarmā', region: 'North India · Nāgara', content: 'Nāgara style, gopura and temple complexes', pramana: 'Used in Gujarat, Rajasthan' },
  { name: 'Kāśyapa Śilpa Śāstra', author: 'Kāśyapa Ṛṣi', region: 'All-India · Viṣṇu', content: 'General temple rules, mūrti lakṣaṇa', pramana: 'Very old, quoted everywhere' },
  { name: 'Vāstuvidyā', author: 'Viśvakarmā tradition', region: 'Kerala · Bhagavatī/Śiva', content: 'Kerala temple style, wooden temples, rathas', pramana: 'Followed in Guruvāyur' },
  { name: 'Viśvakarma Śilpa', author: 'Viśvakarmā', region: 'All-India · Viśvakarmā', content: 'Craft rules for temple, sculpture and instruments', pramana: 'Quoted with Mānasāra' },
  { name: 'Suprabhedāgama', author: 'Śaiva Āgama', region: 'Tamil Nadu · Śiva', content: 'Śiva temple construction, mūrti, prāṇa-pratiṣṭhā', pramana: 'Tamil Nadu Śiva temples' },
  { name: 'Pāñcarātra Āgama', author: 'Viṣṇu tradition', region: 'All-India · Viṣṇu', content: 'Viṣṇu, Rāma, Kṛṣṇa temple rules; Jagannātha ritual', pramana: 'Purī Jagannātha uses this' },
  { name: 'Śukranīti', author: 'Śukrācārya', region: 'All-India · Rāja-nīti', content: 'Nīti + śilpa — royal cities, forts, temples', pramana: 'Widely quoted in manuals' },
  { name: 'Bṛhat-saṁhitā', author: 'Varāhamihira', region: 'All-India · Jyotiṣa', content: 'Astrology + architecture — temple orientation and muhūrta', pramana: 'Quoted with the Purāṇas' },
];

const PRAMANA_SECTIONS = [
  { purana: 'SKANDA PURĀṆA', text: 'Utkala Khaṇḍa Ch 29–30 — Jagannātha Temple Purī. Kāśī Khaṇḍa — Kashi Vishwanath. Prabhāsa Khaṇḍa — Somnath.' },
  { purana: 'BRAHMA PURĀṆA', text: 'Kṛṣṇa Khaṇḍa Ch 50 — Dwārakā Temple.' },
  { purana: 'MATSYA PURĀṆA', text: 'Adhyāya 252–270 — The “Vāstu Purāṇa”.' },
  { purana: 'AGNI PURĀṆA', text: 'Adhyāya 42–106 — Full engineering manual.' },
  { purana: 'GARUDA PURĀṆA', text: 'Ācāra Kāṇḍa Ch 46 — Temple Renovation Rules.' },
  { purana: 'VIṢṆU PURĀṆA + BHĀGAVATA', text: 'Viśvakarma Mahatmya.' },
];

const WHY_IMPORTANT = [
  { name: 'Devatā Vāsa', desc: 'A temple built by śāstra is a fit home — the Devatā agrees to descend and dwell there.' },
  { name: 'Energy Grid', desc: 'The maṇḍala layout turns the temple into a Yantra that channels subtle energy.' },
  { name: 'Puṇya Multiplier', desc: 'Śāstric building multiplies the puṇya of worship, dāna and darśana.' },
  { name: 'Time Proof', desc: 'Right proportions make the structure survive centuries — the living proof of the rule.' },
  { name: 'Mokṣa Dvāra', desc: 'With Āgama ritual the temple becomes a gateway — Man → Mandira → Devatā → Mokṣa.' },
];

const KEY_CONCEPTS = [
  { title: 'ĀYĀDI ṢAḌVARGA — 6 AUSPICIOUS CALCULATIONS', source: 'Mayamata Ch 3', text: 'Āya = Income, Vyaya = Expense, Riksha = Nakshatra, Yoni = Compatibility, Vāra = Day, Tithi = Date. If Āya > Vyaya = Temple will prosper.' },
  { title: 'TĀLA-MĀNA SYSTEM', source: 'Agni Purāṇa 43, Kāśyapa Śilpa', text: 'Human body = 10 Tāla. Murti also. Face = 1 Tāla.' },
  { title: 'GARBHAGRIHA = YONI + BRAHMĀṆḌA', source: 'Suprabhedāgama', text: 'Square room, no windows, dark = Womb. Śikhara above = Cosmic mountain. So energy goes up.' },
  { title: 'PRĀṆA-PRATIṢṬHĀ', source: 'Pāñcarātra Āgama', text: 'Without this 3-day ritual, murti is just stone. With this, Devatā enters and stays = Āvāhana.' },
];

const READING_PATH = [
  { group: 'For Beginners', steps: ['Matsya Purāṇa 252–270 — Stories + Basics', 'Agni Purāṇa 42–50 — Types + Rules'] },
  { group: 'For Architects', steps: ['Mānasāra — All measurements', 'Mayamata — If South India'] },
  { group: 'For Ritual', steps: ['Suprabhedāgama — Śiva temples', 'Pāñcarātra Āgama — Viṣṇu temples'] },
  { group: 'For History', steps: ['Śilparatna — Jagannātha, Konark', 'Samarāṅgaṇa — Khajuraho style'] },
];

const THREE_DIMENSIONS = [
  { name: 'PURĀṆA', role: 'Gives Why' },
  { name: 'ŚILPA ŚĀSTRA', role: 'Gives How' },
  { name: 'ĀGAMA', role: 'Gives Who' },
];

const CHOLA_TEXT =
  'The Great Living Chola Temples comprise the three great 11th and 12th century temples of the Chola dynasty: the Brihadisvara Temple of Thanjavur, the Brihadisvara Temple of Gangaikondacholisvaram, and the Airavatesvara Temple of Darasuram. They are exemplary examples of the Dravidian style of temple architecture, and together they form a UNESCO World Heritage site.';

const BRIHADISVARA_TEXT =
  'The Brihadisvara Temple at Thanjavur, the masterpiece of King Rajaraja Chola, rises as a vast pyramidal vimana crowned by a single stone (Sama Varma), its every tier rich with sculptural decoration. Gangaikondacholisvaram, built by his son Rajendra, is renowned for its bronze sculptures and the great Nandi that faces the soaring tower. The Airavatesvara Temple at Darasuram, raised by Rajaraja Chola II, unites Shaivism, Vaishnavism and Shaktism within one sacred compound.';

const MEENAKSHI_INTRO =
  'The Meenakshi Temple in Madurai is a prime example of Dravidian architecture, the traditional style of South Indian Hindu temples. Concentric rectangular courtyards surround the main inner shrines dedicated to Goddess Meenakshi and Lord Sundareswarar, entered through fourteen massive, towering gateway gopurams covered with thousands of colorful, carved figures of gods, animals, and myths. Its famous Thousand-Pillar Hall, the other pillared mandapas and the sacred Golden Lotus Tank used for ritual bathing make the whole complex a living treasury of śilpa.';

const MEENAKSHI_FEATURES = [
  { title: 'Gopurams', desc: 'Fourteen massive, towering gateway towers covered with thousands of colorful, carved figures of gods, animals, and myths.' },
  { title: 'Pillared Halls', desc: 'Large open pavilions and halls, including the famous Thousand-Pillar Hall with detailed stone carvings.' },
  { title: 'Layout', desc: 'Concentric rectangular courtyards surrounding the main inner shrines dedicated to Goddess Meenakshi and Lord Sundareswarar.' },
  { title: 'Water Tank', desc: 'The sacred Golden Lotus Tank used for ritual bathing inside the complex.' },
];

const KANCHI_INTRO =
  'The Kanchi Kamakshi Amman Temple in Kanchipuram features classical Dravidian architecture. Its four entrances are marked by soaring, intricately carved gateway gopurams in the cardinal directions, and the sanctum sanctorum is crowned with a prominent golden vimana rising directly above the deity’s seat. The Gayatri Mandapam is a magnificent pillared hall with 24 pillars, symbolizing the 24 syllables of the sacred Gayatri Mantra. Originally founded or shaped during the 6th century by Pallava kings, the temple was later expanded and renovated by the Chola and Vijayanagara empires.';

const KANCHI_FEATURES = [
  { title: 'Gopurams', desc: 'Four entrances marked by soaring, intricately carved gateway gopurams in the cardinal directions.' },
  { title: 'Golden Vimana', desc: 'The sanctum sanctorum crowned with a prominent golden vimana rising directly above the deity’s seat.' },
  { title: 'Gayatri Mandapam', desc: 'A magnificent pillared hall with 24 pillars, symbolizing the 24 syllables of the sacred Gayatri Mantra.' },
  { title: 'Dynastic Layering', desc: 'Founded or shaped during the 6th century by Pallava kings, later expanded and renovated by the Chola and Vijayanagara empires.' },
];

const VARADARAJA_TEXT =
  'The Varadaraja Perumal Temple — the great Viṣṇu shrine of Kanchipuram — rises in the classical Dravida style around the hill of Hastigiri, crowned by the golden vimana above the sanctum of Varadaraja, the giver of boons. It is one of the 108 Divya Deśams, sung by the Āḻvārs, where the Lord is worshipped with his consorts. Its grand 96-pillared hall and sacred tank mark it as one of the richest śilpa monuments of Tamil Nadu.';

const KONARK_PURANA = [
  { purana: 'Sāmba Purāṇa', text: 'Samba, the son of Kṛṣṇa, cured of leprosy by worshipping the Sun at Mitravana, established Sūrya worship — the seed of the great sun temple.' },
  { purana: 'Bhaviṣya Purāṇa', text: 'Records the Sun-worship traditions of the Maga priests and the ritual of Sūrya upāsanā at Koṇārka.' },
  { purana: 'Skanda Purāṇa', text: 'Speaks of Koṇārka kṣetra and the glory of the Sun-god on the sea-coast of Kaliṅga.' },
  { purana: 'Brahma Purāṇa', text: 'Preserves the pramāṇa of Sūrya-mandira building and worship in ancient Kaliṅga.' },
];

const KONARK_ARCH = [
  { part: '24 Wheels', name: 'Cakras', feature: 'Great carved wheels on either side of the ratha, marking day and night', meaning: 'The wheel of time (kāla-cakra) under Sūrya’s rule' },
  { part: '7 Horses', name: 'Aśvas', feature: 'Seven carved horses drawing the chariot', meaning: 'The seven days of the week · the seven Vedic meters' },
  { part: 'Vimāna', name: 'Deula', feature: 'The great rekhā tower above the sanctum', meaning: 'The mountain of the Sun rising toward the sky' },
  { part: 'Jaga-mohana', name: 'Assembly Hall', feature: 'The surviving hall of worship before the sanctum', meaning: 'The gathering of devotees for darśana' },
  { part: 'Nāṭa Maṇḍapa', name: 'Dance Hall', feature: 'Hall adorned with music, dance and Kāma scenes', meaning: 'The joy (līlā) of creation' },
  { part: 'Aruna Stambha', name: 'Pillar of Aruna', feature: 'Monolithic pillar crowned with Aruna, the Sun’s charioteer', meaning: 'The red dawn that announces Sūrya' },
];

const KONARK_RULES = [
  'The whole temple is conceived as Sūrya’s celestial chariot — ratha architecture in the Kaliṅga śilpa grammar.',
  'Stone interlocking without mortar (khondalite) carries every load — no cement binds the monument.',
  'Every wheel, horse and figure is fixed by the vāstu maṇḍala so the rising sun illumines the deity.',
];

const KONARK_DEITY =
  'The central image of Sūrya was carved from green chlorite, standing in the sanctum facing east, so that the rising sun falls upon the devatā.';

const PURI_PURANA = [
  { ref: 'Skanda Purāṇa — Utkala Khaṇḍa 29–30', text: 'Describes the building of the Jagannātha temple by King Indradyumna, guided by Viśvakarmā and divine vision.' },
  { ref: 'Matsya Purāṇa 252–270', text: 'The Vāstu Purāṇa — lays the śilpa grammar behind the Purī mandira.' },
  { ref: 'Pāñcarātra Āgama', text: 'Gives the ritual of Jagannātha darśana and prāṇa-pratiṣṭhā.' },
];

const PURI_ARCH = [
  { part: 'Siṁha Dwāra', detail: 'The Lion Gate — the eastern entrance facing the main road.' },
  { part: 'Bhoga Maṇḍapa', detail: 'The offering hall where mahā-prasāda is prepared and distributed.' },
  { part: 'Nāṭa Maṇḍapa', detail: 'The hall of ritual song and dance before the deity.' },
  { part: 'Jaga-mohana', detail: 'The assembly hall that leads toward the sanctum.' },
  { part: 'Vimāna / Deula', detail: 'The great tower over the garbha-gṛha, cresting in the Kaliṅga rekhā style.' },
  { part: 'Garbha-gṛha', detail: 'The dark womb chamber where Jagannātha, Balabhadra and Subhadrā dwell.' },
  { part: 'Nīla Chakra', detail: 'The blue wheel of Viṣṇu above the tower — the royal ensign of Purī.' },
];

const PURI_RULES = [
  'The temple follows the Kaliṅga rekhā-deula — the tower curves upward in a single sweep toward the Nīla Chakra.',
  'Four-part Kāḷa division — jaga-mohana, nāṭa maṇḍapa, bhoga maṇḍapa and the vimāna — rises in sequence toward the east.',
  'No cement binds the stones — interlocking blocks, sacred mortar and precise orientation carry the structure.',
];

const PURI_DEITY =
  'Jagannātha (“Lord of the Universe”) is worshipped with Balabhadra, Subhadrā and Sudarśana — the mūrtis are of sacred wood, renewed in the Nabakalebara ceremony.';

const KALINGA_COMPARE = [
  { aspect: '4 Parts', puri: 'Full four-part Kāḷa — bhoga, nāṭa, jaga-mohana, deula', konark: 'Chariot form — the temple itself is the ratha of Sūrya' },
  { aspect: 'No Cement', puri: 'Interlocked stones, no binding mortar', konark: 'Interlocked khondalite, no cement' },
  { aspect: 'Orientation', puri: 'East — facing the sunrise', konark: 'East — the rising sun lights the deity' },
  { aspect: 'Sculptures', puri: 'Giant guardian figures at the gates', konark: 'Musicians, wheels, horses and Kāma scenes' },
  { aspect: 'Vāstu Puruṣa', puri: 'The maṇḍala governs the whole plan', konark: 'The maṇḍala fixes every wheel and figure' },
];

const KALINGA_RULES = [
  { title: 'Four-Part Kāḷa Division', desc: 'jaga-mohana, nāṭa maṇḍapa, bhoga maṇḍapa and the vimāna rise in sequence toward the east.' },
  { title: 'No Cement', desc: 'Interlocked stones carry every load — no binding mortar holds the temple.' },
  { title: 'Orientation', desc: 'Both temples face east, toward the rising sun.' },
  { title: 'Sculptures', desc: 'Guardian figures and narrative carving cover every level of the monument.' },
  { title: 'Vāstu Puruṣa', desc: 'The maṇḍala governs the whole plan — every stone sits on its pada.' },
];

const SRI_YANTRA_TEXT =
  'The Sri Yantra Mandir at Amarkantak, Madhya Pradesh, is a living Śrī Chakra carved in stone. Its Nāgara-style śikhara is raised upon sacred geometry, following the Vāstu Maṇḍala. The shrine unfolds as nine interlocking triangles of stone, weaving Nāgara and Vesara elements into the tantric sacred geometry of the Śrī Yantra — a mandira that is itself a yantra.';

const KHAJURAHO_POINTS = [
  { num: '01', title: 'Western Group of Chandela Temples', desc: 'The great Western Group — the finest work of the Chandela builders, raised in the 10th–11th century in the Nāgara / Kālañjara Chandela style.' },
  { num: '02', title: 'Vāstu Puruṣa Maṇḍala', desc: 'Every shrine is laid out on the sacred maṇḍala — the plan of the cosmic man.' },
  { num: '03', title: 'Śekhari Śikhara = Mount Meru', desc: 'The clustered, many-spired tower rises like a mountain of peaks — Meru, the axis of the universe, drawn in stone.' },
  { num: '04', title: 'Jagatī', desc: 'The high platform terrace that elevates the whole temple above the ground.' },
  { num: '05', title: 'Adhiṣṭhāna', desc: 'The moulded base that roots the temple to the earth, layer upon layer.' },
  { num: '06', title: 'Kandariya Mahādeva', desc: 'The greatest of Khajuraho — 84 spires above the sanctum of Śiva.' },
  { num: '07', title: 'Lakṣmaṇa & Pārśvanātha', desc: 'The Viṣṇu and Jina temples that crown the western group with their mastery.' },
  { num: '08', title: 'Dharma, Kāma, Daily Life & Devatās', desc: 'Every face of life is carved — dharma beside kāma, daily life beside the devatās, mithuna couples and the union of Śiva–Śakti.' },
  { num: '09', title: 'Stone Interlocking & Proportions', desc: 'Dry stone interlocking, guided by tāla-māna, has stood for a thousand years.' },
  { num: '10', title: 'Light and Shadow', desc: 'Carved bands catch the sun so the wall lives through the day — dharma, kāla and mokṣa in one body of stone.' },
];

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════════ */

export default function TempleSilpaShastra() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const handleReadLess = () => {
    setExpanded(false);
    window.setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 420);
  };

  const navToBooking = () => {
    window.open(WA_URL, '_blank');
  };

  const navToOfferings = () => {
    setExpanded(false);
    navigate('/offerings');
    window.scrollTo(0, 0);
  };

  return (
    <section id="temple-silpa-sastra" className="silpa" ref={sectionRef}>

      {/* ── MAIN SECTION — maroon · image-left / content-right ── */}
      <div className="silpa-intro">
        <div className="aop-astro__inner">
          <div className="aop-astro__grid">

            {/* LEFT — image */}
            <motion.div
              className="aop-feat-img-col"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="aop-feat-img-glow" />
              <motion.div
                className="aop-feat-img-card"
                whileHover={{
                  scale: 1.022,
                  boxShadow:
                    '0 48px 96px rgba(90,18,40,0.20), 0 0 0 2.5px rgba(212,175,55,0.65), 0 0 64px rgba(212,175,55,0.16)',
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <img
                  src={templesImg}
                  alt="Temple Śilpa Śāstra — sacred temple architecture"
                  className="aop-feat-img"
                  loading="lazy"
                />
                <div className="aop-feat-img-shine" />
              </motion.div>
              <span className="aop-feat-corner aop-feat-corner--tl">✦</span>
              <span className="aop-feat-corner aop-feat-corner--br">✦</span>
            </motion.div>

            {/* RIGHT — content */}
            <motion.div
              className="aop-feat-content"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="aop-section-badge">🏛 Sacred Architecture</span>

              <h2 className="aop-feat-h2 font-cinzel">Temple Śilpa Śāstra</h2>

              <p className="aop-body font-serif">
                The sacred science of temple design, iconography, sculpture and
                consecrated space — governed by the Śilpa Śāstras, the Āgamas and
                the Purāṇas. Discover how the Deva-ālaya is conceived, measured,
                built and made alive.
              </p>

              <div className="silpa-intro__btns">
                <button
                  type="button"
                  className="silpa-toggle silpa-toggle--read-more"
                  onClick={() => setExpanded(true)}
                >
                  READ MORE <span className="silpa-toggle__arrow" aria-hidden="true">↓</span>
                </button>
                <button type="button" className="silpa-cta-btn" onClick={navToBooking}>
                  <span className="silpa-cta-btn__mark" aria-hidden="true">✦</span>
                  BOOK CONSULTATION
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <div className={`silpa__shell${expanded ? ' silpa__shell--open' : ''}`}>

        {/* ── EXPANDED EDUCATIONAL CONTENT ─────────────────────── */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="silpa-content"
              className="silpa-expand"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            >

              {/* 1 · HERO / INTRODUCTION — maroon */}
              <SilpaBlock
                tone="maroon"
                eyebrow="Vāstu Āgama · Pramāṇa"
                title="TEMPLE ŚILPA ŚĀSTRA – VĀSTU ĀGAMA"
                subtitle="Clear Introduction with Purāṇa Śāstra Pramāṇa References"
              >
                <SilpaImage
                  src={templeArchImg}
                  alt="Temple Śilpa Śāstra — sacred temple architecture"
                  fit="cover"
                  ratio="2/3"
                />
                <SilpaStatement>
                  Śilpa Śāstra = The science of art, architecture, sculpture, and
                  temple building. 1 of the 64 Kalās.
                </SilpaStatement>
                <h4 className="silpa-h4 font-cinzel">What Is Śilpa Śāstra?</h4>
                <div className="silpa-defs">
                  <SilpaCard icon="🛠️" title="Definition" tone="cream-on-deep" desc="Śilpam śilpinaḥ karma — The work of the craftsman that is done with śāstra rules." />
                  <SilpaCard icon="🏛️" title="Purpose" tone="cream-on-deep" desc="To build Deva-ālaya where Devatā can descend and stay = Āvāhana + Sthāpana." />
                </div>
                <SilpaStatement>
                  Man → Mandira → Devatā → Mokṣa — the temple is not stone. It is
                  the Yantra of the Universe in 3D.
                </SilpaStatement>
              </SilpaBlock>

              {/* 2 · THE EIGHT FOUNDATIONS — cream */}
              <SilpaBlock
                tone="cream"
                eyebrow="The Knowledge Grid"
                title="The Eight Foundations of Śilpa Śāstra"
              >
                <SilpaDataTable
                  colWidths="1.1fr 1.8fr 1fr"
                  columns={[
                    { key: 'subject', label: 'Subject' },
                    { key: 'meaning', label: 'What it Means' },
                    { key: 'sastra', label: 'Śāstra Reference' },
                  ]}
                  rows={MAIN_PRINCIPLES.map((m) => ({
                    subject: <strong className="silpa-strong">{m.subject}</strong>,
                    meaning: m.meaning,
                    sastra: m.sastra,
                  }))}
                />
              </SilpaBlock>

              {/* 3 · MAJOR ŚILPA ŚĀSTRAS AND ĀGAMAS — maroon */}
              <SilpaBlock
                tone="maroon"
                eyebrow="The Constitution Books"
                title="Major Śilpa Śāstras and Āgamas"
                subtitle="The Constitution Books of Temple Building in India"
              >
                <SilpaImage
                  src={navaraImg}
                  alt="Navara — the great Śilpa Śāstra granthas"
                  fit="cover"
                  ratio="7/10"
                />
                <SilpaDataTable
                  colWidths="1.1fr 0.9fr 1.5fr 1.2fr"
                  columns={[
                    { key: 'name', label: 'Śāstra / Āgama' },
                    { key: 'origin', label: 'Origin' },
                    { key: 'subject', label: 'Subject' },
                    { key: 'pramana', label: 'Pramāṇa' },
                  ]}
                  rows={REFERENCE_BOOKS.map((b) => ({
                    name: <strong className="silpa-strong">{b.name}</strong>,
                    origin: b.origin,
                    subject: b.subject,
                    pramana: b.pramana,
                  }))}
                />
              </SilpaBlock>

              {/* 4 · THREE GREAT TEMPLE STYLES — cream */}
              <SilpaBlock
                tone="cream"
                eyebrow="The Three Idioms"
                title="Three Great Temple Styles"
              >
                <SilpaDataTable
                  colWidths="0.7fr 1fr 1.4fr 1.4fr 1.2fr"
                  columns={[
                    { key: 'style', label: 'Style' },
                    { key: 'region', label: 'Region' },
                    { key: 'shikhara', label: 'Śikhara Shape' },
                    { key: 'sastra', label: 'Main Śāstra' },
                    { key: 'example', label: 'Example' },
                  ]}
                  rows={TEMPLE_STYLES.map((s) => ({
                    style: <strong className="silpa-strong">{s.style}</strong>,
                    region: s.region,
                    shikhara: s.shikhara,
                    sastra: s.sastra,
                    example: s.example,
                  }))}
                />
                <p className="silpa-callout font-serif">
                  <strong className="silpa-strong font-cinzel">Skanda Purāṇa says:</strong>{' '}
                  Purushottama = Nāgara style but with Dravida influence.
                </p>
              </SilpaBlock>

              {/* 5 · WHY ARE TEMPLE RULES SO STRICT — maroon */}
              <SilpaBlock
                tone="maroon"
                eyebrow="Why So Strict?"
                title="Why Are Temple Rules So Strict?"
              >
                <div className="silpa-truths">
                  {STRICT_REASONS.map((r) => (
                    <SilpaQuote
                      key={r.label}
                      sanskrit={r.sanskrit}
                      translation={r.meaning}
                      source={r.label}
                    />
                  ))}
                </div>
                <p className="silpa-body font-serif">
                  If the measurement is wrong by 1 aṅgula, the Devatā cannot sit
                  properly. That is why the Śilpi must observe upavāsa and japa
                  before carving.
                </p>
              </SilpaBlock>

              {/* 6 · LEARNING PATH + BODY·LIFE·SOUL — cream */}
              <SilpaBlock
                tone="cream"
                eyebrow="The Study Road"
                title="Learning Path for Śilpa Śāstra"
              >
                <div className="silpa-roadmap">
                  {LEARNING_PATH.map((l, i) => (
                    <motion.div
                      className="silpa-roadmap__row"
                      key={l.level}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <span className="silpa-roadmap__for font-cinzel">{l.level}</span>
                      <span className="silpa-roadmap__texts font-serif">{l.texts}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="silpa-three">
                  {THREE_BODIES.map((t) => (
                    <motion.div
                      className="silpa-three__card"
                      key={t.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <span className="silpa-three__name font-cinzel">{t.name}</span>
                      <span className="silpa-three__role font-serif">{t.role}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="silpa-without">
                  {WITHOUT_LINES.map((w) => (
                    <p className="silpa-without__line font-serif" key={w}>{w}</p>
                  ))}
                </div>
                <SilpaStatement>Mandira = Veda in stone</SilpaStatement>
              </SilpaBlock>

              {/* 7 · ADDITIONAL TRADITIONS — maroon */}
              <SilpaBlock
                tone="maroon"
                eyebrow="More Reference Granthas"
                title="Additional Śilpa Śāstra and Āgama Traditions"
              >
                <SilpaImage
                  src={nagaraImg}
                  alt="Nāgara style temple — additional reference granthas"
                  fit="cover"
                  ratio="3/2"
                />
                <div className="silpa-ref-grid">
                  {NAGARA_REFS.map((r) => (
                    <SilpaCard key={r.name} title={r.name} tone="cream-on-deep" desc={r.subject}>
                      <p className="silpa-card__meta font-serif">{r.origin}</p>
                      <p className="silpa-card__meta font-serif">{r.region}</p>
                    </SilpaCard>
                  ))}
                </div>
                <SilpaStatement>
                  Āgama = Ritual + Theology. &nbsp; Śilpa Śāstra = Architecture +
                  Measurement. &nbsp; Both must match.
                </SilpaStatement>
              </SilpaBlock>

              {/* 8 · AṢṬA DIKPĀLAKAS — cream */}
              <SilpaBlock
                tone="cream"
                eyebrow="The Guardians of the Quarters"
                title="Aṣṭa Dikpālakas – Guardians of the Eight Directions"
                subtitle="Placement as per Śilpa Śāstra and Purāṇa References"
              >
                <SilpaImage
                  src={astaImg}
                  alt="Aṣṭa Dikpālakas — the eight guardians of the directions"
                  fit="cover"
                  ratio="8/11"
                />
                <p className="silpa-body font-serif">
                  Dikpālaka = Loka-pāla = Protectors of the 8 Directions. Without
                  them, temple/house has no security. They are Devatā’s security
                  guardians.
                </p>
                <p className="silpa-ref-note font-serif">
                  Reference: Agni Purāṇa Ch 52, Matsya Purāṇa 258, Mānasāra Ch 8, Śilparatna
                </p>
                <SilpaDataTable
                  colWidths="1.4fr 1fr 1.2fr 1fr 1fr 0.9fr"
                  columns={[
                    { key: 'dir', label: 'Direction' },
                    { key: 'name', label: 'Dikpālaka' },
                    { key: 'vahana', label: 'Vehicle' },
                    { key: 'weapon', label: 'Weapon' },
                    { key: 'color', label: 'Color' },
                    { key: 'planet', label: 'Ruling Planet' },
                  ]}
                  rows={DIKPALAKAS.map((d) => ({
                    dir: d.dir,
                    name: <strong className="silpa-strong">{d.name}</strong>,
                    vahana: d.vahana,
                    weapon: d.weapon,
                    color: d.color,
                    planet: d.planet,
                  }))}
                />
                <div className="silpa-dik-center">
                  <strong className="silpa-strong font-cinzel">
                    Center — Madhya · Brahma — Creator
                  </strong>
                  <span className="silpa-dik-center__text font-serif">
                    Sits in middle of Vāstu Puruṣa Maṇḍala.
                  </span>
                </div>
              </SilpaBlock>

              {/* 9 · DUTIES OF THE EIGHT DIKPĀLAKAS — maroon */}
              <SilpaBlock
                tone="maroon"
                eyebrow="Each Guardian's Duty"
                title="Duties of the Eight Dikpālakas"
              >
                <div className="silpa-duties">
                  {DIKPALAKA_DUTIES.map((d, i) => (
                    <motion.div
                      className="silpa-duty"
                      key={d.name}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: (i % 2) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <h4 className="silpa-duty__name font-cinzel">{d.name}</h4>
                      <div className="silpa-duty__row">
                        <span className="silpa-duty__label">Duty</span>
                        <span className="silpa-duty__value font-serif">{d.duty}</span>
                      </div>
                      <div className="silpa-duty__row">
                        <span className="silpa-duty__label">Purāṇa</span>
                        <span className="silpa-duty__value font-serif">{d.purana}</span>
                      </div>
                      <div className="silpa-duty__row">
                        <span className="silpa-duty__label">Śilpa Duty</span>
                        <span className="silpa-duty__value font-serif">{d.silpa}</span>
                      </div>
                      <p className="silpa-duty__mantra font-cinzel">{d.mantra}</p>
                    </motion.div>
                  ))}
                </div>
              </SilpaBlock>

              {/* 10 · TEMPLE PLACEMENT RULES — cream */}
              <SilpaBlock
                tone="cream"
                eyebrow="The Grammar of Placement"
                title="Placement Rules in Temple – Śilpa Śāstra"
              >
                <SilpaImage
                  src={templeOfBoImg}
                  alt="Temple placement rules — vāstu puruṣa maṇḍala"
                  fit="cover"
                  ratio="2/3"
                />
                <h4 className="silpa-h4 font-cinzel">Vāstu Puruṣa Maṇḍala Rule</h4>
                <p className="silpa-body font-serif">
                  Temple floor = 81 or 64 squares. The 8 Dikpālakas sit on the
                  outer 8 squares. Center = Brahma. The 8 sides = the 8 Dikpālas.
                  This makes the temple a “Cosmic Fort”.
                </p>

                <h4 className="silpa-h4 font-cinzel">Murti Placement in Temple</h4>
                <SilpaDataTable
                  colWidths="1.1fr 0.9fr 1.6fr"
                  columns={[
                    { key: 'spot', label: 'Location' },
                    { key: 'dikpala', label: 'Dikpālaka Murti' },
                    { key: 'purpose', label: 'Purpose' },
                  ]}
                  rows={MURTI_PLACEMENT.map((m) => ({
                    spot: <strong className="silpa-strong">{m.spot}</strong>,
                    dikpala: m.dikpala,
                    purpose: m.purpose,
                  }))}
                />
                <p className="silpa-callout font-serif">
                  <strong className="silpa-strong font-cinzel">Rule from Agni Purāṇa 52.18:</strong>{' '}
                  <em>Dikpālān aṣṭau nyaset dāreṣu prākāreṣu ca</em> — Place 8
                  Dikpālas on doors and compound walls.
                </p>

                <h4 className="silpa-h4 font-cinzel">House Vāstu Rule</h4>
                <p className="silpa-body font-serif">
                  From Vāstuvidyā + Mayamata — if you keep that direction’s
                  element wrong, that Dikpālaka gets angry. Example: Kitchen in
                  North = Kubera angry = Money loss.
                </p>
              </SilpaBlock>

              {/* 11 · PURĀṆIC STORIES — maroon */}
              <SilpaBlock
                tone="maroon"
                eyebrow="Pramāṇa Stories"
                title="Purāṇic Stories of the Dikpālakas"
              >
                <div className="silpa-stories">
                  {DIKPALAKA_STORIES.map((s) => (
                    <SilpaCard key={s.title} title={s.title} tone="cream-on-deep" desc={s.text} />
                  ))}
                </div>
              </SilpaBlock>

              {/* 12 · WHY WORSHIP THE DIKPĀLAKAS — cream */}
              <SilpaBlock
                tone="cream"
                eyebrow="The Temple as a Guarded Cosmos"
                title="Why Worship the Dikpālakas in a Temple?"
              >
                <SilpaQuote
                  sanskrit="Dikpālāḥ rakṣakāḥ proktāḥ mandirasya samantataḥ"
                  translation="8 Dikpālas are protectors all around temple."
                  source="Śilpa Śāstra Reason — Mānasāra 8.1"
                />
                <div className="silpa-numcards">
                  {DIKPALAKA_BENEFITS.map((b) => (
                    <SilpaCard key={b.title} num={b.num} title={b.title} tone="dark" desc={b.desc} />
                  ))}
                </div>
                <p className="silpa-callout font-serif">
                  <strong className="silpa-strong font-cinzel">Purāṇa reference:</strong>{' '}
                  <em>Dikpāla-droheṇa mandiraṁ vinaśyati</em> — Insulting Dikpālas =
                  Temple will collapse.
                </p>
                <SilpaStatement>
                  Aṣṭa Dikpālakas = Security + Energy Managers of Universe
                </SilpaStatement>
                <div className="silpa-triad">
                  <p className="silpa-triad__line font-serif">
                    <strong className="silpa-strong font-cinzel">Śilpa Śāstra:</strong> Tells where to place them.
                  </p>
                  <p className="silpa-triad__line font-serif">
                    <strong className="silpa-strong font-cinzel">Purāṇa:</strong> Tells who they are + their stories.
                  </p>
                  <p className="silpa-triad__line font-serif">
                    <strong className="silpa-strong font-cinzel">Āgama:</strong> Tells how to worship them in temple.
                  </p>
                </div>
                <div className="silpa-memory">
                  <p className="silpa-memory__title font-cinzel">Remember:</p>
                  {DIKPALAKA_MEMORY.map((m) => (
                    <div className="silpa-memory__row" key={m.dir}>
                      <span className="silpa-memory__dir font-cinzel">{m.dir}</span>
                      <span className="silpa-memory__arrow" aria-hidden="true">→</span>
                      <span className="silpa-memory__val font-serif">{m.val}</span>
                    </div>
                  ))}
                </div>
              </SilpaBlock>

              {/* 13 · ŚILPA ŚĀSTRA – PURĀṆIC REFERENCES — maroon */}
              <SilpaBlock
                tone="maroon"
                eyebrow="The Śilpa Canon"
                title="Śilpa Śāstra – Purāṇic References"
                subtitle="Books, Importance, and Pramāṇa"
              >
                <SilpaImage
                  src={manasaraImg}
                  alt="Mānasāra — the great śilpa śāstra grantha"
                  fit="cover"
                  ratio="1/1"
                />
                <p className="silpa-body font-serif">
                  Śilpa Śāstra = Śāstra + Kalā + Yoga. Without it, temple is just a
                  building.
                </p>
                <h4 className="silpa-h4 font-cinzel">12 Major Śilpa Śāstra Granthas</h4>
                <SilpaDataTable
                  colWidths="1fr 0.9fr 1fr 1.6fr 1.1fr"
                  columns={[
                    { key: 'name', label: 'Grantha' },
                    { key: 'author', label: 'Rishi / Author' },
                    { key: 'region', label: 'Region + Deity' },
                    { key: 'content', label: 'Main Content' },
                    { key: 'pramana', label: 'Pramāṇa Line' },
                  ]}
                  rows={TWELVE_GRANTHAS.map((g) => ({
                    name: <strong className="silpa-strong">{g.name}</strong>,
                    author: g.author,
                    region: g.region,
                    content: g.content,
                    pramana: g.pramana,
                  }))}
                />
                <SilpaQuote
                  sanskrit="Āgamaṁ vinā śilpaṁ, śilpaṁ vinā āgamaṁ = vṛthā"
                  translation="Temple without Āgama or Śilpa is useless."
                  source="Rule from Mānasāra 2.15"
                />
              </SilpaBlock>

              {/* 14 · PURĀṆIC PRAMĀṆA — cream */}
              <SilpaBlock
                tone="cream"
                eyebrow="Pramāṇa"
                title="Purāṇic Pramāṇa – Who Built the First Temple?"
              >
                <div className="silpa-pramana">
                  {PRAMANA_SECTIONS.map((p) => (
                    <div className="silpa-pramana__row" key={p.purana}>
                      <span className="silpa-pramana__name font-cinzel">{p.purana}</span>
                      <span className="silpa-pramana__text font-serif">{p.text}</span>
                    </div>
                  ))}
                </div>
              </SilpaBlock>

              {/* 15 · WHY ARE THESE ŚĀSTRAS IMPORTANT — maroon */}
              <SilpaBlock
                tone="maroon"
                eyebrow="Why the Śāstra Endures"
                title="Why Are These Śāstras Important?"
              >
                <SilpaImage
                  src={tempImg}
                  alt="Temple architecture — the enduring śāstra"
                  fit="cover"
                  ratio="3/2"
                />
                <div className="silpa-why-grid">
                  {WHY_IMPORTANT.map((w, i) => (
                    <SilpaCard
                      key={w.name}
                      num={String(i + 1).padStart(2, '0')}
                      title={w.name}
                      tone="cream-on-deep"
                      desc={w.desc}
                    />
                  ))}
                </div>
              </SilpaBlock>

              {/* 16 · KEY CONCEPTS — cream */}
              <SilpaBlock
                tone="cream"
                eyebrow="The Inner Grammar"
                title="Key Concepts Found in Śilpa Śāstra"
              >
                <div className="silpa-key-grid">
                  {KEY_CONCEPTS.map((k) => (
                    <SilpaCard key={k.title} title={k.title} tone="dark" desc={k.text}>
                      <SilpaChip>{k.source}</SilpaChip>
                    </SilpaCard>
                  ))}
                </div>
              </SilpaBlock>

              {/* 17 · WHICH BOOK SHOULD YOU READ FIRST — maroon */}
              <SilpaBlock
                tone="maroon"
                eyebrow="The Reading Roadmap"
                title="Which Book Should You Read First?"
              >
                <div className="silpa-path">
                  {READING_PATH.map((g) => (
                    <div className="silpa-path__group" key={g.group}>
                      <h4 className="silpa-path__group-title font-cinzel">{g.group}</h4>
                      {g.steps.map((s, i) => (
                        <p className="silpa-path__step font-serif" key={s}>
                          <span className="silpa-path__step-num font-cinzel">{i + 1}.</span>
                          {s}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </SilpaBlock>

              {/* 18 · THREE DIMENSIONS OF TEMPLE KNOWLEDGE — cream */}
              <SilpaBlock
                tone="cream"
                eyebrow="Why · How · Who"
                title="The Three Dimensions of Temple Knowledge"
              >
                <div className="silpa-final-grid">
                  {THREE_DIMENSIONS.map((t) => (
                    <SilpaCard key={t.name} title={t.name} tone="dark" desc={t.role} />
                  ))}
                </div>
                <SilpaStatement>
                  Mandira = Veda Made Visible. &nbsp; Śilpa Śāstra is the grammar of
                  that Veda.
                </SilpaStatement>
              </SilpaBlock>

              {/* 19 · GREAT LIVING CHOLA TEMPLES — maroon */}
              <SilpaBlock
                tone="maroon"
                eyebrow="World Heritage"
                title="Great Living Chola Temples"
              >
                <SilpaImage
                  src={cholaImg}
                  alt="Chola temple — Dravidian architecture"
                  fit="cover"
                  ratio="2/3"
                />
                <p className="silpa-body font-serif">{CHOLA_TEXT}</p>
                <SilpaImage
                  src={bruhadeswaraImg}
                  alt="Brihadisvara temple vimana — Thanjavur"
                  fit="cover"
                  ratio="3/2"
                />
                <h4 className="silpa-h4 font-cinzel">Brihadisvara Temple – Thanjavur</h4>
                <p className="silpa-body font-serif">{BRIHADISVARA_TEXT}</p>
              </SilpaBlock>

              {/* 20 · MADURAI MĪNĀKṢĪ AMMAN TEMPLE — cream */}
              <SilpaBlock
                tone="cream"
                eyebrow="Dravidian Architecture"
                title="Madurai Mīnākṣī Amman Temple"
              >
                <div className="silpa-twin">
                  <SilpaImage
                    src={madhuraiImg}
                    alt="Meenakshi temple gopurams — Madurai"
                    fit="cover"
                    ratio="3/2"
                  />
                  <SilpaImage
                    src={madhurai1Img}
                    alt="Meenakshi temple — Madurai"
                    fit="cover"
                    ratio="3/2"
                  />
                </div>
                <p className="silpa-body font-serif">{MEENAKSHI_INTRO}</p>
                <div className="silpa-feature-grid">
                  {MEENAKSHI_FEATURES.map((f) => (
                    <SilpaCard key={f.title} title={f.title} tone="dark" desc={f.desc} />
                  ))}
                </div>
              </SilpaBlock>

              {/* 21 · KANCHIPURAM AMMAVARU TEMPLE — maroon */}
              <SilpaBlock
                tone="maroon"
                eyebrow="Dravidian Splendour"
                title="Kanchipuram Ammavaru Temple"
              >
                <SilpaImage
                  src={kanchipuramImg}
                  alt="Kanchi Kamakshi Amman temple — Kanchipuram"
                  fit="cover"
                  ratio="3/2"
                />
                <p className="silpa-body font-serif">{KANCHI_INTRO}</p>
                <div className="silpa-feature-grid">
                  {KANCHI_FEATURES.map((f) => (
                    <SilpaCard key={f.title} title={f.title} tone="cream-on-deep" desc={f.desc} />
                  ))}
                </div>
              </SilpaBlock>

              {/* 22 · VARADARAJA PERUMAL TEMPLE — cream */}
              <SilpaBlock
                tone="cream"
                eyebrow="The Giver of Boons"
                title="Varadaraja Perumal Temple – Kanchipuram"
              >
                <p className="silpa-body font-serif">{VARADARAJA_TEXT}</p>
              </SilpaBlock>

              {/* 23 · KOṆĀRKA SŪRYA TEMPLE — maroon */}
              <SilpaBlock
                tone="maroon"
                eyebrow="The Chariot of the Sun"
                title="Koṇārka Sūrya Temple"
              >
                <SilpaImage
                  src={koranrkImg}
                  alt="Koṇārka Sun temple — the chariot of Sūrya"
                  fit="cover"
                  ratio="5/4"
                />
                <p className="silpa-body font-serif">
                  Koṇārka is the great Sun-mandira of Kaliṅga — the celestial
                  chariot of Sūrya drawn by seven horses, riding toward the dawn.
                </p>
              </SilpaBlock>

              {/* 24 · KOṆĀRKA – SŪRYA TEMPLE — cream */}
              <SilpaBlock
                tone="cream"
                eyebrow="“Black Pagoda”"
                title="Koṇārka – Sūrya Temple"
                subtitle="“Black Pagoda” – Sūrya Temple"
              >
                <SilpaImage
                  src={konarkImg}
                  alt="Koṇārka temple wheels and horses"
                  fit="cover"
                  ratio="3/2"
                />
                <h4 className="silpa-h4 font-cinzel">Purāṇic References</h4>
                <div className="silpa-pramana">
                  {KONARK_PURANA.map((p) => (
                    <div className="silpa-pramana__row silpa-pramana__row--line" key={p.purana}>
                      <span className="silpa-pramana__name font-cinzel">{p.purana}</span>
                      <span className="silpa-pramana__text font-serif">{p.text}</span>
                    </div>
                  ))}
                </div>
                <h4 className="silpa-h4 font-cinzel">Architecture – as per Śilpa Śāstra</h4>
                <p className="silpa-ref-note font-serif">
                  Style: Kalinga Nāgara + Ratha Architecture · Main Śāstra:
                  Śilparatna Ch 12–15, Mānasāra, Aparājita-pṛcchā
                </p>
                <SilpaDataTable
                  colWidths="1.1fr 1fr 1.6fr 1.4fr"
                  columns={[
                    { key: 'part', label: 'Part' },
                    { key: 'name', label: 'Name' },
                    { key: 'feature', label: 'Feature' },
                    { key: 'meaning', label: 'Śāstra Meaning' },
                  ]}
                  rows={KONARK_ARCH.map((k) => ({
                    part: <strong className="silpa-strong">{k.part}</strong>,
                    name: k.name,
                    feature: k.feature,
                    meaning: k.meaning,
                  }))}
                />
                <div className="silpa-rules">
                  {KONARK_RULES.map((r, i) => (
                    <div className="silpa-rule" key={r}>
                      <span className="silpa-rule__num font-cinzel">{String(i + 1).padStart(2, '0')}</span>
                      <p className="silpa-rule__text font-serif">{r}</p>
                    </div>
                  ))}
                </div>
                <p className="silpa-callout font-serif">{KONARK_DEITY}</p>
              </SilpaBlock>

              {/* 25 · PURI JAGANNĀTHA TEMPLE ARCHITECTURE — maroon */}
              <SilpaBlock
                tone="maroon"
                eyebrow="Kaliṅga Sanctum"
                title="Puri Jagannātha Temple Architecture"
                subtitle="Śilpa Śāstra + Purāṇic References"
              >
                <SilpaImage
                  src={puriImg}
                  alt="Puri Jagannātha temple — Kaliṅga architecture"
                  fit="cover"
                  ratio="3/2"
                />
                <h4 className="silpa-h4 font-cinzel">Purāṇic References</h4>
                <div className="silpa-pramana">
                  {PURI_PURANA.map((p) => (
                    <div className="silpa-pramana__row silpa-pramana__row--line" key={p.ref}>
                      <span className="silpa-pramana__name font-cinzel">{p.ref}</span>
                      <span className="silpa-pramana__text font-serif">{p.text}</span>
                    </div>
                  ))}
                </div>
                <h4 className="silpa-h4 font-cinzel">Architecture — the Great Temple</h4>
                <SilpaDataTable
                  colWidths="1.1fr 1.8fr"
                  columns={[
                    { key: 'part', label: 'Part' },
                    { key: 'detail', label: 'Detail' },
                  ]}
                  rows={PURI_ARCH.map((k) => ({
                    part: <strong className="silpa-strong">{k.part}</strong>,
                    detail: k.detail,
                  }))}
                />
                <div className="silpa-rules">
                  {PURI_RULES.map((r, i) => (
                    <div className="silpa-rule" key={r}>
                      <span className="silpa-rule__num font-cinzel">{String(i + 1).padStart(2, '0')}</span>
                      <p className="silpa-rule__text font-serif">{r}</p>
                    </div>
                  ))}
                </div>
                <p className="silpa-callout font-serif">{PURI_DEITY}</p>
              </SilpaBlock>

              {/* 26 · PURI VS KOṆĀRKA — A SACRED COMPARISON — cream */}
              <SilpaBlock
                tone="cream"
                eyebrow="Two Great Kaliṅga Temples"
                title="Puri Jagannātha and Koṇārka Sūrya – A Sacred Comparison"
              >
                <SilpaImage
                  src={pooriImg}
                  alt="Puri and Koṇārka — Kaliṅga śilpa"
                  fit="cover"
                  ratio="3/2"
                />
                <SilpaDataTable
                  colWidths="0.9fr 1.05fr 1.05fr"
                  columns={[
                    { key: 'aspect', label: 'Rule' },
                    { key: 'puri', label: 'Purī' },
                    { key: 'konark', label: 'Koṇārka' },
                  ]}
                  rows={KALINGA_COMPARE.map((c) => ({
                    aspect: <strong className="silpa-strong">{c.aspect}</strong>,
                    puri: c.puri,
                    konark: c.konark,
                  }))}
                />
                <div className="silpa-twin-callouts">
                  <div className="silpa-callout silpa-callout--gold font-serif">
                    <strong className="silpa-strong font-cinzel">Purī</strong> = Mokṣa Kṣetra
                  </div>
                  <div className="silpa-callout silpa-callout--gold font-serif">
                    <strong className="silpa-strong font-cinzel">Koṇārka</strong> = Ārogya Kṣetra
                  </div>
                  <div className="silpa-callout silpa-callout--gold font-serif">
                    <strong className="silpa-strong font-cinzel">Purī</strong> = Spiritual Sun
                  </div>
                  <div className="silpa-callout silpa-callout--gold font-serif">
                    <strong className="silpa-strong font-cinzel">Koṇārka</strong> = Physical Sun
                  </div>
                </div>
              </SilpaBlock>

              {/* 27 · FIVE COMMON KALIṄGA ŚILPA RULES — maroon */}
              <SilpaBlock
                tone="maroon"
                eyebrow="The Shared Grammar"
                title="Five Common Kaliṅga Śilpa Rules"
              >
                <div className="silpa-numcards">
                  {KALINGA_RULES.map((r, i) => (
                    <SilpaCard
                      key={r.title}
                      num={String(i + 1).padStart(2, '0')}
                      title={r.title}
                      tone="cream-on-deep"
                      desc={r.desc}
                    />
                  ))}
                </div>
                <SilpaStatement>
                  PURI = Heart of Bhakti &nbsp;·&nbsp; KOṆĀRKA = Brain of Science
                </SilpaStatement>
              </SilpaBlock>

              {/* 28 · SRI YANTRA MANDIR — cream */}
              <SilpaBlock
                tone="cream"
                eyebrow="A Yantra in Stone"
                title="Sri Yantra Mandir – Amarkantak, Madhya Pradesh"
              >
                <SilpaImage
                  src={gangImg}
                  alt="Sri Yantra Mandir — Amarkantak, Madhya Pradesh"
                  fit="cover"
                  ratio="2/3"
                />
                <p className="silpa-body font-serif">{SRI_YANTRA_TEXT}</p>
                <SilpaStatement>
                  The mandira is the yantra — sacred geometry made living stone.
                </SilpaStatement>
              </SilpaBlock>

              {/* 29 · KHAJURAHO MANDIR ARCHITECTURE — deep maroon */}
              <SilpaBlock
                tone="deep-maroon"
                eyebrow="Śilpa Śāstra + Purāṇic References + Kālañjara Style"
                title="Khajuraho Mandir Architecture"
              >
                <SilpaImage
                  src={kajarahoImg}
                  alt="Khajuraho temples — Nāgara Kālañjara style"
                  fit="cover"
                  ratio="3/2"
                />
                <div className="silpa-numcards">
                  {KHAJURAHO_POINTS.map((p) => (
                    <SilpaCard key={p.num} num={p.num} title={p.title} tone="cream-on-maroon" desc={p.desc} />
                  ))}
                </div>
                <SilpaStatement>
                  Dharma, Kāma and Mokṣa — the whole of life, carved in stone.
                </SilpaStatement>
              </SilpaBlock>

              {/* ── GURU CONNECTION — the deeper knowledge is reached through the Guru ── */}
              <div className="silpa-guru">
                <SilpaReveal>
                  <div className="silpa-guru__inner">
                    <div className="silpa-guru__divider" aria-hidden="true">
                      <span className="silpa-guru__divider-line" />
                      <span className="silpa-guru__divider-star">✦</span>
                      <span className="silpa-guru__divider-line" />
                    </div>
                    <h3 className="silpa-guru__title font-cinzel">
                      Want to learn more about Temple Śilpa Śāstra?
                    </h3>
                    <p className="silpa-guru__text font-serif">
                      Connect with Guru for deeper knowledge, traditional
                      guidance, and learning.
                    </p>
                    <button
                      type="button"
                      className="silpa-guru__btn"
                      onClick={navToBooking}
                    >
                      <span className="silpa-guru__mark" aria-hidden="true">✦</span>
                      CONNECT TO GURU
                      <span className="silpa-guru__arrow" aria-hidden="true">→</span>
                      <span className="silpa-guru__mark" aria-hidden="true">✦</span>
                    </button>
                  </div>
                </SilpaReveal>
              </div>

              {/* CLOSING — CTA + READ LESS */}
              <div className="silpa-closing">
                <p className="silpa-closing__note font-serif">
                  Seek śāstric guidance for your temple, shrine or sacred space —
                  mūrti-lakṣaṇa, layout and pratiṣṭhā.
                </p>
                <GoldenButton
                  label="Book Consultation"
                  size="lg"
                  onClick={() => window.open(WA_URL, '_blank')}
                />
                <button
                  type="button"
                  className="silpa-toggle silpa-toggle--read-less"
                  onClick={handleReadLess}
                >
                  <span className="silpa-toggle__arrow" aria-hidden="true">↑</span> READ LESS
                </button>
                <button type="button" className="silpa-back-btn" onClick={navToOfferings}>
                  <span className="silpa-back-btn__arrow" aria-hidden="true">←</span>
                  BACK TO OFFERINGS PAGE
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
