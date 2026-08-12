import EmptyState from './EmptyState.jsx';

export default function DataTable({ columns, rows, emptyTitle, emptyText, minWidth }) {
  if (!rows || rows.length === 0) {
    return <EmptyState title={emptyTitle} text={emptyText} />;
  }

  return (
    <div className="admin-table-wrap" style={minWidth ? { minWidth } : undefined}>
      <table className="admin-table" style={minWidth ? { minWidth } : undefined}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
            {columns.some((c) => c.renderActions) && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={row.id || idx}>
              {columns.map((col) => (
                <td key={col.key}>
                  {col.render ? col.render(row) : (row[col.key] ?? '—')}
                </td>
              ))}
              {columns.some((c) => c.renderActions) && (
                <td>
                  <div className="admin-table__actions">
                    {columns.find((c) => c.renderActions)?.renderActions(row)}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
