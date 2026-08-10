import GoldenButton from './GoldenButton.jsx';
import './LockedSadhanaContent.css';

const WA_URL = 'https://wa.me/919390886029';

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="11" width="16" height="9" rx="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="15.6" r="1.5" fill="currentColor" />
      <path d="M12 15.6v2.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function LockedSadhanaContent({ children }) {
  return (
    <div className="lsc">
      <div className="lsc__locked">
        <div className="lsc__blur" aria-hidden="true">{children}</div>
        <div className="lsc__veil">
          <div className="lsc__badge">
            <LockIcon />
            <span className="lsc__badge-label">LOCKED</span>
          </div>
          <p className="lsc__hint">Deeper Sādhana Information</p>
        </div>
      </div>

      <div className="lsc__cta">
        <p className="lsc__cta-text">
          If you want to learn more about the deeper Sādhana, traditional practices and Guru guidance,
          join us through Guru Dīkṣā.
        </p>
        <GoldenButton
          label="JOIN GURU DĪKṢĀ"
          size="lg"
          outlined
          onClick={() => window.open(WA_URL, '_blank')}
        />
      </div>
    </div>
  );
}
