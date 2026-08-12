export default function PageHeader({ eyebrow, title, subtitle, actions }) {
  return (
    <div className="admin-page">
      <div>
        {eyebrow && <div className="admin-page__eyebrow">{eyebrow}</div>}
        <h1 className="admin-page__title">{title}</h1>
        {subtitle && <p className="admin-page__subtitle">{subtitle}</p>}
      </div>
      {actions && <div className="admin-page__actions">{actions}</div>}
    </div>
  );
}
