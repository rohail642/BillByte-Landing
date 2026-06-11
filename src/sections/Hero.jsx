import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import ParallaxBg from '../components/ParallaxBg'
import ReceiptPrinter from '../components/ReceiptPrinter'

const up = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
})

const STATS = [
  { to: 50, suffix: '+', label: 'Restaurants' },
  { to: 2, prefix: '₹', suffix: 'L+', label: 'Billed monthly' },
  { to: 2, prefix: '< ', suffix: ' min', label: 'Setup time' },
  { to: 4.9, decimals: 1, suffix: ' ★', label: 'Rating' },
]

/* Word that slides up out of a mask, like type being stamped onto the page */
function Word({ children, delay, style }) {
  return (
    <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'inline-block', ...style }}>
        {children}
      </motion.span>
    </span>
  )
}

/* Number that counts up after the headline lands */
function CountUp({ to, decimals = 0, prefix = '', suffix = '', delay = 0.9 }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let raf, start
    const dur = 1400
    const t = setTimeout(() => {
      const step = (ts) => {
        if (!start) start = ts
        const p = Math.min((ts - start) / dur, 1)
        setVal(to * (1 - Math.pow(1 - p, 3)))
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }, delay * 1000)
    return () => { clearTimeout(t); cancelAnimationFrame(raf) }
  }, [to, delay])
  return <>{prefix}{val.toFixed(decimals)}{suffix}</>
}

/* Button that leans toward the cursor */
function Magnetic({ children, strength = 0.28 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 16 })
  const sy = useSpring(y, { stiffness: 220, damping: 16 })
  return (
    <motion.div ref={ref} style={{ x: sx, y: sy, display: 'inline-block' }}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect()
        x.set((e.clientX - r.left - r.width / 2) * strength)
        y.set((e.clientY - r.top - r.height / 2) * strength)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}>
      {children}
    </motion.div>
  )
}

const h1Style = {
  fontSize: 'clamp(42px, 5.4vw, 78px)',
  lineHeight: 1.02, letterSpacing: '-3px', fontWeight: 900,
  color: 'var(--text)',
}

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '120px 24px 80px',
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(160deg, #fff8ed 0%, #fef9f0 50%, #f0faf4 100%)',
    }}>
      <ParallaxBg />

      {/* Soft vignette so the content stays readable over the parallax icons */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 55% at 42% 50%, rgba(254,249,240,0.8) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div className="hero-grid" style={{
        position: 'relative', zIndex: 10,
        display: 'grid', gridTemplateColumns: '1.05fr 0.95fr',
        gap: 48, alignItems: 'center',
        maxWidth: 1180, width: '100%', margin: '0 auto',
      }}>

        {/* ------------------------------------------------ left: the pitch */}
        <div className="hero-left">
          <motion.div {...up(0.05)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 9,
            background: 'white', border: '1.5px dashed var(--border2)',
            borderRadius: 100, padding: '7px 16px', marginBottom: 32,
          }}>
            <span className="led-pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)' }} />
            <span style={{ fontSize: 12, color: 'var(--text2)', fontWeight: 600, letterSpacing: 0.3 }}>
              Built for Indian restaurants
            </span>
          </motion.div>

          <h1 style={{ ...h1Style, marginBottom: 4 }}>
            <Word delay={0.12}>The</Word>{' '}
            <Word delay={0.2} style={{
              fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 600,
              letterSpacing: '-1.5px', paddingRight: '0.06em',
            }}>smartest</Word>{' '}
            <Word delay={0.28}>POS</Word>
          </h1>
          <h1 style={{ ...h1Style, color: 'var(--green)', marginBottom: 32 }}>
            <Word delay={0.36}>for</Word>{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <Word delay={0.44}>India.</Word>
              <svg viewBox="0 0 220 14" style={{
                position: 'absolute', left: 0, bottom: -12, width: '100%',
                overflow: 'visible', pointerEvents: 'none',
              }}>
                <motion.path
                  d="M5 9 C 48 3, 96 2.5, 134 6 S 202 12, 215 5"
                  stroke="var(--amber)" strokeWidth="5" fill="none" strokeLinecap="round"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, delay: 1.15, ease: 'easeOut' }}
                />
              </svg>
            </span>
          </h1>

          <motion.p {...up(0.5)} style={{
            fontSize: 18, color: 'var(--text3)', maxWidth: 480,
            lineHeight: 1.75, marginBottom: 40, fontWeight: 400,
          }}>
            Billing, KOT, table maps, inventory, CRM, and online orders —
            all in one system. No hardware lock-in. Works on any device.
          </motion.p>

          <motion.div {...up(0.58)} className="hero-btns" style={{
            display: 'flex', gap: 12, marginBottom: 52, flexWrap: 'wrap',
          }}>
            <Magnetic>
              <a href="https://wa.me/917892718642" target="_blank" rel="noreferrer" style={{
                display: 'inline-block',
                padding: '15px 36px', borderRadius: 12, fontSize: 15, fontWeight: 700,
                fontFamily: 'Outfit', background: 'var(--text)', color: 'white',
                textDecoration: 'none', transition: 'background 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 20px rgba(26,18,8,0.2)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(22,163,74,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--text)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(26,18,8,0.2)' }}>
                Get in touch →
              </a>
            </Magnetic>
            <Magnetic strength={0.18}>
              <a href="#how-it-works" style={{
                display: 'inline-block',
                padding: '15px 36px', borderRadius: 12, fontSize: 15, fontWeight: 600,
                color: 'var(--text2)', textDecoration: 'none',
                border: '1.5px solid var(--border)', background: 'white',
                transition: 'all 0.2s', boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--green)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)' }}>
                See how it works
              </a>
            </Magnetic>
          </motion.div>

          <motion.div {...up(0.68)} className="hero-stats" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                padding: i === 0 ? '0 26px 0 0' : '0 26px',
                borderLeft: i > 0 ? '1.5px solid var(--border)' : 'none',
              }}>
                <div style={{ fontFamily: 'Outfit', fontSize: 26, fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.5px', fontVariantNumeric: 'tabular-nums' }}>
                  <CountUp {...s} delay={0.9 + i * 0.12} />
                </div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 3, fontWeight: 600, letterSpacing: 0.8, textTransform: 'uppercase' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ------------------------------------------- right: the proof, live */}
        <motion.div
          initial={{ opacity: 0, y: 36, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="hero-printer"
          style={{ display: 'flex', justifyContent: 'center' }}>
          <ReceiptPrinter />
        </motion.div>
      </div>
    </section>
  )
}
