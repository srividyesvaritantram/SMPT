import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.jsx';
import { FooterSection } from './Home/HomeSections.jsx';
import './ContentUnavailablePage.css';

/**
 * Shown instead of a temporarily hidden detail view (Courses / Offerings).
 * The original detail page component is preserved and remains imported in
 * App.jsx; flipping the matching flag in contentVisibility.js restores it.
 */
export default function ContentUnavailablePage({
  title = 'Details Temporarily Unavailable',
  message = 'This content is not available at the moment. Please check back soon.',
  backTo = '/',
  backLabel = 'Return Home',
}) {
  return (
    <div className="cup-page">
      <Navbar />
      <main className="cup-main">
        <div className="cup-card">
          <span className="cup-lotus" aria-hidden="true">🪷</span>
          <p className="cup-eyebrow font-cinzel">Sri Mahavidyesvari</p>
          <h1 className="cup-title font-cinzel">{title}</h1>
          <div className="cup-rule" aria-hidden="true">
            <span className="cup-rule-line" />
            <span className="cup-rule-dot">✦</span>
            <span className="cup-rule-line" />
          </div>
          <p className="cup-message font-serif">{message}</p>
          <Link className="cup-back font-cinzel" to={backTo}>
            ← {backLabel}
          </Link>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
