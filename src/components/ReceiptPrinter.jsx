import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PAPER = '#fffdf6'
const INK = '#2b2317'

// ---------------------------------------------------------------------------
// Receipt content — three real-world tickets that loop forever
// ---------------------------------------------------------------------------
const RECEIPTS = [
  [
    { t: 'brand', v: 'SPICE GARDEN' },
    { t: 'sub', v: 'KOT #142 · Table 7 · Dine-in' },
    { t: 'sub', v: '8:42 PM · Waiter: Arjun' },
    { t: 'sep' },
    { t: 'item', v: '2 × Paneer Tikka' },
    { t: 'note', v: '   └ extra spicy' },
    { t: 'item', v: '1 × Butter Naan' },
    { t: 'item', v: '1 × Dal Makhani' },
    { t: 'item', v: '2 × Masala Chai' },
    { t: 'sep' },
    { t: 'foot', v: '*** SENT TO KITCHEN ***' },
    { t: 'barcode', v: 'BB-00142' },
  ],
  [
    { t: 'brand', v: 'SPICE GARDEN' },
    { t: 'sub', v: 'Bill #2204 · Table 12' },
    { t: 'sep' },
    { t: 'price', n: 'Veg Biryani × 1', p: '₹240' },
    { t: 'price', n: 'Masala Dosa × 2', p: '₹300' },
    { t: 'price', n: 'Filter Coffee × 2', p: '₹120' },
    { t: 'price', n: 'Gulab Jamun × 1', p: '₹90' },
    { t: 'sep' },
    { t: 'row', n: 'Subtotal', p: '₹750' },
    { t: 'row', n: 'GST 5%', p: '₹38' },
    { t: 'total', n: 'TOTAL', p: '₹788' },
    { t: 'sub', v: 'Paid via UPI ✓' },
    { t: 'foot', v: 'Thank you! Visit again' },
    { t: 'barcode', v: 'BB-02204' },
  ],
  [
    { t: 'brand', v: 'ZOMATO #ZMT-882' },
    { t: 'sub', v: 'Auto-accepted · Prep: 20 min' },
    { t: 'sep' },
    { t: 'item', v: '1 × Chicken Biryani' },
    { t: 'item', v: '1 × Raita' },
    { t: 'item', v: '2 × Coke (500ml)' },
    { t: 'sep' },
    { t: 'row', n: 'Online payment', p: '₹460 ✓' },
    { t: 'foot', v: '*** PUSHED TO KDS ***' },
    { t: 'barcode', v: 'ZM-00882' },
  ],
]

const TOASTS = [
  { title: 'Table 9', sub: '₹1,240 paid · UPI', tone: '#16a34a' },
  { title: 'Zomato #882', sub: 'Auto-accepted', tone: '#dc2626' },
  { title: 'KOT #143', sub: 'Sent to kitchen', tone: '#d97706' },
  { title: 'Swiggy #314', sub: 'Ready for pickup', tone: '#ea580c' },
  { title: 'Table 2', sub: 'Bill printed', tone: '#16a34a' },
]

const TOAST_SPOTS = [
  { top: 96, right: -78 },
  { top: 280, left: -88 },
  { top: 190, right: -62 },
  { top: 360, right: -84 },
  { top: 140, left: -70 },
]

// Zig-zag torn edge, generated once
const ZIGZAG = (() => {
  const teeth = 22
  const pts = ['0% 0%', '100% 0%']
  for (let i = teeth; i >= 0; i--) {
    pts.push(`${((i / teeth) * 100).toFixed(2)}% ${i % 2 ? '100%' : '50%'}`)
  }
  return `polygon(${pts.join(',')})`
})()

const mono = { fontFamily: "'VT323', monospace", color: INK, lineHeight: 1.25 }

function Line({ line }) {
  switch (line.t) {
    case 'brand':
      return <div style={{ ...mono, fontSize: 22, textAlign: 'center', letterSpacing: 1.5 }}>{line.v}</div>
    case 'sub':
      return <div style={{ ...mono, fontSize: 15, textAlign: 'center', opacity: 0.7 }}>{line.v}</div>
    case 'sep':
      return <div style={{ borderTop: `1.5px dashed ${INK}`, opacity: 0.3, margin: '7px 2px' }} />
    case 'item':
      return <div style={{ ...mono, fontSize: 17 }}>{line.v}</div>
    case 'note':
      return <div style={{ ...mono, fontSize: 14, opacity: 0.6 }}>{line.v}</div>
    case 'price':
      return (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ ...mono, fontSize: 16 }}>{line.n}</span>
          <span style={{ flex: 1, borderBottom: `1.5px dotted ${INK}`, opacity: 0.35, transform: 'translateY(-3px)' }} />
          <span style={{ ...mono, fontSize: 16 }}>{line.p}</span>
        </div>
      )
    case 'row':
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ ...mono, fontSize: 15, opacity: 0.75 }}>{line.n}</span>
          <span style={{ ...mono, fontSize: 15, opacity: 0.75 }}>{line.p}</span>
        </div>
      )
    case 'total':
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '2px 0' }}>
          <span style={{ ...mono, fontSize: 21 }}>{line.n}</span>
          <span style={{ ...mono, fontSize: 21 }}>{line.p}</span>
        </div>
      )
    case 'foot':
      return <div style={{ ...mono, fontSize: 16, textAlign: 'center', marginTop: 4 }}>{line.v}</div>
    case 'barcode':
      return (
        <div style={{ textAlign: 'center', margin: '8px 0 4px' }}>
          <div style={{
            height: 26, width: '62%', margin: '0 auto',
            background: `repeating-linear-gradient(90deg, ${INK} 0 2px, transparent 2px 4px, ${INK} 4px 7px, transparent 7px 9px, ${INK} 9px 10px, transparent 10px 13px)`,
            opacity: 0.85,
          }} />
          <div style={{ ...mono, fontSize: 13, opacity: 0.6, marginTop: 2 }}>{line.v}</div>
        </div>
      )
    default:
      return null
  }
}

