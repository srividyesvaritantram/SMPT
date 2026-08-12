import { IndianRupee, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DataTable from './DataTable.jsx';
import StatusBadge from './StatusBadge.jsx';
import { formatINR } from '../data/mockData.js';

export default function RecentPayments({ rows }) {
  const navigate = useNavigate();

  const columns = [
    { key: 'student', label: 'Student', render: (r) => <span className="admin-table__cell-strong">{r.student}</span> },
    { key: 'course', label: 'Course' },
    {
      key: 'amount',
      label: 'Amount',
      render: (r) => <span className="admin-table__cell-strong">{formatINR(r.amount)}</span>,
    },
    { key: 'date', label: 'Date' },
    { key: 'status', label: 'Payment Status', render: (r) => <StatusBadge status={r.status} /> },
  ];

  return (
    <div className="admin-card">
      <div className="admin-card__head">
        <div>
          <div className="admin-card__title"><IndianRupee /> Recent Payments</div>
          <div className="admin-card__subtitle">Course fees &amp; dāna contributions</div>
        </div>
        <button className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => navigate('/admin/payments')}>
          View All <ArrowRight />
        </button>
      </div>
      <div className="admin-card__body" style={{ padding: 0 }}>
        <DataTable columns={columns} rows={rows} />
      </div>
    </div>
  );
}
