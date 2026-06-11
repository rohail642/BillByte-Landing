import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Em, Scribbled } from '../components/doodles'

const STEPS = [
  { number: '01', title: 'Sign up in 2 minutes', desc: 'Enter your restaurant name, add your menu, and you\'re live. No hardware to buy. No installation. No IT team needed.', tag: 'Works on any phone, tablet, or laptop' },
  { number: '02', title: 'Take orders, send KOT', desc: 'Select items from the menu grid, pick the table, hit Send KOT. Kitchen gets it instantly. Same table, multiple rounds — all merged automatically.', tag: 'Dine-in, takeaway, and delivery in one place' },
  { number: '03', title: 'Collect, report, grow', desc: 'Cash, UPI, or card. Print or share receipt on WhatsApp. Track revenue, top dishes, loyal customers — all in real time.', tag: 'Zomato and Swiggy orders flow in automatically' },
]

function Step({ step, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  return (
    <motion.div ref={ref}
      initial={{ x: -20, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="step-grid"
      style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 32, padding: '40px 0', position: 'relative', zIndex: 1 }}>
      {/* Stamped step number */}
      <div className="step-badge" style={{
        width: 64, height: 64, borderRadius: '50%',
        background: '#eef6e9', border: '2px dashed rgba(22,163,74,0.45)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transform: `rotate(${index % 2 ? 5 : -5}deg)`,
      }}>
        <span style={{ fontFamily: 'Outfit', fontSize: 22, fontWeight: 900, color: 'var(--green)', letterSpacing: '-1px' }}>{step.number}</span>
      </div>
      <div style={{ paddingTop: 8 }}>
        <h3 style={{ fontFamily: 'Outfit', fontSize: 21, fontWeight: 700, color: 'var(--text)', marginBottom: 10, letterSpacing: '-0.3px' }}>
          {step.title}
        </h3>
        <p style={{ fontSize: 14, color: 'var(--text3)', lineHeight: 1.8, marginBottom: 14, maxWidth: 500 }}>
          {step.desc}
        </p>
        {/* Ticket-stub tag */}
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 12, color: 'var(--green2)', fontWeight: 600,
          background: 'white', padding: '5px 14px', borderRadius: 8,
          border: '1.5px dashed rgba(22,163,74,0.45)',
        }}>
          ✓ {step.tag}
        </span>
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <section id="how-it-works" style={{ padding: '96px 32px', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        <motion.div ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          style={{ textAlign: 'center', marginBottom: 68 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            Simple by design
          </p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-2px', color: 'var(--text)' }}>
            Up and running before <Scribbled><Em>lunch.</Em></Scribbled>
          </h2>
        </motion.div>
        <div style={{ position: 'relative' }}>
          {/* Dashed route line connecting the steps, drawn on scroll */}
          <motion.div className="step-line"
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            style={{
              position: 'absolute', left: 31, top: 60, bottom: 70,
              borderLeft: '2px dashed var(--border2)', transformOrigin: 'top', zIndex: 0,
            }} />
          {STEPS.map((step, i) => <Step key={step.number} step={step} index={i} />)}
        </div>
      </div>
    </section>
  )
}
