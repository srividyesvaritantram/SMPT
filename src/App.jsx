import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WhatsAppFAB from './components/WhatsAppFAB.jsx';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/Home/index.jsx';
import CoursesPage from './pages/Courses/CoursesPage.jsx';
import CourseDetailPage from './pages/Courses/CourseDetailPage.jsx';
import GanapatyamPage from './pages/Courses/GanapatyamPage.jsx';
import ShaktamPage from './pages/Courses/ShaktamPage.jsx';
import SkandamPage from './pages/Courses/SkandamPage.jsx';
import SouramPage from './pages/Courses/SouramPage.jsx';
import ShaivamPage from './pages/Courses/ShaivamPage.jsx';
import VaishnavamPage from './pages/Courses/VaishnavamPage.jsx';
import ChandiVidyaPage from './pages/Courses/ChandiVidyaPage.jsx';
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
import HomasDetail from './pages/Offerings/HomasDetail.jsx';
import ArchanaDetail from './pages/Offerings/ArchanaDetail.jsx';
import AbhishekamDetail from './pages/Offerings/AbhishekamDetail.jsx';
import YantraDetail from './pages/Offerings/YantraDetail.jsx';
import ShravanaMahaLakshmiDetail from './pages/ShravanaMahaLakshmiDetail.jsx';
import ShravanaSomavaraDetail from './pages/ShravanaSomavaraDetail.jsx';
import ShravanaMangalaGauriDetail from './pages/ShravanaMangalaGauriDetail.jsx';
import AdminLayout from './admin/layouts/AdminLayout.jsx';
import AdminDashboard from './admin/pages/AdminDashboard.jsx';
import AdminStudents from './admin/pages/AdminStudents.jsx';
import AdminCourses from './admin/pages/AdminCourses.jsx';
import AdminClasses from './admin/pages/AdminClasses.jsx';
import AdminEvents from './admin/pages/AdminEvents.jsx';
import AdminPayments from './admin/pages/AdminPayments.jsx';
import AdminContent from './admin/pages/AdminContent.jsx';
import AdminNotifications from './admin/pages/AdminNotifications.jsx';
import AdminProfile from './admin/pages/AdminProfile.jsx';
import AdminSettings from './admin/pages/AdminSettings.jsx';
import { CONTENT_VISIBILITY } from './config/contentVisibility.js';
import ContentUnavailablePage from './pages/ContentUnavailablePage.jsx';
import AdminNotFoundPage from './pages/AdminNotFoundPage.jsx';

