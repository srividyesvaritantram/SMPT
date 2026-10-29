import { useEffect } from 'react';
import './AdminNotFoundPage.css';

/**
 * Public 404 shown for /admin while the admin area is intentionally hidden.
 * The admin routes and authentication code remain untouched in App.jsx.
 */
export default function AdminNotFoundPage() {
  useEffect(() => {
    document.body.classList.add('admin-404-active');

    return () => {
      document.body.classList.remove('admin-404-active');
    };
  }, []);

  return (
    <main className="admin404">
      <div className="admin404__halo admin404__halo--one" aria-hidden="true" />
      <div className="admin404__halo admin404__halo--two" aria-hidden="true" />

      <div className="admin404__content">
        <div className="admin404__art" aria-hidden="true">
          <svg
            viewBox="40 45 560 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
          >
            <defs>
              <filter id="admin404-shadow" x="110" y="48" width="420" height="336" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#8D7FC7" floodOpacity="0.14" />
              </filter>
              <filter id="admin404-board-shadow" x="200" y="330" width="280" height="80" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>

            {/* Subtle background shapes */}
            <circle cx="111" cy="146" r="59" fill="#EEEAFB" />
            <circle cx="545" cy="247" r="39" fill="#F0ECFC" />
            <circle cx="527" cy="118" r="8" fill="#D8D0F2" />
            <circle cx="119" cy="285" r="6" fill="#D8D0F2" />
            <circle cx="502" cy="334" r="4" fill="#C9BFEC" />

            <path d="M70 220H124" stroke="#D8D1EF" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M70 228H102" stroke="#E1DBF4" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M508 62V101" stroke="#D8D1EF" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M526 78H579" stroke="#E1DBF4" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M92 334C92 311 109 294 132 294C155 294 172 311 172 334" stroke="#D9D2F0" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M554 184C568 184 579 195 579 209C579 223 568 234 554 234" stroke="#D9D2F0" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 8" />

            <path d="M98 80L104 94L118 100L104 106L98 120L92 106L78 100L92 94L98 80Z" fill="#E1DAF4" />
            <path d="M518 275L522 285L532 289L522 293L518 303L514 293L504 289L514 285L518 275Z" fill="#E5DFF6" />
            <path d="M472 64L474 70L480 72L474 74L472 80L470 74L464 72L470 70L472 64Z" fill="#CFC5EF" />

            {/* Browser window */}
            <g className="admin404__browser" filter="url(#admin404-shadow)">
              <rect x="160" y="72" width="340" height="240" rx="17" fill="#FCFBFF" stroke="#D7D0F0" strokeWidth="2" />
              <path d="M160 104C160 105 160 106 160 107V120H500V120" stroke="#E4DFF4" strokeWidth="1.5" />
              <path d="M160 120H500" stroke="#ECE7F8" strokeWidth="1.5" />
              <circle cx="184" cy="96" r="4" fill="#D8D0EF" />
              <circle cx="198" cy="96" r="4" fill="#E4DEF5" />
              <circle cx="212" cy="96" r="4" fill="#EFEBF9" />
              <rect x="238" y="89" width="176" height="14" rx="7" fill="#F2EEFB" />
              <rect x="184" y="129" width="7" height="7" rx="3.5" fill="#E9E4F7" />
              <rect x="199" y="130" width="38" height="5" rx="2.5" fill="#EAE5F7" />

              <text
                x="330"
                y="226"
                textAnchor="middle"
                fill="none"
                stroke="#CFC6F0"
                strokeWidth="3"
                fontFamily="Inter, 'Segoe UI', Arial, sans-serif"
                fontSize="94"
                fontWeight="800"
                letterSpacing="3"
              >
                404
              </text>

              <path d="M272 251H388" stroke="#EDE8F8" strokeWidth="5" strokeLinecap="round" />
              <path d="M298 265H362" stroke="#F1EDF9" strokeWidth="4" strokeLinecap="round" />
              <rect x="456" y="133" width="27" height="27" rx="8" fill="#F3EFFB" />
              <path d="M464 147H475" stroke="#D8D0EF" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M469.5 141.5V152.5" stroke="#D8D0EF" strokeWidth="1.5" strokeLinecap="round" />
            </g>

            {/* Floor shadow */}
            <ellipse cx="340" cy="379" rx="104" ry="9" fill="#CFC7E5" opacity="0.38" filter="url(#admin404-board-shadow)" />

            {/* Skateboarder */}
            <g className="admin404__rider">
              <ellipse cx="340" cy="367" rx="105" ry="4.5" fill="#BEB5D8" opacity="0.34" />

              {/* Skateboard */}
              <g transform="rotate(-6 340 359)">
                <rect x="247" y="353" width="186" height="13" rx="6.5" fill="#302D39" />
                <rect x="258" y="354" width="164" height="4" rx="2" fill="#514D5A" opacity="0.72" />
                <path d="M267 365L260 373" stroke="#55515E" strokeWidth="4" strokeLinecap="round" />
                <path d="M413 365L420 373" stroke="#55515E" strokeWidth="4" strokeLinecap="round" />
                <circle cx="256" cy="376" r="9" fill="#3B3843" />
                <circle cx="256" cy="376" r="3.5" fill="#D8D3E0" />
                <circle cx="424" cy="376" r="9" fill="#3B3843" />
                <circle cx="424" cy="376" r="3.5" fill="#D8D3E0" />
              </g>

              {/* Back arm */}
              <path d="M342 254C324 266 304 279 286 275C277 273 271 265 269 258" stroke="#575360" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="267" cy="256" r="6" fill="#403C48" />

              {/* Back leg */}
              <path d="M333 296C324 315 312 333 289 342" stroke="#4B4754" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M289 342C283 344 277 347 274 352H296C301 352 303 349 304 345L289 342Z" fill="#2F2C38" />

              {/* Torso */}
              <path d="M330 248C340 241 358 241 366 250C372 259 371 280 365 297L328 299C323 282 321 261 330 248Z" fill="#77717F" />
              <path d="M330 249C337 245 347 244 355 246L348 278L328 276L330 249Z" fill="#9B95A3" opacity="0.66" />
              <path d="M331 291L366 291" stroke="#5F5A67" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

              {/* Front leg */}
              <path d="M356 296C368 313 379 329 397 340" stroke="#5D5866" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M397 340C404 342 409 346 412 352H389C385 352 383 349 382 345L397 340Z" fill="#37333F" />

              {/* Head */}
              <circle cx="347" cy="224" r="20" fill="#3B3743" />
              <path d="M334 219C336 208 348 203 358 209C365 213 367 221 365 229C360 224 354 222 347 222C341 222 337 224 334 227V219Z" fill="#2F2B36" />
              <path d="M362 226C367 226 370 230 368 234C366 237 361 236 360 232" fill="#6C6674" />

              {/* Front arm */}
              <path d="M362 254C377 262 391 274 406 270C414 268 418 261 420 254" stroke="#6B6572" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="421" cy="252" r="6" fill="#48434F" />

              {/* Neck */}
              <path d="M343 241H353V254H343V241Z" fill="#514C59" />
            </g>

            {/* Foreground decorative details */}
            <circle cx="190" cy="347" r="3" fill="#C5BAE8" />
            <circle cx="476" cy="352" r="2.5" fill="#D4CCEF" />
            <path d="M458 111L462 121L472 125L462 129L458 139L454 129L444 125L454 121L458 111Z" fill="#CEC5EE" />
          </svg>
        </div>

        <h1 className="admin404__title">This Page Does Not Exist</h1>
        <p className="admin404__description">
          Sorry, the page you are looking for could not be found. It's just an accident that was not intentional.
        </p>
      </div>
    </main>
  );
}
