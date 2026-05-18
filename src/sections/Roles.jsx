import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const ROLES = [
  {
    role: 'Owner',
    color: '#7c3aed',
    dim: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.2)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    headline: 'Full visibility. Full control.',
    points: ['Live dashboard with revenue, orders & top dishes', 'Manage menu, staff, tables, and GST settings', 'Inventory alerts and supplier tracking', 'Detailed reports exportable to CSV'],
  },
  {
    role: 'Cashier',
    color: '#2563eb',
    dim: 'rgba(37,99,235,0.08)',
    border: 'rgba(37,99,235,0.2)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
    headline: 'Fast billing, zero confusion.',
    points: ['POS terminal with category filter & search', 'Table map for dine-in orders', 'Collect cash, UPI, or card', 'View and manage all active orders'],
  },
  {
    role: 'Waiter',
    color: '#16a34a',
    dim: 'rgba(22,163,74,0.08)',
    border: 'rgba(22,163,74,0.2)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    headline: 'Take orders in seconds.',
    points: ['Full-screen table view on any phone or tablet', 'Tap items, select table, send KOT instantly', 'See active orders per table', 'No training needed — dead simple UI'],
  },
  {
    role: 'Kitchen',
    color: '#d97706',
    dim: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.2)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/>
      </svg>
    ),
    headline: 'Never miss an order.',
    points: ['Live kitchen display — new KOTs appear instantly', 'Mark items ready one by one', 'Queue view shows all pending orders', 'Works on any screen — phone, tablet, or monitor'],
  },
]

export default function Roles() {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <section style={{ padding: '96px 32px', background: 'white', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <motion.div ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            Built for every role
          </p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-2px', color: 'var(--text)', marginBottom: 14 }}>
            One platform.<br />Every person in your restaurant.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text3)', maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
            Each role gets their own focused view. No clutter, no confusion — just what they need to do their job.
          </p>
        </motion.div>

        <div className="feat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {ROLES.map((r, i) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
            return (
              <motion.div key={r.role} ref={ref}
                initial={{ y: 24, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: 'var(--bg2)', border: '1.5px solid var(--border)',
                  borderRadius: 18, padding: '28px 22px', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = r.border; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.07)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: r.dim, color: r.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1px solid ${r.border}`,
                  }}>
                    {r.icon}
                  </div>
                  <span style={{ fontFamily: 'Outfit', fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: r.color }}>
                    {r.role}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'Outfit', fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 14, letterSpacing: '-0.2px', lineHeight: 1.3 }}>
                  {r.headline}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {r.points.map(p => (
                    <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <div style={{
                        width: 5, height: 5, borderRadius: '50%', background: r.color,
                        flexShrink: 0, marginTop: 6, opacity: 0.7,
                      }} />
                      <span style={{ fontSize: 12.5, color: 'var(--text3)', lineHeight: 1.6 }}>{p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
