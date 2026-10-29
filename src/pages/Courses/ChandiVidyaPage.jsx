import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { FooterSection } from '../Home/HomeSections.jsx';
import logoImg from '../../assets/logo.png';
import './ChandiVidyaPage.css';

const HERO_IMG = '/assets/course-images/chandi-vidya/chandi-1.jpeg';
const IMG_STRUCTURE = '/assets/course-images/chandi-vidya/chandi-3.jpeg';
const IMG_NAVA = '/assets/course-images/chandi-vidya/chandi-2.jpeg';

const NAV_SECTIONS = [
  { id: 'what-is', label: 'What is Chandi Vidya?' },
  { id: 'structure', label: 'Saptashati Structure' },
  { id: 'three-forms', label: 'Three Forms of Chandi' },
  { id: 'nava-shaktis', label: 'Nava Shaktis' },
  { id: 'pramana', label: 'Purana & Tantra' },
  { id: 'practical', label: 'Practical Vidya' },
  { id: 'essence', label: 'Essence' },
];

// ── PART 1: WHAT IS CHANDI VIDYA ──────────────────────────────────────
const WHAT_IS = [
  { point: 'Definition', answer: 'Chandi Vidya = Vidya of Chandi - How to awaken fierce mother inside to destroy adharma. Chandi = Chad = To tear - She tears demons. Chandi is not different from Durga, but Durga in war mode - Like mother becomes tigress if child attacked.' },
  { point: 'Real Name', answer: 'Devi Mahatmyam / Durga Saptashati / Chandi Path / Chandi Saptashati - 700 shlokas - Inside Markandeya Purana Chapters 81 to 93 - 13 Chapters.' },
  { point: 'Who told?', answer: 'Rishi Markandeya told to King Suratha + Merchant Samadhi - Both lost kingdom + money, went to forest, met Rishi Medha, Medha told Chandi story - Both got kingdom back by chanting.' },
  { point: 'Beeja Mantra', answer: 'Navarna Mantra - 9 letters - Heart of Chandi Vidya: <mantra>Om Aim Hreem Kleem Chamundayai Vichche</mantra>. Aim = Saraswati. Hreem = Mahalakshmi. Kleem = Mahakali. Chamunda = Chandi. Vichche = Cut ego.' },
  { point: 'Goal', answer: 'Moksha + Bhukti both - Gives money, fame, enemy destruction, plus Moksha - Devi Mahatmyam says Ya Devi... who chants gets both world + liberation.' },
  { point: 'Main Shloka — Devi Mahatmyam 1.1', answer: 'Savarni Surya Tanayo... Suratha King lost kingdom, Samadhi merchant lost wealth - Both got everything by Chandi.' },
  { point: 'Why 700?', answer: '700 = 7 chakras x 100. Each verse cleans 1% of one chakra.' },
];

// ── PART 2: DURGA SAPTASHATI STRUCTURE ────────────────────────────────
const CHARITA_TABLE = [
  { charitaNo: '1', name: 'PRATHAMA CHARITA', sub: 'Mahakali Charita', chapters: 'Chapter 1 (81)', verses: '104 verses', goddess: 'Mahakali', guna: 'Tamas - Darkness, Inertia', demon: 'Madhu + Kaitabha - Demons born from Vishnu\u2019s ear wax - Represent Tamasic ignorance, Sleep, Laziness', veda: 'Rig Veda', time: 'Morning - For Tamas removal', chakra: 'Muladhara + Swadhisthana - Lower chakras', goal: 'To wake up from sleep' },
  { charitaNo: '2', name: 'MADHYAMA CHARITA', sub: 'Mahalakshmi Charita', chapters: 'Chapters 2-3-4 (82-84)', verses: '~200 verses', goddess: 'Mahalakshmi', guna: 'Rajas - Action, Passion, Greed', demon: 'Mahishasura - Buffalo demon - Represents Ego, Rajasic pride - I am powerful', veda: 'Yajur Veda', time: 'Noon - For Rajas removal', chakra: 'Manipura + Anahata - Middle chakras', goal: 'To kill ego' },
  { charitaNo: '3', name: 'UTTAMA CHARITA', sub: 'Maha Saraswati Charita', chapters: 'Chapters 5-13 (85-93)', verses: '~396 verses', goddess: 'Maha Saraswati', guna: 'Sattva - Knowledge, but still attachment to knowledge', demon: 'Shumbha + Nishumbha - Represent Sattvic ego - I know everything, Attachment + Hate pair', veda: 'Sama Veda', time: 'Evening/Night - For Sattva removal', chakra: 'Vishuddha + Ajna + Sahasrara - Upper chakras', goal: 'To kill subtle ego of knowledge - Final Moksha' },
];

// ── PART 3: THREE FORMS OF CHANDI ─────────────────────────────────────
const MAHAKALI_TABLE = [
  { point: 'Look', detail: 'Black, 10 faces, 10 arms, 10 legs, Holds sword, Holds head of demon, Tongue out, Eyes red, Standing on Shiva? No - This Mahakali stands alone - Different from Dakshina Kali.' },
  { point: 'Born From', detail: 'Yoga Nidra of Vishnu - When Vishnu sleeping, Madhu-Kaitabha came to kill Brahma, Brahma prayed Yoga Nidra, Yoga Nidra left Vishnu, Vishnu woke, but couldn\u2019t kill demons for 5000 years, then Mahakali killed.' },
  { point: 'Mantra', detail: '<mantra>Om Kreem Kalikayai Namah</mantra> + <mantra>Om Aim Hreem Kleem Kalikaye</mantra>' },
  { point: 'Beeja', detail: 'Kreem - Kalika Beeja.' },
  { point: 'Tantra meaning', detail: 'Madhu = Honey - Sweet ignorance - Kaitabha = Insect - Small doubts - Both in ear (hearing) - Means you hear sweet lies and believe - Mahakali cuts ear wax - Removes false hearing - That is why she is in Chapter 1 - First you must clean ears to hear truth.' },
  { point: 'Psychology', detail: 'Tamas = Depression, Laziness, Sleep, Procrastination, I can\u2019t do - Mahakali destroys Tamas - Gives energy - That is why Navratri Day 1-3 = Mahakali.' },
  { point: 'Upasana For', detail: 'If you feel lazy, depressed, sleepy, no motivation, black magic, Shani Dosha - Chant Chapter 1 daily.' },
  { point: 'Yantra', detail: 'Kali Yantra - Triangle down.' },
];

