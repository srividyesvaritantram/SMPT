import { useLocation, useNavigate } from 'react-router-dom';
import './BackToCoursesFAB.css';

export default function BackToCoursesFAB() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const isCourseDetail = path.startsWith('/courses/') && path !== '/courses/';
  const isWorkshopSadhana = path === '/workshops/ganapatyam/sadhana-kramam';
  if (!isCourseDetail && !isWorkshopSadhana) return null;
  const workshop = isWorkshopSadhana;
  const label = workshop ? 'Back to Workshops' : 'Back to Courses';
  const target = workshop ? '/workshops' : '/courses';
  return (
    <button
      type="button"
      className="btc-fab"
      onClick={() => navigate(target)}
      aria-label={label}
    >
      ← {label}
    </button>
  );
}