import './marquee.css'

const ITEMS = [
  'Lightning-fast KOT',
  'GST-compliant billing',
  'Zomato & Swiggy integration',
  'No hardware lock-in',
  'Works on any device',
  'Real-time table map',
  'Customer loyalty points',
  'Inventory auto-deduction',
  'Kitchen Display System',
  'Staff role management',
  'Revenue reports',
  'Free 14-day trial',
]

const Dot = () => (
  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green)', display: 'inline-block', flexShrink: 0, opacity: 0.5 }} />
)

export default function Marquee() {
  return (
    <div style={{
      borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
      background: 'white', padding: '14px 0', overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Fade edges */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, white, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, white, transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <div className="marquee-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
            <Dot />
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text2)', whiteSpace: 'nowrap', fontFamily: 'Outfit', letterSpacing: '-0.1px' }}>
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
