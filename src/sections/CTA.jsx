import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section style={{ padding: '80px 32px', background: 'white', borderTop: '1px solid var(--border)' }}>
      <motion.div ref={ref}
        initial={{ y: 24, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: 820, margin: '0 auto',
          background: 'linear-gradient(135deg, #0f1a12 0%, #0a0f0b 100%)',
          borderRadius: 28, padding: '64px 48px', textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
        {/* Green top accent */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 180, height: 3, background: 'var(--green)', borderRadius: '0 0 6px 6px' }} />

        <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20 }}>
          Ready to modernize?
        </p>
        <h2 style={{
          fontFamily: 'Outfit', fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 900, letterSpacing: '-2px', color: 'white',
          marginBottom: 16, lineHeight: 1.1,
        }}>
          Your restaurant, running smarter<br />
          <span style={{ color: 'var(--green)' }}>from day one.</span>
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 36, maxWidth: 420, margin: '0 auto 36px' }}>
          Get in touch and we'll set up your restaurant on BillByte — usually done the same day.
        </p>
        <div className="cta-btns" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/917892718642" target="_blank" rel="noreferrer" style={{
            padding: '14px 32px', borderRadius: 10, fontSize: 15, fontWeight: 700,
            fontFamily: 'Outfit', background: 'var(--green)', color: 'white',
            textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 4px 20px rgba(22,163,74,0.4)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--green2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.transform = 'translateY(0)' }}>
            Get in touch →
          </a>
          <a href="https://wa.me/917892718642" target="_blank" rel="noreferrer" style={{
            padding: '14px 32px', borderRadius: 10, fontSize: 15, fontWeight: 600,
            color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
            border: '1.5px solid rgba(255,255,255,0.15)', background: 'transparent', transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = 'white' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}>
            Talk to us on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  )
}
