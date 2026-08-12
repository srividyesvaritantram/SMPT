import { AlertTriangle, X } from 'lucide-react';

export default function ConfirmDialog({
  open,
  title = 'Confirm action',
  text,
  confirmLabel = 'Delete',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  return (
    <div className="admin-modal" role="dialog" aria-modal="true">
      <div className="admin-modal__backdrop" onClick={onCancel} />
      <div className="admin-modal__card">
        <div className="admin-modal__icon">
          <AlertTriangle />
        </div>
        <h3 className="admin-modal__title">{title}</h3>
        <p className="admin-modal__text">{text}</p>
        <div className="admin-modal__actions">
          <button className="admin-btn admin-btn--ghost" onClick={onCancel}>
            <X /> {cancelLabel}
          </button>
          <button className="admin-btn admin-btn--danger" onClick={onConfirm}>
            <AlertTriangle /> {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