const MAHALAKSHMI_TABLE = [
  { point: 'Look', detail: 'Red/Golden, 18 arms, Holds all weapons of all gods - Chakra, Shankha, Gada, Sword, Bow, etc - Sitting on lion - Most weapons - Because all gods gave weapons.' },
  { point: 'Born From', detail: 'Tejas of all gods combined - When Mahishasura won Devas, all gods angry, light came from Brahma, Vishnu, Shiva, Indra etc - Combined light became Mahalakshmi - So she has all gods\u2019 power.' },
  { point: 'Story', detail: 'Mahishasura - Buffalo - He can change form - Buffalo = Stubborn ego - Ego changes form - Sometimes as human, sometimes animal - Mahalakshmi killed after 9 days war - That is Navratri.' },
  { point: 'Mantra', detail: '<mantra>Om Hreem Mahalakshmyai Namah</mantra> + <mantra>Om Aim Hreem Kleem Chamundayai Vichche</mantra>' },
  { point: 'Beeja', detail: 'Hreem - Mahalakshmi Beeja - Most used.' },
  { point: 'Tantra meaning', detail: 'Mahisha = Buffalo = Ego that says \u201CI am strong like buffalo\u201D - 18 arms = 18 types of ego - Need 18 weapons to kill - Mahalakshmi is Rajas - She uses action to kill action.' },
  { point: 'Psychology', detail: 'Rajas = Ego, Pride, I am best, Greed, Over action, Can\u2019t sit quiet - Mahalakshmi kills ego - Gives humility + wealth that stays - Not ego wealth.' },
  { point: 'Upasana For', detail: 'If you have ego fights, No money (Lakshmi), No success, Enemy bigger than you, Court case - Chant Chapters 2-4 - Gives victory like Devas got.' },
  { point: 'Yantra', detail: 'Mahalakshmi Yantra - Lotus + Sri Yantra part.' },
  { point: 'Special', detail: 'This Mahalakshmi is NOT Vishnu\u2019s wife Lakshmi - This is 18 armed Durga - Called Mahalakshmi - Higher than Vishnu Lakshmi.' },
];

const MAHA_SARASWATI_TABLE = [
  { point: 'Look', detail: 'White, 8 arms, Holds Veena, Book, Conch, Chakra, etc - Pure white - Most beautiful but fearful to demons - Sitting on lion + Swan both.' },
  { point: 'Born From', detail: 'Body of Mahalakshmi herself - When Shumbha-Nishumbha prayed Brahma, got boon no man can kill, so Mahalakshmi\u2019s body became black (Kaushiki) and from her Kosha (sheath) came Maha Saraswati - So called Kaushiki.' },
  { point: 'Story', detail: 'Shumbha = Self doubt? Actually Shumbha = I-ness, Nishumbha = Mine-ness - Pair - Like two demons always together - They want to marry Maha Saraswati (knowledge) - Means ego wants to own knowledge - Maha Saraswati kills both - Shows knowledge cannot be owned by ego.' },
  { point: 'Mantra', detail: '<mantra>Om Aim Saraswatyai Namah</mantra> + <mantra>Om Aim Hreem Kleem</mantra>' },
  { point: 'Beeja', detail: 'Aim - Saraswati Beeja.' },
  { point: 'Tantra meaning', detail: 'Shumbha + Nishumbha = Sattvic ego - Most difficult to kill - \u201CI know\u201D ego - Many Sadhakas stuck here - They read many books, think I am wise - Maha Saraswati kills that - Shows true knowledge is silence.' },
  { point: 'Psychology', detail: 'Sattva = I am knowledgeable, I am spiritual, I am better than others because I meditate - Spiritual ego - Maha Saraswati kills spiritual ego - Final Moksha.' },
  { point: 'Upasana For', detail: 'If you have knowledge but no peace, Spiritual ego, Attachment to ideas, Husband-wife attachment (Shumbha-Nishumbha are couple), For studies, For final liberation - Chant Chapters 5-13 - Most powerful.' },
  { point: 'Yantra', detail: 'Saraswati Yantra - Book + Veena.' },
];

const THREE_FORMS_SUMMARY = [
  { name: 'Mahakali', kills: 'Kills Madhu-Kaitabha — Ignorance', result: 'You wake up' },
  { name: 'Mahalakshmi', kills: 'Kills Mahishasura — Ego', result: 'You become humble' },
  { name: 'Maha Saraswati', kills: 'Kills Shumbha-Nishumbha — Attachment + Hate pair', result: 'You become free' },
];

// ── PART 4: NAVA SHAKTIS ──────────────────────────────────────────────
const NAVA_DURGA_TABLE = [
  { no: '1', name: 'Shailaputri', from: 'Mahakali', chapter: '1', weapon: 'Trishul', demon: 'Fear of root', beeja: 'Lam' },
  { no: '2', name: 'Brahmacharini', from: 'Mahakali', chapter: '1', weapon: 'Japamala', demon: 'Laziness', beeja: 'Vam' },
  { no: '3', name: 'Chandraghanta', from: 'Mahakali', chapter: '1', weapon: 'Moon bell', demon: 'Overthinking', beeja: 'Ram' },
  { no: '4', name: 'Kushmanda', from: 'Mahalakshmi', chapter: '2-4', weapon: 'Pumpkin - Creates universe', demon: 'No creativity', beeja: 'Yam' },
  { no: '5', name: 'Skandamata', from: 'Mahalakshmi', chapter: '2-4', weapon: 'Mother of Skanda', demon: 'Mother wound', beeja: 'Ham' },
  { no: '6', name: 'Katyayani', from: 'Mahalakshmi', chapter: '2-4', weapon: 'Sword - Warrior', demon: 'Ego fight', beeja: 'Om' },
  { no: '7', name: 'Kalaratri', from: 'Maha Saraswati', chapter: '5-13', weapon: 'Dark night - Fearful', demon: 'Darkness', beeja: 'Kleem' },
  { no: '8', name: 'Mahagauri', from: 'Maha Saraswati', chapter: '5-13', weapon: 'White - Purity', demon: 'Sin, Guilt', beeja: 'Hreem' },
  { no: '9', name: 'Siddhidatri', from: 'Maha Saraswati + All three together', chapter: '13 - Final', weapon: 'Gives all Siddhis', demon: 'No Siddhi, No power', beeja: 'Aim' },
];

