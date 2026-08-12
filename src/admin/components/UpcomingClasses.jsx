import { Video, CalendarDays, Clock, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StatusBadge from './StatusBadge.jsx';

export default function UpcomingClasses({ rows }) {
  const navigate = useNavigate();

  return (
    <div className="admin-card">
      <div className="admin-card__head">
        <div>
          <div className="admin-card__title"><Video /> Upcoming Classes</div>
          <div className="admin-card__subtitle">Live sessions &amp; sādhanā</div>
        </div>
        <button className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => navigate('/admin/classes')}>
          View All <ArrowRight />
        </button>
      </div>
      <div className="admin-card__body">
        {rows.slice(0, 4).map((c) => (
          <div className="admin-class" key={c.id}>
            <div className="admin-class__icon"><Video /></div>
            <div className="admin-class__body">
              <div className="admin-class__title">{c.title}</div>
              <div className="admin-class__course">{c.course}</div>
              <div className="admin-class__meta">
                <span><CalendarDays /> {c.date}</span>
                <span><Clock /> {c.time}</span>
                <span><Users /> {c.students} Students</span>
              </div>
            </div>
            <StatusBadge status={c.status} />
          </div>
        ))}
      </div>
    </div>
  );
}
