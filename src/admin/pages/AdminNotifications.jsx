import { useState } from 'react';
import { Plus, Megaphone, MessageSquare, BookOpen, CalendarDays, Bell, Send, Clock } from 'lucide-react';
import toast from 'react-hot-toast';
import PageHeader from '../components/PageHeader.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { notifications } from '../data/mockData.js';

const phase2 = (msg) =>
  toast(msg, {
    icon: '🪷',
    style: { background: '#3D0A1C', color: '#FFF0E8', border: '1px solid rgba(212,175,55,0.3)' },
  });

const TABS = [
  { key: 'announcements', label: 'Announcements', icon: Megaphone },
  { key: 'student', label: 'Student Notifications', icon: MessageSquare },
  { key: 'course', label: 'Course Notifications', icon: BookOpen },
  { key: 'event', label: 'Event Notifications', icon: CalendarDays },
];

export default function AdminNotifications() {
  const [tab, setTab] = useState('announcements');
  const list = notifications[tab] || [];

  return (
    <>
      <PageHeader
        eyebrow="Communications"
        title="Notifications"
        subtitle="Send announcements and keep students informed about courses and events."
        actions={
          <button className="admin-btn admin-btn--gold" onClick={() => phase2('Create Notification (Phase 2).')}>
            <Plus /> Create Notification
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
              <span className="admin-tabs__tab-count">{(notifications[t.key] || []).length}</span>
            </button>
          );
        })}
      </div>

      {list.map((n) => (
        <div className="admin-notif" key={n.id}>
          <div className={`admin-notif__icon${tab === 'student' ? ' admin-notif__icon--maroon' : ''}`}>
            {tab === 'announcements' && <Megaphone />}
            {tab === 'student' && <MessageSquare />}
            {tab === 'course' && <BookOpen />}
            {tab === 'event' && <CalendarDays />}
          </div>
          <div className="admin-notif__body">
            <div className="admin-notif__title">{n.title}</div>
            <p className="admin-notif__text">{n.body}</p>
            <div className="admin-notif__meta">
              <span><Bell /> To: {n.audience}</span>
              <span><Clock /> {n.date}</span>
            </div>
          </div>
          <StatusBadge status={n.status} />
        </div>
      ))}

      {list.length === 0 && (
        <div className="admin-card">
          <div className="admin-empty">
            <div className="admin-empty__icon"><Bell /></div>
            <div className="admin-empty__title">No notifications yet</div>
            <p className="admin-empty__text">Create your first notification for this audience.</p>
          </div>
        </div>
      )}

      <div style={{ marginTop: 22, display: 'flex', justifyContent: 'flex-end' }}>
        <button className="admin-btn admin-btn--maroon" onClick={() => phase2('Send broadcast to all students (Phase 2).')}>
          <Send /> Send Broadcast
        </button>
      </div>
    </>
  );
}
