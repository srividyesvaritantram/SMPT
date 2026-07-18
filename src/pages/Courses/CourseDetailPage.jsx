import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiClock, FiPlay, FiMonitor, FiAward, FiArrowLeft, FiRepeat } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar.jsx';
import GlassCard from '../../components/common/GlassCard.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import { courses } from '../../utils/mockData.js';
import './CourseDetailPage.css';

const tabs = ['Overview', 'Curriculum', 'Instructor', 'Reviews'];
const sections = ['Introduction to Sri Vidya', 'Mantra Initiation', 'Sri Chakra Basics', 'Navavarana Puja', 'Advanced Practices'];

export default function CourseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const course = courses.find((c) => c.id === id) || courses[1];

  return (
    <div className="course-detail">
      <Navbar />
      <div style={{ paddingTop: 72 }}>
        {/* Hero */}
        <div className="course-detail__hero">
          <div className="course-detail__hero-content">
            <button className="course-detail__back" onClick={() => navigate('/courses')}>
              <FiArrowLeft size={16} /> Back to Courses
            </button>
            <span className="course-detail__category">{course.category?.toUpperCase()}</span>
            <h1 className="course-detail__title font-cinzel">{course.title}</h1>
            <p className="course-detail__desc">A comprehensive journey into the sacred science of Sri Vidya, covering Panchadashi Mantra, Sri Chakra, and advanced Upasana.</p>
            <div className="course-detail__ctas">
              <GoldenButton label={course.isFree ? 'ENROLL FREE' : `ENROLL NOW — ₹${course.price}`} icon={FiPlay} />
              <GoldenButton label="FREE PREVIEW" outlined onClick={() => navigate('/watch/preview')} />
            </div>
          </div>
          {/* Enrollment card */}
          <GlassCard className="course-detail__enroll-card" width={320}>
            <img src={course.thumbnail} alt={course.title} className="course-detail__enroll-thumb" />
            <div className="course-detail__enroll-price">
              {course.isFree ? (
                <span className="golden-text font-cinzel" style={{ fontSize: 28, fontWeight: 700 }}>FREE</span>
              ) : (
                <>
                  <span className="golden-text font-cinzel" style={{ fontSize: 28, fontWeight: 700 }}>₹{course.price}</span>
                  <span style={{ color: '#B8A882', textDecoration: 'line-through', fontSize: 14 }}>₹{course.originalPrice}</span>
                  <span className="course-detail__discount">{course.discountPercent}% OFF</span>
                </>
              )}
            </div>
            <GoldenButton label="ENROLL NOW" icon={FiPlay} width="100%" />
            <GoldenButton label="ADD TO WISHLIST" outlined width="100%" style={{ marginTop: 12 }} />
            <div className="course-detail__meta-list">
              {[[FiClock, '28h 45m total'], [FiPlay, '124 lessons'], [FiMonitor, 'All devices'], [FiAward, 'Certificate'], [FiRepeat, 'Lifetime access']].map(([Icon, text]) => (
                <div key={text} className="course-detail__meta-item">
                  <Icon size={14} color="#E8C76A" /><span>{text}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Tabs */}
        <div className="course-detail__tabs">
          {tabs.map((t, i) => (
            <button key={t} className={`course-detail__tab ${activeTab === i ? 'course-detail__tab--active' : ''}`} onClick={() => setActiveTab(i)}>{t}</button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="course-detail__tab-content">
          {activeTab === 0 && (
            <div>
              <h3 style={{ color: '#FFF7D6', marginBottom: 20 }}>What You Will Learn</h3>
              <div className="course-detail__learn-grid">
                {['Panchadashi Mantra initiation', 'Sri Chakra Navavarana Puja', 'Kundalini Shakti awakening', 'Advanced Dhyana techniques', 'Yantra construction & worship', 'Navavarana Archana'].map((item) => (
                  <div key={item} className="course-detail__learn-item">
                    <span style={{ color: '#4CAF50' }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="course-detail__curriculum">
              {sections.map((s, i) => (
                <details key={s} className="course-detail__section">
                  <summary>Section {i + 1}: {s}</summary>
                  <div className="course-detail__lessons">
                    {[1,2,3,4].map((j) => (
                      <div key={j} className="course-detail__lesson">
                        <FiPlay size={14} color="#E8C76A" />
                        <span>Lesson {j}</span>
                        <span style={{ marginLeft: 'auto', color: '#B8A882', fontSize: 12 }}>{15 + j * 5}:00</span>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          )}
          {activeTab === 2 && (
            <div className="course-detail__instructor">
              <div className="course-detail__instructor-avatar">A</div>
              <div>
                <h3 style={{ color: '#FFF7D6', marginBottom: 4 }}>Acharya Ramananda</h3>
                <p style={{ color: '#E8C76A', marginBottom: 16, fontSize: 14 }}>Sri Vidya Acharya & Vedic Scholar</p>
                <p style={{ color: '#B8A882', lineHeight: 1.7, fontSize: 15 }}>Acharya Ramananda has been practicing and teaching Sri Vidya for over 30 years. Initiated in the Kaula tradition, he has guided thousands of students on the path of Shakta Tantra and Sri Chakra Upasana.</p>
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div className="course-detail__reviews">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="course-detail__review">
                  <div className="course-detail__review-header">
                    <div className="course-detail__review-avatar">{String.fromCharCode(64 + i)}</div>
                    <div>
                      <p style={{ color: '#FFF7D6', fontWeight: 600, fontSize: 13 }}>Student {i}</p>
                      <div style={{ display: 'flex', gap: 2 }}>{[1,2,3,4,5].map((s) => <FaStar key={s} size={12} color="#E8C76A" />)}</div>
                    </div>
                  </div>
                  <p style={{ color: '#B8A882', fontSize: 14, lineHeight: 1.6 }}>This course completely transformed my understanding of Sri Vidya. The depth of knowledge and clarity of teaching is unparalleled.</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
