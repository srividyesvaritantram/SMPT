import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Dropdown.css';

export default function Dropdown({ items, onClose, onMouseEnter, onMouseLeave }) {
  return (
    <motion.div
      className="dropdown"
      initial={{ opacity: 0, y: -10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.97 }}
      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.map((item, i) => (
        <motion.div
          key={item.path}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.04, duration: 0.18 }}
        >
          <Link to={item.path} className="dropdown__item" onClick={onClose}>
            <span className="dropdown__item-dot" />
            <span>{item.label}</span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
