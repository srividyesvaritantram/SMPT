import { motion } from 'framer-motion';
import { useState } from 'react';
import './GoldenButton.css';

/* ── Inline lotus SVG ornament ── */
function LotusOrnament() {
  return (
    <svg
      className="pb-lotus"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 8 petals */}
      <ellipse cx="10" cy="5.5" rx="2.2" ry="5"   fill="url(#pbLg)" opacity="0.90" transform="rotate(0   10 10)" />
      <ellipse cx="10" cy="5.5" rx="2.2" ry="5"   fill="url(#pbLg)" opacity="0.75" transform="rotate(45  10 10)" />
      <ellipse cx="10" cy="5.5" rx="2.2" ry="5"   fill="url(#pbLg)" opacity="0.75" transform="rotate(90  10 10)" />
      <ellipse cx="10" cy="5.5" rx="2.2" ry="5"   fill="url(#pbLg)" opacity="0.75" transform="rotate(135 10 10)" />
      <ellipse cx="10" cy="5.5" rx="2.2" ry="5"   fill="url(#pbLg)" opacity="0.75" transform="rotate(180 10 10)" />
      <ellipse cx="10" cy="5.5" rx="2.2" ry="5"   fill="url(#pbLg)" opacity="0.75" transform="rotate(225 10 10)" />
      <ellipse cx="10" cy="5.5" rx="2.2" ry="5"   fill="url(#pbLg)" opacity="0.75" transform="rotate(270 10 10)" />
      <ellipse cx="10" cy="5.5" rx="2.2" ry="5"   fill="url(#pbLg)" opacity="0.75" transform="rotate(315 10 10)" />
      {/* Centre */}
      <circle cx="10" cy="10" r="3.2" fill="url(#pbCg)" />
      <circle cx="10" cy="10" r="1.5" fill="#FFF7D6" opacity="0.95" />
      <defs>
        <linearGradient id="pbLg" x1="10" y1="0" x2="10" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#F3D777" />
          <stop offset="50%"  stopColor="#E8C76A" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <radialGradient id="pbCg" cx="40%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#FFF7D6" />
          <stop offset="60%"  stopColor="#E8C76A" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function GoldenButton({
  label,
  onClick,
  outlined = false,
  icon: Icon,
  width,
  disabled = false,
  type = 'button',
  size = 'md',
  style = {},
  noArrow = false,
  noOrnaments = false,
}) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [...prev, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);
    if (onClick && !disabled) onClick(e);
  };

  const variant = outlined ? 'outlined' : 'filled';

  return (
    <motion.button
      type={type}
      className={`pb pb--${variant} pb--${size} ${disabled ? 'pb--disabled' : ''}`}
      style={{ width: width || 'auto', ...style }}
      whileHover={!disabled ? { y: -3 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={handleClick}
      disabled={disabled}
    >
      {/* Left lotus ornament */}
      {!noOrnaments && <LotusOrnament />}

      {/* Optional leading icon */}
      {Icon && <Icon size={14} className="pb__icon" />}

      {/* Label */}
      <span className="pb__label">{label}</span>

      {/* Right arrow */}
      {!noArrow && <span className="pb__arrow">→</span>}

      {/* Right lotus ornament */}
      {!noOrnaments && <LotusOrnament />}

      {/* Shine sweep */}
      <span className="pb__shine" aria-hidden="true" />

      {/* Ripples */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pb__ripple"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </motion.button>
  );
}
