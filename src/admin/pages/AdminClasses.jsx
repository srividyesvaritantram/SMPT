import { useState } from 'react';
import { Video, UploadCloud, PlayCircle, Clock, Users, Plus, CloudUpload, Pencil, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';
import PageHeader from '../components/PageHeader.jsx';
import DataTable from '../components/DataTable.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { classes } from '../data/mockData.js';

const phase2 = (msg) =>
  toast(msg, {
    icon: '🪷',
    style: { background: '#3D0A1C', color: '#FFF0E8', border: '1px solid rgba(212,175,55,0.3)' },
  });

export default function AdminClasses() {
  const [tab, setTab] = useState('classes');

  const columns = [
    {
      key: 'title',
      label: tab === 'classes' ? 'Class Title' : 'Video',
      render: (r) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <span
            style={{
              width: 36, height: 36, borderRadius: 10, flexShrink: 0,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--maroon-pale)', color: 'var(--maroon)',
            }}
          >
            {tab === 'classes' ? <PlayCircle style={{ width: 17, height: 17 }} /> : <Video style={{ width: 17, height: 17 }} />}
          </span>
          <div>
            <span className="admin-table__cell-strong">{r.title}</span>
            <span className="admin-table__cell-sub">{r.video}</span>
          </div>
        </div>
      ),
    },
    { key: 'course', label: 'Course', render: (r) => <span className="admin-table__cell-strong">{r.course}</span> },
    {
      key: 'duration',
      label: 'Duration',
      render: (r) => (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <Clock style={{ width: 13, height: 13, color: 'var(--gold-deep)' }} /> {r.duration}
        </span>
      ),
    },
    {
      key: 'students',
      label: 'Students',
      render: (r) => (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <Users style={{ width: 13, height: 13, color: 'var(--gold-deep)' }} /> {r.students}
        </span>
      ),
    },
    {
      key: 'published',
      label: 'Published',
      render: (r) => <StatusBadge status={r.published ? 'Published' : 'Draft'} />,
    },
    {
      key: 'actions',
      label: '',
      renderActions: (r) => (
        <div className="admin-table__actions">
          <button className="admin-icon-btn" title="Upload" onClick={() => phase2(`Upload to ${r.title} (Phase 2).`)}>
            <CloudUpload />
          </button>
          <button className="admin-icon-btn" title="Edit" onClick={() => phase2(`Edit ${r.title} (Phase 2).`)}>
            <Pencil />
          </button>
          <button
            className="admin-icon-btn"
            title={r.published ? 'Unpublish' : 'Publish'}
            onClick={() => phase2(`${r.published ? 'Unpublish' : 'Publish'} ${r.title} (Phase 2).`)}
          >
            {r.published ? <EyeOff /> : <Eye />}
          </button>
        </div>
      ),
    },
  ];

  const videosData = classes.map((c) => ({
    ...c,
    title: `${c.title} — ${c.video === 'Live Session' ? 'Live Recording' : 'Class Recording'}`,
    duration: c.video === 'Live Session' ? 'Live' : c.duration,
  }));

  return (
    <>
      <PageHeader
        eyebrow="Learning"
        title="Classes & Videos"
        subtitle="Schedule live classes and manage the video library of every sādhanā."
        actions={
          <button className="admin-btn admin-btn--gold" onClick={() => phase2('Upload Video (Phase 2).')}>
            <UploadCloud /> Upload Video
          </button>
        }
      />

      <div className="admin-tabs">
        <button
          className={`admin-tabs__tab${tab === 'classes' ? ' admin-tabs__tab--active' : ''}`}
          onClick={() => setTab('classes')}
        >
          <PlayCircle /> Classes
        </button>
        <button
          className={`admin-tabs__tab${tab === 'videos' ? ' admin-tabs__tab--active' : ''}`}
          onClick={() => setTab('videos')}
        >
          <Video /> Videos <span className="admin-tabs__tab-count">{classes.length}</span>
        </button>
      </div>

      <div className="admin-card">
        <div className="admin-card__head">
          <div>
            <div className="admin-card__title">
              {tab === 'classes' ? <PlayCircle /> : <Video />}
              {tab === 'classes' ? 'Class Schedule' : 'Video Library'}
            </div>
            <div className="admin-card__subtitle">
              {tab === 'classes'
                ? 'Live and scheduled sādhanā sessions'
                : 'Recorded classes available to enrolled students'}
            </div>
          </div>
          <button className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => phase2('Add new class (Phase 2).')}>
            <Plus /> Add
          </button>
        </div>
        <div className="admin-card__body" style={{ padding: 0 }}>
          <DataTable
            columns={columns}
            rows={tab === 'classes' ? classes : videosData}
            emptyTitle="Nothing here yet"
            emptyText="No classes have been scheduled for this section."
          />
        </div>
      </div>
    </>
  );
}
