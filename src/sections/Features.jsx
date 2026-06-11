import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Em, Scribbled } from '../components/doodles'

const Icon = ({ children }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
)

const FEATURES = [
  { icon: <Icon><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></Icon>, title: 'Lightning-fast billing', desc: 'Send KOT in seconds. Orders for the same table auto-merge. Receipt ready before the customer asks.' },
  { icon: <Icon><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></Icon>, title: 'Live table map', desc: 'Every table visible at a glance — free, occupied, or pending. Tap to view items, add more, or collect payment.' },
  { icon: <Icon><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></Icon>, title: 'Smart inventory', desc: 'Stock auto-deducts when KOT is sent. Alerts before items run out. Tracks expiry, suppliers, and purchase orders.' },
  { icon: <Icon><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></Icon>, title: 'Online orders', desc: 'Zomato and Swiggy orders flow directly into the kitchen. WhatsApp orders entered manually — zero missed.' },
  { icon: <Icon><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></Icon>, title: 'Customer loyalty', desc: '1 point per ₹10 spent. Customers redeem at checkout. Full history, visit tracking, and analytics.' },
  { icon: <Icon><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></Icon>, title: 'Reports that matter', desc: 'Revenue trends, GST summary, top dishes, inventory — all exportable to Excel with one click.' },
]

const TILTS = [-1.2, 0.9, -0.7, 1.1, -0.9, 0.8]

function Card({ feature, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const tilt = TILTS[index % TILTS.length]
  return (
    <motion.div ref={ref}
      initial={{ y: 24, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}>
      <div className="tilt-card" style={{
        position: 'relative', height: '100%',
        background: 'white', border: '1.5px solid var(--border)',
        borderRadius: 18, padding: '28px 24px',
        transform: `rotate(${tilt}deg)`,
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'rotate(0deg) translateY(-6px)'; e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.boxShadow = '0 16px 36px rgba(22,163,74,0.12)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = `rotate(${tilt}deg)`; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}>
        <span style={{
          position: 'absolute', top: 16, right: 20,
          fontFamily: "'VT323', monospace", fontSize: 19, color: 'var(--muted)',
        }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: 'var(--green-dim)', marginBottom: 18,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1px solid rgba(22,163,74,0.15)', color: 'var(--green)',
        }}>
          {feature.icon}
        </div>
        <h3 style={{ fontFamily: 'Outfit', fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8, letterSpacing: '-0.2px' }}>
          {feature.title}
        </h3>
        <p style={{ fontSize: 14, color: 'var(--text3)', lineHeight: 1.7 }}>
          {feature.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <section id="features" style={{ padding: '96px 32px', background: 'white', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <motion.div ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            Everything you need
          </p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-2px', color: 'var(--text)', marginBottom: 14 }}>
            One system. <Scribbled><Em>Infinite</Em></Scribbled> control.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text3)', maxWidth: 460, margin: '0 auto', lineHeight: 1.65 }}>
            Every tool your restaurant needs — billing, kitchen, inventory, loyalty, and reports — in a single platform.
          </p>
        </motion.div>
        <div className="feat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
          {FEATURES.map((f, i) => <Card key={f.title} feature={f} index={i} />)}
        </div>
      </div>
    </section>
  )
}