// Temporary visibility gate: keeps the original page component intact and
// simply substitutes a friendly notice while its flag is set to false.
function VisibilityGate({ visible, title, message, backTo, backLabel, children }) {
  if (!visible) {
    return (
      <ContentUnavailablePage
        title={title}
        message={message}
        backTo={backTo}
        backLabel={backLabel}
      />
    );
  }
  return children;
}

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
        <Route path="/courses/sri-vidya" element={
          <VisibilityGate
            visible={CONTENT_VISIBILITY.courses.sriVidya}
            title="Course Details Temporarily Unavailable"
            message="The detailed course content is not available at the moment. The course card remains available on the Courses page."
            backTo="/courses"
            backLabel="Back to Courses"
          >
            <CourseDetailPage />
          </VisibilityGate>
        } />
        <Route path="/courses/chandi-vidya" element={
          <VisibilityGate
            visible={CONTENT_VISIBILITY.courses.chandiVidya}
            title="Course Details Temporarily Unavailable"
            message="The detailed course content is not available at the moment. The course card remains available on the Courses page."
            backTo="/courses"
            backLabel="Back to Courses"
          >
            <ChandiVidyaPage />
          </VisibilityGate>
        } />
        <Route path="/courses/shaivam" element={
          <VisibilityGate
            visible={CONTENT_VISIBILITY.courses.shaivam}
            title="Course Details Temporarily Unavailable"
            message="The detailed course content is not available at the moment. The course card remains available on the Courses page."
            backTo="/courses"
            backLabel="Back to Courses"
          >
            <ShaivamPage />
          </VisibilityGate>
        } />
        <Route path="/courses/vaishnavam" element={
          <VisibilityGate
            visible={CONTENT_VISIBILITY.courses.vaishnavam}
            title="Course Details Temporarily Unavailable"
            message="The detailed course content is not available at the moment. The course card remains available on the Courses page."
            backTo="/courses"
            backLabel="Back to Courses"
          >
            <VaishnavamPage />
          </VisibilityGate>
        } />
        <Route path="/courses/skandam" element={
          <VisibilityGate
            visible={CONTENT_VISIBILITY.courses.skaandam}
            title="Course Details Temporarily Unavailable"
            message="The detailed course content is not available at the moment. The course card remains available on the Courses page."
            backTo="/courses"
            backLabel="Back to Courses"
          >
            <SkandamPage />
          </VisibilityGate>
        } />
        <Route path="/courses/souram" element={
          <VisibilityGate
            visible={CONTENT_VISIBILITY.courses.souram}
            title="Course Details Temporarily Unavailable"
            message="The detailed course content is not available at the moment. The course card remains available on the Courses page."
            backTo="/courses"
            backLabel="Back to Courses"
          >
            <SouramPage />
          </VisibilityGate>
        } />
        <Route path="/courses/sauram" element={
          <VisibilityGate
            visible={CONTENT_VISIBILITY.courses.souram}
            title="Course Details Temporarily Unavailable"
            message="The detailed course content is not available at the moment. The course card remains available on the Courses page."
            backTo="/courses"
            backLabel="Back to Courses"
          >
            <SouramPage />
          </VisibilityGate>
        } />
        <Route path="/courses/ganapatyam" element={
          <VisibilityGate
            visible={CONTENT_VISIBILITY.courses.ganapatyam}
            title="Course Details Temporarily Unavailable"
            message="The detailed course content is not available at the moment. The course card remains available on the Courses page."
            backTo="/courses"
            backLabel="Back to Courses"
          >
            <GanapatyamPage />
          </VisibilityGate>
        } />
        <Route path="/courses/ganapathyam" element={
          <VisibilityGate
            visible={CONTENT_VISIBILITY.courses.ganapatyam}
            title="Course Details Temporarily Unavailable"
            message="The detailed course content is not available at the moment. The course card remains available on the Courses page."
            backTo="/courses"
            backLabel="Back to Courses"
          >
            <GanapatyamPage />
          </VisibilityGate>
        } />
        <Route path="/courses/shaktam" element={
          <VisibilityGate
            visible={CONTENT_VISIBILITY.courses.shaktam}
            title="Course Details Temporarily Unavailable"
            message="The detailed course content is not available at the moment. The course card remains available on the Courses page."
            backTo="/courses"
            backLabel="Back to Courses"
          >
            <ShaktamPage />
          </VisibilityGate>
        } />
        <Route path="/courses/:id" element={
          <VisibilityGate
            visible={CONTENT_VISIBILITY.courses.wildcardDetail}
            title="Course Details Temporarily Unavailable"
            message="The detailed course content is not available at the moment. The course card remains available on the Courses page."
            backTo="/courses"
            backLabel="Back to Courses"
          >
            <CourseDetailPage />
          </VisibilityGate>
        } />
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
        <Route path="/offerings/homas" element={
          <VisibilityGate
            visible={CONTENT_VISIBILITY.offerings.homas}
            title="Offering Details Temporarily Unavailable"
            message="The detailed information for this offering is not available at the moment. The offering card remains available on the Offerings page."
            backTo="/offerings"
            backLabel="Back to Offerings"
          >
            <HomasDetail />
          </VisibilityGate>
        } />
        <Route path="/offerings/homa" element={
          <VisibilityGate
            visible={CONTENT_VISIBILITY.offerings.homas}
            title="Offering Details Temporarily Unavailable"
            message="The detailed information for this offering is not available at the moment. The offering card remains available on the Offerings page."
            backTo="/offerings"
            backLabel="Back to Offerings"
          >
            <HomasDetail />
          </VisibilityGate>
        } />
        <Route path="/offerings/abhishekam" element={
          <VisibilityGate
            visible={CONTENT_VISIBILITY.offerings.abhishekam}
            title="Offering Details Temporarily Unavailable"
            message="The detailed information for this offering is not available at the moment. The offering card remains available on the Offerings page."
            backTo="/offerings"
            backLabel="Back to Offerings"
          >
            <AbhishekamDetail />
          </VisibilityGate>
        } />
        <Route path="/offerings/yantra-puja" element={
          <VisibilityGate
            visible={CONTENT_VISIBILITY.offerings.yantraPuja}
            title="Offering Details Temporarily Unavailable"
            message="The detailed information for this offering is not available at the moment. The offering card remains available on the Offerings page."
            backTo="/offerings"
            backLabel="Back to Offerings"
          >
            <YantraDetail />
          </VisibilityGate>
        } />
        <Route path="/offerings/archana" element={
          <VisibilityGate
            visible={CONTENT_VISIBILITY.offerings.archana}
            title="Offering Details Temporarily Unavailable"
            message="The detailed information for this offering is not available at the moment. The offering card remains available on the Offerings page."
            backTo="/offerings"
            backLabel="Back to Offerings"
          >
            <ArchanaDetail />
          </VisibilityGate>
        } />
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
        {CONTENT_VISIBILITY.admin ? (
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="students" element={<AdminStudents />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="classes" element={<AdminClasses />} />
            <Route path="events" element={<AdminEvents />} />
            <Route path="payments" element={<AdminPayments />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="notifications" element={<AdminNotifications />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        ) : (
          // Admin temporarily hidden from public visitors. All admin routes
          // and components above remain intact for later restoration.
          <Route path="/admin/*" element={<AdminNotFoundPage />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
