import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import ScrollReveal from '../common/ScrollReveal.jsx';
import mahaLakshmiImg from '../../assets/maha-lakshmi.jpeg';
import sivaAradhanaEventImg from '../../assets/siva-aradhana-event.jpeg';
import mangalaGauriMainImg from '../../assets/mangala-gauri-main.jpeg';
import mahaImg from '../../assets/maha.jpeg';
import mahakalaImg from '../../assets/mahakala.jpeg';
import rudhraImg from '../../assets/rudhra.jpeg';
import soubhagyaImg from '../../assets/soubhagya.jpeg';
import bhuamaImg from '../../assets/bhuama.jpeg';
import homaImg from '../../assets/homa.jpeg';
import './Shravana2026Events.css';

const WA_URL = 'https://wa.me/919390886029';

const EVENT_THEMES = {
  lakshmi: {
    tag: 'Ārādhana',
    icon: '🪷',
  },
  siva: {
    tag: 'Abhiṣeka',
    icon: '🔱',
  },
  gauri: {
    tag: 'Vratam',
    icon: '🌺',
  },
  pradosha: {
    tag: 'Vratam',
    icon: '🪔',
  },
};

export const SRAVANA_2026_EVENTS = [
  {
    id: 'aug-14-lakshmi',
    anchor: 'event-14',
    theme: 'lakshmi',
    date: '14 August 2026',
    weekday: 'Śrāvaṇa Śukravāra',
    title: 'Śukravāra Rājayoga-Pradāyaka Śrāvaṇa Mahālakṣmī Ārādhana',
    transliteration: 'Higher Position / Rajayoga Prayoga Vidhi',
    image: mahaLakshmiImg,
    about:
      'On this sacred Friday of Śrāvaṇa Māsa, devotees gather to honor Goddess Mahā Lakṣmī — the bestower of abundance, auspiciousness and grace. Through mantra, lotus and fragrant flower offerings, and the recitation of the Śrī Sūkta, the worship invokes Her blessings for prosperity, family harmony and spiritual well-being.',
    benefits: [
      'Divine grace for prosperity and abundance',
      'Auspiciousness and harmony in the home',
      'Removal of financial obstacles and worries',
      'Nourishment of devotion and inner contentment',
    ],
    blessing:
      'May Śrī Mahālakṣmī bless you with abundance, grace and enduring inner peace.',
  },
  {
    id: 'aug-17-siva',
    anchor: 'event-17',
    theme: 'siva',
    date: '17 August 2026',
    weekday: 'Śrāvaṇa Somavāra',
    title: 'Vidya-Jñāna-Pradāyaka Śrāvaṇa Monday Ārādhana',
    transliteration: 'Higher Education Prayoga Vidhi',
    image: sivaAradhanaEventImg,
    about:
      'Monday is the sacred day of Lord Śiva. On this Śrāvaṇa Somavāra, devotees offer the holy Rudrābhiṣekam — bathing the Śiva Liṅga with milk, ghee, honey and pañchāmṛta — while chanting the Śrī Rudram. The worship invokes Śiva\u2019s grace for inner purity, removal of karmic burdens and steadfastness on the spiritual path.',
    benefits: [
      'Purification of mind, speech and karma',
      'Removal of obstacles and negative energies',
      'Strength, steadiness and inner clarity',
      'Grace of Lord Śiva for spiritual progress',
    ],
    blessing:
      'May Lord Śiva\u2019s grace dissolve all impurities and grant you peace, strength and liberation.',
  },
  {
    id: 'aug-18-gauri',
    anchor: 'event-18',
    theme: 'gauri',
    date: '18 August 2026',
    weekday: 'Śrāvaṇa Maṅgalavāra',
    title: 'Satsaṅtāna-Pradāyaka Śrāvaṇa Maṅgaḷa Gaurī Ārādhana',
    transliteration: 'Garbha Ariṣṭa Nivāraṇa Prayoga Kriya Vidhi',
    image: mangalaGauriMainImg,
    about:
      'Observed on Śrāvaṇa Tuesdays, the Mangala Gaurī Vratam honors Goddess Gaurī — the auspicious form of Pārvatī — with sincere saṅkalpa and prayer for saubhāgya, marital harmony and family well-being. Devotees offer turmeric, kumkum and red adornments, and pray for grace, peace and a blessed married life.',
    benefits: [
      'Saubhāgya — auspiciousness and marital happiness',
      'Harmony and understanding between spouses',
      'Family prosperity and a peaceful household',
      'Removal of marriage-related obstacles through prayer',
    ],
    blessing:
      'May Goddess Gaurī bless you with auspiciousness, harmony and enduring family happiness.',
  },
  {
    id: 'aug-21-lakshmi',
    anchor: 'event-21',
    theme: 'lakshmi',
    date: '21 August 2026',
    weekday: 'Śrāvaṇa Śukravāra',
    title: 'Sakala Vara-Prada Aṣṭaiśvarya-Pradāyaka Varalakṣmī Ārādhana',
    transliteration: 'Sakala Kārya Siddhyartha Kārya Jaya Prayoga Vidhi',
    image: mahaImg,
    about:
      'A continuation of the sacred Friday worship of Śrāvaṇa, this ārādhana honors Mahā Lakṣmī through the sixteen-fold offering — sandalwood, fragrant flowers, dhūpa, dīpa and naivedya — accompanied by the chanting of Her thousand names. The ritual awakens gratitude, devotion and receptivity to divine abundance.',
    benefits: [
      'Gratitude and receptivity to divine grace',
      'Wealth, wisdom and well-being',
      'Inner contentment and emotional healing',
      'Blessings for the entire family',
    ],
    blessing:
      'May the Divine Mother Lakṣmī shower you with prosperity, grace and unshakable peace.',
  },
  {
    id: 'aug-23-siva',
    anchor: 'event-23',
    theme: 'siva',
    date: '23 August 2026',
    weekday: 'Śrāvaṇa Ravivāra',
    title: 'Śrāvaṇa Putradā Ekādaśī – Satsaṅtāna-Pradāyaka Ārādhana',
    transliteration: '',
    image: mahakalaImg,
    about:
      'On this Śrāvaṇa Sunday, devotees offer a grand abhiṣeka to Lord Śiva as Mahākāla — the remover of darkness and destroyer of ignorance. The worship, performed with sacred mantras and bilva leaves, invokes the Sun\u2019s light of clarity and Śiva\u2019s power to transform suffering into spiritual strength.',
    benefits: [
      'Dispelling of ignorance and inner darkness',
      'Vitality, courage and inner strength',
      'Dissolution of deep-seated karmic impressions',
      'Clarity of purpose on the spiritual path',
    ],
    blessing:
      'May Śiva\u2019s radiant grace illumine your path and grant you strength, wisdom and liberation.',
  },
  {
    id: 'aug-24-siva',
    anchor: 'event-24',
    theme: 'siva',
    date: '24 August 2026',
    weekday: 'Śrāvaṇa Somavāra',
    title: 'Śiva Ārādhana & Abhiṣeka',
    transliteration: 'Śrī Rudrābhiṣekam • Somavāra Pūjā',
    image: rudhraImg,
    about:
      'The sacred Monday worship of Śiva continues on this Śrāvaṇa Somavāra. Devotees perform the Rudrābhiṣekam with milk, curd, ghee, honey and vibhūti, chanting the Śrī Rudram with devotion, seeking inner purity, peace of mind and the grace to walk the path of dharma.',
    benefits: [
      'Peace and stillness of mind',
      'Removal of anxieties and mental agitation',
      'Protection from negative influences',
      'Steadfastness in sādhanā',
    ],
    blessing:
      'May Lord Śiva grant you peace, purity and the strength to abide in devotion.',
  },
  {
    id: 'aug-25-gauri',
    anchor: 'event-25-marriage',
    theme: 'gauri',
    date: '25 August 2026',
    weekday: 'Śrāvaṇa Maṅgalavāra',
    title: 'Śīghra Vivāha-Katākṣa-Pradāyaka Śrāvaṇa Maṅgaḷa Gaurī Ārādhana',
    transliteration: 'Śīghra Vivāha Prayoga Vidhi',
    image: soubhagyaImg,
    about:
      'The concluding Maṅgalavāra of Śrāvaṇa, this Mangala Gaurī Vratam is observed with heightened devotion. Through saṅkalpa, vrat kathā and humble prayer, devotees seek Goddess Gaurī\u2019s blessings for a life of saubhāgya, harmony and spiritual fulfillment.',
    benefits: [
      'Fulfillment of sincere saṅkalpa and prayers',
      'Blessings for marriage and family life',
      'Peace, harmony and auspiciousness',
      'Spiritual contentment and devotion',
    ],
    blessing:
      'May Goddess Gaurī fulfill your sincere prayers and bless your home with peace and harmony.',
  },
  {
    id: 'aug-25-pradosha',
    anchor: 'event-25-bhauma-pradosha',
    theme: 'pradosha',
    date: '25 August 2026',
    weekday: 'Bhauma Pradoṣa',
    title: 'Śrāvaṇa Bhauma Pradoṣa Ārādhana',
    transliteration: 'Ṛṇa-Vimukti Prayoga Kriya',
    image: bhuamaImg,
    about:
      'Pradoṣa, the sacred twilight worship of Lord Śiva on Trayodaśī, becomes supremely powerful when it falls on Tuesday — known as Bhauma Pradoṣa. Devotees observe the Pradoṣa vrata, offer bilva leaves and lamp worship during the twilight, and chant Śiva\u2019s mantras to invoke the removal of obstacles and the blessing of inner illumination.',
    benefits: [
      'Removal of obstacles and karmic blocks',
      'Grace for health, wealth and progeny',
      'Blessings of Lord Śiva and Goddess Pārvatī',
      'Inner light and spiritual awakening',
    ],
    blessing:
      'May Lord Śiva and Goddess Pārvatī bless you with grace, auspiciousness and illumination.',
  },
  {
    id: 'aug-28-lakshmi',
    anchor: 'event-28',
    theme: 'lakshmi',
    date: '28 August 2026',
    weekday: 'Śrāvaṇa Śukravāra',
    title: 'Rājayoga-Pradāyaka Mahālakṣmī Ārādhana',
    transliteration: 'Higher Position Prayoga Kriya',
    image: homaImg,
    about:
      'The grand concluding Friday of the Śrāvaṇa period, this Mahā Lakṣmī Ārādhana culminates in a sacred homa — the fire ritual of divine offering. Devotees offer ghee, herbs and sacred grains into the consecrated fire while invoking Mahā Lakṣmī\u2019s blessings of abundance, protection and lasting prosperity.',
    benefits: [
      'Sacred fire offering for abundance and protection',
      'Cleansing of negative energies',
      'Prosperity, health and family well-being',
      'Completion of Śrāvaṇa sādhanā with divine grace',
    ],
    blessing:
      'May Śrī Mahālakṣmī\u2019s fire of grace purify your life and bless you with boundless abundance.',
  },
];

