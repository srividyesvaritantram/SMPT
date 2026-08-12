import { TrendingUp, TrendingDown } from 'lucide-react';
import Icon from './Icon.jsx';

export default function StatCard({ icon, label, value, trend, up = true, tone = '' }) {
  return (
    <div className="admin-stat">
      <div className="admin-stat__top">
        <div className={`admin-stat__icon${tone ? ` admin-stat__icon--${tone}` : ''}`}>
          <Icon name={icon} />
        </div>
        <span className={`admin-stat__trend${up ? '' : ' admin-stat__trend--down'}`}>
          {up ? <TrendingUp /> : <TrendingDown />}
          {trend}
        </span>
      </div>
      <div className="admin-stat__value">{value}</div>
      <div className="admin-stat__label">{label}</div>
    </div>
  );
}
