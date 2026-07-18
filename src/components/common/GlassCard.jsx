import { motion } from 'framer-motion';
import './GlassCard.css';

export default function GlassCard({
  children,
  className = '',
  width,
  height,
  padding,
  borderRadius,
  onClick,
  style = {},
  hoverable = true,
}) {
  return (
    <motion.div
      className={`glass-card ${hoverable ? 'glass-card--hoverable' : ''} ${className}`}
      style={{
        width,
        height,
        padding,
        borderRadius: borderRadius ? `${borderRadius}px` : undefined,
        ...style,
      }}
      whileHover={
        hoverable && onClick
          ? { y: -6, boxShadow: '0 16px 48px rgba(123,30,58,0.18), 0 0 32px rgba(212,175,55,0.25)' }
          : {}
      }
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