const LOCATION =
  'Sri MahaVidyesvari Tantra Peetham, Visakhapatnam, Andhra Pradesh, India';

function EventCard({ event, index, highlighted }) {
  const navigate = useNavigate();
  const theme = EVENT_THEMES[event.theme];

  return (
    <ScrollReveal delay={(index % 3) * 0.08} duration={0.75}>
      <motion.article
        id={event.anchor}
        className={`sve-card${highlighted ? ' sve-card--highlighted' : ''}`}
        whileHover={{ y: -6, boxShadow: '0 0 32px rgba(212,175,55,0.22)' }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="sve-card__img-col">
          <div className="sve-card__img-wrap">
            <img
              src={event.image}
              alt={event.title}
              className="sve-card__img"
              loading="lazy"
            />
          </div>
          <span className="sve-card__date-badge">
            <span className="sve-card__date-badge-icon" aria-hidden="true" />
            {event.weekday} • {event.date}
          </span>
          <span className="sve-card__tag">
            <span className="sve-card__tag-icon" aria-hidden="true">
              {theme.icon}
            </span>
            {theme.tag}
          </span>
        </div>

        <div className="sve-card__content">
          <h3 className="sve-card__title font-cinzel">{event.title}</h3>
          {event.transliteration && (
            <p className="sve-card__transliteration font-serif">
              {event.transliteration}
            </p>
          )}
          <p className="sve-card__about font-serif">{event.about}</p>

          <div className="sve-card__benefits">
            <h4 className="sve-card__benefits-title font-cinzel">Key Blessings</h4>
            {event.benefits.map((b, i) => (
              <div key={i} className="sve-card__benefit">
                <span className="sve-card__benefit-tick">✦</span>
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="sve-card__blessing font-cormorant">
            <span aria-hidden="true">🙏</span> {event.blessing}
          </div>

          <div className="sve-card__details">
            <div className="sve-card__detail-row">
              <span className="sve-card__detail-icon" aria-hidden="true">📍</span>
              <div>
                <p className="sve-card__detail-label">Location</p>
                <p className="sve-card__detail-value">
                  Sri MahaVidyesvari Tantra Peetham
                  <br />
                  Visakhapatnam, Andhra Pradesh, India
                </p>
              </div>
            </div>
            <div className="sve-card__detail-row">
              <span className="sve-card__detail-icon" aria-hidden="true">⏰</span>
              <div>
                <p className="sve-card__detail-label">Time</p>
                <p className="sve-card__detail-value">Morning Pūjā 8:00 AM onwards</p>
              </div>
            </div>
          </div>

          <div className="sve-card__btns">
            <motion.button
              className="sve-card__btn sve-card__btn--primary font-cinzel"
              onClick={() => window.open(WA_URL, '_blank')}
              whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(37,211,102,0.35)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.22 }}
            >
              📲 WhatsApp
            </motion.button>
            <motion.button
              className="sve-card__btn sve-card__btn--secondary font-cinzel"
              onClick={() => navigate('/contact')}
              whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(184,134,11,0.30)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.22 }}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </motion.article>
    </ScrollReveal>
  );
}

