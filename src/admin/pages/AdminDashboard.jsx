import PageHeader from '../components/PageHeader.jsx';
import StatCard from '../components/StatCard.jsx';
import RevenueChart from '../components/RevenueChart.jsx';
import QuickActions from '../components/QuickActions.jsx';
import RecentStudents from '../components/RecentStudents.jsx';
import RecentPayments from '../components/RecentPayments.jsx';
import UpcomingClasses from '../components/UpcomingClasses.jsx';
import {
  dashboardStats,
  recentStudents,
  recentPayments,
  upcomingClasses,
} from '../data/mockData.js';

const STAT_ICONS = {
  students: 'graduation',
  active: 'users',
  courses: 'book',
  classes: 'play',
  videos: 'video',
  revenue: 'wallet',
};

export default function AdminDashboard() {
  return (
    <>
      <PageHeader
        eyebrow="Tantra Peetham"
        title="Dashboard Overview"
        subtitle="Manage students, courses, classes, events and spiritual learning activities from one place."
      />

      <div className="admin-grid-stats">
        {dashboardStats.map((s) => (
          <StatCard
            key={s.id}
            icon={STAT_ICONS[s.id]}
            label={s.label}
            value={s.value}
            trend={s.trend}
            up={s.up}
            tone={s.id === 'revenue' ? 'gold' : s.id === 'active' ? 'lotus' : ''}
          />
        ))}
      </div>

      <div className="admin-grid-2">
        <RevenueChart />
        <QuickActions />
      </div>

      <div style={{ marginBottom: 22 }}>
        <RecentStudents rows={recentStudents} />
      </div>

      <div className="admin-grid-2eq">
        <RecentPayments rows={recentPayments} />
        <UpcomingClasses rows={upcomingClasses} />
      </div>
    </>
  );
}
