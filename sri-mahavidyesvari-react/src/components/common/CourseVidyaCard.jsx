import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GoldenButton from './GoldenButton.jsx';
import chandImg  from '../../assets/chandi.png';
import ganapImg  from '../../assets/ganapathyam.png';
import vaishImg  from '../../assets/vaishnavam_course.png';
import skaanImg  from '../../assets/skaandam_course.png';
import ashtaImg  from '../../assets/astangha.png';
import nityaImg  from '../../assets/nithya_kriya.png';
import './CourseVidyaCard.css';

export const COURSE_CARDS = [
  {
    id: 'chandi-vidya',
    image: chandImg,
    title: 'Chandi Vidya',
    description: 'Chandi Vidya is the fierce, compassionate Shakti-path where Devi as Chandika destroys inner darkness and awakens courage, purity, protection, and spiritual transformation.',
  },
  {
    id: 'ganapati-tantra',
    image: ganapImg,
    title: 'Ganapatyam',
    description: 'Ganapati Tantram is the practical path of invoking Lord Ganesha to remove obstacles, sharpen intellect, and establish success through sacred mantra and disciplined worship.',
  },
  {
    id: 'vaishnavam',
    image: vaishImg,
    title: 'Vaishnavam',
    description: 'Vaishnavam is the devotion-centered path of surrender to Lord Vishnu and His divine incarnations, cultivating dharma, devotion, compassion, and inner peace.',
  },
  {
    id: 'skaandam',
    image: skaanImg,
    title: 'Skaandam',
    description: 'Skaandam is the heroic path of Lord Skanda that awakens courage, discipline, wisdom, and victory over inner and outer obstacles.',
  },
  {
    id: 'ashtanga-yoga',
    image: ashtaImg,
    title: 'Ashtanga Yoga',
    description: 'Ashtanga Yoga is the eight-limbed discipline that gradually purifies body, mind, and consciousness, guiding the practitioner toward self-realization.',
  },
  {
    id: 'nitya-kriya',
    image: nityaImg,
    title: 'Nitya Kriya',
    description: 'Nitya Kriya is the sacred daily discipline of worship, mantra, and spiritual practice performed with purity, consistency, and devotion.',
  },
];

export function CourseVidyaCard({ item }) {
  const navigate = useNavigate();
  return (
    <motion.div
      className="cv-card"
      style={{ height: '100%' }}
      whileHover={{ y: -8, boxShadow: '0 28px 64px rgba(123,30,58,0.13), 0 0 36px rgba(184,134,11,0.18)' }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="cv-card__accent" />
      <div className="cv-card__thumb">
        <motion.img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="cv-card__img"
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
      <div className="cv-card__body">
        <h3 className="cv-card__title font-cinzel">{item.title}</h3>
        <div className="cv-card__rule">
          <span className="cv-card__rule-line" />
          <span className="cv-card__rule-dot" />
          <span className="cv-card__rule-line" />
        </div>
        <p className="cv-card__desc font-cormorant">{item.description}</p>
        <GoldenButton
          label="Course Details"
          size="md"
          onClick={() => navigate('/courses')}
        />
      </div>
    </motion.div>
  );
}
