import Navbar from '../../components/navbar/Navbar.jsx';
import EventPopup from '../../components/EventPopup.jsx';
import HeroSection from './HeroSection.jsx';
import AboutSection from './AboutSection.jsx';
import GuruParamparaSection from './GuruParamparaSection.jsx';
import { CoursesCarousel, WorkshopsCarousel } from './ShowcaseCarousel.jsx';
import {
  WhyTantraSection,
  LearnSriVidyaInviteSection,
  FeaturedCoursesSection,
  WorkshopsShowcaseSection,
  OfferingsShowcaseSection,
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
      <HeroSection />
      <AboutSection />
      <GuruParamparaSection />
      <WhyTantraSection />
      <LearnSriVidyaInviteSection />
      <FeaturedCoursesSection />
      <WorkshopsShowcaseSection />
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
