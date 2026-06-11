import { motion } from 'framer-motion'

/* Zig-zag bottom edge (receipt tear) — straight top, toothed bottom */
export const ZIGZAG_BOTTOM = (() => {
  const teeth = 36
  const pts = ['0% 0%', '100% 0%']
  for (let i = teeth; i >= 0; i--) {
    pts.push(`${((i / teeth) * 100).toFixed(2)}% ${i % 2 ? '100%' : '45%'}`)
  }
  return `polygon(${pts.join(',')})`
})()

/* Italic serif accent word cut into the heavy sans headlines */
export function Em({ children, color }) {
  return (
    <span style={{
      fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 600,
      letterSpacing: '-1px', color, paddingRight: '0.05em',
    }}>
      {children}
    </span>
  )
}

/* Word with a hand-drawn underline that sketches itself in on scroll */
export function Scribbled({ children, color = 'var(--amber)', delay = 0.4 }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      <svg viewBox="0 0 220 14" style={{
        position: 'absolute', left: 0, bottom: -8, width: '100%',
        overflow: 'visible', pointerEvents: 'none',
      }}>
        <motion.path
          d="M5 9 C 48 3, 96 2.5, 134 6 S 202 12, 215 5"
          stroke={color} strokeWidth="5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        />
      </svg>
    </span>
  )
}

/* Marker stroke through a phrase, drawn on scroll */
export function Struck({ children, color = '#dc2626', delay = 0.5 }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      <svg viewBox="0 0 200 20" preserveAspectRatio="none" style={{
        position: 'absolute', left: '-2%', top: '50%', width: '104%', height: 16,
        marginTop: -8, overflow: 'visible', pointerEvents: 'none',
      }}>
        <motion.path
          d="M3 13 C 60 9, 140 10, 197 6"
          stroke={color} strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.8"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay, ease: 'easeOut' }}
        />
      </svg>
    </span>
  )
}

/* CSS barcode, for receipt sign-offs */
export function Barcode({ width = 120, height = 22, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        height, width, margin: '0 auto', opacity: 0.75,
        background: 'repeating-linear-gradient(90deg, currentColor 0 2px, transparent 2px 4px, currentColor 4px 7px, transparent 7px 9px, currentColor 9px 10px, transparent 10px 13px)',
      }} />
      {label && (
        <div style={{ fontFamily: "'VT323', monospace", fontSize: 14, opacity: 0.6, marginTop: 3, letterSpacing: 2 }}>
          {label}
        </div>
      )}
    </div>
  )
}