export default function Shravana2026Events() {
  const location = useLocation();
  const [highlighted, setHighlighted] = useState(null);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (!hash) return;
    let clearTimer;
    const timer = window.setTimeout(() => {
      const el = document.getElementById(hash);
      if (!el) return;
      const navbar = document.querySelector('nav.navbar');
      const offset = navbar ? navbar.offsetHeight : 72;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 18;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      setHighlighted(hash);
      clearTimer = window.setTimeout(() => setHighlighted(null), 2800);
    }, 280);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(clearTimer);
    };
  }, [location.hash]);

  return (
    <section className="sve" id="sravana-events" aria-label="Śrāvaṇa 2026 Sacred Events">
      <div className="sve__container">
        <ScrollReveal direction="up" duration={0.85}>
          <div className="sve__header">
            <span className="sve__badge">🌺 ŚRĀVAṆA 2026 — SACRED EVENTS</span>
            <h2 className="sve__title font-cinzel">
              Sacred Ārādhana • Vratam • Abhiṣeka • Spiritual Practices
            </h2>
            <div className="sve__rule" aria-hidden="true">
              <span className="sve__rule-line" />
              <span className="sve__rule-diamond">✦</span>
              <span className="sve__rule-line" />
            </div>
          </div>
        </ScrollReveal>

        <div className="sve__grid">
          {SRAVANA_2026_EVENTS.map((event, i) => (
            <EventCard
              key={event.id}
              event={event}
              index={i}
              highlighted={highlighted === event.anchor}
            />
          ))}
        </div>

        <ScrollReveal direction="up" duration={0.85}>
          <div className="sve__note font-cormorant">
            <span aria-hidden="true">🪔</span>
            These sacred dates are offered for the guidance of devotees. The Peetham provides
            traditional guidance, mantra and worship procedure for each observance.
            <span aria-hidden="true">🪔</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
