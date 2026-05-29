import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 clamp(16px, 4vw, 40px)', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(254,249,240,0.92)' : 'rgba(254,249,240,0.5)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
        transition: 'all 0.25s ease',
      }}>
      {/* Logo — uses actual favicon */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <img src="/favicon.png" alt="BillByte" style={{ width: 32, height: 32, borderRadius: 8 }} />
        <span style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 18, color: 'var(--text)', letterSpacing: '-0.5px' }}>
          Bill<span style={{ color: 'var(--green)' }}>Byte</span>
        </span>
      </a>

      {/* Links */}
      <div className="nav-links" style={{ display: 'flex', gap: 32 }}>
        {[['Features', '#features'], ['How it works', '#how-it-works'], ['Pricing', '#pricing']].map(([label, href]) => (
          <a key={label} href={href} style={{
            color: 'var(--text3)', fontSize: 14, fontWeight: 500,
            textDecoration: 'none', transition: 'color 0.15s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--text)'}
          onMouseLeave={e => e.target.style.color = 'var(--text3)'}>
            {label}
          </a>
        ))}
      </div>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <a href="https://app.billbyte.co.in" className="nav-login" style={{
          padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600,
          color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.15s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}>
          Log in
        </a>
        <a href="https://wa.me/917892718642" target="_blank" rel="noreferrer" style={{
          padding: '9px 22px', borderRadius: 8, fontSize: 13, fontWeight: 700,
          background: 'var(--green)', color: 'white', textDecoration: 'none',
          fontFamily: 'Outfit', transition: 'all 0.15s', whiteSpace: 'nowrap',
          boxShadow: '0 2px 12px rgba(22,163,74,0.3)',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--green2)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.transform = 'translateY(0)' }}>
          Get Access →
        </a>
      </div>
    </motion.nav>
  )
}