export default function ReceiptPrinter() {
  const [rIdx, setRIdx] = useState(0)
  const [count, setCount] = useState(0)
  const [phase, setPhase] = useState('printing') // printing → hold → tear → printing…
  const [toastIdx, setToastIdx] = useState(0)
  const lines = RECEIPTS[rIdx]

  // Print lines one at a time, then hold, then tear
  useEffect(() => {
    if (phase === 'printing') {
      if (count >= lines.length) {
        const t = setTimeout(() => setPhase('tear'), 1700)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setCount(c => c + 1), 230)
      return () => clearTimeout(t)
    }
  }, [phase, count, lines.length])

  // Side toasts
  useEffect(() => {
    const t = setInterval(() => setToastIdx(i => i + 1), 3200)
    return () => clearInterval(t)
  }, [])

  const toast = TOASTS[toastIdx % TOASTS.length]
  const spot = TOAST_SPOTS[toastIdx % TOAST_SPOTS.length]
  const printing = phase === 'printing' && count < lines.length
  const status = printing ? 'PRINTING' : phase === 'tear' ? 'FEED' : 'DONE ✓'

  return (
    <div style={{ position: 'relative', width: 350, height: 600, transform: 'rotate(-1.5deg)' }}>

      {/* Printer body */}
      <div style={{
        position: 'relative', zIndex: 3, borderRadius: 22,
        background: 'linear-gradient(175deg, #32261a 0%, #1a1208 90%)',
        padding: '18px 22px 16px',
        boxShadow: '0 24px 60px rgba(26,18,8,0.35), inset 0 1px 0 rgba(255,255,255,0.12)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontFamily: 'Outfit', fontSize: 10, fontWeight: 700, letterSpacing: 2.5,
            color: 'rgba(255,251,240,0.5)',
          }}>
            BILLBYTE&nbsp;BB-58&nbsp;·&nbsp;THERMAL
          </span>
          <span className="led-pulse" style={{
            width: 8, height: 8, borderRadius: '50%', background: '#4ade80',
            boxShadow: '0 0 10px #4ade80',
          }} />
        </div>

        {/* Paper slot */}
        <div style={{
          height: 11, borderRadius: 6, marginTop: 16,
          background: '#0a0703',
          boxShadow: 'inset 0 3px 6px rgba(0,0,0,0.9), 0 1px 0 rgba(255,255,255,0.08)',
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
          <span style={{ ...mono, fontSize: 13, color: printing ? '#4ade80' : 'rgba(255,251,240,0.45)', letterSpacing: 1 }}>
            {status}
          </span>
          <span style={{ ...mono, fontSize: 13, color: 'rgba(255,251,240,0.3)', letterSpacing: 1 }}>
            58mm
          </span>
        </div>
      </div>

      {/* Receipt paper */}
      <motion.div
        className={printing ? 'paper-jitter' : undefined}
        animate={phase === 'tear'
          ? { y: 440, rotate: 9, opacity: 0 }
          : { y: 0, rotate: 0, opacity: 1 }}
        transition={phase === 'tear'
          ? { duration: 0.9, ease: [0.45, 0, 0.8, 0.4] }
          : { duration: 0 }}
        onAnimationComplete={() => {
          if (phase === 'tear') {
            setCount(0)
            setRIdx(i => (i + 1) % RECEIPTS.length)
            setPhase('printing')
          }
        }}
        style={{
          position: 'absolute', top: 104, left: 34, right: 34, zIndex: 2,
          filter: 'drop-shadow(0 18px 28px rgba(26,18,8,0.22))',
        }}>
        <div style={{
          background: `linear-gradient(${'#ece4d2'} 0px, ${PAPER} 26px)`,
          padding: '16px 16px 6px',
        }}>
          {lines.slice(0, count).map((line, i) => (
            <motion.div key={`${rIdx}-${i}`}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.12 }}>
              <Line line={line} />
            </motion.div>
          ))}
        </div>
        <div style={{ height: 12, background: PAPER, clipPath: ZIGZAG }} />
      </motion.div>

      {/* Live order toasts */}
      <AnimatePresence>
        <motion.div key={toastIdx} className="printer-toast"
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          style={{
            position: 'absolute', zIndex: 4, ...spot,
            display: 'flex', alignItems: 'center', gap: 10,
            background: 'white', border: '1.5px solid var(--border)',
            borderRadius: 12, padding: '10px 14px',
            boxShadow: '0 10px 30px rgba(26,18,8,0.14)',
            whiteSpace: 'nowrap',
          }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: toast.tone, flexShrink: 0 }} />
          <span>
            <span style={{ display: 'block', fontFamily: 'Outfit', fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>
              {toast.title}
            </span>
            <span style={{ display: 'block', fontSize: 11, color: 'var(--text3)', marginTop: 1 }}>
              {toast.sub}
            </span>
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
