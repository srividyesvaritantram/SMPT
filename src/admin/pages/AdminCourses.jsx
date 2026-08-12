import { useState } from 'react';
import { Search, BookOpen, Users, Plus, Eye, Pencil, Settings } from 'lucide-react';
import toast from 'react-hot-toast';
import PageHeader from '../components/PageHeader.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import EmptyState from '../components/EmptyState.jsx';
import { courses, formatINR } from '../data/mockData.js';

const phase2 = (msg) =>
  toast(msg, {
    icon: '🪷',
    style: { background: '#3D0A1C', color: '#FFF0E8', border: '1px solid rgba(212,175,55,0.3)' },
  });

export default function AdminCourses() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');

  const filtered = courses.filter((c) => {
    const matchQuery =
      !query || c.title.toLowerCase().includes(query.toLowerCase());
    const matchStatus = status === 'All' || c.status === status;
    return matchQuery && matchStatus;
  });

  return (
    <>
      <PageHeader
        eyebrow="Courses"
        title="Courses"
        subtitle="Publish and manage the sacred courses taught at the Peetham."
        actions={
          <button className="admin-btn admin-btn--gold" onClick={() => phase2('Create Course (Phase 2).')}>
            <Plus /> Create Course
          </button>
        }
      />

      <div className="admin-toolbar">
        <div className="admin-toolbar__search">
          <Search />
          <input
            type="text"
            placeholder="Search courses…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <select className="admin-select" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="All">All Status</option>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </select>
        <div className="admin-toolbar__spacer" />
        <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
          {filtered.length} of {courses.length} courses
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="admin-card">
          <EmptyState
            title="No courses found"
            text="Try adjusting your search or create a new course."
          />
        </div>
      ) : (
        <div className="admin-courses-grid">
          {filtered.map((c) => (
            <div className="admin-course" key={c.id}>
              <div className="admin-course__img-wrap">
                <img src={c.image} alt={c.title} className="admin-course__img" />
                <span className="admin-course__status">
                  <StatusBadge status={c.status} />
                </span>
              </div>
              <div className="admin-course__body">
                <div className="admin-course__title">{c.title}</div>
                <div className="admin-course__guru">{c.guru}</div>
                <div className="admin-course__meta">
                  <span><Users /> {c.students} students</span>
                  <span><BookOpen /> {c.created}</span>
                </div>
                <div className="admin-course__price">{formatINR(c.price)}</div>
                <div className="admin-course__actions">
                  <button className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => phase2(`View ${c.title} (Phase 2).`)}>
                    <Eye /> View
                  </button>
                  <button className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => phase2(`Edit ${c.title} (Phase 2).`)}>
                    <Pencil /> Edit
                  </button>
                  <button className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => phase2(`Manage ${c.title} (Phase 2).`)}>
                    <Settings /> Manage
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
