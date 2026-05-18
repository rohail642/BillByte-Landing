import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const ROWS = [
  { label: 'Setup time',             old: 'Days of installation & training', bb: 'Under 2 minutes, no IT team' },
  { label: 'Hardware required',      old: 'Dedicated POS machine (₹30,000+)', bb: 'Any phone, tablet, or laptop you own' },
  { label: 'Table & section management', old: 'Fixed layout, hard to change', bb: 'Fully configurable, update anytime' },
  { label: 'Online orders',          old: 'Separate device or manual entry', bb: 'Zomato & Swiggy flow in automatically' },
  { label: 'Staff roles',            old: 'Usually one shared login', bb: 'Owner, cashier, waiter, kitchen — separate logins' },
  { label: 'Kitchen display',        old: 'Extra hardware required', bb: 'Works on any phone or monitor' },
  { label: 'Access from anywhere',   old: 'Only on-premises', bb: 'Web, PWA, or Windows desktop app' },
  { label: 'Updates & new features', old: 'Paid upgrades or hardware swap', bb: 'Automatic, always included' },
]

const Check = () => (
  <div style={{
    width: 22, height: 22, borderRadius: '50%', background: 'var(--green-dim)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    border: '1px solid rgba(22,163,74,0.2)',
  }}>
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  </div>
)

const Cross = () => (
  <div style={{
    width: 22, height: 22, borderRadius: '50%', background: 'rgba(239,68,68,0.07)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  }}>
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  </div>
)

export default function Compare() {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <section style={{ padding: '96px 32px', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.div ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            Why switch
          </p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-2px', color: 'var(--text)', marginBottom: 14 }}>
            The old way vs. BillByte.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text3)', maxWidth: 440, margin: '0 auto', lineHeight: 1.65 }}>
            Traditional POS systems are slow, expensive, and built for another era. BillByte is different.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ border: '1.5px solid var(--border)', borderRadius: 20, overflow: 'hidden', background: 'white' }}>

          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'var(--bg2)', borderBottom: '1.5px solid var(--border)' }}>
            <div style={{ padding: '16px 24px' }} />
            <div style={{ padding: '16px 24px', borderLeft: '1px solid var(--border)', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Outfit', fontSize: 12, fontWeight: 700, color: 'var(--muted)', letterSpacing: 1, textTransform: 'uppercase' }}>Traditional POS</p>
            </div>
            <div style={{ padding: '16px 24px', borderLeft: '1px solid var(--border)', textAlign: 'center', background: 'rgba(22,163,74,0.04)' }}>
              <p style={{ fontFamily: 'Outfit', fontSize: 12, fontWeight: 700, color: 'var(--green)', letterSpacing: 1, textTransform: 'uppercase' }}>BillByte</p>
            </div>
          </div>

          {ROWS.map((row, i) => (
            <div key={row.label} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
              borderBottom: i < ROWS.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{ padding: '18px 24px', display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text2)' }}>{row.label}</span>
              </div>
              <div style={{ padding: '18px 24px', borderLeft: '1px solid var(--border)', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Cross />
                <span style={{ fontSize: 13, color: 'var(--text3)', lineHeight: 1.5 }}>{row.old}</span>
              </div>
              <div style={{ padding: '18px 24px', borderLeft: '1px solid var(--border)', display: 'flex', alignItems: 'flex-start', gap: 10, background: 'rgba(22,163,74,0.025)' }}>
                <Check />
                <span style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.5, fontWeight: 500 }}>{row.bb}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
