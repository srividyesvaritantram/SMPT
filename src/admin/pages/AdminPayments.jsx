import { Wallet, IndianRupee, CalendarDays, Clock, Banknote, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import StatCard from '../components/StatCard.jsx';
import DataTable from '../components/DataTable.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { transactions, revenueSummary, formatINR } from '../data/mockData.js';

export default function AdminPayments() {
  const columns = [
    {
      key: 'txId',
      label: 'Transaction ID',
      render: (r) => <span className="admin-table__cell-strong">{r.txId}</span>,
    },
    { key: 'student', label: 'Student', render: (r) => <span className="admin-table__cell-strong">{r.student}</span> },
    { key: 'course', label: 'Course' },
    { key: 'amount', label: 'Amount', render: (r) => <span className="admin-table__cell-strong">{formatINR(r.amount)}</span> },
    {
      key: 'date',
      label: 'Date',
      render: (r) => (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <CalendarDays style={{ width: 13, height: 13, color: 'var(--gold-deep)' }} /> {r.date}
        </span>
      ),
    },
    { key: 'method', label: 'Payment Method' },
    { key: 'status', label: 'Status', render: (r) => <StatusBadge status={r.status} /> },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Finance"
        title="Payments & Revenue"
        subtitle="Track course fees, dāna and all financial inflows of the Peetham."
      />

      <div className="admin-grid-stats admin-grid-stats--4">
        <StatCard icon="wallet" label="Total Revenue" value={formatINR(revenueSummary.totalRevenue)} trend="+18.6%" up tone="gold" />
        <StatCard icon="calendar" label="This Month" value={formatINR(revenueSummary.thisMonth)} trend="+49.0%" up />
        <StatCard icon="clock" label="Pending Payments" value={formatINR(revenueSummary.pendingPayments)} trend={`${revenueSummary.pendingCount} pending`} up={false} tone="lotus" />
        <StatCard icon="check" label="Successful Payments" value={formatINR(revenueSummary.successfulPayments)} trend={`${revenueSummary.successfulCount} settled`} up />
      </div>

      <div className="admin-card">
        <div className="admin-card__head">
          <div>
            <div className="admin-card__title"><Banknote /> Transactions</div>
            <div className="admin-card__subtitle">All recent payment activity</div>
          </div>
          <span className="admin-badge admin-badge--gold"><CheckCircle2 /> {transactions.length} shown</span>
        </div>
        <div className="admin-card__body" style={{ padding: 0 }}>
          <DataTable columns={columns} rows={transactions} />
        </div>
      </div>
    </>
  );
}