const AVARANA_TABLE = [
  { avarana: '1', name: 'Trailokya Mohana', count: '8 - Anima etc', place: 'Outer Bhupura - Square', power: 'Attraction' },
  { avarana: '2', name: 'Sarva Asha Paripuraka', count: '16', place: '16 petal lotus', power: 'Fulfill desires' },
  { avarana: '3', name: 'Sarva Samkshobana', count: '8', place: '8 petal lotus', power: 'Shake mind' },
  { avarana: '4', name: 'Sarva Saubhagya Dayaka', count: '14', place: '14 triangles', power: 'Give luck' },
  { avarana: '5', name: 'Sarva Artha Sadhaka', count: '10', place: '10 triangles', power: 'Give wealth' },
  { avarana: '6', name: 'Sarva Rakshakara', count: '10', place: '10 triangles', power: 'Protection' },
  { avarana: '7', name: 'Sarva Rogahara', count: '8', place: '8 triangles', power: 'Disease cure' },
  { avarana: '8', name: 'Sarva Siddhi Prada', count: '8 + 1', place: 'Triangle + Bindu', power: 'All Siddhi' },
  { avarana: '9', name: 'Sarva Anandamaya', count: 'Lalita herself', place: 'Bindu - Center', power: 'Bliss' },
];

const MATRIKAS_TABLE = [
  { shakti: 'Brahmani', god: 'Brahma', face: '4 faces', purpose: 'For knowledge' },
  { shakti: 'Maheshwari', god: 'Shiva', face: '3 eyes', purpose: 'For destruction of evil' },
  { shakti: 'Kaumari', god: 'Skanda', face: '6 faces', purpose: 'For victory' },
  { shakti: 'Vaishnavi', god: 'Vishnu', face: '4 arms', purpose: 'For protection' },
  { shakti: 'Varahi', god: 'Varaha', face: 'Boar face', purpose: 'For removing fear, Bhoo Devi' },
  { shakti: 'Narasimhi', god: 'Narasimha', face: 'Lion face', purpose: 'Fierce protection' },
  { shakti: 'Indrani / Aindri', god: 'Indra', face: '1000 eyes', purpose: 'For power' },
  { shakti: 'Chamunda / Kali', god: 'Chandi herself', face: 'Black', purpose: 'For death of ego' },
  { shakti: 'Mahalakshmi / Durga herself', god: 'All', face: '18 arms', purpose: 'Central' },
];

// ── PART 5: PURANA + TANTRA + SHASTRA ────────────────────────────────
const PURANA_TABLE = [
  { shastra: 'Markandeya Purana 81-93', says: 'Primary source - Markandeya is Chiranjivi - He saw Chandi himself - He says 700 verses = 3 Vedas + 3 Gunas + 3 times.', proof: 'Proof: Original book - All Chandi Path from here' },
  { shastra: 'Devi Bhagavata Purana 5th Skanda', says: 'Repeats Saptashati but adds Manidvipa - Says Saptashati is 5th Veda - If you can\u2019t read Veda, read Saptashati, same fruit.', proof: 'Proof: 5.1.12' },
  { shastra: 'Brahmanda Purana - Lalitopakhyana', says: 'Says Saptashati = Lalita\u2019s war - Lalita and Chandi are same - Lalita kills Bhandasura, Chandi kills Mahishasura - Same goddess', proof: '' },
  { shastra: 'Kalika Purana, Chandi Purana', says: 'Gives how to do Chandi Homa, Navarna Mantra - How many times to chant for what fruit.', proof: 'Proof: Kalika Purana 60 chapters' },
];

const TANTRA_TABLE = [
  { shastra: 'Rudra Yamala - Urdhva Amnaya', detail: 'Shiva tells Parvati: Saptashati is Mantra - Not Kavya - Each verse is Mantra - 700 mantras - Need initiation - Navarna is key to open - Without Navarna Siddhi, Saptashati won\u2019t work.' },
  { shastra: 'Kularnava Tantra', detail: 'Chandi is Kaula Devata - She likes Panchamakara internally - But externally give flowers, Red hibiscus, Kumkum.' },
  { shastra: 'Devi Yamala', detail: 'Most important: Gives Angas of Chandi: 6 Angas to read before Saptashati - Kavacha, Argala, Keelaka, Rahasya, Sukta, Dhyanam - Without these, Saptashati is like body without limbs - Must read.' },
  { shastra: 'Mundamala Tantra', detail: 'Chandi has 3 forms - Kali for Tamas, Lakshmi for Rajas, Saraswati for Sattva - This is same as Mahavidya - Kali, Kamala, Matangi = Same.' },
  { shastra: 'Brihat Tantrasara', detail: 'Gives Chandi Homa method - How many times chant for what: 1 path = Wish, 9 path = Peace, 100 path = Shatru Nasha, 1000 path = Moksha.' },
];

const NAVARNA_CARDS = [
  { label: 'Structure', text: 'Navarna Mantra = 9 letters = 9 planets + 9 Durgas.' },
  { label: 'Aim', text: 'Vag Beeja - Saraswati.' },
  { label: 'Hreem', text: 'Maya Beeja - Mahalakshmi - Space.' },
  { label: 'Kleem', text: 'Kama Beeja - Mahakali - Desire power.' },
  { label: 'Chamunda', text: 'Chanda + Munda demons killed - So Chamunda = Killer of anger + hate pair.' },
  { label: 'Vichche', text: 'Chindhi - To cut - Cuts head of ego.' },
];

