import { Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DataTable from './DataTable.jsx';
import StatusBadge from './StatusBadge.jsx';

const initials = (name) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();

export default function RecentStudents({ rows }) {
  const navigate = useNavigate();

  const columns = [
    {
      key: 'student',
      label: 'Student',
      render: (r) => (
        <div className="admin-table__avatar">
          <div className="admin-avatar admin-avatar--sm">{initials(r.name)}</div>
          <div>
            <span className="admin-table__cell-strong">{r.name}</span>
            <span className="admin-table__cell-sub">{r.id}</span>
          </div>
        </div>
      ),
    },
    { key: 'email', label: 'Email', render: (r) => <span>{r.email}</span> },
    { key: 'course', label: 'Course', render: (r) => <span className="admin-table__cell-strong">{r.course}</span> },
    { key: 'joined', label: 'Joined' },
    { key: 'status', label: 'Status', render: (r) => <StatusBadge status={r.status} /> },
  ];

  return (
    <div className="admin-card">
      <div className="admin-card__head">
        <div>
          <div className="admin-card__title"><Users /> Recent Student Registrations</div>
          <div className="admin-card__subtitle">Latest seekers joining the Peetham</div>
        </div>
        <button className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => navigate('/admin/students')}>
          View All <ArrowRight />
        </button>
      </div>
      <div className="admin-card__body" style={{ padding: 0 }}>
        <DataTable columns={columns} rows={rows} />
      </div>
    </div>
  );
}
