import { useState } from 'react';
import { Search, UserPlus, Filter, X } from 'lucide-react';
import toast from 'react-hot-toast';
import PageHeader from '../components/PageHeader.jsx';
import DataTable from '../components/DataTable.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import TableActions from '../components/TableActions.jsx';
import { students } from '../data/mockData.js';

const initials = (name) =>
  name.split(' ').slice(0, 2).map((n) => n[0]).join('').toUpperCase();

const phase2 = (msg) =>
  toast(msg, {
    icon: '🪷',
    style: { background: '#3D0A1C', color: '#FFF0E8', border: '1px solid rgba(212,175,55,0.3)' },
  });

export default function AdminStudents() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');

  const filtered = students.filter((s) => {
    const matchQuery =
      !query ||
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.email.toLowerCase().includes(query.toLowerCase()) ||
      s.id.toLowerCase().includes(query.toLowerCase());
    const matchStatus = status === 'All' || s.status === status;
    return matchQuery && matchStatus;
  });

  const columns = [
    {
      key: 'name',
      label: 'Name',
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
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    {
      key: 'courses',
      label: 'Enrolled Courses',
      render: (r) => (
        <span className="admin-table__cell-strong">{r.courses.join(', ')}</span>
      ),
    },
    { key: 'joined', label: 'Joined Date' },
    { key: 'status', label: 'Status', render: (r) => <StatusBadge status={r.status} /> },
    {
      key: 'actions',
      label: '',
      renderActions: (r) => (
        <TableActions
          onView={() => phase2(`View profile of ${r.name} (Phase 2).`)}
          onEdit={() => phase2(`Edit ${r.name} (Phase 2).`)}
          onMore={() => phase2(`More actions for ${r.name} (Phase 2).`)}
        />
      ),
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Students"
        title="Students"
        subtitle="View and manage every seeker enrolled across the Peetham's courses and sādhanās."
        actions={
          <button className="admin-btn admin-btn--gold" onClick={() => phase2('Add Student (Phase 2).')}>
            <UserPlus /> Add Student
          </button>
        }
      />

      <div className="admin-toolbar">
        <div className="admin-toolbar__search">
          <Search />
          <input
            type="text"
            placeholder="Search by name, email or ID…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <select className="admin-select" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button className="admin-btn admin-btn--ghost" onClick={() => phase2('Advanced filters (Phase 2).')}>
          <Filter /> Filter
        </button>
        <div className="admin-toolbar__spacer" />
        <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
          {filtered.length} of {students.length} students
        </span>
      </div>

      <div className="admin-card">
        <div className="admin-card__body" style={{ padding: 0 }}>
          <DataTable
            columns={columns}
            rows={filtered}
            emptyTitle="No students found"
            emptyText="Try adjusting your search or filter to find the student you are looking for."
          />
        </div>
      </div>

      {query && (
        <button className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => setQuery('')}>
          <X /> Clear search
        </button>
      )}
    </>
  );
}
