import { motion } from 'framer-motion';

const variants = {
  up:    { hidden: { opacity: 0, y: 40 },    visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -40 },   visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: 40 },    visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -40 },   visible: { opacity: 1, x: 0 } },
  zoom:  { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
  fade:  { hidden: { opacity: 0 },            visible: { opacity: 1 } },
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  style = {},
  duration = 0.7,
  amount = 0.1,
}) {
  const v = variants[direction] || variants.up;

  return (
    <motion.div
      className={className}
      style={{ display: 'flex', flexDirection: 'column', height: '100%', ...style }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: v.hidden,
        visible: {
          ...v.visible,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
