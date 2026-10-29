import mahavidyeswariImg from '../assets/mahavidyeswari.png';
import sriVidyaImg    from '../assets/sri_vidya2.jpeg';
import chandiImg      from '../assets/chandi.png';
import shaivamImg     from '../assets/shaivam.png';
import vaishnavamImg  from '../assets/vaishnavam_course.png';
import ganapathyamImg from '../assets/ganapathyam.png';
import skaandamImg    from '../assets/skaandam_course.png';
import blogHeroImg    from '../assets/blog_hero.png';

const img = mahavidyeswariImg;

export const courses = [
  { id: 'sri-vidya',     title: 'Sri Vidyā',      img: sriVidyaImg,    path: '/courses/sri-vidya',     desc: 'The supreme path of the Divine Mother through Sri Chakra, mantra, and tantra — a complete system of worship, meditation, and liberation rooted in authentic Guru Parampara.' },
  { id: 'chandi-vidya',  title: 'Chandi Vidyā',   img: chandiImg,      path: '/courses/chandi-vidya',  desc: 'Chandi Vidya is the fierce, compassionate Shakti-path where Devi as Chandika destroys inner darkness and awakens courage, purity, protection, and spiritual transformation.' },
  { id: 'shaivam',       title: 'Shaivam',         img: shaivamImg,     path: '/courses/shaivam',       desc: 'Study the sacred traditions of Lord Shiva, including mantra, Agama, temple worship, meditation, and the deeper philosophy of Shaivism according to authentic Guru Parampara.' },
  { id: 'vaishnavam',    title: 'Vaishnavam',      img: vaishnavamImg,  path: '/courses/vaishnavam',    desc: 'Vaishnavam is the devotion-centered path of surrender to Lord Vishnu and His divine incarnations, cultivating dharma, devotion, compassion, and inner peace.' },
  { id: 'ganapatyam',   title: 'Gāṇapatyam',     img: ganapathyamImg, path: '/courses/ganapatyam',   desc: 'Ganapati Tantram is the practical path of invoking Lord Ganesha to remove obstacles, sharpen intellect, and establish success through sacred mantra and disciplined worship.' },
  { id: 'skaandam',      title: 'Skaandam',        img: skaandamImg,    path: '/courses/skandam',      desc: 'Skaandam is the heroic path of Lord Skanda that awakens courage, discipline, wisdom, and victory over inner and outer obstacles.' },
];

export const workshops = [
  { id: '1', title: 'Navaratri Sadhana Intensive', date: 'July 10, 2025', type: 'LIVE', seats: '20 seats left', price: 'FREE', subtitle: 'Nine Nights of Devi Worship', duration: '9 Days', level: 'All Levels', image: img },
  { id: '2', title: 'Sri Chakra Puja Workshop', date: 'July 12, 2025', type: 'RECORDED', seats: '18 seats left', price: '₹699', subtitle: 'Geometry, Mantra & Meditation', duration: '3 Days', level: 'Intermediate', image: img },
  { id: '3', title: 'Kundalini Meditation Retreat', date: 'July 14, 2025', type: 'LIVE', seats: '16 seats left', price: '₹899', subtitle: 'Immersive Mantra Initiation', duration: '5 Days', level: 'Advanced', image: img },
  { id: '4', title: 'Vedic Chanting Masterclass', date: 'July 16, 2025', type: 'RECORDED', seats: '14 seats left', price: '₹1099', subtitle: 'Lalita Sahasranama & Devi Stotras', duration: '2 Days', level: 'Beginner', image: img },
  { id: '5', title: 'Tantra & Yantra Workshop', date: 'July 18, 2025', type: 'LIVE', seats: '12 seats left', price: '₹1299', subtitle: 'Sacred Geometry & Practice', duration: '4 Days', level: 'Intermediate', image: img },
  { id: '6', title: 'Devi Upasana Intensive', date: 'July 20, 2025', type: 'RECORDED', seats: '10 seats left', price: '₹1499', subtitle: 'Complete Devi Worship System', duration: '7 Days', level: 'Advanced', image: img },
];

export const events = [
  { id: '1', emoji: '🌸', title: 'Sri Vidya Maha Diksha Ceremony', description: 'Sacred initiation into the supreme Sri Vidya tradition by Guruji.', date: '', time: '', type: 'CEREMONY', price: '₹5,100', seats: 12, isLive: false, isFree: false, gradientColors: ['#2D0A3E', '#1A0520'] },
  { id: '2', emoji: '🔥', title: 'Chandi Homa — Navaratri Special', description: 'Nine-day sacred fire ritual invoking Goddess Chandi for protection.', date: '', time: '', type: 'HOMAM', price: '₹2,100', seats: 50, isLive: false, isFree: false, gradientColors: ['#3D1500', '#1A0800'] },
  { id: '3', emoji: '🧘', title: 'Ashtanga Yoga Intensive', description: 'Three-day immersive yoga workshop covering all eight limbs of yoga.', date: '', time: '', type: 'WORKSHOP', price: '₹1,500', seats: 30, isLive: false, isFree: false, gradientColors: ['#0A2D1A', '#051A0D'] },
  { id: '4', emoji: '📿', title: 'Maha Mrityunjaya Japa Yagna', description: 'Community japa of 1,25,000 Maha Mrityunjaya mantras for healing.', date: '', time: '', type: 'JAPA', price: '', seats: 200, isLive: false, isFree: true, gradientColors: ['#1A1A00', '#0D0D00'] },
  { id: '5', emoji: '🌅', title: 'Sandhya Vandana Live Session', description: 'Learn the complete Sandhya Vandana ritual with step-by-step guidance.', date: '', time: '', type: 'WORKSHOP', price: '', seats: 100, isLive: false, isFree: true, gradientColors: ['#1A0D00', '#0D0800'] },
  { id: '6', emoji: '🪔', title: 'Diwali Lakshmi Puja Ceremony', description: 'Grand Lakshmi puja on Diwali night for prosperity and abundance.', date: '', time: '', type: 'PUJA', price: '₹501', seats: 75, isLive: false, isFree: false, gradientColors: ['#2D1A00', '#1A0D00'] },
];

