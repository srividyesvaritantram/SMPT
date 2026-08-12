import { useState } from 'react';
import { CalendarDays, Plus, Eye, Pencil, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import PageHeader from '../components/PageHeader.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import { adminEvents } from '../data/mockData.js';

const phase2 = (msg) =>
  toast(msg, {
    icon: '🪷',
    style: { background: '#3D0A1C', color: '#FFF0E8', border: '1px solid rgba(212,175,55,0.3)' },
  });

export default function AdminEvents() {
  const [pendingDelete, setPendingDelete] = useState(null);

  return (
    <>
      <PageHeader
        eyebrow="Calendar"
        title="Events Management"
        subtitle="Manage every ārādhana, abhiṣeka, vratam and workshop. The public Events page is not affected."
        actions={
          <button className="admin-btn admin-btn--gold" onClick={() => phase2('Create Event (Phase 2).')}>
            <Plus /> Create Event
          </button>
        }
      />

      <div className="admin-events-grid">
        {adminEvents.map((evt) => (
          <div className="admin-event" key={evt.id}>
            <div className="admin-event__img-wrap">
              <img src={evt.image} alt={evt.title} className="admin-event__img" />
              <span className="admin-event__date-badge">
                <CalendarDays /> {evt.date}
              </span>
            </div>
            <div className="admin-event__body">
              <div className="admin-event__type">{evt.type}</div>
              <div className="admin-event__title">{evt.title}</div>
              <div style={{ marginTop: 10 }}>
                <StatusBadge status={evt.status} />
              </div>
              <div className="admin-event__actions">
                <button className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => phase2(`View ${evt.title} (Phase 2).`)}>
                  <Eye /> View
                </button>
                <button className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => phase2(`Edit ${evt.title} (Phase 2).`)}>
                  <Pencil /> Edit
                </button>
                <button className="admin-btn admin-btn--danger admin-btn--sm" onClick={() => setPendingDelete(evt)}>
                  <Trash2 /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ConfirmDialog
        open={Boolean(pendingDelete)}
        title="Delete this event?"
        text={
          pendingDelete
            ? `"${pendingDelete.title}" (${pendingDelete.date}) will be removed. This is a UI preview — no event will actually be deleted.`
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
