import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WhatsAppFAB from './components/WhatsAppFAB.jsx';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/Home/index.jsx';
import CoursesPage from './pages/Courses/CoursesPage.jsx';
import CourseDetailPage from './pages/Courses/CourseDetailPage.jsx';
import { LoginPage, RegisterPage } from './pages/Auth/AuthPages.jsx';
import DashboardPage from './pages/Dashboard/DashboardPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import {
  BlogPage,
  WorkshopsPage,
  OfferingsPage,
  EventsPage,
  VideoPlayerPage,
} from './pages/FeaturePages.jsx';
import AstrologyPage from './pages/Offerings/AstrologyPage.jsx';
import ShravanaMahaLakshmiDetail from './pages/ShravanaMahaLakshmiDetail.jsx';
import ShravanaSomavaraDetail from './pages/ShravanaSomavaraDetail.jsx';
import ShravanaMangalaGauriDetail from './pages/ShravanaMangalaGauriDetail.jsx';

function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: '#0D0208', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
      <span style={{ fontSize: 64 }}>🪷</span>
      <h2 style={{ color: '#E8DDD0', fontFamily: 'Cinzel, serif' }}>Page Not Found</h2>
      <a href="/" style={{ color: '#E8C76A' }}>← Return Home</a>
      {/* TEST BUILD CHANGE */}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" toastOptions={{ style: { background: '#1A0A10', color: '#E8DDD0', border: '1px solid rgba(184,134,11,0.25)', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' } }} />
      <WhatsAppFAB />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/guru-parampara" element={<AboutPage />} />
        <Route path="/about/our-guru" element={<AboutPage />} />
        <Route path="/about/tantra-vidya" element={<AboutPage />} />
        <Route path="/about/faqs" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/free" element={<CoursesPage />} />
        <Route path="/courses/sri-vidya" element={<CourseDetailPage />} />
        <Route path="/courses/chandi-vidya" element={<CourseDetailPage />} />
        <Route path="/courses/shaivam" element={<CourseDetailPage />} />
        <Route path="/courses/vaishnavam" element={<CourseDetailPage />} />
        <Route path="/courses/skaandam" element={<CourseDetailPage />} />
        <Route path="/courses/sauram" element={<CourseDetailPage />} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/workshops/upcoming" element={<WorkshopsPage />} />
        <Route path="/workshops/recorded" element={<WorkshopsPage />} />
        <Route path="/workshops/online" element={<WorkshopsPage />} />
        <Route path="/workshops/offline" element={<WorkshopsPage />} />
        <Route path="/workshops/ashta-lakshmi-vidya" element={<WorkshopsPage />} />
        <Route path="/workshops/dasa-maha-vidyas" element={<WorkshopsPage />} />
        <Route path="/workshops/kshipra-ganapati" element={<WorkshopsPage />} />
        <Route path="/workshops/fundamentals-of-tantra" element={<WorkshopsPage />} />
        <Route path="/workshops/complete-chakra-course" element={<WorkshopsPage />} />
        <Route path="/workshops/ayyappa-vidya" element={<WorkshopsPage />} />
        <Route path="/offerings" element={<AstrologyPage />} />
        <Route path="/offerings/astrology" element={<AstrologyPage />} />
        <Route path="/offerings/temple-shilpa-sastra" element={<OfferingsPage />} />
        <Route path="/offerings/temple-shilpas" element={<OfferingsPage />} />
        <Route path="/offerings/homas" element={<OfferingsPage />} />
        <Route path="/offerings/homa" element={<OfferingsPage />} />
        <Route path="/offerings/abhishekam" element={<OfferingsPage />} />
        <Route path="/offerings/yantra-puja" element={<OfferingsPage />} />
        <Route path="/offerings/archana" element={<OfferingsPage />} />
        <Route path="/offerings/sri-vidya" element={<OfferingsPage />} />
        <Route path="/offerings/deeksha" element={<OfferingsPage />} />
        <Route path="/offerings/temple-consultation" element={<OfferingsPage />} />
        <Route path="/offerings/yantra-pratishtha" element={<OfferingsPage />} />
        <Route path="/offerings/mantra-sadhana" element={<OfferingsPage />} />
        <Route path="/offerings/spiritual-counseling" element={<OfferingsPage />} />
        <Route path="/offerings/agama-guidance" element={<OfferingsPage />} />
        <Route path="/offerings/temple-architecture" element={<OfferingsPage />} />
        <Route path="/offerings/ritual-consultation" element={<OfferingsPage />} />
        <Route path="/offerings/vastu-guidance" element={<OfferingsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/shravana-maha-lakshmi" element={<ShravanaMahaLakshmiDetail />} />
        <Route path="/events/shravana-somavara" element={<ShravanaSomavaraDetail />} />
        <Route path="/events/shravana-mangala-gauri" element={<ShravanaMangalaGauriDetail />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/watch/:id" element={<VideoPlayerPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
