import { useState } from 'react';
import { Plus, FileText, Sparkles, BookMarked, Image, Pencil, Eye, EyeOff, Trash2, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import PageHeader from '../components/PageHeader.jsx';
import DataTable from '../components/DataTable.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import { blogPosts, spiritualContent, courseMaterials, contentImages } from '../data/mockData.js';

const phase2 = (msg) =>
  toast(msg, {
    icon: '🪷',
    style: { background: '#3D0A1C', color: '#FFF0E8', border: '1px solid rgba(212,175,55,0.3)' },
  });

const TABS = [
  { key: 'blog', label: 'Blog Posts', icon: FileText, dataKey: 'blog' },
  { key: 'spiritual', label: 'Spiritual Content', icon: Sparkles, dataKey: 'spiritual' },
  { key: 'materials', label: 'Course Materials', icon: BookMarked, dataKey: 'materials' },
  { key: 'images', label: 'Images', icon: Image, dataKey: 'images' },
];

const AUTHOR_KEY = { blog: 'author', spiritual: 'author', materials: 'course', images: 'name' };

export default function AdminContent() {
  const [tab, setTab] = useState('blog');
  const [pendingDelete, setPendingDelete] = useState(null);

  const data = {
    blog: blogPosts,
    spiritual: spiritualContent,
    materials: courseMaterials,
    images: contentImages,
  }[tab];

  const columns = [
    { key: 'title', label: 'Title', render: (r) => <span className="admin-table__cell-strong">{r.title}</span> },
    { key: AUTHOR_KEY[tab], label: tab === 'images' ? 'File' : tab === 'materials' ? 'Course' : 'Author' },
    { key: 'date', label: 'Date' },
    { key: 'status', label: 'Status', render: (r) => <StatusBadge status={r.status} /> },
    {
      key: 'actions',
      label: '',
      renderActions: (r) => (
        <div className="admin-table__actions">
          <button className="admin-icon-btn" title="Edit" onClick={() => phase2(`Edit "${r.title}" (Phase 2).`)}>
            <Pencil />
          </button>
          <button
            className="admin-icon-btn"
            title={r.status === 'Published' ? 'Unpublish' : 'Publish'}
            onClick={() => phase2(`${r.status === 'Published' ? 'Unpublish' : 'Publish'} "${r.title}" (Phase 2).`)}
          >
            {r.status === 'Published' ? <EyeOff /> : <Eye />}
          </button>
          <button className="admin-icon-btn admin-icon-btn--danger" title="Delete" onClick={() => setPendingDelete(r)}>
            <Trash2 />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Content Management"
        subtitle="Publish blog posts, spiritual content, course materials and images."
        actions={
          <button className="admin-btn admin-btn--gold" onClick={() => phase2('Create new content (Phase 2).')}>
            <Plus /> Create
          </button>
        }
      />

      <div className="admin-tabs">
        {TABS.map((t) => {
          const Cmp = t.icon;
          return (
            <button
              key={t.key}
              className={`admin-tabs__tab${tab === t.key ? ' admin-tabs__tab--active' : ''}`}
              onClick={() => setTab(t.key)}
            >
              <Cmp /> {t.label}
              <span className="admin-tabs__tab-count">{data.length}</span>
            </button>
          );
        })}
      </div>

      <div className="admin-card">
        <div className="admin-card__head">
          <div>
            <div className="admin-card__title">{TABS.find((t) => t.key === tab).label}</div>
            <div className="admin-card__subtitle">Manage, publish and organise this content</div>
          </div>
          <div className="admin-table__actions">
            <button className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => phase2('Send to review (Phase 2).')}>
              <Send /> Review
            </button>
            <button className="admin-btn admin-btn--maroon admin-btn--sm" onClick={() => phase2('Publish all drafts (Phase 2).')}>
              <Eye /> Publish
            </button>
          </div>
        </div>
        <div className="admin-card__body" style={{ padding: 0 }}>
          <DataTable
            columns={columns}
            rows={data}
            emptyTitle="Nothing here yet"
            emptyText="Create your first item to see it here."
          />
        </div>
      </div>

      <ConfirmDialog
        open={Boolean(pendingDelete)}
        title="Delete this content?"
        text={
          pendingDelete
            ? `"${pendingDelete.title}" will be removed. This is a UI preview — no content will actually be deleted.`
            : ''
        }
        confirmLabel="Delete"
        onConfirm={() => {
          phase2(`Delete "${pendingDelete.title}" (Phase 2).`);
          setPendingDelete(null);
        }}
        onCancel={() => setPendingDelete(null)}
      />
    </>
  );
}
