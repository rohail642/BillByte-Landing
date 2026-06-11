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

function Row({ reverse = false, dark = false }) {
  return (
    <div style={{
      background: dark ? 'var(--green)' : 'white', padding: '13px 0',
      overflow: 'hidden', position: 'relative',
      borderTop: dark ? 'none' : '1px solid var(--border)',
      borderBottom: dark ? 'none' : '1px solid var(--border)',
    }}>
      <div className={`marquee-track${reverse ? ' reverse' : ''}`}>
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
            <span style={{
              width: 5, height: 5, borderRadius: '50%', display: 'inline-block', flexShrink: 0,
              background: dark ? 'rgba(255,255,255,0.6)' : 'var(--green)',
              opacity: dark ? 1 : 0.5,
            }} />
            <span style={{
              fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap',
              fontFamily: 'Outfit', letterSpacing: '-0.1px',
              color: dark ? '#f0fdf4' : 'var(--text2)',
            }}>
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <div style={{ padding: '26px 0 40px', overflow: 'hidden', background: 'var(--bg)' }}>
      <div style={{ transform: 'rotate(-1.4deg) scale(1.05)' }}>
        <Row />
        <Row reverse dark />
      </div>
    </div>
  )
}
