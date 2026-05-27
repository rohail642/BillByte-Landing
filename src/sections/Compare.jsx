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
  return (
    <section style={{ padding: '96px 24px', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <style>{`
        .compare-table { border: 1.5px solid var(--border); border-radius: 20px; overflow: hidden; background: white; }
        .compare-header { display: grid; grid-template-columns: 1fr 1fr 1fr; background: var(--bg2); border-bottom: 1.5px solid var(--border); }
        .compare-header-cell { padding: 16px 20px; }
        .compare-row { display: grid; grid-template-columns: 1fr 1fr 1fr; border-bottom: 1px solid var(--border); }
        .compare-row:last-child { border-bottom: none; }
        .compare-label { padding: 18px 20px; display: flex; align-items: center; }
        .compare-old { padding: 18px 20px; border-left: 1px solid var(--border); display: flex; align-items: flex-start; gap: 10px; }
        .compare-new { padding: 18px 20px; border-left: 1px solid var(--border); display: flex; align-items: flex-start; gap: 10px; background: rgba(22,163,74,0.025); }

        @media (max-width: 640px) {
          .compare-header { display: none; }
          .compare-table { border-radius: 16px; }
          .compare-row { display: flex; flex-direction: column; padding: 0; }
          .compare-label {
            padding: 14px 16px 8px;
            font-size: 13px !important;
            font-weight: 700 !important;
            color: var(--text) !important;
            background: var(--bg2);
            border-bottom: 1px solid var(--border);
          }
          .compare-old {
            padding: 12px 16px;
            border-left: none;
            border-bottom: 1px solid var(--border);
            background: rgba(239,68,68,0.03);
          }
          .compare-new {
            padding: 12px 16px;
            border-left: none;
          }
        }
      `}</style>

      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
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
          className="compare-table">

          {/* Header — hidden on mobile */}
          <div className="compare-header">
            <div className="compare-header-cell" />
            <div className="compare-header-cell" style={{ borderLeft: '1px solid var(--border)', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Outfit', fontSize: 12, fontWeight: 700, color: 'var(--muted)', letterSpacing: 1, textTransform: 'uppercase' }}>Traditional POS</p>
            </div>
            <div className="compare-header-cell" style={{ borderLeft: '1px solid var(--border)', textAlign: 'center', background: 'rgba(22,163,74,0.04)' }}>
              <p style={{ fontFamily: 'Outfit', fontSize: 12, fontWeight: 700, color: 'var(--green)', letterSpacing: 1, textTransform: 'uppercase' }}>BillByte</p>
            </div>
          </div>

          {ROWS.map((row) => (
            <div key={row.label} className="compare-row">
              <div className="compare-label">
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text2)' }}>{row.label}</span>
              </div>
              <div className="compare-old">
                <Cross />
                <span style={{ fontSize: 13, color: 'var(--text3)', lineHeight: 1.5 }}>{row.old}</span>
              </div>
              <div className="compare-new">
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
