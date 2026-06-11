import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { Em, Scribbled } from '../components/doodles'

const FAQS = [
  {
    q: 'Do I need to buy any hardware?',
    a: 'No. BillByte works on any device you already own — Android phones, iPhones, iPads, Windows laptops, or any browser. There is nothing to install or purchase.',
  },
  {
    q: 'How does the 14-day free trial work?',
    a: 'Get in touch via WhatsApp or email and we\'ll set you up with a free trial — usually the same day. You get full access to all features during the trial period with no commitment.',
  },
  {
    q: 'Can my staff use it without training?',
    a: 'Yes. The waiter view is a single full-screen interface — tap a table, select items, send KOT. Most waiters figure it out within minutes. The cashier and owner views are equally intuitive.',
  },
  {
    q: 'Does it work if my internet goes down?',
    a: 'BillByte requires an internet connection to sync data with the server. We recommend having a mobile data backup (hotspot) for uninterrupted service during outages.',
  },
  {
    q: 'How do Zomato and Swiggy orders come in?',
    a: 'BillByte receives orders from Zomato and Swiggy via webhooks. New orders appear automatically in your Online Orders section and can be pushed to the kitchen without manual entry.',
  },
  {
    q: 'Is my data safe?',
    a: 'All data is encrypted in transit and stored in a secure cloud database hosted in Mumbai. Only you and your authorized staff can access your restaurant\'s data.',
  },
  {
    q: 'Can I use BillByte for multiple outlets?',
    a: 'Yes — the Chain plan includes a multi-outlet admin dashboard where you can manage menus, staff, and reports across all your locations from one place. Contact us to get set up.',
  },
]

function Item({ faq, index }) {
  const [open, setOpen] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <motion.div ref={ref}
      initial={{ y: 16, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
      }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', textAlign: 'left', padding: '22px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          background: 'none', border: 'none', cursor: 'pointer',
        }}>
        <span style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <span style={{ fontFamily: "'VT323', monospace", fontSize: 18, color: 'var(--green)', flexShrink: 0 }}>
            Q.{String(index + 1).padStart(2, '0')}
          </span>
          <span style={{ fontFamily: 'Outfit', fontSize: 16, fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.2px' }}>
            {faq.q}
          </span>
        </span>
        <div style={{
          width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
          background: open ? 'var(--green)' : 'var(--bg2)',
          border: `1.5px solid ${open ? 'var(--green)' : 'var(--border)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.2s',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke={open ? 'white' : 'var(--text3)'}
            strokeWidth="2.5" strokeLinecap="round"
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}>
            <p style={{ fontSize: 14, color: 'var(--text3)', lineHeight: 1.8, paddingBottom: 20, maxWidth: 680 }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <section style={{ padding: '96px 32px', background: 'white', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        <motion.div ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            FAQ
          </p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-2px', color: 'var(--text)', marginBottom: 14 }}>
            Questions we <Scribbled><Em>always</Em></Scribbled> get.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text3)' }}>
            Still have questions?{' '}
            <a href="https://wa.me/917892718642" target="_blank" rel="noreferrer"
              style={{ color: 'var(--green)', fontWeight: 600, textDecoration: 'none' }}
              onMouseEnter={e => e.target.style.textDecoration = 'underline'}
              onMouseLeave={e => e.target.style.textDecoration = 'none'}>
              Chat with us on WhatsApp
            </a>
          </p>
        </motion.div>

        <div>
          {FAQS.map((faq, i) => <Item key={faq.q} faq={faq} index={i} />)}
        </div>
      </div>
    </section>
  )
}
