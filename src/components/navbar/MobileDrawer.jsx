import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronDown, FiSettings } from 'react-icons/fi';
import { NAV_CONFIG } from './Navbar.jsx';
import logoImg from '../../assets/logo.png';
import { CONTENT_VISIBILITY } from '../../config/contentVisibility.js';
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
            transition={{ type: 'tween', duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Header */}
            <div className="drawer__header">
              <div className="drawer__logo">
                <div className="drawer__logo-icon">
                  <img src={logoImg} alt="Sri Mahavidyesvari" className="drawer__logo-img" />
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

              {/* Temporary Admin access (Phase 1) */}
              {CONTENT_VISIBILITY.admin && (
                <button className="drawer__row drawer__admin-row" onClick={() => handleLink('/admin')}>
                  <span className="drawer__admin-label">
                    <FiSettings size={16} />
                    Admin Dashboard
                  </span>
                  <span className="drawer__admin-badge">Admin</span>
                </button>
              )}
            </div>

            <div className="drawer__divider" />

            <div className="drawer__footer">
              <p className="drawer__footer-text">Sri MahaVidyesvari Tantra Peetham</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