const RULES_TABLE = [
  { rule: 'Must do Kavacha + Argala + Keelaka before Saptashati', shastra: 'Devi Yamala', why: 'Kavacha protects body, Argala opens door, Keelaka opens lock.' },
  { rule: 'Must sit on Kusha or Red cloth', shastra: 'Kalika Purana', why: 'Chandi likes red.' },
  { rule: 'Must light Ghee diya', shastra: 'Rudra Yamala', why: 'Chandi is light.' },
  { rule: 'Must not eat non-veg, must be pure during Navratri', shastra: 'Mahanirvana Tantra', why: 'Sattvic needed for Sattva Charita.' },
  { rule: 'Must not chant fast like newspaper - Chant slow with meaning', shastra: 'Mundamala Tantra', why: 'Each verse is Mantra - Need pronunciation.' },
];

// ── PART 6: PRACTICAL CHANDI VIDYA ────────────────────────────────────
const PRACTICAL_TABLE = [
  { level: 'Level 1 - Beginner - 5 min', who: 'Householder - No time', chant: '<mantra>Om Aim Hreem Kleem Chamundayai Vichche</mantra> + <mantra>Om Dum Durgayei Namaha 108</mantra>', time: 'Morning + Evening' },
  { level: 'Level 2 - Middle - 15 min', who: 'Want protection', chant: 'Kavacha + Argala + Keelaka + Chapter 1 + 4 + 11 (One from each Charita)', time: 'Daily morning' },
  { level: 'Level 3 - Full - 90 min', who: 'Want Moksha + Siddhi', chant: 'Full Saptashati 700 verses - 13 chapters - With Angas', time: 'Navratri 9 days - Or Every Tuesday/Friday' },
];

const PHALA_SHRUTI =
  'One who chants gets no fear from fire, water, enemy, king, thief, tiger. All Grahas become good. He gets wealth, wife, children, victory, Moksha. Chandi herself protects like mother protects child.';

// ── PART 7: ESSENCE ───────────────────────────────────────────────────
const ESSENCE_CARDS = [
  { name: 'Mahakali', action: 'Kills sleep', result: 'You wake' },
  { name: 'Mahalakshmi', action: 'Kills ego', result: 'You become humble + rich' },
  { name: 'Maha Saraswati', action: 'Kills attachment', result: 'You become free' },
];

const renderCell = (text) => {
  if (typeof text !== 'string') return text;
  if (!text.includes('<mantra>')) return text;
  const parts = text.split(/(<mantra>.*?<\/mantra>)/g);
  return parts.map((part, i) => {
    if (part.startsWith('<mantra>')) {
      return <em key={i} className="ch-mantra font-serif">{part.slice(8, -9)}</em>;
    }
    return part;
  });
};

function Ornament() {
  return (
    <div className="ch-orn" aria-hidden="true">
      <span className="ch-orn__line" />
      <span className="ch-orn__diamond">✦</span>
      <span className="ch-orn__line" />
    </div>
  );
}

function FramedFigure({ src, alt, caption }) {
  return (
    <figure className="ch-figure">
      <div className="ch-figure__frame">
        <span className="ch-figure__corner ch-figure__corner--tl" aria-hidden="true">✦</span>
        <span className="ch-figure__corner ch-figure__corner--br" aria-hidden="true">✦</span>
        <img src={src} alt={alt} className="ch-figure__img" loading="lazy" draggable="false" />
      </div>
      {caption && <figcaption className="ch-figure__caption font-serif">{caption}</figcaption>}
    </figure>
  );
}

