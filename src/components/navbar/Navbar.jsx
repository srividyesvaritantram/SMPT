import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMenu, FiChevronDown, FiSettings } from 'react-icons/fi';
import Dropdown from './Dropdown.jsx';
import MobileDrawer from './MobileDrawer.jsx';
import logoImg from '../../assets/logo.png';
import './Navbar.css';

export const NAV_CONFIG = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Workshops', path: '/workshops' },
  { label: 'Offerings', path: '/offerings' },
  { label: 'Events', path: '/events' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleMouseEnter = (label) => {
    clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 130);
  };

  return (
    <>
      <div className="navbar-wrapper">
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--transparent'}`}>
          <div className="navbar__inner container">
            {/* Logo */}
            <Link to="/" className="navbar__logo">
              <div className="navbar__logo-icon">
                <img src={logoImg} alt="Sri Mahavidyesvari" className="navbar__logo-img" />
              </div>
              <div className="navbar__logo-text">
                <span className="navbar__logo-name font-cinzel">Sri Mahavidyesvari</span>
                <span className="navbar__logo-sub">Tantra Peetham</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="navbar__links">
              {NAV_CONFIG.map((item) => (
                <div
                  key={item.label}
                  className="navbar__item"
                  onMouseEnter={() => item.items ? handleMouseEnter(item.label) : setActiveDropdown(null)}
                  onMouseLeave={item.items ? handleMouseLeave : undefined}
                >
                  <button
                    className={`navbar__link ${isActive(item.path) ? 'navbar__link--active' : ''}`}
                    onClick={() => { navigate(item.path); setActiveDropdown(null); }}
                  >
                    <span>{item.label}</span>
                    {item.items && (
                      <motion.span
                        animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <FiChevronDown size={13} />
                      </motion.span>
                    )}
                  </button>
                  <motion.div
                    className="navbar__underline"
                    animate={{ width: isActive(item.path) ? '70%' : 0, opacity: isActive(item.path) ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  {item.items && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <Dropdown
                          items={item.items}
                          onClose={() => setActiveDropdown(null)}
                          onMouseEnter={() => clearTimeout(closeTimer.current)}
                          onMouseLeave={handleMouseLeave}
                        />
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="navbar__actions">
              <button
                className="navbar__admin-btn"
                onClick={() => navigate('/admin')}
                aria-label="Admin Dashboard"
              >
                <FiSettings size={15} />
                <span>Admin</span>
              </button>
              <button className="navbar__icon-btn" aria-label="Search">
                <FiSearch size={18} />
              </button>
              <button
                className="navbar__mobile-toggle"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <FiMenu size={22} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
