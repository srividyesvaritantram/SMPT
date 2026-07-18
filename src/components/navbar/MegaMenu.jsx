import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './MegaMenu.css';

const menus = {
  courses: {
    sections: [
      { title: 'By Category', links: [{ label: 'Meditation', path: '/courses?cat=meditation' }, { label: 'Tantra', path: '/courses?cat=tantra' }, { label: 'Vedanta', path: '/courses?cat=vedanta' }, { label: 'Chanting', path: '/courses?cat=chanting' }] },
      { title: 'By Level', links: [{ label: 'Beginner', path: '/courses?level=beginner' }, { label: 'Intermediate', path: '/courses?level=intermediate' }, { label: 'Advanced', path: '/courses?level=advanced' }] },
      { title: 'Special', links: [{ label: 'Free Courses', path: '/courses?type=free' }, { label: 'Bestsellers', path: '/courses?type=bestseller' }, { label: 'New Arrivals', path: '/courses?type=new' }] },
    ],
  },
  workshops: {
    sections: [
      { title: 'Upcoming', links: [{ label: 'Navaratri Intensive', path: '/workshops' }, { label: 'Sri Yantra Sadhana', path: '/workshops' }, { label: 'Panchadashi Retreat', path: '/workshops' }] },
      { title: 'Format', links: [{ label: 'Live Workshops', path: '/workshops?type=live' }, { label: 'Recorded', path: '/workshops?type=recorded' }, { label: 'Retreats', path: '/workshops?type=retreat' }] },
    ],
  },
  offerings: {
    sections: [
      { title: 'Puja Services', links: [{ label: 'Ganesh Puja', path: '/offerings' }, { label: 'Lakshmi Homam', path: '/offerings' }, { label: 'Rudrabhishek', path: '/offerings' }] },
      { title: 'Learning', links: [{ label: 'Online Courses', path: '/courses' }, { label: 'Personal Guidance', path: '/offerings' }, { label: 'Sacred Texts', path: '/offerings' }] },
    ],
  },
};

export default function MegaMenu({ menuKey, onClose }) {
  const menu = menus[menuKey];
  if (!menu) return null;

  return (
    <motion.div
      className="mega-menu"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      onMouseLeave={onClose}
    >
      <div className="mega-menu__inner">
        {menu.sections.map((section) => (
          <div key={section.title} className="mega-menu__section">
            <h4 className="mega-menu__title">{section.title}</h4>
            {section.links.map((link) => (
              <Link key={link.label} to={link.path} className="mega-menu__link" onClick={onClose}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
