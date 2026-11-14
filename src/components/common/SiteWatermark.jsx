import logoWatermark from '../../assets/logo-watermark.png';
import './SiteWatermark.css';

/**
 * Site-wide Sri Mahavidyesvari watermark.
 *
 * Two very-low-opacity layers:
 *   1. a gently rotated, repeating seal pattern
 *   2. a large centred seal
 *
 * The overlay is fixed and always `pointer-events: none`, so it never blocks
 * links, buttons, forms, or scrolling. Opacity is intentionally kept low so
 * content stays fully readable on both the cream and maroon sections.
 */
export default function SiteWatermark() {
  return (
    <div className="site-watermark" aria-hidden="true">
      <div
        className="site-watermark__pattern"
        style={{ backgroundImage: `url(${logoWatermark})` }}
      />
      <div
        className="site-watermark__emblem"
        style={{ backgroundImage: `url(${logoWatermark})` }}
      />
    </div>
  );
}
