import { Eye, Pencil, MoreHorizontal } from 'lucide-react';

export default function TableActions({ onView, onEdit, onMore }) {
  return (
    <>
      {onView && (
        <button className="admin-icon-btn" title="View" onClick={onView}>
          <Eye />
        </button>
      )}
      {onEdit && (
        <button className="admin-icon-btn" title="Edit" onClick={onEdit}>
          <Pencil />
        </button>
      )}
      {onMore && (
        <button className="admin-icon-btn" title="More" onClick={onMore}>
          <MoreHorizontal />
        </button>
      )}
    </>
  );
}
