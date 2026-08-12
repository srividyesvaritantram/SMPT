import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar.jsx';
import AdminHeader from '../components/AdminHeader.jsx';
import '../admin.css';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="admin-shell">
      {sidebarOpen && (
        <div
          className="admin-sidebar__overlay"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
      <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="admin-main">
        <AdminHeader onToggleMenu={() => setSidebarOpen((v) => !v)} />
        <main className="admin-content">
          <div className="admin-content__inner">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
