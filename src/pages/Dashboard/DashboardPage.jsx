import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGrid, FiPlay, FiAward, FiBookmark, FiDownload, FiCreditCard, FiSettings, FiLogOut } from 'react-icons/fi';
import Navbar from '../../components/navbar/Navbar.jsx';
import GlassCard from '../../components/common/GlassCard.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import logoImg from '../../assets/logo.png';
import './DashboardPage.css';

const sidebarItems = [
  { icon: FiGrid, label: 'Overview' },
  { icon: FiPlay, label: 'My Courses' },
  { icon: FiAward, label: 'Certificates' },
  { icon: FiBookmark, label: 'Bookmarks' },
  { icon: FiDownload, label: 'Downloads' },
  { icon: FiCreditCard, label: 'Payments' },
  { icon: FiSettings, label: 'Settings' },
];

const stats = [
  { icon: FiPlay, label: 'Courses Enrolled', value: '8', color: '#B8860B' },
  { icon: FiAward, label: 'Completed', value: '3', color: '#4CAF50' },
  { icon: FiAward, label: 'Certificates', value: '3', color: '#E8C76A' },
  { icon: FiGrid, label: 'Day Streak', value: '14', color: '#FF9800' },
];

const enrolledCourses = [
  { title: 'Vedic Meditation', progress: 1.0, thumbnail: 'https://picsum.photos/seed/ec1/300/200' },
  { title: 'Sri Vidya', progress: 0.65, thumbnail: 'https://picsum.photos/seed/ec2/300/200' },
  { title: 'Devi Mahatmyam', progress: 0.3, thumbnail: 'https://picsum.photos/seed/ec3/300/200' },
  { title: 'Kundalini', progress: 0.1, thumbnail: 'https://picsum.photos/seed/ec4/300/200' },
];

const certificates = ['Vedic Meditation', 'Kundalini Basics', 'Puja Vidhi'];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard__layout" style={{ paddingTop: 72 }}>
        {/* Sidebar */}
        <aside className="dashboard__sidebar">
          <div className="dashboard__profile">
            <div className="dashboard__avatar">A</div>
            <p className="dashboard__name">Ananya Iyer</p>
            <span className="dashboard__badge">Premium Member</span>
          </div>
          <div className="dashboard__divider" />
          {sidebarItems.map((item, i) => (
            <motion.button
              key={item.label}
              className={`dashboard__nav-item ${activeTab === i ? 'dashboard__nav-item--active' : ''}`}
              onClick={() => setActiveTab(i)}
              whileHover={{ backgroundColor: 'rgba(184,134,11,0.08)' }}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </motion.button>
          ))}
          <motion.button className="dashboard__nav-item dashboard__nav-item--logout" whileHover={{ backgroundColor: 'rgba(229,57,53,0.08)' }}>
            <FiLogOut size={18} /><span>Logout</span>
          </motion.button>
        </aside>

        {/* Content */}
        <main className="dashboard__content">
          {activeTab === 0 && <OverviewTab />}
          {activeTab === 1 && <MyCoursesTab />}
          {activeTab === 2 && <CertificatesTab />}
          {activeTab > 2 && <ComingSoonTab label={sidebarItems[activeTab].label} />}
        </main>
      </div>
    </div>
  );
}

function OverviewTab() {
  return (
    <div className="dashboard__tab">
      <h2 className="dashboard__welcome">Welcome back, Ananya 🙏</h2>
      <p style={{ color: '#B8A882', marginBottom: 32 }}>Continue your spiritual journey</p>
      <div className="dashboard__stats">
        {stats.map((s) => (
          <div key={s.label} className="dashboard__stat-card" style={{ borderColor: `${s.color}33` }}>
            <s.icon size={28} color={s.color} />
            <div className="dashboard__stat-value" style={{ color: s.color }}>{s.value}</div>
            <div className="dashboard__stat-label">{s.label}</div>
          </div>
        ))}
      </div>
      <h3 className="dashboard__section-title">Continue Watching</h3>
      <GlassCard padding="16px">
        <div className="dashboard__continue">
          <img src="https://picsum.photos/seed/cw1/300/200" alt="course" className="dashboard__continue-thumb" />
          <div className="dashboard__continue-info">
            <p className="dashboard__continue-title">Sri Vidya Upasana — Lesson 7</p>
            <div className="dashboard__progress-bar">
              <div className="dashboard__progress-fill" style={{ width: '65%' }} />
            </div>
            <p style={{ fontSize: 12, color: '#B8A882', marginTop: 6 }}>65% complete</p>
          </div>
          <GoldenButton label="RESUME" icon={FiPlay} />
        </div>
      </GlassCard>
      <h3 className="dashboard__section-title" style={{ marginTop: 32 }}>Learning Activity</h3>
      <GlassCard>
        <ActivityChart />
      </GlassCard>
    </div>
  );
}

function ActivityChart() {
  const data = [1.5, 2.0, 1.0, 3.5, 2.5, 4.0, 3.0];
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const max = Math.max(...data);
  return (
    <div className="activity-chart">
      {data.map((v, i) => (
        <div key={i} className="activity-chart__bar-wrap">
          <div className="activity-chart__bar" style={{ height: `${(v / max) * 100}%` }} />
          <span className="activity-chart__label">{days[i]}</span>
        </div>
      ))}
    </div>
  );
}

function MyCoursesTab() {
  return (
    <div className="dashboard__tab">
      <h2 className="dashboard__welcome">My Courses</h2>
      <div className="dashboard__courses-grid">
        {enrolledCourses.map((c) => (
          <div key={c.title} className="dashboard__course-card">
            <img src={c.thumbnail} alt={c.title} className="dashboard__course-thumb" />
            <div style={{ padding: 16 }}>
              <p className="dashboard__course-title">{c.title}</p>
              <div className="dashboard__progress-bar" style={{ marginTop: 10 }}>
                <div className="dashboard__progress-fill" style={{ width: `${c.progress * 100}%` }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                <span style={{ fontSize: 12, color: '#E8C76A' }}>{Math.round(c.progress * 100)}%</span>
                {c.progress === 1.0 && <span style={{ color: '#4CAF50', fontSize: 14 }}>✓</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CertificatesTab() {
  return (
    <div className="dashboard__tab">
      <h2 className="dashboard__welcome">My Certificates</h2>
      <div className="dashboard__certs-grid">
        {certificates.map((c) => (
          <div key={c} className="dashboard__cert-card">
            <img src={logoImg} alt="" style={{ width: 40, height: 40, objectFit: "contain" }} />
            <p style={{ fontSize: 11, color: '#E8C76A', letterSpacing: 2, marginTop: 12 }}>CERTIFICATE OF COMPLETION</p>
            <h4 style={{ color: '#FFF7D6', fontSize: 16, fontWeight: 600, marginTop: 8, textAlign: 'center' }}>{c}</h4>
            <p style={{ color: '#B8A882', fontSize: 13, marginTop: 8 }}>Awarded to Ananya Iyer</p>
            <GoldenButton label="DOWNLOAD PDF" outlined style={{ marginTop: 16 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ComingSoonTab({ label }) {
  return (
    <div className="dashboard__tab dashboard__coming-soon">
      <span style={{ fontSize: 64 }}>🚧</span>
      <h3 style={{ color: '#FFF7D6', marginTop: 16 }}>{label}</h3>
      <p style={{ color: '#B8A882' }}>This section is coming soon</p>
    </div>
  );
}
