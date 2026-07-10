import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronDown } from 'react-icons/fi';
import GoldenButton from '../common/GoldenButton.jsx';
import { NAV_CONFIG } from './Navbar.jsx';
import './MobileDrawer.css';

export default function MobileDrawer({ open, onClose }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);

  const toggle = (label) => setExpanded(expanded === label ? null : label);

  const handleLink = (path) => {
    navigate(path);
    onClose();
    setExpanded(null);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />
          <motion.div
            className="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Header */}
            <div className="drawer__header">
              <div className="drawer__logo">
                <div className="drawer__logo-icon">
                  <span className="font-devanagari">ॐ</span>
                </div>
                <div>
                  <p className="drawer__logo-name font-cinzel">Sri Mahavidyesvari</p>
                  <p className="drawer__logo-sub">Tantra Peetham</p>
                </div>
              </div>
              <button className="drawer__close" onClick={onClose} aria-label="Close menu">
                <FiX size={20} />
              </button>
            </div>

            <div className="drawer__divider" />

            {/* Nav */}
            <div className="drawer__nav">
              {NAV_CONFIG.map((item) => (
                <div key={item.label} className="drawer__section">
                  {item.items ? (
                    <>
                      <button
                        className="drawer__row drawer__row--expandable"
                        onClick={() => toggle(item.label)}
                      >
                        <span>{item.label}</span>
                        <motion.span
                          animate={{ rotate: expanded === item.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ display: 'flex' }}
                        >
                          <FiChevronDown size={16} />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {expanded === item.label && (
                          <motion.div
                            className="drawer__sub"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            style={{ overflow: 'hidden' }}
                          >
                            {item.items.map((sub) => (
                              <button
                                key={sub.path}
                                className="drawer__sub-item"
                                onClick={() => handleLink(sub.path)}
                              >
                                <span className="drawer__sub-dot" />
                                {sub.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <button className="drawer__row" onClick={() => handleLink(item.path)}>
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="drawer__divider" />

            <div className="drawer__footer">
              <GoldenButton label="Login" outlined width="100%" onClick={() => handleLink('/login')} />
              <GoldenButton label="Join Free" width="100%" onClick={() => handleLink('/register')} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