export default function ChandiVidyaPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Chandi Vidya | Complete Tantra + Purana Explanation';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      'content',
      'Explore Chandi Vidya — Durga Saptashati, the most secret Vidyā where Durga becomes Chandi. Complete Tantra + Purana explanation, 3 Charitas, Three Forms, Nava Shaktis, and practical sadhana.'
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
    <div className="ch-page">
      <Navbar />

      {/* ══════════════ HERO ══════════════ */}
      <section className="ch-hero">
        <div className="ch-hero__bg" aria-hidden="true" />
        <div className="ch-hero__inner">
          <div className="ch-hero__content">
            <motion.span
              className="ch-hero__eyebrow"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              CHANDI VIDYA · DURGA SAPTASHATI · DEVI MAHATMYAM
            </motion.span>

            <motion.h1
              className="ch-hero__title font-cinzel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Chandi Vidya
            </motion.h1>

            <motion.p
              className="ch-hero__kicker font-cinzel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Durga Saptashati — Complete Tantra + Purana Explanation
            </motion.p>

            <motion.p
              className="ch-hero__subtitle font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              Most Secret Vidyā — Where Durga becomes Chandi
            </motion.p>

            <motion.div
              className="ch-hero__divider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <span className="ch-hero__divider-line" />
              <img src={logoImg} alt="" className="ch-hero__divider-om" />
              <span className="ch-hero__divider-line" />
            </motion.div>

            <motion.p
              className="ch-hero__intro font-serif"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              Chandi is the <strong>fiercest form of Durga</strong> — the warrior who kills. Chandi Vidya is the{' '}
              <strong>secret science of becoming fierce to destroy your inner demons</strong> — Mahishasura the ego,
              Shumbha the attachment, and Nishumbha the hate. The <strong>Durga Saptashati — 700 verses</strong> — is her war diary.
            </motion.p>

            <motion.span
              className="ch-hero__badge font-serif"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72 }}
            >
              🔱 Chandi · Durga Saptashati · Devi Mahatmyam · Nava Shakti
            </motion.span>

            <motion.div
              className="ch-hero__btn"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.78 }}
            >
              <GoldenButton
                label="Explore Chandi Vidya"
                size="lg"
                onClick={() => scrollToId('what-is')}
              />
            </motion.div>
          </div>

          <motion.div
            className="ch-hero__art"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="ch-hero__halo" aria-hidden="true" />
            <figure className="ch-hero__frame">
              <img
                src={HERO_IMG}
                alt="Goddess Chandi — Durga in her most fierce form"
                className="ch-hero__img"
                loading="eager"
                draggable="false"
              />
            </figure>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ BACK LINK ══════════════ */}
      <div className="ch-top-back">
        <button type="button" className="ch-top-back__btn" onClick={() => navigate('/courses')}>
          ← Back to Courses
        </button>
      </div>

      {/* ══════════════ CONTENTS NAV ══════════════ */}
      <nav className="ch-nav" aria-label="Course contents">
        <div className="ch-nav__inner">
          {NAV_SECTIONS.map((s) => (
            <button key={s.id} type="button" className="ch-nav__item" onClick={() => scrollToId(s.id)}>
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ══════════════ 1 — WHAT IS CHANDI VIDYA? ══════════════ */}
      <section id="what-is" className="ch-section ch-section--warm">
        <div className="ch-container">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">SECTION 1 · THE WARRIOR MOTHER</span>
            <h2 className="ch-section__title font-cinzel">What Is Chandi Vidya?</h2>
            <p className="ch-section__subtitle font-serif">Chandi = Chand = Angry, fierce — the warrior who kills demons</p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="ch-table-wrap">
              <table className="ch-table">
                <thead>
                  <tr><th>Point</th><th>Answer</th></tr>
                </thead>
                <tbody>
                  {WHAT_IS.map((r) => (
                    <tr key={r.point}>
                      <td><strong>{r.point}</strong></td>
                      <td>{renderCell(r.answer)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="ch-mantra-box">
              <span className="ch-mantra-box__label font-cinzel">Navarna Mantra — Heart of Chandi Vidya</span>
              <p className="ch-mantra-box__sanskrit font-serif">Om Aim Hreem Kleem Chamundayai Vichche</p>
              <p className="ch-mantra-box__meaning font-serif">
                Aim = Saraswati · Hreem = Mahalakshmi · Kleem = Mahakali · Chamunda = Chandi · Vichche = Cut ego
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '24px' }}>
            <div className="ch-callout">
              <span className="ch-callout__label font-cinzel">Understanding</span>
              <p className="ch-callout__text font-serif">
                <strong>Chandi is not different from Durga — Durga in war mode.</strong> Like the mother who becomes a tigress if her child is attacked. Chandi = Chad = To tear — she tears demons. Mahishasura = Ego, Shumbha = Attachment, Nishumbha = Hate.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 2 — DURGA SAPTASHATI STRUCTURE ══════════════ */}
      <section id="structure" className="ch-section ch-section--maroon">
        <div className="ch-container">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">SECTION 2 · THE WAR DIARY</span>
            <h2 className="ch-section__title font-cinzel">Durga Saptashati Structure</h2>
            <p className="ch-section__subtitle font-serif">3 Charitas — Structure of 700 Verses</p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <p className="ch-lead font-serif">
              The entire Saptashati is divided into 3 parts = 3 forms of Chandi = Mahakali, Mahalakshmi and Mahasaraswati.
              Each Charita = 1 Guna + 1 Chakra group + 1 Veda + 1 Time.
            </p>
            <div className="ch-table-wrap">
              <table className="ch-table" style={{ minWidth: '1100px' }}>
                <thead>
                  <tr>
                    <th>Charita No</th>
                    <th>Charita Name</th>
                    <th>Chapters</th>
                    <th>Verses</th>
                    <th>Goddess</th>
                    <th>Guna</th>
                    <th>Demon Killed</th>
                    <th>Veda</th>
                    <th>Time to Chant</th>
                    <th>Chakra</th>
                    <th>Goal</th>
                  </tr>
                </thead>
                <tbody>
                  {CHARITA_TABLE.map((c) => (
                    <tr key={c.charitaNo}>
                      <td><strong>{c.charitaNo}</strong></td>
                      <td><strong>{c.name}</strong><br />{c.sub}</td>
                      <td>{c.chapters}</td>
                      <td>{c.verses}</td>
                      <td>{c.goddess}</td>
                      <td>{c.guna}</td>
                      <td>{c.demon}</td>
                      <td>{c.veda}</td>
                      <td>{c.time}</td>
                      <td>{c.chakra}</td>
                      <td>{c.goal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="ch-callout">
              <span className="ch-callout__label font-cinzel">Total</span>
              <p className="ch-callout__text font-serif">
                <strong>Total = 700 verses = 104 + 200 + 396</strong>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '24px' }}>
            <div className="ch-mantra-box">
              <span className="ch-mantra-box__label font-cinzel">Secret</span>
              <p className="ch-mantra-box__meaning font-serif">
                If you chant only Prathama Charita — you remove laziness.<br />
                If you chant Madhyama — you remove ego.<br />
                If you chant Uttama — you get Moksha.<br />
                <strong>Chant all 3 = Complete — Tamo Guna, Rajo Guna, Sattva Guna all crossed.</strong>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '48px' }}>
            <FramedFigure
              src={IMG_STRUCTURE}
              alt="The structure of the Durga Saptashati — three Charitas of Mahakali, Mahalakshmi and Maha Saraswati"
              caption="After the structure — 700 verses across three Charitas, three Gunas, three times"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 3 — THREE FORMS OF CHANDI ══════════════ */}
      <section id="three-forms" className="ch-section ch-section--warm">
        <div className="ch-container">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">SECTION 3 · THE TRIPLE DEVI</span>
            <h2 className="ch-section__title font-cinzel">Three Forms of Chandi</h2>
            <p className="ch-section__subtitle font-serif">Mahakali, Mahalakshmi, Mahasaraswati</p>
            <Ornament />
          </ScrollReveal>

          {/* ── FORM 1 — MAHAKALI ── */}
          <ScrollReveal className="ch-subsection">
            <span className="ch-subsection__tag">FORM 1 — MAHAKALI</span>
            <h3 className="ch-subsection__title font-cinzel">Mahakali — Chapter 1 — Tamas</h3>
            <div className="ch-table-wrap">
              <table className="ch-table">
                <thead>
                  <tr><th>Point</th><th>Details</th></tr>
                </thead>
                <tbody>
                  {MAHAKALI_TABLE.map((f) => (
                    <tr key={f.point}>
                      <td><strong>{f.point}</strong></td>
                      <td>{renderCell(f.detail)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="ch-mantra-box">
              <span className="ch-mantra-box__label font-cinzel">Mantra</span>
              <p className="ch-mantra-box__sanskrit font-serif">Om Kreem Kalikayai Namah</p>
              <p className="ch-mantra-box__meaning font-serif">Om Aim Hreem Kleem Kalikaye</p>
            </div>
          </ScrollReveal>

          {/* ── FORM 2 — MAHALAKSHMI ── */}
          <ScrollReveal className="ch-subsection">
            <span className="ch-subsection__tag">FORM 2 — MAHALAKSHMI</span>
            <h3 className="ch-subsection__title font-cinzel">Mahalakshmi — Chapters 2-4 — Rajas</h3>
            <div className="ch-table-wrap">
              <table className="ch-table">
                <thead>
                  <tr><th>Point</th><th>Details</th></tr>
                </thead>
                <tbody>
                  {MAHALAKSHMI_TABLE.map((f) => (
                    <tr key={f.point}>
                      <td><strong>{f.point}</strong></td>
                      <td>{renderCell(f.detail)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="ch-mantra-box">
              <span className="ch-mantra-box__label font-cinzel">Mantra</span>
              <p className="ch-mantra-box__sanskrit font-serif">Om Hreem Mahalakshmyai Namah</p>
              <p className="ch-mantra-box__meaning font-serif">Om Aim Hreem Kleem Chamundayai Vichche</p>
            </div>
          </ScrollReveal>

          {/* ── FORM 3 — MAHA SARASWATI ── */}
          <ScrollReveal className="ch-subsection">
            <span className="ch-subsection__tag">FORM 3 — MAHA SARASWATI</span>
            <h3 className="ch-subsection__title font-cinzel">Maha Saraswati — Chapters 5-13 — Sattva</h3>
            <div className="ch-table-wrap">
              <table className="ch-table">
                <thead>
                  <tr><th>Point</th><th>Details</th></tr>
                </thead>
                <tbody>
                  {MAHA_SARASWATI_TABLE.map((f) => (
                    <tr key={f.point}>
                      <td><strong>{f.point}</strong></td>
                      <td>{renderCell(f.detail)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="ch-mantra-box">
              <span className="ch-mantra-box__label font-cinzel">Mantra</span>
              <p className="ch-mantra-box__sanskrit font-serif">Om Aim Saraswatyai Namah</p>
              <p className="ch-mantra-box__meaning font-serif">Om Aim Hreem Kleem</p>
            </div>
          </ScrollReveal>

          {/* ── SUMMARY ── */}
          <ScrollReveal>
            <h3 className="ch-block__title font-cinzel">Summary of the Three Forms</h3>
            <div className="ch-grid ch-grid--3">
              {THREE_FORMS_SUMMARY.map((s) => (
                <ScrollReveal key={s.name}>
                  <motion.div className="ch-card ch-card--deep" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                    <span className="ch-card__label font-cinzel">{s.name}</span>
                    <p className="ch-card__text font-serif">{s.kills}</p>
                    <p className="ch-card__text font-serif" style={{ marginTop: '10px', fontWeight: 600, color: 'var(--maroon-deep)' }}>{s.result}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal style={{ marginTop: '24px' }}>
              <div className="ch-callout">
                <span className="ch-callout__label font-cinzel">Beyond the Three Gunas</span>
                <p className="ch-callout__text font-serif">
                  Tamas gone. Rajas gone. Sattva also gone — <strong>Beyond 3 gunas = Moksha</strong>.
                  Devi Mahatmyam says: After 3 Charitas, you become <strong>Trigunatheetha — Beyond 3 gunas — Same as Shiva</strong>.
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 4 — NAVA SHAKTIS ══════════════ */}
      <section id="nava-shaktis" className="ch-section ch-section--maroon">
        <div className="ch-container">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">SECTION 4 · THE NINE POWERS</span>
            <h2 className="ch-section__title font-cinzel">Nava Shaktis</h2>
            <p className="ch-section__subtitle font-serif">9 forms that come from 3 Mahadevis — 3 × 3 = 9</p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <p className="ch-lead font-serif">
              Nava Shaktis = 9 forms that come from 3 Mahadevis — Each Mahadevi gives 3 Shaktis — So 3 × 3 = 9.
            </p>
          </ScrollReveal>

          {/* ── CLASSIFICATION A — NAVA DURGA ── */}
          <ScrollReveal className="ch-subsection">
            <span className="ch-subsection__tag">CLASSIFICATION A — NAVA DURGA</span>
            <h3 className="ch-subsection__title font-cinzel">Nava Durga</h3>
            <div className="ch-table-wrap">
              <table className="ch-table" style={{ minWidth: '900px' }}>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Navadurga</th>
                    <th>From Which Mahadevi</th>
                    <th>Chapter</th>
                    <th>Weapon / Power</th>
                    <th>Inner Demon</th>
                    <th>Beeja</th>
                  </tr>
                </thead>
                <tbody>
                  {NAVA_DURGA_TABLE.map((d) => (
                    <tr key={d.no}>
                      <td><strong>{d.no}</strong></td>
                      <td><strong>{d.name}</strong></td>
                      <td>{d.from}</td>
                      <td>{d.chapter}</td>
                      <td>{d.weapon}</td>
                      <td>{d.demon}</td>
                      <td><em className="ch-mantra">{d.beeja}</em></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="ch-callout">
                <span className="ch-callout__label font-cinzel">During Navratri</span>
                <p className="ch-callout__text font-serif">
                  <strong>Chant Navadurga in Navratri — Day 1 to 9</strong>
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── CLASSIFICATION B — NAVA SHAKTI OF SRI YANTRA ── */}
          <ScrollReveal className="ch-subsection">
            <span className="ch-subsection__tag">CLASSIFICATION B — SRI YANTRA</span>
            <h3 className="ch-subsection__title font-cinzel">Nava Shakti of Sri Yantra — Avarana Shaktis</h3>
            <p className="ch-lead font-serif">
              Sri Yantra has 9 circles — Each circle has Shakti — Called Nava Avarana Shaktis — These are the Nava Shaktis in Sri Vidya.
            </p>
            <div className="ch-table-wrap">
              <table className="ch-table" style={{ minWidth: '760px' }}>
                <thead>
                  <tr>
                    <th>Avarana</th>
                    <th>Shakti Name</th>
                    <th>No. of Goddesses</th>
                    <th>Place in Sri Yantra</th>
                    <th>Power</th>
                  </tr>
                </thead>
                <tbody>
                  {AVARANA_TABLE.map((a) => (
                    <tr key={a.avarana}>
                      <td><strong>{a.avarana}</strong></td>
                      <td><strong>{a.name}</strong></td>
                      <td>{a.count}</td>
                      <td>{a.place}</td>
                      <td>{a.power}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="ch-callout">
                <span className="ch-callout__label font-cinzel">Secret of Sri Vidya</span>
                <p className="ch-callout__text font-serif">
                  <strong>This is most secret — Sri Vidya Nava Shakti — Lalita Sahasranama has all</strong>
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── CLASSIFICATION C — NAVA SHAKTI AS PER CHANDI ── */}
          <ScrollReveal className="ch-subsection">
            <span className="ch-subsection__tag">CLASSIFICATION C — MATRIKAS</span>
            <h3 className="ch-subsection__title font-cinzel">Nava Shakti as per Chandi</h3>
            <p className="ch-lead font-serif">
              When Chandi fights Shumbha-Nishumbha, from her body 9 Shaktis come — Called Matrikas.
            </p>
            <div className="ch-table-wrap">
              <table className="ch-table" style={{ minWidth: '640px' }}>
                <thead>
                  <tr>
                    <th>Shakti</th>
                    <th>From Which God?</th>
                    <th>Face</th>
                    <th>For What</th>
                  </tr>
                </thead>
                <tbody>
                  {MATRIKAS_TABLE.map((m) => (
                    <tr key={m.shakti}>
                      <td><strong>{m.shakti}</strong></td>
                      <td>{m.god}</td>
                      <td>{m.face}</td>
                      <td>{m.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollReveal>
              <div className="ch-callout">
                <span className="ch-callout__label font-cinzel">In Chandi Homa</span>
                <p className="ch-callout__text font-serif">
                  <strong>These 9 are worshipped as Nava Shakti in Chandi Homa</strong>
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '48px' }}>
            <FramedFigure
              src={IMG_NAVA}
              alt="The Nava Shaktis — the nine powers of Goddess Chandi"
              caption="Before the Pramanas — the Nava Shaktis, nine ways the mother helps"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 5 — PURANA + TANTRA + SHASTRA ══════════════ */}
      <section id="pramana" className="ch-section ch-section--warm">
        <div className="ch-container">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">SECTION 5 · THE AUTHORITY</span>
            <h2 className="ch-section__title font-cinzel">Purana, Tantra &amp; Shastra</h2>
            <p className="ch-section__subtitle font-serif">Pramana for Chandi</p>
            <Ornament />
          </ScrollReveal>

          {/* ── 1. PURANA STANDARD ── */}
          <ScrollReveal>
            <h3 className="ch-block__title font-cinzel">1. Purana Standard</h3>
            <div className="ch-table-wrap">
              <table className="ch-table">
                <thead>
                  <tr><th>Shastra</th><th>What it says about Chandi</th><th>Proof</th></tr>
                </thead>
                <tbody>
                  {PURANA_TABLE.map((p) => (
                    <tr key={p.shastra}>
                      <td><strong>{p.shastra}</strong></td>
                      <td>{p.says}</td>
                      <td>{p.proof || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* ── 2. TANTRA STANDARD ── */}
          <ScrollReveal>
            <h3 className="ch-block__title font-cinzel">2. Tantra Standard</h3>
            <div className="ch-table-wrap">
              <table className="ch-table">
                <thead>
                  <tr><th>Shastra</th><th>Details</th></tr>
                </thead>
                <tbody>
                  {TANTRA_TABLE.map((t) => (
                    <tr key={t.shastra}>
                      <td><strong>{t.shastra}</strong></td>
                      <td>{t.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* ── 3. VEDA + VYAKARANA STANDARD ── */}
          <ScrollReveal>
            <h3 className="ch-block__title font-cinzel">3. Veda + Vyakarana Standard</h3>
            <div className="ch-grid ch-grid--3">
              {NAVARNA_CARDS.map((c) => (
                <ScrollReveal key={c.label}>
                  <div className="ch-card ch-card--deep">
                    <span className="ch-card__label font-cinzel">{c.label}</span>
                    <p className="ch-card__text font-serif">{c.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal style={{ marginTop: '24px' }}>
              <div className="ch-callout">
                <span className="ch-callout__label font-cinzel">Important</span>
                <p className="ch-callout__text font-serif">
                  <strong>Tantra says: Without Guru giving Navarna, don&rsquo;t chant loud — Chant mentally.</strong>
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* ── 4. SHASTRA — DHARMA SHASTRA ── */}
          <ScrollReveal>
            <h3 className="ch-block__title font-cinzel">4. Shastra — Dharma Shastra</h3>
            <p className="ch-lead font-serif">Rules to Chant</p>
            <div className="ch-table-wrap">
              <table className="ch-table">
                <thead>
                  <tr><th>Rule</th><th>Shastra Says</th><th>Why</th></tr>
                </thead>
                <tbody>
                  {RULES_TABLE.map((r) => (
                    <tr key={r.rule}>
                      <td>{r.rule}</td>
                      <td>{r.shastra}</td>
                      <td>{r.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 6 — PRACTICAL CHANDI VIDYA ══════════════ */}
      <section id="practical" className="ch-section ch-section--maroon">
        <div className="ch-container">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">SECTION 6 · THE PRACTICE</span>
            <h2 className="ch-section__title font-cinzel">Practical Chandi Vidya</h2>
            <p className="ch-section__subtitle font-serif">How to Do Chandi Vidya Daily — 3 Levels</p>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="ch-table-wrap">
              <table className="ch-table" style={{ minWidth: '900px' }}>
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>For Whom</th>
                    <th>What to Chant</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {PRACTICAL_TABLE.map((l) => (
                    <tr key={l.level}>
                      <td><strong>{l.level}</strong></td>
                      <td>{l.who}</td>
                      <td>{renderCell(l.chant)}</td>
                      <td>{l.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* ── PHALA SHRUTI ── */}
          <ScrollReveal>
            <div className="ch-quote">
              <span className="ch-quote__label font-cinzel">Phala Shruti — The Promise</span>
              <p className="ch-quote__text font-serif">
                Devi Mahatmyam Chapter 12 itself says the fruit: <em>{PHALA_SHRUTI}</em>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="ch-mantra-box" style={{ marginTop: '26px' }}>
              <span className="ch-mantra-box__label font-cinzel">Daily Seed</span>
              <p className="ch-mantra-box__sanskrit font-serif">Om Aim Hreem Kleem Chamundayai Vichche</p>
              <p className="ch-mantra-box__meaning font-serif">108 times — Morning and Evening.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 7 — ESSENCE OF CHANDI VIDYA ══════════════ */}
      <section id="essence" className="ch-section ch-section--warm">
        <div className="ch-container">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">SECTION 7 · THE CLOSING VISION</span>
            <h2 className="ch-section__title font-cinzel">Essence of Chandi Vidya</h2>
            <p className="ch-section__subtitle font-serif">Devi Mahatmyam 11.3</p>
            <Ornament />
          </ScrollReveal>

          {/* ── Devi Mahatmyam 11.3 ── */}
          <ScrollReveal>
            <div className="ch-scripture-card">
              <span className="ch-scripture-card__mark" aria-hidden="true">&ldquo;</span>
              <p className="ch-scripture-card__sanskrit font-serif">Ya Devi Sarva Bhuteshu Matru Rupena Samsthita</p>
              <p className="ch-scripture-card__meaning font-serif">The Mother who lives in all beings in the form of a mother.</p>
            </div>
          </ScrollReveal>

          {/* ── Three Cards ── */}
          <ScrollReveal style={{ marginTop: '48px' }}>
            <h3 className="ch-block__title font-cinzel">Three Powers of the Mother</h3>
            <div className="ch-grid ch-grid--3">
              {ESSENCE_CARDS.map((c) => (
                <ScrollReveal key={c.name}>
                  <motion.div className="ch-card ch-card--deep" whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                    <span className="ch-card__label font-cinzel">{c.name}</span>
                    <p className="ch-card__text font-serif">{c.action}</p>
                    <p className="ch-card__text font-serif" style={{ marginTop: '10px', fontWeight: 600, color: 'var(--maroon-deep)' }}>{c.result}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* ── Nava Shaktis = 9 ways ── */}
          <ScrollReveal style={{ marginTop: '40px' }}>
            <h3 className="ch-block__title font-cinzel">Nava Shaktis = 9 Ways the Mother Helps</h3>
            <p className="ch-lead font-serif">
              Navadurga + 9 Avarana + 9 Matrikas — All same — 9 is complete — 9 months the mother keeps the child in the womb — so 9 forms.
            </p>
          </ScrollReveal>

          {/* ── Final Highlight ── */}
          <ScrollReveal>
            <div className="ch-callout">
              <span className="ch-callout__label font-cinzel">In Kali Yuga, Chandi Says</span>
              <p className="ch-callout__text font-serif">
                <strong>Call me with Navarna, I come in 1 second — Faster than Vishnu, faster than Shiva — Because I am mother — Mother runs fastest.</strong>
              </p>
            </div>
          </ScrollReveal>

          {/* ── Closing ── */}
          <ScrollReveal className="ch-closing">
            <span className="ch-closing__mark" aria-hidden="true">✦</span>
            <p className="ch-closing__source font-cinzel" style={{ marginBottom: '16px' }}>Devi Mahatmyam · Durga Saptashati</p>
            <p className="ch-closing__meaning font-serif">
              Chandi kills the three demons of the mind — ego, attachment and hate — crosses the three gunas — and becomes one with the Mother.
            </p>
            <div className="ch-closing__divider">
              <span className="ch-closing__divider-line" />
              <span className="ch-closing__divider-star">✦</span>
              <span className="ch-closing__divider-line" />
            </div>
            <p className="ch-closing__sanskrit font-serif" style={{ fontSize: 'clamp(26px, 3.4vw, 40px)', marginTop: '8px' }}>
              ओँ ऐं ह्रीं क्लीं चामुण्डायै विच्चे
            </p>
            <p className="ch-closing__source font-cinzel" style={{ marginTop: '8px' }}>Om Aim Hreem Kleem Chamundayai Vichche</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="ch-cta">
        <div className="ch-cta__geo" aria-hidden="true" />
        <ScrollReveal direction="up" duration={0.85}>
          <div className="ch-cta__box">
            <span className="ch-cta__corner ch-cta__corner--tl" aria-hidden="true">✦</span>
            <span className="ch-cta__corner ch-cta__corner--tr" aria-hidden="true">✦</span>
            <span className="ch-cta__corner ch-cta__corner--bl" aria-hidden="true">✦</span>
            <span className="ch-cta__corner ch-cta__corner--br" aria-hidden="true">✦</span>

            <span className="ch-cta__badge">🔱 Walk the Path of the Warrior Mother</span>
            <h2 className="ch-cta__heading font-cinzel">
              Begin Your Journey Into<br />
              <span className="ch-cta__heading-gold">Chandi Vidya</span>
            </h2>
            <div className="ch-cta__divider">
              <span className="ch-cta__divider-line" />
              <span className="ch-cta__divider-lotus">✿</span>
              <span className="ch-cta__divider-line" />
            </div>
            <p className="ch-cta__body font-serif">
              Explore the 700 verses, the Three Charitas, the Three Forms of Chandi and the Nava Shaktis —
              beginning with a single Navarna japa.
            </p>
            <div className="ch-cta__btns">
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