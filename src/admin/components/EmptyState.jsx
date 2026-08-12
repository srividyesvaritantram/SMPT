import { Inbox } from 'lucide-react';

export default function EmptyState({ title = 'Nothing here yet', text, icon }) {
  return (
    <div className="admin-empty">
      <div className="admin-empty__icon">{icon || <Inbox />}</div>
      <div className="admin-empty__title">{title}</div>
      {text && <p className="admin-empty__text">{text}</p>}
    </div>
  );
}
