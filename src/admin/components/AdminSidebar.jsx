import { NavLink } from 'react-router-dom';
import { LogOut, UserCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { adminNavItems, adminProfile } from '../data/mockData.js';
import Icon from './Icon.jsx';

export default function AdminSidebar({ open, onClose }) {
  const handleLogout = () => {
    toast('Logout will be enabled after authentication (Phase 2).', {
      icon: '🪷',
      style: { background: '#3D0A1C', color: '#FFF0E8', border: '1px solid rgba(212,175,55,0.3)' },
    });
  };

  const sections = [
    { label: 'Overview', items: ['dashboard', 'students', 'courses', 'classes', 'events'] },
    { label: 'Manage', items: ['payments', 'content', 'notifications'] },
    { label: 'Account', items: ['profile', 'settings'] },
  ];

  const getItem = (key) => adminNavItems.find((n) => n.to.split('/').pop() === key || (key === 'dashboard' && n.end));

  return (
    <aside className={`admin-sidebar${open ? ' admin-sidebar--open' : ''}`}>
      <div className="admin-sidebar__inner">
        <div className="admin-sidebar__brand">
          <div className="admin-sidebar__mark">ॐ</div>
          <div className="admin-sidebar__brand-name">
            Sri Mahavidyesvari
            <span>TanTra PeeTham</span>
          </div>
        </div>

        <nav className="admin-sidebar__nav">
          {sections.map((section) => (
            <div key={section.label}>
              <div className="admin-sidebar__label">{section.label}</div>
              {section.items.map((key) => {
                const item = getItem(key);
                if (!item) return null;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `admin-sidebar__item${isActive ? ' admin-sidebar__item--active' : ''}`
                    }
                    onClick={onClose}
                    title={item.label}
                  >
                    <Icon name={item.icon} />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="admin-sidebar__footer">
          <div className="admin-sidebar__admin">
            <div className="admin-avatar admin-avatar--sm">{adminProfile.initials}</div>
            <div>
              <div className="admin-sidebar__admin-name">{adminProfile.name}</div>
              <div className="admin-sidebar__admin-role">{adminProfile.role}</div>
            </div>
          </div>
          <NavLink
            to="/admin/profile"
            className="admin-sidebar__link"
            onClick={onClose}
            title="Admin Profile"
          >
            <UserCircle />
            <span>Admin Profile</span>
          </NavLink>
          <button className="admin-sidebar__link" onClick={handleLogout} title="Logout">
            <LogOut />
            <span>Logout</span>
          </button>
          <NavLink to="/" className="admin-sidebar__link" title="View Website">
            <Icon name="content" />
            <span>View Website</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
}
