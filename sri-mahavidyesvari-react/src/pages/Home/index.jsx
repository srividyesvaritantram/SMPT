import Navbar from '../../components/navbar/Navbar.jsx';
import EventPopup from '../../components/EventPopup.jsx';
import HeroSection from './HeroSection.jsx';
import AboutSection from './AboutSection.jsx';
import GuruParamparaSection from './GuruParamparaSection.jsx';
import { CoursesCarousel, WorkshopsCarousel } from './ShowcaseCarousel.jsx';
import {
  LotusConnector,
  WhyTantraSection,
  LearnSriVidyaInviteSection,
  FeaturedCoursesSection,
  WorkshopsShowcaseSection,
  OfferingsShowcaseSection,
  DivineEventsNotificationCard,
  EventsPreviewSection,
  BlogPreviewSection,
  WhyChooseUsSection,
  TestimonialsSection,
  FAQSection,
  ContactSection,
  NewsletterSection,
  FooterSection,
} from './HomeSections.jsx';

export default function HomePage() {
  return (
    <>
      <EventPopup />
      <Navbar />
      <div className="hero-anchor">
        <HeroSection />
        <DivineEventsNotificationCard />
      </div>
      <AboutSection />
      <GuruParamparaSection />
      <WhyTantraSection />
      <LearnSriVidyaInviteSection />
      <FeaturedCoursesSection />
      <LotusConnector id="crsWks" bg="cream" />
      <WorkshopsShowcaseSection />
      <LotusConnector id="wksOff" bg="maroon" />
      <OfferingsShowcaseSection />
      <EventsPreviewSection />
      <BlogPreviewSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <NewsletterSection />
      <FooterSection />
    </>
  );
}
