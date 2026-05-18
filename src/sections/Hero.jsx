import { motion } from 'framer-motion'
import ParallaxBg from '../components/ParallaxBg'

const up = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
})

const STATS = [
  { value: '500+',     label: 'Restaurants' },
  { value: '₹2Cr+',   label: 'Billed monthly' },
  { value: '< 2 min', label: 'Setup time' },
  { value: '4.9 ★',   label: 'Rating' },
]

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '120px 24px 80px',
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(160deg, #fff8ed 0%, #fef9f0 50%, #f0faf4 100%)',
    }}>
      <ParallaxBg />

      {/* Radial vignette to keep center readable */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 55% 50% at 50% 50%, rgba(254,249,240,0.75) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Badge */}
        <motion.div {...up(0.05)} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'white', border: '1.5px solid var(--border)',
          borderRadius: 100, padding: '6px 16px', marginBottom: 36,
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        }}>
            <span style={{ fontSize: 12, color: 'var(--text2)', fontWeight: 600, letterSpacing: 0.3 }}>
            Built for Indian restaurants
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...up(0.12)} style={{
          fontSize: 'clamp(44px, 8vw, 100px)',
          lineHeight: 0.94, letterSpacing: '-4px', fontWeight: 900,
          color: 'var(--text)', marginBottom: 8,
        }}>
          The smartest POS
        </motion.h1>
        <motion.h1 {...up(0.2)} style={{
          fontSize: 'clamp(44px, 8vw, 100px)',
          lineHeight: 0.94, letterSpacing: '-4px', fontWeight: 900,
          color: 'var(--green)', marginBottom: 32,
        }}>
          for India.
        </motion.h1>

        {/* Subtext */}
        <motion.p {...up(0.28)} style={{
          fontSize: 18, color: 'var(--text3)', maxWidth: 520,
          lineHeight: 1.75, marginBottom: 48, margin: '0 auto 48px',
          fontWeight: 400,
        }}>
          Billing, KOT, table maps, inventory, CRM, and online orders —
          all in one system. No hardware lock-in. Works on any device.
        </motion.p>

        {/* CTAs */}
        <motion.div {...up(0.36)} className="hero-btns" style={{
          display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 72, flexWrap: 'wrap',
        }}>
          <a href="https://wa.me/917892718642" target="_blank" rel="noreferrer" style={{
            padding: '15px 36px', borderRadius: 12, fontSize: 15, fontWeight: 700,
            fontFamily: 'Outfit', background: 'var(--text)', color: 'white',
            textDecoration: 'none', transition: 'all 0.2s',
            boxShadow: '0 4px 20px rgba(26,18,8,0.2)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(22,163,74,0.35)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--text)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(26,18,8,0.2)' }}>
            Get in touch →
          </a>
          <a href="#how-it-works" style={{
            padding: '15px 36px', borderRadius: 12, fontSize: 15, fontWeight: 600,
            color: 'var(--text2)', textDecoration: 'none',
            border: '1.5px solid var(--border)', background: 'white',
            transition: 'all 0.2s', boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--green)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)' }}>
            See how it works
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div {...up(0.46)} className="stats-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          border: '1.5px solid var(--border)', borderRadius: 18,
          overflow: 'hidden', maxWidth: 600, width: '100%', margin: '0 auto',
          background: 'white', boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
        }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              padding: '22px 12px', textAlign: 'center',
              borderRight: i < STATS.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{ fontFamily: 'Outfit', fontSize: 24, fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.5px' }}>
                {s.value}
              </div>
              <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p {...up(0.52)} style={{ fontSize: 12, color: 'var(--muted)', marginTop: 18 }}>
          Get in touch via WhatsApp or email to get started
        </motion.p>
      </div>
    </section>
  )
}