export const blogPosts = [
  { id: '1', title: 'The Sacred Science of Sri Chakra Meditation', category: 'Meditation', date: 'June 1, 2025', readTime: '5 min read', thumbnail: blogHeroImg },
  { id: '2', title: 'Understanding Navaratri: Nine Nights of Divine Power', category: 'Festivals', date: 'June 2, 2025', readTime: '6 min read', thumbnail: blogHeroImg },
  { id: '3', title: 'Kundalini Awakening: Signs and Stages', category: 'Tantra', date: 'June 3, 2025', readTime: '7 min read', thumbnail: blogHeroImg },
  { id: '4', title: 'The Significance of Diya in Hindu Worship', category: 'Rituals', date: 'June 4, 2025', readTime: '8 min read', thumbnail: blogHeroImg },
  { id: '5', title: 'Vedanta Philosophy: The Path of Self-Knowledge', category: 'Philosophy', date: 'June 5, 2025', readTime: '9 min read', thumbnail: blogHeroImg },
  { id: '6', title: 'Mantra Chanting: Science and Spirituality', category: 'Mantras', date: 'June 6, 2025', readTime: '10 min read', thumbnail: blogHeroImg },
  { id: '7', title: 'Sri Yantra: The Geometry of the Cosmos', category: 'Tantra', date: 'June 7, 2025', readTime: '6 min read', thumbnail: blogHeroImg },
  { id: '8', title: 'Guru Parampara: The Living Tradition', category: 'Philosophy', date: 'June 8, 2025', readTime: '5 min read', thumbnail: blogHeroImg },
  { id: '9', title: 'Panchadashi Mantra: The Fifteen Syllables', category: 'Mantras', date: 'June 9, 2025', readTime: '7 min read', thumbnail: blogHeroImg },
];

export const offerings = [
  { id: '1', icon: '🪔', title: 'Ganesh Puja', description: 'Remove obstacles and invite auspiciousness into your life.', price: '₹501', duration: '30 mins' },
  { id: '2', icon: '🔥', title: 'Lakshmi Homam', description: 'Invoke divine prosperity and abundance through sacred fire.', price: '₹701', duration: '45 mins' },
  { id: '3', icon: '🌸', title: 'Saraswati Archana', description: 'Seek blessings of wisdom, arts, and learning.', price: '₹901', duration: '60 mins' },
  { id: '4', icon: '🙏', title: 'Navagraha Puja', description: 'Harmonize planetary influences for peace and success.', price: '₹1101', duration: '75 mins' },
  { id: '5', icon: '📿', title: 'Rudrabhishek', description: 'Sacred abhishek to Lord Shiva for health and liberation.', price: '₹1301', duration: '90 mins' },
  { id: '6', icon: '🌺', title: 'Devi Puja', description: 'Invoke the divine mother for protection and grace.', price: '₹1501', duration: '105 mins' },
];

export const gurus = [
  { name: 'Adi Shankaracharya', era: '8th Century CE', role: 'Reviver of Advaita & Sri Vidya', image: img },
  { name: 'Abhinavagupta', era: '10th Century CE', role: 'Master of Kashmir Shaivism', image: img },
  { name: 'Bhaskararaya', era: '18th Century CE', role: 'Supreme Authority on Sri Vidya', image: img },
  { name: 'Swami Sivananda', era: '20th Century CE', role: 'Divine Life & Shakti Upasana', image: img },
  { name: 'Our Lineage Guru', era: 'Present Day', role: 'Living Transmission of Sri Vidya', image: img },
];

export const testimonials = [
  {
    name: 'Lakshmi',
    location: 'Sri Vidya Sadhaka · India',
    rating: 5.0,
    text: 'The teachings were clear, grounded, and deeply respectful, presented in a way that made the practice feel both sacred and approachable. Over time, my sadhana became more steady and sincere, and I began to feel a quiet inner protection that stayed with me not only during the rituals, but also in daily life. The experience brought a sense of discipline, clarity, and devotion that continues to support me from within.',
  },
  {
    name: 'S. Srinivas',
    location: 'Workshop Participant · India',
    rating: 5.0,
    text: 'The guidance in the workshop brought both discipline and softness, helping me approach the practice with sincerity rather than confusion. I began to understand the purpose behind each step, which made every practice feel more meaningful and deeply connected. The teachings were authentic, practical, and rooted in the Guru Parampara.',
  },
  {
    name: 'Ayush',
    location: 'Ritual Recipient · India',
    rating: 5.0,
    text: 'The experience after the ritual was profound and deeply moving. There was a stillness and clarity that I had not felt before — a sense of being held by something greater. The entire process was conducted with such reverence and precision that it left a lasting impression on my heart and practice.',
  },
];

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Workshops', path: '/workshops' },
  { label: 'Offerings', path: '/offerings' },
  { label: 'Events', path: '/events' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
];
