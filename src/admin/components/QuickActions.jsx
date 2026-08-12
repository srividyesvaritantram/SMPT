import toast from 'react-hot-toast';
import Icon from './Icon.jsx';
import { quickActions } from '../data/mockData.js';

const note = (label) =>
  toast(`${label} will be available in Phase 2.`, {
    icon: '🪷',
    style: { background: '#3D0A1C', color: '#FFF0E8', border: '1px solid rgba(212,175,55,0.3)' },
  });

export default function QuickActions() {
  return (
    <div className="admin-card">
      <div className="admin-card__head">
        <div>
          <div className="admin-card__title">Quick Actions</div>
          <div className="admin-card__subtitle">Manage your Peetham in one tap</div>
        </div>
      </div>
      <div className="admin-card__body">
        <div className="admin-quick">
          {quickActions.map((a) => (
            <button key={a.id} className="admin-quick__btn" onClick={() => note(a.label)}>
              <span className="admin-quick__btn-icon">
                <Icon name={a.icon} />
              </span>
              {a.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
