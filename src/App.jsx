import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import WhatsAppFAB from './components/WhatsAppFAB.jsx';
import SiteWatermark from './components/common/SiteWatermark.jsx';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/Home/index.jsx';
import { CONTENT_VISIBILITY } from './config/contentVisibility.js';

// ── Route-level code splitting ──────────────────────────────────────────────
// The homepage stays in the initial bundle (it is the landing experience);
// every other page is loaded on demand. This keeps the first load light and
// avoids shipping all course, events, account, and admin code up-front.
const CoursesPage = lazy(() => import('./pages/Courses/CoursesPage.jsx'));
const CourseDetailPage = lazy(() => import('./pages/Courses/CourseDetailPage.jsx'));
const GanapatyamPage = lazy(() => import('./pages/Courses/GanapatyamPage.jsx'));
const ShaktamPage = lazy(() => import('./pages/Courses/ShaktamPage.jsx'));
const SkandamPage = lazy(() => import('./pages/Courses/SkandamPage.jsx'));
const SouramPage = lazy(() => import('./pages/Courses/SouramPage.jsx'));
const ShaivamPage = lazy(() => import('./pages/Courses/ShaivamPage.jsx'));
const VaishnavamPage = lazy(() => import('./pages/Courses/VaishnavamPage.jsx'));
const ChandiVidyaPage = lazy(() => import('./pages/Courses/ChandiVidyaPage.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const DashboardPage = lazy(() => import('./pages/Dashboard/DashboardPage.jsx'));
const AstrologyPage = lazy(() => import('./pages/Offerings/AstrologyPage.jsx'));
const HomasDetail = lazy(() => import('./pages/Offerings/HomasDetail.jsx'));
const ArchanaDetail = lazy(() => import('./pages/Offerings/ArchanaDetail.jsx'));
const AbhishekamDetail = lazy(() => import('./pages/Offerings/AbhishekamDetail.jsx'));
const YantraDetail = lazy(() => import('./pages/Offerings/YantraDetail.jsx'));
const ShravanaMahaLakshmiDetail = lazy(() => import('./pages/ShravanaMahaLakshmiDetail.jsx'));
const ShravanaSomavaraDetail = lazy(() => import('./pages/ShravanaSomavaraDetail.jsx'));
const ShravanaMangalaGauriDetail = lazy(() => import('./pages/ShravanaMangalaGauriDetail.jsx'));
const ContentUnavailablePage = lazy(() => import('./pages/ContentUnavailablePage.jsx'));
const AdminNotFoundPage = lazy(() => import('./pages/AdminNotFoundPage.jsx'));

// Named exports are wrapped so they can be used with React.lazy.
const LoginPage = lazy(() =>
  import('./pages/Auth/AuthPages.jsx').then((m) => ({ default: m.LoginPage })),
);
const RegisterPage = lazy(() =>
  import('./pages/Auth/AuthPages.jsx').then((m) => ({ default: m.RegisterPage })),
);
const BlogPage = lazy(() =>
  import('./pages/FeaturePages.jsx').then((m) => ({ default: m.BlogPage })),
);
const WorkshopsPage = lazy(() =>
  import('./pages/FeaturePages.jsx').then((m) => ({ default: m.WorkshopsPage })),
);
const OfferingsPage = lazy(() =>
  import('./pages/FeaturePages.jsx').then((m) => ({ default: m.OfferingsPage })),
);
const EventsPage = lazy(() =>
  import('./pages/FeaturePages.jsx').then((m) => ({ default: m.EventsPage })),
);
const VideoPlayerPage = lazy(() =>
  import('./pages/FeaturePages.jsx').then((m) => ({ default: m.VideoPlayerPage })),
);

// Admin is intentionally hidden from public visitors, but its complete route
// tree and components remain available and are simply split out of the main
// bundle until the visibility flag is turned back on.
const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout.jsx'));
const AdminDashboard = lazy(() => import('./admin/pages/AdminDashboard.jsx'));
const AdminStudents = lazy(() => import('./admin/pages/AdminStudents.jsx'));
const AdminCourses = lazy(() => import('./admin/pages/AdminCourses.jsx'));
const AdminClasses = lazy(() => import('./admin/pages/AdminClasses.jsx'));
const AdminEvents = lazy(() => import('./admin/pages/AdminEvents.jsx'));
const AdminPayments = lazy(() => import('./admin/pages/AdminPayments.jsx'));
const AdminContent = lazy(() => import('./admin/pages/AdminContent.jsx'));
const AdminNotifications = lazy(() => import('./admin/pages/AdminNotifications.jsx'));
const AdminProfile = lazy(() => import('./admin/pages/AdminProfile.jsx'));
const AdminSettings = lazy(() => import('./admin/pages/AdminSettings.jsx'));

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
    </div>
  );
}

function PageFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FFFDF8',
        color: '#7B1E3A',
        fontFamily: 'Cinzel, serif',
        letterSpacing: '0.18em',
        fontSize: 12,
        textTransform: 'uppercase',
      }}
    >
      Sri Mahavidyesvari
    </div>
  );
}

/**
 * Handles two navigation problems in one place:
 *   1. hash links (e.g. /about#our-guru) scroll to the correct section,
 *      including when the target page is still loading through React.lazy;
 *   2. a normal page change starts at the top instead of keeping the previous
 *      scroll position.
 */
function RouteScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return undefined;
    }

    const id = decodeURIComponent(hash.replace(/^#/, ''));
    let cancelled = false;
    let frame = 0;
    let attempts = 0;
    const timers = [];

    const scrollToTarget = (behavior = 'smooth') => {
      const target = document.getElementById(id);
      if (!target) return false;

      const navbar = document.querySelector('nav.navbar');
      const offset = navbar ? navbar.getBoundingClientRect().height : 72;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset - 16;
      window.scrollTo({ top: Math.max(0, top), behavior });
      return true;
    };

    const attempt = () => {
      if (cancelled) return;

      if (scrollToTarget()) {
        // Re-align once fonts and lazy images have settled so the heading is
        // still visible after layout shifts.
        timers.push(window.setTimeout(() => { if (!cancelled) scrollToTarget(); }, 400));
        timers.push(window.setTimeout(() => { if (!cancelled) scrollToTarget(); }, 1200));
        return;
      }

      // The lazy page may not have rendered its section yet.
      if (attempts < 90) {
        attempts += 1;
        frame = requestAnimationFrame(attempt);
      }
    };

    frame = requestAnimationFrame(attempt);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" toastOptions={{ style: { background: '#1A0A10', color: '#E8DDD0', border: '1px solid rgba(184,134,11,0.25)', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' } }} />
      <SiteWatermark />
      <RouteScrollManager />
      <WhatsAppFAB />
      <Suspense fallback={<PageFallback />}>
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
      </Suspense>
    </BrowserRouter>
  );
}
