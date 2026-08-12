import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation, useNavigate, Link } from 'react-router-dom';
import { Bell, Search, Menu, ChevronDown, Home, LogOut, UserCircle, ExternalLink } from 'lucide-react';
import toast from 'react-hot-toast';
import { adminProfile } from '../data/mockData.js';

const PAGE_TITLES = {
  '/admin': { title: 'Dashboard', crumb: 'Dashboard' },
  '/admin/students': { title: 'Students', crumb: 'Students' },
  '/admin/courses': { title: 'Courses', crumb: 'Courses' },
  '/admin/classes': { title: 'Classes & Videos', crumb: 'Classes & Videos' },
  '/admin/events': { title: 'Events', crumb: 'Events' },
  '/admin/payments': { title: 'Payments & Revenue', crumb: 'Payments & Revenue' },
  '/admin/content': { title: 'Content', crumb: 'Content' },
  '/admin/notifications': { title: 'Notifications', crumb: 'Notifications' },
  '/admin/profile': { title: 'Admin Profile', crumb: 'Admin Profile' },
  '/admin/settings': { title: 'Settings', crumb: 'Settings' },
};

export default function AdminHeader({ onToggleMenu }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ddRef = useRef(null);

  const meta = PAGE_TITLES[location.pathname] || { title: 'Admin', crumb: 'Admin' };

  useEffect(() => {
    const onClick = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <header className="admin-header">
      <div className="admin-header__inner">
        <div className="admin-header__left">
          <button className="admin-header__menu" onClick={onToggleMenu} aria-label="Toggle menu">
            <Menu />
          </button>
          <div className="admin-header__titles">
            <div className="admin-header__title">{meta.title}</div>
            <div className="admin-header__crumb">
              <Link to="/"><Home /></Link>
              <span>/</span>
              <span>Admin</span>
              <span>/</span>
              <span>{meta.crumb}</span>
            </div>
          </div>
        </div>

        <div className="admin-header__right">
          <div className="admin-search">
            <Search />
            <input
              type="text"
              placeholder="Search students, courses…"
              onChange={() => {}}
            />
          </div>

          <button
            className="admin-header__icon-btn"
            aria-label="Notifications"
            onClick={() => navigate('/admin/notifications')}
          >
            <Bell />
            <span className="admin-header__dot" />
          </button>

          <div className="admin-profile" ref={ddRef}>
            <button className="admin-profile__btn" onClick={() => setOpen((v) => !v)}>
              <div className="admin-avatar admin-avatar--sm">{adminProfile.initials}</div>
              <div className="admin-profile__meta">
                <div className="admin-profile__name">{adminProfile.name}</div>
                <div className="admin-profile__role">{adminProfile.role}</div>
              </div>
              <ChevronDown className="admin-profile__caret" />
            </button>

            {open && (
              <div className="admin-dropdown">
                <NavLink to="/admin/profile" className="admin-dropdown__item" onClick={() => setOpen(false)}>
                  <UserCircle /> Admin Profile
                </NavLink>
                <Link to="/" className="admin-dropdown__item" onClick={() => setOpen(false)}>
                  <ExternalLink /> View Website
                </Link>
                <div className="admin-dropdown__sep" />
                <button
                  className="admin-dropdown__item admin-dropdown__item--danger"
                  onClick={() => {
                    setOpen(false);
                    toast('Logout will be enabled after authentication (Phase 2).', {
                      icon: '🪷',
                      style: { background: '#3D0A1C', color: '#FFF0E8', border: '1px solid rgba(212,175,55,0.3)' },
                    });
                  }}
                >
                  <LogOut /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
